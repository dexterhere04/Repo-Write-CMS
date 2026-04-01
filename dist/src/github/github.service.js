"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const openai_1 = __importDefault(require("openai"));
let GithubService = class GithubService {
    prisma;
    configService;
    openai;
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
        const apiKey = this.configService.get('aiApiKey');
        const baseURL = this.configService.get('aiBaseURL');
        this.openai = new openai_1.default({
            baseURL: baseURL || 'https://integrate.api.nvidia.com/v1',
            apiKey: apiKey || '',
        });
    }
    async getUserGithubToken(userId) {
        const account = await this.prisma.oAuthAccount.findFirst({
            where: {
                userId,
                provider: 'github',
            },
        });
        return account?.accessToken ?? null;
    }
    async isUserGithubUser(userId) {
        const account = await this.prisma.oAuthAccount.findFirst({
            where: {
                userId,
                provider: 'github',
            },
        });
        return !!account;
    }
    async fetchUserRepos(token) {
        const res = await fetch('https://api.github.com/user/repos?per_page=100&sort=updated', {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github+json',
                'User-Agent': 'Repo-Write-CMS',
            },
        });
        if (!res.ok) {
            const text = await res.text();
            throw new Error(`GitHub API error: ${res.status} - ${text}`);
        }
        const repos = (await res.json());
        return repos.map((r) => ({
            id: r.id,
            full_name: r.full_name,
            name: r.name,
            description: r.description,
            private: r.private,
        }));
    }
    async fetchPublicRepos(username) {
        const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated&type=public`, {
            headers: {
                Accept: 'application/vnd.github+json',
                'User-Agent': 'Repo-Write-CMS',
            },
        });
        if (!res.ok) {
            if (res.status === 404) {
                throw new Error(`GitHub user "${username}" not found`);
            }
            const text = await res.text();
            throw new Error(`GitHub API error: ${res.status} - ${text}`);
        }
        const repos = (await res.json());
        return repos.map((r) => ({
            id: r.id,
            full_name: r.full_name,
            name: r.name,
            description: r.description,
            private: r.private,
        }));
    }
    async fetchReadme(token, fullName) {
        const headers = {
            Accept: 'application/vnd.github.v3.raw',
            'User-Agent': 'Repo-Write-CMS',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const res = await fetch(`https://api.github.com/repos/${fullName}/readme?ref=HEAD`, { headers });
        if (!res.ok) {
            throw new Error(`Failed to fetch README: ${res.status}`);
        }
        return res.text();
    }
    async analyzeRepo(token, fullName) {
        const headers = {
            Accept: 'application/vnd.github+json',
            'User-Agent': 'Repo-Write-CMS',
            'X-GitHub-Api-Version': '2022-11-28',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        let readme = null;
        let packageJson = null;
        let structure = [];
        let commits = [];
        const sourceFiles = [];
        let branch = 'main';
        try {
            const repoRes = await fetch(`https://api.github.com/repos/${fullName}`, {
                headers,
            });
            if (repoRes.ok) {
                const repoData = (await repoRes.json());
                if (repoData.default_branch) {
                    branch = repoData.default_branch;
                }
            }
        }
        catch {
        }
        try {
            const readmeHeaders = { ...headers };
            readmeHeaders['Accept'] = 'application/vnd.github.v3.raw';
            const readmeRawRes = await fetch(`https://api.github.com/repos/${fullName}/readme?ref=${branch}`, { headers: readmeHeaders });
            if (readmeRawRes.ok) {
                readme = await readmeRawRes.text();
            }
        }
        catch {
        }
        try {
            const pkgRes = await fetch(`https://api.github.com/repos/${fullName}/contents/package.json?ref=${branch}`, { headers });
            if (pkgRes.ok) {
                const pkgData = (await pkgRes.json());
                if (pkgData.content) {
                    packageJson = JSON.parse(Buffer.from(pkgData.content, 'base64').toString('utf-8'));
                }
            }
        }
        catch {
        }
        try {
            const treeRes = await fetch(`https://api.github.com/repos/${fullName}/git/trees/${branch}?recursive=1`, { headers });
            if (treeRes.ok) {
                const treeData = (await treeRes.json());
                if (treeData.tree) {
                    structure = treeData.tree.slice(0, 200).map((item) => item.path);
                    const keyFiles = this.identifyKeyFiles(structure);
                    for (const filePath of keyFiles) {
                        try {
                            const fileRes = await fetch(`https://api.github.com/repos/${fullName}/contents/${encodeURIComponent(filePath)}?ref=${branch}`, { headers });
                            if (fileRes.ok) {
                                const fileData = (await fileRes.json());
                                if (fileData.content) {
                                    const content = Buffer.from(fileData.content, 'base64').toString('utf-8');
                                    sourceFiles.push({
                                        path: filePath,
                                        content: content.slice(0, 5000),
                                    });
                                }
                            }
                        }
                        catch {
                        }
                    }
                }
            }
        }
        catch {
        }
        try {
            const commitsRes = await fetch(`https://api.github.com/repos/${fullName}/commits?per_page=50&sha=${branch}`, { headers });
            if (commitsRes.ok) {
                const commitsData = (await commitsRes.json());
                commits = commitsData.map((c) => ({
                    sha: c.sha,
                    message: c.commit.message.split('\n')[0],
                    date: c.commit.author.date,
                    author: c.commit.author.name,
                }));
            }
        }
        catch {
        }
        const techStack = this.detectTechStack(packageJson, structure);
        return { readme, packageJson, techStack, structure, commits, sourceFiles };
    }
    identifyKeyFiles(structure) {
        const keyFiles = [];
        const seen = new Set();
        const priorityPatterns = [
            /^src\/index\.(js|ts|tsx|jsx|dart)$/,
            /^src\/main\.(js|ts|tsx|jsx|dart)$/,
            /^src\/app\.(js|ts|tsx|jsx|dart)$/,
            /^src\/server\.(js|ts|tsx|jsx)$/,
            /^src\/client\.(js|ts|tsx|jsx)$/,
            /^src\/App\.(js|ts|tsx|jsx)$/,
            /^lib\/main\.(dart|js|ts)$/,
            /^lib\/providers\.(dart|js|ts)$/,
            /^lib\/models\//,
            /^lib\/repositories\//,
            /^lib\/widgets\//,
            /^lib\/screens\//,
            /^lib\/services\//,
            /^lib\/blocs?\//,
            /^lib\/screens\//,
            /^index\.(js|ts|tsx|jsx|dart)$/,
            /^main\.(js|ts|tsx|jsx|dart)$/,
            /^app\.(js|ts|tsx|jsx)$/,
            /^server\.(js|ts|tsx|jsx)$/,
            /^api\/[^/]+\.(js|ts)$/,
            /^routes\/[^/]+\.(js|ts)$/,
            /^controllers\/[^/]+\.(js|ts)$/,
            /^services\/[^/]+\.(js|ts)$/,
            /^lib\/[^/]+\.(js|ts|dart)$/,
            /^utils\/[^/]+\.(js|ts)$/,
            /^helpers\/[^/]+\.(js|ts)$/,
            /^app\//,
            /^pages\//,
            /^src\/api\//,
            /^src\/routes\//,
            /^src\/controllers\//,
            /^src\/services\//,
            /^src\/components\//,
            /^src\/lib\//,
            /^src\/utils\//,
            /^src\/models\//,
            /^src\/hooks\//,
            /^lib\/core\//,
            /^lib\/data\//,
            /^lib\/presentation\//,
            /^lib\/providers\//,
            /^lib\/[^/]+\//,
        ];
        for (const pattern of priorityPatterns) {
            for (const file of structure) {
                if (pattern.test(file) && !seen.has(file)) {
                    keyFiles.push(file);
                    seen.add(file);
                    if (keyFiles.length >= 10)
                        break;
                }
            }
            if (keyFiles.length >= 10)
                break;
        }
        const sourceExtensions = [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.py',
            '.go',
            '.rs',
            '.java',
            '.dart',
        ];
        for (const file of structure) {
            if (sourceExtensions.some((ext) => file.endsWith(ext)) &&
                !seen.has(file) &&
                keyFiles.length < 10) {
                keyFiles.push(file);
                seen.add(file);
            }
        }
        return keyFiles.slice(0, 10);
    }
    detectTechStack(packageJson, structure) {
        const tech = new Set();
        if (packageJson) {
            const deps = packageJson.dependencies || {};
            const devDeps = packageJson.devDependencies || {};
            const allDeps = { ...deps, ...devDeps };
            const techMap = {
                '@nestjs/core': 'NestJS',
                express: 'Express',
                fastify: 'Fastify',
                next: 'Next.js',
                react: 'React',
                'react-dom': 'React',
                vue: 'Vue',
                svelte: 'Svelte',
                '@angular/core': 'Angular',
                '@reduxjs/toolkit': 'Redux',
                zustand: 'Zustand',
                prisma: 'Prisma',
                mongoose: 'Mongoose',
                sequelize: 'Sequelize',
                typeorm: 'TypeORM',
                tailwindcss: 'Tailwind CSS',
                'styled-components': 'Styled Components',
                '@emotion/react': 'Emotion',
                axios: 'Axios',
                'socket.io': 'Socket.io',
                graphql: 'GraphQL',
                trpc: 'tRPC',
                typescript: 'TypeScript',
                jest: 'Jest',
                vitest: 'Vitest',
                playwright: 'Playwright',
                cypress: 'Cypress',
                docker: 'Docker',
                vercel: 'Vercel',
                aws: 'AWS',
                firebase: 'Firebase',
                openai: 'OpenAI',
                langchain: 'LangChain',
                huggingface: 'Hugging Face',
                pinecone: 'Pinecone',
                redis: 'Redis',
                postgres: 'PostgreSQL',
                mysql: 'MySQL',
                mongodb: 'MongoDB',
            };
            for (const [pkg, name] of Object.entries(techMap)) {
                if (allDeps[pkg]) {
                    tech.add(name);
                }
            }
            if (packageJson.engines) {
                const engines = packageJson.engines;
                if (engines.node) {
                    tech.add(`Node.js ${engines.node}`);
                }
            }
        }
        for (const file of structure) {
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                tech.add('JSX/TSX');
            }
            if (file.endsWith('.py')) {
                tech.add('Python');
            }
            if (file.endsWith('.go')) {
                tech.add('Go');
            }
            if (file.endsWith('.rs')) {
                tech.add('Rust');
            }
            if (file.endsWith('.java')) {
                tech.add('Java');
            }
            if (file.endsWith('.cs')) {
                tech.add('C#');
            }
            if (file.includes('Dockerfile') || file.endsWith('.dockerfile')) {
                tech.add('Docker');
            }
            if (file.endsWith('.gradle') || file.endsWith('.gradle.kts')) {
                tech.add('Gradle');
            }
            if (file.endsWith('pom.xml')) {
                tech.add('Maven');
            }
            if (file.endsWith('.swift')) {
                tech.add('Swift');
            }
            if (file.endsWith('.kt')) {
                tech.add('Kotlin');
            }
            if (file.endsWith('.dart')) {
                tech.add('Dart');
            }
            if (structure.some((f) => f.includes('pubspec.yaml'))) {
                tech.add('Flutter');
            }
        }
        return Array.from(tech);
    }
    async generateAIBlog(analysis, repoName, repoFullName, description) {
        const systemPrompt = `You are a professional technical writer and developer advocate specializing in creating compelling blog posts about software projects. Your writing is:

- Clear, concise, and accessible to both technical and semi-technical readers
- Structured with proper markdown formatting (headings, lists, code blocks)
- Professional without being corporate or dry
- Focused on telling the story of what the project does based on ACTUAL CODE ANALYSIS
- Highlighting specific features, technical decisions, and implementation details found in the code
- ALWAYS reference specific functions, classes, or patterns you see in the source code

IMPORTANT: You must analyze the provided source code and write about what the code ACTUALLY DOES. Do NOT write generic descriptions. Every claim about functionality should be traceable to the actual code.`;
        const commitSummary = this.summarizeCommits(analysis.commits);
        const techStack = analysis.techStack.join(', ') || 'various technologies';
        const readmeContent = analysis.readme
            ? this.sanitizeReadme(analysis.readme)
            : 'No README available.';
        const projectStructure = this.describeStructure(analysis.structure);
        const sourceCode = this.formatSourceFiles(analysis.sourceFiles);
        const userPrompt = `Analyze the GitHub repository "${repoFullName}" and create a detailed, accurate blog post based on ACTUAL CODE ANALYSIS.

## Repository Information
- **Name**: ${repoName}
- **Description**: ${description || 'No description provided'}
- **Tech Stack**: ${techStack}

## README Content
${readmeContent.slice(0, 4000)}

## Project Structure (key directories and files)
${projectStructure}

## SOURCE CODE (Key files - ANALYZE THESE CAREFULLY)
${sourceCode}

## Recent Commit History (last 50 commits)
${commitSummary}

## Requirements for the blog post:

1. **Title**: Create a compelling, professional title that reflects what the code actually does. Examples based on real features: "Real-time Heart Rate Monitoring with WebSocket Integration", "Building a REST API with Express and JWT Authentication"

2. **Summary**: Write a 1-2 sentence summary based on actual code functionality for SEO.

3. **Body**: Write a complete blog post in markdown format with:
   - An engaging introduction based on what the code ACTUALLY does
   - Clear sections using ## and ### headings
   - Specific descriptions of features and functionality found in the code (quote actual function names, class names, patterns)
   - Code blocks showing actual implementation snippets from the source code (use proper language hints)
   - Bullet points for actual features discovered in the code
   - A "Getting Started" or "Installation" section (use commands from package.json scripts or README if available)
   - A conclusion

4. **Slug**: Generate a URL-friendly slug based on actual functionality (lowercase, hyphens only, max 60 chars)

## Output Format
Return ONLY a JSON object with this exact structure:
{
  "title": "Your blog post title here",
  "summary": "1-2 sentence summary for SEO",
  "slug": "url-friendly-slug",
  "body": "Complete markdown blog post content"
}

Do not include any text outside the JSON object. The JSON must be valid and parseable.`;
        try {
            const completion = await this.openai.chat.completions.create({
                model: 'mistralai/devstral-2-123b-instruct-2512',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt },
                ],
                temperature: 0.15,
                top_p: 0.95,
                max_tokens: 8192,
                seed: 42,
            });
            const content = completion.choices[0]?.message?.content;
            if (!content) {
                throw new Error('AI returned empty response');
            }
            const cleanedContent = content
                .trim()
                .replace(/^```json\n?/, '')
                .replace(/\n?```$/, '');
            const parsed = JSON.parse(cleanedContent);
            if (!parsed.title || !parsed.body || !parsed.summary || !parsed.slug) {
                throw new Error('AI response missing required fields');
            }
            return {
                title: parsed.title,
                body: parsed.body,
                summary: parsed.summary,
                slug: parsed.slug,
            };
        }
        catch (error) {
            if (error instanceof SyntaxError) {
                throw new Error('Failed to parse AI response. Please try again.');
            }
            throw error;
        }
    }
    summarizeCommits(commits) {
        if (commits.length === 0) {
            return 'No commit history available.';
        }
        const firstCommit = commits[commits.length - 1];
        const lastCommit = commits[0];
        const commitList = commits
            .slice(0, 30)
            .map((c) => `- [${c.sha.slice(0, 7)}] ${c.message} (${c.author}, ${new Date(c.date).toLocaleDateString()})`)
            .join('\n');
        return `Repository spans from ${this.formatDate(firstCommit.date)} to ${this.formatDate(lastCommit.date)}.
Total commits analyzed: ${commits.length}

Recent commits:
${commitList}`;
    }
    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }
    sanitizeReadme(readme) {
        return readme
            .replace(/^<!--[\s\S]*?-->\s*$/m, '')
            .replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, (match) => {
            const imgMatch = match.match(/!\[[^\]]*\]\(([^)]*)\)/);
            if (imgMatch)
                return `[Image: ${imgMatch[1]}]`;
            return match;
        })
            .replace(/\[([^\]]*)\]\([^)]*\.md\)/g, '$1')
            .trim();
    }
    describeStructure(structure) {
        const dirs = {};
        for (const item of structure.slice(0, 100)) {
            const parts = item.split('/');
            if (parts.length >= 2) {
                const parent = parts[0];
                const child = parts.slice(1).join('/');
                if (!dirs[parent]) {
                    dirs[parent] = new Set();
                }
                if (child && !child.includes('/')) {
                    dirs[parent].add(child);
                }
            }
        }
        const importantDirs = [
            'src',
            'lib',
            'components',
            'pages',
            'app',
            'api',
            'routes',
            'controllers',
            'services',
            'models',
            'utils',
            'hooks',
            'assets',
            'public',
            'static',
            'config',
            'docs',
            'tests',
            '__tests__',
            'dist',
            'build',
            'cmd',
            'internal',
            'pkg',
            'cmd',
        ];
        const lines = [];
        for (const [dir, files] of Object.entries(dirs)) {
            if (importantDirs.includes(dir) || dir.startsWith('.')) {
                continue;
            }
            const fileList = Array.from(files).slice(0, 5);
            if (fileList.length > 0) {
                lines.push(`${dir}/: ${fileList.join(', ')}${files.size > 5 ? '...' : ''}`);
            }
        }
        return lines.length > 0 ? lines.join('\n') : 'Standard project structure';
    }
    formatSourceFiles(sourceFiles) {
        if (sourceFiles.length === 0) {
            return 'No source files available for analysis.';
        }
        return sourceFiles
            .map((file) => {
            const ext = file.path.split('.').pop() || '';
            const lang = this.getLanguageFromExtension(ext);
            return `=== FILE: ${file.path} ===\n\`\`\`${lang}\n${file.content}\n\`\`\`\n`;
        })
            .join('\n');
    }
    getLanguageFromExtension(ext) {
        const langMap = {
            ts: 'typescript',
            tsx: 'typescript',
            js: 'javascript',
            jsx: 'javascript',
            py: 'python',
            go: 'go',
            rs: 'rust',
            java: 'java',
            cs: 'csharp',
            rb: 'ruby',
            php: 'php',
            swift: 'swift',
            kt: 'kotlin',
            dart: 'dart',
            scala: 'scala',
            html: 'html',
            css: 'css',
            scss: 'scss',
            json: 'json',
            yaml: 'yaml',
            yml: 'yaml',
            md: 'markdown',
            sql: 'sql',
            sh: 'bash',
            dockerfile: 'dockerfile',
        };
        return langMap[ext.toLowerCase()] || 'text';
    }
    generateSlug(repoName) {
        return repoName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 60);
    }
};
exports.GithubService = GithubService;
exports.GithubService = GithubService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], GithubService);
//# sourceMappingURL=github.service.js.map