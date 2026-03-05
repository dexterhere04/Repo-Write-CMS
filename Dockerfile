FROM node:22-alpine AS builder

WORKDIR /app

ARG NPM_VERSION=11.11.0
RUN npm install -g npm@${NPM_VERSION}
RUN npm config set registry https://registry.npmjs.org/ && npm config set replace-registry-host always

COPY package*.json ./
RUN npm install --ignore-scripts

COPY prisma ./prisma
COPY prisma.config.ts ./
RUN npx prisma generate

COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY src ./src

RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

ARG NPM_VERSION=11.11.0
RUN npm install -g npm@${NPM_VERSION}
RUN npm config set registry https://registry.npmjs.org/ && npm config set replace-registry-host always

COPY package*.json ./
RUN npm install --omit=dev --ignore-scripts

COPY prisma ./prisma
COPY prisma.config.ts ./
RUN npx prisma generate

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/src/main"]