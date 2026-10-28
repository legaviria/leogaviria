/**
 * Script de Compilación y Verificación de Producción (Render / Local)
 * Valida la existencia e integridad de hojas de estilo CSS, scripts JS,
 * iconos, widgets interactivos y rutas relativas del proyecto.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function assertFileExists(relPath, description) {
  const fullPath = path.join(ROOT, relPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`[ERROR] Archivo faltante (${description}): ${relPath}`);
  }
  const stat = fs.statSync(fullPath);
  if (stat.size === 0) {
    throw new Error(`[ERROR] Archivo vacío (${description}): ${relPath}`);
  }
  return stat.size;
}

function main() {
  console.log('==============================================================');
  console.log('  LEO GAVIRIA | COMPILACIÓN Y VALIDACIÓN DE PRODUCCIÓN');
  console.log('==============================================================');

  // 1. Verificar archivos principales
  const coreFiles = [
    ['index.html', 'Documento raíz HTML'],
    ['favicon.svg', 'Icono vectorial principal'],
    ['src/css/tailwind.css', 'Hoja de utilidades Tailwind compilada estáticamente'],
    ['src/css/style.css', 'Sistema de diseño y temas (Oscuro/Claro)'],
    ['src/js/bundle.js', 'Bundle principal de producción'],
    ['src/js/app.js', 'Módulo principal ES'],
    ['src/js/utils/storage.js', 'Gestor de estado y tema'],
    ['src/js/lib/skulpt.min.js', 'Motor Python Skulpt'],
    ['src/js/lib/skulpt-stdlib.js', 'Librería estándar Skulpt']
  ];

  for (const [rel, desc] of coreFiles) {
    const size = assertFileExists(rel, desc);
    console.log(`[OK] ${rel} (${(size / 1024).toFixed(1)} KB) - ${desc}`);
  }

  // 2. Verificar referencias en index.html
  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const linkRegex = /<(?:link|script)[^>]+(?:href|src)="([^"]+)"/g;
  let match;
  let localRefs = 0;
  while ((match = linkRegex.exec(indexHtml)) !== null) {
    const ref = match[1];
    if (!ref.startsWith('http://') && !ref.startsWith('https://') && !ref.startsWith('data:')) {
      assertFileExists(ref, `Referencia en index.html`);
      localRefs++;
    }
  }
  console.log(`[OK] ${localRefs} recursos estáticos locales verificados en index.html.`);

  // 3. Verificar widgets referenciados en bundle.js
  const bundleCode = fs.readFileSync(path.join(ROOT, 'src/js/bundle.js'), 'utf8');
  const widgetRegex = /widgets\/[a-zA-Z0-9_/-]+\.html/g;
  const widgets = new Set(bundleCode.match(widgetRegex) || []);
  for (const w of widgets) {
    assertFileExists(w, 'Widget interactivo');
  }
  console.log(`[OK] ${widgets.size} widgets interactivos verificados sin errores de mayúsculas/minúsculas.`);

  console.log('==============================================================');
  console.log('  COMPILACIÓN DE PRODUCCIÓN EXITOSA (0 ERRORES)');
  console.log('==============================================================');
}

try {
  main();
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
