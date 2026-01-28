# API Test Script for Repo-Write-CMS

This shell script tests all API endpoints of the Repo-Write-CMS application using curl commands with comprehensive mock data.

## Prerequisites

1. **jq** - For JSON parsing in the script

   ```bash
   # Ubuntu/Debian
   sudo apt-get install jq

   # macOS
   brew install jq

   # Or download from https://stedolan.github.io/jq/download/
   ```

2. **Running Server** - The CMS application should be running
   ```bash
   npm run start:dev
   # Default: http://localhost:3000
   ```

## Usage

```bash
./test_api.sh [base_url] [auth_token]
```

### Arguments

- `base_url` (optional): Base URL of the API. Defaults to `http://localhost:3000`
- `auth_token` (optional): JWT token for authenticated requests. If not provided, script will attempt to register and login to get a token

### Examples

```bash
# Basic usage (will register a user and get token)
./test_api.sh

# Custom server URL
./test_api.sh http://localhost:8080

# With existing token
./test_api.sh http://localhost:3000 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyLWlkIn0.example

# Production server
./test_api.sh https://api.yourcms.com
```

## Endpoints Tested

### App Endpoints (Public)

- `GET /` - Root endpoint
- `GET /health` - Health check

### Auth Endpoints

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/github` - GitHub OAuth redirect
- `GET /auth/github/callback` - GitHub OAuth callback

### Content Endpoints

- `POST /content` - Create content (draft)
- `GET /content/slug/:slug` - Get public content by slug
- `PATCH /content/:id` - Update content
- `DELETE /content/:id` - Soft delete content
- `POST /content/:id/publish` - Publish/unpublish content
- `POST /content/:id/visibility` - Set content visibility

## Mock Data Used

The script uses comprehensive mock data covering all scenarios:

### User Registration/Login

- Valid user with proper email format
- Invalid credentials
- Duplicate emails
- Invalid email formats
- Password validation failures

### Content Creation/Update

- All content types: POST, PAGE, README, CHANGELOG
- All optional fields: SEO, media, slugs
- Minimal content (required fields only)
- Invalid enum values
- Field length validation

### Visibility & Status

- All visibility levels: PUBLIC, PRIVATE, UNLISTED
- Publish/unpublish operations

## Test Scenarios Covered

✅ **Happy Path Testing**

- User registration and login flow
- Content creation with all fields
- Content updates and retrieval
- Publishing workflow

✅ **Error Handling**

- Invalid credentials
- Missing required fields
- Invalid data types
- Field validation (length, format)

✅ **Authorization Testing**

- Protected endpoints without token
- Ownership validation
- Invalid/expired tokens

✅ **Edge Cases**

- Non-existent resources
- Duplicate resources
- Invalid JSON payloads

## Expected HTTP Status Codes

| Scenario                   | Expected Status |
| -------------------------- | --------------- |
| Success (GET)              | 200             |
| Success (POST)             | 201             |
| Success (PUT/PATCH/DELETE) | 200             |
| Validation Error           | 400             |
| Unauthorized               | 401             |
| Forbidden                  | 403             |
| Not Found                  | 404             |
| Conflict                   | 409             |

## Script Output

The script provides detailed output for each request:

```
========================================
[INFO] Testing: GET /health
[INFO] Request Data:
[INFO] Headers:

Response Body:
{
  "status": "healthy"
}

Response Details:
HTTP Status: 200
Time: 0.123s
[SUCCESS] Status code matches expectation (200)
```

## Color Coding

- **BLUE**: Information messages
- **GREEN**: Success indicators
- **YELLOW**: Warnings and metadata
- **RED**: Error messages

## Troubleshooting

### Common Issues

1. **Connection Refused**

   ```bash
   # Make sure server is running
   npm run start:dev

   # Check port
   lsof -i :3000
   ```

2. **jq: command not found**

   ```bash
   # Install jq
   sudo apt-get install jq  # Ubuntu/Debian
   brew install jq              # macOS
   ```

3. **Permission Denied**

   ```bash
   # Make script executable
   chmod +x test_api.sh
   ```

4. **Authentication Failures**
   - Check if user already exists in database
   - Verify email uniqueness
   - Check password requirements (min 8 characters)

### Debug Mode

For debugging, you can modify the script to show full curl commands:

```bash
# In make_request function, replace the eval line with:
echo "DEBUG: $curl_cmd"
# Then run the command manually
```

### Database Issues

If using a real database, ensure:

1. Database server is running
2. Connection string in `.env` is correct
3. Database exists and schema is applied

```bash
# Check database connection
npx prisma studio

# Apply migrations
npx prisma migrate dev
```

## Integration with CI/CD

This script can be integrated into CI/CD pipelines:

```yaml
# GitHub Actions example
- name: Test API
  run: |
    npm run start:dev &
    sleep 10
    ./test_api.sh http://localhost:3000
```

## Customization

You can modify the script to:

1. **Add more test cases** - Duplicate the `make_request` calls with new data
2. **Change default values** - Edit the variables at the top of the script
3. **Add environment support** - Create multiple config sections
4. **Export results** - Save responses to files for analysis

## Contributing

When adding new endpoints to the CMS:

1. Update this script with the new endpoint
2. Add appropriate test data
3. Include both positive and negative test cases
4. Update this documentation

---

**Note**: This script is designed for testing and development. Some endpoints require proper OAuth setup and database configuration to work correctly.
