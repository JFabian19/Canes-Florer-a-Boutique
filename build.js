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

// Copiar carta.html
if (fs.existsSync(path.join(__dirname, 'carta.html'))) {
  fs.copyFileSync(path.join(__dirname, 'carta.html'), path.join(distDir, 'carta.html'));
}

// Copiar _redirects
if (fs.existsSync(path.join(__dirname, '_redirects'))) {
  fs.copyFileSync(path.join(__dirname, '_redirects'), path.join(distDir, '_redirects'));
}

// Copiar carpeta carta (rutas dedicadas como /carta/caj-8492/)
const cartaDir = path.join(__dirname, 'carta');
if (fs.existsSync(cartaDir)) {
  fs.cpSync(cartaDir, path.join(distDir, 'carta'), { recursive: true });
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
