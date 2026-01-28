#!/bin/bash

# Repo-Write-CMS API Test Script
# This script tests all API endpoints with curl commands and mock data
# Usage: ./test_api.sh [base_url] [auth_token]
# Example: ./test_api.sh http://localhost:3000 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

set -e

# Configuration
BASE_URL="${1:-http://localhost:3000}"
AUTH_TOKEN="${2:-}"
API_BASE="${BASE_URL%/}/"  # Ensure exactly one trailing slash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to make HTTP requests and display results
make_request() {
    local method="$1"
    local endpoint="$2"
    local data="$3"
    local headers="$4"
    local expected_status="$5"
    
    echo -e "\n${BLUE}========================================${NC}"
    log_info "Testing: $method $endpoint"
    
    if [ -n "$data" ]; then
        log_info "Request Data: $data"
    fi
    
    if [ -n "$headers" ]; then
        log_info "Headers: $headers"
    fi
    
    # Curl command will be constructed directly in the response section
    
    # Execute request - run curl directly without eval to avoid quote issues
    local response
    if [ -n "$data" ]; then
        if [ -n "$headers" ]; then
            response=$(curl -s -w '\nHTTP Status: %{http_code}\nTime: %{time_total}s\n' -X "$method" -H "Content-Type: application/json" $headers -d "$data" "${API_BASE}${endpoint}")
        else
            response=$(curl -s -w '\nHTTP Status: %{http_code}\nTime: %{time_total}s\n' -X "$method" -H "Content-Type: application/json" -d "$data" "${API_BASE}${endpoint}")
        fi
    else
        if [ -n "$headers" ]; then
            response=$(curl -s -w '\nHTTP Status: %{http_code}\nTime: %{time_total}s\n' -X "$method" $headers "${API_BASE}${endpoint}")
        else
            response=$(curl -s -w '\nHTTP Status: %{http_code}\nTime: %{time_total}s\n' -X "$method" "${API_BASE}${endpoint}")
        fi
    fi
    local http_status=$(echo "$response" | grep "HTTP Status:" | awk '{print $3}')
    local time_taken=$(echo "$response" | grep "Time:" | awk '{print $2}')
    local body=$(echo "$response" | sed '/HTTP Status:/d' | sed '/Time:/d')
    
    echo -e "\n${YELLOW}Response Body:${NC}"
    echo "$body" | jq '.' 2>/dev/null || echo "$body"
    
    echo -e "\n${YELLOW}Response Details:${NC}"
    echo "HTTP Status: $http_status"
    echo "Time: ${time_taken}s"
    
    # Check if status matches expectation
    if [ -n "$expected_status" ]; then
        if [ "$http_status" = "$expected_status" ]; then
            log_success "Status code matches expectation ($expected_status)"
        else
            log_error "Expected status $expected_status, got $http_status"
        fi
    fi
}

# Store created content IDs and tokens for use in subsequent tests
CONTENT_ID=""
USER_ID=""
REGISTERED_EMAIL=""

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Repo-Write-CMS API Test Script${NC}"
echo -e "${BLUE}========================================${NC}"
log_info "Testing against: $API_BASE"
echo -e "\n${YELLOW}Note: This script tests all endpoints with mock data.${NC}"
echo -e "${YELLOW}Some endpoints will fail without proper setup/auth.${NC}\n"

# Wait for user to confirm (skip when not interactive)
if [ -t 0 ]; then
    read -p "Press Enter to start API tests..."
fi

# ============================================
# APP ENDPOINTS (Public)
# ============================================

echo -e "\n${GREEN}=== APP ENDPOINTS (Public) ===${NC}"

# GET /
make_request "GET" "" "" "" "200"

# GET /health
make_request "GET" "health" "" "" "200"

# ============================================
# AUTH ENDPOINTS 
# ============================================

echo -e "\n${GREEN}=== AUTH ENDPOINTS ===${NC}"

