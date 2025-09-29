#!/bin/bash
# Vercel build script
echo "Starting build process..."

# Install dependencies
npm install

# Build the project
npm run build

echo "Build completed successfully!"
