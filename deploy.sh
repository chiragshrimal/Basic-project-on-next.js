#!/bin/bash

# Exit on any error
set -e

# Load NVM (needed because GitHub Actions uses non-interactive SSH)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Go to the project directory
cd /home/ubuntu/Basic-project-on-next.js

# Pull latest changes from main branch
git pull origin main

# Install dependencies
npm install

# Build the project
npm run build

# Start the application
npm run start