# POST /auth/register
log_info "Testing user registration"
register_data='{
  "name": "Test User",
  "email": "testuser@example.com",
  "password": "password123"
}'
make_request "POST" "auth/register" "$register_data" "" "201" || true

# Store the registered email for later use
REGISTERED_EMAIL="testuser@example.com"

# POST /auth/login
log_info "Testing user login"
login_data='{
  "identifier": "testuser@example.com",
  "password": "password123"
}'
login_response=$(curl -s -X POST -H "Content-Type: application/json" -d "$login_data" "$API_BASE/auth/login")
AUTH_TOKEN=$(echo "$login_response" | jq -r '.accessToken // empty' 2>/dev/null)

if [ -n "$AUTH_TOKEN" ] && [ "$AUTH_TOKEN" != "null" ]; then
    log_success "Successfully obtained auth token: ${AUTH_TOKEN:0:20}..."
else
    log_warning "Could not extract auth token from response"
    # Use a dummy token for testing other endpoints
    AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyLWlkIn0.dummy-token"
fi

# POST /auth/login with username
log_info "Testing login with username instead of email"
login_username_data='{
  "identifier": "testuser",
  "password": "password123"
}'
make_request "POST" "auth/login" "$login_username_data" "" "200" || true

# Invalid login attempts
log_info "Testing invalid login scenarios"

# Wrong password
wrong_password_data='{
  "identifier": "testuser@example.com",
  "password": "wrongpassword"
}'
make_request "POST" "auth/login" "$wrong_password_data" "" "401" || true

# Non-existent user
nonexistent_user_data='{
  "identifier": "nonexistent@example.com",
  "password": "password123"
}'
make_request "POST" "auth/login" "$nonexistent_user_data" "" "401" || true

# Invalid registration data
log_info "Testing invalid registration scenarios"

# Duplicate email
duplicate_email_data='{
  "name": "Another User",
  "email": "testuser@example.com",
  "password": "password123"
}'
make_request "POST" "auth/register" "$duplicate_email_data" "" "400" || true

# Invalid email format
invalid_email_data='{
  "name": "Test User",
  "email": "invalid-email",
  "password": "password123"
}'
make_request "POST" "auth/register" "$invalid_email_data" "" "400" || true

# Password too short
short_password_data='{
  "name": "Test User",
  "email": "short@example.com",
  "password": "123"
}'
make_request "POST" "auth/register" "$short_password_data" "" "400" || true

# GET /auth/github (This will redirect)
log_info "Testing GitHub OAuth redirect (expect redirect)"
make_request "GET" "auth/github" "" "" "302" || true

# GET /auth/github/callback (This needs proper OAuth setup)
log_info "Testing GitHub OAuth callback (requires OAuth setup)"
make_request "GET" "auth/github/callback" "" "" "401" || true

# ============================================
# CONTENT ENDPOINTS
# ============================================

echo -e "\n${GREEN}=== CONTENT ENDPOINTS ===${NC}"

# Prepare auth header for protected endpoints
AUTH_HEADER="-H 'Authorization: Bearer $AUTH_TOKEN'"

# POST /content (Create draft)
log_info "Testing content creation (draft)"
create_content_data='{
  "title": "My First Blog Post",
  "summary": "This is a summary of my first blog post",
  "body": "# My First Blog Post\n\nThis is the **content** of my first blog post.\n\n- Item 1\n- Item 2\n- Item 3",
  "type": "POST",
  "slug": "my-first-blog-post",
  "seoTitle": "My First Blog Post - SEO Title",
  "seoDescription": "This is a meta description for my first blog post",
  "canonicalUrl": "https://example.com/original-post",
  "coverImageUrl": "https://example.com/cover-image.jpg"
}'
content_response=$(curl -s -X POST -H "Content-Type: application/json" $AUTH_HEADER -d "$create_content_data" "$API_BASE/content")
CONTENT_ID=$(echo "$content_response" | jq -r '.id // empty' 2>/dev/null)

