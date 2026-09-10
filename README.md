# 🚀 Leo Gaviria | Programación (14 Unidades)

Plataforma web educativa interactiva desarrollada para la materia **Programación** (Ruta Integral de 14 unidades: Fundamentos, Algoritmos y Estructuras de Datos), con animaciones, flujogramas y visualizadores interactivos integrados.

---

## 🌟 Características Principales

1. **Diseño Visual Moderno y Estructurado**:
   - **Menú Izquierdo (Barra Lateral)**:
     - Acordeón jerárquico para las **14 unidades** del plan de estudios integral.
     - Indicador de progreso dinámico en tiempo real (`% Completado`, `X/42 temas`, barra con resplandor esmeralda).
     - Buscador y filtro instantáneo de lecciones (`Ctrl + K`).
     - Insignias de dificultad (*Fácil*, *Media*, *Avanzada*) y duración estimada.
     - Marcado de lecciones completadas persistente en `localStorage`.
     - Botón de colapso/expansión rápida.
   - **Área Derecha (Desarrollo del Contenido)**:
     - Migas de pan (*Breadcrumbs*), encabezado con metadatos y botón de completitud.
     - Submenú de navegación rápida por anclas (*Sticky Pills*).
     - Secciones estándar de aprendizaje didáctico.
     - Navegación fluida entre temas con botones anterior/siguiente.

2. **Estructura Pedagógica: Contenido Principal y Elementos Complementarios**:
   - **Contenido Principal (Numerado)**:
     - Secciones teóricas, algoritmos y código de referencia numerados secuencialmente (1. ..., 2. ..., etc.).
   - **Elementos Complementarios (Sin Numeración)**:
     - 🔍 **Explora**: Animaciones interactivas, simuladores de ejecución y diagramas de flujo interactivos.
     - ✏️ **Practica**: Actividades prácticas guiadas, ordenación de pasos, emparejamiento, selección múltiple y pruebas de escritorio.
     - ✅ **Comprueba**: Quizzes de autoevaluación formativa con retroalimentación inmediata, puntuación y explicaciones pedagógicas.

3. **Arquitectura Extensible para las 14 Unidades**:
   - Las 14 unidades están completamente estructuradas con sus competencias y temas.
   - Cualquier profesor o estudiante puede agregar o enriquecer el contenido de cada unidad siguiendo la [Guía de Extensión](GUIA_CREAR_CONTENIDO.md).

---

## 📅 Estructura Integral de la Asignatura (14 Unidades)

| Unidad | Módulo / Unidad Temática | Lecciones y Contenidos Destacados |
| :---: | :--- | :--- |
| **01** | Fundamentos de la programación | 1.1 Conceptos básicos, 1.2 Algoritmos y su representación, 1.3 Expresiones y notación aritmética *(17 interactivos y quiz de evaluación)* |
| **02** | Entorno de desarrollo | 2.1 Instalación de Python y VS Code, 2.2 Primer programa, 2.3 Errores y depuración |
| **03** | Elementos básicos de programación | 3.1 Variables y constantes, 3.2 Tipos y conversiones, 3.3 Operadores relacionales y lógicos, 3.4 Palabras reservadas |
| **04** | Estructuras de control condicionales | 4.1 if, elif, else, 4.2 Operadores lógicos en condicionales, 4.3 match-case, 4.4 Condicionales anidados |
| **05** | Estructuras de control repetitivas | 5.1 while, 5.2 for y range, 5.3 break, continue, else, 5.4 Bucles anidados |
| **06** | Funciones y modularización | 6.1 Definición y retorno, 6.2 Parámetros y argumentos, 6.3 Ámbito de variables, 6.4 Funciones lambda, 6.5 Módulos estándar |
| **07** | Estructuras de datos lineales | 7.1 Listas, 7.2 Tuplas, 7.3 Conjuntos, 7.4 Diccionarios, 7.5 Pilas y colas |
| **08** | Manejo de cadenas y archivos | 8.1 Métodos de cadenas y f-strings, 8.2 Archivos de texto, 8.3 JSON y CSV, 8.4 Excepciones con try/except |
| **09** | Complejidad algorítmica | 9.1 Notación Big-O y complejidad asintótica *(Simulador de curvas asintóticas en Chart.js)* |
| **10** | Estructuras de datos jerárquicas | 10.1 Árboles binarios |
| **11** | Algoritmos de ordenamiento | 11.1 Bubble Sort, 11.2 Selection Sort, 11.3 Insertion Sort, 11.4 Merge Sort, 11.5 Quick Sort *(Visualizadores interactivos sincronizados)* |
| **12** | Algoritmos de búsqueda | 12.1 Búsqueda lineal, 12.2 Búsqueda binaria, 12.3 Tablas hash |
| **13** | Recursión | 13.1 Concepto y caso base, 13.2 Pila de llamadas, 13.3 Ejemplos clásicos |
| **14** | Proyecto integrador | 14.1 Definición de requisitos, 14.2 Diseño de arquitectura, 14.3 Implementación modular, 14.4 Pruebas y documentación |

---

## ⚡ Cómo Usar la Plataforma

### Opción 1: Abrir directamente en el navegador (Sin instalación ni dependencias)
Haz doble clic en el archivo [`index.html`](index.html) para abrirlo en tu navegador habitual (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Opción 2: Con cualquier servidor web local (Opcional)
```bash
npx serve .
```
o con el servidor estándar de Python:
```bash
python -m http.server 3000
```
Abre en tu navegador `http://localhost:3000`.

---

## 📖 Documentación para el Docente
Para aprender a agregar nuevas unidades o animaciones interactivas, consulta el archivo [GUIA_CREAR_CONTENIDO.md](GUIA_CREAR_CONTENIDO.md) o haz clic en el botón **"Guía Docente"** en la barra superior de la aplicación.
