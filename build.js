const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Crear carpeta dist si no existe
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copiar index.html
if (fs.existsSync(path.join(__dirname, 'index.html'))) {
  fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(distDir, 'index.html'));
}

// Copiar carpeta css
const cssDir = path.join(__dirname, 'css');
if (fs.existsSync(cssDir)) {
  fs.cpSync(cssDir, path.join(distDir, 'css'), { recursive: true });
}

// Copiar carpeta js
const jsDir = path.join(__dirname, 'js');
if (fs.existsSync(jsDir)) {
  fs.cpSync(jsDir, path.join(distDir, 'js'), { recursive: true });
}

console.log('✅ Build completado con éxito: archivos copiados a dist/ para Cloudflare Pages');
