const { build } = require('vite');

async function buildProject() {
  try {
    console.log('Starting build...');
    await build({
      // Vite build options
      build: {
        outDir: 'dist',
        emptyOutDir: true
      }
    });
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildProject();
