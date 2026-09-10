# 📚 Guía de Extensión y Creación de Contenido - Leo Gaviria | Programación

Esta guía detalla cómo profesores, monitores y estudiantes pueden agregar nuevas unidades, animaciones interactivas, quizzes y lecciones completas a la plataforma educativa **Leo Gaviria | Programación** (Ruta Integral de 14 Unidades).

---

## 🏗️ 1. Arquitectura del Proyecto

```
leogaviria/
├── index.html                   # Interfaz principal (Navbar, Sidebar 14 unidades, Contenedor)
├── package.json                 # Configuración del proyecto
├── widgets/                     # Widgets y animaciones interactivas por materia
│   ├── programacion/            # Animaciones de Programación (Bubble, Quick, Merge, Big-O...)
│   └── tics/                    # Animaciones de Introducción a las TICS
├── src/
│   ├── css/
│   │   └── style.css            # Sistema de diseño, variables de tema y scrollbars
│   └── js/
│       ├── bundle.js            # Bundle autónomo para ejecución 100% offline
│       ├── app.js               # Orquestador y enrutador principal
│       ├── data/
│       │   ├── curriculum.js    # Plan de estudio maestro de 14 unidades
│       │   └── topics/          # Módulos de contenido temático agrupados por materia
│       │       ├── index.js     # Registro unificado y generador de plantillas
│       │       ├── programacion/
│       │       └── tics/
│       └── utils/
│           ├── storage.js       # Progreso en LocalStorage y temas
│           └── search.js        # Motor de búsqueda rápida (Ctrl+K)
```

---

## 📅 2. Cómo Modificar o Agregar Temas al Plan de 14 Unidades

El plan de estudios maestro reside en:
`src/js/data/curriculum.js`

Para añadir o editar un tema en una unidad determinada:

```javascript
// Ejemplo en src/js/data/curriculum.js
{
  id: "unidad-14",
  number: 14,
  title: "Unidad 14: Árboles Binarios de Búsqueda (BST) y Árboles AVL",
  shortTitle: "S14: BST & Árboles AVL",
  icon: "fa-tree",
  description: "Propiedad BST de búsqueda en O(h), auto-balanceo mediante rotaciones AVL.",
  topics: [
    {
      id: "arboles-avl-rotaciones",
      title: "14.3 Árboles AVL y Rotaciones (Simples y Dobles)",
      duration: "40 min",
      difficulty: "Avanzada",
      hasAnimation: true, // Si se activa, muestra la insignia "▶ Anim"
      widgetFile: "widgets/avl_rotations_visualizer.html",
      badge: "Animación Interactiva"
    }
  ]
}
```

---

## 🎨 3. Cómo Agregar una Nueva Animación Interactiva (Desde Google Colab)

En Google Colab, las animaciones interactivas se construyen usualmente usando cadenas de HTML/JS/CSS dentro de variables como:
```python
colab_widget = """
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  ...
</head>
<body>
  ...
</body>
</html>
"""
display(HTML(colab_widget))
```

### Pasos para integrarla a la plataforma:
1. **Copia el bloque HTML/CSS/JS** de la celda de Colab.
2. **Crea un archivo nuevo** en la carpeta `widgets/`:
   `widgets/mi_nueva_animacion.html`
3. **Pega el código HTML completo** en el archivo. Asegúrate de incluir:
   ```html
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
4. **Vincúlalo a tu tema** en `src/js/data/topics/tu_tema.js`:
   ```javascript
   sections: [
     {
       id: "codigo-y-animacion",
       title: "4. Código y Animación Interactiva",
       icon: "fa-play-circle",
       contentHtml: `<p>Visualiza el comportamiento del algoritmo...</p>`,
       widget: {
         file: "widgets/mi_nueva_animacion.html",
         title: "Visualizador Interactivo de Rotaciones AVL",
         height: "720px"
       }
     }
   ]
   ```

> **¿Por qué usamos la arquitectura de `widgets/`?**
> Al ejecutarse en su propio contexto aislado mediante iframe seguro:
> - Cero conflictos entre estilos Tailwind, variables CSS o IDs (`arr`, `play-btn`, etc.).
> - Compatible con librerías externas como Chart.js, D3.js, FontAwesome, etc.
> - La barra superior del widget provee automáticamente botón de **Pantalla Completa** y **Abrir en pestaña independiente**.

---

## 4. Estructura Didáctica Estándar: Contenido Principal y Elementos Complementarios

Cada lección mantiene una clara distinción entre el **contenido conceptual principal (numerado)** y los **recursos complementarios (sin numeración)**:

### A. Contenido Principal (Numerado)
Desarrollo teórico, código de referencia y análisis:
1. **¿En qué consiste?**: Explicación conceptual intuitiva, analogías de la vida real y cuadro con la **Idea Principal**.
2. **¿Cómo funciona?**: Procedimiento paso a paso formal y flujo algorítmico.
3. **Ejemplo Paso a Paso**: Traza manual sobre casos prácticos mostrando los cambios de estado e invariantes.
4. **Código de Implementación**: Implementación limpia en Python y C++.
5. **Análisis de Complejidad (Big-O)**: Tabla de Mejor Caso, Caso Promedio, Peor Caso, Espacio Extra y Estabilidad.
6. **¿Cuándo usarlo y cuándo no?**: Cuadros comparativos en verde (Casos de uso ideales) y rojo (Cuándo evitarlo).

### B. Elementos Complementarios (Sin Numeración)
Se presentan en bloques visualmente diferenciados al final de la lección o mediante las pestañas de acceso rápido:
* **Explora**: Animaciones, simulaciones, visualizadores interactivos paso a paso y flujogramas dinámicos.
* **Practica**: Ejercicios guiados, actividades de arrastrar y soltar, emparejamiento, ordenamiento y pruebas de escritorio.
* **Comprueba**: Quizzes de autoevaluación formativa con explicaciones detalladas y puntaje en tiempo real.

---

## 🚀 5. Cómo Abrir y Probar el Proyecto

### Opción 1: Directamente en el Navegador (Sin instalación)
Haz doble clic en el archivo [`index.html`](file:///C:/Users/GAVIRIA/Desktop/DEV/programacion2/index.html) para abrirlo en Google Chrome, Microsoft Edge, Mozilla Firefox o Safari.

### Opción 2: Con cualquier servidor local (Opcional)
```bash
npx serve .
```
o bien:
```bash
python -m http.server 3000
```
Y abre en tu navegador `http://localhost:3000`.