if [ -n "$CONTENT_ID" ] && [ "$CONTENT_ID" != "null" ]; then
    log_success "Created content with ID: $CONTENT_ID"
else
    log_warning "Could not extract content ID from response"
    # Use dummy ID for testing other endpoints
    CONTENT_ID="test-content-id"
fi

make_request "POST" "content" "$create_content_data" "$AUTH_HEADER" "201" || true

# Test creating different content types
log_info "Testing different content types"

# Create a PAGE
create_page_data='{
  "title": "About Us",
  "summary": "About our company",
  "body": "# About Us\n\nWe are a great company.",
  "type": "PAGE",
  "slug": "about-us"
}'
make_request "POST" "content" "$create_page_data" "$AUTH_HEADER" "201" || true

# Create a README
create_readme_data='{
  "title": "Project README",
  "summary": "Project documentation",
  "body": "# Project\n\nThis is a project README.",
  "type": "README"
}'
make_request "POST" "content" "$create_readme_data" "$AUTH_HEADER" "201" || true

# Test minimal content creation
minimal_content_data='{
  "title": "Minimal Post",
  "body": "Just some text",
  "type": "POST"
}'
make_request "POST" "content" "$minimal_content_data" "$AUTH_HEADER" "201" || true

# GET /content/slug/:slug (Public endpoint)
log_info "Testing public content retrieval by slug"
make_request "GET" "content/slug/my-first-blog-post" "" "" "200" || true

# Test non-existent slug
make_request "GET" "content/slug/non-existent-slug" "" "" "404" || true

# PATCH /content/:id (Update content)
log_info "Testing content update"
if [ -n "$CONTENT_ID" ]; then
    update_content_data='{
      "title": "Updated Blog Post Title",
      "summary": "Updated summary",
      "body": "# Updated Blog Post\n\nThis content has been **updated**.",
      "slug": "updated-slug",
      "seoTitle": "Updated SEO Title",
      "seoDescription": "Updated meta description"
    }'
    make_request "PATCH" "content/$CONTENT_ID" "$update_content_data" "$AUTH_HEADER" "200" || true
    
    # Test partial update
    partial_update_data='{
      "title": "Partially Updated Title"
    }'
    make_request "PATCH" "content/$CONTENT_ID" "$partial_update_data" "$AUTH_HEADER" "200" || true
    
    # Test updating without auth
    make_request "PATCH" "content/$CONTENT_ID" "$update_content_data" "" "401" || true
    
    # Test updating non-existent content
    make_request "PATCH" "content/non-existent-id" "$update_content_data" "$AUTH_HEADER" "404" || true
fi

# POST /content/:id/publish (Publish/unpublish content)
log_info "Testing content publish/unpublish"
if [ -n "$CONTENT_ID" ]; then
    # Publish content
    publish_data='{
      "publish": true
    }'
    make_request "POST" "content/$CONTENT_ID/publish" "$publish_data" "$AUTH_HEADER" "200" || true
    
    # Unpublish content
    unpublish_data='{
      "publish": false
    }'
    make_request "POST" "content/$CONTENT_ID/publish" "$unpublish_data" "$AUTH_HEADER" "200" || true
    
    # Test without auth
    make_request "POST" "content/$CONTENT_ID/publish" "$publish_data" "" "401" || true
fi

# POST /content/:id/visibility (Set content visibility)
log_info "Testing content visibility"
if [ -n "$CONTENT_ID" ]; then
    # Set to PUBLIC
    public_visibility_data='{
      "visibility": "PUBLIC"
    }'
    make_request "POST" "content/$CONTENT_ID/visibility" "$public_visibility_data" "$AUTH_HEADER" "200" || true
    
    # Set to PRIVATE
    private_visibility_data='{
      "visibility": "PRIVATE"
    }'
    make_request "POST" "content/$CONTENT_ID/visibility" "$private_visibility_data" "$AUTH_HEADER" "200" || true
    
    # Set to UNLISTED
    unlisted_visibility_data='{
      "visibility": "UNLISTED"
    }'
    make_request "POST" "content/$CONTENT_ID/visibility" "$unlisted_visibility_data" "$AUTH_HEADER" "200" || true
    
    # Test without auth
    make_request "POST" "content/$CONTENT_ID/visibility" "$public_visibility_data" "" "401" || true
