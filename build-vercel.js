#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('Starting Vercel build process...');

try {
  // Change to the project directory
  process.chdir(__dirname);
  
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Build the project using npx
  console.log('Building project...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
