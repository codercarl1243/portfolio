#!/bin/bash

# Define color for output
GREEN='\033[0;32m'    # success
RED='\033[1;31m'      # failure
PURPLE='\033[0;35m'   # action
NC='\033[0m'          # Reset color

# Arguments for paths
SCHEMA_PATH=${1:-"./sanity/types/schema.json"}
GENERATES_PATH=${2:-"./sanity/types/sanity.types.ts"}
PATH_TO_SEARCH=${3:-"./sanity/**/*.{ts,tsx,js,jsx}"}

# Step 1: Ensure the directory and schema.json exist
echo -e "${PURPLE}Ensuring $(dirname $SCHEMA_PATH) directory and schema.json file exist...${NC}"

mkdir -p "$(dirname "$SCHEMA_PATH")"

if [ ! -f "$SCHEMA_PATH" ]; then
  echo "{}" > "$SCHEMA_PATH"
  echo -e "${GREEN}Created schema.json at $SCHEMA_PATH${NC}"
else
  echo -e "${GREEN}schema.json already exists at $SCHEMA_PATH${NC}"
fi

# Step 2: Extract schema
echo -e "${PURPLE}Extracting schema to $SCHEMA_PATH...${NC}"
npx -y sanity@latest schema extract --path "$SCHEMA_PATH"
if [ $? -ne 0 ]; then
  echo -e "${RED}Schema extraction failed${NC}"
  exit 1
fi

# Step 3: Create sanity-typegen.json file
SANITY_TYPEGEN_CONFIG="$(dirname "$realpath")/sanity-typegen.json"
echo -e "${PURPLE}Creating sanity-typegen.json at $SANITY_TYPEGEN_CONFIG...${NC}"

cat <<EOL > "$SANITY_TYPEGEN_CONFIG"
{
  "path": "$PATH_TO_SEARCH",
  "schema": "$SCHEMA_PATH",
  "generates": "$GENERATES_PATH",
  "overloadClientMethods": true
}
EOL

echo -e "${GREEN}sanity-typegen.json created:${NC}"
cat "$SANITY_TYPEGEN_CONFIG"

# Step 4: Generate types
echo -e "${PURPLE}Generating types based on sanity-typegen.json...${NC}"
npx -y sanity@latest typegen generate
if [ $? -ne 0 ]; then
  echo -e "${RED}Type generation failed${NC}"
  exit 1
fi

echo -e "${GREEN}All tasks completed successfully!${NC}"