fi

# DELETE /content/:id (Soft delete content)
log_info "Testing content soft delete"
if [ -n "$CONTENT_ID" ]; then
    make_request "DELETE" "content/$CONTENT_ID" "" "$AUTH_HEADER" "200" || true
    
    # Test deleting non-existent content
    make_request "DELETE" "content/non-existent-id" "" "$AUTH_HEADER" "404" || true
    
    # Test without auth
    make_request "DELETE" "content/$CONTENT_ID" "" "" "401" || true
fi

# ============================================
# ERROR SCENARIO TESTING
# ============================================

echo -e "\n${GREEN}=== ERROR SCENARIO TESTING ===${NC}"

# Test with invalid JSON
log_info "Testing invalid JSON payload"
invalid_json_data='{"title": "test", "type": "invalid_type"}'
make_request "POST" "content" "$invalid_json_data" "$AUTH_HEADER" "400" || true

# Test with missing required fields
log_info "Testing missing required fields"
missing_fields_data='{
  "summary": "Missing title and body"
}'
make_request "POST" "content" "$missing_fields_data" "$AUTH_HEADER" "400" || true

# Test with overly long fields
log_info "Testing field length validation"
long_title_data='{
  "title": "'"$(head -c 300 /dev/zero | tr '\0' 'a')"'",
  "body": "Test body",
  "type": "POST"
}'
make_request "POST" "content" "$long_title_data" "$AUTH_HEADER" "400" || true

# Test invalid enum values
log_info "Testing invalid enum values"
invalid_enum_data='{
  "title": "Test Post",
  "body": "Test body",
  "type": "INVALID_TYPE"
}'
make_request "POST" "content" "$invalid_enum_data" "$AUTH_HEADER" "400" || true

invalid_visibility_data='{
  "visibility": "INVALID_VISIBILITY"
}'
make_request "POST" "content/$CONTENT_ID/visibility" "$invalid_visibility_data" "$AUTH_HEADER" "400" || true

# ============================================
# PERFORMANCE TESTING
# ============================================

echo -e "\n${GREEN}=== PERFORMANCE TESTING ===${NC}"

log_info "Testing endpoint response times"

# Test multiple requests to check performance
for i in {1..5}; do
    log_info "Request $i: GET /health"
    make_request "GET" "health" "" "" "200"
done

# ============================================
# SUMMARY
# ============================================

echo -e "\n${BLUE}========================================${NC}"
echo -e "${GREEN}API Test Script Completed!${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "\n${YELLOW}Summary:${NC}"
echo -e "• Base URL: $API_BASE"
echo -e "• Auth Token: ${AUTH_TOKEN:0:20}${AUTH_TOKEN:+...}"
echo -e "• Created Content ID: $CONTENT_ID"
echo -e "• Registered Email: $REGISTERED_EMAIL"

echo -e "\n${YELLOW}Notes:${NC}"
echo -e "• Some endpoints may fail without proper database setup"
echo -e "• OAuth endpoints require GitHub app configuration"
echo -e "• Protected endpoints require valid authentication"
echo -e "• Check the responses above for detailed error information"

echo -e "\n${YELLOW}Next Steps:${NC}"
echo -e "1. Start the server: npm run start:dev"
echo -e "2. Run this script: ./test_api.sh"
echo -e "3. Check the server logs for any issues"
echo -e "4. Verify database operations if using real database"

echo -e "\n${GREEN}Done!${NC}"