#!/bin/bash

# Define color for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # Color Reset

# Step 1: Ensure the directory and schema.json exist
echo -e "${GREEN}Ensuring ./sanity/types/ directory and schema.json file exist...${NC}"
mkdir -p ./sanity/types
if [ ! -f ./sanity/types/schema.json ]; then
  echo "{}" > ./sanity/types/schema.json
  echo -e "${GREEN}Created schema.json${NC}"
else
  echo -e "${GREEN}schema.json already exists${NC}"
fi

# Step 2: Extract schema
echo -e "${GREEN}Extracting schema...${NC}"
npx sanity@latest schema extract --path ./sanity/types/schema.json
if [ $? -ne 0 ]; then
  echo -e "${RED}Schema extraction failed${NC}"
  exit 1
fi

# Step 3: Generate types
echo -e "${GREEN}Generating types...${NC}"
npx sanity@latest typegen generate
if [ $? -ne 0 ]; then
  echo -e "${RED}Type generation failed${NC}"
  exit 1
fi

echo -e "${GREEN}All tasks completed successfully!${NC}"