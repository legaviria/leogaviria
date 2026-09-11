/**
 * LEO GAVIRIA | PLATAFORMA EDUCATIVA MULTIASIGNATURA
 * Script unificado sin dependencias de módulos ES.
 * 100% compatible con protocolo local (file://) sin bloqueos de CORS.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. PLANES DE ESTUDIO POR ASIGNATURA
  // =========================================================================

  // PROGRAMACIÓN (14 UNIDADES) - PLAN INTEGRAL
  const CURRICULUM_PROG = [
  {
    "id": "unidad-01",
    "number": 1,
    "title": "Unidad 01: Fundamentos de la programación",
    "shortTitle": "U01: Fundamentos",
    "icon": "fa-terminal",
    "description": "Conceptos básicos de algoritmia, lógica de programación, ciclo de resolución de problemas, pseudocódigo, diagramas de flujo, expresiones y notaciones aritméticas.",
    "topics": [
      {
        "id": "prog-conceptos-basicos",
        "title": "1.1 Conceptos básicos",
        "duration": "30 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "badge": "Simuladores"
      },
      {
        "id": "prog-representacion-algoritmos",
        "title": "1.2 Algoritmos y su representación",
        "duration": "35 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "badge": "Depurador Visual"
      },
      {
        "id": "prog-expresiones-notacion",
        "title": "1.3 Expresiones y notación aritmética",
        "duration": "35 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "badge": "Quiz & Árboles AST"
      }
    ]
  },
  {
    "id": "unidad-02",
    "number": 2,
    "title": "Unidad 02: Entorno de desarrollo",
    "shortTitle": "U02: Entorno",
    "icon": "fa-laptop-code",
    "description": "Configuración del entorno de trabajo con Python y VS Code, creación de programas, documentación y técnicas de depuración.",
    "topics": [
      {
        "id": "prog-entorno-instalacion",
        "title": "2.1 Instalación y configuración de Python y Visual Studio Code",
        "duration": "25 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u02_checklist_entorno.html",
        "badge": "Checklist Entorno"
      },
      {
        "id": "prog-primer-programa",
        "title": "2.2 Primer programa: ejecución, documentación y pruebas",
        "duration": "25 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u02_codigo_resultado.html",
        "badge": "Simulador Pipeline"
      },
      {
        "id": "prog-errores-depuracion",
        "title": "2.3 Errores y depuración",
        "duration": "30 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u02_simulador_depuracion.html",
        "badge": "Depuración Visual"
      },
      {
        "id": "prog-libreria-turtle",
        "title": "2.4 Uso de la librería Turtle",
        "duration": "30 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u02_turtle_secuencial.html",
        "badge": "Turtle & Secuencial"
      }
    ]
  },
  {
    "id": "unidad-03",
    "number": 3,
    "title": "Unidad 03: Elementos básicos de programación",
    "shortTitle": "U03: Elementos Básicos",
    "icon": "fa-cube",
    "description": "Variables, constantes, tipos de datos primitivos, conversiones de tipo, operadores lógicos y palabras reservadas.",
    "topics": [
      {
        "id": "prog-variables-constantes",
        "title": "3.1 Variables y constantes",
        "duration": "20 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u03_memoria_programa.html",
        "badge": "Memoria RAM"
      },
      {
        "id": "prog-tipos-conversiones",
        "title": "3.2 Tipos de datos y conversiones",
        "duration": "25 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u03_explorador_tipos.html",
        "badge": "Explorador Tipos"
      },
      {
        "id": "prog-operadores-relacionales-logicos",
        "title": "3.3 Operadores relacionales y lógicos",
        "duration": "25 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u03_simulador_booleanos.html",
        "badge": "Simulador Booleano"
      },
      {
        "id": "prog-palabras-reservadas",
        "title": "3.4 Palabras reservadas",
        "duration": "20 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u03_clasificador_palabras.html",
        "badge": "Clasificador Keywords"
      }
    ]
  },
  {
    "id": "unidad-04",
    "number": 4,
    "title": "Unidad 04: Estructuras condicionales",
    "shortTitle": "U04: Condicionales",
    "icon": "fa-code-branch",
    "description": "Toma de decisiones y bifurcaciones condicionales en Python: if, elif y else.",
    "topics": [
      {
        "id": "prog-condicionales-if-elif-else",
        "title": "4.1 if, elif y else",
        "duration": "30 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u04_flujo_condicional.html",
        "badge": "Flujo Bifurcado"
      }
    ]
  },
  {
    "id": "unidad-05",
    "number": 5,
    "title": "Unidad 05: Estructuras de control",
    "shortTitle": "U05: Control & Ciclos",
    "icon": "fa-repeat",
    "description": "Estructuras de repetición e iteración (for, while) y control robusto de errores con try y except.",
    "topics": [
      {
        "id": "prog-bucle-for",
        "title": "5.1 Estructura for",
        "duration": "30 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u05_simulador_for.html",
        "badge": "Simulador for"
      },
      {
        "id": "prog-bucle-while",
        "title": "5.2 Estructura while",
        "duration": "30 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u05_visualizador_while.html",
        "badge": "Control while"
      },
      {
        "id": "prog-excepciones-try-except",
        "title": "5.3 Manejo de excepciones: try y except",
        "duration": "25 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u05_simulador_excepciones.html",
        "badge": "Control Excepciones"
      }
    ]
  },
  {
    "id": "unidad-06",
    "number": 6,
    "title": "Unidad 06: Funciones y procedimientos",
    "shortTitle": "U06: Funciones",
    "icon": "fa-cubes",
    "description": "Diseño modular de software: definición de funciones, ámbito de variables, funciones integradas de Python y procedimientos.",
    "topics": [
      {
        "id": "prog-funciones-intro",
        "title": "6.1 Funciones: definición y componentes",
        "duration": "30 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u06_flujo_funciones.html",
        "badge": "Ciclo de Función"
      },
      {
        "id": "prog-funciones-integradas",
        "title": "6.2 Funciones integradas de Python",
        "duration": "25 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u06_explorador_builtins.html",
        "badge": "Explorador Built-ins"
      },
      {
        "id": "prog-procedimientos-funciones",
        "title": "6.3 Procedimientos y diferencias con las funciones",
        "duration": "25 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u06_clasificador_procedimientos.html",
        "badge": "Función vs Procedimiento"
      }
    ]
  },
  {
    "id": "unidad-07",
    "number": 7,
    "title": "Unidad 07: Recursividad",
    "shortTitle": "U07: Recursividad",
    "icon": "fa-sitemap",
    "description": "Principios de diseño recursivo, casos base, algoritmos clásicos (Hanoi, Laberintos, Sudoku) e introducción a la programación dinámica.",
    "topics": [
      {
        "id": "prog-recursividad-conceptos",
        "title": "7.1 Conceptos y componentes de la recursividad",
        "duration": "30 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u07_pila_recursiva.html",
        "badge": "Pila Call Stack"
      },
      {
        "id": "prog-recursividad-hanoi",
        "title": "7.2 Torres de Hanoi",
        "duration": "35 min",
        "difficulty": "Avanzada",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u07_simulador_hanoi.html",
        "badge": "Torres de Hanoi"
      },
      {
        "id": "prog-recursividad-laberintos",
        "title": "7.3 Laberintos",
        "duration": "35 min",
        "difficulty": "Avanzada",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u07_laberinto_backtracking.html",
        "badge": "Backtracking 2D"
      },
      {
        "id": "prog-recursividad-sudoku",
        "title": "7.4 Sudoku",
        "duration": "40 min",
        "difficulty": "Avanzada",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u07_sudoku_visualizer.html",
        "badge": "Sudoku CSP"
      },
      {
        "id": "prog-programacion-dinamica",
        "title": "7.5 Programación dinámica",
        "duration": "40 min",
        "difficulty": "Avanzada",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u07_programacion_dinamica.html",
        "badge": "Memo vs Tabulación"
      }
    ]
  },
  {
    "id": "unidad-08",
    "number": 8,
    "title": "Unidad 08: Memoria y referencias",
    "shortTitle": "U08: Memoria & Referencias",
    "icon": "fa-memory",
    "description": "Arquitectura de memoria (Stack y Heap), punteros, referencias mutables e indirección múltiple.",
    "topics": [
      {
        "id": "prog-modelo-memoria",
        "title": "8.1 Modelo de memoria",
        "duration": "30 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u08_visualizador_memoria.html",
        "badge": "Stack vs Heap"
      },
      {
        "id": "prog-apuntadores",
        "title": "8.2 Apuntadores",
        "duration": "35 min",
        "difficulty": "Avanzada",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u08_apuntadores_referencias.html",
        "badge": "Punteros C vs Python"
      },
      {
        "id": "prog-referencias-indireccion",
        "title": "8.3 Referencias e indirección múltiple",
        "duration": "35 min",
        "difficulty": "Avanzada",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u08_simulador_alias.html",
        "badge": "Alias & deepcopy"
      }
    ]
  },
  {
    "id": "unidad-09",
    "number": 9,
    "title": "Unidad 09: Análisis y complejidad de algoritmos",
    "shortTitle": "U09: Complejidad Big-O",
    "icon": "fa-chart-line",
    "description": "Análisis asintótico de algoritmos, órdenes de complejidad O(1) a O(2^n) y curvas comparativas de rendimiento.",
    "topics": [
      {
        "id": "big-o-notation",
        "title": "9.1 Notación Big-O y complejidad asintótica",
        "duration": "45 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/big_o_visualizer.html",
        "badge": "Gráfica y Depurador"
      }
    ]
  },
  {
    "id": "unidad-10",
    "number": 10,
    "title": "Unidad 10: Estructuras de datos",
    "shortTitle": "U10: Estructuras de Datos",
    "icon": "fa-diagram-project",
    "description": "Estructuras de datos no lineales, árboles binarios, recorridos en profundidad y aplicaciones.",
    "topics": [
      {
        "id": "intro-arboles-binarios",
        "title": "10.1 Árboles binarios",
        "duration": "35 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u10_arbol_binario_visualizer.html",
        "badge": "Árbol BST & DFS"
      }
    ]
  },
  {
    "id": "unidad-11",
    "number": 11,
    "title": "Unidad 11: Algoritmos de ordenamiento",
    "shortTitle": "U11: Ordenamiento",
    "icon": "fa-arrow-down-a-z",
    "description": "Algoritmos elementales y avanzados de ordenamiento por comparación: Bubble, Selection, Insertion, Merge y Quick Sort con visualizadores interactivos.",
    "topics": [
      {
        "id": "bubble-sort",
        "title": "11.1 Bubble Sort",
        "duration": "30 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/bubble_sort_visualizer.html",
        "badge": "Animación Interactiva"
      },
      {
        "id": "selection-sort",
        "title": "11.2 Selection Sort",
        "duration": "30 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/selection_sort_visualizer.html",
        "badge": "Animación Interactiva"
      },
      {
        "id": "insertion-sort",
        "title": "11.3 Insertion Sort",
        "duration": "30 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/insertion_sort_visualizer.html",
        "badge": "Animación Interactiva"
      },
      {
        "id": "merge-sort",
        "title": "11.4 Merge Sort",
        "duration": "35 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/merge_sort_visualizer.html",
        "badge": "Animación Interactiva"
      },
      {
        "id": "quick-sort",
        "title": "11.5 Quick Sort",
        "duration": "35 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/quick_sort_visualizer.html",
        "badge": "Animación Interactiva"
      }
    ]
  },
  {
    "id": "unidad-12",
    "number": 12,
    "title": "Unidad 12: Programación gráfica",
    "shortTitle": "U12: Programación Gráfica",
    "icon": "fa-palette",
    "description": "Desarrollo de interfaces gráficas interactivas con Python: gráficos con Turtle y aplicaciones modernas con Flet.",
    "topics": [
      {
        "id": "prog-turtle-intro",
        "title": "12.1 Introducción a Turtle",
        "duration": "30 min",
        "difficulty": "Fácil",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u12_turtle_simulator.html",
        "badge": "Lienzo Turtle"
      },
      {
        "id": "prog-flet-intro",
        "title": "12.2 Introducción a Flet",
        "duration": "35 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u12_flet_ui_builder.html",
        "badge": "UI Flet Reactiva"
      },
      {
        "id": "prog-grafica-calculadora",
        "title": "12.3 Ejemplo: calculadora",
        "duration": "40 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u12_flet_calculadora.html",
        "badge": "Calculadora Flet"
      },
      {
        "id": "prog-grafica-pokedex",
        "title": "12.4 Ejemplo: Pokédex",
        "duration": "45 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u12_flet_pokedex.html",
        "badge": "Pokédex Flet"
      }
    ]
  },
  {
    "id": "unidad-13",
    "number": 13,
    "title": "Unidad 13: Procesamiento y visualización de datos",
    "shortTitle": "U13: Ciencia de Datos",
    "icon": "fa-chart-pie",
    "description": "Ecosistema científico de Python: manipulación con Pandas, cálculo matricial con NumPy y visualización con Matplotlib.",
    "topics": [
      {
        "id": "prog-pandas-datos",
        "title": "13.1 Manipulación de datos con Pandas",
        "duration": "35 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u13_pandas_explorer.html",
        "badge": "DataFrames Pandas"
      },
      {
        "id": "prog-numpy-calculo",
        "title": "13.2 Cálculo numérico con NumPy",
        "duration": "35 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u13_numpy_visualizer.html",
        "badge": "Vectorización NumPy"
      },
      {
        "id": "prog-matplotlib-visualizacion",
        "title": "13.3 Visualización de datos con Matplotlib",
        "duration": "35 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u13_matplotlib_explorer.html",
        "badge": "Gráficas Pyplot"
      },
      {
        "id": "prog-datos-dashboard",
        "title": "13.4 Ejemplo: dashboard",
        "duration": "45 min",
        "difficulty": "Avanzada",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u13_dashboard_integrador.html",
        "badge": "Dashboard Científico"
      }
    ]
  },
  {
    "id": "unidad-14",
    "number": 14,
    "title": "Unidad 14: Fundamentos de Machine Learning",
    "shortTitle": "U14: Machine Learning",
    "icon": "fa-brain",
    "description": "Conceptos esenciales de aprendizaje automático, flujo de construcción de modelos predictivos y métricas de evaluación.",
    "topics": [
      {
        "id": "prog-ml-fundamentos",
        "title": "14.1 ¿Qué es y cómo funciona?",
        "duration": "30 min",
        "difficulty": "Media",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u14_ciclo_ml.html",
        "badge": "Ciclo de ML"
      },
      {
        "id": "prog-ml-construccion-modelo",
        "title": "14.2 ¿Cómo se construye un modelo?",
        "duration": "40 min",
        "difficulty": "Avanzada",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u14_entrenamiento_modelo.html",
        "badge": "Ajuste & Overfitting"
      },
      {
        "id": "prog-ml-evaluacion-modelo",
        "title": "14.3 ¿Cómo se evalúa un modelo?",
        "duration": "35 min",
        "difficulty": "Avanzada",
        "hasAnimation": true,
        "widgetFile": "widgets/programacion/u14_matriz_confusion.html",
        "badge": "Matriz de Confusión"
      }
    ]
  }
];
  const CURRICULUM_PROG2 = CURRICULUM_PROG;
  const CURRICULUM_PROG1 = CURRICULUM_PROG;

  // INTRODUCCIÓN A LAS TICS
  const CURRICULUM_TICS = [
  {
    "id": "tics-u01",
    "number": 1,
    "title": "Unidad 01: Sistemas numéricos",
    "shortTitle": "U01: Sistemas Numéricos",
    "icon": "fa-binary",
    "description": "Invención de la base, teorema de representación posicional, operaciones aritméticas en diversas bases, algoritmos de conversión, propiedades de los naturales y aritmética modular.",
    "topics": [
      { "id": "tics-u01-t01-invencion-base", "title": "1.1 La invención de la base", "duration": "30 min", "difficulty": "Fácil", "hasAnimation": true, "badge": "Valor Posicional" },
      { "id": "tics-u01-t02-teorema-representacion", "title": "1.2 Teorema de representación", "duration": "30 min", "difficulty": "Fácil", "hasAnimation": true, "badge": "Polinomio Posicional" },
      { "id": "tics-u01-t03-operaciones-sistemas", "title": "1.3 Operaciones en los sistemas numéricos", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Acarreo y Préstamo" },
      { "id": "tics-u01-t04-conversion-sistemas", "title": "1.4 Conversión entre sistemas", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Conversor Paso a Paso" },
      { "id": "tics-u01-t05-propiedades-naturales", "title": "1.5 Propiedades fundamentales de los números naturales", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Algoritmo de Euclides" },
      { "id": "tics-u01-t06-aritmetica-modular", "title": "1.6 Aritmética modular", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Reloj Modular Zn" }
    ]
  },
  {
    "id": "tics-u02",
    "number": 2,
    "title": "Unidad 02: Inducción y recursión",
    "shortTitle": "U02: Inducción y Recursión",
    "icon": "fa-infinity",
    "description": "Razonamiento inductivo, principio de inducción matemática en ℕ, sumas y recurrencias, sucesiones de Fibonacci, triángulo de Pascal y método de iteración.",
    "topics": [
      { "id": "tics-u02-t01-problemas-recurrentes", "title": "2.1 Problemas recurrentes y razonamiento inductivo", "duration": "30 min", "difficulty": "Fácil", "hasAnimation": true, "badge": "Patrones y Hanoi" },
      { "id": "tics-u02-t02-sistema-naturales-induccion", "title": "2.2 El sistema ℕ y los principios de inducción", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Efecto Dominó" },
      { "id": "tics-u02-t03-sumas-recurrencias", "title": "2.3 Sumas y recurrencias", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Traza de Términos" },
      { "id": "tics-u02-t04-fibonacci-pascal", "title": "2.4 Números de Fibonacci y triángulo de Pascal", "duration": "40 min", "difficulty": "Media", "hasAnimation": true, "badge": "Fibonacci & Pascal" },
      { "id": "tics-u02-t05-metodo-iteracion", "title": "2.5 Método de iteración para recurrencias no homogéneas de primer orden", "duration": "45 min", "difficulty": "Avanzada", "hasAnimation": true, "badge": "Sustitución Regresiva" }
    ]
  },
  {
    "id": "tics-u03",
    "number": 3,
    "title": "Unidad 03: Teoría de conjuntos",
    "shortTitle": "U03: Teoría de Conjuntos",
    "icon": "fa-shapes",
    "description": "Conjuntos y pertenencia, operaciones fundamentales (unión, intersección, diferencia, complemento), álgebra booleana, leyes de De Morgan, tuplas y conjunto potencia.",
    "topics": [
      { "id": "tics-u03-t01-conjuntos-subconjuntos", "title": "3.1 Conjuntos y subconjuntos", "duration": "25 min", "difficulty": "Fácil", "hasAnimation": true, "badge": "Pertenencia e Inclusión" },
      { "id": "tics-u03-t02-operaciones-conjuntos", "title": "3.2 Operaciones con conjuntos", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Diagrama de Venn" },
      { "id": "tics-u03-t03-algebra-booleana", "title": "3.3 Álgebra booleana de la teoría de conjuntos", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Compuertas y De Morgan" },
      { "id": "tics-u03-t04-tuplas-conjunto-potencia", "title": "3.4 Tuplas y conjuntos potencia", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Cartesiano y P(A)" }
    ]
  },
  {
    "id": "tics-u04",
    "number": 4,
    "title": "Unidad 04: Funciones y relaciones",
    "shortTitle": "U04: Funciones y Relaciones",
    "icon": "fa-project-diagram",
    "description": "Propiedades de las funciones (inyectividad, sobreyectividad, biyectividad), operaciones y composición, propiedades de las relaciones, relaciones de equivalencia, particiones y conjuntos parcialmente ordenados.",
    "topics": [
      { "id": "tics-u04-t01-propiedades-funciones", "title": "4.1 Propiedades de las funciones", "duration": "30 min", "difficulty": "Media", "hasAnimation": true, "badge": "Mapeo y Biyectividad" },
      { "id": "tics-u04-t02-operaciones-funciones", "title": "4.2 Operaciones con funciones", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Composición A→B→C" },
      { "id": "tics-u04-t03-propiedades-relaciones", "title": "4.3 Propiedades de las relaciones", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Matrices y Dígrafos" },
      { "id": "tics-u04-t04-operaciones-relaciones", "title": "4.4 Operaciones con relaciones", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Composición Booleana" },
      { "id": "tics-u04-t05-equivalencia-particiones", "title": "4.5 Relaciones de equivalencia y particiones", "duration": "40 min", "difficulty": "Media", "hasAnimation": true, "badge": "Clases y Particiones" },
      { "id": "tics-u04-t06-ordenes-parciales", "title": "4.6 Órdenes parciales", "duration": "40 min", "difficulty": "Avanzada", "hasAnimation": true, "badge": "Diagramas de Hasse" }
    ]
  },
  {
    "id": "tics-u05",
    "number": 5,
    "title": "Unidad 05: Principios fundamentales del conteo",
    "shortTitle": "U05: Conteo y Combinatoria",
    "icon": "fa-calculator",
    "description": "Reglas de la suma y el producto, principio del palomar, permutaciones simples y con repetición, combinaciones ordinarias, combinaciones con repetición y reto final integrador de matemática discreta.",
    "topics": [
      { "id": "tics-u05-t01-reglas-suma-producto-palomar", "title": "5.1 Reglas de la suma y el producto. Principio del palomar", "duration": "30 min", "difficulty": "Fácil", "hasAnimation": true, "badge": "Árboles y Palomas" },
      { "id": "tics-u05-t02-permutaciones", "title": "5.2 Permutaciones", "duration": "30 min", "difficulty": "Fácil", "hasAnimation": true, "badge": "Factorial y Orden" },
      { "id": "tics-u05-t03-permutaciones-repeticion", "title": "5.3 Permutaciones con repetición", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Anagramas Multinomiales" },
      { "id": "tics-u05-t04-combinaciones", "title": "5.4 Combinaciones", "duration": "35 min", "difficulty": "Media", "hasAnimation": true, "badge": "Selección sin Orden" },
      { "id": "tics-u05-t05-combinaciones-repeticion", "title": "5.5 Combinaciones con repetición", "duration": "40 min", "difficulty": "Avanzada", "hasAnimation": true, "badge": "Estrellas y Barras" },
      { "id": "tics-u05-t06-reto-integrador-final", "title": "5.6 Reto Final Integrador: Matemática Discreta y Computación", "duration": "45 min", "difficulty": "Avanzada", "hasAnimation": true, "badge": "Desafío Integral" }
    ]
  }
];

  // Mapa de cursos
  const COURSES = {
    'prog': {
      id: 'prog',
      title: 'Programación',
      subtitle: '14 Unidades • Plan Académico',
      badge: 'Integral',
      curriculum: CURRICULUM_PROG,
      defaultTopic: 'prog-conceptos-basicos'
    },
    'tics': {
      id: 'tics',
      title: 'Introducción a las TICS',
      subtitle: '5 Unidades • 27 Temas',
      badge: '5 Unidades • 27 Temas',
      curriculum: CURRICULUM_TICS,
      defaultTopic: 'tics-u01-t01-invencion-base'
    }
  };

  // Compatibilidad con referencias previas
  COURSES['prog1'] = COURSES['prog'];
  COURSES['prog'] = COURSES['prog'];

  // =========================================================================
  // 2. DATOS EDUCATIVOS DETALLADOS DE TEMAS
  // =========================================================================

  // ALIASES PARA COMPATIBILIDAD CON ENLACES PREVIOS
  const TOPIC_ALIASES = {
  "prog-libreria-turtle": "prog-libreria-turtle",
  "prog-turtle-secuencial": "prog-libreria-turtle",
  "prog-uso-libreria-turtle": "prog-libreria-turtle",
  "prog-intro-algoritmos": "prog-conceptos-basicos",
  "prog-tipos-datos": "prog-variables-constantes",
  "prog-operadores-expresiones": "prog-operadores-relacionales-logicos",
  "prog-if-else": "prog-condicionales-if-elif-else",
  "prog-switch": "prog-condicionales-if-elif-else",
  "prog-condicionales-anidados": "prog-condicionales-if-elif-else",
  "prog-bucle-while": "prog-bucle-while",
  "prog-bucle-for": "prog-bucle-for",
  "prog-control-bucles": "prog-bucle-while",
  "prog-paso-parametros": "prog-funciones-intro",
  "prog-arreglos-unidimensionales": "prog-variables-constantes",
  "intro-poo-tda": "prog-conceptos-basicos",
  "encapsulamiento-modularidad": "prog-conceptos-basicos",
  "especificacion-tda": "prog-conceptos-basicos",
  "memoria-stack-heap": "prog-modelo-memoria",
  "gestion-excepciones": "prog-excepciones-try-except",
  "recursion-arboles-llamada": "prog-recursividad-conceptos",
  "problema-n-reinas-laberinto": "prog-recursividad-laberintos",
  "recorridos-arboles": "intro-arboles-binarios",
  "arboles-expresion": "prog-expresiones-notacion",
  "arboles-bst": "intro-arboles-binarios",
  "arboles-avl-rotaciones": "intro-arboles-binarios",
  "prog-arboles-binarios": "intro-arboles-binarios"
};

  

  // =========================================================================
  // 2. CONTENIDOS DE LECCIONES Y ALGORITMOS
  // =========================================================================

  /**
 * CONTENIDO EDUCATIVO DETALLADO: CONCEPTOS BÁSICOS DE ALGORITMOS Y PROGRAMACIÓN
 * Unidad 01 - Fundamentos de la Programación
 * Prof. Leo Gaviria - Programación
 */



  // =========================================================================
  // 2. CONTENIDOS DE LECCIONES Y ALGORITMOS
  

  // =========================================================================
  // 2. CONTENIDOS DE LECCIONES Y ALGORITMOS
  

  // =========================================================================
  // 2. CONTENIDOS DE LECCIONES Y ALGORITMOS
  

  // =========================================================================
  // 2. CONTENIDOS DE LECCIONES Y ALGORITMOS
  // =========================================================================

  /**
 * CONTENIDO EDUCATIVO DETALLADO: CONCEPTOS BÁSICOS DE ALGORITMOS Y PROGRAMACIÓN
 * Unidad 01 - Fundamentos de la Programación
 * Prof. Leo Gaviria - Programación
 */

const CONCEPTOS_BASICOS_DATA = {
  id: "prog-conceptos-basicos",
  title: "1.1 Conceptos básicos",
  subtitle: "Definición formal de algoritmos, ciclo de resolución de problemas, paradigmas, tipos de lenguajes y modelo Entrada-Proceso-Salida.",
  unit: 1,
  unitTitle: "Unidad 01: Fundamentos de la programación",
  week: 1,
  weekTitle: "Unidad 01: Fundamentos de la programación",
  difficulty: "Fácil",
  category: "Fundamentos de la Programación",
  timeEstimate: "30 minutos",
  badges: [
    { text: "Unidad 01", type: "neutral" },
    { text: "Fácil", type: "easy" },
    { text: "Simuladores", type: "teal" },
    { text: "Paradigmas", type: "purple" },
    { text: "Modelo IPO", type: "blue" }
  ],
  sections: [
    {
      id: "que-es-algoritmo",
      title: "1. ¿Qué es un Algoritmo?",
      shortTitle: "¿Qué es un algoritmo?",
      icon: "fa-terminal",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Un <strong>algoritmo</strong> es una secuencia ordenada, finita y no ambigua de pasos que toma datos de entrada (<em>inputs</em>), realiza una serie de procesos o cálculos, y entrega un resultado de salida (<em>output</em>).
        </p>

        <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Fase</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Función Principal</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo Práctico</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-800/60">
              <tr>
                <td class="font-bold text-sky-400 py-2.5 px-3">Entrada (Input)</td>
                <td class="py-2.5 px-3">Recopilación de los datos necesarios del usuario o sistema.</td>
                <td class="py-2.5 px-3"><code class="bg-[#10141d] px-2 py-0.5 rounded text-emerald-400 font-mono">Recibir num1 y num2</code></td>
              </tr>
              <tr>
                <td class="font-bold text-amber-400 py-2.5 px-3">Proceso</td>
                <td class="py-2.5 px-3">Operaciones aritméticas, evaluaciones lógicas y transformaciones.</td>
                <td class="py-2.5 px-3"><code class="bg-[#10141d] px-2 py-0.5 rounded text-amber-300 font-mono">promedio = (num1 + num2) / 2</code></td>
              </tr>
              <tr>
                <td class="font-bold text-emerald-400 py-2.5 px-3">Salida (Output)</td>
                <td class="py-2.5 px-3">Presentación o retorno del resultado final obtenido.</td>
                <td class="py-2.5 px-3"><code class="bg-[#10141d] px-2 py-0.5 rounded text-sky-300 font-mono">Mostrar promedio</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulador Interactivo de Instrucciones Secuenciales (Robot)",
          description: "Experimenta de primera mano cómo una computadora ejecuta órdenes secuenciales precisas. Programa las acciones de un robot móvil (avanzar, girar, recoger) y observa cómo sigue rigurosamente cada instrucción:",
          widget: {
            file: "widgets/programacion/u01_robot_simulador.html",
            title: "Simulador Interactivo de Instrucciones Secuenciales (Robot)",
            height: "520px"
          }
        },
        {
          category: "practica",
          title: "Ordenar Pasos de Resolución de Problemas",
          description: "Pon a prueba tu comprensión arrastrando y ordenando cronológicamente las fases del ciclo para resolver problemas computacionales cotidianos:",
          widget: {
            file: "widgets/programacion/u01_ejercicio1_ordenar_pasos.html",
            title: "Ejercicio: Ordenar Pasos de Resolución de Problemas",
            height: "450px"
          }
        }
      ]
    },
    {
      id: "que-es-programacion",
      title: "2. ¿Qué es Programación y Selección de Lenguajes?",
      shortTitle: "Programación y lenguajes",
      icon: "fa-code",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          La <strong>programación</strong> es el proceso de diseñar, escribir, probar y mantener las instrucciones necesarias para que una computadora ejecute tareas específicas o resuelva problemas de forma autónoma. Con la programación podemos hacer realidad una idea que puede ser muy difícil o tardada de solucionar a mano.
        </p>

        <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
          <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-microchip"></i> ¿Qué tipos de problemas puede resolver una computadora?
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans">
            Una gran cantidad de problemas pueden ser resueltos utilizando programación; sin embargo, los problemas deben ser <strong>cuantitativos</strong> o traducibles a números, variables y ecuaciones. Problemas cualitativos subjetivos o con factores no cuantificables son difíciles de modelar matemáticamente en la máquina.
          </p>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Explorador de Paradigmas de Programación",
          description: "Descubre los diferentes enfoques metodológicos para estructurar y modelar soluciones de software (Imperativo, Orientado a Objetos, Funcional):",
          widget: {
            file: "widgets/programacion/u01_paradigmas_interactivos.html",
            title: "Paradigmas de Programación Interactivos",
            height: "500px"
          }
        }
      ]
    },
    {
      id: "tipos-lenguajes",
      title: "3. Clasificación de Lenguajes de Programación",
      shortTitle: "Tipos de lenguajes",
      icon: "fa-layer-group",
      contentHtml: `
        <p class="text-sm text-gray-300 leading-relaxed mb-3">
          Los lenguajes se clasifican principalmente según su nivel de abstracción respecto al hardware del procesador:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div class="bg-[#121622] border border-gray-800 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">Bajo Nivel</span>
              <h4 class="text-white font-bold text-sm mt-2 mb-1">Código Máquina</h4>
              <p class="text-xs text-gray-400 leading-relaxed">Cadenas binarias puras (<code>0</code> y <code>1</code>) que la CPU interpreta directamente en circuitos lógicos.</p>
            </div>
            <div class="mt-3 pt-2 border-t border-gray-800/80 text-[11px] text-gray-500 font-mono">10110000 01100001</div>
          </div>

          <div class="bg-[#121622] border border-gray-800 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Nivel Medio</span>
              <h4 class="text-white font-bold text-sm mt-2 mb-1">Ensamblador (ASM)</h4>
              <p class="text-xs text-gray-400 leading-relaxed">Utiliza mnemónicos directos para manipular registros y memoria (ej. <code>MOV</code>, <code>ADD</code>, <code>JMP</code>).</p>
            </div>
            <div class="mt-3 pt-2 border-t border-gray-800/80 text-[11px] text-gray-500 font-mono">MOV AX, [BX+4]</div>
          </div>

          <div class="bg-[#121622] border border-gray-800 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Alto Nivel</span>
              <h4 class="text-white font-bold text-sm mt-2 mb-1">Compilados e Interpretados</h4>
              <p class="text-xs text-gray-400 leading-relaxed">Sintaxis abstracta y cercana al lenguaje humano estructurado (Python, C++, Java, Rust).</p>
            </div>
            <div class="mt-3 pt-2 border-t border-gray-800/80 text-[11px] text-gray-500 font-mono">print("Hola Mundo")</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div class="bg-[#101915] border border-emerald-900/60 rounded-xl p-4">
            <h5 class="text-emerald-400 font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
              <i class="fas fa-gears"></i> Lenguajes Compilados (ej. C, C++, Rust)
            </h5>
            <p class="text-xs text-gray-300 leading-relaxed">
              El código fuente se traduce <strong>por completo</strong> a código binario nativo antes de su ejecución. Generan un archivo binario ejecutable independiente de altísimo rendimiento computacional.
            </p>
          </div>
          <div class="bg-[#10141f] border border-sky-900/60 rounded-xl p-4">
            <h5 class="text-sky-400 font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
              <i class="fas fa-play"></i> Lenguajes Interpretados (ej. Python, JavaScript)
            </h5>
            <p class="text-xs text-gray-300 leading-relaxed">
              Un programa intermediario (el <em>intérprete</em>) lee, traduce y ejecuta las instrucciones <strong>línea por línea</strong> en tiempo real. Proporcionan mayor dinamismo y facilidad de experimentación interactiva.
            </p>
          </div>
        </div>

        <div class="bg-[#191522] border border-purple-500/30 rounded-xl p-4 my-4">
          <h4 class="text-purple-300 font-bold text-sm mb-1.5 flex items-center gap-2">
            <i class="fas fa-star text-amber-400"></i> Idea Principal & Regla de Oro
          </h4>
          <p class="text-xs text-gray-200 leading-relaxed font-sans mb-2">
            <strong>IDEA PRINCIPAL:</strong> Aprender la sintaxis de un lenguaje de programación es la parte más sencilla de todo el proceso, pero suele confundirse con el objetivo central. Con una adecuada actitud y compromiso cualquiera puede aprender a programar; el verdadero arte consiste en cultivar el pensamiento lógico computacional.
          </p>
          <div class="p-2.5 rounded-lg bg-[#100d17] border border-purple-500/20 text-xs font-mono text-purple-200">
            🎯 <strong>REGLA DE ORO:</strong> Comprensión de lectura, práctica deliberada y lectura constante de código.
          </div>
        </div>
      `,
      interactive: [
        {
          category: "practica",
          title: "Clasificación de Lenguajes Compilados vs. Interpretados",
          description: "Clasifica los distintos lenguajes de programación según su mecanismo de traducción y nivel de abstracción con respecto a la máquina:",
          widget: {
            file: "widgets/programacion/u01_ejercicio2_clasificacion_lenguajes.html",
            title: "Ejercicio: Clasificación Interactiva de Lenguajes",
            height: "395px"
          }
        }
      ]
    },
    {
      id: "resolucion-problemas",
      title: "4. Resolver un Problema en Programación: El Ciclo Metodológico",
      shortTitle: "Ciclo de resolución",
      icon: "fa-lightbulb",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Resolver un problema no consiste en sentarse a teclear código de inmediato a ciegas. Los programadores profesionales siguen un <strong>ciclo ordenado en 4 fases fundamentales</strong> que evita frustraciones y reduce drásticamente el tiempo de desarrollo:
        </p>

        <ol class="space-y-3 mb-6 text-sm text-gray-300 list-none pl-0">
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">1</span>
            <div><strong>Análisis del Problema:</strong> Identificar con exactitud qué datos se reciben de entrada (inputs), cuáles son las restricciones y cuál es el resultado esperado de salida (outputs).</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">2</span>
            <div><strong>Diseño Algorítmico:</strong> Elaborar la secuencia lógica de pasos mediante herramientas conceptuales independientes del lenguaje: <em>Pseudocódigo</em> o <em>Diagramas de Flujo</em>.</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">3</span>
            <div><strong>Codificación (Implementación):</strong> Traducir la lógica diseñada a la sintaxis concreta de un lenguaje de programación específico (Python, C++, etc.).</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">4</span>
            <div><strong>Pruebas y Depuración (Debugging):</strong> Ejecutar el programa con casos de prueba variados, verificar casos límite y corregir errores sintácticos o de lógica.</div>
          </li>
        </ol>
      `,
      interactive: [
        {
          category: "explora",
          title: "Fases Metodológicas de Resolución de Problemas",
          description: "Visualizador interactivo de las cuatro etapas canónicas para resolver problemas computacionales ordenadamente:",
          widget: {
            file: "widgets/programacion/u01_resolucion_problemas.html",
            title: "Pasos Metodológicos para la Resolución de Problemas",
            height: "240px"
          }
        }
      ]
    },
    {
      id: "modelo-ipo-calculadora",
      title: "5. Estructura Estándar: Entrada - Proceso - Salida",
      shortTitle: "Modelo Entrada–Proceso–Salida",
      icon: "fa-calculator",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Para consolidar la estructura canónica de los algoritmos, examinemos el cálculo del promedio aritmético de dos calificaciones académicas:
        </p>
        <ul class="space-y-2 text-xs text-gray-300 list-disc pl-5 mb-5 font-sans">
          <li><strong>Entrada:</strong> Se leen dos números decimales, <code class="text-sky-300 font-mono">N1</code> y <code class="text-sky-300 font-mono">N2</code>.</li>
          <li><strong>Proceso:</strong> Se aplica la fórmula matemática <code class="text-amber-300 font-mono">promedio = (N1 + N2) / 2</code>.</li>
          <li><strong>Salida:</strong> Se imprime o retorna el resultado con precisión decimal.</li>
        </ul>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulador Calculadora: Entrada - Proceso - Salida",
          description: "Experimenta en tiempo real la transformación de datos paso a paso en el cálculo del promedio aritmético bajo el modelo IPO:",
          widget: {
            file: "widgets/programacion/u01_calculadora_algoritmo.html",
            title: "Simulador Calculadora: Entrada - Proceso - Salida",
            height: "280px"
          }
        },
        {
          category: "practica",
          title: "Identificar Entrada, Proceso y Salida",
          description: "Arrastra o selecciona el componente adecuado para completar el esquema canónico del algoritmo de promedio:",
          widget: {
            file: "widgets/programacion/u01_ejercicio5_rellenar_espacios.html",
            title: "Ejercicio: Rellenar Espacios Vacíos",
            height: "320px"
          }
        }
      ]
    }
  ]
};

  /**
 * CONTENIDO EDUCATIVO DETALLADO: ALGORITMOS Y SU REPRESENTACIÓN
 * Unidad 01 - Fundamentos de la Programación
 * Prof. Leo Gaviria - Programación
 */

const REPRESENTACION_ALGORITMOS_DATA = {
  id: "prog-representacion-algoritmos",
  title: "1.2 Algoritmos y su representación",
  subtitle: "Pseudocódigo, estructuras de control básicas, diagramas de flujo ANSI/ISO y depuración paso a paso.",
  unit: 1,
  unitTitle: "Unidad 01: Fundamentos de la programación",
  week: 1,
  weekTitle: "Unidad 01: Fundamentos de la programación",
  difficulty: "Fácil",
  category: "Fundamentos de la Programación",
  timeEstimate: "35 minutos",
  badges: [
    { text: "Unidad 01", type: "neutral" },
    { text: "Fácil", type: "easy" },
    { text: "Pseudocódigo", type: "sky" },
    { text: "Diagramas ANSI", type: "teal" },
    { text: "Depurador", type: "purple" }
  ],
  sections: [
    {
      id: "pseudocodigo",
      title: "1. ¿Qué es el Pseudocódigo y Estructuras de Control?",
      shortTitle: "Pseudocódigo y control",
      icon: "fa-file-lines",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Un <strong>pseudocódigo</strong> es un lenguaje informal y simplificado que utilizan los programadores para planificar y diseñar algoritmos antes de escribir código real. No es un lenguaje de programación directamente ejecutable por la computadora; está pensado exclusivamente para ser leído y comprendido con facilidad por seres humanos. Mezcla estructuras formales de programación con frases en lenguaje natural (como español o inglés).
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <h4 class="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-list-check"></i> Características Principales
            </h4>
            <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li><strong>Sintaxis flexible:</strong> No se rige por reglas estrictas de puntuación o palabras clave rígidas.</li>
              <li><strong>Independencia del lenguaje:</strong> Un mismo pseudocódigo se puede traducir a C++, Python, Java o cualquier otro lenguaje sin modificar su lógica.</li>
              <li><strong>Enfoque en la lógica:</strong> Permite resolver el problema conceptual sin preocuparse por la sintaxis o los errores de compilación.</li>
            </ul>
          </div>

          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-shield-halved"></i> ¿Por qué debemos usarlo?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li><strong>Aislamiento de errores de lógica:</strong> Si un programa falla, puede ser por sintaxis o por lógica. El pseudocódigo elimina la sintaxis para concentrarse 100% en la lógica resolutiva.</li>
              <li><strong>Comunicación multidisciplinaria:</strong> Permite que analistas de negocio, diseñadores y clientes entiendan la lógica del sistema.</li>
              <li><strong>Documentación viva:</strong> Funciona como un plano arquitectónico reutilizable en cualquier lenguaje futuro.</li>
            </ul>
          </div>
        </div>

        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Todo algoritmo computable puede expresarse combinando únicamente <strong>tres estructuras de control básicas</strong>:
        </p>

        <div class="space-y-4 my-4">
          <!-- 1. Secuencia -->
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-5 h-5 rounded bg-sky-500/20 text-sky-400 font-mono text-xs flex items-center justify-center font-bold">1</span>
              <h4 class="text-sm font-bold text-sky-400">Secuencia (Paso a paso lineal)</h4>
            </div>
            <p class="text-xs text-gray-400 mb-2">Las instrucciones se ejecutan estrictamente una tras otra, en el orden en que están escritas:</p>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-emerald-400 overflow-x-auto border border-gray-800"><code>Escribir "Ingrese el precio del producto:"
Leer precio
calcular IVA = precio * 0.19
calcular total = precio + IVA
Escribir "El total a pagar es:", total</code></pre>
          </div>

          <!-- 2. Condicional -->
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-5 h-5 rounded bg-amber-500/20 text-amber-400 font-mono text-xs flex items-center justify-center font-bold">2</span>
              <h4 class="text-sm font-bold text-amber-400">Decisión o Condicional (Caminos alternativos)</h4>
            </div>
            <p class="text-xs text-gray-400 mb-2">Bifurca el flujo de ejecución evaluando una condición lógica:</p>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-amber-300 overflow-x-auto border border-gray-800"><code>SI saldo_cuenta &gt;= monto_retiro ENTONCES
    saldo_cuenta = saldo_cuenta - monto_retiro
    Escribir "Retiro exitoso"
SINO
    Escribir "Fondos insuficientes"
FIN_SI</code></pre>
          </div>

          <!-- 3. Repetición -->
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-5 h-5 rounded bg-purple-500/20 text-purple-400 font-mono text-xs flex items-center justify-center font-bold">3</span>
              <h4 class="text-sm font-bold text-purple-400">Repetición o Bucle (Iteración)</h4>
            </div>
            <p class="text-xs text-gray-400 mb-2">Ejecuta reiteradamente un bloque mientras se satisfaga una condición:</p>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-purple-300 overflow-x-auto border border-gray-800"><code>intentos = 0
MIENTRAS intentos &lt; 3 Y clave_incorrecta HACER
    Escribir "Ingrese su contraseña:"
    Leer clave
    intentos = intentos + 1
FIN_MIENTRAS</code></pre>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulador de Comandos en Pseudocódigo",
          description: "Explora los comandos estándar utilizados en pseudocódigo y conoce su propósito y sintaxis de aplicación:",
          widget: {
            file: "widgets/programacion/u01_comandos_pseudocodigo.html",
            title: "Comandos Principales de Pseudocódigo",
            height: "520px"
          }
        }
      ]
    },
    {
      id: "ejemplo-pseudocodigo",
      title: "2. Ejemplo Práctico en Pseudocódigo: Determinar Mayoría de Edad",
      shortTitle: "Ejemplo práctico",
      icon: "fa-laptop-code",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Examinemos la solución algorítmica completa en pseudocódigo para resolver el problema clásico de verificar si una persona es mayor de edad:
        </p>

        <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-x-auto my-4 shadow-xl">
          <pre><code>INICIO
    // Entrada: Solicitar y capturar la edad del usuario
    Escribir "Ingresa tu edad:"
    Leer edad
    
    // Proceso y Decisión Condicional
    SI edad &gt;= 18 ENTONCES
        // Salida para camino verdadero
        Escribir "Eres mayor de edad."
    SINO
        // Salida para camino falso
        Escribir "Eres menor de edad."
    FIN_SI
FIN</code></pre>
        </div>

        <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4 my-4">
          <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-magnifying-glass"></i> Traza de Ejecución
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans">
            Si el usuario ingresa <code class="text-emerald-400 font-mono">20</code>, la condición <code class="text-amber-300 font-mono">20 &gt;= 18</code> es verdadera, por lo que el programa ejecuta la rama positiva e imprime <em>"Eres mayor de edad."</em> Si ingresa <code class="text-rose-400 font-mono">15</code>, se desvía a la rama <code class="text-rose-400 font-mono">SINO</code> imprimiendo <em>"Eres menor de edad."</em>
          </p>
        </div>
      `,
      interactive: [
        {
          category: "practica",
          title: "Emparejamiento de Fases del Algoritmo",
          description: "Asocia cada bloque o fase del algoritmo de mayoría de edad con su componente lógico correspondiente:",
          widget: {
            file: "widgets/programacion/u01_ejercicio3_emparejamiento_fases.html",
            title: "Ejercicio: Emparejamiento de Fases del Algoritmo",
            height: "360px"
          }
        }
      ]
    },
    {
      id: "diagramas-flujo",
      title: "3. Diagrama de Flujo y Simbología Estándar",
      shortTitle: "Diagramas de flujo",
      icon: "fa-project-diagram",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Un <strong>diagrama de flujo</strong> es una representación gráfica y visual de un algoritmo que utiliza símbolos geométricos estandarizados (rectángulos, rombos, óvalos, paralelogramos) interconectados por flechas direccionales para ilustrar el flujo paso a paso de la ejecución. A diferencia del pseudocódigo, no emplea texto informal en líneas consecutivas, sino esquemas visuales de alto impacto cognitivo.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <h4 class="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-shapes"></i> Características Visuales
            </h4>
            <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li><strong>Simbología estándar ANSI/ISO:</strong> Cada figura geométrica tiene un significado único e inequívoco (inicio/fin, proceso, decisión, entrada/salida).</li>
              <li><strong>Claridad visual inmediata:</strong> Permite rastrear la lógica del algoritmo de un solo vistazo siguiendo las flechas de dirección.</li>
              <li><strong>Independencia tecnológica:</strong> Representa la solución conceptual antes de traducirla a cualquier lenguaje específico.</li>
            </ul>
          </div>

          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-bolt"></i> ¿Por qué debemos utilizarlos?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li><strong>Detección rápida de bucles infinitos:</strong> La representación gráfica expone de forma inmediata cuando una ruta carece de salida o una iteración no converge.</li>
              <li><strong>Validación con interesados no técnicos:</strong> Ayuda a que directivos y clientes comprendan la lógica de negocio sin requerir conocimientos técnicos de programación.</li>
              <li><strong>Documentación y auditoría:</strong> Sirve como mapa arquitectónico de procesos complejos para integración y mantenimiento.</li>
            </ul>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Catálogo Interactivo de Símbolos ANSI",
          description: "Conoce cada una de las figuras normativas estándar (ANSI/ISO) y su función en la construcción de diagramas de flujo:",
          widget: {
            file: "widgets/programacion/u01_simbolos_diagrama.html",
            title: "Simbología Estándar de Diagramas de Flujo",
            height: "520px"
          }
        },
        {
          category: "practica",
          title: "Opción Múltiple: Simbología y Conceptos",
          description: "Verifica tu dominio sobre las figuras geométricas canónicas y los conceptos clave de la representación algorítmica:",
          widget: {
            file: "widgets/programacion/u01_ejercicio4_opcion_multiple.html",
            title: "Ejercicio: Opción Múltiple de Algoritmos",
            height: "380px"
          }
        }
      ]
    },
    {
      id: "simulacion-diagrama-flujo",
      title: "4. Simulación y Trazabilidad Visual de Diagramas de Flujo",
      shortTitle: "Simulación de flujo",
      icon: "fa-play-circle",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          A continuación se presenta el diagrama de flujo interactivo correspondiente al problema de la mayoría de edad. Ingresa una edad, presiona <strong>Simular Flujo</strong> y observa cómo la señal se propaga paso a paso iluminando cada nodo y flecha en tiempo real:
        </p>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulación y Trazabilidad Visual de Diagrama de Flujo",
          description: "Ingresa una edad y observa cómo la señal se propaga paso a paso iluminando cada nodo y flecha en tiempo real según la condición lógica:",
          widget: {
            file: "widgets/programacion/u01_diagrama_flujo_animado.html",
            title: "Simulador Interactivo con Trazado de Flujo (Mayoría de Edad)",
            height: "560px"
          }
        }
      ]
    },
    {
      id: "problemas-resueltos",
      title: "5. Problemas Resueltos: Pseudocódigo vs Diagrama de Flujo y Depurador",
      shortTitle: "Problemas resueltos",
      icon: "fa-code-compare",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          La mejor manera de afianzar el dominio algorítmico es comparar en paralelo cómo se modelan formalmente problemas típicos mediante texto estructurado (pseudocódigo) frente a geometría conectada (diagramas de flujo).
        </p>
        <p class="text-xs text-gray-400 leading-relaxed">
          Los cuatro problemas clásicos de formación computacional incluyen:
        </p>
        <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 my-3 font-sans">
          <li><strong>Problema 1 (Suma):</strong> Estructura puramente secuencial y cálculo directo de la suma de dos números enteros.</li>
          <li><strong>Problema 2 (Mayor de dos números):</strong> Estructura condicional alternativa doble (<code class="text-amber-300">SI-SINO</code>) para determinar el valor máximo.</li>
          <li><strong>Problema 3 (Contador 1 a N):</strong> Estructura repetitiva (<code class="text-purple-300">MIENTRAS</code>) con actualización incremental de variable iterativa.</li>
          <li><strong>Problema 4 (Tabla de multiplicar):</strong> Estructura de ciclo condicionado para generar e imprimir productos sucesivos.</li>
        </ul>
      `,
      interactive: [
        {
          category: "explora",
          title: "Depurador Visual de Problemas Resueltos",
          description: "Compara en paralelo pseudocódigo frente a flujograma e interactúa con el depurador visual paso a paso para inspeccionar el estado de memoria en cuatro algoritmos resueltos:",
          widget: {
            file: "widgets/programacion/u01_problemas_resueltos_debugger.html",
            title: "Problemas Resueltos y Depurador Visual Interactivo",
            height: "640px"
          }
        }
      ]
    },
    {
      id: "comparativa-representaciones",
      title: "6. ¿Cuándo usar Pseudocódigo y cuándo Diagramas de Flujo?",
      shortTitle: "Cuándo usar cada uno",
      icon: "fa-scale-balanced",
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <!-- Pseudocódigo -->
          <div class="bg-[#101915] border border-emerald-900/60 rounded-xl p-5">
            <h4 class="text-emerald-400 font-semibold text-sm mb-3 flex items-center gap-2">
              <i class="fas fa-file-code"></i> ¿Cuándo preferir Pseudocódigo?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2.5">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Algoritmos complejos con muchas líneas:</strong> Se redacta y edita mucho más rápido en cualquier editor de texto simple.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Estructuras de datos intrincadas:</strong> Expresar arreglos multidimensionales o llamadas a funciones es más natural en texto.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Transición inmediata al código:</strong> La distancia sintáctica entre pseudocódigo y código real (C++, Python) es mínima.</span>
              </li>
            </ul>
          </div>

          <!-- Diagrama de Flujo -->
          <div class="bg-[#141923] border border-sky-900/60 rounded-xl p-5">
            <h4 class="text-sky-400 font-semibold text-sm mb-3 flex items-center gap-2">
              <i class="fas fa-diagram-project"></i> ¿Cuándo preferir Diagramas de Flujo?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2.5">
              <li class="flex items-start gap-2">
                <span class="text-sky-400 font-bold">•</span>
                <span><strong>Procesos con bifurcaciones visuales claras:</strong> Excelente para flujos de decisiones condicionales y máquinas de estados.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-sky-400 font-bold">•</span>
                <span><strong>Exposiciones y reuniones multidisciplinarias:</strong> Permite que personas de diversas áreas comprendan el flujo sin intimidarse por texto técnico.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-sky-400 font-bold">•</span>
                <span><strong>Etapa de diseño preliminar:</strong> Ideal para maquetar el recorrido global antes de descender al detalle fino de las variables.</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ]
};

  /**
 * CONTENIDO EDUCATIVO DETALLADO: EXPRESIONES Y NOTACIÓN ARITMÉTICA
 * Unidad 01 - Fundamentos de la Programación
 * Prof. Leo Gaviria - Programación
 */

const EXPRESIONES_NOTACION_DATA = {
  id: "prog-expresiones-notacion",
  title: "1.3 Expresiones y notación aritmética",
  subtitle: "Operadores, jerarquía PEMDAS, árboles sintácticos (AST), notaciones Infija/Prefija/Postfija, convenciones PEP 8 y evaluación.",
  unit: 1,
  unitTitle: "Unidad 01: Fundamentos de la programación",
  week: 1,
  weekTitle: "Unidad 01: Fundamentos de la programación",
  difficulty: "Fácil",
  category: "Fundamentos de la Programación",
  timeEstimate: "35 minutos",
  badges: [
    { text: "Unidad 01", type: "neutral" },
    { text: "Fácil", type: "easy" },
    { text: "Árboles AST", type: "teal" },
    { text: "Notación RPN", type: "purple" },
    { text: "PEP 8", type: "blue" },
    { text: "Quiz Evaluativo", type: "rose" }
  ],
  sections: [
    {
      id: "expresiones-ast",
      title: "1. Expresiones Aritméticas y Árboles Sintácticos (AST)",
      shortTitle: "Expresiones y árboles AST",
      icon: "fa-calculator",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Una <strong>expresión aritmética</strong> es una combinación válida de:
        </p>
        <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4 font-sans">
          <li><strong>Operandos:</strong> Números, constantes o variables (ej. <code class="text-sky-300 font-mono">5</code>, <code class="text-sky-300 font-mono">x</code>, <code class="text-sky-300 font-mono">12</code>).</li>
          <li><strong>Operadores:</strong> Símbolos aritméticos que representan una operación (<code class="text-amber-300 font-mono">+</code>, <code class="text-amber-300 font-mono">-</code>, <code class="text-amber-300 font-mono">*</code>, <code class="text-amber-300 font-mono">/</code>, <code class="text-amber-300 font-mono">^</code>).</li>
          <li><strong>Símbolos de agrupación:</strong> Paréntesis <code class="text-emerald-400 font-mono">()</code> o corchetes <code class="text-emerald-400 font-mono">[]</code> para definir el orden explícito de evaluación.</li>
        </ul>
        <p class="text-xs text-gray-300 leading-relaxed mb-4">
          El resultado de evaluar una expresión aritmética es siempre un <strong>único valor numérico</strong>.
        </p>

        <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
          <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-tree"></i> Árboles de Expresiones (AST - Abstract Syntax Tree)
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans mb-3">
            Toda expresión aritmética puede modelarse matemáticamente como un <strong>Árbol Sintáctico Abstracto</strong>, donde:
          </p>
          <ul class="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-sans">
            <li>Los <strong>Nodos Internos</strong> (raíces y ramas) son los <strong>Operadores</strong> (<code class="text-amber-300 font-mono">*</code>, <code class="text-amber-300 font-mono">+</code>, <code class="text-amber-300 font-mono">-</code>).</li>
            <li>Las <strong>Hojas</strong> (extremos terminales) son los <strong>Operandos</strong> (<code class="text-sky-300 font-mono">A</code>, <code class="text-sky-300 font-mono">B</code>, <code class="text-sky-300 font-mono">C</code>, <code class="text-sky-300 font-mono">D</code>).</li>
          </ul>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Recorrido Paso a Paso en Árboles de Expresión AST",
          description: "Explora la animación del recorrido paso a paso a través de los nodos del árbol sintáctico para comprender cómo se generan secuencialmente cada una de las notaciones:",
          widget: {
            file: "widgets/programacion/u01_recorrido_pasos.html",
            title: "Recorrido Paso a Paso en Árboles de Expresión",
            height: "560px"
          }
        }
      ]
    },
    {
      id: "notaciones-aritmeticas",
      title: "2. Notaciones Aritméticas: Infija, Prefija y Postfija (RPN)",
      shortTitle: "Notaciones aritméticas",
      icon: "fa-shuffle",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Según la posición relativa de los operadores respecto a los operandos en el recorrido del árbol, existen tres notaciones principales:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <span class="text-[10px] font-mono font-bold uppercase text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">Infija</span>
            <h4 class="text-white font-bold text-sm mt-2 mb-1">Operador en medio</h4>
            <p class="text-xs text-gray-400 leading-relaxed">Formato estándar para humanos. Requiere paréntesis y reglas de precedencia.</p>
            <div class="mt-3 text-xs font-mono text-emerald-400 bg-[#0a0d14] p-2 rounded">(A + B) * (C - D)</div>
          </div>

          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <span class="text-[10px] font-mono font-bold uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Prefija (Polaca)</span>
            <h4 class="text-white font-bold text-sm mt-2 mb-1">Operador antes</h4>
            <p class="text-xs text-gray-400 leading-relaxed">Recorrido Preorden (Raíz, Izquierda, Derecha). No requiere paréntesis.</p>
            <div class="mt-3 text-xs font-mono text-amber-300 bg-[#0a0d14] p-2 rounded">* + A B - C D</div>
          </div>

          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <span class="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Postfija (RPN)</span>
            <h4 class="text-white font-bold text-sm mt-2 mb-1">Operador después</h4>
            <p class="text-xs text-gray-400 leading-relaxed">Recorrido Postorden (Izquierda, Derecha, Raíz). Ideal para evaluación con Pilas.</p>
            <div class="mt-3 text-xs font-mono text-purple-300 bg-[#0a0d14] p-2 rounded">A B + C D - *</div>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Conversor Interactivo de Notaciones Aritméticas",
          description: "Experimenta la conversión entre notación Infija, Prefija y Postfija (RPN), y analiza cómo se organizan los operadores sin necesidad de paréntesis:",
          widget: {
            file: "widgets/programacion/u01_notaciones_aritmeticas.html",
            title: "Notaciones Aritméticas (Infija, Prefija, Postfija)",
            height: "480px"
          }
        },
        {
          category: "practica",
          title: "Prueba de Escritorio Interactiva",
          description: "Una prueba de escritorio es una simulación manual paso a paso de la ejecución de un algoritmo o expresión, registrando en una tabla los valores que van tomando las variables en cada instrucción:",
          widget: {
            file: "widgets/programacion/u01_ejercicio7_prueba_escritorio.html",
            title: "Ejercicio: Prueba de Escritorio Interactiva",
            height: "380px"
          }
        }
      ]
    },
    {
      id: "convenciones-nomenclatura",
      title: "3. Convenciones de Nomenclatura y Código Auto-Documentado",
      shortTitle: "Buenas prácticas de código",
      icon: "fa-font",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Al escribir código, es crucial adoptar convenciones de nombres consistentes para mejorar la legibilidad y el mantenimiento. Recuerda: <strong>el código se lee muchas más veces de las que se escribe</strong>.
        </p>

        <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Convención</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Regla / Formato</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Uso Común</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-800/60">
              <tr>
                <td class="font-bold text-sky-400 py-2 px-3 font-mono">snake_case</td>
                <td class="py-2 px-3">Minúsculas separadas por guión bajo (<code class="text-sky-300">_</code>).</td>
                <td class="py-2 px-3">Variables y funciones en Python (PEP 8), C, SQL.</td>
                <td class="py-2 px-3 font-mono text-emerald-400">saldo_cuenta, calcular_iva()</td>
              </tr>
              <tr>
                <td class="font-bold text-amber-400 py-2 px-3 font-mono">camelCase</td>
                <td class="py-2 px-3">Inicia en minúscula; siguientes palabras con mayúscula inicial.</td>
                <td class="py-2 px-3">Variables y métodos en JavaScript, Java, C#.</td>
                <td class="py-2 px-3 font-mono text-amber-300">saldoCuenta, calcularIva()</td>
              </tr>
              <tr>
                <td class="font-bold text-purple-400 py-2 px-3 font-mono">PascalCase</td>
                <td class="py-2 px-3">Todas las palabras inician con mayúscula.</td>
                <td class="py-2 px-3">Clases y Tipos de datos en la gran mayoría de lenguajes.</td>
                <td class="py-2 px-3 font-mono text-purple-300">CuentaBancaria, CalculadoraIva</td>
              </tr>
              <tr>
                <td class="font-bold text-rose-400 py-2 px-3 font-mono">kebab-case</td>
                <td class="py-2 px-3">Minúsculas separadas por guión medio (<code class="text-rose-300">-</code>).</td>
                <td class="py-2 px-3">Nombres de archivos, URLs, clases en HTML/CSS.</td>
                <td class="py-2 px-3 font-mono text-rose-300">tarjeta-usuario, menu-principal</td>
              </tr>
              <tr>
                <td class="font-bold text-teal-400 py-2 px-3 font-mono">SCREAMING_SNAKE</td>
                <td class="py-2 px-3">Mayúsculas separadas por guión bajo (<code class="text-teal-300">_</code>).</td>
                <td class="py-2 px-3">Constantes cuyo valor no muta nunca.</td>
                <td class="py-2 px-3 font-mono text-teal-300">VALOR_PI, MAX_REINTENTOS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-[#121622] border border-gray-800 rounded-xl p-4 my-4">
          <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-file-signature"></i> El Concepto de "Código Auto-Documentado"
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans mb-2">
            La regla de oro moderna en ingeniería de software es: <strong>El mejor comentario es el que no se escribe porque el nombre de la variable o función lo explica todo por sí solo.</strong>
          </p>
          <ul class="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-sans">
            <li>❌ <code>d = 10  # Días de retraso del cliente</code> ➔ ✅ <code>dias_retraso_cliente = 10</code></li>
            <li>❌ <code>valido = True</code> ➔ ✅ <code>es_correo_valido = True</code></li>
            <li>❌ <code>m_desc</code> ➔ ✅ <code>monto_descuento_promocional</code></li>
          </ul>
        </div>
      `,
      interactive: [
        {
          category: "practica",
          title: "Casillas de Verificación: Propiedades y Convenciones",
          description: "Pon a prueba tus conocimientos seleccionando todas las afirmaciones correctas sobre árboles AST, notaciones y convenciones de nomenclatura PEP 8:",
          widget: {
            file: "widgets/programacion/u01_ejercicio6_casillas_verificacion.html",
            title: "Ejercicio: Casillas de Verificación (Convenciones de Nombres)",
            height: "410px"
          }
        }
      ]
    }
  ],
  comprueba: {
    title: "Quiz de Evaluación: Fundamentos, Representación y Expresiones",
    description: "Pon a prueba tus conocimientos sobre toda la Unidad 01 (Algoritmos, Programación, Metodología de resolución, Pseudocódigo, Diagramas de flujo, Expresiones aritméticas y Convenciones de nomenclatura) respondiendo el siguiente cuestionario evaluativo de 10 preguntas:",
    widget: {
      file: "widgets/programacion/u01_fundamentos_quiz.html",
      title: "Quiz Interactivo - Unidad 01: Fundamentos de la Programación",
      height: "490px"
    }
  }
};

  /**
 * CONTENIDO EDUCATIVO: NOTACIÓN BIG-O Y COMPLEJIDAD ASINTÓTICA
 * Unidad 09 - Análisis y Complejidad de Algoritmos
 * Prof. Leo Gaviria - Programación
 */

const BIG_O_DATA = {
  id: "big-o-notation",
  title: "9.1 Notación Big-O y complejidad asintótica",
  subtitle: "Fundamentos de análisis de algoritmos, cotas asintóticas (O, Ω, Θ), reglas de cálculo paso a paso y casos de estudio comparativos.",
  unit: 9,
  unitTitle: "Unidad 09: Análisis y complejidad de algoritmos",
  week: 9,
  weekTitle: "Unidad 09: Análisis y complejidad de algoritmos",
  difficulty: "Media",
  category: "Complejidad Algorítmica",
  timeEstimate: "45 minutos",
  badges: [
    { text: "Unidad 09", type: "neutral" },
    { text: "Media", type: "medium" },
    { text: "Gráfica Chart.js", type: "purple" },
    { text: "Big-O", type: "rose" }
  ],
  sections: [
    {
      id: "en-que-consiste",
      title: "1. ¿En qué consiste la Notación Big-O?",
      shortTitle: "¿En qué consiste?",
      icon: "fa-book-open",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          La <strong>notación Big-O</strong> (o cota superior asintótica) describe el comportamiento limitante de una función cuando el argumento tiende hacia un valor particular o al infinito. En ciencias de la computación, se utiliza para clasificar algoritmos según cómo crecen sus requerimientos de tiempo de ejecución o espacio en memoria a medida que el tamaño de entrada \(n\) se incrementa de forma arbitraria.
        </p>
        <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4 my-4">
          <h4 class="text-purple-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-lightbulb"></i> Definición Formal Matemática
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-mono">
            f(n) = O(g(n)) &hArr; &exist; c > 0, n₀ > 0 tales que 0 &le; f(n) &le; c &middot; g(n) &forall; n &ge; n₀
          </p>
          <p class="text-xs text-gray-400 mt-2 leading-relaxed">
            Esto garantiza formalmente que, para volúmenes de datos suficientemente grandes (\(n \ge n_0\)), la función de tiempo \(f(n)\) nunca crecerá a una tasa superior que la función patrón \(g(n)\) escalada por un factor constante \(c\).
          </p>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Visualizador Interactivo de Curvas Asintóticas",
          description: "Experimenta con el crecimiento asintótico de cada orden de complejidad en una gráfica interactiva basada en Chart.js, ajustando el valor de entrada n para comparar cómo divergen exponencialmente las funciones:",
          widget: {
            file: "widgets/programacion/big_o_visualizer.html",
            title: "Simulador de Curvas de Complejidad Big-O",
            height: "560px"
          }
        }
      ]
    },
    {
      id: "tabla-ordenes",
      title: "2. Jerarquía de Órdenes de Complejidad",
      shortTitle: "Jerarquía de órdenes",
      icon: "fa-arrow-down-short-wide",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          No todas las funciones crecen a la misma velocidad. Comprender la jerarquía asintótica permite identificar de inmediato qué algoritmos son viables para procesar grandes volúmenes de datos en entornos de producción y cuáles colapsarán por agotamiento de recursos.
        </p>
        <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th>Notación</th>
                <th>Nombre Común</th>
                <th>Comportamiento para n = 1,000</th>
                <th>Ejemplo Canónico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code class="text-emerald-400 font-bold">O(1)</code></td>
                <td>Constante</td>
                <td>1 operación fija</td>
                <td>Acceso a índice de arreglo, push en pila, sumatoria por Gauss</td>
              </tr>
              <tr>
                <td><code class="text-teal-400 font-bold">O(log n)</code></td>
                <td>Logarítmica</td>
                <td>~10 operaciones (división sucesiva a la mitad)</td>
                <td>Búsqueda binaria, búsqueda en ABB balanceado</td>
              </tr>
              <tr>
                <td><code class="text-sky-400 font-bold">O(n)</code></td>
                <td>Lineal</td>
                <td>1,000 operaciones proporcionales</td>
                <td>Búsqueda lineal, suma con bucle for, Fibonacci memoizado</td>
              </tr>
              <tr>
                <td><code class="text-amber-400 font-bold">O(n log n)</code></td>
                <td>Linearítmica</td>
                <td>~10,000 operaciones</td>
                <td>Merge Sort, QuickSort (caso promedio), Heap Sort</td>
              </tr>
              <tr>
                <td><code class="text-rose-400 font-bold">O(n²)</code></td>
                <td>Cuadrática</td>
                <td>1,000,000 operaciones (bucles anidados)</td>
                <td>Bubble Sort, Selection Sort, Insertion Sort, multiplicación matricial básica</td>
              </tr>
              <tr>
                <td><code class="text-purple-400 font-bold">O(2ⁿ)</code></td>
                <td>Exponencial</td>
                <td>1.07 &times; 10³⁰⁰ op. (Intratable en la práctica)</td>
                <td>Fibonacci recursivo sin memoización, Torres de Hanoi</td>
              </tr>
              <tr>
                <td><code class="text-red-500 font-bold">O(n!)</code></td>
                <td>Factorial</td>
                <td>&infin; (Explosión combinatoria absoluta)</td>
                <td>Fuerza bruta para el Problema del Viajante (TSP)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      interactive: [
        {
          category: "practica",
          title: "Reto Interactivo: Ordenar Jerarquía Big-O",
          description: "Pon a prueba tu intuición sobre la tasa de crecimiento asintótico ordenando las complejidades desde la más eficiente (crecimiento más lento) hasta la menos eficiente:",
          widget: {
            file: "widgets/programacion/u09_ejercicio1_jerarquia.html",
            title: "Reto: Jerarquía de Órdenes",
            height: "460px"
          }
        }
      ]
    },
    {
      id: "metodologia-calculo",
      title: "3. Metodología para el Cálculo de la Complejidad Paso a Paso",
      shortTitle: "Cálculo de complejidad",
      icon: "fa-calculator",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Para determinar la complejidad de un algoritmo no se cronometran segundos en un procesador particular (lo cual dependería de la CPU, la memoria y el sistema operativo), sino que se aplica una <strong>metodología formal de conteo de instrucciones fundamentales</strong>:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
            <h4 class="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">1</span>
              <span>Identificar la Entrada y la Operación Básica</span>
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              Determina la variable que representa el tamaño del problema (\(n\)) y localiza la <strong>operación básica</strong>: aquella que más se repite o que contribuye en mayor proporción al tiempo total de cómputo (ej. comparaciones, asignaciones o sumas).
            </p>
          </div>

          <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
            <h4 class="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">2</span>
              <span>Contar Frecuencias y Formular T(n)</span>
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              Analiza las repeticiones en bucles (\(1, 2, \dots, n \implies n\) iteraciones). Expresa el costo total como una función matemática formal: <br>
              <code class="text-purple-300 font-mono">T(n) = c₁·n + c₂</code>
            </p>
          </div>

          <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
            <h4 class="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">3</span>
              <span>Descartar Constantes y Términos Menores</span>
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              Cuando \(n \to \infty\), las constantes multiplicativas y los términos de menor orden se vuelven irrelevantes frente al término dominante: <br>
              <code class="text-sky-300 font-mono">5n² + 20n + 100 ➔ Dominante: n²</code>
            </p>
          </div>

          <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
            <h4 class="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">4</span>
              <span>Establecer la Notación Big-O Final</span>
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              El término de mayor crecimiento define la clasificación asintótica del algoritmo: <br>
              <code class="text-amber-300 font-mono">T(n) = O(g(n))</code>
            </p>
          </div>
        </div>

        <div class="bg-[#111422] border border-blue-500/30 rounded-xl p-4 my-4">
          <h4 class="text-blue-400 font-bold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-balance-scale"></i> Caso de Estudio: Sumatoria por Bucle vs Fórmula Cerrada de Gauss
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed mb-2">
            Comparar la sumatoria de los primeros \(n\) enteros ilustra el poder de la optimización matemática algorítmica:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div class="bg-[#090d13] p-3 rounded-lg border border-gray-800">
              <span class="text-amber-400 font-bold block mb-1">Enfoque Iterativo (for):</span>
              <code>for i in range(1, n + 1): suma += i</code><br>
              <span class="text-gray-400">T(n) = n pasos ➔ </span><span class="text-sky-300 font-bold">O(n) Lineal</span>
            </div>
            <div class="bg-[#090d13] p-3 rounded-lg border border-gray-800">
              <span class="text-emerald-400 font-bold block mb-1">Enfoque Matemático (Gauss):</span>
              <code>return n * (n + 1) // 2</code><br>
              <span class="text-gray-400">T(n) = 1 operación ➔ </span><span class="text-emerald-300 font-bold">O(1) Constante</span>
            </div>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulador de Cálculo Paso a Paso y Depuración de Complejidad",
          description: "Ejecuta línea por línea los algoritmos fundamentales en Python 3.12 y C++ 20, observando el cálculo acumulado del costo parcial y la derivación matemática formal:",
          widget: {
            file: "widgets/programacion/u09_calculo_complejidad.html",
            title: "Depurador de Complejidad Paso a Paso",
            height: "720px"
          }
        }
      ]
    },
    {
      id: "escenarios-complejidad",
      title: "4. Escenarios de Complejidad: Mejor (Ω), Promedio (Θ) y Peor Caso (O)",
      shortTitle: "Escenarios (Ω, Θ, O)",
      icon: "fa-tachometer-alt",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          El tiempo de ejecución no depende únicamente del tamaño de la entrada \(n\), sino también de la <strong>distribución particular de los datos recibidos</strong>:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
          <div class="bg-[#0d1712] border border-emerald-500/30 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center text-sm">&Omega;</span>
              <h4 class="text-emerald-300 font-bold text-sm">Mejor Caso (Omega)</h4>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">
              Cota inferior asintótica. Representa el menor número de operaciones posibles bajo la entrada más favorable.
            </p>
            <div class="mt-2 text-[11px] font-mono text-emerald-400 bg-[#09110d] p-2 rounded border border-emerald-500/20">
              Ej: Dato en la primera posición A[0] ➔ &Omega;(1)
            </div>
          </div>

          <div class="bg-[#0d1622] border border-sky-500/30 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-6 h-6 rounded-md bg-sky-500/20 text-sky-400 font-mono font-bold flex items-center justify-center text-sm">&Theta;</span>
              <h4 class="text-sky-300 font-bold text-sm">Caso Promedio (Theta)</h4>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">
              Cota ajustada asintótica. Comportamiento estadístico esperado al promediar todas las posibles entradas válidas.
            </p>
            <div class="mt-2 text-[11px] font-mono text-sky-400 bg-[#091018] p-2 rounded border border-sky-500/20">
              Ej: Búsqueda binaria ➔ &Theta;(log n)
            </div>
          </div>

          <div class="bg-[#220f13] border border-rose-500/30 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 font-mono font-bold flex items-center justify-center text-sm">O</span>
              <h4 class="text-rose-300 font-bold text-sm">Peor Caso (Big-O)</h4>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">
              Cota superior asintótica. Garantía formal del límite máximo de tiempo bajo la configuración más desfavorable de datos.
            </p>
            <div class="mt-2 text-[11px] font-mono text-rose-400 bg-[#160a0d] p-2 rounded border border-rose-500/20">
              Ej: Elemento no existe en lista ➔ O(n)
            </div>
          </div>
        </div>

        <div class="bg-[#141923] border border-gray-800 rounded-xl p-4 my-4">
          <h4 class="text-amber-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-search"></i> Demostración Formal: Búsqueda Binaria y el Origen de O(log n)
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed mb-3">
            En un arreglo ordenado de tamaño \(n\), cada comparación descarta la mitad del arreglo restante:
          </p>
          <div class="bg-[#0d1117] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-300 space-y-1.5 leading-relaxed">
            <div>Paso 1: \(n\) elementos restantes.</div>
            <div>Paso 2: \(n / 2\) elementos restantes.</div>
            <div>Paso 3: \(n / 4 = n / 2^2\) elementos restantes.</div>
            <div>Paso k: \(n / 2^k\) elementos restantes.</div>
            <div class="pt-1 text-emerald-400 font-bold">El algoritmo termina en el peor caso cuando queda 1 elemento:</div>
            <div>\(n / 2^k = 1 \implies n = 2^k \implies k = \log_2(n)\)</div>
            <div class="text-purple-300 font-bold">Por lo tanto, la complejidad en el peor caso es O(log n).</div>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "practica",
          title: "Clasificador Interactivo de Escenarios y Término Dominante",
          description: "Evalúa situaciones de ejecución reales e identifica la cota asintótica adecuada para el mejor caso (Ω), peor caso (O) y término polinomial dominante:",
          widget: {
            file: "widgets/programacion/u09_ejercicio2_escenarios.html",
            title: "Practica: Escenarios y Dominancia",
            height: "500px"
          }
        }
      ]
    },
    {
      id: "algoritmos-recursivos-fibonacci",
      title: "5. Algoritmos Recursivos y Optimización: El Paradigma de Fibonacci",
      shortTitle: "Recursión y optimización",
      icon: "fa-sitemap",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          El cálculo de la sucesión de Fibonacci (\(F_0=0, F_1=1, F_n = F_{n-1} + F_{n-2}\)) es el ejemplo por excelencia para entender cómo la elección de una estructura de control y el manejo de memoria transforman un algoritmo impracticable en una solución óptima:
        </p>

        <div class="space-y-4 my-4">
          <!-- 1. Recursivo Simple -->
          <div class="bg-[#141419] border border-rose-500/30 rounded-xl p-4">
            <div class="flex items-center justify-between gap-2 mb-2 flex-wrap">
              <h4 class="text-rose-400 font-bold text-sm flex items-center gap-2">
                <i class="fas fa-exclamation-triangle"></i> 1. Fibonacci Recursivo Directo (Fuerza Bruta)
              </h4>
              <div class="flex items-center gap-2 text-xs font-mono">
                <span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">Tiempo: O(2ⁿ)</span>
                <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Espacio: O(n)</span>
              </div>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed mb-2">
              Cada llamada genera dos subllamadas idénticas que recalculan una y otra vez los mismos valores. La recurrencia \(T(n) = T(n-1) + T(n-2) + c\) genera un árbol binario con más de \(2^n\) nodos para valores moderados de \(n\). Para \(n = 50\), requeriría más de \(10^{15}\) operaciones.
            </p>
          </div>

          <!-- 2. Memoización -->
          <div class="bg-[#141419] border border-sky-500/30 rounded-xl p-4">
            <div class="flex items-center justify-between gap-2 mb-2 flex-wrap">
              <h4 class="text-sky-400 font-bold text-sm flex items-center gap-2">
                <i class="fas fa-memory"></i> 2. Fibonacci con Memoización (Programación Dinámica Top-Down)
              </h4>
              <div class="flex items-center gap-2 text-xs font-mono">
                <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Tiempo: O(n)</span>
                <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">Espacio: O(n)</span>
              </div>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed mb-2">
              Se utiliza un diccionario o tabla hash para almacenar los resultados previamente calculados. Si \(F(k)\) ya fue resuelto, se retorna en tiempo constante \(O(1)\), logrando reducir drásticamente el tiempo de exponencial \(O(2^n)\) a lineal \(O(n)\), con un costo de memoria adicional de \(O(n)\).
            </p>
          </div>

          <!-- 3. Iterativo Óptimo -->
          <div class="bg-[#141419] border border-emerald-500/30 rounded-xl p-4">
            <div class="flex items-center justify-between gap-2 mb-2 flex-wrap">
              <h4 class="text-emerald-400 font-bold text-sm flex items-center gap-2">
                <i class="fas fa-check-circle"></i> 3. Fibonacci Iterativo (Bottom-Up con Espacio Constante)
              </h4>
              <div class="flex items-center gap-2 text-xs font-mono">
                <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Tiempo: O(n)</span>
                <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Espacio: O(1)</span>
              </div>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed mb-2">
              Dado que para calcular \(F(n)\) solo necesitamos los dos valores inmediatamente anteriores (\(F_{n-1}\) y \(F_{n-2}\)), no es necesario almacenar todo el historial. Desplazar dos variables auxiliares (\(a\) y \(b\)) en un bucle permite resolver el problema en tiempo lineal \(O(n)\) con memoria constante \(O(1)\), logrando la eficiencia máxima.
            </p>
          </div>
        </div>

        <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th>Implementación</th>
                <th>Complejidad Temporal</th>
                <th>Complejidad Espacial</th>
                <th>Ventaja Principal</th>
                <th>Desventaja Crítica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-white">Recursivo Simple</td>
                <td><code class="text-rose-400 font-mono">O(2ⁿ)</code></td>
                <td><code class="text-amber-400 font-mono">O(n)</code> (Pila)</td>
                <td>Código matemáticamente idéntico a la definición</td>
                <td>Colapso computacional para n > 40</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Memoizado (Hash Map)</td>
                <td><code class="text-emerald-400 font-mono">O(n)</code></td>
                <td><code class="text-sky-400 font-mono">O(n)</code> (Diccionario)</td>
                <td>Evita recalcular subproblemas</td>
                <td>Requiere memoria adicional proporcional a n</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Iterativo (2 Variables)</td>
                <td><code class="text-emerald-400 font-mono">O(n)</code></td>
                <td><code class="text-emerald-400 font-mono">O(1)</code> (Constante)</td>
                <td>Máxima eficiencia temporal y espacial</td>
                <td>No conserva el historial completo de la serie</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  comprueba: {
    title: "Quiz de Evaluación: Complejidad Algorítmica y Notación Big-O",
    description: "Verifica tu dominio sobre cotas asintóticas (O, Ω, Θ), deducción matemática formal, análisis de ciclos y optimizaciones de tiempo y espacio con este cuestionario de 10 preguntas:",
    widget: {
      file: "widgets/programacion/u09_complejidad_quiz.html",
      title: "Quiz: Análisis y Complejidad",
      height: "490px"
    }
  }
};

  /**
 * CONTENIDO EDUCATIVO DETALLADO: BUBBLE SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

const BUBBLE_SORT_DATA = {
  id: "bubble-sort",
  title: "11.1 Bubble Sort",
  subtitle: "Algoritmo de intercambio elemental, optimización de bandera (swapped flag) y análisis de estabilidad.",
  unit: 11,
  unitTitle: "Unidad 11: Algoritmos de ordenamiento",
  week: 11,
  weekTitle: "Unidad 11: Algoritmos de ordenamiento",
  difficulty: "Fácil",
  category: "Algoritmos de Ordenamiento",
  timeEstimate: "25 minutos",
  badges: [
    { text: "Unidad 11", type: "neutral" },
    { text: "Fácil", type: "easy" },
    { text: "In-Place: O(1)", type: "teal" },
    { text: "Estable", type: "blue" },
    { text: "O(n²)", type: "rose" }
  ],
  sections: [
    {
      id: "en-que-consiste",
      title: "1. ¿En qué consiste?",
      shortTitle: "¿En qué consiste?",
      icon: "fa-book-open",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          El algoritmo de ordenación de burbuja o <strong>Bubble Sort</strong> es uno de los algoritmos más fundamentales y didácticos en ciencias de la computación. Su nombre proviene de la forma en que los elementos más grandes <em>"flotan"</em> gradualmente hacia la parte superior o final del arreglo, como burbujas de aire en el agua, mientras que los elementos pequeños se asientan lentamente en el fondo.
        </p>

        <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4 my-4">
          <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-lightbulb"></i> Idea Principal
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans">
            Tras la primera pasada, el elemento más grande se encuentra <strong>garantizado</strong> en la última posición. Tras la segunda pasada, el segundo elemento más grande ocupa su lugar. Después de <code>n - 1</code> pasadas, todo el arreglo queda completamente ordenado.
          </p>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulación Conceptual de Burbujas",
          description: "Visualización intuitiva con burbujas físicas que ascienden de acuerdo con su valor numérico:",
          widget: {
            file: "widgets/programacion/bubble_sort_concept.html",
            title: "Representación Conceptual - Paso por Paso de la Burbuja",
            height: "430px"
          }
        }
      ]
    },
    {
      id: "como-funciona",
      title: "2. ¿Cómo funciona? (Procedimiento)",
      shortTitle: "¿Cómo funciona?",
      icon: "fa-project-diagram",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          El algoritmo sigue un procedimiento iterativo simple compuesto por 4 pasos clave:
        </p>

        <ol class="space-y-3 mb-6 text-sm text-gray-300 list-none pl-0">
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">1</span>
            <div><strong>Recorrer la lista:</strong> Comenzar desde el primer elemento hasta el penúltimo del arreglo no ordenado.</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">2</span>
            <div><strong>Comparar adyacentes:</strong> Evaluar los elementos en las posiciones <code>arr[j]</code> y <code>arr[j + 1]</code>.</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">3</span>
            <div><strong>Intercambiar si es necesario:</strong> Si <code>arr[j] > arr[j + 1]</code>, se intercambian sus posiciones inmediatamente en memoria.</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">4</span>
            <div><strong>Optimización (Bandera Swapped):</strong> Al finalizar la pasada, si no se realizó ningún intercambio, el arreglo ya está ordenado y podemos terminar anticipadamente en tiempo <code>O(n)</code>.</div>
          </li>
        </ol>
      `,
      interactive: [
        {
          category: "explora",
          title: "Flujograma Interactivo SVG",
          description: "Diagrama de flujo interactivo con paneo y zoom que rastrea el ciclo anidado de comparaciones e intercambios:",
          widget: {
            file: "widgets/programacion/bubble_sort_flowchart.html",
            title: "Diagrama de Flujo Interactivo con Trazado y Zoom",
            height: "580px"
          }
        }
      ]
    },
    {
      id: "ejemplo-paso-a-paso",
      title: "3. Ejemplo Paso a Paso",
      shortTitle: "Ejemplo",
      icon: "fa-list-ol",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Consideremos el arreglo desordenado inicial: <code class="bg-gray-800 px-2 py-1 rounded text-emerald-400 font-mono">[5, 1, 4, 2, 8]</code>. Veamos la traza completa de ejecución:
        </p>

        <div class="space-y-4">
          <!-- Pasada 1 -->
          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-emerald-400 font-semibold text-sm">Pasada 1</span>
              <span class="text-xs text-gray-500 font-mono">arr = [5, 1, 4, 2, 8]</span>
            </div>
            <ul class="text-xs text-gray-300 space-y-2 font-mono">
              <li>• Comparar <span class="text-amber-400">5</span> y <span class="text-amber-400">1</span>: 5 &gt; 1 &rarr; <span class="text-rose-400 font-bold">Intercambiar</span> &rarr; [1, 5, 4, 2, 8]</li>
              <li>• Comparar <span class="text-amber-400">5</span> y <span class="text-amber-400">4</span>: 5 &gt; 4 &rarr; <span class="text-rose-400 font-bold">Intercambiar</span> &rarr; [1, 4, 5, 2, 8]</li>
              <li>• Comparar <span class="text-amber-400">5</span> y <span class="text-amber-400">2</span>: 5 &gt; 2 &rarr; <span class="text-rose-400 font-bold">Intercambiar</span> &rarr; [1, 4, 2, 5, 8]</li>
              <li>• Comparar <span class="text-amber-400">5</span> y <span class="text-amber-400">8</span>: 5 &lt; 8 &rarr; <span class="text-gray-400">No intercambiar</span> &rarr; [1, 4, 2, 5, 8]</li>
            </ul>
            <div class="mt-3 text-[11px] text-emerald-400/90 font-mono bg-emerald-950/20 border border-emerald-800/40 p-2 rounded">
              ✔ El número 8 queda fijo en su posición final al final del arreglo.
            </div>
          </div>

          <!-- Pasada 2 -->
          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-sky-400 font-semibold text-sm">Pasada 2</span>
              <span class="text-xs text-gray-500 font-mono">arr = [1, 4, 2, 5, 8]</span>
            </div>
            <ul class="text-xs text-gray-300 space-y-2 font-mono">
              <li>• Comparar <span class="text-amber-400">1</span> y <span class="text-amber-400">4</span>: 1 &lt; 4 &rarr; <span class="text-gray-400">No intercambiar</span> &rarr; [1, 4, 2, 5, 8]</li>
              <li>• Comparar <span class="text-amber-400">4</span> y <span class="text-amber-400">2</span>: 4 &gt; 2 &rarr; <span class="text-rose-400 font-bold">Intercambiar</span> &rarr; [1, 2, 4, 5, 8]</li>
              <li>• Comparar <span class="text-amber-400">4</span> y <span class="text-amber-400">5</span>: 4 &lt; 5 &rarr; <span class="text-gray-400">No intercambiar</span> &rarr; [1, 2, 4, 5, 8]</li>
            </ul>
            <div class="mt-3 text-[11px] text-sky-400/90 font-mono bg-sky-950/20 border border-sky-800/40 p-2 rounded">
              ✔ El número 5 queda fijo en su posición final.
            </div>
          </div>

          <!-- Pasada 3 -->
          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-purple-400 font-semibold text-sm">Pasada 3</span>
              <span class="text-xs text-gray-500 font-mono">arr = [1, 2, 4, 5, 8]</span>
            </div>
            <ul class="text-xs text-gray-300 space-y-2 font-mono">
              <li>• Comparar <span class="text-amber-400">1</span> y <span class="text-amber-400">2</span>: 1 &lt; 2 &rarr; <span class="text-gray-400">No intercambiar</span></li>
              <li>• Comparar <span class="text-amber-400">2</span> y <span class="text-amber-400">4</span>: 2 &lt; 4 &rarr; <span class="text-gray-400">No intercambiar</span></li>
            </ul>
            <div class="mt-3 text-[11px] text-purple-400/90 font-mono bg-purple-950/20 border border-purple-800/40 p-2 rounded">
              ✔ En esta pasada no hubo intercambios (swapped = False). ¡El arreglo está ordenado y el ciclo termina!
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-emerald-950/40 to-teal-950/20 border border-emerald-500/40 rounded-xl p-4 mt-4 flex items-center justify-between">
          <span class="text-sm font-semibold text-emerald-300">Resultado Final Ordenado:</span>
          <span class="font-mono text-base font-bold text-white bg-emerald-900/60 px-3 py-1 rounded border border-emerald-600/50">[1, 2, 4, 5, 8]</span>
        </div>
      `
    },
    {
      id: "codigo-implementacion",
      title: "4. Código de Implementación",
      shortTitle: "Código",
      icon: "fa-code",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          A continuación se presenta la implementación canónica de <strong>Bubble Sort con bandera de optimización</strong> en Python y C++:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <!-- Python -->
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-sky-400"><i class="fab fa-python mr-1"></i> Python</span>
              <span class="text-[10px] text-gray-500 font-mono">bubble_sort.py</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-sky-300 overflow-x-auto border border-gray-800"><code>def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # Si no hubo intercambios, ya está ordenado
        if not swapped:
            break
    return arr</code></pre>
          </div>

          <!-- C++ -->
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-emerald-400"><i class="fas fa-file-code mr-1"></i> C++</span>
              <span class="text-[10px] text-gray-500 font-mono">bubble_sort.cpp</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-emerald-400 overflow-x-auto border border-gray-800"><code>void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        bool swapped = false;
        for (int j = 0; j < n - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}</code></pre>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Visualizador y Simulador de Ejecución de Bubble Sort",
          description: "Observa en tiempo real cómo los elementos mayores 'burbujean' hacia su posición final, controlando la velocidad de simulación y personalizando los arreglos de entrada:",
          widget: {
            file: "widgets/programacion/bubble_sort_visualizer.html",
            title: "Visualizador Interactivo Sincronizado con Código y Barras",
            height: "720px"
          }
        }
      ]
    },
    {
      id: "analisis-complejidad",
      title: "5. Análisis de Complejidad (Big-O)",
      shortTitle: "Complejidad",
      icon: "fa-chart-pie",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          La eficiencia de Bubble Sort se evalúa analizando el número de comparaciones e intercambios necesarios en función del tamaño del arreglo \(n\):
        </p>

        <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Complejidad</th>
                <th>Explicación Detallada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-white">Tiempo (Peor Caso)</td>
                <td><code class="text-rose-400 font-mono font-bold">O(n²)</code></td>
                <td>Ocurre cuando el arreglo está ordenado en orden estrictamente inverso; realiza \(rac{n(n-1)}{2}\) comparaciones y el mismo número de intercambios.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Tiempo (Mejor Caso)</td>
                <td><code class="text-emerald-400 font-mono font-bold">Ω(n)</code></td>
                <td>Con la optimización de la bandera (<em>swapped flag</em>), si el arreglo ya está ordenado realiza solo 1 pasada con \(n - 1\) comparaciones y 0 intercambios.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Tiempo (Caso Promedio)</td>
                <td><code class="text-amber-400 font-mono font-bold">Θ(n²)</code></td>
                <td>Para arreglos en orden aleatorio, requiere aproximadamente \(rac{n^2}{4}\) comparaciones e intercambios.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Espacio Extra</td>
                <td><code class="text-sky-400 font-mono font-bold">O(1)</code></td>
                <td>Es un algoritmo <strong>in-place</strong>; no requiere arreglos auxiliares, solo un par de variables escalares de iteración (\(i, j\)).</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Estabilidad</td>
                <td><span class="text-emerald-400 font-semibold">Estable</span></td>
                <td>Preserva el orden relativo original de elementos con valores iguales, ya que solo intercambia cuando <code>arr[j] &gt; arr[j+1]</code> estricto.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "cuando-usar",
      title: "6. ¿Cuándo usarlo y cuándo no?",
      shortTitle: "Cuándo usar",
      icon: "fa-scale-balanced",
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <!-- Cuándo Usar -->
          <div class="bg-[#101915] border border-emerald-900/60 rounded-xl p-5">
            <h4 class="text-emerald-400 font-semibold text-sm mb-3 flex items-center gap-2">
              <i class="fas fa-check-circle"></i> ¿Cuándo USAR Bubble Sort?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2.5">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Datos casi ordenados:</strong> Si solo pocos elementos están fuera de lugar, la bandera permite terminar en tiempo \(O(n)\).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Colecciones pequeñas:</strong> Para menos de 20 elementos, su simplicidad y bajos factores constantes son convenientes.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Comprobación rápida:</strong> Una sola pasada determina si una lista ya está ordenada en \(O(n)\) y \(O(1)\) de memoria.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Fines didácticos:</strong> Ideal para enseñar la noción de invariantes, análisis asintótico e intercambios.</span>
              </li>
            </ul>
          </div>

          <!-- Cuándo NO Usar -->
          <div class="bg-[#1a1315] border border-rose-950/60 rounded-xl p-5">
            <h4 class="text-rose-400 font-semibold text-sm mb-3 flex items-center gap-2">
              <i class="fas fa-times-circle"></i> ¿Cuándo NO USAR Bubble Sort?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2.5">
              <li class="flex items-start gap-2">
                <span class="text-rose-400 font-bold">•</span>
                <span><strong>Grandes volúmenes de datos:</strong> Al ser \(O(n^2)\), con 100,000 elementos realiza 10,000,000,000 operaciones. En producción se prefieren QuickSort o MergeSort (\(O(n \log n)\)).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-rose-400 font-bold">•</span>
                <span><strong>Arreglos invertidos:</strong> Ejecuta el número máximo absoluto de escrituras en memoria.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-rose-400 font-bold">•</span>
                <span><strong>Sistemas de alto rendimiento:</strong> Incluso frente a Insertion Sort, Bubble Sort realiza muchas más escrituras y accesos a memoria.</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ],
  comprueba: {
    title: "Quiz de Evaluación: Bubble Sort",
    description: "Evalúa tu comprensión sobre Bubble Sort, sus invariantes y su complejidad respondiendo este cuestionario formativo:",
    widget: {
      file: "widgets/programacion/bubble_sort_quiz.html",
      title: "Quiz Interactivo - Bubble Sort",
      height: "490px"
    }
  }
};

  /**
 * CONTENIDO EDUCATIVO: SELECTION SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

const SELECTION_SORT_DATA = {
  id: "selection-sort",
  title: "11.2 Selection Sort",
  subtitle: "Ordenación por selección del mínimo, reducción cuadrática de intercambios y comportamiento inestable.",
  unit: 11,
  unitTitle: "Unidad 11: Algoritmos de ordenamiento",
  week: 11,
  weekTitle: "Unidad 11: Algoritmos de ordenamiento",
  difficulty: "Fácil",
  category: "Algoritmos de Ordenamiento",
  timeEstimate: "25 minutos",
  badges: [
    { text: "Unidad 11", type: "neutral" },
    { text: "Fácil", type: "easy" },
    { text: "In-Place: O(1)", type: "teal" },
    { text: "Inestable", type: "amber" },
    { text: "O(n²)", type: "rose" }
  ],
  sections: [
    {
      id: "en-que-consiste",
      title: "1. ¿En qué consiste?",
      shortTitle: "¿En qué consiste?",
      icon: "fa-book-open",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          El algoritmo de ordenación por selección o <strong>Selection Sort</strong> es otro de los métodos más sencillos y fundamentales en el aprendizaje de la programación. Al igual que el ordenamiento de burbuja, no es eficiente para grandes conjuntos de datos, pero es ideal para comprender la lógica de manipulación de arreglos.
        </p>
        <div class="bg-[#141923] border border-sky-500/30 rounded-xl p-4 my-4">
          <h4 class="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-lightbulb"></i> Idea Principal
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans">
            El algoritmo recibe este nombre porque en cada iteración <strong>"selecciona"</strong> el elemento más pequeño de la sección no ordenada y lo intercambia con el elemento al principio de dicha sección, colocándolo directamente en su posición definitiva.
          </p>
        </div>
      `
    },
    {
      id: "como-funciona",
      title: "2. ¿Cómo funciona?",
      shortTitle: "¿Cómo funciona?",
      icon: "fa-project-diagram",
      contentHtml: `
        <ol class="space-y-3 mb-6 text-sm text-gray-300 list-none pl-0">
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">1</span>
            <div><strong>Fijar el índice actual:</strong> Sea <code>i</code> el inicio de la porción desordenada. Asumir que el elemento mínimo está en <code>min_idx = i</code>.</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">2</span>
            <div><strong>Buscar el mínimo:</strong> Recorrer desde <code>j = i + 1</code> hasta el final. Si <code>arr[j] < arr[min_idx]</code>, actualizar <code>min_idx = j</code>.</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">3</span>
            <div><strong>Intercambiar:</strong> Si <code>min_idx != i</code>, intercambiar <code>arr[i]</code> con <code>arr[min_idx]</code>.</div>
          </li>
        </ol>
      `
    },
    {
      id: "codigo-implementacion",
      title: "3. Código de Implementación",
      shortTitle: "Código",
      icon: "fa-code",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          A continuación se presenta la implementación canónica de <strong>Selection Sort</strong> en Python y C++:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-sky-400"><i class="fab fa-python mr-1"></i> Python</span>
              <span class="text-[10px] text-gray-500 font-mono">selection_sort.py</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-sky-300 overflow-x-auto border border-gray-800"><code>def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr</code></pre>
          </div>

          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-emerald-400"><i class="fas fa-file-code mr-1"></i> C++</span>
              <span class="text-[10px] text-gray-500 font-mono">selection_sort.cpp</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-emerald-400 overflow-x-auto border border-gray-800"><code>void selectionSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        int min_idx = i;
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        if (min_idx != i) {
            std::swap(arr[i], arr[min_idx]);
        }
    }
}</code></pre>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Visualizador Interactivo de Selection Sort",
          description: "Experimenta con la animación interactiva de Selection Sort. Observa cómo el apuntador busca el mínimo global de cada pasada y realiza a lo más 1 solo intercambio por ciclo:",
          widget: {
            file: "widgets/programacion/selection_sort_visualizer.html",
            title: "Visualizador Interactivo - Selection Sort",
            height: "720px"
          }
        }
      ]
    },
    {
      id: "analisis-complejidad",
      title: "4. Análisis de Complejidad",
      shortTitle: "Complejidad",
      icon: "fa-chart-pie",
      contentHtml: `
        <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Complejidad</th>
                <th>Explicación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-white">Tiempo (Peor Caso)</td>
                <td><code class="text-rose-400 font-mono font-bold">O(n²)</code></td>
                <td>Siempre realiza exactamente n(n-1)/2 comparaciones independientemente del orden inicial.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Tiempo (Mejor Caso)</td>
                <td><code class="text-amber-400 font-mono font-bold">O(n²)</code></td>
                <td>No tiene condición de parada temprana; compara siempre todos los pares.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Número de Intercambios</td>
                <td><code class="text-emerald-400 font-mono font-bold">O(n)</code></td>
                <td>Realiza a lo más n - 1 intercambios en memoria, una ventaja crítica si escribir en disco o memoria flash es costoso.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Espacio Extra</td>
                <td><code class="text-sky-400 font-mono font-bold">O(1)</code></td>
                <td>Algoritmo in-place sin necesidad de memoria auxiliar adicional.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
};

  /**
 * CONTENIDO EDUCATIVO: INSERTION SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

const INSERTION_SORT_DATA = {
  id: "insertion-sort",
  title: "11.3 Insertion Sort",
  subtitle: "Inserción progresiva en subarreglo ordenado, excelente para arreglos pequeños o casi ordenados.",
  unit: 11,
  unitTitle: "Unidad 11: Algoritmos de ordenamiento",
  week: 11,
  weekTitle: "Unidad 11: Algoritmos de ordenamiento",
  difficulty: "Fácil",
  category: "Algoritmos de Ordenamiento",
  timeEstimate: "25 minutos",
  badges: [
    { text: "Unidad 11", type: "neutral" },
    { text: "Fácil", type: "easy" },
    { text: "In-Place: O(1)", type: "teal" },
    { text: "Estable", type: "blue" },
    { text: "O(n²)", type: "rose" }
  ],
  sections: [
    {
      id: "en-que-consiste",
      title: "1. ¿En qué consiste?",
      shortTitle: "¿En qué consiste?",
      icon: "fa-book-open",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          <strong>Insertion Sort</strong> funciona de manera análoga a cómo las personas organizan las cartas en su mano cuando juegan póker o naipes. Toma elementos uno por uno e <em>"inserta"</em> cada uno en su posición correcta dentro de la porción del arreglo que ya se encuentra ordenada a la izquierda.
        </p>
        <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4 my-4">
          <h4 class="text-amber-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-lightbulb"></i> Ventaja Sobresaliente
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans">
            Para arreglos que ya están <strong>casi ordenados</strong>, Insertion Sort se ejecuta en tiempo casi lineal \(O(n)\), superando con creces a algoritmos avanzados como QuickSort o MergeSort en conjuntos de tamaño reducido.
          </p>
        </div>
      `
    },
    {
      id: "codigo-implementacion",
      title: "2. Código de Implementación",
      shortTitle: "Código",
      icon: "fa-code",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          A continuación se presenta la implementación estándar de <strong>Insertion Sort</strong> en Python y C++:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-sky-400"><i class="fab fa-python mr-1"></i> Python</span>
              <span class="text-[10px] text-gray-500 font-mono">insertion_sort.py</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-sky-300 overflow-x-auto border border-gray-800"><code>def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr</code></pre>
          </div>

          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-emerald-400"><i class="fas fa-file-code mr-1"></i> C++</span>
              <span class="text-[10px] text-gray-500 font-mono">insertion_sort.cpp</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-emerald-400 overflow-x-auto border border-gray-800"><code>void insertionSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            --j;
        }
        arr[j + 1] = key;
    }
}</code></pre>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Visualizador Interactivo de Insertion Sort",
          description: "Experimenta con la inserción paso a paso, visualizando cómo se desplazan los elementos mayores para abrir espacio a la clave actual:",
          widget: {
            file: "widgets/programacion/insertion_sort_visualizer.html",
            title: "Visualizador Interactivo - Insertion Sort",
            height: "720px"
          }
        }
      ]
    },
    {
      id: "analisis-complejidad",
      title: "3. Análisis de Complejidad",
      shortTitle: "Complejidad",
      icon: "fa-chart-pie",
      contentHtml: `
        <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Complejidad</th>
                <th>Explicación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-white">Tiempo (Mejor Caso)</td>
                <td><code class="text-emerald-400 font-mono font-bold">O(n)</code></td>
                <td>Arreglo ya ordenado: 1 comparación por elemento sin desplazamientos.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Tiempo (Peor Caso)</td>
                <td><code class="text-rose-400 font-mono font-bold">O(n²)</code></td>
                <td>Arreglo en orden inverso: cada nuevo elemento se desplaza hasta el inicio.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Espacio Extra</td>
                <td><code class="text-sky-400 font-mono font-bold">O(1)</code></td>
                <td>In-place, utiliza solo una variable temporal <code>key</code>.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Estabilidad</td>
                <td><span class="text-emerald-400 font-semibold">Estable</span></td>
                <td>Nunca intercambia elementos iguales; el orden relativo se preserva.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
};

  /**
 * CONTENIDO EDUCATIVO: MERGE SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

const MERGE_SORT_DATA = {
  id: "merge-sort",
  title: "11.4 Merge Sort",
  subtitle: "Paradigma Divide y Vencerás, garantía asintótica O(n log n) y fusión de subarreglos ordenados.",
  unit: 11,
  unitTitle: "Unidad 11: Algoritmos de ordenamiento",
  week: 11,
  weekTitle: "Unidad 11: Algoritmos de ordenamiento",
  difficulty: "Media",
  category: "Algoritmos de Ordenamiento",
  timeEstimate: "30 minutos",
  badges: [
    { text: "Unidad 11", type: "neutral" },
    { text: "Media", type: "medium" },
    { text: "O(n log n)", type: "purple" },
    { text: "Estable", type: "blue" },
    { text: "Memoria O(n)", type: "amber" }
  ],
  sections: [
    {
      id: "en-que-consiste",
      title: "1. ¿En qué consiste?",
      shortTitle: "¿En qué consiste?",
      icon: "fa-book-open",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          <strong>Merge Sort</strong> es un algoritmo de ordenamiento basado en el paradigma de diseño algorítmico <strong>Divide y Vencerás (Divide & Conquer)</strong>. Divide recursivamente el arreglo en dos mitades hasta llegar a subarreglos atómicos de longitud 1, y luego los fusiona ordenadamente en tiempo lineal.
        </p>
        <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4 my-4">
          <h4 class="text-purple-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-sitemap"></i> Las Tres Fases Clave
          </h4>
          <ul class="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-sans">
            <li><strong>Dividir:</strong> Hallar el punto medio y partir el arreglo en subarreglos izquierdo y derecho.</li>
            <li><strong>Vencer:</strong> Ordenar recursivamente cada mitad aplicando Merge Sort.</li>
            <li><strong>Combinar (Merge):</strong> Mezclar las dos mitades ordenadas en un arreglo auxiliar unificado.</li>
          </ul>
        </div>
      `
    },
    {
      id: "codigo-implementacion",
      title: "2. Código de Implementación",
      shortTitle: "Código",
      icon: "fa-code",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          A continuación se presenta la implementación de <strong>Merge Sort</strong> en Python y C++:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-sky-400"><i class="fab fa-python mr-1"></i> Python</span>
              <span class="text-[10px] text-gray-500 font-mono">merge_sort.py</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-sky-300 overflow-x-auto border border-gray-800"><code>def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    res = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            res.append(left[i])
            i += 1
        else:
            res.append(right[j])
            j += 1
    res.extend(left[i:])
    res.extend(right[j:])
    return res</code></pre>
          </div>

          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-emerald-400"><i class="fas fa-file-code mr-1"></i> C++</span>
              <span class="text-[10px] text-gray-500 font-mono">merge_sort.cpp</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-emerald-400 overflow-x-auto border border-gray-800"><code>void merge(std::vector<int>& arr, int l, int m, int r) {
    std::vector<int> left(arr.begin() + l, arr.begin() + m + 1);
    std::vector<int> right(arr.begin() + m + 1, arr.begin() + r + 1);
    int i = 0, j = 0, k = l;
    while (i < left.size() && j < right.size()) {
        arr[k++] = (left[i] <= right[j]) ? left[i++] : right[j++];
    }
    while (i < left.size()) arr[k++] = left[i++];
    while (j < right.size()) arr[k++] = right[j++];
}</code></pre>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Visualizador Interactivo de Merge Sort",
          description: "Visualiza la descomposición recursiva y la fase de fusión ordenada de subarreglos en tiempo real:",
          widget: {
            file: "widgets/programacion/merge_sort_visualizer.html",
            title: "Visualizador Interactivo - Merge Sort",
            height: "720px"
          }
        }
      ]
    },
    {
      id: "analisis-complejidad",
      title: "3. Análisis de Complejidad",
      shortTitle: "Complejidad",
      icon: "fa-chart-pie",
      contentHtml: `
        <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Complejidad</th>
                <th>Explicación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-white">Tiempo (Todos los casos)</td>
                <td><code class="text-emerald-400 font-mono font-bold">Θ(n log n)</code></td>
                <td>El árbol de recursión tiene profundidad log₂(n), y en cada nivel se realiza trabajo lineal de fusión O(n).</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Espacio Auxiliar</td>
                <td><code class="text-amber-400 font-mono font-bold">O(n)</code></td>
                <td>Requiere un arreglo auxiliar para copiar los elementos durante la etapa de fusión.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Estabilidad</td>
                <td><span class="text-emerald-400 font-semibold">Estable</span></td>
                <td>Al mantener la condición <code>left[i] <= right[j]</code>, los elementos idénticos no se cruzan.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
};

  /**
 * CONTENIDO EDUCATIVO: QUICK SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

const QUICK_SORT_DATA = {
  id: "quick-sort",
  title: "11.5 Quick Sort",
  subtitle: "Particionamiento eficiente mediante pivote, recursión in-place y análisis de casos borde.",
  unit: 11,
  unitTitle: "Unidad 11: Algoritmos de ordenamiento",
  week: 11,
  weekTitle: "Unidad 11: Algoritmos de ordenamiento",
  difficulty: "Avanzada",
  category: "Algoritmos de Ordenamiento",
  timeEstimate: "30 minutos",
  badges: [
    { text: "Unidad 11", type: "neutral" },
    { text: "Avanzada", type: "hard" },
    { text: "O(n log n)", type: "teal" },
    { text: "In-Place", type: "blue" },
    { text: "Inestable", type: "amber" }
  ],
  sections: [
    {
      id: "en-que-consiste",
      title: "1. ¿En qué consiste?",
      shortTitle: "¿En qué consiste?",
      icon: "fa-book-open",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          <strong>Quick Sort</strong> es ampliamente considerado uno de los algoritmos de ordenamiento más rápidos y eficientes en la práctica. También utiliza <strong>Divide y Vencerás</strong>, pero a diferencia de Merge Sort que divide ciegamente a la mitad, Quick Sort elige un <strong>pivote</strong> y particiona los elementos de modo que los menores queden a la izquierda y los mayores a la derecha.
        </p>
        <div class="bg-[#141923] border border-teal-500/30 rounded-xl p-4 my-4">
          <h4 class="text-teal-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-crosshairs"></i> El Secreto del Rendimiento
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans">
            A diferencia de Merge Sort, Quick Sort no necesita memoria auxiliar \(O(n)\) ya que opera directamente <em>in-place</em> permutando elementos, lo que maximiza la tasa de aciertos en la caché de la CPU (<em>cache locality</em>).
          </p>
        </div>
      `
    },
    {
      id: "codigo-implementacion",
      title: "2. Código de Implementación",
      shortTitle: "Código",
      icon: "fa-code",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          A continuación se presenta la implementación de <strong>Quick Sort con partición de Lomuto</strong> en Python y C++:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-sky-400"><i class="fab fa-python mr-1"></i> Python</span>
              <span class="text-[10px] text-gray-500 font-mono">quick_sort.py</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-sky-300 overflow-x-auto border border-gray-800"><code>def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1</code></pre>
          </div>

          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span class="text-xs font-mono font-bold text-emerald-400"><i class="fas fa-file-code mr-1"></i> C++</span>
              <span class="text-[10px] text-gray-500 font-mono">quick_sort.cpp</span>
            </div>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-emerald-400 overflow-x-auto border border-gray-800"><code>int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; ++j) {
        if (arr[j] < pivot) {
            std::swap(arr[++i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}</code></pre>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Visualizador Interactivo de Quick Sort",
          description: "Observa la selección del pivote, los punteros de partición y las subllamadas recursivas en tiempo real:",
          widget: {
            file: "widgets/programacion/quick_sort_visualizer.html",
            title: "Visualizador Interactivo - Quick Sort",
            height: "720px"
          }
        }
      ]
    },
    {
      id: "analisis-complejidad",
      title: "3. Análisis de Complejidad",
      shortTitle: "Complejidad",
      icon: "fa-chart-pie",
      contentHtml: `
        <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Complejidad</th>
                <th>Explicación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-white">Tiempo (Caso Promedio)</td>
                <td><code class="text-emerald-400 font-mono font-bold">O(n log n)</code></td>
                <td>El pivote particiona el arreglo en proporciones razonablemente balanceadas.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Tiempo (Peor Caso)</td>
                <td><code class="text-rose-400 font-mono font-bold">O(n²)</code></td>
                <td>Ocurre si el pivote elegido es siempre el mínimo o el máximo absoluto (ej. arreglo ya ordenado con pivote final).</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Espacio de Pila (Stack)</td>
                <td><code class="text-sky-400 font-mono font-bold">O(log n)</code></td>
                <td>Consumo de memoria debido a las llamadas recursivas en la pila del sistema.</td>
              </tr>
              <tr>
                <td class="font-bold text-white">Estabilidad</td>
                <td><span class="text-amber-400 font-semibold">Inestable</span></td>
                <td>Los intercambios con el pivote pueden alterar el orden relativo de claves repetidas.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
};

  

  // =========================================================================
  // INTRODUCCIÓN A LAS TICS - CONTENIDOS COMPLETOS (5 UNIDADES, 27 TEMAS)
  // =========================================================================

/**
 * UNIDAD 01: SISTEMAS NUMÉRICOS Y FUNDAMENTOS ARITMÉTICOS
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

const TICS_U01_TOPICS = {
  "tics-u01-t01-invencion-base": {
    id: "tics-u01-t01-invencion-base",
    title: "1.1 La invención de la base",
    subtitle: "Evolución histórica de la numeración, principio del valor posicional, sistemas base 2, 8, 10 y 16, y su fundamento en la computación.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Fácil",
    category: "Sistemas Numéricos",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Valor Posicional", type: "teal" },
      { text: "Bases 2, 8, 10, 16", type: "blue" }
    ],
    sections: [
      {
        id: "necesidad-historica",
        title: "1. ¿En qué consiste la invención de la base?",
        shortTitle: "¿En qué consiste?",
        icon: "fa-history",
        contentHtml: `
          <!-- Conceptos Básicos: Número, Cantidad y Sistema de Numeración (Insumo) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-[#121622] border border-teal-500/30 rounded-xl p-4">
              <h4 class="text-teal-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fas fa-brain"></i> Número o Cantidad
              </h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                El sentido de número, de cantidad es innato en los seres humanos, percibimos diferencias entre distintas colecciones de objetos y si hay cambios en algunas de ellas. Por eso desde la antigüedad la humanidad tiene la necesidad de comunicar, recordar, nombrar, registrar distintas cantidades y para eso se desarrollaron los sistemas de numeración.
              </p>
            </div>
            <div class="bg-[#121622] border border-sky-500/30 rounded-xl p-4">
              <h4 class="text-sky-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fas fa-list-ol"></i> Sistema de Numeración
              </h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                <strong>Definición:</strong> Conjunto de Signos y Reglas que nos permiten representar una cantidad utilizando signos y aplicando dichas reglas.
              </p>
            </div>
          </div>

          <p class="text-base text-gray-300 leading-relaxed mb-4">
            A lo largo de la historia, la humanidad enfrentó el desafío fundamental de <strong>representar cantidades crecientes con un número limitado de símbolos</strong>. Los primeros métodos, como el conteo unario (marcas en huesos o piedras), resultaban imprácticos para cifras grandes. Los sistemas aditivos antiguos (como la numeración romana o egipcia) requerían inventar continuamente nuevos símbolos para órdenes de magnitud superiores y hacían que las operaciones aritméticas elementales fueran complejas.
          </p>

          <div class="bg-[#141923] border border-teal-500/30 rounded-xl p-4 my-4">
            <h4 class="text-teal-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-lightbulb"></i> La Gran Revolución Intelectual: El Sistema Posicional
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              La <strong>invención de la base y el valor posicional</strong> (desarrollada por matemáticos babilonios, mayas e hindúes, y transmitida a occidente por Al-Juarismi) resolvió este problema de manera definitiva: <em>el significado de un dígito depende exclusivamente de la posición que ocupa dentro de la cifra</em>. Un mismo símbolo, por ejemplo el <code>5</code>, representa cinco unidades en <code>5</code>, cincuenta en <code>50</code>, o quinientos en <code>500</code>.
            </p>
          </div>

          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table font-sans">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-teal-400 font-bold">Sistema</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Base (b)</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Conjunto de Dígitos Permitidos</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ámbito de Aplicación</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="font-bold text-white py-2 px-3">Binario</td>
                  <td class="py-2 px-3 text-sky-400">2</td>
                  <td class="py-2 px-3 text-emerald-400">{ 0, 1 }</td>
                  <td class="py-2 px-3 text-gray-300 font-sans">Lógica de transistores, registros de CPU, memoria física.</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3">Octal</td>
                  <td class="py-2 px-3 text-sky-400">8</td>
                  <td class="py-2 px-3 text-emerald-400">{ 0, 1, 2, 3, 4, 5, 6, 7 }</td>
                  <td class="py-2 px-3 text-gray-300 font-sans">Permisos en sistemas UNIX/Linux (ej. <code>chmod 755</code>), empaquetamiento de 3 bits.</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3">Decimal</td>
                  <td class="py-2 px-3 text-sky-400">10</td>
                  <td class="py-2 px-3 text-emerald-400">{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }</td>
                  <td class="py-2 px-3 text-gray-300 font-sans">Convención humana estándar (derivada de los 10 dedos de las manos).</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3">Hexadecimal</td>
                  <td class="py-2 px-3 text-sky-400">16</td>
                  <td class="py-2 px-3 text-emerald-400">{ 0-9, A, B, C, D, E, F }</td>
                  <td class="py-2 px-3 text-gray-300 font-sans">Direcciones de memoria RAM (punteros), colores web (#FF5733), IPv6.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "mecanismo-posicional",
        title: "2. ¿Cómo funciona el valor posicional?",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-cubes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En cualquier sistema de base <code>b</code>, una cadena de dígitos <code>d_{n-1} d_{n-2} ... d_1 d_0</code> representa matemáticamente la sumatoria de cada dígito multiplicado por la base elevada a su índice de posición:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-4 font-mono text-center my-4 text-emerald-400 text-sm">
            N = d_{n-1} · b^{n-1} + d_{n-2} · b^{n-2} + ... + d_1 · b^1 + d_0 · b^0
          </div>

          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            Cada paso hacia la izquierda multiplica el peso del dígito por la base <code>b</code>. Por ejemplo, en binario (base 2), los pesos sucesivos son las potencias de dos:
            <code class="text-sky-300">1, 2, 4, 8, 16, 32, 64, 128, 256...</code>
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "¡Vamos a la Pizarra!: ¿Cómo funciona el valor posicional?",
            description: "Sigue la clase interactiva con el Profe Leo en la pizarra: observa la correspondencia posicional de los dígitos, las potencias de la base y la deducción paso a paso del número binario (1011)₂ hasta obtener su valor decimal (11)₁₀:",
            widget: {
              file: "widgets/tics/u01_pizarra_valor_posicional.html",
              title: "Pizarra: Valor Posicional",
              height: "610px"
            }
          },
          {
            category: "explora",
            title: "Simulador de Valor Posicional y Cambio de Base",
            description: "Modifica la base (2, 8, 10 o 16) y escribe cualquier número para observar cómo cada columna calcula su peso específico y su contribución exacta al valor total:",
            widget: {
              file: "widgets/tics/u01_valor_posicional.html",
              title: "Simulador de Valor Posicional",
              height: "520px"
            }
          }
        ]
      },
      {
        id: "relacion-informatica",
        title: "3. Relación fundamental con la Informática",
        shortTitle: "Conexión Informática",
        icon: "fa-microchip",
        contentHtml: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div class="bg-[#121622] border border-sky-500/30 rounded-xl p-4">
              <h4 class="text-sky-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fas fa-bolt"></i> ¿Por qué las computadoras usan Base 2?
              </h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                Los circuitos integrados digitales modernos están construidos con transistores de efecto de campo (MOSFET). Resulta físicamente sencillo y sumamente confiable distinguir entre dos estados de voltaje eléctrico: <strong>nivel bajo</strong> (cercano a 0V, interpretado como <code>0</code>) y <strong>nivel alto</strong> (cercano a 3.3V o 5V, interpretado como <code>1</code>). Distinguir diez niveles de voltaje analógico en chips microscópicos generaría errores continuos debido al ruido térmico.
              </p>
            </div>

            <div class="bg-[#121622] border border-purple-500/30 rounded-xl p-4">
              <h4 class="text-purple-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fas fa-compress"></i> ¿Por qué los programadores usamos Hexadecimal?
              </h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                Una cadena de 32 o 64 bits binarios resulta ilegible para un ser humano (ej. <code>1111111100001010</code>). Dado que <code>16 = 2^4</code>, cada dígito hexadecimal resume de manera exacta un bloque de <strong>4 bits</strong> (un <em>nibble</em>). Así, dos dígitos hexadecimales representan exactamente 1 byte (8 bits), permitiendo escribir direcciones de memoria de manera compacta: <code>0xFF0A</code>.
              </p>
            </div>
          </div>
        `
      }
    ],
    comprueba: {
      title: "Quiz: La invención de la base y valor posicional",
      subtitle: "Comprueba tu comprensión sobre bases numéricas y representación posicional.",
      widget: {
        file: "widgets/tics/u01_reto_sistemas_numericos.html",
        title: "Quiz: Sistemas Numéricos",
        height: "580px"
      }
    }
  },

  "tics-u01-t02-teorema-representacion": {
    id: "tics-u01-t02-teorema-representacion",
    title: "1.2 Teorema de representación",
    subtitle: "Formulación rigurosa del Teorema Fundamental de la Numeración, polinomios de potencias y factorización de naturales.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Fácil",
    category: "Sistemas Numéricos",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Teorema Fundamental", type: "teal" },
      { text: "Polinomio de Potencias", type: "purple" }
    ],
    sections: [
      {
        id: "teorema-fundamental-numeracion",
        title: "1. Teorema Fundamental de la Numeración",
        shortTitle: "Teorema fundamental",
        icon: "fa-square-root-variable",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>Teorema Fundamental de la Numeración</strong> establece que todo número real positivo <code>N</code> puede representarse de manera única en una base entera <code>b > 1</code> mediante una serie polinómica con potencias enteras positivas y negativas:
          </p>

          <div class="bg-[#090d14] border border-teal-500/40 rounded-xl p-4 font-mono text-center my-4 text-emerald-400 text-sm leading-relaxed">
            N = ∑_{i=-m}^{n-1} d_i · b^i = d_{n-1}b^{n-1} + ... + d_1b^1 + d_0b^0 + d_{-1}b^{-1} + ... + d_{-m}b^{-m}
          </div>

          <div class="bg-[#141923] border border-gray-800 rounded-xl p-4 my-4 space-y-2 text-xs text-gray-300">
            <h4 class="text-sky-400 font-bold text-sm mb-1">Condiciones Formales del Teorema:</h4>
            <p>1. <strong>Base:</strong> <code>b ∈ ℕ, b ≥ 2</code> (entero estrictamente mayor a 1).</p>
            <p>2. <strong>Dígitos:</strong> Cada coeficiente <code>d_i</code> es un entero tal que <code>0 ≤ d_i < b</code>.</p>
            <p>3. <strong>Unicidad:</strong> La representación es única, excepto para números con secuencias periódicas de dígitos máximos.</p>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Descomposición Polinómica",
            description: "Introduce un número con parte entera y fraccionaria en base 2, 8 o 16 para visualizar el cálculo riguroso de cada término según el teorema fundamental:",
            widget: {
              file: "widgets/tics/u01_teorema_representacion.html",
              title: "Visualizador del Teorema de Representación",
              height: "520px"
            }
          }
        ]
      },
      {
        id: "ejemplo-paso-a-paso-tfn",
        title: "2. Ejemplo paso a paso de descomposición",
        shortTitle: "Ejemplo paso a paso",
        icon: "fa-list-check",
        contentHtml: `
          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            Consideremos el número binario fraccionario <code class="text-teal-400 font-mono font-bold">1101.101₍₂₎</code>:
          </p>

          <div class="space-y-2 font-mono text-xs my-4">
            <div class="p-2.5 rounded bg-[#10141d] border border-gray-800 text-gray-300">
              <span class="text-teal-400 font-bold">Parte entera:</span> 1·2³ + 1·2² + 0·2¹ + 1·2⁰ = 8 + 4 + 0 + 1 = <strong>13</strong>.
            </div>
            <div class="p-2.5 rounded bg-[#10141d] border border-gray-800 text-gray-300">
              <span class="text-sky-400 font-bold">Parte fraccionaria:</span> 1·2⁻¹ + 0·2⁻² + 1·2⁻³ = 1/2 + 0 + 1/8 = 0.5 + 0.125 = <strong>0.625</strong>.
            </div>
            <div class="p-2.5 rounded bg-teal-500/10 border border-teal-500/30 text-teal-300 font-bold text-sm">
              Resultado final: 1101.101₍₂₎ = 13 + 0.625 = 13.625₍₁₀₎
            </div>
          </div>
        `
      }
    ]
  },

  "tics-u01-t03-operaciones-sistemas": {
    id: "tics-u01-t03-operaciones-sistemas",
    title: "1.3 Operaciones en los sistemas numéricos",
    subtitle: "Aritmética formal en binario y hexadecimal: adición, sustracción, acarreo (carry), préstamo (borrow) y complemento a dos.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Media",
    category: "Sistemas Numéricos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Acarreo y Préstamo", type: "amber" },
      { text: "Aritmética Binaria", type: "teal" }
    ],
    sections: [
      {
        id: "suma-y-acarreo",
        title: "1. Adición posicional y propagación de Acarreo (Carry)",
        shortTitle: "Suma y acarreo",
        icon: "fa-plus",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La suma en cualquier base sigue el mismo principio algorítmico que en decimal: sumamos columna por columna desde el bit menos significativo (LSB) hacia el más significativo (MSB). Cuando la suma de los dígitos más el acarreo entrante iguala o supera la base <code>b</code>, se produce un <strong>acarreo saliente (carry out)</strong> hacia la siguiente columna:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs my-4">
            <div class="subcard-box p-3 border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1">Reglas de la Suma Binaria (Base 2):</span>
              <ul class="space-y-1 text-gray-300">
                <li>0 + 0 = 0 (carry 0)</li>
                <li>0 + 1 = 1 (carry 0)</li>
                <li>1 + 0 = 1 (carry 0)</li>
                <li>1 + 1 = 0 (carry 1, pues 1+1=2 = 10₂)</li>
                <li>1 + 1 + 1 = 1 (carry 1, pues 1+1+1=3 = 11₂)</li>
              </ul>
            </div>

            <div class="subcard-box p-3 border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1">Reglas de la Suma Hexadecimal (Base 16):</span>
              <ul class="space-y-1 text-gray-300">
                <li>9 + 4 = D (13 en decimal, carry 0)</li>
                <li>A + 7 = 11₁₆ (10 + 7 = 17 = 16×1 + 1 &rarr; 1, carry 1)</li>
                <li>F + F = 1E₁₆ (15 + 15 = 30 = 16×1 + 14 &rarr; E, carry 1)</li>
              </ul>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Suma y Acarreo Paso a Paso",
            description: "Ejecuta paso a paso la suma de dos números en binario, octal o hexadecimal observando cómo se calcula la suma modular y cómo se propaga el acarreo a la columna contigua:",
            widget: {
              file: "widgets/tics/u01_operaciones_bases.html",
              title: "Simulador de Operaciones y Acarreo",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u01-t04-conversion-sistemas": {
    id: "tics-u01-t04-conversion-sistemas",
    title: "1.4 Conversión entre sistemas",
    subtitle: "Métodos canónicos de conversión: divisiones sucesivas, multiplicaciones sucesivas y empaquetamiento directo por potencias de 2.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Media",
    category: "Sistemas Numéricos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Conversor", type: "teal" },
      { text: "Divisiones Sucesivas", type: "blue" }
    ],
    sections: [
      {
        id: "metodos-conversion",
        title: "1. Métodos de Conversión Canónicos",
        shortTitle: "Métodos de conversión",
        icon: "fa-arrows-rotate",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para convertir un número entre diferentes bases numéricas existen dos algoritmos fundamentales según la dirección de la transformación:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div class="subcard-box p-4 border-teal-500/30">
              <h4 class="text-teal-400 font-bold text-xs uppercase mb-2">A. De Decimal a Base b: Divisiones Sucesivas</h4>
              <p class="text-xs text-gray-300 leading-relaxed mb-2">
                Se divide repetidamente el cociente entre la base <code>b</code> hasta que el cociente sea 0. Los <strong>residuos obtenidos se leen en orden inverso</strong> (desde el último residuo obtenido hasta el primero).
              </p>
              <div class="bg-[#090d14] p-2 rounded text-[11px] font-mono text-emerald-400">
                13 ÷ 2 = 6 (r=1) &rarr; 6 ÷ 2 = 3 (r=0) &rarr; 3 ÷ 2 = 1 (r=1) &rarr; 1 ÷ 2 = 0 (r=1) &rArr; 1101₂
              </div>
            </div>

            <div class="subcard-box p-4 border-sky-500/30">
              <h4 class="text-sky-400 font-bold text-xs uppercase mb-2">B. Entre Bases Potencias de 2: Agrupación Directa</h4>
              <p class="text-xs text-gray-300 leading-relaxed mb-2">
                Como <code>8 = 2³</code> y <code>16 = 2⁴</code>, no se requiere pasar por decimal:
              </p>
              <ul class="text-xs text-gray-300 space-y-1 font-mono">
                <li>• <strong>Binario &harr; Octal:</strong> Grupos de 3 bits (ej. 101 110₂ = 56₈).</li>
                <li>• <strong>Binario &harr; Hexadecimal:</strong> Grupos de 4 bits (ej. 1111 1010₂ = FA₁₆).</li>
              </ul>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Conversor Interactivo con Procedimiento Completo",
            description: "Ingresa cualquier cifra en cualquier base y visualiza no solo los resultados equivalentes, sino la escalera completa de divisiones sucesivas paso a paso:",
            widget: {
              file: "widgets/tics/u01_conversor_sistemas.html",
              title: "Conversor de Sistemas Numéricos",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u01-t05-propiedades-naturales": {
    id: "tics-u01-t05-propiedades-naturales",
    title: "1.5 Propiedades fundamentales de los números naturales",
    subtitle: "División euclidiana, lema de división, Algoritmo de Euclides para MCD y relación canónica con el MCM.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Media",
    category: "Sistemas Numéricos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Algoritmo de Euclides", type: "teal" },
      { text: "MCD y MCM", type: "amber" }
    ],
    sections: [
      {
        id: "division-euclidiana-mcd",
        title: "1. División Euclidiana y Algoritmo de Euclides",
        shortTitle: "División y Euclides",
        icon: "fa-divide",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>Algoritmo de la División</strong> establece que dados dos enteros <code>a</code> y <code>b</code> con <code>b > 0</code>, existen enteros únicos <code>q</code> (cociente) y <code>r</code> (residuo) tales que:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3">
            a = b · q + r, &nbsp;&nbsp; con 0 ≤ r < b
          </div>

          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            El <strong>Algoritmo de Euclides</strong> es uno de los algoritmos más antiguos y eficientes de la historia de las matemáticas (complejidad logarítmica <code>O(log(min(a, b)))</code>). Se fundamenta en el teorema:
            <code class="text-sky-300 font-mono block my-2 text-center text-sm">MCD(a, b) = MCD(b, a mod b)</code>
            El proceso se repite sucesivamente hasta obtener un residuo <code>0</code>; el último residuo no nulo es el Máximo Común Divisor.
          </p>

          <div class="bg-[#141923] border border-gray-800 rounded-xl p-3 font-mono text-xs text-amber-300">
            <strong>Relación Fundamental MCD y MCM:</strong><br>
            a · b = MCD(a, b) · MCM(a, b) &rArr; MCM(a, b) = (a · b) / MCD(a, b)
          </div>

          <!-- Descomposición Prima: MCD y MCM (Insumo) -->
          <div class="mt-6 pt-4 border-t border-gray-800/80">
            <h4 class="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <i class="fas fa-layer-group text-teal-400"></i> Cálculo de MCD y MCM por Descomposición Prima
            </h4>
            <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
              Además del algoritmo euclidiano, el <strong>Teorema Fundamental de la Aritmética</strong> permite calcular el MCD y el MCM factorizando los números en sus factores primos:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div class="subcard-box p-4 border-teal-500/30">
                <h5 class="text-teal-400 font-bold text-xs uppercase mb-1.5 flex items-center gap-1.5">
                  <i class="fas fa-check-double"></i> Mínimo Común Múltiplo (MCM)
                </h5>
                <p class="text-xs text-gray-300 leading-relaxed mb-2">
                  <strong>Regla:</strong> Se descomponen los números en factores primos, y se multiplican los <em>comunes y no comunes al mayor exponente</em>.
                </p>
                <div class="bg-[#090d14] p-2.5 rounded text-[11px] font-mono text-gray-300 space-y-1 border border-gray-800">
                  <div>12 = 2² × 3</div>
                  <div>18 = 2 × 3²</div>
                  <div class="text-teal-400 font-bold">MCM(12, 18) = 2² × 3² = 4 × 9 = 36</div>
                </div>
              </div>

              <div class="subcard-box p-4 border-sky-500/30">
                <h5 class="text-sky-400 font-bold text-xs uppercase mb-1.5 flex items-center gap-1.5">
                  <i class="fas fa-compress-alt"></i> Máximo Común Divisor (MCD)
                </h5>
                <p class="text-xs text-gray-300 leading-relaxed mb-2">
                  <strong>Regla:</strong> Se descomponen los números en factores primos, y se multiplican <em>SOLO los factores comunes al menor exponente</em>.
                </p>
                <div class="bg-[#090d14] p-2.5 rounded text-[11px] font-mono text-gray-300 space-y-1 border border-gray-800">
                  <div>12 = 2² × 3</div>
                  <div>18 = 2 × 3²</div>
                  <div class="text-sky-400 font-bold">MCD(12, 18) = 2 × 3 = 6</div>
                </div>
              </div>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "¡Vamos a la Pizarra!: MCM por Descomposición Prima",
            description: "Sigue la clase interactiva con el Profe Leo: descomposición en factores primos de 12 y 18, selección de factores comunes y no comunes al mayor exponente y cálculo de MCM(12, 18) = 36:",
            widget: {
              file: "widgets/tics/u01_pizarra_mcm.html",
              title: "Pizarra: MCM",
              height: "610px"
            }
          },
          {
            category: "explora",
            title: "¡Vamos a la Pizarra!: MCD por Descomposición Prima",
            description: "Sigue la clase interactiva con el Profe Leo: descomposición en factores primos de 12 y 18, selección de factores comunes al menor exponente y cálculo de MCD(12, 18) = 6:",
            widget: {
              file: "widgets/tics/u01_pizarra_mcd.html",
              title: "Pizarra: MCD",
              height: "610px"
            }
          },
          {
            category: "explora",
            title: "Simulador del Algoritmo de Euclides (MCD y MCM)",
            description: "Introduce dos números enteros y visualiza la tabla completa de divisiones sucesivas, el residuo que define el MCD y el cálculo derivado del MCM:",
            widget: {
              file: "widgets/tics/u01_algoritmo_euclides.html",
              title: "Algoritmo de Euclides",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u01-t06-aritmetica-modular": {
    id: "tics-u01-t06-aritmetica-modular",
    title: "1.6 Aritmética modular",
    subtitle: "Congruencias, anillos de residuos Zn, aritmética de reloj y sus aplicaciones directas en criptografía y dispersión hash.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Media",
    category: "Sistemas Numéricos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Módulo Zn", type: "teal" },
      { text: "Criptografía y Hash", type: "purple" }
    ],
    sections: [
      {
        id: "congruencia-modular",
        title: "1. Congruencias y Anillo Zn",
        shortTitle: "¿En qué consiste?",
        icon: "fa-clock",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La <strong>aritmética modular</strong> es un sistema aritmético para números enteros donde los números "se reinician" al alcanzar un cierto valor llamado <strong>módulo</strong> <code>n</code>. Formalmente, dos enteros <code>a</code> y <code>b</code> son congruentes módulo <code>n</code> si su diferencia es divisible exactamente por <code>n</code>:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3">
            a ≡ b (mod n) &iff; n | (a - b) &iff; a mod n = b mod n
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
            El ejemplo más intuitivo es el <strong>reloj de 12 horas</strong>: si son las 10:00 y transcurren 5 horas, no son las 15:00 en un reloj clásico, sino las <code>(10 + 5) mod 12 = 3:00</code>.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Aritmética Modular (Reloj Circular Zn)",
            description: "Experimenta con el dial circular de residuos Zn, calcula sumas, restas y productos modulares, y comprende la representación geométrica de las congruencias:",
            widget: {
              file: "widgets/tics/u01_aritmetica_modular.html",
              title: "Simulador de Aritmética Modular",
              height: "520px"
            }
          },
          {
            category: "practica",
            title: "Reto Integrador de la Unidad 01: Sistemas Numéricos",
            description: "Pon a prueba tus competencias en valor posicional, conversiones de base, algoritmo de Euclides y aritmética modular con 5 desafíos interactivos con puntaje:",
            widget: {
              file: "widgets/tics/u01_reto_sistemas_numericos.html",
              title: "Reto Integrador Unidad 01",
              height: "560px"
            }
          }
        ]
      }
    ],
    comprueba: {
      title: "Comprueba: Evaluación de Sistemas Numéricos y Aritmética",
      subtitle: "Evaluación interactiva de la Unidad 01: Sistemas numéricos.",
      widget: {
        file: "widgets/tics/u01_reto_sistemas_numericos.html",
        title: "Evaluación Unidad 01",
        height: "580px"
      }
    }
  }
};


/**
 * UNIDAD 02: INDUCCIÓN Y RECURSIÓN
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

const TICS_U02_TOPICS = {
  "tics-u02-t01-problemas-recurrentes": {
    id: "tics-u02-t01-problemas-recurrentes",
    title: "2.1 Problemas recurrentes y razonamiento inductivo",
    subtitle: "Noción de recurrencia, observación de regularidades empíricas y formalización de patrones en problemas computacionales.",
    unit: 2,
    unitTitle: "Unidad 02: Inducción y recursión",
    week: 2,
    weekTitle: "Unidad 02: Inducción y recursión",
    difficulty: "Fácil",
    category: "Inducción y Recursión",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Razonamiento Inductivo", type: "teal" },
      { text: "Torres de Hanoi", type: "purple" }
    ],
    sections: [
      {
        id: "razonamiento-inductivo",
        title: "1. ¿En qué consiste el razonamiento inductivo?",
        shortTitle: "¿En qué consiste?",
        icon: "fa-brain",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>razonamiento inductivo</strong> es el proceso mental mediante el cual observamos casos particulares sucesivos (para n = 1, 2, 3...) con el fin de descubrir un <em>patrón subyacente</em> o regla general. En computación y matemáticas discretas, este proceso nos permite plantear conjeturas sobre el comportamiento de algoritmos recursivos.
          </p>

          <div class="bg-[#141923] border border-teal-500/30 rounded-xl p-4 my-4">
            <h4 class="text-teal-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-arrows-split-up-and-left"></i> De la Observación Empírica a la Relación de Recurrencia
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              Un problema recurrente es aquel cuya solución para un tamaño de entrada <code>n</code> puede expresarse en términos de la solución del mismo problema para tamaños menores (ej. <code>n-1</code> o <code>n/2</code>). Un ejemplo paradigmático son las <strong>Torres de Hanoi</strong>, donde para mover <code>n</code> discos debemos forzosamente mover <code>n-1</code> discos previamente.
            </p>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Patrones: Las Torres de Hanoi",
            description: "Interactúa con las Torres de Hanoi para n = 3, 4 y 5 discos. Comprueba que el número mínimo de movimientos necesarios sigue rigurosamente la secuencia 2^n - 1:",
            widget: {
              file: "widgets/tics/u02_patrones_recurrentes.html",
              title: "Patrones Recurrentes y Hanoi",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u02-t02-sistema-naturales-induccion": {
    id: "tics-u02-t02-sistema-naturales-induccion",
    title: "2.2 El sistema ℕ y los principios de inducción",
    subtitle: "Estructura del conjunto ℕ, principio de buena ordenación y demostración formal por inducción matemática.",
    unit: 2,
    unitTitle: "Unidad 02: Inducción y recursión",
    week: 2,
    weekTitle: "Unidad 02: Inducción y recursión",
    difficulty: "Media",
    category: "Inducción y Recursión",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Efecto Dominó", type: "teal" },
      { text: "Axiomas de Peano", type: "blue" }
    ],
    sections: [
      {
        id: "principio-induccion-matematica",
        title: "1. Principio de Inducción Matemática",
        shortTitle: "Principio de inducción",
        icon: "fa-dice-d6",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>Principio de Inducción Matemática</strong> es una técnica de demostración formal para proposiciones que involucran números naturales <code>n ∈ ℕ</code>. Si deseamos probar que una propiedad <code>P(n)</code> es verdadera para todo <code>n ≥ 1</code>, se deben verificar dos condiciones indispensables:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div class="subcard-box p-4 border-teal-500/30">
              <span class="text-teal-400 font-bold block text-sm mb-1">1. Caso Base:</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Demostrar que la propiedad es verdadera para el primer elemento: <code>P(1)</code> es verdadero.
              </p>
            </div>
            <div class="subcard-box p-4 border-sky-500/30">
              <span class="text-sky-400 font-bold block text-sm mb-1">2. Paso Inductivo:</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Demostrar que si <code>P(k)</code> es verdadero (Hipótesis Inductiva), entonces necesariamente <code>P(k+1)</code> también es verdadero.
              </p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Slide Animada: Inducción Matemática y Efecto Dominó",
            description: "Recorre interactivamente las cuatro etapas de la inducción matemática y observa la analogía física de la caída de fichas de dominó alineadas:",
            widget: {
              file: "widgets/tics/u02_induccion_domino.html",
              title: "Slide Animada de Inducción",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u02-t03-sumas-recurrencias": {
    id: "tics-u02-t03-sumas-recurrencias",
    title: "2.3 Sumas y recurrencias",
    subtitle: "Operador sumatoria, progresiones aritméticas y geométricas, y generación de sucesiones recursivas.",
    unit: 2,
    unitTitle: "Unidad 02: Inducción y recursión",
    week: 2,
    weekTitle: "Unidad 02: Inducción y recursión",
    difficulty: "Media",
    category: "Inducción y Recursión",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Sumatorias", type: "teal" },
      { text: "Sucesiones", type: "amber" }
    ],
    sections: [
      {
        id: "sumatorias-sucesiones",
        title: "1. Sumatorias y Sucesiones Recurrentes",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-chart-simple",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>relación de recurrencia</strong> define los términos de una sucesión mediante una regla que relaciona cada término con los anteriores. Por ejemplo, en algoritmos iterativos con acumulación, las sumas progresivas generan relaciones de la forma <code>a_n = a_{n-1} + f(n)</code>.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Generador Interactivo de Sumas y Recurrencias",
            description: "Selecciona el tipo de recurrencia (aritmética, geométrica, cuadrática de Gauss o Fibonacci) y visualiza en tiempo real el gráfico de crecimiento y su tabla de términos:",
            widget: {
              file: "widgets/tics/u02_sumas_recurrencias.html",
              title: "Visualizador de Sumas y Recurrencias",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u02-t04-fibonacci-pascal": {
    id: "tics-u02-t04-fibonacci-pascal",
    title: "2.4 Números de Fibonacci y triángulo de Pascal",
    subtitle: "Definición recursiva F_n = F_{n-1} + F_{n-2}, coeficientes binomiales C(n, k) y la conexión geométrica en las diagonales de Pascal.",
    unit: 2,
    unitTitle: "Unidad 02: Inducción y recursión",
    week: 2,
    weekTitle: "Unidad 02: Inducción y recursión",
    difficulty: "Media",
    category: "Inducción y Recursión",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Fibonacci", type: "teal" },
      { text: "Triángulo de Pascal", type: "purple" }
    ],
    sections: [
      {
        id: "fibonacci-y-pascal",
        title: "1. Fibonacci y Triángulo de Pascal",
        shortTitle: "¿En qué consiste?",
        icon: "fa-network-wired",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La <strong>sucesión de Fibonacci</strong> <code>0, 1, 1, 2, 3, 5, 8, 13, 21, 34...</code> se define formalmente mediante la recurrencia de segundo orden:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3">
            F_0 = 0, &nbsp; F_1 = 1, &nbsp; F_n = F_{n-1} + F_{n-2} &nbsp; para n ≥ 2
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
            Por su parte, el <strong>Triángulo de Pascal</strong> organiza los coeficientes binomiales <code>C(n, k)</code> donde cada valor se obtiene sumando los dos números situados inmediatamente arriba. Una de las propiedades más hermosas de la matemática discreta es que <strong>las sumas en las diagonales tenues de Pascal reproducen exactamente la sucesión de Fibonacci</strong>.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Explorador Interactivo de Fibonacci y Pascal",
            description: "Ajusta la cantidad de filas del Triángulo de Pascal, inspecciona los coeficientes binomiales generados y comprueba la identidad de Pascal en cada celda:",
            widget: {
              file: "widgets/tics/u02_fibonacci_pascal.html",
              title: "Fibonacci y Triángulo de Pascal",
              height: "500px"
            }
          }
        ]
      }
    ]
  },

  "tics-u02-t05-metodo-iteracion": {
    id: "tics-u02-t05-metodo-iteracion",
    title: "2.5 Método de iteración para recurrencias no homogéneas de primer orden",
    subtitle: "Resolución sistemática de ecuaciones de recurrencia por sustitución hacia atrás (unrolling) y deducción de la forma cerrada.",
    unit: 2,
    unitTitle: "Unidad 02: Inducción y recursión",
    week: 2,
    weekTitle: "Unidad 02: Inducción y recursión",
    difficulty: "Avanzada",
    category: "Inducción y Recursión",
    timeEstimate: "45 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Método de Iteración", type: "teal" },
      { text: "Sustitución Regresiva", type: "blue" }
    ],
    sections: [
      {
        id: "metodo-iteracion-despliegue",
        title: "1. Metodología de Resolución por Iteración",
        shortTitle: "Método de iteración",
        icon: "fa-arrows-split-up-and-left",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>Método de Iteración</strong> (o expansión hacia atrás) permite resolver recurrencias de primer orden no homogéneas <code>T(n) = a·T(n-1) + g(n)</code> sin necesidad de adivinar la solución. El procedimiento algorítmico sigue 5 pasos rigurosos:
          </p>

          <div class="space-y-2 font-mono text-xs my-4">
            <div class="p-2.5 rounded bg-[#10141d] border border-gray-800 text-gray-300">
              <span class="text-teal-400 font-bold">1. Ecuación inicial:</span> Expresar T(n) en función de T(n-1).
            </div>
            <div class="p-2.5 rounded bg-[#10141d] border border-gray-800 text-gray-300">
              <span class="text-teal-400 font-bold">2. Sustituciones regresivas:</span> Sustituir T(n-1), luego T(n-2), y T(n-3) expandiendo los términos algebraicos.
            </div>
            <div class="p-2.5 rounded bg-[#10141d] border border-gray-800 text-gray-300">
              <span class="text-sky-400 font-bold">3. Identificación del patrón:</span> Formular la expresión general para el paso k (usualmente involucrando T(n-k) y una sumatoria).
            </div>
            <div class="p-2.5 rounded bg-[#10141d] border border-gray-800 text-gray-300">
              <span class="text-amber-400 font-bold">4. Condición de parada:</span> Igualar n - k al caso base (ej. n - k = 1 &rArr; k = n - 1).
            </div>
            <div class="p-2.5 rounded bg-teal-500/10 border border-teal-500/30 text-emerald-300 font-bold">
              5. Sumatoria cerrada: Resolver la suma algebraica resultante para obtener la fórmula cerrada O(f(n)).
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Paso a Paso del Método de Iteración",
            description: "Analiza el despliegue analítico completo para las recurrencias de la Suma de Gauss, las Torres de Hanoi y la Búsqueda Secuencial:",
            widget: {
              file: "widgets/tics/u02_metodo_iteracion.html",
              title: "Método de Iteración Paso a Paso",
              height: "520px"
            }
          },
          {
            category: "practica",
            title: "Reto Integrador de la Unidad 02: Inducción y Recursión",
            description: "Resuelve 5 desafíos interactivos con puntaje sobre hipótesis inductivas, número óptimo de movimientos de Hanoi, fórmulas cerradas y la razón de Fibonacci:",
            widget: {
              file: "widgets/tics/u02_reto_induccion.html",
              title: "Reto Integrador Unidad 02",
              height: "560px"
            }
          }
        ]
      }
    ],
    comprueba: {
      title: "Comprueba: Evaluación de Inducción Matemática y Recursión",
      subtitle: "Evaluación interactiva formativa de la Unidad 02.",
      widget: {
        file: "widgets/tics/u02_reto_induccion.html",
        title: "Evaluación Unidad 02",
        height: "580px"
      }
    }
  }
};


/**
 * UNIDAD 03: TEORÍA DE CONJUNTOS Y ÁLGEBRA BOOLEANA
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

const TICS_U03_TOPICS = {
  "tics-u03-t01-conjuntos-subconjuntos": {
    id: "tics-u03-t01-conjuntos-subconjuntos",
    title: "3.1 Conjuntos y subconjuntos",
    subtitle: "Definición formal de conjunto, pertenencia (∈), inclusión (⊆), cardinalidad, conjunto vacío (∅) y universo (U).",
    unit: 3,
    unitTitle: "Unidad 03: Teoría de conjuntos",
    week: 3,
    weekTitle: "Unidad 03: Teoría de conjuntos",
    difficulty: "Fácil",
    category: "Teoría de Conjuntos",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Pertenencia e Inclusión", type: "teal" },
      { text: "Conjunto Vacío ∅", type: "blue" }
    ],
    sections: [
      {
        id: "conceptos-fundamentales-conjuntos",
        title: "1. ¿En qué consiste un conjunto?",
        shortTitle: "¿En qué consiste?",
        icon: "fa-shapes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Un <strong>conjunto</strong> es una colección bien definida de objetos distintos considerados como un todo. Los objetos que lo componen se denominan <strong>elementos</strong> o miembros. La relación fundamental es la <strong>pertenencia</strong>: escribimos <code>x ∈ A</code> si el elemento x pertenece al conjunto A, o <code>x ∉ A</code> si no pertenece.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div class="subcard-box p-4 border-teal-500/30">
              <span class="text-teal-400 font-bold block text-sm mb-1">Inclusión (Subconjuntos ⊆):</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Decimos que <code>A ⊆ B</code> (A es subconjunto de B) si y solo si <strong>todo elemento de A es también elemento de B</strong>:
                <code>∀ x, (x ∈ A ⇒ x ∈ B)</code>.
              </p>
            </div>
            <div class="subcard-box p-4 border-sky-500/30">
              <span class="text-sky-400 font-bold block text-sm mb-1">Conjunto Vacío (∅):</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                El conjunto sin elementos se denota <code>∅</code> o <code>{}</code>. Su cardinalidad es <code>|∅| = 0</code>. Por vaciedad lógica, <strong>el conjunto vacío es subconjunto de todo conjunto A (∅ ⊆ A)</strong>.
              </p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Explorador Interactivo de Conjuntos y Pertenencia",
            description: "Escribe tus propios conjuntos A y B, evalúa relaciones de inclusión y comprueba si cualquier elemento x pertenece a cada uno en tiempo real:",
            widget: {
              file: "widgets/tics/u03_explorador_conjuntos.html",
              title: "Explorador de Conjuntos",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u03-t02-operaciones-conjuntos": {
    id: "tics-u03-t02-operaciones-conjuntos",
    title: "3.2 Operaciones con conjuntos",
    subtitle: "Álgebra fundamental: Unión (∪), Intersección (∩), Diferencia relativa (\), Complemento (A^c) y Diferencia Simétrica (Δ).",
    unit: 3,
    unitTitle: "Unidad 03: Teoría de conjuntos",
    week: 3,
    weekTitle: "Unidad 03: Teoría de conjuntos",
    difficulty: "Media",
    category: "Teoría de Conjuntos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Diagrama de Venn", type: "teal" },
      { text: "Álgebra de Conjuntos", type: "purple" }
    ],
    sections: [
      {
        id: "operaciones-fundamentales",
        title: "1. Operaciones y Diagramas de Venn",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-circle-nodes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Al igual que en la aritmética combinamos números mediante suma y producto, en la teoría de conjuntos combinamos subconjuntos de un universo <code>U</code> mediante operaciones estándar:
          </p>

          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table font-mono">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-teal-400 font-bold">Operación</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Notación</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Definición Formal por Comprensión</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Unión</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A ∪ B</td>
                  <td class="py-2 px-3 text-emerald-400">{ x ∈ U | x ∈ A ∨ x ∈ B }</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Intersección</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A ∩ B</td>
                  <td class="py-2 px-3 text-emerald-400">{ x ∈ U | x ∈ A ∧ x ∈ B }</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Diferencia</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A \ B</td>
                  <td class="py-2 px-3 text-emerald-400">{ x ∈ U | x ∈ A ∧ x ∉ B }</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Complemento</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A^c</td>
                  <td class="py-2 px-3 text-emerald-400">{ x ∈ U | x ∉ A } = U \ A</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Dif. Simétrica</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A Δ B</td>
                  <td class="py-2 px-3 text-emerald-400">(A \ B) ∪ (B \ A) = (A ∪ B) \ (A ∩ B)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Diagrama de Venn Interactivo",
            description: "Haz clic en cada operación para ver cómo se sombrean las regiones correspondientes del Diagrama de Venn y cuáles elementos pertenecen al conjunto resultante:",
            widget: {
              file: "widgets/tics/u03_diagrama_venn.html",
              title: "Diagrama de Venn Interactivo",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u03-t03-algebra-booleana": {
    id: "tics-u03-t03-algebra-booleana",
    title: "3.3 Álgebra booleana de la teoría de conjuntos",
    subtitle: "Isomorfismo con la lógica proposicional, compuertas lógicas y verificación de las Leyes de De Morgan.",
    unit: 3,
    unitTitle: "Unidad 03: Teoría de conjuntos",
    week: 3,
    weekTitle: "Unidad 03: Teoría de conjuntos",
    difficulty: "Media",
    category: "Teoría de Conjuntos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Leyes de De Morgan", type: "amber" },
      { text: "Lógica Booleana", type: "teal" }
    ],
    sections: [
      {
        id: "leyes-de-morgan",
        title: "1. Álgebra de Boole y Leyes de De Morgan",
        shortTitle: "Leyes de De Morgan",
        icon: "fa-toggle-on",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Existe un <strong>isomorfismo estructural exacto</strong> entre el álgebra de conjuntos <code>(𝒫(U), ∪, ∩, ^c)</code> y el álgebra booleana de la lógica de circuitos <code>({0, 1}, ∨, ∧, ¬)</code>. Las leyes que rigen la simplificación de expresiones de conjuntos son idénticas a las utilizadas por los ingenieros de hardware para diseñar circuitos lógicos.
          </p>

          <div class="bg-[#090d14] border border-amber-500/30 rounded-xl p-4 my-4 font-mono text-xs space-y-2">
            <h4 class="text-amber-400 font-bold uppercase text-sm mb-1">Las Leyes de De Morgan para Conjuntos:</h4>
            <div class="p-2 rounded bg-[#10141d] text-teal-300 font-bold">
              1. (A ∪ B)^c = A^c ∩ B^c &nbsp;&nbsp; (El complemento de la unión es la intersección de complementos)
            </div>
            <div class="p-2 rounded bg-[#10141d] text-sky-300 font-bold">
              2. (A ∩ B)^c = A^c ∪ B^c &nbsp;&nbsp; (El complemento de la intersección es la unión de complementos)
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Álgebra Booleana y Leyes de De Morgan",
            description: "Analiza la tabla de verdad y la correspondencia entre operadores de conjuntos, operadores lógicos (AND, OR, NOT, XOR) y compuertas digitales:",
            widget: {
              file: "widgets/tics/u03_algebra_booleana.html",
              title: "Álgebra Booleana y De Morgan",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u03-t04-tuplas-conjunto-potencia": {
    id: "tics-u03-t04-tuplas-conjunto-potencia",
    title: "3.4 Tuplas y conjuntos potencia",
    subtitle: "Pares ordenados, producto cartesiano A × B, conjunto potencia 𝒫(A) y su correspondencia con máscaras de bits binarias.",
    unit: 3,
    unitTitle: "Unidad 03: Teoría de conjuntos",
    week: 3,
    weekTitle: "Unidad 03: Teoría de conjuntos",
    difficulty: "Media",
    category: "Teoría de Conjuntos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Producto Cartesiano", type: "teal" },
      { text: "Conjunto Potencia 2^n", type: "blue" }
    ],
    sections: [
      {
        id: "producto-cartesiano-potencia",
        title: "1. Producto Cartesiano y Conjunto Potencia",
        shortTitle: "Cartesiano y potencia",
        icon: "fa-grid-2",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>producto cartesiano</strong> <code>A × B</code> es el conjunto de todos los pares ordenados <code>(a, b)</code> tales que <code>a ∈ A</code> y <code>b ∈ B</code>. Su cardinalidad es el producto de cardinalidades: <code>|A × B| = |A| · |B|</code>. Es el fundamento matemático del modelo relacional en bases de datos (SQL).
          </p>

          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>conjunto potencia</strong> <code>𝒫(A)</code> es la familia de <strong>todos los subconjuntos posibles de A</strong>, incluidos el conjunto vacío <code>∅</code> y el propio conjunto <code>A</code>. Si <code>|A| = n</code>, entonces:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            |𝒫(A)| = 2^{|A|} = 2^n subconjuntos
          </div>

          <p class="text-xs text-gray-300 leading-relaxed">
            En programación, cada subconjunto se representa elegantemente mediante un entero de <code>n</code> bits (una <em>máscara de bits</em> o bitmask), donde el bit <code>i</code> vale <code>1</code> si el elemento <code>i</code> está incluido en el subconjunto y <code>0</code> si no lo está.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Producto Cartesiano y Conjunto Potencia",
            description: "Define conjuntos pequeños y visualiza la cuadrícula de tuplas ordenadas de A × B junto con los 2^n subconjuntos generados con sus máscaras de bits binarias:",
            widget: {
              file: "widgets/tics/u03_tuplas_potencia.html",
              title: "Cartesiano y Conjunto Potencia",
              height: "530px"
            }
          },
          {
            category: "practica",
            title: "Reto Integrador de la Unidad 03: Teoría de Conjuntos",
            description: "Resuelve 5 desafíos interactivos con puntaje sobre cardinalidad de potencia, leyes de De Morgan, producto cartesiano y subconjuntos propios:",
            widget: {
              file: "widgets/tics/u03_reto_conjuntos.html",
              title: "Reto Integrador Unidad 03",
              height: "560px"
            }
          }
        ]
      }
    ],
    comprueba: {
      title: "Comprueba: Evaluación de Teoría de Conjuntos",
      subtitle: "Evaluación interactiva formativa de la Unidad 03.",
      widget: {
        file: "widgets/tics/u03_reto_conjuntos.html",
        title: "Evaluación Unidad 03",
        height: "580px"
      }
    }
  }
};


/**
 * UNIDAD 04: FUNCIONES, RELACIONES Y ÓRDENES PARCIALES
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

const TICS_U04_TOPICS = {
  "tics-u04-t01-propiedades-funciones": {
    id: "tics-u04-t01-propiedades-funciones",
    title: "4.1 Propiedades de las funciones",
    subtitle: "Dominio, codominio, imagen, inyectividad (1 a 1), sobreyectividad (sobre) y biyectividad con criterio de invertibilidad.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Inyectiva", type: "teal" },
      { text: "Sobreyectiva", type: "sky" },
      { text: "Biyectiva", type: "purple" }
    ],
    sections: [
      {
        id: "definicion-propiedades-funciones",
        title: "1. ¿Cómo se clasifican las funciones?",
        shortTitle: "¿En qué consiste?",
        icon: "fa-arrows-to-dot",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>función</strong> <code>f: A &rarr; B</code> es una regla de correspondencia que asigna a cada elemento <code>x ∈ A</code> (dominio) <strong>exactamente un único elemento</strong> <code>y ∈ B</code> (codominio). Las propiedades fundamentales que determinan su comportamiento son:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div class="subcard-box p-3 border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1 font-sans">Inyectiva (1 a 1):</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Elementos distintos del dominio tienen imágenes distintas:
                <code>f(a) = f(b) &rArr; a = b</code>.
              </p>
            </div>
            <div class="subcard-box p-3 border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1 font-sans">Sobreyectiva (Sobre):</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Todo elemento del codominio es imagen de al menos un elemento del dominio:
                <code>Im(f) = B</code>.
              </p>
            </div>
            <div class="subcard-box p-3 border-purple-500/30">
              <span class="text-purple-400 font-bold block mb-1 font-sans">Biyectiva:</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Es inyectiva y sobreyectiva a la vez. Es la <strong>condición necesaria y suficiente para que exista función inversa f⁻¹</strong>.
              </p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Funciones entre Conjuntos",
            description: "Modifica las flechas de asignación entre el dominio A y codominio B para observar en tiempo real la verificación automática de inyectividad, sobreyectividad y biyectividad:",
            widget: {
              file: "widgets/tics/u04_propiedades_funciones.html",
              title: "Simulador de Propiedades de Funciones",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t02-operaciones-funciones": {
    id: "tics-u04-t02-operaciones-funciones",
    title: "4.2 Operaciones con funciones",
    subtitle: "Aritmética de funciones, composición (g ∘ f)(x) = g(f(x)), no conmutatividad y cálculo de funciones inversas.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Composición g ∘ f", type: "teal" },
      { text: "Función Inversa", type: "blue" }
    ],
    sections: [
      {
        id: "composicion-funciones-pipeline",
        title: "1. Composición de Funciones como Pipeline de Datos",
        shortTitle: "Composición de funciones",
        icon: "fa-route",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Dadas dos funciones <code>f: A &rarr; B</code> y <code>g: B &rarr; C</code>, la <strong>composición</strong> <code>g ∘ f: A &rarr; C</code> aplica primero la función f y luego la función g sobre el resultado obtenido:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            (g ∘ f)(x) = g(f(x))
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
            En computación, este concepto equivale al <strong>encadenamiento de funciones</strong> (pipelines en programación funcional o el operador <code>|</code> en pipes de Unix/Linux).
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Composición de Funciones (A → B → C)",
            description: "Selecciona valores de entrada en A y observa la animación del flujo de evaluación encadenada a través de B hasta C:",
            widget: {
              file: "widgets/tics/u04_composicion_funciones.html",
              title: "Composición de Funciones",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t03-propiedades-relaciones": {
    id: "tics-u04-t03-propiedades-relaciones",
    title: "4.3 Propiedades de las relaciones",
    subtitle: "Relaciones binarias R ⊆ A × A, representación matricial y grafo dirigido, y verificación de propiedades algebraicas.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Matriz Booleana", type: "teal" },
      { text: "Dígrafos", type: "amber" }
    ],
    sections: [
      {
        id: "propiedades-relaciones-binarias",
        title: "1. Propiedades Fundamentales de una Relación",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-network-wired",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una relación binaria <code>R</code> sobre un conjunto <code>A</code> es un subconjunto del producto cartesiano: <code>R ⊆ A × A</code>. Las cuatro propiedades esenciales que determinan su estructura algebraica son:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs my-4">
            <div class="subcard-box p-3 border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1 font-sans">1. Reflexiva:</span>
              <p class="text-gray-300 font-sans">Todo elemento está relacionado consigo mismo: <code>∀ x ∈ A, (x, x) ∈ R</code>.</p>
            </div>
            <div class="subcard-box p-3 border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1 font-sans">2. Simétrica:</span>
              <p class="text-gray-300 font-sans">Si x se relaciona con y, y se relaciona con x: <code>(x, y) ∈ R ⇒ (y, x) ∈ R</code>.</p>
            </div>
            <div class="subcard-box p-3 border-amber-500/30">
              <span class="text-amber-400 font-bold block mb-1 font-sans">3. Antisimétrica:</span>
              <p class="text-gray-300 font-sans">No hay reciprocidad en elementos distintos: <code>(x, y) ∈ R ∧ (y, x) ∈ R ⇒ x = y</code>.</p>
            </div>
            <div class="subcard-box p-3 border-purple-500/30">
              <span class="text-purple-400 font-bold block mb-1 font-sans">4. Transitiva:</span>
              <p class="text-gray-300 font-sans">Los caminos de longitud 2 se atajan: <code>(x, y) ∈ R ∧ (y, z) ∈ R ⇒ (x, z) ∈ R</code>.</p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Analizador Interactivo de Relaciones (Matriz Booleana)",
            description: "Activa o desactiva celdas en la matriz booleana 4x4 o selecciona preajustes para observar el diagnóstico instantáneo de sus propiedades algebraicas:",
            widget: {
              file: "widgets/tics/u04_analizador_relaciones.html",
              title: "Analizador de Relaciones",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t04-operaciones-relaciones": {
    id: "tics-u04-t04-operaciones-relaciones",
    title: "4.4 Operaciones con relaciones",
    subtitle: "Unión, intersección, relación inversa R^-1, composición S ∘ R y su cálculo computacional con producto booleano de matrices.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Relación Inversa", type: "teal" },
      { text: "Producto Booleano", type: "blue" }
    ],
    sections: [
      {
        id: "operaciones-relaciones-algebra",
        title: "1. Operaciones y Álgebra de Relaciones",
        shortTitle: "Operaciones con relaciones",
        icon: "fa-code-merge",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Al igual que los conjuntos, las relaciones pueden combinarse mediante unión, intersección y complemento. Además, poseen dos operaciones canónicas exclusivas:
          </p>

          <div class="space-y-2 font-mono text-xs my-4">
            <div class="p-3 rounded bg-[#10141d] border border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1">Relación Inversa (R⁻¹):</span>
              <p class="text-gray-300 font-sans">Se invierte la dirección de cada par: <code>(b, a) ∈ R⁻¹ &iff; (a, b) ∈ R</code>. En términos matriciales corresponde a la traspuesta: <code>M_{R⁻¹} = (M_R)ᵀ</code>.</p>
            </div>
            <div class="p-3 rounded bg-[#10141d] border border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1">Composición de Relaciones (S ∘ R):</span>
              <p class="text-gray-300 font-sans">Existe un intermediario común: <code>(a, c) ∈ S ∘ R &iff; ∃ b ∈ B, ((a, b) ∈ R ∧ (b, c) ∈ S)</code>. Se calcula con el producto booleano de matrices <code>M_{S ∘ R} = M_R ⊙ M_S</code>.</p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Operaciones con Relaciones",
            description: "Calcula en tiempo real la inversa R^-1, la composición S ∘ R, la unión y la intersección de relaciones discretas:",
            widget: {
              file: "widgets/tics/u04_operaciones_relaciones.html",
              title: "Operaciones con Relaciones",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t05-equivalencia-particiones": {
    id: "tics-u04-t05-equivalencia-particiones",
    title: "4.5 Relaciones de equivalencia y particiones",
    subtitle: "Clases de equivalencia [x], conjunto cociente A/R y el teorema de biyección con particiones del conjunto.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Clases de Equivalencia", type: "teal" },
      { text: "Particiones", type: "purple" }
    ],
    sections: [
      {
        id: "teorema-equivalencia-particiones",
        title: "1. Clases de Equivalencia y Partición",
        shortTitle: "¿En qué consiste?",
        icon: "fa-layer-group",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una relación de equivalencia (reflexiva, simétrica y transitiva) modela matemáticamente la noción de que dos objetos son <strong>indistinguibles bajo cierto criterio</strong> (por ejemplo, tener el mismo residuo al dividir entre m).
          </p>

          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            La <strong>clase de equivalencia</strong> de un elemento <code>x</code> se denota <code>[x] = { y ∈ A | (x, y) ∈ R }</code>.
            El <strong>Teorema Fundamental</strong> demuestra que toda relación de equivalencia descompone al conjunto A en bloques disjuntos no vacíos que forman una <strong>partición exacta</strong> de A.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Clases de Equivalencia y Particiones",
            description: "Modifica el módulo m y observa cómo el conjunto de enteros se agrupa visualmente en m particiones disjuntas sin solapamientos:",
            widget: {
              file: "widgets/tics/u04_clases_equivalencia.html",
              title: "Clases de Equivalencia",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t06-ordenes-parciales": {
    id: "tics-u04-t06-ordenes-parciales",
    title: "4.6 Órdenes parciales",
    subtitle: "Conjuntos parcialmente ordenados (Posets), comparabilidad, diagramas de Hasse y elementos maximales y minimales.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Avanzada",
    category: "Funciones y Relaciones",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Posets", type: "teal" },
      { text: "Diagrama de Hasse", type: "amber" }
    ],
    sections: [
      {
        id: "orden-parcial-hasse",
        title: "1. Órdenes Parciales y Diagramas de Hasse",
        shortTitle: "Diagramas de Hasse",
        icon: "fa-diagram-project",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una relación de <strong>orden parcial</strong> (reflexiva, antisimétrica y transitiva) modela jerarquías donde no necesariamente todos los elementos pueden compararse entre sí (por ejemplo, dependencias de tareas en un proyecto de software o inclusión de subconjuntos).
          </p>

          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4 my-4 font-mono text-xs space-y-2">
            <h4 class="text-amber-400 font-bold uppercase text-sm mb-1">El Diagrama de Hasse:</h4>
            <p class="text-gray-300 font-sans leading-relaxed">
              Es un grafo simplificado que representa el orden parcial eliminando:
              1. Todos los bucles reflexivos <code>(x, x)</code>.
              2. Todas las aristas deducibles por transitividad (si <code>x < y</code> y <code>y < z</code>, se omite <code>x < z</code>).
              3. Las flechas se reemplazan por orientación vertical: el elemento mayor se dibuja arriba del menor.
            </p>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Diagramas de Hasse",
            description: "Explora los diagramas de Hasse para el poset de divisibilidad D(12) y para el poset de inclusión de subconjuntos 𝒫({a, b}):",
            widget: {
              file: "widgets/tics/u04_diagrama_hasse.html",
              title: "Diagrama de Hasse",
              height: "530px"
            }
          },
          {
            category: "practica",
            title: "Reto Integrador de la Unidad 04: Funciones y Relaciones",
            description: "Evalúa tus conocimientos con 5 retos interactivos con puntaje sobre funciones biyectivas, relaciones de equivalencia, particiones y diagramas de Hasse:",
            widget: {
              file: "widgets/tics/u04_reto_relaciones.html",
              title: "Reto Integrador Unidad 04",
              height: "560px"
            }
          }
        ]
      }
    ],
    comprueba: {
      title: "Comprueba: Evaluación de Funciones y Relaciones",
      subtitle: "Evaluación interactiva formativa de la Unidad 04.",
      widget: {
        file: "widgets/tics/u04_reto_relaciones.html",
        title: "Evaluación Unidad 04",
        height: "580px"
      }
    }
  }
};


/**
 * UNIDAD 05: PRINCIPIOS FUNDAMENTALES DEL CONTEO Y COMBINATORIA
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

const TICS_U05_TOPICS = {
  "tics-u05-t01-reglas-suma-producto-palomar": {
    id: "tics-u05-t01-reglas-suma-producto-palomar",
    title: "5.1 Reglas de la suma y el producto. Principio del palomar",
    subtitle: "Regla aditiva, regla multiplicativa, diagramas de árbol y Principio de las Casillas (Dirichlet) con aplicaciones en informática.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Fácil",
    category: "Principios de Conteo",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Regla del Producto", type: "teal" },
      { text: "Principio del Palomar", type: "amber" }
    ],
    sections: [
      {
        id: "reglas-conteo-palomar",
        title: "1. Principios Fundamentales del Conteo",
        shortTitle: "¿En qué consiste?",
        icon: "fa-calculator",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El conteo sistemático es la base para el <strong>análisis de complejidad temporal y espacial</strong> de algoritmos, así como para la criptografía y las redes de datos. Dos axiomas fundamentales rigen este dominio:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div class="subcard-box p-4 border-teal-500/30">
              <span class="text-teal-400 font-bold block text-sm mb-1 font-sans">1. Regla de la Suma:</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Si una tarea puede realizarse de <code>n_1</code> formas o bien de <code>n_2</code> formas mutuamente excluyentes (disjuntas), existen <code>n_1 + n_2</code> maneras totales de realizarla.
              </p>
            </div>
            <div class="subcard-box p-4 border-sky-500/30">
              <span class="text-sky-400 font-bold block text-sm mb-1 font-sans">2. Regla del Producto:</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Si un procedimiento se compone de una secuencia de dos etapas independientes con <code>n_1</code> y <code>n_2</code> opciones respectivamente, existen <code>n_1 × n_2</code> resultados posibles.
              </p>
            </div>
          </div>

          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4 my-4">
            <h4 class="text-amber-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-box-open"></i> El Principio del Palomar (Dirichlet)
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              Si se distribuyen <code>n</code> palomas (objetos) en <code>k</code> casillas (nidos) y <code>n > k</code>, entonces <strong>al menos una casilla debe contener 2 o más palomas</strong>. En su versión generalizada, al menos una casilla contiene <code>⌈n/k⌉</code> objetos. Es la demostración formal de por qué ocurren colisiones en funciones Hash.
            </p>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Árbol de Decisiones y Principio del Palomar",
            description: "Genera árboles de decisiones multinivel aplicando la regla del producto y experimenta con el principio del palomar variando objetos y casillas:",
            widget: {
              file: "widgets/tics/u05_arbol_palomar.html",
              title: "Árboles y Principio del Palomar",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t02-permutaciones": {
    id: "tics-u05-t02-permutaciones",
    title: "5.2 Permutaciones",
    subtitle: "Ordenamientos de elementos sin repetición, explosión factorial n! y cálculo de P(n, r) = n! / (n - r)!.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Fácil",
    category: "Principios de Conteo",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Factorial n!", type: "teal" },
      { text: "Orden Estricto", type: "blue" }
    ],
    sections: [
      {
        id: "permutaciones-orden",
        title: "1. Permutaciones: Cuando el Orden Importa",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-arrow-down-a-z",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>permutación</strong> de <code>n</code> objetos tomados de <code>r</code> en <code>r</code> es un arreglo ordenado donde <strong>el orden de los elementos altera el resultado</strong>:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            P(n, r) = n · (n - 1) · (n - 2) · ... · (n - r + 1) = n! / (n - r)!
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
            Cuando <code>r = n</code>, ordenamos todos los elementos: <code>P(n, n) = n!</code>. El crecimiento factorial es de los más rápidos en computación, lo que explica la alta complejidad de problemas NP-completos como el Viajante de Comercio (TSP).
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Permutaciones y Crecimiento Factorial",
            description: "Modifica n y r para calcular P(n, r) y observa la lista generada de todas las secuencias ordenadas posibles:",
            widget: {
              file: "widgets/tics/u05_permutaciones.html",
              title: "Simulador de Permutaciones",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t03-permutaciones-repeticion": {
    id: "tics-u05-t03-permutaciones-repeticion",
    title: "5.3 Permutaciones con repetición",
    subtitle: "Arreglos con elementos indistinguibles, cálculo de anagramas y la fórmula del coeficiente multinomial.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Media",
    category: "Principios de Conteo",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Coeficiente Multinomial", type: "teal" },
      { text: "Anagramas", type: "purple" }
    ],
    sections: [
      {
        id: "permutaciones-elementos-repetidos",
        title: "1. Elementos Repetidos y Anagramas",
        shortTitle: "Permutaciones con repetición",
        icon: "fa-repeat",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Si tenemos <code>n</code> objetos de los cuales <code>n_1</code> son idénticos de un primer tipo, <code>n_2</code> de un segundo tipo, ..., y <code>n_k</code> de un k-ésimo tipo (con <code>n_1 + n_2 + ... + n_k = n</code>), el número de permutaciones distinguibles es el <strong>coeficiente multinomial</strong>:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            PR = n! / (n_1! · n_2! · ... · n_k!)
          </div>

          <p class="text-xs text-gray-300 leading-relaxed">
            Se divide entre los factoriales de las frecuencias porque intercambiar dos elementos idénticos entre sí no genera un arreglo nuevo visualmente distinguishable.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Calculadora Interactiva de Anagramas Multinomiales",
            description: "Escribe cualquier palabra o cadena de caracteres y observa el desglose de frecuencias de letras, la simplificación factorial y el total de anagramas únicos:",
            widget: {
              file: "widgets/tics/u05_permutaciones_repeticion.html",
              title: "Permutaciones con Repetición",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t04-combinaciones": {
    id: "tics-u05-t04-combinaciones",
    title: "5.4 Combinaciones",
    subtitle: "Selecciones no ordenadas, subconjuntos de tamaño r, coeficientes binomiales C(n, r) y comparativa rigurosa con permutaciones.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Media",
    category: "Principios de Conteo",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Selección sin Orden", type: "teal" },
      { text: "Coeficientes Binomiales", type: "amber" }
    ],
    sections: [
      {
        id: "combinaciones-seleccion",
        title: "1. Combinaciones: El Orden NO Importa",
        shortTitle: "¿En qué consiste?",
        icon: "fa-arrows-split-up-and-left",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>combinación</strong> es una selección de <code>r</code> objetos tomados de un conjunto de <code>n</code> objetos donde <strong>el orden de selección es irrelevante</strong> (corresponde a elegir un subconjunto de tamaño r):
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            C(n, r) = (n r) = n! / [r! · (n - r)!] = P(n, r) / r!
          </div>

          <p class="text-xs text-gray-300 leading-relaxed">
            Como para cada grupo de <code>r</code> objetos existen <code>r!</code> órdenes posibles, dividimos las permutaciones entre <code>r!</code> para colapsar todas las variantes idénticas en una sola combinación.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Comparador Interactivo: Permutación vs Combinación",
            description: "Modifica los parámetros n y r para observar cuantitativamente cómo las combinaciones reducen el espacio de búsqueda dividiendo entre r!:",
            widget: {
              file: "widgets/tics/u05_combinaciones.html",
              title: "Permutación vs Combinación",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t05-combinaciones-repeticion": {
    id: "tics-u05-t05-combinaciones-repeticion",
    title: "5.5 Combinaciones con repetición",
    subtitle: "Selecciones con reposición, modelo geométrico de estrellas y barras (stars and bars) y soluciones enteras no negativas.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Avanzada",
    category: "Principios de Conteo",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Estrellas y Barras", type: "teal" },
      { text: "Selección con Reposición", type: "purple" }
    ],
    sections: [
      {
        id: "estrellas-y-barras",
        title: "1. El Método de Estrellas y Barras",
        shortTitle: "Estrellas y barras",
        icon: "fa-star",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Las <strong>combinaciones con repetición</strong> cuentan las formas de seleccionar <code>r</code> elementos de <code>n</code> categorías disponibles, pudiendo repetir cualquier categoría las veces que se desee.
          </p>

          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            El método clásico de <strong>estrellas y barras</strong> representa los <code>r</code> objetos idénticos como estrellas (★) y utiliza <code>n - 1</code> barras divisoras (|) para delimitar las <code>n</code> categorías. El número de formas es la combinación de elegir las posiciones de las barras:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            CR(n, r) = C(n + r - 1, r) = (n + r - 1)! / [r! · (n - 1)!]
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Estrellas y Barras",
            description: "Modifica el número de categorías n y objetos r para observar la representación gráfica de las estrellas y separadores y su cálculo exacto:",
            widget: {
              file: "widgets/tics/u05_estrellas_barras.html",
              title: "Estrellas y Barras",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t06-reto-integrador-final": {
    id: "tics-u05-t06-reto-integrador-final",
    title: "5.6 Reto Final Integrador: Matemática Discreta y Computación",
    subtitle: "Desafío culminante que articula sistemas numéricos, inducción, teoría de conjuntos, funciones y combinatoria aplicada a las TICS.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Avanzada",
    category: "Reto Integrador Final",
    timeEstimate: "45 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Desafío Culminante", type: "amber" },
      { text: "TICS & Computación", type: "teal" }
    ],
    sections: [
      {
        id: "integracion-tics-computacion",
        title: "1. La Matemática Discreta como Fundamento de las TICS",
        shortTitle: "Fundamento computacional",
        icon: "fa-crown",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            A lo largo de este curso de <strong>Introducción a las TICS</strong>, hemos recorrido los pilares matemáticos indispensables que sostienen la ingeniería de software y la infraestructura tecnológica moderna:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs my-4">
            <div class="p-3 rounded bg-[#10141d] border border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1">1. Sistemas Numéricos:</span>
              <p class="text-gray-300 font-sans">El lenguaje del silicio: compresión hexadecimal, aritmética de complementos y reloj modular en criptografía y direccionamiento de memoria.</p>
            </div>
            <div class="p-3 rounded bg-[#10141d] border border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1">2. Inducción y Recursión:</span>
              <p class="text-gray-300 font-sans">El diseño de algoritmos de Divide y Vencerás, estructuras auto-referenciadas y verificación formal de correctitud.</p>
            </div>
            <div class="p-3 rounded bg-[#10141d] border border-amber-500/30">
              <span class="text-amber-400 font-bold block mb-1">3. Teoría de Conjuntos y Lógica:</span>
              <p class="text-gray-300 font-sans">Modelos relacionales en bases de datos (SQL), compuertas electrónicas digitales y operadores booleanos.</p>
            </div>
            <div class="p-3 rounded bg-[#10141d] border border-purple-500/30">
              <span class="text-purple-400 font-bold block mb-1">4. Funciones, Relaciones y Conteo:</span>
              <p class="text-gray-300 font-sans">Tablas Hash con colisiones, arquitecturas cliente-servidor en grafos, seguridad de contraseñas y cálculo asintótico Big-O.</p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "practica",
            title: "Gran Reto Final de Matemática Discreta y TICS",
            description: "Supera los 5 desafíos integradores que combinan criptografía, direccionamiento IP, algoritmos de bucles anidados e inclusión-exclusión:",
            widget: {
              file: "widgets/tics/u05_reto_final_conteo.html",
              title: "Reto Final Integrador TICS",
              height: "560px"
            }
          }
        ]
      }
    ],
    comprueba: {
      title: "Comprueba: Evaluación Final Integradora de Introducción a las TICS",
      subtitle: "Certificación y autoevaluación formativa de la asignatura completa.",
      widget: {
        file: "widgets/tics/u05_reto_final_conteo.html",
        title: "Evaluación Final Integradora",
        height: "580px"
      }
    }
  }
};


    

  // =========================================================================
  // PROGRAMACIÓN - CONTENIDOS COMPLETOS ADICIONALES (UNIDADES 02 A 14)
  // =========================================================================

/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 02 - ENTORNO DE DESARROLLO
 * Prof. Leo Gaviria - Programación
 */

const PROG_U02_TOPICS = {
  "prog-entorno-instalacion": {
    id: "prog-entorno-instalacion",
    title: "2.1 Instalación y configuración de Python y Visual Studio Code",
    subtitle: "Qué es un intérprete, flujo de compilación a bytecode, instalación paso a paso, extensiones esenciales y organización de proyectos.",
    unit: 2,
    unitTitle: "Unidad 02: Entorno de desarrollo",
    week: 2,
    weekTitle: "Unidad 02: Entorno de desarrollo",
    difficulty: "Fácil",
    category: "Entorno y Herramientas",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "VS Code", type: "blue" },
      { text: "Python 3", type: "teal" }
    ],
    sections: [
      {
        id: "que-es-python-interprete",
        title: "1. ¿Qué es Python y qué es un Intérprete?",
        shortTitle: "Python e Intérprete",
        icon: "fa-terminal",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            <strong>Python</strong> es un lenguaje de programación de alto nivel, interpretado, dinámico y multiparadigma, diseñado por Guido van Rossum a principios de los años 90 con un principio rector: la legibilidad del código.
          </p>
          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
            <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-cog"></i> Compilador vs. Intérprete
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              A diferencia de lenguajes compilados puros como C o Rust (que traducen todo el código fuente directamente a código máquina binario nativo antes de la ejecución), Python utiliza un <strong>intérprete</strong>. El código fuente <code>.py</code> se compila primero a un formato intermedio optimizado llamado <strong>Bytecode</strong> (archivos <code>.pyc</code> dentro de <code>__pycache__</code>), y luego la <strong>Python Virtual Machine (PVM)</strong> ejecuta esas instrucciones línea por línea.
            </p>
          </div>
        `
      },
      {
        id: "guia-instalacion-paso-a-paso",
        title: "2. Guía Visual de Instalación y Configuración",
        shortTitle: "Guía de Instalación",
        icon: "fa-download",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para contar con un entorno profesional productivo, requerimos dos piezas fundamentales de software:
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Herramienta</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Propósito Principal</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Detalle Crítico</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">Python 3.x Oficial</td>
                  <td class="py-2.5 px-3">Motor de ejecución e intérprete estándar.</td>
                  <td class="py-2.5 px-3"><span class="text-amber-400 font-semibold">Marcar: "Add python.exe to PATH"</span> al instalar.</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Visual Studio Code</td>
                  <td class="py-2.5 px-3">Editor de código modular, liviano y configurable.</td>
                  <td class="py-2.5 px-3">Instalar extensión oficial <code>ms-python.python</code> y <code>Pylance</code>.</td>
                </tr>
                <tr>
                  <td class="font-bold text-emerald-400 py-2.5 px-3">Terminal Integrada</td>
                  <td class="py-2.5 px-3">Línea de comandos accesible con <kbd class="bg-gray-800 px-1.5 py-0.5 rounded text-gray-200">Ctrl + ñ</kbd>.</td>
                  <td class="py-2.5 px-3">Permite ejecutar <code>python main.py</code> sin salir del editor.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "practica",
            title: "Actividad: Configura tu Entorno",
            description: "Verifica mediante esta lista de comprobación interactiva que tu estación de desarrollo cuente con todos los componentes requeridos:",
            widget: {
              file: "widgets/programacion/u02_checklist_entorno.html",
              title: "Lista de Comprobación: Configura tu Entorno",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-entorno",
        title: "3. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Responde las siguientes preguntas conceptuales sobre el entorno de desarrollo de Python:
          </p>
        `,
        quiz: [
          {
            question: "¿Por qué es fundamental marcar la opción 'Add python.exe to PATH' durante la instalación de Python en Windows?",
            options: [
              "Para que Python consuma menos memoria RAM en ejecución.",
              "Para permitir que el sistema operativo reconozca el comando 'python' desde cualquier terminal o directorio.",
              "Porque de lo contrario no se pueden guardar archivos con extensión .py.",
              "Es un requisito exclusivo de la licencia de código abierto."
            ],
            correct: 1,
            explanation: "La variable de entorno PATH indica al sistema operativo en qué carpetas buscar los ejecutables. Sin ella, la terminal arrojará el error: 'python no se reconoce como un comando interno o externo'."
          },
          {
            question: "¿Qué rol cumple la Máquina Virtual de Python (PVM)?",
            options: [
              "Diseñar las interfaces gráficas del sistema.",
              "Interpretar y ejecutar las instrucciones en Bytecode (.pyc) en la CPU.",
              "Formatear automáticamente el código con sangría de 4 espacios.",
              "Conectarse a internet para descargar paquetes de terceros."
            ],
            correct: 1,
            explanation: "La PVM es el motor interno de tiempo de ejecución de Python que lee el Bytecode intermedio y lo ejecuta instrucción por instrucción."
          }
        ]
      }
    ]
  },

  "prog-primer-programa": {
    id: "prog-primer-programa",
    title: "2.2 Primer programa: ejecución, documentación y pruebas",
    subtitle: "Estructura de un script, la función print(), comentarios, buenas prácticas PEP 8 y ciclo de ejecución interactiva.",
    unit: 2,
    unitTitle: "Unidad 02: Entorno de desarrollo",
    week: 2,
    weekTitle: "Unidad 02: Entorno de desarrollo",
    difficulty: "Fácil",
    category: "Fundamentos de Código",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "print()", type: "teal" },
      { text: "PEP 8", type: "purple" }
    ],
    sections: [
      {
        id: "estructura-programa-print",
        title: "1. Estructura de un Programa y Salida con print()",
        shortTitle: "Estructura y print()",
        icon: "fa-code",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En Python, un programa es un archivo de texto con extensión <code>.py</code> que contiene una serie ordenada de declaraciones y expresiones legibles. La función integrada más elemental para comunicarnos con el usuario es <code>print()</code>, encargada de emitir texto al flujo de salida estándar (<em>stdout</em>).
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-gray-500"># main.py - Nuestro primer script formal</span><br>
            <span class="text-purple-400">print</span>(<span class="text-emerald-300">"¡Hola, mundo de la programación!"</span>)<br>
            <span class="text-purple-400">print</span>(<span class="text-emerald-300">"Resultado:"</span>, <span class="text-sky-300">5</span> + <span class="text-sky-300">3</span> * <span class="text-sky-300">2</span>)
          </div>
          <p class="text-xs text-gray-400 leading-relaxed">
            Observa que <code>print()</code> puede recibir múltiples argumentos separados por coma; por defecto, los imprimirá separados por un espacio y agregará un salto de línea al final.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Interactivo: Del Código al Resultado",
            description: "Modifica el código de prueba, ejecútalo y observa la transición visual desde el código fuente hasta la consola stdout:",
            widget: {
              file: "widgets/programacion/u02_codigo_resultado.html",
              title: "Del Código al Resultado",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comentarios-documentacion",
        title: "2. Comentarios y Documentación en el Código",
        shortTitle: "Comentarios y PEP 8",
        icon: "fa-comment-dots",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El código no solo se escribe para que la máquina lo entienda, sino principalmente para que otros programadores (y tú mismo en el futuro) puedan mantenerlo sin fricción. Python ofrece dos mecanismos:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">Comentarios de una línea (#)</h5>
              <p class="text-xs text-gray-300">
                Inician con <code>#</code>. Son completamente ignorados por el intérprete en tiempo de ejecución. Se utilizan para explicar el <em>por qué</em> de una decisión de diseño:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-2">
                # Tasa de IVA según regulación fiscal vigente<br>
                tasa_iva = 0.19
              </div>
            </div>
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-purple-400 font-bold text-xs uppercase mb-2">Docstrings (&#34;&#34;&#34; ... &#34;&#34;&#34;)</h5>
              <p class="text-xs text-gray-300">
                Cadenas multilínea delimitadas por triples comillas ubicadas al inicio de módulos o funciones. Forman parte de los metadatos accesibles con <code>help()</code>:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-2">
                &#34;&#34;&#34;Módulo de cálculo de nómina mensual.<br>Autor: Prof. Leo Gaviria&#34;&#34;&#34;
              </div>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "¿Qué salida imprimirá la siguiente instrucción: print('A', 'B', sep='-', end='*')?",
            options: [
              "A B*",
              "A-B*",
              "A-B con un salto de línea",
              "SyntaxError por parámetros desconocidos"
            ],
            correct: 1,
            explanation: "El parámetro sep='-' reemplaza el espacio por defecto entre argumentos, y end='*' reemplaza el salto de línea final por un asterisco, generando 'A-B*'."
          }
        ]
      }
    ]
  },

  "prog-errores-depuracion": {
    id: "prog-errores-depuracion",
    title: "2.3 Errores y depuración",
    subtitle: "Clasificación taxonómica de errores (Sintaxis, Ejecución y Lógicos), lectura de tracebacks y estrategias metódicas de depuración.",
    unit: 2,
    unitTitle: "Unidad 02: Entorno de desarrollo",
    week: 2,
    weekTitle: "Unidad 02: Entorno de desarrollo",
    difficulty: "Media",
    category: "Depuración de Software",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Traceback", type: "red" },
      { text: "Debugging", type: "teal" }
    ],
    sections: [
      {
        id: "tipos-de-errores",
        title: "1. Clasificación Fundamental de Errores",
        shortTitle: "Tipos de Errores",
        icon: "fa-bug",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Todo programador comete errores constantemente; la diferencia entre un principiante y un profesional radica en su método para diagnosticar, aislar y corregir los fallos. En Python, los errores se dividen en tres grandes familias:
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-red-400 font-bold">Tipo de Error</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Momento de Detección</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo Típico</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Comportamiento</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-red-400 py-2.5 px-3">SyntaxError</td>
                  <td class="py-2.5 px-3">Antes de ejecutar (fase de parsing).</td>
                  <td class="py-2.5 px-3 font-mono text-gray-300">if x > 5 print(x)</td>
                  <td class="py-2.5 px-3">El programa ni siquiera comienza a correr.</td>
                </tr>
                <tr>
                  <td class="font-bold text-amber-400 py-2.5 px-3">RuntimeError (Excepción)</td>
                  <td class="py-2.5 px-3">Durante la ejecución activa.</td>
                  <td class="py-2.5 px-3 font-mono text-gray-300">10 / 0 &nbsp;|&nbsp; int("abc")</td>
                  <td class="py-2.5 px-3">El programa colapsa en la línea del fallo con un Traceback.</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Error Lógico</td>
                  <td class="py-2.5 px-3">Nunca salta error automático.</td>
                  <td class="py-2.5 px-3 font-mono text-gray-300">area = base + altura</td>
                  <td class="py-2.5 px-3">El programa corre pero arroja un resultado incorrecto.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Diagnóstico y Depuración",
            description: "Analiza cuatro casos reales con código defectuoso, interpreta el Traceback y selecciona la causa raíz:",
            widget: {
              file: "widgets/programacion/u02_simulador_depuracion.html",
              title: "Simulador de Diagnóstico y Depuración",
              height: "500px"
            }
          }
        ]
      },
      {
        id: "lectura-traceback-metodologia",
        title: "2. Cómo Leer un Traceback como un Profesional",
        shortTitle: "Lectura de Tracebacks",
        icon: "fa-list-ol",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Cuando ocurre una excepción en tiempo de ejecución, Python imprime un informe de pila llamado <strong>Traceback</strong>. La regla de oro para leerlo es: <strong>leer de abajo hacia arriba</strong>.
          </p>
          <div class="bg-[#141923] border border-red-500/30 rounded-xl p-4 my-4">
            <div class="font-mono text-xs text-red-300 leading-relaxed">
              Traceback (most recent call last):<br>
              &nbsp;&nbsp;File "calculos.py", line 12, in dividir<br>
              &nbsp;&nbsp;&nbsp;&nbsp;return dividendo / divisor<br>
              <strong class="text-red-400">ZeroDivisionError: division by zero</strong>
            </div>
            <p class="text-xs text-gray-300 mt-3">
              1. <strong>Línea final:</strong> Te dice exactamente qué falló (<code>ZeroDivisionError</code>) y el motivo (<code>division by zero</code>).<br>
              2. <strong>Líneas previas:</strong> Te señalan en qué archivo (<code>calculos.py</code>) y en qué número de línea (<code>line 12</code>) se detuvo el intérprete.
            </p>
          </div>
        `,
        quiz: [
          {
            question: "Si tu programa corre sin arrojar ningún mensaje de error, pero calcula que el promedio de las notas 4.0, 3.0 y 5.0 es 8.0, ¿ante qué tipo de error te encuentras?",
            options: [
              "SyntaxError por falta de indentación.",
              "Error Lógico: probablemente una omisión de paréntesis en la precedencia de operadores.",
              "TypeError por mezclar floats con enteros.",
              "ZeroDivisionError en la división por 3."
            ],
            correct: 1,
            explanation: "Al no haber excepciones de runtime, la sintaxis es válida pero la lógica está rota: se escribió 4.0 + 3.0 + (5.0 / 3) en lugar de (4.0 + 3.0 + 5.0) / 3."
          }
        ]
      }
    ]
  },

  "prog-libreria-turtle": {
    id: "prog-libreria-turtle",
    title: "2.4 Uso de la librería Turtle",
    subtitle: "Programación secuencial paso a paso con gráficos por computadora: instrucciones, orientación, lápiz virtual y figuras geométricas.",
    unit: 2,
    unitTitle: "Unidad 02: Entorno de desarrollo",
    week: 2,
    weekTitle: "Unidad 02: Entorno de desarrollo",
    difficulty: "Fácil",
    category: "Gráficos y Secuencias",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Turtle", type: "emerald" },
      { text: "Secuencial", type: "blue" }
    ],
    sections: [
      {
        id: "sec-turtle-conociendo",
        title: "1. Conociendo Turtle y la Ventana Gráfica",
        shortTitle: "Conociendo Turtle",
        icon: "fa-compass",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La librería <strong>turtle</strong> es uno de los módulos gráficos más intuitivos y didácticos del ecosistema de Python. Inspirada en la tortuga robótica del lenguaje <em>Logo</em> creada por Seymour Papert en el MIT, nos permite visualizar físicamente cómo el computador ejecuta las instrucciones en tiempo real.
          </p>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">01_conociendo_turtle.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

<span class="text-gray-500 italic"># 1. Crear el objeto gráfico de la tortuga</span>
tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># 2. Mantener la ventana gráfica abierta al terminar</span>
<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Elemento</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Propósito en el Programa</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Detalle Pedagógico</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-yellow-400 py-2.5 px-3">import turtle</td>
                  <td class="py-2.5 px-3">Carga el módulo gráfico integrado de Python.</td>
                  <td class="py-2.5 px-3">Viene incluido por defecto en Python, sin requerir <code>pip install</code>.</td>
                </tr>
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">tortuga = turtle.Turtle()</td>
                  <td class="py-2.5 px-3">Crea nuestro actor gráfico o lienzo interactivo.</td>
                  <td class="py-2.5 px-3">Tiene un estado propio: posición <code>(x, y)</code>, ángulo y lápiz.</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">turtle.done()</td>
                  <td class="py-2.5 px-3">Mantiene la ventana visible a la espera del usuario.</td>
                  <td class="py-2.5 px-3">Evita que el sistema operativo cierre la ventana al terminar el script.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
            <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-lightbulb"></i> Idea Principal: El Modelo Mental de la Tortuga
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              Imagina una pequeña tortuga robótica parada sobre una hoja de papel blanca. La tortuga sostiene un marcador en su cola. El centro exacto de la pantalla es el punto cartesiano <strong>(0, 0)</strong>. Al nacer, la tortuga se encuentra mirando directamente hacia la derecha (hacia el <strong>Este, ángulo 0°</strong>). Para dibujar, no le decimos "pinta un cuadrado": debemos ordenarle <em>camina hacia adelante</em>, <em>gira</em>, <em>vuelve a caminar</em>, instrucción por instrucción.
            </p>
          </div>
        `
      },
      {
        id: "sec-turtle-primer-movimiento",
        title: "2. Primer Movimiento: forward(distancia)",
        shortTitle: "forward(100)",
        icon: "fa-arrow-right",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La instrucción fundamental de avance es <code>forward(distancia)</code> (o su versión corta <code>fd()</code>). Recibe un número como argumento, el cual representa la cantidad de <strong>píxeles</strong> que la tortuga debe recorrer en la dirección hacia la que está apuntando.
          </p>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">02_primer_movimiento.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># Avanzar 100 píxeles hacia adelante en línea recta</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
          <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4 my-4">
            <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-microscope"></i> ¿Qué está pasando en este instante?
            </h4>
            <ul class="list-disc list-inside text-xs text-gray-300 space-y-1.5 leading-relaxed">
              <li>La tortuga inicia en el origen <code>(0, 0)</code> mirando al Este (0°).</li>
              <li>El lápiz virtual está apoyado en el papel de manera predeterminada.</li>
              <li>Al recibir <code>forward(100)</code>, la tortuga camina 100 píxeles hacia la derecha hasta alcanzar la coordenada <code>(100, 0)</code>.</li>
              <li>Mientras avanza, el marcador arrastra tinta, dejando una línea continua trazada sobre el lienzo blanco.</li>
            </ul>
          </div>
          <div class="bg-[#141923] border border-sky-500/30 rounded-xl p-4 my-4">
            <h4 class="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-pencil-alt"></i> A Practicar
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              ¿Qué ocurre si cambias <code>tortuga.forward(100)</code> por <code>tortuga.forward(50)</code> o <code>tortuga.forward(250)</code>? La longitud de la línea responde de forma estrictamente proporcional a la distancia enviada como argumento numérico.
            </p>
          </div>
        `
      },
      {
        id: "sec-turtle-giros",
        title: "3. Giros y Orientación: left(grados) y la Importancia del Orden",
        shortTitle: "left(90) y Orden",
        icon: "fa-redo-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para cambiar el rumbo de la tortuga utilizamos las instrucciones de giro: <code>left(grados)</code> (gira hacia la izquierda / antihorario) y <code>right(grados)</code> (gira hacia la derecha / horario). Un detalle crucial: <strong>el giro ocurre sobre el propio eje de la tortuga</strong>, sin alterar su posición en las coordenadas <code>(x, y)</code>.
          </p>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">03_giros_orientacion.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># 1. Avanzar 100 píxeles horizontalmente</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)

<span class="text-gray-500 italic"># 2. Girar 90 grados a la izquierda (ahora mira hacia el Norte, 90°)</span>
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># 3. Avanzar otros 100 píxeles hacia arriba</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4 code-block-card">
              <div class="flex items-center justify-between border-b border-gray-800/80 pb-2 mb-2.5">
                <h5 class="text-amber-400 font-bold text-xs uppercase flex items-center gap-1.5">
                  <i class="fas fa-sort-numeric-down"></i> Secuencia A (Avanzar y luego Girar)
                </h5>
                <button 
                  type="button" 
                  onclick="window.copyCodeToClipboard(this)" 
                  class="flex items-center gap-1 px-2 py-0.5 text-[10px] text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 rounded transition cursor-pointer"
                  title="Copiar código"
                >
                  <i class="fas fa-copy"></i>
                  <span>Copiar</span>
                </button>
              </div>
              <pre class="bg-[#0b0e14] p-2.5 rounded-lg text-xs font-mono text-gray-200 mb-2 border border-gray-800/60"><code>tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)</code></pre>
              <p class="text-xs text-gray-300 leading-relaxed">
                Traza una línea horizontal en el eje X de 100 píxeles y concluye mirando verticalmente hacia arriba (Norte).
              </p>
            </div>
            <div class="bg-[#141923] border border-rose-500/30 rounded-xl p-4 code-block-card">
              <div class="flex items-center justify-between border-b border-gray-800/80 pb-2 mb-2.5">
                <h5 class="text-rose-400 font-bold text-xs uppercase flex items-center gap-1.5">
                  <i class="fas fa-exclamation-triangle"></i> Secuencia B (Girar y luego Avanzar)
                </h5>
                <button 
                  type="button" 
                  onclick="window.copyCodeToClipboard(this)" 
                  class="flex items-center gap-1 px-2 py-0.5 text-[10px] text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 rounded transition cursor-pointer"
                  title="Copiar código"
                >
                  <i class="fas fa-copy"></i>
                  <span>Copiar</span>
                </button>
              </div>
              <pre class="bg-[#0b0e14] p-2.5 rounded-lg text-xs font-mono text-gray-200 mb-2 border border-gray-800/60"><code>tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)</code></pre>
              <p class="text-xs text-gray-300 leading-relaxed">
                Gira primero hacia el Norte en el origen (0,0) y luego traza una línea vertical sobre el eje Y. ¡El orden altera por completo la figura!
              </p>
            </div>
          </div>
          <p class="text-xs text-gray-400 leading-relaxed">
            Esta es la regla de oro de la <strong>programación secuencial</strong>: el estado del sistema en cada paso determina el comportamiento del paso siguiente.
          </p>
        `
      },
      {
        id: "sec-turtle-cuadrado",
        title: "4. Construyendo un Cuadrado: Secuencia Estricta sin Bucles",
        shortTitle: "Construir Cuadrado",
        icon: "fa-vector-square",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para construir un cuadrado perfecto, debemos trazar cuatro lados de igual longitud y girar cuatro veces en ángulo recto (90°). Como la suma de los ángulos exteriores de un polígono cerrado es <strong>360°</strong>, cuatro giros de 90° (\(4 \times 90° = 360°\)) devolverán a la tortuga a su orientación inicial.
          </p>
          <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4 my-4">
            <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-graduation-cap"></i> Principio Pedagógico: ¿Por qué sin bucles for?
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              En esta etapa de formación, no recurrimos a bucles repetitivos como <code>for</code> o <code>while</code>. Escribir las ocho instrucciones secuenciales una por una permite entender con total claridad la causa y el efecto: <strong>cada línea de código produce exactamente una acción física visible</strong>.
            </p>
          </div>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">04_cuadrado_secuencial.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># Lado 1 (horizontal inferior) y giro hacia arriba</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># Lado 2 (vertical derecho) y giro a la izquierda</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># Lado 3 (horizontal superior) y giro hacia abajo</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># Lado 4 (vertical izquierdo) y giro final (cierra la figura)</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Laboratorio Interactivo de Turtle Secuencial",
            description: "Observa la tortuga desplazarse paso a paso en tiempo real, inspecciona el código Python sincronizado y pon a prueba los distintos modos de ejecución:",
            widget: {
              file: "widgets/programacion/u02_turtle_secuencial.html",
              title: "Visualizador Turtle Secuencial",
              height: "540px"
            }
          }
        ]
      },
      {
        id: "sec-turtle-relleno",
        title: "5. Color y Relleno de Figuras: color(), begin_fill() y end_fill()",
        shortTitle: "Relleno de Figuras",
        icon: "fa-fill-drip",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Turtle nos permite dotar de vida a nuestros dibujos personalizando el color del trazo y rellenando el interior de figuras cerradas con colores sólidos mediante la técnica del <strong>bloque delimitador</strong>.
          </p>
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Instrucción</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Función</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">color("borde", "relleno")</td>
                  <td class="py-2.5 px-3">Configura simultáneamente el color del lápiz y el del relleno.</td>
                  <td class="py-2.5 px-3"><code>tortuga.color("black", "#38bdf8")</code></td>
                </tr>
                <tr>
                  <td class="font-bold text-amber-400 py-2.5 px-3">begin_fill()</td>
                  <td class="py-2.5 px-3">Inicia la grabación del perímetro para el coloreado.</td>
                  <td class="py-2.5 px-3">Se invoca <strong>antes</strong> de trazar el primer lado.</td>
                </tr>
                <tr>
                  <td class="font-bold text-emerald-400 py-2.5 px-3">end_fill()</td>
                  <td class="py-2.5 px-3">Rellena la figura geométrica cerrada trazada.</td>
                  <td class="py-2.5 px-3">Se invoca <strong>después</strong> de cerrar la figura.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">05_cuadrado_relleno.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># Configurar colores: contorno oscuro y relleno azul cielo</span>
tortuga.<span class="text-sky-400">color</span>(<span class="text-emerald-300">"#1e293b"</span>, <span class="text-emerald-300">"#38bdf8"</span>)

<span class="text-gray-500 italic"># 1. Avisar que iniciaremos una figura para rellenar</span>
tortuga.<span class="text-sky-400">begin_fill</span>()

<span class="text-gray-500 italic"># 2. Trazar secuencialmente los 4 lados del cuadrado</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># 3. Consolidar el relleno</span>
tortuga.<span class="text-sky-400">end_fill</span>()

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
        `
      },
      {
        id: "sec-turtle-cruz-lapiz",
        title: "6. Levantando el Lápiz: penup(), pendown() y Trazos Compuestos",
        shortTitle: "penup, pendown y Cruz",
        icon: "fa-pen-fancy",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            ¿Cómo dibujamos figuras independientes o trazamos patrones desconectados sin que una línea indeseada una los puntos? Para ello controlamos el estado del lápiz con <code>penup()</code> y <code>pendown()</code>.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4">
              <h5 class="text-blue-400 font-bold text-xs uppercase mb-2 flex items-center gap-2">
                <i class="fas fa-hand-paper"></i> tortuga.penup() (o up())
              </h5>
              <p class="text-xs text-gray-300 leading-relaxed">
                Levanta el lápiz de la hoja. Cualquier desplazamiento posterior cambiará la ubicación <code>(x, y)</code> de la tortuga sin rayar ni manchar el papel.
              </p>
            </div>
            <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4">
              <h5 class="text-emerald-400 font-bold text-xs uppercase mb-2 flex items-center gap-2">
                <i class="fas fa-pen"></i> tortuga.pendown() (o down())
              </h5>
              <p class="text-xs text-gray-300 leading-relaxed">
                Apoya el lápiz nuevamente sobre el papel. Las siguientes instrucciones <code>forward()</code> volverán a dibujar líneas visibles.
              </p>
            </div>
          </div>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">06_cruz_lapiz.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()
tortuga.<span class="text-sky-400">pensize</span>(<span class="text-amber-300">4</span>)

<span class="text-gray-500 italic"># Trazo 1: Barra horizontal de la cruz</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">60</span>)
tortuga.<span class="text-sky-400">backward</span>(<span class="text-amber-300">120</span>)

<span class="text-gray-500 italic"># Regresar al centro sin dibujar</span>
tortuga.<span class="text-sky-400">penup</span>()
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">60</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">pendown</span>()

<span class="text-gray-500 italic"># Trazo 2: Barra vertical de la cruz</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">60</span>)
tortuga.<span class="text-sky-400">backward</span>(<span class="text-amber-300">120</span>)

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
        `
      },
      {
        id: "sec-turtle-reto-rubik",
        title: "7. Reto Integrador: Cubo rubik",
        shortTitle: "Reto: Cubo rubik",
        icon: "fa-cube",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Consolidamos todo lo aprendido en este tema construyendo con <strong>turtle</strong> un <strong>Cubo Rubik en perspectiva 3D</strong> que exhibe sus <strong>tres caras visibles</strong> (<strong>Superior</strong>, <strong>Izquierda</strong> y <strong>Derecha</strong>), donde <strong>cada celda pequeña cuenta con los colores exactos del cubo desordenado</strong> (rojo, azul, naranja, blanco, amarillo y verde).
          </p>

          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
            <h4 class="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-cubes"></i> Estructura del Programa: Silueta y Coloreado Celda por Celda
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              El programa se desarrolla en dos fases puramente secuenciales:
              <br><br>
              <strong>1. Silueta del cubo:</strong> La tortuga parte del vértice inicial trazando todas las aristas exteriores y de unión central del cubo mediante giros precisos (<code>left</code> y <code>right</code> de 30°, 60° y 120°) y avances de <code>forward(90)</code>.
              <br><br>
              <strong>2. Celdas una por una para cambiar su color:</strong> A continuación, la tortuga visita secuencialmente cada una de las <strong>27 celdas</strong> del cubo, aplicando <code>t.fillcolor("color")</code>, <code>t.begin_fill()</code>, recorriendo los lados de cada celda con <code>forward(30)</code> y cerrando con <code>t.end_fill()</code>, para luego desplazarse con <code>backward(30)</code> o avances relativos hacia la siguiente celda.
            </p>
          </div>

          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4 my-4">
            <h4 class="text-amber-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-brain"></i> Preguntas de Reflexión (¡Responde mentalmente antes de codificar!)
            </h4>
            <ol class="list-decimal list-inside text-xs text-gray-300 space-y-2 leading-relaxed">
              <li><strong>Estructura secuencial continua:</strong> ¿Por qué trazar primero la silueta completa del cubo nos ayuda a verificar la perspectiva isométrica antes de comenzar a colorear las 27 celdas?</li>
              <li><strong>Navegación con forward y backward:</strong> Al terminar de rellenar una celda con <code>end_fill()</code>, ¿por qué es útil retroceder con <code>backward(30)</code> para quedar en la arista de referencia y dirigirse a la siguiente celda?</li>
              <li><strong>Uso de fillcolor y bloques begin_fill / end_fill:</strong> ¿Cómo interactúa <code>fillcolor()</code> con cada bloque de <code>begin_fill()</code> y <code>end_fill()</code> para garantizar que cada celda tenga exactamente su color correspondiente?</li>
            </ol>
          </div>

          <details class="group bg-[#10141d] border border-emerald-500/30 rounded-xl p-4 my-4">
            <summary class="font-semibold text-sm text-emerald-400 cursor-pointer flex items-center justify-between list-none">
              <span class="flex items-center gap-2"><i class="fas fa-code"></i> Ver Código de Solución Paso a Paso (Cubo Rubik 3D: 3 Caras)</span>
              <span class="text-xs text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="mt-4 pt-3 border-t border-gray-800">
              <p class="text-xs text-gray-300 mb-3">
                A continuación tienes la solución completa comentada paso a paso para construir el Cubo Rubik 3D con su silueta y sus 27 celdas coloreadas una por una:
              </p>

              <div class="bg-[#0b0e14] border border-gray-800 rounded-xl p-3 sm:p-4 my-2 code-block-card">
                <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                      <i class="fab fa-python text-sm"></i> Python
                    </span>
                    <span class="text-[11px] text-gray-500 font-mono">07_cubo_rubik_3d.py</span>
                  </div>
                  <button 
                    type="button" 
                    onclick="window.copyCodeToClipboard(this)" 
                    class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                    title="Copiar solución completa al portapapeles"
                  >
                    <i class="fas fa-copy text-xs"></i>
                    <span class="text-[11px] font-medium">Copiar Solución</span>
                  </button>
                </div>
                <pre class="bg-[#07090e] p-3.5 rounded-lg font-mono text-[11px] text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300 font-semibold">turtle</span>

<span class="text-gray-500 italic"># Configuración inicial de la tortuga</span>
t = <span class="text-yellow-300 font-semibold">turtle</span>.<span class="text-yellow-300 font-semibold">Turtle</span>()
t.<span class="text-sky-400">speed</span>(<span class="text-amber-300">20</span>)
t.<span class="text-sky-400">pensize</span>(<span class="text-amber-300">2</span>)

<span class="text-gray-500 italic"># ========================================================</span>
<span class="text-gray-500 italic"># 1. Silueta tridimensional del cubo</span>
<span class="text-gray-500 italic"># ========================================================</span>
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)  
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>) 
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># ========================================================</span>
<span class="text-gray-500 italic"># 2. Celdas una por una para cambiar su color (27 celdas)</span>
<span class="text-gray-500 italic"># ========================================================</span>
<span class="text-gray-500 italic"># Celda 1</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)   
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 2</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"red"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">180</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)   
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>) 
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 3</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"blue"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">180</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)   
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>) 
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 4</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 5</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"yellow"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 6</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 7</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">60</span>) 

<span class="text-gray-500 italic"># Celda 8</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"red"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 9</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)

<span class="text-gray-500 italic"># Celda 10</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">180</span>)

<span class="text-gray-500 italic"># Celda 11</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 12</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)

<span class="text-gray-500 italic"># Celda 13</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"yellow"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()

<span class="text-gray-500 italic"># Celda 14</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 15</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">180</span>)

<span class="text-gray-500 italic"># Celda 16</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"blue"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 17</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 18</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"yellow"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 19</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"blue"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 20</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 21</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 22</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"red"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 23</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>) 
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()  
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 24</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"blue"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 25</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"yellow"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 26</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()

<span class="text-gray-500 italic"># Celda 27</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"red"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()

t.<span class="text-sky-400">hideturtle</span>()
<span class="text-yellow-300 font-semibold">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
              </div>

              <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
                <table class="w-full text-xs text-left complexity-table">
                  <thead>
                    <tr>
                      <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Fase</th>
                      <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Descripción</th>
                      <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Comandos Principales</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-800/60">
                    <tr>
                      <td class="font-bold text-sky-400 py-2.5 px-3">Fase 1</td>
                      <td class="py-2.5 px-3">Silueta del cubo</td>
                      <td class="py-2.5 px-3">Trazo de las aristas exteriores e internas con <code>forward(90)</code> y giros de 30°, 60° y 120°.</td>
                    </tr>
                    <tr>
                      <td class="font-bold text-emerald-400 py-2.5 px-3">Fase 2</td>
                      <td class="py-2.5 px-3">Coloreado de las 27 celdas</td>
                      <td class="py-2.5 px-3">Relleno secuencial de cada celda con <code>fillcolor()</code>, <code>begin_fill()</code>, lados de 30 px, <code>end_fill()</code> y <code>backward(30)</code>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        `
      }
    ],
    comprueba: {
      title: "Evaluación: Dominio de Turtle y Programación Secuencial",
      description: "Pon a prueba tus conocimientos sobre comandos básicos, sistema de coordenadas, estados del lápiz y ejecución secuencial respondiendo el siguiente cuestionario evaluativo de 8 preguntas:",
      widget: {
        file: "widgets/programacion/u02_turtle_quiz.html",
        title: "Quiz Interactivo - Turtle y Secuencias",
        height: "580px"
      }
    }
  }
};

const PROG_U03_TOPICS = {
  "prog-variables-constantes": {
    id: "prog-variables-constantes",
    title: "3.1 Variables y constantes",
    subtitle: "Identificadores, modelo de memoria referencial, operadores de asignación combinada y convenciones de nomenclatura PEP 8.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Variables y Estado",
    timeEstimate: "20 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "snake_case", type: "teal" },
      { text: "Memoria RAM", type: "purple" }
    ],
    sections: [
      {
        id: "concepto-variable-asignacion",
        title: "1. ¿Qué es una Variable y cómo se Asigna?",
        shortTitle: "Variables y Asignación",
        icon: "fa-cube",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>variable</strong> es un nombre simbólico (identificador) que hace referencia a una ubicación de memoria donde reside un dato o valor determinado. En Python, las variables se crean dinámicamente en el mismo momento en que se les asigna un valor por primera vez utilizando el operador de asignación <code>=</code>.
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            edad = <span class="text-sky-300">20</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Se crea la variable 'edad' con el entero 20</span><br>
            edad = edad + <span class="text-sky-300">1</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Actualización: se evalúa la derecha (20+1) y se guarda 21</span><br>
            edad += <span class="text-sky-300">5</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Operador combinado equivalente a edad = edad + 5 (26)</span>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Animación: La Memoria del Programa",
            description: "Observa en tiempo real cómo el intérprete actualiza los valores de las variables en la memoria RAM durante la ejecución paso a paso:",
            widget: {
              file: "widgets/programacion/u03_memoria_programa.html",
              title: "La Memoria del Programa",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "constantes-convenciones-pep8",
        title: "2. Constantes y Nomenclatura Estándar (PEP 8)",
        shortTitle: "Constantes y PEP 8",
        icon: "fa-font",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            A nivel de intérprete, Python <strong>no posee una palabra clave 'const'</strong> que bloquee la reasignación de una variable. En su lugar, la comunidad adopta una convención estricta regulada por la guía de estilo oficial <strong>PEP 8</strong>:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">Variables: snake_case</h5>
              <p class="text-xs text-gray-300">
                Palabras en minúsculas separadas por guiones bajos. Deben ser descriptivas y evitar abreviaturas oscuras:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-emerald-300 mt-2">
                salario_base = 2500000<br>
                cantidad_estudiantes = 35
              </div>
            </div>
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-amber-400 font-bold text-xs uppercase mb-2">Constantes: MAYÚSCULAS</h5>
              <p class="text-xs text-gray-300">
                Todas las letras en mayúsculas sostenidas. Comunica al equipo que este valor <em>no debe ser alterado</em> durante el ciclo de vida del software:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-amber-300 mt-2">
                VELOCIDAD_LUZ = 299792458<br>
                PI = 3.1415926535
              </div>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "¿Cuál de los siguientes nombres de variable sigue rigurosamente la convención de estilo PEP 8 para variables ordinarias en Python?",
            options: [
              "tasaInteresAnual (CamelCase)",
              "tasa_interes_anual (snake_case)",
              "TASA_INTERES_ANUAL (Mayúsculas)",
              "Tasa-Interes-Anual (Kebab-case con guiones medios)"
            ],
            correct: 1,
            explanation: "PEP 8 especifica que los nombres de variables y funciones deben escribirse en minúsculas con palabras separadas por guiones bajos (snake_case)."
          }
        ]
      }
    ]
  },

  "prog-tipos-conversiones": {
    id: "prog-tipos-conversiones",
    title: "3.2 Tipos de datos y conversiones",
    subtitle: "Tipado dinámico y fuerte, tipos primitivos (int, float, str, bool), función type() y conversión de tipos (casting).",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Tipos de Datos",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Tipado Fuerte", type: "teal" },
      { text: "Casting", type: "blue" }
    ],
    sections: [
      {
        id: "tipos-primitivos-dinamico",
        title: "1. Tipos Primitivos y Tipado Dinámico Fuerte",
        shortTitle: "Tipos Primitivos",
        icon: "fa-shapes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Python es de <strong>tipado dinámico</strong> (no necesitas declarar el tipo de una variable explícitamente; el intérprete lo infiere en tiempo de ejecución) y de <strong>tipado fuerte</strong> (no permite operaciones entre tipos incompatibles sin una conversión explícita).
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Tipo</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Clase Python</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Descripción</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplos</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">Entero</td>
                  <td class="py-2.5 px-3 font-mono">int</td>
                  <td class="py-2.5 px-3">Números sin parte fraccionaria de precisión arbitraria.</td>
                  <td class="py-2.5 px-3 font-mono">0, 42, -1500</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Flotante</td>
                  <td class="py-2.5 px-3 font-mono">float</td>
                  <td class="py-2.5 px-3">Números reales con punto decimal (IEEE 754 doble precisión).</td>
                  <td class="py-2.5 px-3 font-mono">3.1416, -0.005, 2.5e-3</td>
                </tr>
                <tr>
                  <td class="font-bold text-emerald-400 py-2.5 px-3">Cadena</td>
                  <td class="py-2.5 px-3 font-mono">str</td>
                  <td class="py-2.5 px-3">Secuencias inmutables de caracteres Unicode.</td>
                  <td class="py-2.5 px-3 font-mono">"Python", 'Hola'</td>
                </tr>
                <tr>
                  <td class="font-bold text-amber-400 py-2.5 px-3">Booleano</td>
                  <td class="py-2.5 px-3 font-mono">bool</td>
                  <td class="py-2.5 px-3">Valores lógicos de verdad (subtipo de int: 1 y 0).</td>
                  <td class="py-2.5 px-3 font-mono">True, False</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Explorador Interactivo de Tipos de Datos",
            description: "Introduce cualquier valor numérico, textual o booleano y observa su tipo nativo y el comportamiento de las funciones de conversión int(), float(), str() y bool():",
            widget: {
              file: "widgets/programacion/u03_explorador_tipos.html",
              title: "Explorador Interactivo de Tipos de Datos",
              height: "480px"
            }
          }
        ]
      },
      {
        id: "conversion-tipos-casting",
        title: "2. Conversión Explícita de Tipos (Casting)",
        shortTitle: "Casting de Tipos",
        icon: "fa-exchange-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Dado que la función <code>input()</code> siempre retorna una cadena de texto (<code>str</code>), es indispensable convertir los datos recibidos antes de realizar cálculos matemáticos:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            edad_texto = <span class="text-purple-400">input</span>(<span class="text-emerald-300">"Ingresa tu edad: "</span>) &nbsp;<span class="text-gray-500"># Ej: "19" (str)</span><br>
            edad_numero = <span class="text-sky-300">int</span>(edad_texto) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Convierte "19" ➔ 19 (int)</span><br>
            proximo_ano = edad_numero + <span class="text-sky-300">1</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Operación válida: 20</span>
          </div>
        `,
        quiz: [
          {
            question: "¿Qué valor retorna la expresión bool('False') en Python?",
            options: [
              "False, porque el contenido es la palabra False.",
              "True, porque cualquier cadena no vacía tiene valor de verdad verdadero (truthy).",
              "ValueError, porque no se puede convertir texto a booleano.",
              "None, por ser una contradicción de tipos."
            ],
            correct: 1,
            explanation: "En Python, la regla de conversión a bool() es: una cadena vacía '' es False; cualquier cadena con al menos un carácter (incluso 'False' o '0') es evaluada como True."
          }
        ]
      }
    ]
  },

  "prog-operadores-relacionales-logicos": {
    id: "prog-operadores-relacionales-logicos",
    title: "3.3 Operadores relacionales y lógicos",
    subtitle: "Comparación de igualdad y orden, operadores booleanos (and, or, not), evaluación en cortocircuito y tablas de verdad.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Lógica Computacional",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Booleanos", type: "teal" },
      { text: "Tablas de Verdad", type: "purple" }
    ],
    sections: [
      {
        id: "operadores-relacionales",
        title: "1. Operadores Relacionales de Comparación",
        shortTitle: "Operadores Relacionales",
        icon: "fa-equals",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Los <strong>operadores relacionales</strong> comparan dos operandos y retornan invariablemente un valor booleano (<code>True</code> o <code>False</code>):
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">==</strong> : Igual a</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">!=</strong> : Distinto de</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">&gt;</strong> : Mayor que</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">&lt;</strong> : Menor que</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">&gt;=</strong> : Mayor o igual</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">&lt;=</strong> : Menor o igual</div>
          </div>
          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-3 text-xs text-gray-300">
            <strong class="text-amber-400">⚠️ Error Clásico de Principiante:</strong> No confundas el operador de <em>asignación</em> (<code>=</code>) con el operador de <em>comparación de igualdad</em> (<code>==</code>).
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Expresiones Booleanas y Tablas de Verdad",
            description: "Modifica los operandos numéricos y los operadores relacionales para observar la evaluación en tiempo real y la tabla de verdad lógica:",
            widget: {
              file: "widgets/programacion/u03_simulador_booleanos.html",
              title: "Simulador de Expresiones Booleanas",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "operadores-logicos-cortocircuito",
        title: "2. Operadores Lógicos y Evaluación en Cortocircuito",
        shortTitle: "Operadores Lógicos",
        icon: "fa-project-diagram",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Los operadores lógicos permiten componer condiciones complejas:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>and:</strong> Retorna <code>True</code> únicamente si <em>ambas</em> condiciones son verdaderas. Si la primera es falsa, no evalúa la segunda (cortocircuito).</li>
            <li><strong>or:</strong> Retorna <code>True</code> si <em>al menos una</em> condición es verdadera. Si la primera es verdadera, no evalúa la segunda (cortocircuito).</li>
            <li><strong>not:</strong> Invierte el valor de verdad (<code>not True ➔ False</code>; <code>not False ➔ True</code>).</li>
          </ul>
        `,
        quiz: [
          {
            question: "Dadas las variables a = 10 y b = 5, ¿cuál es el resultado de la expresión: (a > 5) and (b == 10 or a != b)?",
            options: [
              "False",
              "True",
              "TypeError",
              "None"
            ],
            correct: 1,
            explanation: "(a > 5) es True. Dentro del paréntesis: (b == 10) es False, pero (a != b) es True (10 != 5), haciendo el 'or' True. Finalmente True and True resulta en True."
          }
        ]
      }
    ]
  },

  "prog-palabras-reservadas": {
    id: "prog-palabras-reservadas",
    title: "3.4 Palabras reservadas",
    subtitle: "Léxico del lenguaje, catálogo de keywords de Python, reglas sintácticas para identificadores y prevención de colisiones.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Léxico y Sintaxis",
    timeEstimate: "20 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Keywords", type: "purple" },
      { text: "Sintaxis", type: "teal" }
    ],
    sections: [
      {
        id: "concepto-keywords-python",
        title: "1. Concepto y Catálogo de Palabras Reservadas",
        shortTitle: "Palabras Reservadas",
        icon: "fa-key",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Las <strong>palabras reservadas</strong> (<em>keywords</em>) son identificadores especiales que el analizador léxico de Python reserva exclusivamente para definir la estructura gramatical del lenguaje. No pueden ser utilizadas como nombres de variables, funciones ni clases.
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-sky-300 mb-4">
            import keyword<br>
            print(keyword.kwlist)  # Muestra las 35 palabras reservadas oficiales
          </div>
          <p class="text-xs text-gray-400 mb-4">
            Ejemplos clave: <code>if, elif, else, for, while, break, continue, def, return, class, import, from, try, except, finally, with, as, lambda, True, False, None</code>.
          </p>
        `,
        interactive: [
          {
            category: "practica",
            title: "Clasificador Interactivo de Identificadores y Palabras Reservadas",
            description: "Pon a prueba tu criterio léxico clasificando términos en: Palabra reservada, Identificador válido o Identificador inválido:",
            widget: {
              file: "widgets/programacion/u03_clasificador_palabras.html",
              title: "Clasificador de Palabras Reservadas",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "reglas-identificadores-validos",
        title: "2. Reglas Estrictas para Identificadores Válidos",
        shortTitle: "Reglas de Identificadores",
        icon: "fa-check",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para que un nombre de variable sea sintácticamente válido en Python, debe cumplir rigurosamente con tres reglas universales:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>Caracteres permitidos:</strong> Solo letras (a-z, A-Z), dígitos (0-9) y el guión bajo (<code>_</code>). No se admiten espacios ni símbolos especiales ($, @, %, etc.).</li>
            <li><strong>Inicio:</strong> Debe comenzar con una letra o un guión bajo. <em>Jamás puede iniciar con un número</em> (ej. <code>1er_valor</code> es inválido; <code>valor_1</code> es válido).</li>
            <li><strong>Case-Sensitive:</strong> Python distingue mayúsculas de minúsculas (<code>total</code>, <code>Total</code> y <code>TOTAL</code> son tres variables completamente distintas).</li>
          </ul>
        `,
        quiz: [
          {
            question: "¿Cuál de los siguientes identificadores provoca un SyntaxError inmediato en Python?",
            options: [
              "_contador_privado",
              "valor_total_2024",
              "3er_semestre",
              "PrecioConDescuento"
            ],
            correct: 2,
            explanation: "3er_semestre es inválido porque comienza con un dígito numérico ('3'), lo cual viola la regla léxica de identificadores de Python."
          }
        ]
      }
    ]
  }
};


/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 04 - ESTRUCTURAS CONDICIONALES
 * Prof. Leo Gaviria - Programación
 */

const PROG_U04_TOPICS = {
  "prog-condicionales-if-elif-else": {
    id: "prog-condicionales-if-elif-else",
    title: "4.1 if, elif y else",
    subtitle: "Bifurcaciones de flujo lógico, condiciones anidadas, evaluación de rangos numéricos y patrones de decisión en Python.",
    unit: 4,
    unitTitle: "Unidad 04: Estructuras condicionales",
    week: 4,
    weekTitle: "Unidad 04: Estructuras condicionales",
    difficulty: "Fácil",
    category: "Control de Flujo",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "if-elif-else", type: "teal" },
      { text: "Bifurcaciones", type: "purple" }
    ],
    sections: [
      {
        id: "anatomia-sentencias-condicionales",
        title: "1. Anatomía de las Sentencias Condicionales",
        shortTitle: "Anatomía if-elif-else",
        icon: "fa-code-branch",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Las estructuras condicionales permiten alterar el flujo secuencial de un programa, ejecutando ciertos bloques de código solo si se cumple una expresión lógica determinada:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-purple-400">if</span> condicion_1:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Se ejecuta solo si condicion_1 es True</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;accion_primaria()<br>
            <span class="text-purple-400">elif</span> condicion_2:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Se evalúa si condicion_1 fue False y condicion_2 es True</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;accion_alternativa()<br>
            <span class="text-purple-400">else</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Rama por defecto: se ejecuta si NINGUNA de las anteriores se cumplió</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;accion_por_defecto()
          </div>
          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-3 text-xs text-gray-300">
            <strong>Indentación Obligatoria:</strong> Python utiliza sangría (habitualmente 4 espacios) en lugar de llaves <code>{ }</code> para delimitar qué instrucciones pertenecen al cuerpo de la condición.
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador del Flujo Condicional",
            description: "Modifica la calificación numérica del estudiante y observa cómo el flujo bifurca y resalta el camino ejecutado:",
            widget: {
              file: "widgets/programacion/u04_flujo_condicional.html",
              title: "Visualizador del Flujo Condicional",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "ejemplos-practicos-anidamiento",
        title: "2. Condiciones Anidadas y Casos Prácticos de Ingeniería",
        shortTitle: "Condiciones Anidadas",
        icon: "fa-laptop-code",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Podemos colocar estructuras condicionales dentro de otras (anidamiento) o utilizar operadores lógicos compuestos (<code>and, or</code>) para escribir código más plano y legible:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-gray-500"># Determinación del mayor de tres números</span><br>
            <span class="text-purple-400">if</span> a &gt;= b <span class="text-purple-400">and</span> a &gt;= c:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;mayor = a<br>
            <span class="text-purple-400">elif</span> b &gt;= a <span class="text-purple-400">and</span> b &gt;= c:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;mayor = b<br>
            <span class="text-purple-400">else</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;mayor = c
          </div>
        `,
        quiz: [
          {
            question: "En una cadena de 'if - elif - else', si la primera condición 'if' se evalúa como True, ¿qué ocurre con los bloques 'elif' y 'else' subsiguientes?",
            options: [
              "También se evalúan por si alguna otra condición es verdadera.",
              "Se ignoran por completo y el flujo continúa después del bloque condicional.",
              "Python arroja un error de ambigüedad si dos ramas son verdaderas.",
              "Solo se ignora el 'else', pero todos los 'elif' se ejecutan."
            ],
            correct: 1,
            explanation: "Las estructuras if-elif-else son mutuamente excluyentes. Tan pronto una condición resulta verdadera, se ejecuta su bloque y se saltan todas las ramas restantes de la estructura."
          }
        ]
      }
    ]
  }
};


/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 05 - ESTRUCTURAS DE CONTROL
 * Prof. Leo Gaviria - Programación
 */

const PROG_U05_TOPICS = {
  "prog-bucle-for": {
    id: "prog-bucle-for",
    title: "5.1 Estructura for",
    subtitle: "Iteración determinada, función range(inicio, fin, paso), variables acumuladoras y contadoras, ciclos anidados y recorridos.",
    unit: 5,
    unitTitle: "Unidad 05: Estructuras de control",
    week: 5,
    weekTitle: "Unidad 05: Estructuras de control",
    difficulty: "Media",
    category: "Bucles e Iteración",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "for in", type: "teal" },
      { text: "range()", type: "amber" }
    ],
    sections: [
      {
        id: "concepto-bucle-for-range",
        title: "1. ¿Cómo Funciona la Estructura for y range()?",
        shortTitle: "Estructura for y range()",
        icon: "fa-repeat",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            A diferencia de otros lenguajes donde el bucle <code>for</code> es un simple contador numérico, en Python <code>for</code> es un iterador universal: recorre uno a uno los elementos de cualquier secuencia iterable (listas, tuplas, cadenas o generadores de números como <code>range()</code>).
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-amber-400 font-bold">Invocación de range()</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Secuencia Generada</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Explicación</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="text-sky-400 py-2.5 px-3">range(5)</td>
                  <td class="py-2.5 px-3 text-emerald-300">0, 1, 2, 3, 4</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Inicia en 0 por defecto; llega hasta n-1 (no incluye el 5).</td>
                </tr>
                <tr>
                  <td class="text-purple-400 py-2.5 px-3">range(1, 6)</td>
                  <td class="py-2.5 px-3 text-emerald-300">1, 2, 3, 4, 5</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Rango cerrado por izquierda y abierto por derecha: [inicio, fin).</td>
                </tr>
                <tr>
                  <td class="text-amber-400 py-2.5 px-3">range(0, 10, 2)</td>
                  <td class="py-2.5 px-3 text-emerald-300">0, 2, 4, 6, 8</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Incrementa de dos en dos según el tercer parámetro 'paso' (step).</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Visual del Bucle for",
            description: "Sigue la traza en memoria de cada iteración, observando el cambio en el contador 'i', el acumulador y las salidas en consola:",
            widget: {
              file: "widgets/programacion/u05_simulador_for.html",
              title: "Simulador Visual del Bucle for",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "patrones-acumuladores-anidados",
        title: "2. Patrones: Contadores, Acumuladores y Bucles Anidados",
        shortTitle: "Patrones y Ciclos Anidados",
        icon: "fa-layer-group",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Dos de los patrones algorítmicos más frecuentes en ingeniería son el <strong>contador</strong> (suma una constante) y el <strong>acumulador</strong> (suma una cantidad variable en cada ciclo):
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            suma_total = 0 &nbsp;<span class="text-gray-500"># Acumulador inicializado en neutro aditivo (0)</span><br>
            <span class="text-purple-400">for</span> numero <span class="text-purple-400">in</span> [15, 28, 42, 10]:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;suma_total += numero<br>
            <span class="text-purple-400">print</span>("Total acumulado:", suma_total) &nbsp;<span class="text-gray-500"># 95</span>
          </div>
        `,
        quiz: [
          {
            question: "¿Cuántas veces se ejecutará el cuerpo interno del bucle: for i in range(2, 8, 3)?",
            options: [
              "6 veces",
              "2 veces (con i=2 e i=5)",
              "3 veces (con i=2, i=5 e i=8)",
              "Ninguna, porque 8 no es divisible por 3"
            ],
            correct: 1,
            explanation: "Inicia en i=2. Siguiente paso: i=2+3=5. Siguiente paso: 5+3=8 (como 8 no es estrictamente menor que el límite 8, el bucle finaliza). Se ejecutó 2 veces."
          }
        ]
      }
    ]
  },

  "prog-bucle-while": {
    id: "prog-bucle-while",
    title: "5.2 Estructura while",
    subtitle: "Iteración condicional indeterminada, centinelas, banderas booleanas, bucles infinitos y sentencias de control break y continue.",
    unit: 5,
    unitTitle: "Unidad 05: Estructuras de control",
    week: 5,
    weekTitle: "Unidad 05: Estructuras de control",
    difficulty: "Media",
    category: "Bucles e Iteración",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "while", type: "teal" },
      { text: "break / continue", type: "purple" }
    ],
    sections: [
      {
        id: "concepto-while-parada",
        title: "1. ¿Cuándo Utilizar while en Lugar de for?",
        shortTitle: "Ciclo while y Parada",
        icon: "fa-sync",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Utilizamos <code>for</code> cuando conocemos de antemano el número exacto de repeticiones o tenemos una colección finita. Por el contrario, utilizamos <code>while</code> cuando la repetición depende de una <strong>condición dinámica que cambia durante la ejecución</strong> (ej. esperar a que el usuario ingrese la contraseña correcta, leer un sensor hasta que baje la temperatura o validar entradas).
          </p>
          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-3 text-xs text-gray-300 mb-4">
            <strong class="text-amber-400">⚠️ La Regla de Oro del while:</strong> El cuerpo del bucle <em>debe contener al menos una instrucción que modifique las variables evaluadas en la condición</em>; de lo contrario, el programa entrará en un <strong>bucle infinito</strong> y congelará el proceso.
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador Interactivo de while",
            description: "Avanza paso a paso la verificación de condición, ejecución del cuerpo e incremento del contador:",
            widget: {
              file: "widgets/programacion/u05_visualizador_while.html",
              title: "Visualizador del Bucle while",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "control-break-continue",
        title: "2. Sentencias de Control: break y continue",
        shortTitle: "break y continue",
        icon: "fa-forward",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Podemos alterar el flujo ordinario de un ciclo utilizando dos palabras clave:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-red-400 font-bold text-xs uppercase mb-2">break (Terminación Inmediata)</h5>
              <p class="text-xs text-gray-300">
                Rompe y finaliza el bucle de inmediato, transfiriendo el control a la primera línea fuera del ciclo:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-2">
                while True:<br>
                &nbsp;&nbsp;dato = input("Escribe 'salir': ")<br>
                &nbsp;&nbsp;if dato == "salir":<br>
                &nbsp;&nbsp;&nbsp;&nbsp;break  # Sale del bucle infinito
              </div>
            </div>
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">continue (Salto de Iteración)</h5>
              <p class="text-xs text-gray-300">
                Omite el resto del código de la iteración actual y salta inmediatamente a la siguiente verificación de condición:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-2">
                for num in range(6):<br>
                &nbsp;&nbsp;if num % 2 == 0:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;continue  # Salta los pares<br>
                &nbsp;&nbsp;print(num)  # Imprime: 1, 3, 5
              </div>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "¿Qué salida imprimirá el siguiente código: c = 0; while c < 3: c += 1; if c == 2: continue; print(c)?",
            options: [
              "1, 2, 3",
              "1 y 3",
              "2 y 3",
              "Bucle infinito"
            ],
            correct: 1,
            explanation: "Cuando c=1, imprime 1. Cuando c=2, la condición 'c==2' ejecuta 'continue', saltándose el print de esa vuelta. Cuando c=3, imprime 3 y el bucle termina porque 3 < 3 es False."
          }
        ]
      }
    ]
  },

  "prog-excepciones-try-except": {
    id: "prog-excepciones-try-except",
    title: "5.3 Manejo de excepciones: try y except",
    subtitle: "Construcción de software tolerante a fallos, captura de excepciones tipadas, cláusulas else y finally, y validación robusta de entradas.",
    unit: 5,
    unitTitle: "Unidad 05: Estructuras de control",
    week: 5,
    weekTitle: "Unidad 05: Estructuras de control",
    difficulty: "Media",
    category: "Manejo de Errores",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "try / except", type: "teal" },
      { text: "Robustez", type: "purple" }
    ],
    sections: [
      {
        id: "anatomia-try-except",
        title: "1. ¿Qué es una Excepción y cómo se Captura?",
        shortTitle: "Bloques try / except",
        icon: "fa-shield-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>excepción</strong> es un evento disruptivo que ocurre durante la ejecución de un programa cuando se intenta una operación inválida (como dividir entre cero, convertir texto alfanumérico a número o abrir un archivo inexistente). Sin control, la excepción aborta el proceso de inmediato.
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-purple-400">try</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;edad = <span class="text-sky-300">int</span>(<span class="text-purple-400">input</span>("Tu edad: "))<br>
            <span class="text-purple-400">except</span> <span class="text-amber-400">ValueError</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">print</span>("Error: Debes ingresar un número entero válido.")<br>
            <span class="text-purple-400">else</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">print</span>(f"Edad procesada: {edad}")<br>
            <span class="text-purple-400">finally</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">print</span>("Fin del intento de lectura.")
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Control de Excepciones",
            description: "Provoca diferentes errores en tiempo de ejecución y observa cómo el bloque try/except/else/finally redirige el flujo protegiendo la aplicación:",
            widget: {
              file: "widgets/programacion/u05_simulador_excepciones.html",
              title: "Simulador de Excepciones",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "catalogo-excepciones-comunes",
        title: "2. Catálogo de Excepciones Esenciales en Python",
        shortTitle: "Excepciones Frecuentes",
        icon: "fa-exclamation-triangle",
        contentHtml: `
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2 px-3 bg-[#141923] text-red-400 font-bold">Excepción</th>
                  <th class="py-2 px-3 bg-[#141923] text-gray-200 font-bold">Causa Principal</th>
                  <th class="py-2 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="text-amber-400 py-2 px-3">ZeroDivisionError</td>
                  <td class="py-2 px-3 font-sans text-gray-300">División o módulo entre cero.</td>
                  <td class="py-2 px-3">10 / 0</td>
                </tr>
                <tr>
                  <td class="text-sky-400 py-2 px-3">ValueError</td>
                  <td class="py-2 px-3 font-sans text-gray-300">Tipo correcto pero valor o contenido inapropiado.</td>
                  <td class="py-2 px-3">int("hola")</td>
                </tr>
                <tr>
                  <td class="text-purple-400 py-2 px-3">TypeError</td>
                  <td class="py-2 px-3 font-sans text-gray-300">Operación aplicada a tipos incompatibles.</td>
                  <td class="py-2 px-3">"5" + 10</td>
                </tr>
                <tr>
                  <td class="text-emerald-400 py-2 px-3">IndexError</td>
                  <td class="py-2 px-3 font-sans text-gray-300">Índice fuera del rango de la lista o secuencia.</td>
                  <td class="py-2 px-3">lista[99]</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        quiz: [
          {
            question: "¿En qué circunstancias se ejecuta obligatoriamente el bloque 'finally' de una estructura try/except?",
            options: [
              "Únicamente cuando ocurrió una excepción.",
              "Únicamente cuando NO ocurrió ninguna excepción.",
              "Siempre, sin importar si hubo excepción o si el código se ejecutó limpiamente.",
              "Solo si el usuario presiona Ctrl+C."
            ],
            correct: 2,
            explanation: "El bloque finally está garantizado para ejecutarse siempre, ideal para tareas críticas de limpieza como cerrar archivos, conexiones de red o liberar recursos."
          }
        ]
      }
    ]
  }
};


/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 06 - FUNCIONES Y PROCEDIMIENTOS
 * Prof. Leo Gaviria - Programación
 */

const PROG_U06_TOPICS = {
  "prog-funciones-intro": {
    id: "prog-funciones-intro",
    title: "6.1 Funciones: definición y componentes",
    subtitle: "Modularidad de software, parámetros vs argumentos, valor de retorno con return, ámbito local/global y valores por defecto.",
    unit: 6,
    unitTitle: "Unidad 06: Funciones y procedimientos",
    week: 6,
    weekTitle: "Unidad 06: Funciones y procedimientos",
    difficulty: "Media",
    category: "Modularidad y Funciones",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 06", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "def / return", type: "teal" },
      { text: "Scope", type: "purple" }
    ],
    sections: [
      {
        id: "anatomia-funciones-parametros",
        title: "1. Definición, Parámetros y Retorno de Valores",
        shortTitle: "Definición y Retorno",
        icon: "fa-cubes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>función</strong> es un bloque autónomo y reutilizable de código diseñado para realizar una tarea específica. Sigue el principio fundamental <strong>DRY</strong> (<em>Don't Repeat Yourself</em>).
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-purple-400">def</span> <span class="text-sky-300">calcular_total</span>(subtotal, tasa_impuesto=0.19):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># tasa_impuesto tiene un valor por defecto (0.19)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;impuesto = subtotal * tasa_impuesto<br>
            &nbsp;&nbsp;&nbsp;&nbsp;total = subtotal + impuesto<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> total &nbsp;<span class="text-gray-500"># Devuelve el valor al llamador y finaliza la función</span>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Animación del Flujo de Ejecución de una Función",
            description: "Sigue visualmente cómo los argumentos pasan a los parámetros locales, el cuerpo se ejecuta en su propio stack frame y return devuelve el resultado:",
            widget: {
              file: "widgets/programacion/u06_flujo_funciones.html",
              title: "Flujo de Ejecución de una Función",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "ambito-scope-variables",
        title: "2. Ámbito de Variables: Local vs. Global",
        shortTitle: "Ámbito (Scope)",
        icon: "fa-compress-arrows-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>ámbito (scope)</strong> determina en qué partes del programa una variable es accesible:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>Variables Locales:</strong> Creadas dentro del cuerpo de la función. Nacen cuando la función es llamada y son destruidas de la memoria cuando la función finaliza. No pueden ser leídas desde fuera de la función.</li>
            <li><strong>Variables Globales:</strong> Declaradas en el nivel principal del script. Son visibles en todo el módulo, pero modificarlas dentro de una función requiere la palabra clave explícita <code>global</code> (práctica generalmente desaconsejada en ingeniería).</li>
          </ul>
        `,
        quiz: [
          {
            question: "¿Qué ocurre si una función en Python finaliza su ejecución sin llegar a ninguna sentencia 'return' explícita?",
            options: [
              "Python arroja un SyntaxError.",
              "Retorna automáticamente el valor especial None.",
              "Retorna 0 por defecto.",
              "Conserva en memoria el último valor calculado."
            ],
            correct: 1,
            explanation: "En Python, toda función que no incluye un 'return' o que ejecuta un 'return' sin argumentos devuelve de forma implícita el objeto singleton None."
          }
        ]
      }
    ]
  },

  "prog-funciones-integradas": {
    id: "prog-funciones-integradas",
    title: "6.2 Funciones integradas de Python",
    subtitle: "El arsenal estándar de built-ins: inspección de tipos, agregaciones matemáticas, conversiones y manipulación de secuencias.",
    unit: 6,
    unitTitle: "Unidad 06: Funciones y procedimientos",
    week: 6,
    weekTitle: "Unidad 06: Funciones y procedimientos",
    difficulty: "Fácil",
    category: "Biblioteca Estándar",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 06", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Built-ins", type: "teal" },
      { text: "len / sum", type: "purple" }
    ],
    sections: [
      {
        id: "catalogo-builtins-principales",
        title: "1. Catálogo de Funciones Nativas (Built-ins)",
        shortTitle: "Funciones Built-ins",
        icon: "fa-puzzle-piece",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Python incluye un conjunto de funciones de primer orden disponibles directamente sin necesidad de importar ningún módulo (disponibles en el módulo <code>builtins</code>):
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">len(seq)</strong>: Longitud o conteo de elementos</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-purple-400">sum(iterable)</strong>: Suma total de valores numéricos</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-emerald-400">min() / max()</strong>: Valor mínimo y máximo</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-amber-400">abs(x)</strong>: Valor absoluto matemático</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-pink-400">round(x, n)</strong>: Redondeo al decimal especificado</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-indigo-400">type(obj)</strong>: Retorna la clase del objeto</div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Explorador Interactivo de Funciones Integradas",
            description: "Prueba interactivamente funciones como len, sum, min, max y abs proporcionando tus propios datos de prueba:",
            widget: {
              file: "widgets/programacion/u06_explorador_builtins.html",
              title: "Explorador de Funciones Built-ins",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-builtins",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Evalúa tu dominio sobre las funciones estándar:</p>`,
        quiz: [
          {
            question: "¿Cuál es el resultado de la llamada: min([45, 12, 89, 3, 27])?",
            options: ["89", "3", "12", "45"],
            correct: 1,
            explanation: "min() recorre la colección iterable y retorna el elemento con el valor numérico más bajo, que en este caso es 3."
          }
        ]
      }
    ]
  },

  "prog-procedimientos-funciones": {
    id: "prog-procedimientos-funciones",
    title: "6.3 Procedimientos y diferencias con las funciones",
    subtitle: "Funciones puras sin efectos colaterales vs procedimientos de mutación y acción, retorno None y arquitectura modular.",
    unit: 6,
    unitTitle: "Unidad 06: Funciones y procedimientos",
    week: 6,
    weekTitle: "Unidad 06: Funciones y procedimientos",
    difficulty: "Media",
    category: "Diseño Modular",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 06", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Side Effects", type: "amber" },
      { text: "Funciones Puras", type: "teal" }
    ],
    sections: [
      {
        id: "funcion-pura-vs-procedimiento",
        title: "1. Funciones Puras vs. Procedimientos (Efectos Colaterales)",
        shortTitle: "Funciones vs Procedimientos",
        icon: "fa-balance-scale",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Aunque en Python ambos se declaran con la palabra reservada <code>def</code>, en ciencia de la computación existe una distinción teórica y práctica fundamental:
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Criterio</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Función Pura (Mathematical)</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Procedimiento (Action / Side Effect)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">Propósito Central</td>
                  <td class="py-2.5 px-3">Calcular y retornar un nuevo valor a partir de sus entradas.</td>
                  <td class="py-2.5 px-3">Ejecutar una acción o provocar un cambio de estado en el sistema.</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Retorno (return)</td>
                  <td class="py-2.5 px-3">Explícito y obligatorio (devuelve un dato concreto).</td>
                  <td class="py-2.5 px-3">Sin return explícito (devuelve <code>None</code>).</td>
                </tr>
                <tr>
                  <td class="font-bold text-amber-400 py-2.5 px-3">Efectos Colaterales</td>
                  <td class="py-2.5 px-3">Cero (no altera archivos, ni consola, ni bases de datos).</td>
                  <td class="py-2.5 px-3">Primordial: imprimir en pantalla, escribir un archivo, enviar un correo.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "practica",
            title: "Clasificador Interactivo: ¿Función o Procedimiento?",
            description: "Analiza fragmentos de código y determina si representan funciones matemáticas puras o procedimientos con efectos colaterales:",
            widget: {
              file: "widgets/programacion/u06_clasificador_procedimientos.html",
              title: "¿Función o Procedimiento?",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-procedimientos",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Verifica tu comprensión del diseño modular:</p>`,
        quiz: [
          {
            question: "Una función que recibe una lista, la ordena in-place con lista.sort() e imprime 'Ordenado' sin sentencia return, es considerada principalmente:",
            options: [
              "Una función pura sin efectos colaterales.",
              "Un procedimiento, ya que muta el estado externo y no devuelve ningún valor calculado.",
              "Un error de sintaxis por no usar return.",
              "Un generador asíncrono."
            ],
            correct: 1,
            explanation: "Al modificar la lista original (mutación in-place) y emitir salida en consola sin retornar ningún dato, se clasifica conceptualmente como un procedimiento con efectos colaterales."
          }
        ]
      }
    ]
  }
};


/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 07 - RECURSIVIDAD
 * Prof. Leo Gaviria - Programación
 */

const PROG_U07_TOPICS = {
  "prog-recursividad-conceptos": {
    id: "prog-recursividad-conceptos",
    title: "7.1 Conceptos y componentes de la recursividad",
    subtitle: "El paradigma recursivo: caso base, caso recursivo, pila de llamadas (Call Stack), marcos de activación y desbordamiento de pila.",
    unit: 7,
    unitTitle: "Unidad 07: Recursividad",
    week: 7,
    weekTitle: "Unidad 07: Recursividad",
    difficulty: "Media",
    category: "Recursión",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 07", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Call Stack", type: "purple" },
      { text: "Caso Base", type: "teal" }
    ],
    sections: [
      {
        id: "principios-recursividad",
        title: "1. ¿Qué es la Recursividad y cómo Funciona?",
        shortTitle: "Principios Recursivos",
        icon: "fa-sitemap",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La <strong>recursividad</strong> es una técnica de diseño algorítmico donde una función se llama a sí misma de forma directa o indirecta para resolver una instancia más pequeña del mismo problema. Para que un algoritmo recursivo sea correcto y termine, debe satisfacer dos componentes obligatorios:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4">
              <h5 class="text-emerald-400 font-bold text-xs uppercase mb-2">1. Caso Base (Condición de Parada)</h5>
              <p class="text-xs text-gray-300 leading-relaxed">
                Es la condición trivial cuya respuesta se conoce directamente sin necesidad de invocar nuevas llamadas. <em>Evita la recursión infinita</em>.
              </p>
            </div>
            <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4">
              <h5 class="text-purple-400 font-bold text-xs uppercase mb-2">2. Paso Recursivo (Subproblema)</h5>
              <p class="text-xs text-gray-300 leading-relaxed">
                La función se invoca a sí misma reduciendo los parámetros de modo que en cada paso se acerque estrictamente al caso base.
              </p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Recursividad y Pila de Llamadas",
            description: "Avanza y retrocede paso a paso observando el apilamiento de marcos de activación en memoria y el retorno de resultados:",
            widget: {
              file: "widgets/programacion/u07_pila_recursiva.html",
              title: "Pila de Llamadas en Factorial",
              height: "480px"
            }
          }
        ]
      },
      {
        id: "pila-llamadas-stack-overflow",
        title: "2. La Pila de Llamadas y el Error RecursionError",
        shortTitle: "Call Stack y RecursionError",
        icon: "fa-layer-group",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Cada llamada a función crea un <strong>marco de activación (stack frame)</strong> en la memoria que almacena sus variables locales y la dirección de retorno. Si se omite el caso base o la reducción no converge, la pila agota la memoria disponible provocando una excepción de desbordamiento:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-red-500/30 font-mono text-xs text-red-300 mb-4">
            RecursionError: maximum recursion depth exceeded in comparison
          </div>
          <p class="text-xs text-gray-400">
            Python establece por defecto un límite de seguridad de 1000 llamadas recursivas (consultable con <code>sys.getrecursionlimit()</code>).
          </p>
        `,
        quiz: [
          {
            question: "¿Qué consecuencia inmediata ocurre si una función recursiva carece de caso base?",
            options: [
              "Python la convierte automáticamente en un bucle while.",
              "Se produce un RecursionError (desbordamiento de la pila de llamadas) al agotar el límite de profundidad.",
              "La función retorna None indefinidamente.",
              "El sistema operativo apaga el intérprete sin aviso."
            ],
            correct: 1,
            explanation: "Sin caso base, las llamadas recursivas continúan apilando frames en el Call Stack indefinidamente hasta que Python detiene la ejecución arrojando un RecursionError para proteger la memoria del sistema."
          }
        ]
      }
    ]
  },

  "prog-recursividad-hanoi": {
    id: "prog-recursividad-hanoi",
    title: "7.2 Torres de Hanoi",
    subtitle: "El rompecabezas clásico de recursión: reglas, formulación matemática inductiva, complejidad exponencial 2ⁿ - 1 y simulación gráfica.",
    unit: 7,
    unitTitle: "Unidad 07: Recursividad",
    week: 7,
    weekTitle: "Unidad 07: Recursividad",
    difficulty: "Avanzada",
    category: "Problemas Clásicos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 07", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Torres de Hanoi", type: "teal" },
      { text: "O(2ⁿ)", type: "red" }
    ],
    sections: [
      {
        id: "problema-hanoi-estrategia",
        title: "1. Reglas y Descomposición Algorítmica",
        shortTitle: "Estrategia de Hanoi",
        icon: "fa-chess-rook",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Inventado por el matemático Édouard Lucas en 1883, el problema consta de 3 postes (Origen, Auxiliar, Destino) y $n$ discos de diámetros distintos. Reglas:
          </p>
          <ol class="text-xs text-gray-300 space-y-1 list-decimal pl-5 mb-4">
            <li>Solo se puede mover un disco a la vez (el superior).</li>
            <li>Ningún disco mayor puede colocarse sobre un disco menor.</li>
          </ol>
          <p class="text-xs text-gray-300 leading-relaxed mb-4">
            <strong>Estrategia recursiva universal de 3 pasos:</strong><br>
            1. Mover $n-1$ discos desde el poste <em>Origen</em> al poste <em>Auxiliar</em>.<br>
            2. Mover el disco mayor restante directamente desde <em>Origen</em> a <em>Destino</em>.<br>
            3. Mover los $n-1$ discos desde el poste <em>Auxiliar</em> al poste <em>Destino</em>.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Interactivo de Torres de Hanoi",
            description: "Observa la solución automática paso a paso y comprueba cómo el número total de movimientos requeridos es exactamente 2ⁿ - 1:",
            widget: {
              file: "widgets/programacion/u07_simulador_hanoi.html",
              title: "Simulador de Torres de Hanoi",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "complejidad-hanoi-recurrencia",
        title: "2. Recurrencia y Complejidad Asintótica O(2ⁿ)",
        shortTitle: "Complejidad O(2ⁿ)",
        icon: "fa-calculator",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El número de movimientos $T(n)$ satisface la relación de recurrencia $T(n) = 2T(n-1) + 1$, con $T(1) = 1$. Su solución en forma cerrada es:
          </p>
          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 text-center font-mono text-sm text-sky-400 my-4">
            T(n) = 2ⁿ - 1 &nbsp;➔&nbsp; Complejidad Asintótica: O(2ⁿ)
          </div>
          <p class="text-xs text-gray-400">
            Para $n=3$, se requieren 7 movimientos. Para $n=4$, 15 movimientos. Para $n=64$ (la leyenda del templo de Benarés), se requerirían más de 18 trillones de movimientos (unos 585 mil millones de años).
          </p>
        `,
        quiz: [
          {
            question: "¿Cuántos movimientos exactos se necesitan para resolver las Torres de Hanoi con 5 discos siguiendo la estrategia óptima?",
            options: ["15", "25", "31", "32"],
            correct: 2,
            explanation: "Aplicando la fórmula cerrada T(n) = 2ⁿ - 1: T(5) = 2⁵ - 1 = 32 - 1 = 31 movimientos."
          }
        ]
      }
    ]
  },

  "prog-recursividad-laberintos": {
    id: "prog-recursividad-laberintos",
    title: "7.3 Laberintos",
    subtitle: "Exploración de caminos mediante backtracking (vuelta atrás): avance sistemático, poda de ramas fallidas y búsqueda de rutas a la salida.",
    unit: 7,
    unitTitle: "Unidad 07: Recursividad",
    week: 7,
    weekTitle: "Unidad 07: Recursividad",
    difficulty: "Avanzada",
    category: "Backtracking",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 07", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Backtracking", type: "teal" },
      { text: "Laberintos", type: "purple" }
    ],
    sections: [
      {
        id: "concepto-backtracking-laberinto",
        title: "1. ¿Qué es el Algoritmo de Backtracking?",
        shortTitle: "Algoritmo Backtracking",
        icon: "fa-compass",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>backtracking (vuelta atrás)</strong> es una técnica algorítmica recursiva para encontrar soluciones a problemas que involucran restricciones. Funciona construyendo candidatos de solución paso a paso; tan pronto como se detecta que un candidato no puede conducir a una solución válida, se <em>abandona</em> (se desmarca el camino) y se retrocede al punto de decisión anterior para probar otra alternativa.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Laberinto con Backtracking",
            description: "Observa al agente explorando caminos en la cuadrícula 2D, marcando celdas visitadas y retrocediendo ante muros o callejones sin salida:",
            widget: {
              file: "widgets/programacion/u07_laberinto_backtracking.html",
              title: "Laberinto Interactivo",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-backtracking",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Verifica tu comprensión del método de retroceso:</p>`,
        quiz: [
          {
            question: "¿Cuál es la acción fundamental que distingue al Backtracking de una búsqueda por fuerza bruta ingenua?",
            options: [
              "El backtracking nunca utiliza memoria.",
              "El backtracking descarta y poda ramas enteras de búsqueda tan pronto como violan una restricción, retrocediendo al estado previo.",
              "El backtracking solo funciona con listas ordenadas.",
              "El backtracking siempre encuentra la solución en tiempo O(1)."
            ],
            correct: 1,
            explanation: "La poda sistemática y el retroceso (undo/unmark) permiten evitar la exploración exhaustiva de millones de estados que se sabe de antemano que son inviables."
          }
        ]
      }
    ]
  },

  "prog-recursividad-sudoku": {
    id: "prog-recursividad-sudoku",
    title: "7.4 Sudoku",
    subtitle: "Problemas de satisfacción de restricciones (CSP), propagación lógica y solucionador exhaustivo con retroceso recursivo.",
    unit: 7,
    unitTitle: "Unidad 07: Recursividad",
    week: 7,
    weekTitle: "Unidad 07: Recursividad",
    difficulty: "Avanzada",
    category: "Backtracking",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 07", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Sudoku", type: "amber" },
      { text: "CSP", type: "teal" }
    ],
    sections: [
      {
        id: "resolucion-sudoku-backtracking",
        title: "1. Modelado del Sudoku como Problema de Restricciones",
        shortTitle: "Modelado de Sudoku",
        icon: "fa-th",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El Sudoku es un problema clásico de satisfacción de restricciones donde cada celda vacía debe rellenarse respetando tres invariantes simultáneas: ningún dígito puede repetirse en la misma fila, en la misma columna ni en el mismo cuadrante.
          </p>
          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-3 text-xs text-gray-300 mb-4">
            <strong>Algoritmo Recursivo:</strong><br>
            1. Buscar la siguiente celda vacía <code>(r, c)</code>. Si no hay, el tablero está resuelto.<br>
            2. Probar dígitos posibles del 1 al $N$.<br>
            3. Si el dígito es válido según las reglas, colocarlo y llamar recursivamente a la siguiente celda.<br>
            4. Si la llamada recursiva falla (ningún dígito posterior funciona), resetear la celda a 0 (backtrack) y probar el siguiente dígito.
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Solucionador Visual de Sudoku con Backtracking",
            description: "Observa en vivo el proceso de prueba, detección de conflictos y retroceso en una cuadrícula 4x4:",
            widget: {
              file: "widgets/programacion/u07_sudoku_visualizer.html",
              title: "Solucionador de Sudoku",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-sudoku",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevalúa tu comprensión del algoritmo:</p>`,
        quiz: [
          {
            question: "En un solucionador de Sudoku con backtracking, ¿qué debe hacerse con una celda si todos los números del 1 al 9 producen conflictos en las celdas siguientes?",
            options: [
              "Dejar el último número probado de forma definitiva.",
              "Restablecer la celda a 0 (vacía) y retornar False para que la celda previa intente otro número.",
              "Terminar el programa con un SystemExit.",
              "Colocar un número negativo."
            ],
            correct: 1,
            explanation: "Ese es el núcleo del backtracking: deshacer el cambio (restablecer a 0) y propagar el fallo hacia arriba para que la decisión anterior explore otra alternativa."
          }
        ]
      }
    ]
  },

  "prog-programacion-dinamica": {
    id: "prog-programacion-dinamica",
    title: "7.5 Programación dinámica",
    subtitle: "Subproblemas superpuestos, subestructura óptima, memoización top-down vs tabulación bottom-up y optimización de complejidad temporal.",
    unit: 7,
    unitTitle: "Unidad 07: Recursividad",
    week: 7,
    weekTitle: "Unidad 07: Recursividad",
    difficulty: "Avanzada",
    category: "Optimización Algorítmica",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 07", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Memoización", type: "purple" },
      { text: "Tabulación", type: "teal" }
    ],
    sections: [
      {
        id: "conceptos-programacion-dinamica",
        title: "1. De la Explosión Exponencial a la Eficiencia Polinomial",
        shortTitle: "Conceptos de Prog. Dinámica",
        icon: "fa-bolt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La <strong>programación dinámica (DP)</strong> es una técnica de optimización aplicable a problemas que poseen dos propiedades esenciales:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>Subestructura Óptima:</strong> La solución óptima global puede construirse a partir de las soluciones óptimas de sus subproblemas.</li>
            <li><strong>Subproblemas Superpuestos:</strong> El mismo subproblema se calcula una y otra vez en el árbol recursivo ingenuo (ej. en Fibonacci, calcular fib(5) recalcula fib(3) y fib(2) múltiples veces).</li>
          </ul>
        `,
        interactive: [
          {
            category: "explora",
            title: "Comparador Interactivo: Recursión vs Memoización vs Tabulación",
            description: "Compara el árbol de llamadas redundante O(2ⁿ) contra el almacenamiento en tabla y memoización O(n) utilizando la sucesión de Fibonacci:",
            widget: {
              file: "widgets/programacion/u07_programacion_dinamica.html",
              title: "Programación Dinámica: Fibonacci",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "memoizacion-vs-tabulacion",
        title: "2. Dos Paradigmas: Top-Down vs. Bottom-Up",
        shortTitle: "Top-Down vs Bottom-Up",
        icon: "fa-exchange-alt",
        contentHtml: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4">
              <h5 class="text-purple-400 font-bold text-xs uppercase mb-2">Top-Down con Memoización</h5>
              <p class="text-xs text-gray-300">
                Estructura recursiva natural. Antes de calcular, se consulta un diccionario o caché; si ya existe, se retorna inmediatamente O(1). Si no, se calcula y se guarda.
              </p>
            </div>
            <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4">
              <h5 class="text-emerald-400 font-bold text-xs uppercase mb-2">Bottom-Up con Tabulación</h5>
              <p class="text-xs text-gray-300">
                Estructura iterativa. Llena un arreglo desde los casos base más pequeños (dp[0], dp[1]) hasta el objetivo final dp[n]. Sin sobrecarga de pila de llamadas.
              </p>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "¿Por qué la memoización reduce la complejidad temporal de Fibonacci desde O(2ⁿ) hasta O(n)?",
            options: [
              "Porque utiliza procesamiento en tarjeta gráfica (GPU).",
              "Porque resuelve cada subproblema exactamente una sola vez y guarda el resultado para consultas instantáneas O(1).",
              "Porque elimina la memoria RAM del proceso.",
              "Porque cambia los números a binario."
            ],
            correct: 1,
            explanation: "Al almacenar en caché cada término calculado (fib(0), fib(1), ..., fib(n)), cada uno de los n subproblemas se calcula una única vez, transformando el tiempo exponencial en tiempo lineal O(n)."
          }
        ]
      }
    ]
  }
};


/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 08 - MEMORIA Y REFERENCIAS
 * Prof. Leo Gaviria - Programación
 */

const PROG_U08_TOPICS = {
  "prog-modelo-memoria": {
    id: "prog-modelo-memoria",
    title: "8.1 Modelo de memoria",
    subtitle: "Arquitectura de memoria en tiempo de ejecución: Stack (pila de ejecución) vs Heap (montículo de objetos) y semántica de nombres.",
    unit: 8,
    unitTitle: "Unidad 08: Memoria y referencias",
    week: 8,
    weekTitle: "Unidad 08: Memoria y referencias",
    difficulty: "Media",
    category: "Arquitectura de Software",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 08", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Stack vs Heap", type: "teal" },
      { text: "id()", type: "purple" }
    ],
    sections: [
      {
        id: "arquitectura-stack-heap",
        title: "1. ¿Cómo Administra la Memoria el Intérprete de Python?",
        shortTitle: "Stack vs Heap",
        icon: "fa-memory",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Durante la ejecución de un script, la memoria asignada por el sistema operativo se divide principalmente en dos zonas con roles arquitectónicos distintos:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-sky-500/30 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">Stack (Pila de Ejecución)</h5>
              <p class="text-xs text-gray-300">
                Memoria rápida y de acceso LIFO. Almacena los marcos de función (stack frames), variables locales y las <strong>referencias (punteros)</strong> hacia los objetos reales.
              </p>
            </div>
            <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4">
              <h5 class="text-purple-400 font-bold text-xs uppercase mb-2">Heap (Montículo de Objetos)</h5>
              <p class="text-xs text-gray-300">
                Espacio dinámico y global donde residen los <strong>objetos de datos reales</strong> (enteros, cadenas, listas, diccionarios, instancias de clases). Administrado por el Garbage Collector.
              </p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Memoria de Python (Stack vs Heap)",
            description: "Observa cómo las variables en el Stack apuntan a direcciones específicas en el Heap y qué sucede al reasignar:",
            widget: {
              file: "widgets/programacion/u08_visualizador_memoria.html",
              title: "Visualizador de Memoria Stack vs Heap",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "identidad-objetos-id",
        title: "2. Identidad de Objetos y la Función id()",
        shortTitle: "Identidad y id()",
        icon: "fa-fingerprint",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Cada objeto creado en el Heap posee una dirección única e invariable en memoria durante su ciclo de vida. Podemos inspeccionarla con la función <code>id(obj)</code>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            a = [1, 2, 3]<br>
            b = a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># b comparte la referencia de a</span><br>
            print(id(a) == id(b)) &nbsp;<span class="text-emerald-400"># True (apuntan exactamente al mismo objeto)</span>
          </div>
        `,
        quiz: [
          {
            question: "En Python, cuando ejecutas la instrucción: x = 500; y = 500; ¿qué evalúa la expresión: x is y?",
            options: [
              "Siempre True porque tienen el mismo valor numérico.",
              "Generalmente False (o dependiente de optimizaciones del compilador), porque 'is' evalúa identidad de memoria (id(x) == id(y)) y no igualdad de valor.",
              "Arroja un TypeError.",
              "Convierte los enteros en booleanos."
            ],
            correct: 1,
            explanation: "El operador 'is' compara direcciones de memoria (identidad de objeto), mientras que '==' compara el valor contenido. Para enteros fuera del rango de pre-alojamiento (-5 a 256), Python crea dos objetos distintos en el Heap."
          }
        ]
      }
    ]
  },

  "prog-apuntadores": {
    id: "prog-apuntadores",
    title: "8.2 Apuntadores",
    subtitle: "Punteros explícitos en bajo nivel (C/C++) frente a referencias transparentes en Python: seguridad de memoria y recolección de basura.",
    unit: 8,
    unitTitle: "Unidad 08: Memoria y referencias",
    week: 8,
    weekTitle: "Unidad 08: Memoria y referencias",
    difficulty: "Avanzada",
    category: "Bajo Nivel vs Alto Nivel",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 08", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Punteros C", type: "red" },
      { text: "Referencias", type: "teal" }
    ],
    sections: [
      {
        id: "punteros-c-vs-referencias-python",
        title: "1. Punteros Explícitos frente a Referencias Administradas",
        shortTitle: "Punteros vs Referencias",
        icon: "fa-project-diagram",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En lenguajes de bajo nivel como C o C++, los <strong>punteros</strong> son variables que guardan explícitamente la dirección física de memoria de otra variable, permitiendo aritmética de punteros (avanzar N bytes en memoria contigua) y desreferenciación con el operador <code>*</code>. En Python, este modelo está completamente encapsulado para prevenir fallos críticos del sistema.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Comparador: Punteros en C vs. Referencias en Python",
            description: "Analiza la tabla comparativa de riesgos, gestión manual y seguridad de memoria entre ambos paradigmas:",
            widget: {
              file: "widgets/programacion/u08_apuntadores_referencias.html",
              title: "Punteros en C vs Referencias en Python",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "garbage-collector-conteo",
        title: "2. Conteo de Referencias y Garbage Collector",
        shortTitle: "Garbage Collector",
        icon: "fa-recycle",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            CPython administra la memoria mediante dos mecanismos complementarios:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>Reference Counting (Conteo de Referencias):</strong> Cada objeto en el Heap mantiene un contador interno (<code>ob_refcnt</code>) de cuántas variables o colecciones apuntan a él. Tan pronto como el contador cae a 0, la memoria del objeto se libera de inmediato.</li>
            <li><strong>Ciclic Garbage Collector:</strong> Detecta y recolecta referencias circulares (por ejemplo, el objeto A apunta a B y B apunta a A, pero nadie más los utiliza).</li>
          </ul>
        `,
        quiz: [
          {
            question: "¿Por qué en Python NO se permite la aritmética de punteros (como ptr + 1)?",
            options: [
              "Porque la memoria en Python no es direccionable.",
              "Por seguridad: para evitar que un programa acceda a zonas arbitrarias o no asignadas de la memoria física (Memory Safety).",
              "Porque los punteros en Python se miden en kilobytes y no en bytes.",
              "Es un error del intérprete que se corregirá en futuras versiones."
            ],
            correct: 1,
            explanation: "Python es un lenguaje de memoria segura (memory-safe). Al abstraer las direcciones de hardware, se eliminan por completo los errores de segmentación (Segmentation faults) y la corrupción de memoria."
          }
        ]
      }
    ]
  },

  "prog-referencias-indireccion": {
    id: "prog-referencias-indireccion",
    title: "8.3 Referencias e indirección múltiple",
    subtitle: "Alias de objetos mutables, copia superficial (copy) vs copia profunda (deepcopy), y el operador de identidad is vs igualdad ==.",
    unit: 8,
    unitTitle: "Unidad 08: Memoria y referencias",
    week: 8,
    weekTitle: "Unidad 08: Memoria y referencias",
    difficulty: "Avanzada",
    category: "Mutabilidad y Alias",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 08", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Alias", type: "amber" },
      { text: "deepcopy", type: "purple" }
    ],
    sections: [
      {
        id: "problema-alias-mutabilidad",
        title: "1. El Peligro de los Alias en Objetos Mutables",
        shortTitle: "Alias y Mutabilidad",
        icon: "fa-clone",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Uno de los errores más desconcertantes para programadores que inician en Python ocurre al asignar listas o diccionarios a otra variable con <code>b = a</code>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            lista1 = [1, 2, 3]<br>
            lista2 = lista1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># ¡ALIAS! lista2 no es una copia; es la misma lista</span><br>
            lista2.append(99)<br>
            print(lista1) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400"># [1, 2, 3, 99] ¡lista1 también cambió!</span>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Alias, Copia Superficial y Copia Profunda",
            description: "Modifica listas anidadas bajo los tres esquemas de asignación y observa en qué casos se comparten los subobjetos internos:",
            widget: {
              file: "widgets/programacion/u08_simulador_alias.html",
              title: "Simulador de Alias y Mutabilidad",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "copia-superficial-vs-profunda",
        title: "2. Copia Superficial vs. Copia Profunda (copy vs deepcopy)",
        shortTitle: "copy vs deepcopy",
        icon: "fa-copy",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para evitar los efectos colaterales de los alias, el módulo estándar <code>copy</code> ofrece dos niveles de duplicación:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4">
              <h5 class="text-amber-400 font-bold text-xs uppercase mb-2">Copia Superficial: copy()</h5>
              <p class="text-xs text-gray-300">
                Clona la colección exterior, pero los objetos mutables contenidos en su interior siguen siendo compartidos por referencia.
              </p>
            </div>
            <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4">
              <h5 class="text-emerald-400 font-bold text-xs uppercase mb-2">Copia Profunda: deepcopy()</h5>
              <p class="text-xs text-gray-300">
                Clona recursivamente la colección y todos los objetos anidados en ella. Crea una estructura totalmente independiente en memoria.
              </p>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "Dada la lista matriz = [[1, 2], [3, 4]], si ejecutamos clon = matriz.copy() y luego clon[0][0] = 99, ¿cuál será el valor de matriz[0][0]?",
            options: [
              "1, porque la copia aísla por completo los datos.",
              "99, porque una copia superficial (shallow copy) comparte las referencias de las sublistas anidadas.",
              "IndexError por alteración indebida de matrices.",
              "None"
            ],
            correct: 1,
            explanation: "La copia superficial crea una nueva lista para el contenedor exterior, pero los elementos interiores ([1, 2] y [3, 4]) son las mismas instancias compartidas por referencia. Para aislar sublistas anidadas se requiere copy.deepcopy()."
          }
        ]
      }
    ]
  }
};


/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 10 - ESTRUCTURAS DE DATOS
 * Prof. Leo Gaviria - Programación
 */

const PROG_U10_TOPICS = {
  "intro-arboles-binarios": {
    id: "intro-arboles-binarios",
    title: "10.1 Árboles binarios",
    subtitle: "Estructuras de datos jerárquicas y no lineales: nodo, raíz, hijos, hojas, altura, Árboles Binarios de Búsqueda (BST) y recorridos DFS.",
    unit: 10,
    unitTitle: "Unidad 10: Estructuras de datos",
    week: 10,
    weekTitle: "Unidad 10: Estructuras de datos",
    difficulty: "Media",
    category: "Estructuras Jerárquicas",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 10", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "BST", type: "teal" },
      { text: "Recorridos DFS", type: "purple" }
    ],
    sections: [
      {
        id: "conceptos-arbol-binario",
        title: "1. Anatomía y Propiedades de los Árboles Binarios",
        shortTitle: "Anatomía de Árboles",
        icon: "fa-project-diagram",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Un <strong>árbol</strong> es una estructura de datos jerárquica no lineal compuesta por <strong>nodos</strong> conectados por aristas dirigidas. Un <strong>árbol binario</strong> restringe cada nodo a tener como máximo dos hijos (convencionalmente denominados <em>hijo izquierdo</em> e <em>hijo derecho</em>).
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800 text-center"><strong class="text-sky-400">Raíz:</strong> Nodo superior sin padre</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800 text-center"><strong class="text-emerald-400">Hoja:</strong> Nodo sin hijos terminal</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800 text-center"><strong class="text-amber-400">Altura:</strong> Longitud del camino más largo</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800 text-center"><strong class="text-purple-400">BST:</strong> Izquierda &lt; Raíz &lt; Derecha</div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Constructor y Visualizador Interactivo de Árboles Binarios (BST)",
            description: "Inspecciona la topología de un Árbol Binario de Búsqueda y ejecuta los recorridos Preorden, Inorden y Postorden iluminando los nodos paso a paso:",
            widget: {
              file: "widgets/programacion/u10_arbol_binario_visualizer.html",
              title: "Visualizador de Árboles Binarios",
              height: "480px"
            }
          }
        ]
      },
      {
        id: "recorridos-dfs-arboles",
        title: "2. Recorridos en Profundidad: Preorden, Inorden y Postorden",
        shortTitle: "Recorridos DFS",
        icon: "fa-route",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Existen tres formas canónicas de visitar cada nodo de un árbol binario mediante funciones recursivas:
          </p>
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Recorrido</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Secuencia de Visita</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Aplicación Principal</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="text-sky-400 py-2.5 px-3">Inorden</td>
                  <td class="py-2.5 px-3">Izquierda ➔ Raíz ➔ Derecha (I-R-D)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">En un BST, extrae todos los elementos ordenados ascendentemente.</td>
                </tr>
                <tr>
                  <td class="text-purple-400 py-2.5 px-3">Preorden</td>
                  <td class="py-2.5 px-3">Raíz ➔ Izquierda ➔ Derecha (R-I-D)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Serialización, copia y clonación exacta de la estructura del árbol.</td>
                </tr>
                <tr>
                  <td class="text-amber-400 py-2.5 px-3">Postorden</td>
                  <td class="py-2.5 px-3">Izquierda ➔ Derecha ➔ Raíz (I-D-R)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Evaluación de expresiones matemáticas (AST) y liberación de memoria.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        quiz: [
          {
            question: "En un Árbol Binario de Búsqueda (BST) que contiene los números [50, 30, 70, 20, 40], ¿cuál es el resultado de un recorrido Inorden?",
            options: [
              "[50, 30, 20, 40, 70]",
              "[20, 30, 40, 50, 70] (secuencia ordenada)",
              "[20, 40, 30, 70, 50]",
              "[70, 50, 40, 30, 20]"
            ],
            correct: 1,
            explanation: "Por definición de un BST, el recorrido Inorden (Subárbol Izquierdo ➔ Raíz ➔ Subárbol Derecho) siempre visita los elementos en orden estrictamente ascendente: 20, 30, 40, 50, 70."
          }
        ]
      }
    ]
  }
};


/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 12 - PROGRAMACIÓN GRÁFICA
 * Prof. Leo Gaviria - Programación
 */

const PROG_U12_TOPICS = {
  "prog-turtle-intro": {
    id: "prog-turtle-intro",
    title: "12.1 Introducción a Turtle",
    subtitle: "Gráficos de tortuga: coordenadas cartesianas, orientación angular, bucles para trazado de polígonos regulares y espirales fractales.",
    unit: 12,
    unitTitle: "Unidad 12: Programación gráfica",
    week: 12,
    weekTitle: "Unidad 12: Programación gráfica",
    difficulty: "Fácil",
    category: "Interfaces Gráficas",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 12", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Turtle", type: "teal" },
      { text: "Geometría", type: "purple" }
    ],
    sections: [
      {
        id: "conceptos-turtle-canvas",
        title: "1. ¿Qué es Turtle Graphics y cómo se Programa?",
        shortTitle: "Turtle Graphics",
        icon: "fa-palette",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El módulo estándar <code>turtle</code> de Python es un entorno gráfico vectorial inspirado en el lenguaje Logo de Seymour Papert. La metáfora es una "tortuga" que se desplaza sobre un lienzo plano bidimensional arrastrando un lápiz:
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">forward(d)</strong>: Avanza d píxeles</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-purple-400">left(a)</strong>: Gira a la izquierda a grados</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-emerald-400">penup()</strong>: Levanta el lápiz</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-amber-400">color(c)</strong>: Cambia el color de trazo</div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Interactivo de Gráficos Turtle",
            description: "Experimenta con la progresión geométrica: genera cuadrados, hexágonos regulares, estrellas y espirales fractales con bucles for:",
            widget: {
              file: "widgets/programacion/u12_turtle_simulator.html",
              title: "Simulador de Turtle",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-turtle",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevalúa los principios de orientación:</p>`,
        quiz: [
          {
            question: "¿Qué ángulo de giro 'left(a)' debe utilizarse en un bucle for de 6 iteraciones para trazar un hexágono regular perfecto?",
            options: ["45 grados", "60 grados (360 / 6)", "90 grados", "120 grados"],
            correct: 1,
            explanation: "La suma de los ángulos exteriores de cualquier polígono regular convexo es 360°. Para 6 lados: 360 / 6 = 60° en cada giro."
          }
        ]
      }
    ]
  },

  "prog-flet-intro": {
    id: "prog-flet-intro",
    title: "12.2 Introducción a Flet",
    subtitle: "Desarrollo de interfaces de usuario modernas y multiplataforma en Python impulsadas por el motor Flutter: controles declarativos y eventos.",
    unit: 12,
    unitTitle: "Unidad 12: Programación gráfica",
    week: 12,
    weekTitle: "Unidad 12: Programación gráfica",
    difficulty: "Media",
    category: "Interfaces Modernas",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 12", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Flet / Flutter", type: "teal" },
      { text: "Reactivo", type: "purple" }
    ],
    sections: [
      {
        id: "arquitectura-flet-declarativa",
        title: "1. Arquitectura y Controles Esenciales en Flet",
        shortTitle: "Arquitectura Flet",
        icon: "fa-window-maximize",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            <strong>Flet</strong> permite a los desarrolladores de Python crear aplicaciones de escritorio, web y móviles nativas de alto rendimiento sin requerir experiencia en frontend, HTML o JavaScript, utilizando el motor gráfico de <strong>Flutter</strong>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            import flet as ft<br>
            def main(page: ft.Page):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;page.add(ft.Text("¡Hola desde Flet!"))<br>
            ft.app(target=main)
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Controles y Layout en Flet",
            description: "Diseña interactivamente una pantalla con campos de texto, botones y contenedores, observando la actualización reactiva page.update():",
            widget: {
              file: "widgets/programacion/u12_flet_ui_builder.html",
              title: "Simulador de UI Flet",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-flet",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Verifica tu comprensión sobre Flet:</p>`,
        quiz: [
          {
            question: "¿Por qué es indispensable llamar al método 'page.update()' en una aplicación Flet tras modificar la propiedad de un control?",
            options: [
              "Para guardar los cambios en la base de datos.",
              "Para sincronizar y redibujar el estado reactivo en la ventana gráfica de Flutter.",
              "Para compilar el script de Python a C++.",
              "Solo es necesario al cerrar la aplicación."
            ],
            correct: 1,
            explanation: "Flet utiliza un modelo cliente-servidor interno reactivo. 'page.update()' envía el árbol de diferencias (diffs) al motor de Flutter para que la interfaz gráfica refleje los nuevos datos en pantalla."
          }
        ]
      }
    ]
  },

  "prog-grafica-calculadora": {
    id: "prog-grafica-calculadora",
    title: "12.3 Ejemplo: calculadora",
    subtitle: "Construcción paso a paso de una calculadora gráfica modular: distribución en rejilla (Rows & Columns), control de estado y despacho de eventos.",
    unit: 12,
    unitTitle: "Unidad 12: Programación gráfica",
    week: 12,
    weekTitle: "Unidad 12: Programación gráfica",
    difficulty: "Media",
    category: "Proyectos Prácticos",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 12", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Calculadora", type: "teal" },
      { text: "Eventos", type: "amber" }
    ],
    sections: [
      {
        id: "desarrollo-calculadora-flet",
        title: "1. Diseño Modular de la Aplicación Calculadora",
        shortTitle: "Calculadora Flet",
        icon: "fa-calculator",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Construimos la calculadora separando limpiamente: (1) El estado interno (display y operandos), (2) La estructura visual (Row/Column para la cuadrícula del teclado numérico) y (3) Los controladores de eventos (clicks en dígitos y operaciones aritméticas).
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Calculadora Modular Flet",
            description: "Prueba la réplica interactiva de la calculadora e inspecciona la correlación entre las pulsaciones de botones y el despachador de eventos:",
            widget: {
              file: "widgets/programacion/u12_flet_calculadora.html",
              title: "Calculadora Flet",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-calculadora",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevaluación del proyecto:</p>`,
        quiz: [
          {
            question: "¿Qué combinación de contenedores de layout de Flet se utiliza habitualmente para organizar el teclado numérico de una calculadora?",
            options: [
              "Una lista desordenada de Canvas.",
              "Un ft.Column que contiene múltiples ft.Row (filas de botones horizontales apiladas verticalmente).",
              "Un único ft.Text.",
              "Frames flotantes absolutos."
            ],
            correct: 1,
            explanation: "La cuadrícula estándar de una calculadora se construye de forma limpia y responsiva mediante una columna principal (ft.Column) que apila verticalmente cada una de las filas (ft.Row) con sus respectivos botones numéricos y operadores."
          }
        ]
      }
    ]
  },

  "prog-grafica-pokedex": {
    id: "prog-grafica-pokedex",
    title: "12.4 Ejemplo: Pokédex",
    subtitle: "Proyecto integrador de software gráfico: consumo de datos estructurados, filtrado dinámico en vivo, tarjetas visuales y vista maestra-detalle.",
    unit: 12,
    unitTitle: "Unidad 12: Programación gráfica",
    week: 12,
    weekTitle: "Unidad 12: Programación gráfica",
    difficulty: "Media",
    category: "Proyectos Integradores",
    timeEstimate: "45 minutos",
    badges: [
      { text: "Unidad 12", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Pokédex", type: "red" },
      { text: "Proyecto Integrador", type: "purple" }
    ],
    sections: [
      {
        id: "proyecto-pokedex-flet",
        title: "1. Arquitectura del Proyecto Integrador Pokédex",
        shortTitle: "Pokédex Flet",
        icon: "fa-gamepad",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Este proyecto combina todos los conceptos aprendidos: estructuras de datos (listas de diccionarios), control de flujo (filtrado por nombre o tipo elemental), diseño de interfaz reactiva y vinculación de eventos en tiempo real con <code>on_change</code>.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Pokédex con Flet",
            description: "Busca Pokémon en tiempo real, filtra por nombre e inspecciona la vista de estadísticas de combate:",
            widget: {
              file: "widgets/programacion/u12_flet_pokedex.html",
              title: "Pokédex Flet",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-pokedex",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevaluación del proyecto integrador:</p>`,
        quiz: [
          {
            question: "En una Pokédex reactiva, ¿cómo se implementa el filtrado en vivo al escribir en la barra de búsqueda?",
            options: [
              "Reiniciando el sistema operativo cada vez que se presiona una tecla.",
              "Asociando una función al evento 'on_change' del ft.TextField que filtra la lista en memoria y actualiza la lista de controles con page.update().",
              "Creando un archivo .txt nuevo por cada letra.",
              "Es imposible filtrar sin una base de datos externa."
            ],
            correct: 1,
            explanation: "El evento on_change dispara la función de filtrado con cada pulsación de tecla, reconstruye la lista de controles visibles y redibuja la interfaz con page.update()."
          }
        ]
      }
    ]
  }
};


/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 13 - PROCESAMIENTO Y VISUALIZACIÓN DE DATOS
 * Prof. Leo Gaviria - Programación
 */

const PROG_U13_TOPICS = {
  "prog-pandas-datos": {
    id: "prog-pandas-datos",
    title: "13.1 Manipulación de datos con Pandas",
    subtitle: "Estructuras de datos bidimensionales tabulares: Series, DataFrames, carga de archivos CSV, indexación booleana y agregaciones.",
    unit: 13,
    unitTitle: "Unidad 13: Procesamiento y visualización de datos",
    week: 13,
    weekTitle: "Unidad 13: Procesamiento y visualización de datos",
    difficulty: "Media",
    category: "Ciencia de Datos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 13", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Pandas", type: "teal" },
      { text: "DataFrame", type: "purple" }
    ],
    sections: [
      {
        id: "conceptos-pandas-dataframe",
        title: "1. ¿Qué es Pandas y por qué es el Estándar de la Industria?",
        shortTitle: "Pandas y DataFrames",
        icon: "fa-table",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            <strong>Pandas</strong> es la biblioteca de Python más utilizada a nivel mundial para manipulación y análisis de datos estructurados. Introduce dos estructuras de datos primordiales:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">Series (1D)</h5>
              <p class="text-xs text-gray-300">
                Arreglo unidimensional etiquetado capaz de contener cualquier tipo de datos. Equivale a una sola columna con su índice.
              </p>
            </div>
            <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4">
              <h5 class="text-purple-400 font-bold text-xs uppercase mb-2">DataFrame (2D)</h5>
              <p class="text-xs text-gray-300">
                Estructura tabular bidimensional con filas y columnas etiquetadas (similar a una hoja de cálculo o tabla SQL).
              </p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Explorador Interactivo de DataFrames",
            description: "Filtra registros en vivo mediante condiciones booleanas y observa cómo se transforman las filas del DataFrame:",
            widget: {
              file: "widgets/programacion/u13_pandas_explorer.html",
              title: "Explorador de DataFrames",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-pandas",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevalúa tu conocimiento de Pandas:</p>`,
        quiz: [
          {
            question: "¿Qué instrucción de Pandas permite filtrar un DataFrame 'df' para conservar solo las filas donde la columna 'Edad' es mayor a 18?",
            options: [
              "df.filter(Edad > 18)",
              "df[df['Edad'] > 18] (indexación booleana)",
              "df.where('Edad' > 18).delete()",
              "df.find('Edad > 18')"
            ],
            correct: 1,
            explanation: "La indexación booleana df[df['Edad'] > 18] genera una máscara de booleanos y selecciona exclusivamente las filas donde la condición es True."
          }
        ]
      }
    ]
  },

  "prog-numpy-calculo": {
    id: "prog-numpy-calculo",
    title: "13.2 Cálculo numérico con NumPy",
    subtitle: "El motor de computación científica: ndarrays homogéneos contiguos en memoria, operaciones vectorizadas SIMD y broadcasting.",
    unit: 13,
    unitTitle: "Unidad 13: Procesamiento y visualización de datos",
    week: 13,
    weekTitle: "Unidad 13: Procesamiento y visualización de datos",
    difficulty: "Media",
    category: "Cálculo Numérico",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 13", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "NumPy", type: "teal" },
      { text: "Vectorización", type: "amber" }
    ],
    sections: [
      {
        id: "conceptos-numpy-vectorizacion",
        title: "1. ¿Por qué NumPy es de 50 a 100 veces más Rápido que las Listas?",
        shortTitle: "NumPy y ndarrays",
        icon: "fa-calculator",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Las listas ordinarias de Python son colecciones de punteros dispersos a objetos dinámicos. En cambio, un <code>np.ndarray</code> de <strong>NumPy</strong> almacena datos primitivos homogéneos en bloques contiguos de memoria en lenguaje C, permitiendo a la CPU aplicar instrucciones vectoriales <strong>SIMD</strong> (<em>Single Instruction, Multiple Data</em>):
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            import numpy as np<br>
            arr = np.array([1, 2, 3, 4])<br>
            print(arr * 2) &nbsp;<span class="text-emerald-400"># [2, 4, 6, 8] - Operación vectorizada sin bucles for</span>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Matrices y Vectorización con NumPy",
            description: "Modifica matrices 2D, aplica sumas escalares con broadcasting, multiplicación vectorizada y slicing de submatrices:",
            widget: {
              file: "widgets/programacion/u13_numpy_visualizer.html",
              title: "Visualizador de NumPy",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-numpy",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevaluación de cálculo vectorial:</p>`,
        quiz: [
          {
            question: "¿Qué significa el concepto de 'Broadcasting' en NumPy?",
            options: [
              "Transmitir datos a través de una red inalámbrica.",
              "El mecanismo automático mediante el cual NumPy expande las dimensiones de arrays de formas compatibles para permitir operaciones matemáticas entre ellos (ej. sumar un escalar a una matriz).",
              "Guardar arrays en formato de audio comprimido.",
              "Duplicar el código en todos los hilos del procesador."
            ],
            correct: 1,
            explanation: "Broadcasting describe cómo NumPy gestiona arreglos con formas diferentes durante operaciones aritméticas, expandiendo virtualmente la dimensión menor sin duplicar la memoria."
          }
        ]
      }
    ]
  },

  "prog-matplotlib-visualizacion": {
    id: "prog-matplotlib-visualizacion",
    title: "13.3 Visualización de datos con Matplotlib",
    subtitle: "Anatomía de gráficos científicos: Figures, Axes, series temporales, gráficos de dispersión, histogramas y personalización estética.",
    unit: 13,
    unitTitle: "Unidad 13: Procesamiento y visualización de datos",
    week: 13,
    weekTitle: "Unidad 13: Procesamiento y visualización de datos",
    difficulty: "Media",
    category: "Visualización de Datos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 13", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Matplotlib", type: "teal" },
      { text: "Pyplot", type: "purple" }
    ],
    sections: [
      {
        id: "anatomia-matplotlib-graficos",
        title: "1. Tipologías de Gráficos y Anatomía de Pyplot",
        shortTitle: "Gráficos con Matplotlib",
        icon: "fa-chart-bar",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            <strong>Matplotlib</strong> es la biblioteca fundacional de trazado gráfico de Python. Su submódulo <code>matplotlib.pyplot</code> emula la interfaz gráfica interactiva de MATLAB para construir figuras profesionales:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">plt.plot()</strong>: Tendencias continuas</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-emerald-400">plt.bar()</strong>: Comparación categórica</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-amber-400">plt.scatter()</strong>: Correlación x-y</div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Explorador Interactivo de Gráficas de Matplotlib",
            description: "Alterna entre gráficos de líneas, barras categóricas y dispersión observando la sintaxis y los elementos constitutivos de la figura:",
            widget: {
              file: "widgets/programacion/u13_matplotlib_explorer.html",
              title: "Explorador de Matplotlib",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-matplotlib",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevaluación de visualización:</p>`,
        quiz: [
          {
            question: "¿Cuál es el tipo de gráfico más adecuado para visualizar la relación o correlación entre dos variables continuas (como estatura y peso)?",
            options: [
              "Gráfico de torta (pie chart)",
              "Gráfico de dispersión (plt.scatter)",
              "Gráfico de barras apiladas",
              "Gráfico de radar"
            ],
            correct: 1,
            explanation: "El gráfico de dispersión (scatter plot) representa cada punto de observación como una coordenada (x, y) en el plano cartesiano, permitiendo identificar patrones de correlación lineal o agrupamiento."
          }
        ]
      }
    ]
  },

  "prog-datos-dashboard": {
    id: "prog-datos-dashboard",
    title: "13.4 Ejemplo: dashboard",
    subtitle: "Proyecto integrador de análisis de datos: unificación del stack científico Pandas + NumPy + Matplotlib en un panel de métricas e indicadores de negocio.",
    unit: 13,
    unitTitle: "Unidad 13: Procesamiento y visualización de datos",
    week: 13,
    weekTitle: "Unidad 13: Procesamiento y visualización de datos",
    difficulty: "Avanzada",
    category: "Proyectos Integradores",
    timeEstimate: "45 minutos",
    badges: [
      { text: "Unidad 13", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Dashboard", type: "purple" },
      { text: "Full Stack Datos", type: "teal" }
    ],
    sections: [
      {
        id: "proyecto-dashboard-integrador",
        title: "1. Arquitectura del Dashboard de Ciencia de Datos",
        shortTitle: "Dashboard Integrador",
        icon: "fa-tachometer-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Este proyecto integrador materializa el flujo formal de la ingeniería de datos: (1) Carga y limpieza de dataset con <strong>Pandas</strong>, (2) Cálculos agregados y transformaciones vectorizadas con <strong>NumPy</strong>, y (3) Renderizado sincronizado de KPIs y múltiples paneles gráficos con <strong>Matplotlib</strong>.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Dashboard de Análisis de Datos",
            description: "Explora la integración de métricas clave (KPIs), ventas agrupadas y gráficos de rendimiento:",
            widget: {
              file: "widgets/programacion/u13_dashboard_integrador.html",
              title: "Dashboard de Datos",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-dashboard",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevaluación de integración de datos:</p>`,
        quiz: [
          {
            question: "¿Qué método de Matplotlib permite crear una cuadrícula con múltiples subtrazados (gráficos independientes en una sola ventana)?",
            options: [
              "plt.grid_all()",
              "plt.subplots(nrows, ncols) retornando una Figure y un array de Axes",
              "plt.merge_plots()",
              "plt.window_split()"
            ],
            correct: 1,
            explanation: "fig, axes = plt.subplots(nrows, ncols) crea la figura contenedora y la matriz de ejes (Axes) sobre los cuales se dibuja cada visualización individual del dashboard."
          }
        ]
      }
    ]
  }
};


/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 14 - FUNDAMENTOS DE MACHINE LEARNING
 * Prof. Leo Gaviria - Programación
 */

const PROG_U14_TOPICS = {
  "prog-ml-fundamentos": {
    id: "prog-ml-fundamentos",
    title: "14.1 ¿Qué es y cómo funciona?",
    subtitle: "De la programación basada en reglas explícitas al aprendizaje inductivo a partir de datos: tipos de aprendizaje, características y variables objetivo.",
    unit: 14,
    unitTitle: "Unidad 14: Fundamentos de Machine Learning",
    week: 14,
    weekTitle: "Unidad 14: Fundamentos de Machine Learning",
    difficulty: "Media",
    category: "Inteligencia Artificial",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 14", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Machine Learning", type: "teal" },
      { text: "Supervisado", type: "purple" }
    ],
    sections: [
      {
        id: "concepto-paradigma-ml",
        title: "1. El Cambio de Paradigma: Reglas vs. Aprendizaje",
        shortTitle: "¿Qué es Machine Learning?",
        icon: "fa-brain",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En la <strong>programación clásica</strong>, el desarrollador escribe reglas manuales y condiciones lógicas que se aplican a los datos para obtener resultados. En el <strong>Machine Learning</strong>, alimentamos a un algoritmo matemático con datos históricos y sus respuestas esperadas; el algoritmo aprende los patrones y genera un <strong>modelo predictivo</strong> autónomo:
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-purple-400 font-bold">Paradigma</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Entradas al Sistema</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Salida Producida</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">Programación Tradicional</td>
                  <td class="py-2.5 px-3">Reglas lógicas humanas + Datos crudos</td>
                  <td class="py-2.5 px-3 text-emerald-300 font-mono">Respuestas / Salidas</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Machine Learning</td>
                  <td class="py-2.5 px-3">Datos históricos + Respuestas observadas</td>
                  <td class="py-2.5 px-3 text-amber-300 font-mono">Reglas / Modelo Matemático</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Animación del Ciclo de Vida de Machine Learning",
            description: "Recorre las cinco etapas fundamentales de un pipeline de ML: Recolección ➔ Preparación ➔ Entrenamiento ➔ Inferencia ➔ Evaluación:",
            widget: {
              file: "widgets/programacion/u14_ciclo_ml.html",
              title: "Ciclo de Vida de ML",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "taxonomia-aprendizaje-ia",
        title: "2. Aprendizaje Supervisado vs. No Supervisado",
        shortTitle: "Tipos de Aprendizaje",
        icon: "fa-project-diagram",
        contentHtml: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4">
              <h5 class="text-emerald-400 font-bold text-xs uppercase mb-2">Aprendizaje Supervisado (Con Etiquetas)</h5>
              <p class="text-xs text-gray-300">
                Los datos contienen la respuesta objetivo ($y$). Se divide en:<br>
                • <strong>Clasificación:</strong> Salida categórica discreta (ej. spam / no spam, benigno / maligno).<br>
                • <strong>Regresión:</strong> Salida numérica continua (ej. precio de una vivienda, temperatura de mañana).
              </p>
            </div>
            <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4">
              <h5 class="text-purple-400 font-bold text-xs uppercase mb-2">Aprendizaje No Supervisado (Sin Etiquetas)</h5>
              <p class="text-xs text-gray-300">
                Solo disponemos de características ($X$). El modelo descubre agrupaciones o patrones ocultos por sí mismo (ej. segmentación de clientes con K-Means, reducción de dimensionalidad con PCA).
              </p>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "Predecir el valor exacto en dólares de las acciones de una empresa tecnológica para la próxima semana es un problema de:",
            options: [
              "Clasificación binaria",
              "Regresión supervisada (variable objetivo numérica continua)",
              "Aprendizaje por refuerzo sin datos",
              "Clustering no supervisado"
            ],
            correct: 1,
            explanation: "Cuando el valor a estimar es un número continuo en un rango real (como un precio o temperatura) y disponemos de datos históricos etiquetados, se trata de una tarea de Regresión Supervisada."
          }
        ]
      }
    ]
  },

  "prog-ml-construccion-modelo": {
    id: "prog-ml-construccion-modelo",
    title: "14.2 ¿Cómo se construye un modelo?",
    subtitle: "El pipeline de Scikit-Learn: división train_test_split, ajuste con fit(), inferencia con predict() y el dilema sesgo-varianza (underfitting vs overfitting).",
    unit: 14,
    unitTitle: "Unidad 14: Fundamentos de Machine Learning",
    week: 14,
    weekTitle: "Unidad 14: Fundamentos de Machine Learning",
    difficulty: "Avanzada",
    category: "Entrenamiento de Modelos",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 14", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "fit / predict", type: "teal" },
      { text: "Overfitting", type: "amber" }
    ],
    sections: [
      {
        id: "pipeline-construccion-modelo",
        title: "1. El Flujo Formal de Construcción en Scikit-Learn",
        shortTitle: "Flujo de Entrenamiento",
        icon: "fa-cogs",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Cualquier modelo de Machine Learning en Python sigue el protocolo uniforme de la biblioteca <strong>Scikit-Learn</strong>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            from sklearn.model_selection import train_test_split<br>
            from sklearn.linear_model import LogisticRegression<br><br>
            # 1. Separar datos de entrenamiento (80%) y prueba (20%)<br>
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)<br><br>
            # 2. Instanciar estimador y entrenar (ajustar parámetros)<br>
            modelo = LogisticRegression()<br>
            modelo.fit(X_train, y_train)<br><br>
            # 3. Predecir con datos nuevos nunca antes vistos<br>
            predicciones = modelo.predict(X_test)
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Ajuste: Underfitting vs Ajuste Óptimo vs Overfitting",
            description: "Ajusta la complejidad del modelo y observa cómo el sobreajuste memoriza el ruido de entrenamiento pero falla al generalizar:",
            widget: {
              file: "widgets/programacion/u14_entrenamiento_modelo.html",
              title: "Ajuste del Modelo",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-entrenamiento",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevaluación sobre entrenamiento de modelos:</p>`,
        quiz: [
          {
            question: "¿Por qué es un error metodológico crítico evaluar la precisión final de un modelo de ML utilizando el mismo conjunto de datos con el que fue entrenado?",
            options: [
              "Porque la computadora se bloquea por falta de memoria.",
              "Porque se produciría una ilusión de rendimiento perfecto (overfitting): el modelo podría haber memorizado los datos sin aprender a generalizar a situaciones nuevas.",
              "Porque Scikit-Learn arroja un error de sintaxis.",
              "Porque la variable objetivo cambiaría de tipo."
            ],
            correct: 1,
            explanation: "Evaluar con los mismos datos de entrenamiento oculta el sobreajuste (overfitting). Se necesita un conjunto de prueba (Test set) completamente independiente para medir la verdadera capacidad predictiva del modelo."
          }
        ]
      }
    ]
  },

  "prog-ml-evaluacion-modelo": {
    id: "prog-ml-evaluacion-modelo",
    title: "14.3 ¿Cómo se evalúa un modelo?",
    subtitle: "Métricas de clasificación rigurosas: Matriz de Confusión, Exactitud (Accuracy), Precisión, Exhaustividad (Recall) y Puntuación F1-Score.",
    unit: 14,
    unitTitle: "Unidad 14: Fundamentos de Machine Learning",
    week: 14,
    weekTitle: "Unidad 14: Fundamentos de Machine Learning",
    difficulty: "Avanzada",
    category: "Métricas de Rendimiento",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 14", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Matriz de Confusión", type: "teal" },
      { text: "Precision / Recall", type: "purple" }
    ],
    sections: [
      {
        id: "matriz-confusion-metricas",
        title: "1. La Matriz de Confusión y sus Derivadas",
        shortTitle: "Matriz de Confusión",
        icon: "fa-chart-pie",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En problemas de clasificación, la <strong>Exactitud (Accuracy)</strong> puede ser engañosa si los datos están desbalanceados (ej. en detección de fraude, si el 99% de las transacciones son legítimas, un modelo tonto que siempre diga "no fraude" tendría 99% de exactitud pero sería inútil). La <strong>Matriz de Confusión</strong> desglosa el rendimiento real:
          </p>
          <div class="grid grid-cols-2 gap-2.5 my-4 font-mono text-xs text-center">
            <div class="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/40"><strong class="text-emerald-400">Verdadero Positivo (VP):</strong> Acierto positivo</div>
            <div class="bg-red-950/40 p-2.5 rounded border border-red-500/40"><strong class="text-red-400">Falso Positivo (FP):</strong> Error Tipo I (Falsa Alarma)</div>
            <div class="bg-red-950/40 p-2.5 rounded border border-red-500/40"><strong class="text-red-400">Falso Negativo (FN):</strong> Error Tipo II (Peligroso)</div>
            <div class="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/40"><strong class="text-emerald-400">Verdadero Negativo (VN):</strong> Acierto negativo</div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Matriz de Confusión Interactiva",
            description: "Modifica los cuadrantes de predicción y observa el recálculo instantáneo de Accuracy, Precision, Recall y F1-Score:",
            widget: {
              file: "widgets/programacion/u14_matriz_confusion.html",
              title: "Matriz de Confusión",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "precision-vs-recall",
        title: "2. Precision, Recall y F1-Score: ¿Cuál Priorizar?",
        shortTitle: "Precision vs Recall",
        icon: "fa-balance-scale",
        contentHtml: `
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Métrica</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Fórmula</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Cuándo Priorizarla</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="text-sky-400 py-2.5 px-3">Precisión</td>
                  <td class="py-2.5 px-3">VP / (VP + FP)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Cuando los Falsos Positivos son muy costosos (ej. clasificar un correo importante como Spam).</td>
                </tr>
                <tr>
                  <td class="text-purple-400 py-2.5 px-3">Exhaustividad (Recall)</td>
                  <td class="py-2.5 px-3">VP / (VP + FN)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Cuando los Falsos Negativos son críticos (ej. diagnóstico de cáncer; no podemos ignorar un paciente enfermo).</td>
                </tr>
                <tr>
                  <td class="text-amber-400 py-2.5 px-3">F1-Score</td>
                  <td class="py-2.5 px-3">2 · (P · R) / (P + R)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Media armónica cuando se busca un balance óptimo entre Precision y Recall.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        quiz: [
          {
            question: "En un sistema médico para detectar una enfermedad grave y contagiosa, ¿qué métrica debe optimizarse prioritariamente para evitar que pacientes infectados sean dados de alta por error?",
            options: [
              "Precisión",
              "Exhaustividad (Recall / Sensibilidad) para minimizar los Falsos Negativos (FN)",
              "Tiempo de compilación",
              "Solo la exactitud total"
            ],
            correct: 1,
            explanation: "El Recall mide qué proporción de los casos positivos reales logró detectar el modelo. En medicina, un Falso Negativo (decirle a una persona enferma que está sana) es potencialmente fatal, por lo que el Recall es la métrica de máxima prioridad."
          }
        ]
      }
    ]
  }
};


  const TOPIC_REGISTRY = {
    'prog-conceptos-basicos': CONCEPTOS_BASICOS_DATA,
    'prog-intro-algoritmos': CONCEPTOS_BASICOS_DATA,
    'prog-representacion-algoritmos': REPRESENTACION_ALGORITMOS_DATA,
    'prog-expresiones-notacion': EXPRESIONES_NOTACION_DATA,
    'big-o-notation': BIG_O_DATA,
    'bubble-sort': BUBBLE_SORT_DATA,
    'selection-sort': SELECTION_SORT_DATA,
    'insertion-sort': INSERTION_SORT_DATA,
    'merge-sort': MERGE_SORT_DATA,
    'quick-sort': QUICK_SORT_DATA,
    ...TICS_U01_TOPICS,
    ...TICS_U02_TOPICS,
    ...TICS_U03_TOPICS,
    ...TICS_U04_TOPICS,
    ...TICS_U05_TOPICS,
    ...PROG_U02_TOPICS,
    ...PROG_U03_TOPICS,
    ...PROG_U04_TOPICS,
    ...PROG_U05_TOPICS,
    ...PROG_U06_TOPICS,
    ...PROG_U07_TOPICS,
    ...PROG_U08_TOPICS,
    ...PROG_U10_TOPICS,
    ...PROG_U12_TOPICS,
    ...PROG_U13_TOPICS,
    ...PROG_U14_TOPICS
  };

  function getTopicData(topicId, curriculum) {
    const actualId = TOPIC_ALIASES[topicId] || topicId;
    if (TOPIC_REGISTRY[actualId]) {
      return TOPIC_REGISTRY[actualId];
    }

    // Buscar en el currículum activo
    let found = null;
    for (const week of curriculum) {
      const t = week.topics.find(top => top.id === topicId);
      if (t) {
        found = { ...t, weekNumber: week.number, weekTitle: week.title, weekId: week.id };
        break;
      }
    }

    if (!found) return null;

    return {
      id: found.id,
      title: found.title,
      subtitle: `Contenido estructurado para ${found.weekTitle}. Diseñado para integrar animaciones y código paso a paso.`,
      week: found.weekNumber,
      weekTitle: found.weekTitle,
      difficulty: found.difficulty,
      category: "Unidad Temática",
      timeEstimate: found.duration,
      badges: [
        { text: `Unidad ${String(found.unitNumber || found.weekNumber).padStart(2, '0')}`, type: "neutral" },
        { text: found.difficulty, type: found.difficulty === 'Fácil' ? 'easy' : found.difficulty === 'Media' ? 'medium' : 'hard' },
        { text: "En Progreso / Plantilla", type: "blue" }
      ],
      sections: [
        {
          id: "en-que-consiste",
          title: "1. ¿En qué consiste?",
          icon: "fa-book-open",
          contentHtml: `
            <p class="text-base text-gray-300 leading-relaxed mb-4">
              Este tema forma parte fundamental del plan de estudios de <strong>${found.weekTitle}</strong>. Desarrolla las bases conceptuales y la aplicación práctica dentro del curso.
            </p>
            <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
              <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
                <i class="fas fa-bullseye"></i> Objetivos Clave de Aprendizaje
              </h4>
              <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
                <li>Comprender la representación matemática y la memoria subyacente.</li>
                <li>Analizar las invariantes de estado y condiciones de borde.</li>
                <li>Implementar las operaciones canónicas con manejo adecuado de memoria.</li>
              </ul>
            </div>
          `
        },
        {
          id: "animacion-y-desarrollo",
          title: "2. Visualización y Animación",
          icon: "fa-play-circle",
          contentHtml: `
            <div class="bg-[#121622] border-2 border-dashed border-gray-700 rounded-xl p-8 text-center my-4">
              <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl">
                <i class="fas fa-wand-magic-sparkles"></i>
              </div>
              <h4 class="text-base font-semibold text-white mb-1">¡Espacio listo para tu nueva animación interactiva!</h4>
              <p class="text-xs text-gray-400 max-w-lg mx-auto mb-4">
                Puedes agregar una animación interactiva aquí guardando tu archivo HTML en la carpeta <code>widgets/</code> y vinculándolo en la lección.
              </p>
              <div class="inline-flex items-center gap-2 bg-[#1e2638] px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">
                <i class="fas fa-file-code"></i> widgets/${found.id}_visualizer.html
              </div>
            </div>
          `
        }
      ]
    };
  }


  // =========================================================================
  // 2.5. BANCO DE DATOS Y MOTOR - MARATÓN: SOLUCIÓN DE PROBLEMAS
  // =========================================================================

/**
 * BANCO DE PROBLEMAS - MARATÓN: SOLUCIÓN DE PROBLEMAS
 * Colección pedagógica de 43 problemas con casos de prueba, pistas y conceptos.
 */

const MARATON_PROBLEMS = [
  {
    "id": "prob-1000",
    "numero": 1000,
    "titulo": "Hola Mundo!",
    "slug": "hola-mundo",
    "descripcion": "Bienvenido al módulo **Maratón: Solución de Problemas**. Tu primer reto es el saludo tradicional de todo programador: escribir un programa que imprima el mensaje de bienvenida exacto en la consola.",
    "entrada": "Este problema no requiere ningún dato de entrada.",
    "salida": "Debes imprimir el mensaje exacto `Hola Mundo!` (o `Hello World!`), seguido de un salto de línea.",
    "ejemplo_entrada": "",
    "ejemplo_salida": "Hola Mundo!",
    "unidad": "Unidad 01: Fundamentos de la programación",
    "unidadId": "unidad-01",
    "temas": [
      "Fundamentos"
    ],
    "conceptos": [
      "print()",
      "salida estándar",
      "cadenas de texto"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "# Escribe tu primer programa de Maratón aquí\nprint(\"Hola Mundo!\")\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "",
        "salida_esperada": "Hola Mundo!",
        "visible": true,
        "descripcion": "Caso base de bienvenida"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "",
        "salida_esperada": "Hola Mundo!",
        "visible": false
      }
    ],
    "pistas": [
      "Utiliza la función print() para enviar texto a la salida estándar.",
      "Recuerda encerrar el texto entre comillas dobles o simples: print(\"Hola Mundo!\").",
      "Verifica que las mayúsculas, minúsculas y el signo de exclamación coincidan con la especificación."
    ],
    "retroalimentacion": {
      "exito": "¡Felicitaciones! Has completado tu primer reto en Maratón. La función print() es tu ventana para comunicarte con el usuario.",
      "error_comun": "Revisa los caracteres exactos: asegúrate de no agregar espacios de más ni omitir la exclamación.",
      "pista_falla": "En Python, los textos literales deben estar delimitados por comillas."
    },
    "fuente": "beecrowd",
    "fuente_id": 1000,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1000",
    "activo": true,
    "orden": 1
  },
  {
    "id": "prob-1001",
    "numero": 1001,
    "titulo": "Extremadamente Básico",
    "slug": "extremadamente-basico",
    "descripcion": "Lee dos variables enteras, denominadas **A** y **B**, y calcula la suma de ambas, asignando el resultado a la variable **X**. Muestra el resultado en el formato especificado.",
    "entrada": "El archivo de entrada contiene dos valores enteros, cada uno en una línea separada.",
    "salida": "Imprime la letra `X` (en mayúscula) con un espacio antes y después del signo igual, seguido del valor de la suma.",
    "ejemplo_entrada": "10\n9",
    "ejemplo_salida": "X = 19",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "input()",
      "int()",
      "operador +",
      "asignación de variables"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "# Lee las dos variables enteras y muestra X = resultado\nA = int(input())\nB = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "10\n9",
        "salida_esperada": "X = 19",
        "visible": true,
        "descripcion": "Suma de enteros positivos"
      },
      {
        "id": 2,
        "entrada": "-10\n4",
        "salida_esperada": "X = -6",
        "visible": true,
        "descripcion": "Suma con entero negativo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "15\n-7",
        "salida_esperada": "X = 8",
        "visible": false
      },
      {
        "id": 4,
        "entrada": "0\n0",
        "salida_esperada": "X = 0",
        "visible": false
      }
    ],
    "pistas": [
      "La función input() retorna una cadena; debes convertirla a número entero con int(input()).",
      "Crea la variable X = A + B.",
      "Para imprimir con el formato exacto usa print(f\"X = {X}\") o print(\"X =\", X)."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente! Has dominado la lectura de datos con conversión de tipos y la asignación aritmética.",
      "error_comun": "Ten cuidado con los espacios: debe ser 'X = resultado', no 'X=resultado'.",
      "pista_falla": "Recuerda que si sumas dos cadenas sin int(), se concatenarán en lugar de sumarse numéricamente."
    },
    "fuente": "beecrowd",
    "fuente_id": 1001,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1001",
    "activo": true,
    "orden": 2
  },
  {
    "id": "prob-1002",
    "numero": 1002,
    "titulo": "Área del Círculo",
    "slug": "area-del-circulo",
    "descripcion": "La fórmula para calcular el área de una circunferencia es: $A = \\pi \\cdot R^2$. Para este problema considera el valor de $\\pi = 3.14159$. Lee el valor del radio $R$, calcula el área correspondiente y muéstrala con 4 cifras decimales.",
    "entrada": "La entrada contiene un valor de punto flotante (precisión doble) que representa el radio $R$.",
    "salida": "Imprime el mensaje `A=` seguido del valor del área calculada con 4 lugares después del punto decimal.",
    "ejemplo_entrada": "2.00",
    "ejemplo_salida": "A=12.5664",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "float()",
      "potencia **",
      "formato de números flotantes :.4f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "# Calcula el área de la circunferencia con pi = 3.14159\nR = float(input())\npi = 3.14159\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "2.00",
        "salida_esperada": "A=12.5664",
        "visible": true,
        "descripcion": "Radio pequeño"
      },
      {
        "id": 2,
        "entrada": "100.64",
        "salida_esperada": "A=31819.3103",
        "visible": true,
        "descripcion": "Radio con decimales"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "150.00",
        "salida_esperada": "A=70685.7750",
        "visible": false
      }
    ],
    "pistas": [
      "Convierte la entrada a decimal con float(input()).",
      "Calcula la potencia usando R ** 2 o R * R.",
      "Para formatear a 4 decimales usa f-strings: print(f\"A={area:.4f}\")."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo! El formateo de números en coma flotante es indispensable en ingeniería y ciencias computacionales.",
      "error_comun": "Verifica que uses pi = 3.14159 y no la constante math.pi completa para asegurar la precisión requerida.",
      "pista_falla": "Usa la sintaxis :.4f para limitar a exactamente 4 cifras decimales."
    },
    "fuente": "beecrowd",
    "fuente_id": 1002,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1002",
    "activo": true,
    "orden": 3
  },
  {
    "id": "prob-1003",
    "numero": 1003,
    "titulo": "Suma Simple",
    "slug": "suma-simple",
    "descripcion": "Lee dos valores enteros llamados A y B. Calcula la suma entre ellos y guárdala en una variable llamada SOMA. Muestra el resultado.",
    "entrada": "Dos números enteros ingresados en líneas separadas.",
    "salida": "Imprime `SOMA = ` seguido del valor de la suma con un espacio antes y después del signo igual.",
    "ejemplo_entrada": "30\n10",
    "ejemplo_salida": "SOMA = 40",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "input()",
      "int()",
      "variables",
      "operadores aritméticos"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = int(input())\nB = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "30\n10",
        "salida_esperada": "SOMA = 40",
        "visible": true,
        "descripcion": "Suma positiva"
      },
      {
        "id": 2,
        "entrada": "-30\n10",
        "salida_esperada": "SOMA = -20",
        "visible": true,
        "descripcion": "Suma con negativo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "0\n0",
        "salida_esperada": "SOMA = 0",
        "visible": false
      }
    ],
    "pistas": [
      "Asigna la suma a la variable SOMA = A + B.",
      "Muestra el resultado con print(f\"SOMA = {SOMA}\").",
      "Caso de borde: Si la suma involucra números negativos, el operador + mantiene la regla de los signos (ej: -30 + 10 = -20). No agregues lógica condicional innecesaria."
    ],
    "retroalimentacion": {
      "exito": "¡Bien hecho! Has realizado una suma secuencial limpia.",
      "error_comun": "Asegúrate de que la palabra SOMA esté completamente en mayúsculas.",
      "pista_falla": "Revisa los espacios alrededor del signo igual: 'SOMA = valor'."
    },
    "fuente": "beecrowd",
    "fuente_id": 1003,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1003",
    "activo": true,
    "orden": 4
  },
  {
    "id": "prob-1004",
    "numero": 1004,
    "titulo": "Producto Simple",
    "slug": "producto-simple",
    "descripcion": "Lee dos valores enteros. A continuación, calcula el producto entre ellos y almacena el resultado en una variable llamada PROD. Muestra el resultado.",
    "entrada": "Dos números enteros en líneas separadas.",
    "salida": "Imprime `PROD = ` seguido del valor del producto.",
    "ejemplo_entrada": "3\n9",
    "ejemplo_salida": "PROD = 27",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "operador *",
      "multiplicación de enteros"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = int(input())\nB = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "3\n9",
        "salida_esperada": "PROD = 27",
        "visible": true,
        "descripcion": "Multiplicación positiva"
      },
      {
        "id": 2,
        "entrada": "-30\n10",
        "salida_esperada": "PROD = -300",
        "visible": true,
        "descripcion": "Signos distintos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "0\n9",
        "salida_esperada": "PROD = 0",
        "visible": false
      }
    ],
    "pistas": [
      "En Python, la multiplicación se realiza con el asterisco (*).",
      "Asigna PROD = A * B y muestra print(f\"PROD = {PROD}\").",
      "Caso de borde: Considera que la multiplicación por 0 debe dar exactamente 0 (PROD = 0) y el producto de dos números negativos da un resultado positivo."
    ],
    "retroalimentacion": {
      "exito": "¡Correcto! Has aplicado el operador de producto aritmético.",
      "error_comun": "Verifica que la salida sea 'PROD = valor' con mayúsculas exactas.",
      "pista_falla": "En Python: multiplicación es * y no x."
    },
    "fuente": "beecrowd",
    "fuente_id": 1004,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1004",
    "activo": true,
    "orden": 5
  },
  {
    "id": "prob-1005",
    "numero": 1005,
    "titulo": "Promedio 1",
    "slug": "promedio-1",
    "descripcion": "Lee dos notas de un estudiante: nota A y nota B. Calcula el promedio ponderado sabiendo que la nota A tiene un peso de 3.5 y la nota B tiene un peso de 7.5 (la suma de los pesos es 11). Muestra el promedio con 5 cifras decimales.",
    "entrada": "Dos números de punto flotante correspondientes a las notas del estudiante.",
    "salida": "Imprime `MEDIA = ` seguido del promedio ponderado formateado a 5 decimales.",
    "ejemplo_entrada": "5.0\n7.1",
    "ejemplo_salida": "MEDIA = 6.43182",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "promedio ponderado",
      "división flotante",
      "formato :.5f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = float(input())\nB = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5.0\n7.1",
        "salida_esperada": "MEDIA = 6.43182",
        "visible": true,
        "descripcion": "Promedio ponderado estándar"
      },
      {
        "id": 2,
        "entrada": "0.0\n7.1",
        "salida_esperada": "MEDIA = 4.84091",
        "visible": true,
        "descripcion": "Caso con nota cero"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "10.0\n10.0",
        "salida_esperada": "MEDIA = 10.00000",
        "visible": false
      }
    ],
    "pistas": [
      "Fórmula del promedio ponderado: (A * 3.5 + B * 7.5) / 11.0.",
      "Para 5 decimales utiliza :.5f.",
      "Caso de borde y formato: La suma de pesos es 3.5 + 7.5 = 11. Recuerda redondear a 5 decimales con f'{media:.5f}' para evitar imprecisiones de coma flotante."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente cálculo! El promedio ponderado es fundamental para sistemas de calificación.",
      "error_comun": "Recuerda agrupar la suma con paréntesis antes de dividir entre 11.",
      "pista_falla": "Usa f'MEDIA = {media:.5f}'."
    },
    "fuente": "beecrowd",
    "fuente_id": 1005,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1005",
    "activo": true,
    "orden": 6
  },
  {
    "id": "prob-1006",
    "numero": 1006,
    "titulo": "Promedio 2",
    "slug": "promedio-2",
    "descripcion": "Lee tres notas: A, B y C. Calcula el promedio ponderado sabiendo que el peso de A es 2, el de B es 3 y el de C es 5 (suma de pesos: 10). Muestra el promedio con 1 cifra decimal.",
    "entrada": "Tres números de punto flotante en líneas separadas.",
    "salida": "Imprime `MEDIA = ` seguido del promedio con un decimal.",
    "ejemplo_entrada": "5.0\n6.0\n7.0",
    "ejemplo_salida": "MEDIA = 6.3",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "promedio de tres valores",
      "pesos 2, 3 y 5",
      "formato :.1f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = float(input())\nB = float(input())\nC = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5.0\n6.0\n7.0",
        "salida_esperada": "MEDIA = 6.3",
        "visible": true,
        "descripcion": "Notas intermedias"
      },
      {
        "id": 2,
        "entrada": "5.0\n10.0\n10.0",
        "salida_esperada": "MEDIA = 9.0",
        "visible": true,
        "descripcion": "Notas altas"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "10.0\n10.0\n5.0",
        "salida_esperada": "MEDIA = 7.5",
        "visible": false
      }
    ],
    "pistas": [
      "Fórmula: (A * 2 + B * 3 + C * 5) / 10.0.",
      "Formatea la salida con print(f\"MEDIA = {media:.1f}\").",
      "Caso de borde y formato: La suma de pesos es 2 + 3 + 5 = 10. Asegúrate de mostrar exactamente 1 decimal con f'{media:.1f}'."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien! Has aplicado ponderaciones múltiples con precisión.",
      "error_comun": "Verifica que el divisor sea 10.0 (la suma de 2 + 3 + 5).",
      "pista_falla": "Usa :.1f para una sola cifra decimal."
    },
    "fuente": "beecrowd",
    "fuente_id": 1006,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1006",
    "activo": true,
    "orden": 7
  },
  {
    "id": "prob-1007",
    "numero": 1007,
    "titulo": "Diferencia",
    "slug": "diferencia",
    "descripcion": "Lee cuatro valores enteros (A, B, C y D). Calcula y muestra la diferencia del producto de A y B por el producto de C y D según la fórmula: $DIFERENCA = (A \\cdot B - C \\cdot D)$.",
    "entrada": "Cuatro números enteros en líneas separadas.",
    "salida": "Imprime `DIFERENCA = ` seguido del valor de la diferencia calculada.",
    "ejemplo_entrada": "5\n6\n7\n8",
    "ejemplo_salida": "DIFERENCA = -26",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "precedencia de operadores",
      "multiplicación y resta"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = int(input())\nB = int(input())\nC = int(input())\nD = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5\n6\n7\n8",
        "salida_esperada": "DIFERENCA = -26",
        "visible": true,
        "descripcion": "Caso con resultado negativo"
      },
      {
        "id": 2,
        "entrada": "0\n0\n7\n8",
        "salida_esperada": "DIFERENCA = -56",
        "visible": true,
        "descripcion": "Caso con ceros"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "5\n6\n-7\n8",
        "salida_esperada": "DIFERENCA = 86",
        "visible": false
      }
    ],
    "pistas": [
      "Calcula dif = (A * B - C * D).",
      "Muestra con print(f\"DIFERENCA = {dif}\").",
      "Caso de borde: El cálculo (A * B - C * D) puede generar diferencias negativas si C * D es mayor que A * B. El formato requiere 'DIFERENCA = ' con mayúsculas exactas."
    ],
    "retroalimentacion": {
      "exito": "¡Correcto! La precedencia aritmética resuelve multiplicaciones antes que restas.",
      "error_comun": "Cuida que el identificador sea DIFERENCA sin tildes ni caracteres especiales.",
      "pista_falla": "En Python: (A * B - C * D)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1007,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1007",
    "activo": true,
    "orden": 8
  },
  {
    "id": "prob-1008",
    "numero": 1008,
    "titulo": "Salario",
    "slug": "salario",
    "descripcion": "Escribe un programa que lea el número de un empleado, el número de horas trabajadas y el valor que recibe por hora. Calcula el salario del empleado y muestra su número y salario con 2 decimales.",
    "entrada": "Un entero (número del empleado), un entero (horas trabajadas) y un flotante (pago por hora).",
    "salida": "Imprime `NUMBER = ` con el número del empleado, y en la siguiente línea `SALARY = U$ ` seguido del salario con dos decimales.",
    "ejemplo_entrada": "25\n100\n5.50",
    "ejemplo_salida": "NUMBER = 25\nSALARY = U$ 550.00",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "múltiples tipos de datos",
      "salida en varias líneas",
      "formato monetario :.2f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "num = int(input())\nhoras = int(input())\nvalor_hora = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "25\n100\n5.50",
        "salida_esperada": "NUMBER = 25\nSALARY = U$ 550.00",
        "visible": true,
        "descripcion": "Empleado estándar"
      },
      {
        "id": 2,
        "entrada": "1\n200\n20.50",
        "salida_esperada": "NUMBER = 1\nSALARY = U$ 4100.00",
        "visible": true,
        "descripcion": "Salario mayor"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "6\n145\n15.55",
        "salida_esperada": "NUMBER = 6\nSALARY = U$ 2254.75",
        "visible": false
      }
    ],
    "pistas": [
      "El salario es horas * valor_hora.",
      "Recuerda incluir 'U$ ' con espacio antes del monto.",
      "Formatea el salario con :.2f."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente! Has manejado salidas en dos líneas con formato exacto.",
      "error_comun": "Revisa el espacio entre U$ y la cifra: 'SALARY = U$ 550.00'.",
      "pista_falla": "print(f'NUMBER = {num}\\nSALARY = U$ {salario:.2f}')."
    },
    "fuente": "beecrowd",
    "fuente_id": 1008,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1008",
    "activo": true,
    "orden": 9
  },
  {
    "id": "prob-1009",
    "numero": 1009,
    "titulo": "Salario con Bonus",
    "slug": "salario-con-bonus",
    "descripcion": "Lee el nombre de un vendedor, su salario fijo y el total de ventas efectuadas en el mes (en dinero). Sabiendo que el vendedor recibe un 15% de comisión sobre sus ventas, calcula y muestra su salario total a fin de mes con 2 cifras decimales.",
    "entrada": "Una cadena (nombre), un flotante (salario base) y un flotante (ventas totales).",
    "salida": "Imprime `TOTAL = R$ ` seguido del salario total a cobrar con 2 decimales.",
    "ejemplo_entrada": "JOAO\n500.00\n1230.30",
    "ejemplo_salida": "TOTAL = R$ 684.54",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "porcentajes",
      "cálculo de comisiones",
      "formato :.2f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "nombre = input()\nsalario = float(input())\nventas = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "JOAO\n500.00\n1230.30",
        "salida_esperada": "TOTAL = R$ 684.54",
        "visible": true,
        "descripcion": "Ventas con comisión"
      },
      {
        "id": 2,
        "entrada": "PEDRO\n700.00\n0.00",
        "salida_esperada": "TOTAL = R$ 700.00",
        "visible": true,
        "descripcion": "Sin ventas"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "MANGOJATA\n1700.00\n1230.50",
        "salida_esperada": "TOTAL = R$ 1884.58",
        "visible": false
      }
    ],
    "pistas": [
      "La comisión es ventas * 0.15.",
      "El total es salario + comisión.",
      "Muestra con print(f\"TOTAL = R$ {total:.2f}\")."
    ],
    "retroalimentacion": {
      "exito": "¡Bien hecho! Los cálculos comerciales de comisiones y bonos son esenciales en programación aplicada.",
      "error_comun": "No olvides leer el nombre del vendedor con input(), aunque no se use en el cálculo.",
      "pista_falla": "15% equivale a multiplicar por 0.15."
    },
    "fuente": "beecrowd",
    "fuente_id": 1009,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1009",
    "activo": true,
    "orden": 10
  },
  {
    "id": "prob-1010",
    "numero": 1010,
    "titulo": "Cálculo Simple",
    "slug": "calculo-simple",
    "descripcion": "En este problema el objetivo es leer el código de la pieza 1, su cantidad y su precio unitario. Luego, leer los datos de la pieza 2 (código, cantidad y precio unitario). Calcula y muestra el valor total a pagar con 2 decimales.",
    "entrada": "Dos líneas. Cada línea contiene el código (int), la cantidad (int) y el valor unitario (float) separados por un espacio.",
    "salida": "Imprime `VALOR A PAGAR: R$ ` seguido del monto total con 2 decimales.",
    "ejemplo_entrada": "12 1 5.30\n16 2 5.10",
    "ejemplo_salida": "VALOR A PAGAR: R$ 15.50",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "split()",
      "desempaquetado",
      "múltiples valores por línea"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "# Lee dos líneas con valores separados por espacio\nlinea1 = input().split()\nlinea2 = input().split()\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "12 1 5.30\n16 2 5.10",
        "salida_esperada": "VALOR A PAGAR: R$ 15.50",
        "visible": true,
        "descripcion": "Dos piezas distintas"
      },
      {
        "id": 2,
        "entrada": "13 2 15.30\n161 4 5.20",
        "salida_esperada": "VALOR A PAGAR: R$ 51.40",
        "visible": true,
        "descripcion": "Cantidades múltiples"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "1 1 15.10\n2 1 15.10",
        "salida_esperada": "VALOR A PAGAR: R$ 30.20",
        "visible": false
      }
    ],
    "pistas": [
      "Usa input().split() para dividir la línea por espacios.",
      "Para la primera pieza: c1, q1, v1 = linea1; q1 = int(q1); v1 = float(v1).",
      "Total = q1 * v1 + q2 * v2."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente dominio de input().split()! Esta técnica es crucial para leer datos tabulares en una sola línea.",
      "error_comun": "Recuerda convertir la cantidad a int() y el precio a float().",
      "pista_falla": "Usa f'VALOR A PAGAR: R$ {total:.2f}'."
    },
    "fuente": "beecrowd",
    "fuente_id": 1010,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1010",
    "activo": true,
    "orden": 11
  },
  {
    "id": "prob-1011",
    "numero": 1011,
    "titulo": "Esfera",
    "slug": "esfera",
    "descripcion": "Haz un programa que calcule y muestre el volumen de una esfera a partir del valor de su radio $R$. La fórmula es: $V = (4/3) \\cdot \\pi \\cdot R^3$. Considera $\\pi = 3.14159$.",
    "entrada": "Un valor numérico correspondiente al radio $R$.",
    "salida": "Imprime `VOLUME = ` seguido del volumen calculado con 3 cifras decimales.",
    "ejemplo_entrada": "3",
    "ejemplo_salida": "VOLUME = 113.097",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "fórmulas geométricas",
      "potencia cúbica ** 3",
      "formato :.3f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "R = float(input())\npi = 3.14159\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "3",
        "salida_esperada": "VOLUME = 113.097",
        "visible": true,
        "descripcion": "Radio pequeño"
      },
      {
        "id": 2,
        "entrada": "15",
        "salida_esperada": "VOLUME = 14137.155",
        "visible": true,
        "descripcion": "Radio mediano"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "1523",
        "salida_esperada": "VOLUME = 14797486501.627",
        "visible": false
      }
    ],
    "pistas": [
      "Usa (4.0 / 3) * pi * (R ** 3).",
      "Cuidado con la división: en Python 3 '4/3' da 1.3333... de forma flotante.",
      "Formatea a 3 decimales con :.3f."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo con cálculos tridimensionales!",
      "error_comun": "Asegúrate de elevar R al cubo (R**3) y no al cuadrado.",
      "pista_falla": "vol = (4/3) * 3.14159 * (R**3)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1011,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1011",
    "activo": true,
    "orden": 12
  },
  {
    "id": "prob-1012",
    "numero": 1012,
    "titulo": "Área",
    "slug": "area",
    "descripcion": "Escribe un programa que lea tres valores flotantes: A, B y C. Luego, calcula y muestra:\na) El área del triángulo rectángulo que tiene base A y altura C.\nb) El área del círculo de radio C (pi = 3.14159).\nc) El área del trapecio que tiene bases A y B, y altura C.\nd) El área del cuadrado que tiene lado B.\ne) El área del rectángulo que tiene lados A y B.",
    "entrada": "Una línea con tres valores flotantes: A, B y C.",
    "salida": "El archivo de salida debe contener 5 líneas con los resultados de las áreas con 3 cifras decimales.",
    "ejemplo_entrada": "3.0 4.0 5.2",
    "ejemplo_salida": "TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "geometría computacional",
      "fórmulas múltiples",
      "formato :.3f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A, B, C = map(float, input().split())\npi = 3.14159\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "3.0 4.0 5.2",
        "salida_esperada": "TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000",
        "visible": true,
        "descripcion": "Caso base figuras"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "12.7 10.4 15.2",
        "salida_esperada": "TRIANGULO: 96.520\nCIRCULO: 725.833\nTRAPEZIO: 175.560\nQUADRADO: 108.160\nRETANGULO: 132.080",
        "visible": false
      }
    ],
    "pistas": [
      "Triángulo: (A * C) / 2.",
      "Círculo: pi * (C ** 2).",
      "Trapecio: ((A + B) * C) / 2.",
      "Cuadrado: B * B.",
      "Rectángulo: A * B."
    ],
    "retroalimentacion": {
      "exito": "¡Impresionante! Has resuelto un conjunto completo de cálculos geométricos.",
      "error_comun": "Revisa los nombres de las figuras: TRIANGULO, CIRCULO, TRAPEZIO, QUADRADO, RETANGULO.",
      "pista_falla": "Recuerda que el radio del círculo es C y el lado del cuadrado es B."
    },
    "fuente": "beecrowd",
    "fuente_id": 1012,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1012",
    "activo": true,
    "orden": 13
  },
  {
    "id": "prob-1013",
    "numero": 1013,
    "titulo": "El Mayor",
    "slug": "el-mayor",
    "descripcion": "Haz un programa que lea tres valores enteros y presente el mayor seguido del mensaje `eh o maior`. Puedes usar condicionales o la fórmula para comparar de a pares.",
    "entrada": "Tres valores enteros en una misma línea.",
    "salida": "Imprime el mayor de los tres valores seguido de un espacio y `eh o maior`.",
    "ejemplo_entrada": "7 14 106",
    "ejemplo_salida": "106 eh o maior",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "if",
      "max()",
      "comparaciones"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "a, b, c = map(int, input().split())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "7 14 106",
        "salida_esperada": "106 eh o maior",
        "visible": true,
        "descripcion": "Mayor al final"
      },
      {
        "id": 2,
        "entrada": "217 14 6",
        "salida_esperada": "217 eh o maior",
        "visible": true,
        "descripcion": "Mayor al inicio"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "10 20 15",
        "salida_esperada": "20 eh o maior",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes usar condicionales: si a >= b y a >= c el mayor es a, etc.",
      "También puedes usar la función integrada max(a, b, c).",
      "Imprime print(f\"{mayor} eh o maior\")."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente lógica de comparación!",
      "error_comun": "Ten cuidado con el texto exacto: 'eh o maior' en minúsculas.",
      "pista_falla": "mayor = max(a, b, c)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1013,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1013",
    "activo": true,
    "orden": 14
  },
  {
    "id": "prob-1014",
    "numero": 1014,
    "titulo": "Consumo",
    "slug": "consumo",
    "descripcion": "Calcula el consumo promedio de un automóvil a partir de la distancia total recorrida (en km) y el total de combustible consumido (en litros). Muestra el resultado con 3 cifras decimales seguido de `km/l`.",
    "entrada": "Un entero X (distancia en km) y un flotante Y (combustible en litros).",
    "salida": "Imprime el valor que representa el consumo promedio con 3 decimales, seguido de un espacio y `km/l`.",
    "ejemplo_entrada": "500\n35.0",
    "ejemplo_salida": "14.286 km/l",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "tasa de consumo",
      "división flotante",
      "formato :.3f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "X = int(input())\nY = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "500\n35.0",
        "salida_esperada": "14.286 km/l",
        "visible": true,
        "descripcion": "Consumo estándar"
      },
      {
        "id": 2,
        "entrada": "2254\n147.4",
        "salida_esperada": "15.292 km/l",
        "visible": true,
        "descripcion": "Viaje largo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "4554\n464.6",
        "salida_esperada": "9.802 km/l",
        "visible": false
      }
    ],
    "pistas": [
      "El consumo promedio es distancia / combustible: X / Y.",
      "Formatea con print(f\"{consumo:.3f} km/l\").",
      "Caso de borde y formato: Asegúrate de convertir la distancia a entero (o float) y el combustible a float. La salida debe tener exactamente 3 decimales seguidos de ' km/l'."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien! El cálculo de ratios es ampliamente utilizado.",
      "error_comun": "Asegúrate de incluir 'km/l' con un espacio después del número.",
      "pista_falla": "consumo = X / Y."
    },
    "fuente": "beecrowd",
    "fuente_id": 1014,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1014",
    "activo": true,
    "orden": 15
  },
  {
    "id": "prob-1015",
    "numero": 1015,
    "titulo": "Distancia Entre dos Puntos",
    "slug": "distancia-entre-dos-puntos",
    "descripcion": "Lee los cuatro valores correspondientes a las coordenadas de dos puntos en el plano: $p_1 = (x_1, y_1)$ y $p_2 = (x_2, y_2)$. Calcula la distancia euclidiana entre ellos usando la fórmula $D = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ y muéstrala con 4 decimales.",
    "entrada": "Dos líneas. Cada línea contiene dos valores flotantes separados por un espacio.",
    "salida": "Imprime el valor de la distancia con 4 cifras decimales.",
    "ejemplo_entrada": "1.0 7.0\n5.0 9.0",
    "ejemplo_salida": "4.4721",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "fórmula euclidiana",
      "raíz cuadrada math.sqrt o ** 0.5",
      "formato :.4f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "import math\nx1, y1 = map(float, input().split())\nx2, y2 = map(float, input().split())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "1.0 7.0\n5.0 9.0",
        "salida_esperada": "4.4721",
        "visible": true,
        "descripcion": "Puntos cuadrante 1"
      },
      {
        "id": 2,
        "entrada": "-2.5 0.4\n12.1 7.3",
        "salida_esperada": "16.1484",
        "visible": true,
        "descripcion": "Coordenadas con negativos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "2.5 -0.4\n-12.2 7.0",
        "salida_esperada": "16.4575",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes calcular la raíz usando math.sqrt() o elevando a la 0.5: ** 0.5.",
      "dist = math.sqrt((x2 - x1)**2 + (y2 - y1)**2).",
      "Muestra con print(f\"{dist:.4f}\")."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo aplicando geometría analítica en Python!",
      "error_comun": "Revisa los signos de resta: (x2 - x1)**2.",
      "pista_falla": "La raíz cuadrada de z se puede calcular como z ** 0.5."
    },
    "fuente": "beecrowd",
    "fuente_id": 1015,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1015",
    "activo": true,
    "orden": 16
  },
  {
    "id": "prob-1016",
    "numero": 1016,
    "titulo": "Distancia",
    "slug": "distancia",
    "descripcion": "Dos autos (X e Y) parten en la misma dirección. El auto X sale con una velocidad constante de 60 km/h y el auto Y sale con una velocidad constante de 90 km/h. En una hora (60 minutos), el auto Y se aleja 30 kilómetros del auto X, es decir, se aleja 1 kilómetro cada 2 minutos. Lee la distancia (en km) y calcula cuánto tiempo le toma al auto Y tomar esa distancia respecto al auto X.",
    "entrada": "Un valor entero que representa la distancia en kilómetros.",
    "salida": "Imprime el tiempo necesario seguido del texto `minutos`.",
    "ejemplo_entrada": "30",
    "ejemplo_salida": "60 minutos",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "velocidad relativa",
      "física computacional"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "distancia = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "30",
        "salida_esperada": "60 minutos",
        "visible": true,
        "descripcion": "Distancia de 30 km"
      },
      {
        "id": 2,
        "entrada": "110",
        "salida_esperada": "220 minutos",
        "visible": true,
        "descripcion": "Distancia de 110 km"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "7",
        "salida_esperada": "14 minutos",
        "visible": false
      }
    ],
    "pistas": [
      "Si se aleja 1 km cada 2 minutos, el tiempo total en minutos es distancia * 2.",
      "Muestra con print(f\"{distancia * 2} minutos\").",
      "Caso de borde y lógica: Dado que el carro Y se aleja a 1 km cada 2 minutos (30 km/h de velocidad relativa), la fórmula directa es distancia * 2 minutos."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente razonamiento sobre velocidad relativa!",
      "error_comun": "Asegúrate de incluir la palabra 'minutos' con espacio.",
      "pista_falla": "tiempo = distancia * 2."
    },
    "fuente": "beecrowd",
    "fuente_id": 1016,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1016",
    "activo": true,
    "orden": 17
  },
  {
    "id": "prob-1017",
    "numero": 1017,
    "titulo": "Combustible Gastado",
    "slug": "combustible-gastado",
    "descripcion": "Un automóvil rinde 12 km/L de combustible. Escribe un programa para calcular y mostrar la cantidad de litros de combustible gastados en un viaje, dados el tiempo gastado (en horas) y la velocidad media (en km/h).",
    "entrada": "Dos enteros: el tiempo gastado en horas y la velocidad media en km/h.",
    "salida": "Imprime la cantidad de litros consumidos con 3 cifras decimales.",
    "ejemplo_entrada": "10\n85",
    "ejemplo_salida": "70.833",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "distancia = tiempo * velocidad",
      "litros = distancia / 12",
      "formato :.3f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "tiempo = int(input())\nvelocidad = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "10\n85",
        "salida_esperada": "70.833",
        "visible": true,
        "descripcion": "Viaje largo"
      },
      {
        "id": 2,
        "entrada": "2\n92",
        "salida_esperada": "15.333",
        "visible": true,
        "descripcion": "Viaje corto"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "22\n67",
        "salida_esperada": "122.833",
        "visible": false
      }
    ],
    "pistas": [
      "Primero calcula la distancia: distancia = tiempo * velocidad.",
      "Luego calcula los litros dividiendo entre 12: litros = distancia / 12.",
      "Formatea a 3 decimales con print(f\"{litros:.3f}\")."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien resuelto!",
      "error_comun": "No dividas entre 12 con división entera //, usa división flotante /.",
      "pista_falla": "litros = (tiempo * velocidad) / 12.0."
    },
    "fuente": "beecrowd",
    "fuente_id": 1017,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1017",
    "activo": true,
    "orden": 18
  },
  {
    "id": "prob-1018",
    "numero": 1018,
    "titulo": "Billetes",
    "slug": "billetes",
    "descripcion": "Lee un valor entero. A continuación, calcula el menor número posible de billetes en los que se puede descomponer el valor. Los billetes posibles son de 100, 50, 20, 10, 5, 2 y 1. Muestra el valor leído y la relación de billetes.",
    "entrada": "Un número entero positivo.",
    "salida": "Imprime el valor leído y a continuación la cantidad de billetes de cada denominación.",
    "ejemplo_entrada": "576",
    "ejemplo_salida": "576\n5 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n1 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n0 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores",
      "Ciclos"
    ],
    "conceptos": [
      "algoritmo voraz / greedy",
      "división entera //",
      "módulo %"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "valor = int(input())\nprint(valor)\nbilletes = [100, 50, 20, 10, 5, 2, 1]\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "576",
        "salida_esperada": "576\n5 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n1 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n0 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00",
        "visible": true,
        "descripcion": "Descomposición estándar"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "11257",
        "salida_esperada": "11257\n112 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n0 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n1 nota(s) de R$ 2,00\n0 nota(s) de R$ 1,00",
        "visible": false
      },
      {
        "id": 3,
        "entrada": "503",
        "salida_esperada": "503\n5 nota(s) de R$ 100,00\n0 nota(s) de R$ 50,00\n0 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n0 nota(s) de R$ 5,00\n1 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00",
        "visible": false
      }
    ],
    "pistas": [
      "Primero imprime el valor original: print(valor).",
      "Para cada billete: cantidad = resto // billete; resto = resto % billete.",
      "Formato: f\"{cantidad} nota(s) de R$ {billete},00\"."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente algoritmo voraz de descomposición de cambio!",
      "error_comun": "Recuerda imprimir el valor original antes de la lista de billetes.",
      "pista_falla": "Usa una lista con [100, 50, 20, 10, 5, 2, 1] y un ciclo for."
    },
    "fuente": "beecrowd",
    "fuente_id": 1018,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1018",
    "activo": true,
    "orden": 19
  },
  {
    "id": "prob-1020",
    "numero": 1020,
    "titulo": "Edad en Días",
    "slug": "edad-en-dias",
    "descripcion": "Lee un valor entero correspondiente a la edad de una persona en días y muéstralo en años, meses y días, seguido por el texto respectivo. Considera el año con 365 días y el mes con 30 días.",
    "entrada": "Un valor entero que representa la cantidad de días.",
    "salida": "Tres líneas: `X ano(s)`, `Y mes(es)`, `Z dia(s)`.",
    "ejemplo_entrada": "400",
    "ejemplo_salida": "1 ano(s)\n1 mes(es)\n5 dia(s)",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "división entera //",
      "resto %",
      "conversión temporal"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "dias = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "400",
        "salida_esperada": "1 ano(s)\n1 mes(es)\n5 dia(s)",
        "visible": true,
        "descripcion": "Más de un año"
      },
      {
        "id": 2,
        "entrada": "800",
        "salida_esperada": "2 ano(s)\n2 mes(es)\n10 dia(s)",
        "visible": true,
        "descripcion": "Más de dos años"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "30",
        "salida_esperada": "0 ano(s)\n1 mes(es)\n0 dia(s)",
        "visible": false
      }
    ],
    "pistas": [
      "Años = dias // 365.",
      "Resto = dias % 365.",
      "Meses = resto // 30; Días restantes = resto % 30."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo dominando la aritmética modular!",
      "error_comun": "Considera exactamente 365 días por año y 30 días por mes según el enunciado.",
      "pista_falla": "Usa // para el cociente entero y % para el resto."
    },
    "fuente": "beecrowd",
    "fuente_id": 1020,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1020",
    "activo": true,
    "orden": 20
  },
  {
    "id": "prob-1043",
    "numero": 1043,
    "titulo": "Triángulo",
    "slug": "triangulo",
    "descripcion": "Lee tres valores de punto flotante (A, B y C) y verifica si con ellos es posible formar un triángulo. De ser posible, calcula el perímetro del triángulo y muéstralo con el mensaje `Perimetro = XX.X`. Si no es posible, calcula el área del trapecio que tiene a A y B como bases y a C como altura, mostrando `Area = XX.X`.",
    "entrada": "Tres valores flotantes en una sola línea.",
    "salida": "Imprime `Perimetro = ` o `Area = ` con un decimal.",
    "ejemplo_entrada": "6.0 4.0 2.0",
    "ejemplo_salida": "Area = 10.0",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "desigualdad triangular",
      "if / else",
      "área de trapecio"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "A, B, C = map(float, input().split())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6.0 4.0 2.0",
        "salida_esperada": "Area = 10.0",
        "visible": true,
        "descripcion": "No forma triángulo (trapecio)"
      },
      {
        "id": 2,
        "entrada": "6.0 4.0 2.1",
        "salida_esperada": "Perimetro = 12.1",
        "visible": true,
        "descripcion": "Forma triángulo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "5.0 5.0 5.0",
        "salida_esperada": "Perimetro = 15.0",
        "visible": false
      }
    ],
    "pistas": [
      "Desigualdad triangular: A < B + C y B < A + C y C < A + B.",
      "Perímetro = A + B + C.",
      "Área trapecio = ((A + B) * C) / 2."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente aplicación de la propiedad geométrica de los triángulos!",
      "error_comun": "Deben cumplirse las tres condiciones de desigualdad triangular simultáneamente.",
      "pista_falla": "if A < B + C and B < A + C and C < A + B:"
    },
    "fuente": "beecrowd",
    "fuente_id": 1043,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1043",
    "activo": true,
    "orden": 21
  },
  {
    "id": "prob-1044",
    "numero": 1044,
    "titulo": "Múltiplos",
    "slug": "multiplos",
    "descripcion": "Lee dos valores enteros (A y B). Después, el programa debe mostrar el mensaje `Sao Multiplos` o `Nao sao Multiplos`, dependiendo de si los números son múltiplos el uno del otro.",
    "entrada": "Dos números enteros en una sola línea.",
    "salida": "Muestra `Sao Multiplos` o `Nao sao Multiplos`.",
    "ejemplo_entrada": "6 24",
    "ejemplo_salida": "Sao Multiplos",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "operador módulo %",
      "divisibilidad mutua"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "A, B = map(int, input().split())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6 24",
        "salida_esperada": "Sao Multiplos",
        "visible": true,
        "descripcion": "Múltiplos en orden"
      },
      {
        "id": 2,
        "entrada": "6 25",
        "salida_esperada": "Nao sao Multiplos",
        "visible": true,
        "descripcion": "No múltiplos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "24 6",
        "salida_esperada": "Sao Multiplos",
        "visible": false
      }
    ],
    "pistas": [
      "Dos números son múltiplos si A % B == 0 o B % A == 0.",
      "Recuerda que el orden de entrada no garantiza cuál es el mayor.",
      "Caso de borde: Dos números son múltiplos si A % B == 0 o B % A == 0. Recuerda probar ambos sentidos porque los números pueden venir en cualquier orden."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien! Considerar ambos sentidos (A%B o B%A) es la clave de este problema.",
      "error_comun": "No asumas que B siempre es mayor que A.",
      "pista_falla": "if A % B == 0 or B % A == 0:"
    },
    "fuente": "beecrowd",
    "fuente_id": 1044,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1044",
    "activo": true,
    "orden": 22
  },
  {
    "id": "prob-1045",
    "numero": 1045,
    "titulo": "Tipos de Triángulos",
    "slug": "tipos-de-triangulos",
    "descripcion": "Lee 3 números flotantes (A, B y C) y ordénalos de forma decreciente, de modo que el lado A sea el mayor de los tres. Luego clasifícalos según sus lados y ángulos.",
    "entrada": "Tres números flotantes en una sola línea.",
    "salida": "Muestra la clasificación correspondiente (NAO FORMA TRIANGULO, TRIANGULO RETANGULO, OBTUSANGULO, ACUTANGULO, EQUILATERO, ISOSCELES).",
    "ejemplo_entrada": "7.0 5.0 7.0",
    "ejemplo_salida": "TRIANGULO ACUTANGULO\nTRIANGULO ISOSCELES",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "ordenamiento de 3 valores",
      "clasificación por ángulos y lados"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "lados = sorted(list(map(float, input().split())), reverse=True)\nA, B, C = lados[0], lados[1], lados[2]\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "7.0 5.0 7.0",
        "salida_esperada": "TRIANGULO ACUTANGULO\nTRIANGULO ISOSCELES",
        "visible": true,
        "descripcion": "Acutángulo e isósceles"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "6.0 6.0 10.0",
        "salida_esperada": "TRIANGULO OBTUSANGULO\nTRIANGULO ISOSCELES",
        "visible": false
      },
      {
        "id": 3,
        "entrada": "6.0 8.0 10.0",
        "salida_esperada": "TRIANGULO RETANGULO",
        "visible": false
      }
    ],
    "pistas": [
      "Primero ordena de mayor a menor para asegurar que A >= B >= C.",
      "Si A >= B + C: print('NAO FORMA TRIANGULO') y no evalúes más.",
      "Compara A**2 con B**2 + C**2 (igual: RETANGULO, mayor: OBTUSANGULO, menor: ACUTANGULO).",
      "Además verifica si A == B == C (EQUILATERO) o si dos son iguales (ISOSCELES)."
    ],
    "retroalimentacion": {
      "exito": "¡Gran manejo de condicionales compuestos y cascadas lógicas!",
      "error_comun": "Si el triángulo es equilátero, no imprimas que es isósceles.",
      "pista_falla": "Ordena primero con sorted(..., reverse=True)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1045,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1045",
    "activo": true,
    "orden": 23
  },
  {
    "id": "prob-1048",
    "numero": 1048,
    "titulo": "Incremento Salarial",
    "slug": "incremento-salarial",
    "descripcion": "La empresa ABC decidió otorgar un reajuste salarial a sus empleados según el rango de salario:\n- 0 a 400.00: 15%\n- 400.01 a 800.00: 12%\n- 800.01 a 1200.00: 10%\n- 1200.01 a 2000.00: 7%\n- Mayor a 2000.00: 4%\nLee el salario del empleado, calcula y muestra el nuevo salario, el valor ganado y el porcentaje obtenido.",
    "entrada": "Un número flotante con dos decimales.",
    "salida": "Muestra `Novo salario: XX.XX`, `Reajuste ganho: XX.XX` y `Em percentual: X %`.",
    "ejemplo_entrada": "400.00",
    "ejemplo_salida": "Novo salario: 460.00\nReajuste ganho: 60.00\nEm percentual: 15 %",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "if-elif-else en cascada",
      "escalas salariales"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "salario = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "400.00",
        "salida_esperada": "Novo salario: 460.00\nReajuste ganho: 60.00\nEm percentual: 15 %",
        "visible": true,
        "descripcion": "Rango 15%"
      },
      {
        "id": 2,
        "entrada": "800.01",
        "salida_esperada": "Novo salario: 880.01\nReajuste ganho: 80.00\nEm percentual: 10 %",
        "visible": true,
        "descripcion": "Rango 10%"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "2000.00",
        "salida_esperada": "Novo salario: 2140.00\nReajuste ganho: 140.00\nEm percentual: 7 %",
        "visible": false
      }
    ],
    "pistas": [
      "Usa una estructura if-elif-else para determinar la tasa de incremento.",
      "Reajuste = salario * (porcentaje / 100).",
      "Nuevo salario = salario + reajuste."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente estructura de if-elif-else para rangos numéricos!",
      "error_comun": "Revisa los límites: 400.00 entra en 15%, 800.00 entra en 12%.",
      "pista_falla": "Ten cuidado con los signos <= en los límites superiores."
    },
    "fuente": "beecrowd",
    "fuente_id": 1048,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1048",
    "activo": true,
    "orden": 24
  },
  {
    "id": "prob-1049",
    "numero": 1049,
    "titulo": "Animal",
    "slug": "animal",
    "descripcion": "En este problema debes leer tres palabras que definen las características de un animal según la clasificación zoológica (árbol taxonómico) e imprimir el animal correspondiente.",
    "entrada": "Tres palabras en líneas separadas.",
    "salida": "El nombre del animal resultante según el árbol taxonómico.",
    "ejemplo_entrada": "vertebrado\nave\ncarnivoro",
    "ejemplo_salida": "aguia",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "árbol de decisión",
      "condicionales anidados",
      "comparación de cadenas"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "p1 = input().strip()\np2 = input().strip()\np3 = input().strip()\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "vertebrado\nave\ncarnivoro",
        "salida_esperada": "aguia",
        "visible": true,
        "descripcion": "Águila"
      },
      {
        "id": 2,
        "entrada": "invertebrado\nanelideo\nonivoro",
        "salida_esperada": "minhoca",
        "visible": true,
        "descripcion": "Lombriz"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "vertebrado\nmamifero\nonivoro",
        "salida_esperada": "homem",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes anidar condicionales if p1 == 'vertebrado': if p2 == ...",
      "O también usar un diccionario con tuplas clave: {('vertebrado', 'ave', 'carnivoro'): 'aguia'}.",
      "Caso de borde: Usa comparaciones exactas con cadenas ('vertebrado', 'ave', 'carnivoro'). Una estructura de if-elif-else anidada previene evaluar ramas innecesarias."
    ],
    "retroalimentacion": {
      "exito": "¡Árbol de decisión implementado con maestría!",
      "error_comun": "Asegúrate de no dejar espacios en blanco al comparar las cadenas.",
      "pista_falla": "Usa strip() para limpiar saltos de línea y espacios accidentales."
    },
    "fuente": "beecrowd",
    "fuente_id": 1049,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1049",
    "activo": true,
    "orden": 25
  },
  {
    "id": "prob-1050",
    "numero": 1050,
    "titulo": "DDD",
    "slug": "ddd",
    "descripcion": "Lee un número entero que representa un código de área telefónica (DDD). A continuación muestra la ciudad correspondiente: 61 Brasilia, 71 Salvador, 11 Sao Paulo, 21 Rio de Janeiro, 32 Juiz de Fora, 19 Campinas, 27 Vitoria, 31 Belo Horizonte. Si el código no está en la lista, muestra `DDD nao cadastrado`.",
    "entrada": "Un número entero.",
    "salida": "El nombre de la ciudad correspondiente o `DDD nao cadastrado`.",
    "ejemplo_entrada": "11",
    "ejemplo_salida": "Sao Paulo",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "diccionarios",
      "búsqueda con get() o if-in"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "ddd = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "11",
        "salida_esperada": "Sao Paulo",
        "visible": true,
        "descripcion": "Sao Paulo"
      },
      {
        "id": 2,
        "entrada": "61",
        "salida_esperada": "Brasilia",
        "visible": true,
        "descripcion": "Brasilia"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "77",
        "salida_esperada": "DDD nao cadastrado",
        "visible": false
      }
    ],
    "pistas": [
      "Un diccionario es la forma más limpia: mapa = {11: 'Sao Paulo', ...}.",
      "mapa.get(ddd, 'DDD nao cadastrado').",
      "Caso de borde: Si el código DDD no existe en el diccionario o tabla de ciudades, la salida debe ser exactamente 'DDD nao cadastrado' (sin tildes)."
    ],
    "retroalimentacion": {
      "exito": "¡Mapeo de datos impecable!",
      "error_comun": "Recuerda la tilde y mayúsculas en 'DDD nao cadastrado'.",
      "pista_falla": "Usa diccionario o if-elif con caso default."
    },
    "fuente": "beecrowd",
    "fuente_id": 1050,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1050",
    "activo": true,
    "orden": 26
  },
  {
    "id": "prob-1051",
    "numero": 1051,
    "titulo": "Impuestos",
    "slug": "impuestos",
    "descripcion": "En un país ficticio, el impuesto sobre la renta se calcula por tramos progresivos:\n- De 0.00 a 2000.00: Exento\n- De 2000.01 a 3000.00: 8%\n- De 3000.01 a 4500.00: 18%\n- Mayor a 4500.00: 28%\nCalcula el impuesto a pagar según el salario ingresado.",
    "entrada": "Un número flotante con dos decimales.",
    "salida": "Si el salario es menor o igual a 2000, imprime `Isento`. En caso contrario, imprime `R$ ` seguido del valor con 2 decimales.",
    "ejemplo_entrada": "3002.00",
    "ejemplo_salida": "R$ 80.36",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "cálculo impositivo por tramos",
      "condicionales progresivos"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "salario = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "3002.00",
        "salida_esperada": "R$ 80.36",
        "visible": true,
        "descripcion": "Tramo mixto 8% y 18%"
      },
      {
        "id": 2,
        "entrada": "1701.12",
        "salida_esperada": "Isento",
        "visible": true,
        "descripcion": "Exento"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "4520.00",
        "salida_esperada": "R$ 355.60",
        "visible": false
      }
    ],
    "pistas": [
      "El impuesto no es directo sobre todo el monto, sino sobre cada porción que supere cada umbral.",
      "Para 3002: los primeros 2000 son libres, los siguientes 1000 pagan 8% (80), y los restantes 2 pagan 18% (0.36) -> Total 80.36.",
      "Caso de borde: Los tramos impositivos son marginales: solo el monto que excede cada umbral tributa a la tasa correspondiente. Si el salario es <= 2000, imprime 'Isento'."
    ],
    "retroalimentacion": {
      "exito": "¡Gran dominio de la lógica progresiva de impuestos por tramos!",
      "error_comun": "No apliques el porcentaje superior a todo el salario; aplícalo sólo a la porción de ese tramo.",
      "pista_falla": "Calcula cada segmento por separado con min/max o if escalonados."
    },
    "fuente": "beecrowd",
    "fuente_id": 1051,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1051",
    "activo": true,
    "orden": 27
  },
  {
    "id": "prob-1052",
    "numero": 1052,
    "titulo": "Mes",
    "slug": "mes",
    "descripcion": "Lee un valor entero entre 1 y 12 e imprime el nombre del mes correspondiente en inglés con la primera letra en mayúscula.",
    "entrada": "Un número entero entre 1 y 12.",
    "salida": "El nombre del mes en inglés (ejemplo: January, February, etc.).",
    "ejemplo_entrada": "1",
    "ejemplo_salida": "January",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "listas",
      "indexación de listas",
      "condicionales"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "mes = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "1",
        "salida_esperada": "January",
        "visible": true,
        "descripcion": "Primer mes"
      },
      {
        "id": 2,
        "entrada": "7",
        "salida_esperada": "July",
        "visible": true,
        "descripcion": "Mes intermedio"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "12",
        "salida_esperada": "December",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes usar una lista de meses: meses = ['January', 'February', ...].",
      "Ten en cuenta que las listas en Python comienzan en índice 0: meses[mes - 1].",
      "Caso de borde: Los nombres de los meses deben imprimirse en inglés con la primera letra en mayúscula (ej: 'January', 'February', ..., 'December')."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente indexación!",
      "error_comun": "Recuerda que el índice del mes es mes - 1.",
      "pista_falla": "meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']."
    },
    "fuente": "beecrowd",
    "fuente_id": 1052,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1052",
    "activo": true,
    "orden": 28
  },
  {
    "id": "prob-1059",
    "numero": 1059,
    "titulo": "Números Pares",
    "slug": "numeros-pares",
    "descripcion": "Escribe un programa que imprima todos los números pares entre 1 y 100, inclusive.",
    "entrada": "Este problema no contiene entradas.",
    "salida": "Imprime todos los números pares entre 1 y 100, un número por línea.",
    "ejemplo_entrada": "",
    "ejemplo_salida": "2\n4\n6\n8\n...\n100",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "for",
      "range() con paso 2",
      "operador módulo %"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "# Imprime los pares del 1 al 100\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "",
        "salida_esperada": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40\n42\n44\n46\n48\n50\n52\n54\n56\n58\n60\n62\n64\n66\n68\n70\n72\n74\n76\n78\n80\n82\n84\n86\n88\n90\n92\n94\n96\n98\n100",
        "visible": true,
        "descripcion": "Secuencia completa de pares"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "",
        "salida_esperada": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40\n42\n44\n46\n48\n50\n52\n54\n56\n58\n60\n62\n64\n66\n68\n70\n72\n74\n76\n78\n80\n82\n84\n86\n88\n90\n92\n94\n96\n98\n100",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes usar for i in range(2, 101, 2): print(i).",
      "O recorrer del 1 al 101 y comprobar if i % 2 == 0: print(i).",
      "Detalle de implementación: Puedes usar range(2, 101, 2) para iterar directamente sobre los pares sin necesidad de comprobar if i % 2 == 0 en cada paso."
    ],
    "retroalimentacion": {
      "exito": "¡Dominio total de ciclos for y range()!",
      "error_comun": "Recuerda que en range(inicio, fin) el límite 'fin' no es inclusivo: usa 101 para incluir 100.",
      "pista_falla": "range(2, 101, 2) genera directamente los pares."
    },
    "fuente": "beecrowd",
    "fuente_id": 1059,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1059",
    "activo": true,
    "orden": 29
  },
  {
    "id": "prob-1064",
    "numero": 1064,
    "titulo": "Positivos y Promedio",
    "slug": "positivos-y-promedio",
    "descripcion": "Lee 6 valores numéricos. Muestra cuántos de ellos son positivos y a continuación el promedio de dichos valores positivos con un decimal.",
    "entrada": "Seis números (enteros o flotantes) en líneas separadas.",
    "salida": "La primera línea debe ser `X valores positivos` y la segunda línea el promedio con una cifra decimal.",
    "ejemplo_entrada": "7\n-5\n6\n-3.4\n4.6\n12",
    "ejemplo_salida": "4 valores positivos\n7.4",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos",
      "Condicionales"
    ],
    "conceptos": [
      "acumuladores",
      "contadores",
      "filtrado de positivos"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "positivos = []\nfor _ in range(6):\n    val = float(input())\n    # Completa tu solución aquí\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "7\n-5\n6\n-3.4\n4.6\n12",
        "salida_esperada": "4 valores positivos\n7.4",
        "visible": true,
        "descripcion": "Valores mixtos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "1\n2\n3\n4\n5\n6",
        "salida_esperada": "6 valores positivos\n3.5",
        "visible": false
      }
    ],
    "pistas": [
      "Si val > 0: guárdalo en una lista o incrementa un contador y suma acumulada.",
      "Promedio = suma / contador.",
      "Formatea el promedio con :.1f."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente combinación de bucle for y acumuladores!",
      "error_comun": "El promedio se calcula únicamente entre los valores positivos, no entre los 6.",
      "pista_falla": "if val > 0: count += 1; suma += val."
    },
    "fuente": "beecrowd",
    "fuente_id": 1064,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1064",
    "activo": true,
    "orden": 30
  },
  {
    "id": "prob-1067",
    "numero": 1067,
    "titulo": "Números Impares",
    "slug": "numeros-impares",
    "descripcion": "Lee un valor entero X (1 <= X <= 1000). A continuación muestra los números impares desde 1 hasta X, un valor por línea, inclusive X si fuera el caso.",
    "entrada": "Un número entero X.",
    "salida": "Todos los números impares desde 1 hasta X, uno por línea.",
    "ejemplo_entrada": "8",
    "ejemplo_salida": "1\n3\n5\n7",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "for",
      "generación de impares",
      "range()"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "X = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "8",
        "salida_esperada": "1\n3\n5\n7",
        "visible": true,
        "descripcion": "X par"
      },
      {
        "id": 2,
        "entrada": "11",
        "salida_esperada": "1\n3\n5\n7\n9\n11",
        "visible": true,
        "descripcion": "X impar inclusivo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "1",
        "salida_esperada": "1",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes usar for i in range(1, X + 1, 2): print(i).",
      "Caso de borde: Si el valor ingresado es par, el ciclo imprimirá hasta X-1. Si es impar, el último número impreso será exactamente X.",
      "Detalle de implementación: Presta atención al tipo de dato (int vs float) y verifica que no queden impresiones residuales o textos de depuración."
    ],
    "retroalimentacion": {
      "exito": "¡Perfecto manejo de secuencias impares!",
      "error_comun": "Asegúrate de que el rango llegue hasta X + 1 para incluir X cuando sea impar.",
      "pista_falla": "range(1, X + 1, 2)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1067,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1067",
    "activo": true,
    "orden": 31
  },
  {
    "id": "prob-1070",
    "numero": 1070,
    "titulo": "Seis Números Impares",
    "slug": "seis-numeros-impares",
    "descripcion": "Lee un valor entero X. Luego muestra los 6 números impares consecutivos a partir de X, un valor por línea, inclusive X si fuera impar.",
    "entrada": "Un valor entero positivo.",
    "salida": "Seis números impares consecutivos a partir de X.",
    "ejemplo_entrada": "9",
    "ejemplo_salida": "9\n11\n13\n15\n17\n19",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "while",
      "contador de repeticiones",
      "impares"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "X = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "9",
        "salida_esperada": "9\n11\n13\n15\n17\n19",
        "visible": true,
        "descripcion": "Inicia en impar"
      },
      {
        "id": 2,
        "entrada": "8",
        "salida_esperada": "9\n11\n13\n15\n17\n19",
        "visible": true,
        "descripcion": "Inicia en par"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "1",
        "salida_esperada": "1\n3\n5\n7\n9\n11",
        "visible": false
      }
    ],
    "pistas": [
      "Si X es par, el primer impar es X + 1.",
      "Luego puedes generar 6 impares sumando de 2 en 2.",
      "Detalle de implementación: Si el número inicial X es par, el primer impar es X + 1. A partir de allí, genera los siguientes 5 sumando 2 sucesivamente."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo generando secuencias consecutivas!",
      "error_comun": "Asegúrate de imprimir exactamente 6 valores.",
      "pista_falla": "if X % 2 == 0: X += 1; for i in range(6): print(X + i*2)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1070,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1070",
    "activo": true,
    "orden": 32
  },
  {
    "id": "prob-1071",
    "numero": 1071,
    "titulo": "Suma de Números Consecutivos Impares I",
    "slug": "suma-de-numeros-consecutivos-impares-i",
    "descripcion": "Lee dos valores enteros X e Y. Calcula y muestra la suma de todos los números impares existentes entre ellos (estrictamente entre ellos, sin incluir a X ni a Y).",
    "entrada": "Dos números enteros X e Y en líneas separadas.",
    "salida": "La suma de los números impares estrictamente entre X e Y.",
    "ejemplo_entrada": "6\n-5",
    "ejemplo_salida": "5",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "rango abierto",
      "min() y max()",
      "acumulación con for"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "x = int(input())\ny = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6\n-5",
        "salida_esperada": "5",
        "visible": true,
        "descripcion": "Uno positivo y otro negativo"
      },
      {
        "id": 2,
        "entrada": "15\n12",
        "salida_esperada": "13",
        "visible": true,
        "descripcion": "Positivos cercanos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "12\n12",
        "salida_esperada": "0",
        "visible": false
      }
    ],
    "pistas": [
      "Primero halla el menor y mayor: inicio = min(x, y) + 1, fin = max(x, y).",
      "Recorre for n in range(inicio, fin): si n % 2 != 0 suma n.",
      "Caso de borde: Los números X e Y pueden venir en orden descendente (X > Y). Usa min(X, Y) y max(X, Y) y excluye los extremos de la suma iterando en range(min + 1, max)."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente! Los límites estrictos son clave en problemas de algoritmos.",
      "error_comun": "Recuerda no incluir ni a X ni a Y en la suma.",
      "pista_falla": "range(min(x,y) + 1, max(x,y))."
    },
    "fuente": "beecrowd",
    "fuente_id": 1071,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1071",
    "activo": true,
    "orden": 33
  },
  {
    "id": "prob-1073",
    "numero": 1073,
    "titulo": "Cuadrado de un Par",
    "slug": "cuadrado-de-un-par",
    "descripcion": "Lee un valor entero N (5 < N < 2000). Muestra el cuadrado de cada uno de los valores pares desde 1 hasta N, inclusive si N fuera par.",
    "entrada": "Un número entero N.",
    "salida": "Para cada número par, muestra `X^2 = Y`.",
    "ejemplo_entrada": "6",
    "ejemplo_salida": "2^2 = 4\n4^2 = 16\n6^2 = 36",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "for",
      "potencias",
      "formato de expresiones"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "N = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6",
        "salida_esperada": "2^2 = 4\n4^2 = 16\n6^2 = 36",
        "visible": true,
        "descripcion": "N = 6"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "4",
        "salida_esperada": "2^2 = 4\n4^2 = 16",
        "visible": false
      }
    ],
    "pistas": [
      "Recorre for i in range(2, N + 1, 2):",
      "Imprime print(f\"{i}^2 = {i ** 2}\").",
      "Detalle de implementación: Itera con range(2, N + 1, 2) y muestra cada línea con el formato exacto f'{i}^2 = {i**2}'."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien! Has impreso expresiones cuadráticas paso a paso.",
      "error_comun": "Revisa los espacios alrededor del igual: '{i}^2 = {i**2}'.",
      "pista_falla": "range(2, N + 1, 2)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1073,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1073",
    "activo": true,
    "orden": 34
  },
  {
    "id": "prob-1078",
    "numero": 1078,
    "titulo": "Tablas de Multiplicar",
    "slug": "tablas-de-multiplicar",
    "descripcion": "Lee un valor entero N (2 < N < 1000). A continuación, muestra la tabla de multiplicar de N del 1 al 10 en el formato especificado.",
    "entrada": "Un número entero N.",
    "salida": "La tabla de multiplicar en el formato `1 x N = N ... 10 x N = 10*N`.",
    "ejemplo_entrada": "140",
    "ejemplo_salida": "1 x 140 = 140\n2 x 140 = 280\n3 x 140 = 420\n4 x 140 = 560\n5 x 140 = 700\n6 x 140 = 840\n7 x 140 = 980\n8 x 140 = 1120\n9 x 140 = 1260\n10 x 140 = 1400",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "for",
      "tablas aritméticas",
      "range(1, 11)"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "N = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "140",
        "salida_esperada": "1 x 140 = 140\n2 x 140 = 280\n3 x 140 = 420\n4 x 140 = 560\n5 x 140 = 700\n6 x 140 = 840\n7 x 140 = 980\n8 x 140 = 1120\n9 x 140 = 1260\n10 x 140 = 1400",
        "visible": true,
        "descripcion": "Tabla del 140"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "5",
        "salida_esperada": "1 x 5 = 5\n2 x 5 = 10\n3 x 5 = 15\n4 x 5 = 20\n5 x 5 = 25\n6 x 5 = 30\n7 x 5 = 35\n8 x 5 = 40\n9 x 5 = 45\n10 x 5 = 50",
        "visible": false
      }
    ],
    "pistas": [
      "Usa for i in range(1, 11):",
      "Imprime f\"{i} x {N} = {i * N}\".",
      "Detalle de implementación: El ciclo debe ir de 1 a 10 inclusive: for i in range(1, 11). Formatea como f'{i} x {N} = {i * N}'."
    ],
    "retroalimentacion": {
      "exito": "¡Tabla de multiplicar impecable!",
      "error_comun": "Ten cuidado con usar 'x' en minúscula y con los espacios.",
      "pista_falla": "for i in range(1, 11): print(f'{i} x {N} = {i*N}')."
    },
    "fuente": "beecrowd",
    "fuente_id": 1078,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1078",
    "activo": true,
    "orden": 35
  },
  {
    "id": "prob-1080",
    "numero": 1080,
    "titulo": "El Más Alto y Su Posición",
    "slug": "el-mas-alto-y-su-posicion",
    "descripcion": "Lee 100 números enteros (o una lista de valores). Encuentra e imprime el mayor valor leído y la posición en que fue leído (1-indexed).",
    "entrada": "Valores enteros en líneas separadas.",
    "salida": "El valor más alto y su posición en la línea siguiente.",
    "ejemplo_entrada": "2\n113\n45\n34565\n6\n8",
    "ejemplo_salida": "34565\n4",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos",
      "Listas"
    ],
    "conceptos": [
      "búsqueda lineal",
      "máximo con índice",
      "enumerate"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "# Lee los números e identifica el máximo y su posición\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "2\n113\n45\n34565\n6\n8",
        "salida_esperada": "34565\n4",
        "visible": true,
        "descripcion": "Máximo en posición 4"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "500\n10\n20",
        "salida_esperada": "500\n1",
        "visible": false
      }
    ],
    "pistas": [
      "Mantén dos variables: mayor = -1 y pos_mayor = -1.",
      "Al leer cada valor en la posición i (1-indexed), si val > mayor actualiza mayor y pos_mayor = i.",
      "Caso de borde: Inicializa el valor mayor con un número menor al mínimo posible (o lee el primer número como referencia inicial en posición 1). Las posiciones son 1-indexadas (1 a 100)."
    ],
    "retroalimentacion": {
      "exito": "¡Algoritmo de búsqueda de máximo resuelto con éxito!",
      "error_comun": "Recuerda que la posición solicitada es 1-indexed (inicia en 1).",
      "pista_falla": "mayor = -1; pos = 0."
    },
    "fuente": "beecrowd",
    "fuente_id": 1080,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1080",
    "activo": true,
    "orden": 36
  },
  {
    "id": "prob-1101",
    "numero": 1101,
    "titulo": "Secuencia de Números y Suma",
    "slug": "secuencia-de-numeros-y-suma",
    "descripcion": "Lee un conjunto de parejas de valores M y N. Para cada pareja, muestra la secuencia de enteros en orden ascendente entre el menor y el mayor valor de la pareja, seguido del texto `Sum=X`, donde X es la suma de todos los números de la secuencia. El programa se detiene cuando M o N sea menor o igual a cero.",
    "entrada": "Cada línea contiene dos números enteros M y N. La última línea contiene al menos un número menor o igual a 0.",
    "salida": "Para cada pareja válida, imprime la secuencia de enteros separados por un espacio seguido de `Sum=total`.",
    "ejemplo_entrada": "5 2\n6 3\n5 0",
    "ejemplo_salida": "2 3 4 5 Sum=14\n3 4 5 6 Sum=18",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "while con centinela",
      "ordenamiento de pareja",
      "acumulación"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "while True:\n    try:\n        m, n = map(int, input().split())\n        if m <= 0 or n <= 0:\n            break\n        # Completa la solución aquí\n    except EOFError:\n        break\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5 2\n6 3\n5 0",
        "salida_esperada": "2 3 4 5 Sum=14\n3 4 5 6 Sum=18",
        "visible": true,
        "descripcion": "Dos parejas y centinela"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "1 1\n0 5",
        "salida_esperada": "1 Sum=1",
        "visible": false
      }
    ],
    "pistas": [
      "Usa un ciclo while True: si m <= 0 or n <= 0: break.",
      "menor, mayor = min(m, n), max(m, n).",
      "nums = list(range(menor, mayor + 1)).",
      "print(' '.join(map(str, nums)) + f' Sum={sum(nums)}')."
    ],
    "retroalimentacion": {
      "exito": "¡Gran manejo de bucles con condición de parada centinela!",
      "error_comun": "Ten cuidado con los espacios: 'Sum=' va pegado a la suma sin espacio tras el igual.",
      "pista_falla": "if m <= 0 or n <= 0: break."
    },
    "fuente": "beecrowd",
    "fuente_id": 1101,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1101",
    "activo": true,
    "orden": 37
  },
  {
    "id": "prob-1115",
    "numero": 1115,
    "titulo": "Cuadrante",
    "slug": "cuadrante",
    "descripcion": "Escribe un programa para leer las coordenadas (X, Y) de una cantidad indeterminada de puntos en el sistema cartesiano. Para cada punto, muestra el cuadrante al que pertenece: `primeiro`, `segundo`, `terceiro` o `quarto`. El programa se termina cuando al menos una de las dos coordenadas sea NULA (0).",
    "entrada": "Contiene varias líneas. Cada línea contiene dos enteros X e Y.",
    "salida": "Para cada punto, muestra el cuadrante correspondiente.",
    "ejemplo_entrada": "2 2\n3 -2\n-8 -1\n-7 1\n0 2",
    "ejemplo_salida": "primeiro\nquarto\nterceiro\nsegundo",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales",
      "Ciclos"
    ],
    "conceptos": [
      "plano cartesiano",
      "cuadrantes",
      "bucle con condición de salida"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "while True:\n    x, y = map(int, input().split())\n    if x == 0 or y == 0:\n        break\n    # Clasifica el cuadrante\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "2 2\n3 -2\n-8 -1\n-7 1\n0 2",
        "salida_esperada": "primeiro\nquarto\nterceiro\nsegundo",
        "visible": true,
        "descripcion": "Puntos en los 4 cuadrantes"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "1 5\n-1 -5\n3 0",
        "salida_esperada": "primeiro\nterceiro",
        "visible": false
      }
    ],
    "pistas": [
      "Q1: X > 0 y Y > 0 ('primeiro').",
      "Q2: X < 0 y Y > 0 ('segundo').",
      "Q3: X < 0 y Y < 0 ('terceiro').",
      "Q4: X > 0 y Y < 0 ('quarto')."
    ],
    "retroalimentacion": {
      "exito": "¡Geometría cartesiana y condicionales resueltos con precisión!",
      "error_comun": "Si X == 0 o Y == 0, debes terminar el ciclo sin imprimir nada.",
      "pista_falla": "if x > 0 and y > 0: print('primeiro')."
    },
    "fuente": "beecrowd",
    "fuente_id": 1115,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1115",
    "activo": true,
    "orden": 38
  },
  {
    "id": "prob-1146",
    "numero": 1146,
    "titulo": "Secuencias Crecientes",
    "slug": "secuencias-crecientes",
    "descripcion": "Tu programa debe leer un número entero X de forma repetida. Para cada X leído, debe imprimir la secuencia de números enteros desde 1 hasta X en una sola línea, separados por un espacio. El programa se detiene cuando X sea igual a 0.",
    "entrada": "Varios enteros, uno por línea. El último es 0.",
    "salida": "Para cada X, imprime los enteros de 1 a X separados por espacio. No debe haber espacio al final de la línea.",
    "ejemplo_entrada": "5\n10\n3\n0",
    "ejemplo_salida": "1 2 3 4 5\n1 2 3 4 5 6 7 8 9 10\n1 2 3",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "join()",
      "formateo de secuencias",
      "bucle while"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "while True:\n    X = int(input())\n    if X == 0:\n        break\n    print(\" \".join(str(i) for i in range(1, X + 1)))\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5\n10\n3\n0",
        "salida_esperada": "1 2 3 4 5\n1 2 3 4 5 6 7 8 9 10\n1 2 3",
        "visible": true,
        "descripcion": "Secuencias estándar"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "1\n0",
        "salida_esperada": "1",
        "visible": false
      }
    ],
    "pistas": [
      "Usa ' '.join(str(i) for i in range(1, X + 1)) para garantizar que no haya espacio sobrante al final.",
      "Detén el bucle al recibir 0.",
      "Caso de borde: La secuencia para cada valor de X debe terminar con un salto de línea sin espacio sobrante al final. Cuando se lee un 0, el programa debe terminar inmediatamente."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente técnica usando ' '.join() para evitar espacios residuales al final de línea!",
      "error_comun": "Evita imprimir print(i, end=' ') en el último elemento para no dejar espacio extra.",
      "pista_falla": "print(' '.join(str(i) for i in range(1, X + 1)))."
    },
    "fuente": "beecrowd",
    "fuente_id": 1146,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1146",
    "activo": true,
    "orden": 39
  },
  {
    "id": "prob-1151",
    "numero": 1151,
    "titulo": "Fibonacci Fácil",
    "slug": "fibonacci-facil",
    "descripcion": "La siguiente secuencia de números 0, 1, 1, 2, 3, 5, 8, 13, 21... se conoce como la serie de Fibonacci. En ella, cada término a partir del tercero es la suma de los dos anteriores. Escribe un programa que lea un entero N (0 < N < 46) e imprima los primeros N términos de la secuencia en una sola línea, separados por un espacio.",
    "entrada": "Un número entero N.",
    "salida": "Los primeros N números de Fibonacci separados por un espacio.",
    "ejemplo_entrada": "5",
    "ejemplo_salida": "0 1 1 2 3",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "sucesión de Fibonacci",
      "actualización de variables a, b = b, a+b",
      "secuencias"
    ],
    "dificultad": "intermedio",
    "lenguaje": "python",
    "codigo_inicial": "N = int(input())\nfib = [0, 1]\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5",
        "salida_esperada": "0 1 1 2 3",
        "visible": true,
        "descripcion": "Primeros 5 términos"
      },
      {
        "id": 2,
        "entrada": "8",
        "salida_esperada": "0 1 1 2 3 5 8 13",
        "visible": true,
        "descripcion": "Primeros 8 términos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "2",
        "salida_esperada": "0 1",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes generar la lista iterativamente: while len(fib) < N: fib.append(fib[-1] + fib[-2]).",
      "Muestra con print(' '.join(map(str, fib[:N]))).",
      "Caso de borde y formato: Los números deben estar separados por un espacio, pero el último número de la serie NO debe tener un espacio residual a la derecha."
    ],
    "retroalimentacion": {
      "exito": "¡Magnífico! La serie de Fibonacci es un clásico fundamental de la computación.",
      "error_comun": "Asegúrate de no incluir espacios al final de la línea.",
      "pista_falla": "a, b = 0, 1; genera término a término sumando los dos anteriores."
    },
    "fuente": "beecrowd",
    "fuente_id": 1151,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1151",
    "activo": true,
    "orden": 40
  },
  {
    "id": "prob-1157",
    "numero": 1157,
    "titulo": "Divisores I",
    "slug": "divisores-i",
    "descripcion": "Lee un número entero N e imprime todos sus divisores en orden ascendente, un divisor por línea.",
    "entrada": "Un número entero N.",
    "salida": "Todos los divisores de N en orden ascendente.",
    "ejemplo_entrada": "6",
    "ejemplo_salida": "1\n2\n3\n6",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "divisores",
      "for",
      "operador módulo %"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "N = int(input())\nfor i in range(1, N + 1):\n    if N % i == 0:\n        print(i)\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6",
        "salida_esperada": "1\n2\n3\n6",
        "visible": true,
        "descripcion": "Divisores de 6"
      },
      {
        "id": 2,
        "entrada": "24",
        "salida_esperada": "1\n2\n3\n4\n6\n8\n12\n24",
        "visible": true,
        "descripcion": "Divisores de 24"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "7",
        "salida_esperada": "1\n7",
        "visible": false
      }
    ],
    "pistas": [
      "Un número i es divisor de N si N % i == 0.",
      "Recorre desde 1 hasta N inclusive.",
      "Detalle de implementación: Un número i es divisor de N si N % i == 0. Itera desde 1 hasta N inclusive imprimiendo cada divisor en una nueva línea."
    ],
    "retroalimentacion": {
      "exito": "¡Cálculo de divisores perfecto!",
      "error_comun": "Recuerda incluir tanto el 1 como el propio N.",
      "pista_falla": "if N % i == 0: print(i)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1157,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1157",
    "activo": true,
    "orden": 41
  },
  {
    "id": "prob-1435",
    "numero": 1435,
    "titulo": "Matriz Cuadrada I",
    "slug": "matriz-cuadrada-i",
    "descripcion": "Escribe un programa que lea un entero N (0 <= N <= 100) de forma repetida. Para cada N, construye e imprime una matriz de tamaño N x N donde el borde exterior contiene 1s, el siguiente anillo interior contiene 2s, y así sucesivamente hacia el centro. Cada número debe formatearse ocupando 3 espacios justificado a la derecha (`%3d`), con un espacio entre columnas y una línea en blanco tras cada matriz. El programa termina con N = 0.",
    "entrada": "Varios enteros N (uno por línea). Finaliza con 0.",
    "salida": "La matriz concéntrica correspondiente formateada adecuadamente.",
    "ejemplo_entrada": "1\n2\n3\n0",
    "ejemplo_salida": "  1\n\n  1   2\n  1   2\n... (con formato %3d)",
    "unidad": "Unidad 10: Estructuras de datos",
    "unidadId": "unidad-10",
    "temas": [
      "Matrices",
      "Ciclos"
    ],
    "conceptos": [
      "matrices 2D",
      "distancia a los bordes min(i, j, n-1-i, n-1-j)",
      "formateo %3d"
    ],
    "dificultad": "intermedio",
    "lenguaje": "python",
    "codigo_inicial": "# Matriz cuadrada concéntrica\nwhile True:\n    n = int(input())\n    if n == 0: break\n    for i in range(n):\n        fila = []\n        for j in range(n):\n            val = min(i, j, n - 1 - i, n - 1 - j) + 1\n            fila.append(f\"{val:3d}\")\n        print(\" \".join(fila))\n    print()\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "1\n2\n0",
        "salida_esperada": "  1\n\n  1   1\n  1   1\n",
        "visible": true,
        "descripcion": "Matrices N=1 y N=2"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "3\n0",
        "salida_esperada": "  1   1   1\n  1   2   1\n  1   1   1\n",
        "visible": false
      }
    ],
    "pistas": [
      "El valor de cada celda (i, j) es min(i, j, n-1-i, n-1-j) + 1.",
      "Formatea cada celda con f'{val:3d}'.",
      "Separa cada fila con un espacio entre números y deja una línea vacía tras cada matriz."
    ],
    "retroalimentacion": {
      "exito": "¡Fascinante dominio de matrices bidimensionales y cálculo concéntrico!",
      "error_comun": "Recuerda el formateo de 3 caracteres por número: f'{val:3d}'.",
      "pista_falla": "val = min(i, j, n - 1 - i, n - 1 - j) + 1."
    },
    "fuente": "beecrowd",
    "fuente_id": 1435,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1435",
    "activo": true,
    "orden": 42
  },
  {
    "id": "prob-1557",
    "numero": 1557,
    "titulo": "Matriz Cuadrada III",
    "slug": "matriz-cuadrada-iii",
    "descripcion": "Escribe un programa que lea un entero N (0 <= N <= 15). Para cada N, construye una matriz cuadrada de tamaño N x N donde cada elemento en la fila i y columna j sea $2^{i+j}$. Los números de cada columna deben justificarse a la derecha usando un ancho T igual a la cantidad de dígitos del número mayor de la matriz ($2^{2N-2}$). Cada matriz debe estar separada por una línea en blanco. El programa termina con N = 0.",
    "entrada": "Varios enteros N (uno por línea). Finaliza con N = 0.",
    "salida": "La matriz de potencias de 2 formateada con el ancho correspondiente a su elemento mayor.",
    "ejemplo_entrada": "1\n2\n3\n0",
    "ejemplo_salida": "1\n\n 1  2\n 2  4\n\n  1   2   4\n  2   4   8\n  4   8  16\n",
    "unidad": "Unidad 10: Estructuras de datos",
    "unidadId": "unidad-10",
    "temas": [
      "Matrices",
      "Ciclos",
      "Algoritmos"
    ],
    "conceptos": [
      "potencias de 2 (2**(i+j))",
      "ancho dinámico len(str(max))",
      "matrices"
    ],
    "dificultad": "desafio",
    "lenguaje": "python",
    "codigo_inicial": "# Matriz de potencias de 2 con ancho dinámico T\nwhile True:\n    n = int(input())\n    if n == 0: break\n    max_val = 2 ** (2 * n - 2)\n    T = len(str(max_val))\n    for i in range(n):\n        fila = [f\"{2**(i+j):{T}d}\" for j in range(n)]\n        print(\" \".join(fila))\n    print()\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "1\n2\n3\n0",
        "salida_esperada": "1\n\n 1  2\n 2  4\n\n  1   2   4\n  2   4   8\n  4   8  16\n",
        "visible": true,
        "descripcion": "Matrices N=1, N=2 y N=3"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "4\n0",
        "salida_esperada": "   1   2   4   8\n   2   4   8  16\n   4   8  16  32\n   8  16  32  64\n",
        "visible": false
      }
    ],
    "pistas": [
      "El valor mayor de la matriz es 2 ** (2*n - 2).",
      "El ancho T es len(str(mayor)).",
      "Usa f\"{val:{T}d}\" para formatear cada celda con ancho dinámico T."
    ],
    "retroalimentacion": {
      "exito": "¡Desafío completado! Has implementado matrices con formato dinámico avanzado.",
      "error_comun": "El ancho T cambia según N; asegúrate de calcularlo para cada matriz.",
      "pista_falla": "T = len(str(2 ** (2 * n - 2)))."
    },
    "fuente": "beecrowd",
    "fuente_id": 1557,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1557",
    "activo": true,
    "orden": 43
  }
];

function getProblemById(idOrNumber) {
  if (!idOrNumber) return null;
  const str = String(idOrNumber).trim();
  const num = parseInt(str.replace('prob-', ''));
  return MARATON_PROBLEMS.find(p => p.id === str || p.numero === num || p.slug === str) || null;
}

function getProblemsByTheme(theme) {
  if (!theme || theme === 'Todos') return MARATON_PROBLEMS;
  return MARATON_PROBLEMS.filter(p => p.temas.includes(theme));
}

function getProblemsByDifficulty(diff) {
  if (!diff || diff === 'Todos') return MARATON_PROBLEMS;
  return MARATON_PROBLEMS.filter(p => p.dificultad === diff);
}

function getProblemsByUnit(unitId) {
  if (!unitId || unitId === 'Todas') return MARATON_PROBLEMS;
  return MARATON_PROBLEMS.filter(p => p.unidadId === unitId);
}

/**
 * GESTOR DE ESTADO Y PROGRESO - MARATÓN: SOLUCIÓN DE PROBLEMAS
 * Persistencia en localStorage desacoplada del progreso de lecciones.
 */

const STORAGE_KEY_MARATON = 'leogaviria_maraton_progress';

function getMaratonState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MARATON);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Error al leer estado de Maratón:', e);
    return {};
  }
}

function saveMaratonState(state) {
  try {
    localStorage.setItem(STORAGE_KEY_MARATON, JSON.stringify(state));
  } catch (e) {
    console.error('Error al guardar estado de Maratón:', e);
  }
}

function getProblemRecord(problemId) {
  const state = getMaratonState();
  return state[problemId] || {
    status: 'no_iniciado', // 'no_iniciado' | 'en_progreso' | 'resuelto'
    intentos: 0,
    codigo_guardado: '',
    fecha_resolucion: null,
    ultimo_intento: null,
    casos_pasados: 0,
    total_casos: 0
  };
}

function saveDraftCode(problemId, code) {
  const state = getMaratonState();
  if (!state[problemId]) {
    state[problemId] = {
      status: 'en_progreso',
      intentos: 0,
      codigo_guardado: code,
      fecha_resolucion: null,
      ultimo_intento: new Date().toISOString(),
      casos_pasados: 0,
      total_casos: 0
    };
  } else {
    state[problemId].codigo_guardado = code;
    state[problemId].ultimo_intento = new Date().toISOString();
    if (state[problemId].status === 'no_iniciado') {
      state[problemId].status = 'en_progreso';
    }
  }
  saveMaratonState(state);
}

function recordProblemEvaluation(problemId, code, evaluationResult) {
  const state = getMaratonState();
  const prev = state[problemId] || {
    status: 'no_iniciado',
    intentos: 0,
    codigo_guardado: '',
    fecha_resolucion: null,
    ultimo_intento: null,
    casos_pasados: 0,
    total_casos: 0
  };

  const isSuccess = evaluationResult.allPassed;
  const newStatus = isSuccess ? 'resuelto' : 'en_progreso';
  const now = new Date().toISOString();

  state[problemId] = {
    ...prev,
    status: prev.status === 'resuelto' ? 'resuelto' : newStatus,
    intentos: (prev.intentos || 0) + 1,
    codigo_guardado: code,
    ultimo_intento: now,
    fecha_resolucion: isSuccess && !prev.fecha_resolucion ? now : prev.fecha_resolucion,
    casos_pasados: Math.max(prev.casos_pasados || 0, evaluationResult.passedCount || 0),
    total_casos: evaluationResult.totalCount || 0
  };

  saveMaratonState(state);
  return state[problemId];
}

function getMaratonStats(problemsList) {
  const state = getMaratonState();
  const total = problemsList.length;
  let resueltos = 0;
  let enProgreso = 0;

  const porDificultad = {
    inicial: { total: 0, resueltos: 0 },
    basico: { total: 0, resueltos: 0 },
    intermedio: { total: 0, resueltos: 0 },
    desafio: { total: 0, resueltos: 0 }
  };

  problemsList.forEach(p => {
    const rec = state[p.id];
    const diff = p.dificultad || 'basico';
    if (porDificultad[diff]) {
      porDificultad[diff].total++;
    }

    if (rec && rec.status === 'resuelto') {
      resueltos++;
      if (porDificultad[diff]) porDificultad[diff].resueltos++;
    } else if (rec && rec.status === 'en_progreso') {
      enProgreso++;
    }
  });

  const pendientes = total - resueltos;
  const porcentaje = total > 0 ? Math.round((resueltos / total) * 100) : 0;

  return {
    total,
    resueltos,
    enProgreso,
    pendientes,
    porcentaje,
    porDificultad
  };
}

/**
 * MOTOR DE EJECUCIÓN SANDBOX Y JUDGE EDUCATIVO - MARATÓN
 * Ejecuta código Python en un entorno seguro y evalúa casos de prueba.
 */

/**
 * Normaliza la salida para comparación justa (elimina espacios residuales por línea y \r).
 */
function normalizeOutput(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim()
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n');
}

/**
 * Ejecuta código Python con Skulpt capturando I/O y protegiendo contra timeouts.
 */
async function runPythonCode(code, inputStr = '', timeoutMs = 3500) {
  if (typeof window !== 'undefined' && typeof window.Sk === 'undefined') {
    return {
      success: false,
      output: '',
      error: 'El motor de ejecución de Python (Skulpt) se está inicializando. Por favor, reintenta en un momento.',
      errorType: 'InitError',
      pedagogicalAdvice: 'Espera unos segundos y vuelve a presionar Ejecutar.',
      isTimeout: false
    };
  }

  const Sk = typeof window !== 'undefined' ? window.Sk : global.Sk;
  if (!Sk) {
    return {
      success: false,
      output: '',
      error: 'Entorno de ejecución de Python no disponible.',
      errorType: 'MissingEngine',
      pedagogicalAdvice: 'Verifica la conexión o recarga la página.',
      isTimeout: false
    };
  }

  let output = '';
  const inputLines = inputStr ? inputStr.split(/\r?\n/) : [];
  let inputIdx = 0;

  try {
    Sk.configure({
      output: (text) => { output += text; },
      read: (x) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined) {
          throw new Error('Módulo no encontrado en el entorno seguro: ' + x);
        }
        return Sk.builtinFiles['files'][x];
      },
      inputfun: () => {
        if (inputIdx < inputLines.length) {
          return inputLines[inputIdx++];
        }
        return '';
      },
      inputfunTakesPrompt: false,
      execLimit: timeoutMs,
      python3: true
    });

    await Sk.misceval.asyncToPromise(() => {
      return Sk.importMainWithBody('<stdin>', false, code, true);
    });

    return {
      success: true,
      output: output,
      error: null,
      errorType: null,
      pedagogicalAdvice: '',
      isTimeout: false
    };
  } catch (err) {
    const errStr = err ? err.toString() : 'Error de ejecución';
    const isTimeout = errStr.includes('TimeLimitError') || errStr.includes('run time limit');
    let friendlyError = errStr;
    let errorType = 'RuntimeError';
    let pedagogicalAdvice = '';

    if (isTimeout) {
      errorType = 'TimeLimitError';
      friendlyError = `⚠️ Tiempo límite excedido (${timeoutMs / 1000}s).`;
      pedagogicalAdvice = 'Es posible que tu código contenga un ciclo infinito (while True sin condición de parada o con un contador que nunca se incrementa).';
    } else if (errStr.includes('EOFError')) {
      errorType = 'EOFError';
      friendlyError = '⚠️ EOFError: Tu programa intentó leer más datos de los que fueron suministrados en la entrada.';
      pedagogicalAdvice = 'Asegúrate de que tus llamadas a input() coincidan exactamente con la cantidad de líneas esperadas en el problema.';
    } else if (errStr.includes('ValueError')) {
      errorType = 'ValueError';
      friendlyError = '⚠️ ValueError: Error de conversión o formato de datos.';
      pedagogicalAdvice = 'Verifica que estés aplicando int() o float() únicamente a textos que contengan números válidos. Si una línea contiene múltiples números, usa .split().';
    } else if (errStr.includes('ZeroDivisionError')) {
      errorType = 'ZeroDivisionError';
      friendlyError = '⚠️ ZeroDivisionError: Se intentó dividir entre cero.';
      pedagogicalAdvice = 'Revisa que los denominadores o módulos no sean iguales a 0 antes de operar.';
    } else if (errStr.includes('IndexError')) {
      errorType = 'IndexError';
      friendlyError = '⚠️ IndexError: Posición de lista fuera de rango.';
      pedagogicalAdvice = 'Revisa que la lista o arreglo tenga suficientes elementos antes de acceder al índice especificado.';
    } else if (errStr.includes('SyntaxError')) {
      errorType = 'SyntaxError';
      friendlyError = `⚠️ ${errStr}`;
      pedagogicalAdvice = 'Revisa los dos puntos (:), paréntesis sin cerrar y la indentación de los bloques de código.';
    }

    return {
      success: false,
      output: output,
      error: friendlyError,
      errorType: errorType,
      pedagogicalAdvice: pedagogicalAdvice,
      isTimeout: isTimeout
    };
  }
}

/**
 * Evalúa el código de un estudiante contra los casos de prueba del problema.
 */
async function judgeSubmission(problem, studentCode, isFullCheck = true) {
  const visibleCases = problem.casosPrueba || problem.casos_prueba || [];
  const hiddenCases = isFullCheck ? (problem.casosPruebaOcultos || problem.casos_prueba_ocultos || []) : [];
  const casesToRun = [...visibleCases, ...hiddenCases];

  const results = [];
  let allPassed = true;
  let passedCount = 0;
  let firstError = null;

  for (let i = 0; i < casesToRun.length; i++) {
    const tc = casesToRun[i];
    const isVisible = tc.visible !== false;

    const runResult = await runPythonCode(studentCode, tc.entrada || '', 3500);

    if (!runResult.success) {
      allPassed = false;
      if (!firstError) firstError = runResult.error;
      results.push({
        id: tc.id || (i + 1),
        visible: isVisible,
        descripcion: tc.descripcion || `Caso de prueba #${i + 1}`,
        entrada: isVisible ? tc.entrada : '[Oculto para evaluación]',
        salida_esperada: isVisible ? tc.salidaEsperada : '[Oculto]',
        salida_obtenida: runResult.output,
        passed: false,
        error: runResult.error,
        advice: runResult.pedagogicalAdvice,
        status: runResult.isTimeout ? 'TIMEOUT' : 'ERROR'
      });
      if (runResult.isTimeout) break;
      continue;
    }

    const expected = tc.salidaEsperada !== undefined ? tc.salidaEsperada : tc.salida_esperada;
    const normActual = normalizeOutput(runResult.output);
    const normExpected = normalizeOutput(expected);
    const passed = normActual === normExpected;

    if (passed) {
      passedCount++;
    } else {
      allPassed = false;
    }

    results.push({
      id: tc.id || (i + 1),
      visible: isVisible,
      descripcion: tc.descripcion || `Caso de prueba #${i + 1}`,
      entrada: isVisible ? tc.entrada : '[Caso oculto]',
      salida_esperada: isVisible ? expected : '[Caso oculto]',
      salida_obtenida: isVisible ? runResult.output : (passed ? '[Correcto]' : '[Discrepancia en salida]'),
      passed: passed,
      error: null,
      status: passed ? 'AC' : 'WA' // Accepted / Wrong Answer
    });
  }

  // Generación de retroalimentación pedagógica
  let feedback = '';
  let feedbackType = 'info';

  if (allPassed) {
    feedback = (problem.retroalimentacion && (problem.retroalimentacion.exito || problem.retroalimentacion.acierto)) || '🎉 ¡Excelente! Has superado todas las pruebas de este reto.';
    feedbackType = 'success';
  } else if (firstError && firstError.includes('Tiempo límite')) {
    feedback = '⚠️ Tu programa se detuvo por tiempo límite. Revisa que tus ciclos while y for avancen hacia una condición de terminación.';
    feedbackType = 'warning';
  } else if (passedCount > 0) {
    feedback = `⚠️ Tu solución funciona para ${passedCount} de ${casesToRun.length} casos de prueba. Revisa los casos límite y el formato exacto de salida.`;
    feedbackType = 'warning';
  } else {
    feedback = (problem.retroalimentacion && (problem.retroalimentacion.errorComun || problem.retroalimentacion.error_comun)) || '💡 La salida de tu programa no coincide con lo esperado. Revisa los tipos de datos, operadores y el formato exacto.';
    feedbackType = 'error';
  }

  const score = casesToRun.length > 0 ? Math.round((passedCount / casesToRun.length) * 100) : 0;

  return {
    accepted: allPassed,
    passed: passedCount,
    total: casesToRun.length,
    score: score,
    results: results,
    feedback: feedback,
    feedbackType: feedbackType
  };
}

/**
 * VISTAS Y COMPONENTES UI - MARATÓN: SOLUCIÓN DE PROBLEMAS
 * Renderizado de biblioteca, filtros, editor Python y Judge interactivo.
 */





class MaratonUI {
  constructor(app) {
    this.app = app;
    this.activeFilters = {
      search: '',
      tema: 'Todos',
      dificultad: 'Todos',
      estado: 'Todos',
      unidad: 'Todas'
    };
    this.currentProblem = null;
    this.currentEvaluation = null;
    this.activeTestCaseTab = 0;
    this.isEvaluating = false;
  }

  getDifficultyBadge(diff) {
    switch(diff) {
      case 'inicial':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">🟢 Inicial</span>';
      case 'basico':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">🔵 Básico</span>';
      case 'intermedio':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">🟠 Intermedio</span>';
      case 'desafio':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">🔴 Desafío</span>';
      default:
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-800 text-gray-300">' + diff + '</span>';
    }
  }

  getStatusBadge(status) {
    switch(status) {
      case 'resuelto':
        return '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" title="Problema Resuelto"><i class="fas fa-check-circle text-[10px]"></i> Resuelto</span>';
      case 'en_progreso':
        return '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30" title="En Progreso"><i class="fas fa-circle-half-stroke text-[10px]"></i> En progreso</span>';
      default:
        return '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] text-gray-500 bg-gray-800/60 border border-gray-700/60" title="No Iniciado"><i class="far fa-circle text-[10px]"></i> No iniciado</span>';
    }
  }

  /**
   * Renderiza la Biblioteca de Problemas
   */
  renderLibrary(container, initialTheme = '') {
    if (initialTheme && initialTheme !== 'Todos') {
      this.activeFilters.tema = initialTheme;
    }

    const stats = getMaratonStats(MARATON_PROBLEMS);
    const maratonState = getMaratonState();

    const allTemas = ['Todos'];
    const allUnidades = ['Todas'];

    MARATON_PROBLEMS.forEach(p => {
      p.temas.forEach(t => { if (!allTemas.includes(t)) allTemas.push(t); });
      if (p.unidad && !allUnidades.includes(p.unidad)) allUnidades.push(p.unidad);
    });

    const filtered = MARATON_PROBLEMS.filter(p => {
      const q = this.activeFilters.search.toLowerCase().trim();
      if (q) {
        const matchesNum = String(p.numero).includes(q);
        const matchesTitle = p.titulo.toLowerCase().includes(q);
        const matchesConcepts = p.conceptos.some(c => c.toLowerCase().includes(q));
        if (!matchesNum && !matchesTitle && !matchesConcepts) return false;
      }
      if (this.activeFilters.tema !== 'Todos' && !p.temas.includes(this.activeFilters.tema)) return false;
      if (this.activeFilters.dificultad !== 'Todos' && p.dificultad !== this.activeFilters.dificultad) return false;
      if (this.activeFilters.unidad !== 'Todas' && p.unidad !== this.activeFilters.unidad) return false;

      const record = maratonState[p.id];
      const status = (record && record.status) || 'no_iniciado';
      if (this.activeFilters.estado !== 'Todos' && status !== this.activeFilters.estado) return false;

      return true;
    });

    const html = `
      <div class="w-full max-w-6xl xl:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <!-- Migas de Pan -->
        <nav class="flex items-center gap-2 text-xs text-gray-400 mb-4 flex-wrap">
          <span class="text-gray-500 font-medium">Leo Gaviria</span>
          <span class="text-gray-600">/</span>
          <span class="text-emerald-400 font-medium flex items-center gap-1">
            <i class="fas fa-person-running text-xs"></i> Maratón: Solución de problemas
          </span>
        </nav>

        <!-- Cabecera de Maratón -->
        <header class="bg-gradient-to-br from-[#0c1816] via-[#101924] to-[#0c121e] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
          <div class="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div class="flex-1">
              <div class="flex items-center gap-2.5 mb-2">
                <span class="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-lg shadow-sm">
                  <i class="fas fa-person-running"></i>
                </span>
                <span class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Judge Online Educativo Integrado
                </span>
              </div>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                🏃 Maratón: Solución de problemas
              </h1>
              <p class="text-xs sm:text-sm text-gray-300 mt-2 max-w-2xl leading-relaxed">
                Biblioteca transversal de problemas algorítmicos. Pon a prueba tus habilidades de programación en Python, ejecuta tu código en sandbox seguro, evalúa con casos de prueba y recibe retroalimentación pedagógica en tiempo real.
              </p>
            </div>

            <!-- Widget de Progreso del Estudiante -->
            <div class="bg-[#0b0e14]/90 border border-emerald-500/30 rounded-xl p-4 sm:p-5 w-full md:w-80 shrink-0 shadow-lg backdrop-blur-sm">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-white flex items-center gap-1.5">
                  <i class="fas fa-trophy text-amber-400 text-xs"></i> Tu Progreso en Maratón
                </span>
                <span class="text-xs font-mono font-bold text-emerald-400">${stats.resueltos} / ${stats.total}</span>
              </div>

              <div class="w-full h-2.5 bg-gray-800/80 rounded-full overflow-hidden mb-3">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" style="width: ${stats.porcentaje}%"></div>
              </div>

              <div class="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
                <div class="bg-[#141923] p-1.5 rounded border border-gray-800">
                  <span class="text-emerald-400 block font-bold">${stats.porDificultad.inicial.resueltos}/${stats.porDificultad.inicial.total}</span>
                  <span class="text-gray-500 text-[9px]">Inicial</span>
                </div>
                <div class="bg-[#141923] p-1.5 rounded border border-gray-800">
                  <span class="text-sky-400 block font-bold">${stats.porDificultad.basico.resueltos}/${stats.porDificultad.basico.total}</span>
                  <span class="text-gray-500 text-[9px]">Básico</span>
                </div>
                <div class="bg-[#141923] p-1.5 rounded border border-gray-800">
                  <span class="text-amber-400 block font-bold">${stats.porDificultad.intermedio.resueltos}/${stats.porDificultad.intermedio.total}</span>
                  <span class="text-gray-500 text-[9px]">Interm.</span>
                </div>
                <div class="bg-[#141923] p-1.5 rounded border border-gray-800">
                  <span class="text-rose-400 block font-bold">${stats.porDificultad.desafio.resueltos}/${stats.porDificultad.desafio.total}</span>
                  <span class="text-gray-500 text-[9px]">Desafío</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Barra de Filtros Combinables -->
        <div class="bg-[#121622] border border-gray-800 rounded-2xl p-4 mb-6 shadow-md">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <!-- Búsqueda textual -->
            <div class="lg:col-span-1">
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Buscar reto</label>
              <div class="relative">
                <i class="fas fa-search absolute left-3 top-2.5 text-xs text-gray-500"></i>
                <input 
                  type="text" 
                  id="maraton-filter-search" 
                  value="${this.activeFilters.search}" 
                  placeholder="# o nombre..." 
                  class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 outline-none focus:border-emerald-500/50 transition"
                >
              </div>
            </div>

            <!-- Filtro Tema -->
            <div>
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Tema</label>
              <select 
                id="maraton-filter-tema" 
                class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-gray-200 outline-none focus:border-emerald-500/50 transition cursor-pointer"
              >
                ${allTemas.map(t => `<option value="${t}" ${this.activeFilters.tema === t ? 'selected' : ''}>${t}</option>`).join('')}
              </select>
            </div>

            <!-- Filtro Dificultad -->
            <div>
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Dificultad</label>
              <select 
                id="maraton-filter-dificultad" 
                class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-gray-200 outline-none focus:border-emerald-500/50 transition cursor-pointer"
              >
                <option value="Todos" ${this.activeFilters.dificultad === 'Todos' ? 'selected' : ''}>Todas</option>
                <option value="inicial" ${this.activeFilters.dificultad === 'inicial' ? 'selected' : ''}>🟢 Inicial</option>
                <option value="basico" ${this.activeFilters.dificultad === 'basico' ? 'selected' : ''}>🔵 Básico</option>
                <option value="intermedio" ${this.activeFilters.dificultad === 'intermedio' ? 'selected' : ''}>🟠 Intermedio</option>
                <option value="desafio" ${this.activeFilters.dificultad === 'desafio' ? 'selected' : ''}>🔴 Desafío</option>
              </select>
            </div>

            <!-- Filtro Estado -->
            <div>
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Estado</label>
              <select 
                id="maraton-filter-estado" 
                class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-gray-200 outline-none focus:border-emerald-500/50 transition cursor-pointer"
              >
                <option value="Todos" ${this.activeFilters.estado === 'Todos' ? 'selected' : ''}>Todos</option>
                <option value="resuelto" ${this.activeFilters.estado === 'resuelto' ? 'selected' : ''}>✓ Resueltos</option>
                <option value="en_progreso" ${this.activeFilters.estado === 'en_progreso' ? 'selected' : ''}>◐ En progreso</option>
                <option value="no_iniciado" ${this.activeFilters.estado === 'no_iniciado' ? 'selected' : ''}>○ No iniciados</option>
              </select>
            </div>

            <!-- Filtro Unidad -->
            <div>
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Unidad</label>
              <select 
                id="maraton-filter-unidad" 
                class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-gray-200 outline-none focus:border-emerald-500/50 transition cursor-pointer"
              >
                ${allUnidades.map(u => `<option value="${u}" ${this.activeFilters.unidad === u ? 'selected' : ''}>${u}</option>`).join('')}
              </select>
            </div>
          </div>

          <!-- Resumen de Filtro Activo y Botón Limpiar -->
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-800/80 text-xs text-gray-400 flex-wrap gap-2">
            <span class="font-mono text-[11px]">
              Mostrando <strong class="text-emerald-400 font-bold">${filtered.length}</strong> de ${MARATON_PROBLEMS.length} problemas
            </span>
            <button 
              id="maraton-clear-filters-btn" 
              class="text-[11px] text-gray-400 hover:text-emerald-400 transition cursor-pointer flex items-center gap-1 font-semibold"
            >
              <i class="fas fa-rotate-left text-[10px]"></i> Restablecer filtros
            </button>
          </div>
        </div>

        <!-- Listado de Problemas (Tabla Responsive) -->
        <div class="bg-[#121622] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-[#161c28] border-b border-gray-800 text-gray-400 font-mono text-[11px] uppercase tracking-wider">
                  <th class="py-3 px-4 w-16 text-center">#</th>
                  <th class="py-3 px-4 min-w-[220px]">Problema y Conceptos</th>
                  <th class="py-3 px-4 min-w-[120px]">Tema</th>
                  <th class="py-3 px-4 min-w-[140px] hidden md:table-cell">Unidad</th>
                  <th class="py-3 px-4 w-28 text-center">Dificultad</th>
                  <th class="py-3 px-4 w-28 text-center">Estado</th>
                  <th class="py-3 px-4 w-32 text-right">Acción</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/70">
                ${filtered.length === 0 ? `
                  <tr>
                    <td colspan="7" class="py-12 text-center text-gray-500 font-mono">
                      <i class="fas fa-inbox text-2xl mb-2 text-gray-600 block"></i>
                      No se encontraron problemas con los filtros seleccionados.
                    </td>
                  </tr>
                ` : filtered.map(p => {
                  const rec = maratonState[p.id];
                  const status = (rec && rec.status) || 'no_iniciado';

                  return `
                    <tr class="hover:bg-[#151c29]/70 transition group cursor-pointer" onclick="window.app.loadMaratonProblem(${p.numero})">
                      <td class="py-3 px-4 text-center font-mono font-bold text-gray-400 group-hover:text-emerald-400">
                        ${p.numero}
                      </td>
                      <td class="py-3 px-4">
                        <div class="font-bold text-white group-hover:text-emerald-300 transition text-sm mb-1">
                          ${p.titulo}
                        </div>
                        <div class="flex flex-wrap gap-1">
                          ${p.conceptos.slice(0, 3).map(c => `
                            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-800/80 text-gray-300 border border-gray-700/50">
                              ${c}
                            </span>
                          `).join('')}
                        </div>
                      </td>
                      <td class="py-3 px-4 text-gray-300 font-medium">
                        ${p.temas.join(', ')}
                      </td>
                      <td class="py-3 px-4 text-gray-400 text-[11px] hidden md:table-cell">
                        ${p.unidad || '—'}
                      </td>
                      <td class="py-3 px-4 text-center whitespace-nowrap">
                        ${this.getDifficultyBadge(p.dificultad)}
                      </td>
                      <td class="py-3 px-4 text-center whitespace-nowrap">
                        ${this.getStatusBadge(status)}
                      </td>
                      <td class="py-3 px-4 text-right whitespace-nowrap" onclick="event.stopPropagation();">
                        <button 
                          onclick="window.app.loadMaratonProblem(${p.numero})"
                          class="px-3 py-1.5 rounded-lg bg-[#1e2638] hover:bg-emerald-600 text-gray-200 hover:text-white border border-gray-700/70 hover:border-emerald-500 text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
                        >
                          <span>Resolver</span>
                          <i class="fas fa-arrow-right text-[10px]"></i>
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    this.bindLibraryEvents(container);
  }

  bindLibraryEvents(container) {
    const searchInput = container.querySelector('#maraton-filter-search');
    const temaSelect = container.querySelector('#maraton-filter-tema');
    const diffSelect = container.querySelector('#maraton-filter-dificultad');
    const estadoSelect = container.querySelector('#maraton-filter-estado');
    const unidadSelect = container.querySelector('#maraton-filter-unidad');
    const clearBtn = container.querySelector('#maraton-clear-filters-btn');

    const update = () => {
      this.activeFilters.search = searchInput ? searchInput.value : '';
      this.activeFilters.tema = temaSelect ? temaSelect.value : 'Todos';
      this.activeFilters.dificultad = diffSelect ? diffSelect.value : 'Todos';
      this.activeFilters.estado = estadoSelect ? estadoSelect.value : 'Todos';
      this.activeFilters.unidad = unidadSelect ? unidadSelect.value : 'Todas';
      this.renderLibrary(container);
    };

    if (searchInput) searchInput.addEventListener('input', update);
    if (temaSelect) temaSelect.addEventListener('change', update);
    if (diffSelect) diffSelect.addEventListener('change', update);
    if (estadoSelect) estadoSelect.addEventListener('change', update);
    if (unidadSelect) unidadSelect.addEventListener('change', update);

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.activeFilters = { search: '', tema: 'Todos', dificultad: 'Todos', estado: 'Todos', unidad: 'Todas' };
        this.renderLibrary(container);
      });
    }
  }

  /**
   * Renderiza la vista individual de resolución de problema
   */
  renderProblemView(container, problem) {
    this.currentProblem = problem;
    this.currentEvaluation = null;
    this.activeTestCaseTab = 0;

    const record = getProblemRecord(problem.id);
    const codeToShow = record.codigo_guardado || problem.codigo_inicial;

    const html = `
      <div class="w-full max-w-6xl xl:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <!-- Migas de Pan -->
        <nav class="flex items-center justify-between gap-2 text-xs text-gray-400 mb-4 flex-wrap">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-gray-500 font-medium">Leo Gaviria</span>
            <span class="text-gray-600">/</span>
            <button onclick="window.app.showMaraton()" class="hover:text-emerald-400 transition font-medium text-gray-300">
              🏃 Maratón
            </button>
            <span class="text-gray-600">/</span>
            <span class="text-emerald-400 font-medium">#${problem.numero} - ${problem.titulo}</span>
          </div>

          <button 
            onclick="window.app.showMaraton()" 
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141923] border border-gray-800 hover:border-gray-700 text-xs text-gray-300 hover:text-white transition cursor-pointer"
          >
            <i class="fas fa-arrow-left text-[10px]"></i> Volver a la Biblioteca
          </button>
        </nav>

        <!-- Cabecera del Reto -->
        <header class="border-b border-gray-800/80 pb-5 mb-6">
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div class="flex items-center gap-2.5 mb-1.5 flex-wrap">
                <span class="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Problema ${problem.numero}
                </span>
                ${this.getDifficultyBadge(problem.dificultad)}
                <span class="text-xs text-gray-400 font-medium px-2 py-0.5 rounded bg-gray-800/70">
                  ${problem.temas.join(', ')}
                </span>
                ${problem.unidad ? `<span class="text-xs text-gray-500 font-mono">${problem.unidad}</span>` : ''}
              </div>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                ${problem.titulo}
              </h1>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <div id="maraton-problem-status-pill">
                ${this.getStatusBadge(record.status)}
              </div>
              <span class="text-[11px] font-mono text-gray-500">
                Intentos: <strong id="maraton-attempts-counter" class="text-gray-300">${record.intentos || 0}</strong>
              </span>
            </div>
          </div>
        </header>

        <!-- Contenedor Principal: 2 Columnas (Descripción + Editor/Judge) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Columna Izquierda: Enunciado Pedagógico (5 columnas) -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Descripción -->
            <div class="bg-[#121622] border border-gray-800 rounded-2xl p-5 shadow-sm">
              <h3 class="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-2">
                <i class="fas fa-file-lines"></i> Descripción del Problema
              </h3>
              <div class="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed space-y-3">
                <p>${problem.descripcion}</p>
              </div>
            </div>

            <!-- Entrada y Salida -->
            <div class="grid grid-cols-1 gap-4">
              <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
                <h4 class="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <i class="fas fa-right-to-bracket text-[11px]"></i> Especificación de Entrada
                </h4>
                <p class="text-xs text-gray-300 leading-relaxed">${problem.entrada}</p>
              </div>

              <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
                <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <i class="fas fa-right-from-bracket text-[11px]"></i> Especificación de Salida
                </h4>
                <p class="text-xs text-gray-300 leading-relaxed">${problem.salida}</p>
              </div>
            </div>

            <!-- Ejemplos -->
            <div class="bg-[#121622] border border-gray-800 rounded-2xl p-5 shadow-sm">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                  <i class="fas fa-vial"></i> Ejemplo de Ejecución
                </h3>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <span class="text-[10px] text-gray-500 font-bold uppercase block mb-1">Entrada de Ejemplo</span>
                  <pre class="bg-[#080b11] p-3 rounded-lg border border-gray-800 text-emerald-300 overflow-x-auto min-h-[50px]"><code>${problem.ejemplo_entrada || '(Sin entrada)'}</code></pre>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 font-bold uppercase block mb-1">Salida Esperada</span>
                  <pre class="bg-[#080b11] p-3 rounded-lg border border-gray-800 text-sky-300 overflow-x-auto min-h-[50px]"><code>${problem.ejemplo_salida}</code></pre>
                </div>
              </div>
            </div>

            <!-- Conceptos Relacionados -->
            <div class="bg-[#121622] border border-gray-800 rounded-2xl p-4">
              <h4 class="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <i class="fas fa-lightbulb text-[11px]"></i> Conceptos Clave para Practicar
              </h4>
              <div class="flex flex-wrap gap-1.5">
                ${problem.conceptos.map(c => `
                  <span class="px-2 py-1 rounded-md bg-[#192132] border border-gray-700 text-gray-300 text-xs font-mono">
                    ${c}
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Pistas Progresivas (Acordeón) -->
            ${problem.pistas && problem.pistas.length > 0 ? `
              <div class="bg-[#121622] border border-gray-800 rounded-2xl p-5 shadow-sm">
                <h4 class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <i class="fas fa-wand-magic-sparkles text-[11px]"></i> Pistas Progresivas de Apoyo
                </h4>
                <div class="space-y-2">
                  ${problem.pistas.map((pista, idx) => `
                    <details class="group bg-[#0b0e14] border border-gray-800 rounded-xl p-3 cursor-pointer">
                      <summary class="text-xs font-semibold text-gray-300 group-hover:text-amber-300 flex items-center justify-between list-none">
                        <span class="flex items-center gap-2">
                          <i class="fas fa-key text-amber-400/80 text-[10px]"></i>
                          <span>Pista ${idx + 1}</span>
                        </span>
                        <span class="text-[10px] text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p class="mt-2.5 text-xs text-gray-300 leading-relaxed border-t border-gray-800/80 pt-2">
                        ${pista}
                      </p>
                    </details>
                  `).join('')}
                </div>
              </div>
            ` : ''}

          </div>

          <!-- Columna Derecha: Editor de Código + Judge (7 columnas) -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Tarjeta del Editor Python -->
            <div class="bg-[#121622] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <!-- Barra Superior del Editor -->
              <div class="bg-[#161c28] px-4 py-2.5 border-b border-gray-800 flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                    <i class="fab fa-python text-sm"></i> solución.py
                  </span>
                  <span class="text-[11px] text-gray-500 font-mono hidden sm:inline">• Python 3 Sandbox</span>
                </div>

                <div class="flex items-center gap-1.5">
                  <button 
                    id="maraton-copy-code-btn" 
                    onclick="window.copyCodeToClipboard(this)"
                    class="px-2 py-1 rounded bg-[#1e2638] hover:bg-gray-700 text-gray-300 text-[11px] font-mono flex items-center gap-1 border border-gray-700 transition cursor-pointer"
                    title="Copiar código al portapapeles"
                  >
                    <i class="fas fa-copy text-[10px]"></i> <span>Copiar</span>
                  </button>
                  <button 
                    id="maraton-reset-code-btn" 
                    class="px-2 py-1 rounded bg-[#1e2638] hover:bg-rose-900/40 text-gray-300 hover:text-rose-300 text-[11px] font-mono flex items-center gap-1 border border-gray-700 transition cursor-pointer"
                    title="Reiniciar código inicial"
                  >
                    <i class="fas fa-rotate-left text-[10px]"></i> <span>Reiniciar</span>
                  </button>
                </div>
              </div>

              <!-- Área de Edición de Código con Soporte Tab y Numeración -->
              <div class="relative bg-[#07090e] p-3 sm:p-4 font-mono text-xs">
                <textarea 
                  id="maraton-code-editor" 
                  rows="14"
                  spellcheck="false"
                  autocomplete="off"
                  autocapitalize="off"
                  class="w-full bg-transparent text-gray-200 outline-none resize-y font-mono text-xs leading-relaxed border-none focus:ring-0 selection:bg-emerald-500/30"
                  placeholder="# Escribe tu solución aquí"
                >${codeToShow}</textarea>
              </div>

              <!-- Barra Inferior de Controles del Editor -->
              <div class="bg-[#141923] p-3 sm:px-4 sm:py-3 border-t border-gray-800 flex items-center justify-between flex-wrap gap-3">
                <span class="text-[11px] text-gray-500 font-mono hidden sm:inline flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 bg-gray-800 rounded text-[9px] text-gray-400 border border-gray-700">Ctrl</kbd> + <kbd class="px-1.5 py-0.5 bg-gray-800 rounded text-[9px] text-gray-400 border border-gray-700">Enter</kbd> para Comprobar
                </span>

                <div class="flex items-center gap-2 ml-auto">
                  <!-- Botón Ejecutar (solo casos visibles rápidos) -->
                  <button 
                    id="maraton-run-btn" 
                    class="px-3.5 py-2 rounded-xl bg-[#1e2638] hover:bg-gray-700 text-gray-200 hover:text-white text-xs font-semibold border border-gray-700 transition cursor-pointer flex items-center gap-1.5 shadow-sm"
                    title="Ejecutar contra casos de prueba de ejemplo"
                  >
                    <i class="fas fa-play text-sky-400 text-xs"></i>
                    <span>▶ Ejecutar</span>
                  </button>

                  <!-- Botón Comprobar (evaluación completa con judge) -->
                  <button 
                    id="maraton-check-btn" 
                    class="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold transition cursor-pointer flex items-center gap-2 shadow-lg shadow-emerald-600/30"
                    title="Evaluar solución completa con casos visibles y ocultos"
                  >
                    <i class="fas fa-check-double text-xs"></i>
                    <span>✓ Comprobar Solución</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Panel de Evaluación del Judge (Resultados y Casos de Prueba) -->
            <div id="maraton-judge-results-panel" class="bg-[#121622] border border-gray-800 rounded-2xl p-5 shadow-xl min-h-[160px] flex flex-col justify-center">
              <div class="text-center py-6 text-xs text-gray-500 font-mono">
                <i class="fas fa-terminal text-2xl text-gray-600 mb-2 block"></i>
                Presiona <strong>▶ Ejecutar</strong> o <strong>✓ Comprobar Solución</strong> para evaluar tu código.
              </div>
            </div>

          </div>

        </div>
      </div>
    `;

    container.innerHTML = html;
    this.bindProblemEvents(container, problem);
  }

  bindProblemEvents(container, problem) {
    const editor = container.querySelector('#maraton-code-editor');
    const runBtn = container.querySelector('#maraton-run-btn');
    const checkBtn = container.querySelector('#maraton-check-btn');
    const resetBtn = container.querySelector('#maraton-reset-code-btn');

    if (editor) {
      editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = editor.selectionStart;
          const end = editor.selectionEnd;
          const val = editor.value;
          editor.value = val.substring(0, start) + '    ' + val.substring(end);
          editor.selectionStart = editor.selectionEnd = start + 4;
          saveDraftCode(problem.id, editor.value);
        } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          if (checkBtn) checkBtn.click();
        }
      });

      editor.addEventListener('input', () => {
        saveDraftCode(problem.id, editor.value);
      });
    }

    if (resetBtn && editor) {
      resetBtn.addEventListener('click', () => {
        if (confirm('¿Deseas reiniciar el código a la plantilla inicial del reto?')) {
          editor.value = problem.codigo_inicial;
          saveDraftCode(problem.id, editor.value);
          this.app.showToast('Código inicial restablecido', 'info');
        }
      });
    }

    if (runBtn) {
      runBtn.addEventListener('click', () => this.handleEvaluate(problem, editor.value, false));
    }

    if (checkBtn) {
      checkBtn.addEventListener('click', () => this.handleEvaluate(problem, editor.value, true));
    }
  }

  async handleEvaluate(problem, code, isFullCheck) {
    if (this.isEvaluating) return;
    this.isEvaluating = true;

    const panel = document.getElementById('maraton-judge-results-panel');
    const runBtn = document.getElementById('maraton-run-btn');
    const checkBtn = document.getElementById('maraton-check-btn');

    if (runBtn) runBtn.disabled = true;
    if (checkBtn) checkBtn.disabled = true;

    if (panel) {
      panel.innerHTML = `
        <div class="py-8 text-center">
          <div class="inline-block w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-3"></div>
          <p class="text-xs font-mono text-gray-300 font-semibold">
            ${isFullCheck ? 'Evaluando contra la suite completa de casos de prueba...' : 'Ejecutando programa en sandbox seguro...'}
          </p>
          <span class="text-[11px] text-gray-500 font-mono block mt-1">Aislamiento de procesos y control de tiempo activo</span>
        </div>
      `;
    }

    try {
      const evaluation = await judgeSubmission(problem, code, isFullCheck);
      this.currentEvaluation = evaluation;

      if (isFullCheck) {
        const updatedRecord = recordProblemEvaluation(problem.id, code, evaluation);
        const pill = document.getElementById('maraton-problem-status-pill');
        if (pill) pill.innerHTML = this.getStatusBadge(updatedRecord.status);
        const counter = document.getElementById('maraton-attempts-counter');
        if (counter) counter.innerText = updatedRecord.intentos;
      }

      this.renderEvaluationResults(panel, evaluation, isFullCheck);
    } catch (e) {
      if (panel) {
        panel.innerHTML = `
          <div class="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs">
            <i class="fas fa-triangle-exclamation mr-1.5"></i> Error al evaluar: ${e.message || e}
          </div>
        `;
      }
    } finally {
      this.isEvaluating = false;
      if (runBtn) runBtn.disabled = false;
      if (checkBtn) checkBtn.disabled = false;
    }
  }

  renderEvaluationResults(panel, evalResult, isFullCheck) {
    if (!panel) return;

    const isAll = evalResult.allPassed;
    const bannerBg = isAll ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' : 'bg-amber-500/15 border-amber-500/40 text-amber-300';
    const bannerIcon = isAll ? 'fa-circle-check text-emerald-400' : 'fa-triangle-exclamation text-amber-400';
    const bannerTitle = isAll ? '🎉 ¡Pruebas Superadas Exitosamente!' : '⚠️ Discrepancia en Casos de Prueba';

    const activeTab = Math.min(this.activeTestCaseTab, evalResult.results.length - 1);
    const currentCase = evalResult.results[activeTab] || evalResult.results[0];

    const html = `
      <div class="space-y-4 animate-fade-in">
        
        <!-- Banner de Estado Global -->
        <div class="p-4 rounded-xl border ${bannerBg} flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <i class="fas ${bannerIcon} text-lg mt-0.5 shrink-0"></i>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider">${bannerTitle}</h4>
              <p class="text-xs mt-1 leading-relaxed text-gray-200">
                ${evalResult.feedback}
              </p>
            </div>
          </div>
          <div class="text-right shrink-0 font-mono text-xs">
            <span class="font-bold ${isAll ? 'text-emerald-400' : 'text-amber-400'}">
              ${evalResult.passedCount} / ${evalResult.totalCount}
            </span>
            <span class="text-[10px] text-gray-400 block">casos pasados</span>
          </div>
        </div>

        <!-- Pestañas de Casos de Prueba Evaluados -->
        <div>
          <div class="flex items-center gap-1.5 border-b border-gray-800 pb-2 overflow-x-auto no-scrollbar">
            ${evalResult.results.map((r, idx) => `
              <button 
                type="button"
                onclick="window.app.maratonUI.switchCaseTab(${idx})"
                class="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition cursor-pointer flex items-center gap-1.5 shrink-0 ${activeTab === idx ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-[#161c28] text-gray-400 hover:text-white border border-transparent'}"
              >
                <span class="w-2 h-2 rounded-full ${r.passed ? 'bg-emerald-400' : 'bg-rose-400'}"></span>
                <span>${r.visible ? `Caso ${idx + 1}` : `Caso Oculto ${idx + 1}`}</span>
              </button>
            `).join('')}
          </div>

          <!-- Detalle del Caso Seleccionado -->
          ${currentCase ? `
            <div class="mt-3 space-y-3">
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-400 font-mono">${currentCase.descripcion}</span>
                <span class="font-mono font-bold ${currentCase.passed ? 'text-emerald-400' : 'text-rose-400'}">
                  ${currentCase.passed ? '✓ Superado (AC)' : (currentCase.status === 'TIMEOUT' ? '⏱ Tiempo Límite Excedido' : '❌ Salida Incorrecta (WA)')}
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span class="text-[10px] text-gray-500 uppercase font-bold block mb-1">Entrada</span>
                  <pre class="bg-[#080b11] p-2.5 rounded border border-gray-800 text-gray-300 min-h-[42px] overflow-x-auto"><code>${currentCase.entrada || '(Sin entrada)'}</code></pre>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 uppercase font-bold block mb-1">Salida Esperada</span>
                  <pre class="bg-[#080b11] p-2.5 rounded border border-gray-800 text-sky-300 min-h-[42px] overflow-x-auto"><code>${currentCase.salida_esperada}</code></pre>
                </div>
              </div>

              <div>
                <span class="text-[10px] text-gray-500 uppercase font-bold block mb-1">Salida Obtenida de tu Código</span>
                <pre class="bg-[#080b11] p-2.5 rounded border border-gray-800 ${currentCase.passed ? 'text-emerald-300' : 'text-rose-300'} overflow-x-auto min-h-[42px]"><code>${currentCase.salida_obtenida || (currentCase.error ? currentCase.error : '(Salida vacía)')}</code></pre>
              </div>

              ${currentCase.error ? `
                <div class="p-3 bg-rose-950/30 border border-rose-500/30 rounded-xl text-rose-300 text-xs font-mono">
                  ${currentCase.error}
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>

      </div>
    `;

    panel.innerHTML = html;
  }

  switchCaseTab(idx) {
    this.activeTestCaseTab = idx;
    const panel = document.getElementById('maraton-judge-results-panel');
    if (panel && this.currentEvaluation) {
      this.renderEvaluationResults(panel, this.currentEvaluation, true);
    }
  }
}


  // =========================================================================
  // 3. GESTOR DE ALMACENAMIENTO (LOCALSTORAGE)
  // =========================================================================

  const STORAGE_KEY_PROGRESS = "leogaviria_progress";
  const STORAGE_KEY_THEME = "leogaviria_theme";
  const STORAGE_KEY_COURSE = "leogaviria_current_course";

  function getCompletedTopics() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function isTopicCompleted(topicId) {
    return getCompletedTopics().includes(topicId);
  }

  function toggleTopicCompleted(topicId) {
    const completed = getCompletedTopics();
    const idx = completed.indexOf(topicId);
    let isNow = false;
    if (idx > -1) {
      completed.splice(idx, 1);
      isNow = false;
    } else {
      completed.push(topicId);
      isNow = true;
    }
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(completed));
    } catch (e) {}
    return { completed, isNowCompleted: isNow };
  }

  function getThemePreference() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_THEME);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  function setThemePreference(theme) {
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch (e) {}
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute("data-theme", theme);
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        try {
          iframe.contentWindow.postMessage({ type: 'THEME_CHANGE', theme }, '*');
          if (iframe.contentDocument && iframe.contentDocument.documentElement) {
            iframe.contentDocument.documentElement.setAttribute('data-theme', theme);
          }
        } catch (e) {}
      });
    }
  }

  // =========================================================================
  // 4. MOTOR DE BÚSQUEDA
  // =========================================================================

  function searchCurriculum(query, curriculum) {
    if (!query || query.trim() === '') return [];
    const q = query.toLowerCase().trim();
    const results = [];

    for (const week of curriculum) {
      const weekMatches = week.title.toLowerCase().includes(q) || (week.description && week.description.toLowerCase().includes(q));

      for (const topic of week.topics) {
        const titleMatches = topic.title.toLowerCase().includes(q);
        const diffMatches = topic.difficulty.toLowerCase().includes(q);

        if (titleMatches || diffMatches || weekMatches) {
          results.push({
            topicId: topic.id,
            topicTitle: topic.title,
            weekTitle: week.title,
            weekNumber: week.number,
            difficulty: topic.difficulty,
            duration: topic.duration,
            hasAnimation: topic.hasAnimation,
            score: titleMatches ? 2 : 1
          });
        }
      }
    }
    return results.sort((a, b) => b.score - a.score);
  }

  // =========================================================================
  // 5. CONTROLADOR PRINCIPAL DE LA APLICACIÓN
  // =========================================================================

    // =========================================================================
  // HELPER GLOBAL: COPIAR CÓDIGO AL PORTAPAPELES
  // =========================================================================
  window.copyCodeToClipboard = function(btn) {
    if (!btn) return;
    const card = btn.closest('.code-block-card, .code-card-wrapper') || btn.parentElement.parentElement;
    const codeEl = card ? card.querySelector('code, pre') : null;
    const text = codeEl ? (codeEl.innerText || codeEl.textContent).trim() : '';
    if (!text) return;

    const setCopied = () => {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check text-emerald-400"></i><span class="text-emerald-400 font-medium text-[11px] ml-1">¡Copiado!</span>';
      btn.classList.add('border-emerald-500/60');
      if (window.app && typeof window.app.showToast === 'function') {
        window.app.showToast('Código copiado al portapapeles', 'success');
      }
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.classList.remove('border-emerald-500/60');
      }, 2000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(setCopied).catch(() => {
        fallbackCopy(text);
        setCopied();
      });
    } else {
      fallbackCopy(text);
      setCopied();
    }

    function fallbackCopy(str) {
      const ta = document.createElement('textarea');
      ta.value = str;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      ta.style.top = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try { document.execCommand('copy'); } catch(e) {}
      document.body.removeChild(ta);
    }
  };

  class LeoGaviriaApp {
    constructor() {
      this.currentCourseId = 'prog';
      this.currentTopicId = null;
      this.activeWeekId = null;
      this.sidebarCollapsed = false;
      this.openWeeks = new Set();
      this.allWeeksExpanded = false;
      this.maratonUI = new MaratonUI(this);

      this.initElements();
      this.initTheme();
      this.initCourse();
      this.initSidebarResizer();
      this.initEvents();
      this.handleInitialRoute();
    }

    get currentCurriculum() {
      return COURSES[this.currentCourseId] ? COURSES[this.currentCourseId].curriculum : CURRICULUM_PROG2;
    }

    initElements() {
      this.sidebarEl = document.getElementById('sidebar');
      this.sidebarContentEl = document.getElementById('sidebar-content');
      this.sidebarCourseTitleEl = document.getElementById('sidebar-course-title');
      this.sidebarCourseSubtitleEl = document.getElementById('sidebar-course-subtitle');
      this.sidebarWeeksCountEl = document.getElementById('sidebar-weeks-count');
      this.toggleSidebarWidthBtn = document.getElementById('toggle-sidebar-width-btn');
      this.sidebarResizerEl = document.getElementById('sidebar-resizer');
      this.expandAllWeeksBtn = document.getElementById('expand-all-weeks-btn');
      this.collapseAllWeeksBtn = document.getElementById('collapse-all-weeks-btn');
      this.contentAreaEl = document.getElementById('content-area');
      this.progressFillEl = document.getElementById('progress-fill');
      this.progressTextEl = document.getElementById('progress-percentage');
      this.progressFractionEl = document.getElementById('progress-fraction');
      this.courseLabelEl = document.getElementById('current-course-label');
      
      this.dropdownBtn = document.getElementById('asignaturas-dropdown-btn');
      this.dropdownMenu = document.getElementById('asignaturas-menu');
      this.dropdownArrow = document.getElementById('dropdown-arrow');

      this.sidebarSearchInput = document.getElementById('sidebar-search');
      this.searchModalEl = document.getElementById('search-modal');
      this.searchModalInput = document.getElementById('modal-search-input');
      this.searchResultsEl = document.getElementById('search-results');

      this.themeToggleBtn = document.getElementById('theme-toggle-btn');
      this.guideModalEl = document.getElementById('guide-modal');
      this.widgetPopupModalEl = document.getElementById('widget-popup-modal');
    }

    initTheme() {
      const savedTheme = getThemePreference();
      setThemePreference(savedTheme);
      this.updateThemeIcon(savedTheme);
    }

    updateThemeIcon(theme) {
      if (!this.themeToggleBtn) return;
      const icon = this.themeToggleBtn.querySelector('i');
      if (icon) {
        if (theme === 'light') {
          icon.className = 'fas fa-moon text-sm text-sky-500';
          this.themeToggleBtn.title = 'Cambiar a Modo Oscuro';
        } else {
          icon.className = 'fas fa-sun text-sm text-amber-400';
          this.themeToggleBtn.title = 'Cambiar a Modo Claro';
        }
      }
    }

    initCourse() {
      const savedCourse = localStorage.getItem(STORAGE_KEY_COURSE);
      if (savedCourse && COURSES[savedCourse]) {
        this.currentCourseId = (savedCourse === 'prog1' || savedCourse === 'prog2') ? 'prog' : savedCourse;
      } else {
        this.currentCourseId = 'prog';
      }
      this.updateCourseHeaderUI();
    }

    updateCourseHeaderUI() {
      const course = COURSES[this.currentCourseId];
      if (!course) return;

      if (this.courseLabelEl) {
        this.courseLabelEl.textContent = course.title;
      }

      if (this.sidebarCourseTitleEl) {
        this.sidebarCourseTitleEl.textContent = course.title;
      }
      if (this.sidebarCourseSubtitleEl) {
        this.sidebarCourseSubtitleEl.textContent = course.subtitle;
      }
      document.title = `Leo Gaviria | ${course.title}`;

      // Actualizar estilo visual de los botones del menú Asignaturas
      if (this.dropdownMenu) {
        const buttons = this.dropdownMenu.querySelectorAll('button[data-course-id]');
        buttons.forEach(btn => {
          const cId = btn.getAttribute('data-course-id');
          const isAct = cId === this.currentCourseId;
          if (isAct) {
            btn.className = "w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-emerald-300 font-semibold bg-emerald-500/10 border border-emerald-500/20 transition cursor-pointer gap-2";
            const badge = btn.querySelector('.course-badge');
            if (badge) {
              badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Activo`;
              badge.className = "course-badge flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-bold whitespace-nowrap shrink-0";
            }
          } else {
            btn.className = "w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-[#19202e] border border-transparent transition cursor-pointer gap-2";
            const badge = btn.querySelector('.course-badge');
            if (badge) {
              badge.textContent = "Plan 16 Sem";
              badge.className = "course-badge text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-400 font-mono whitespace-nowrap shrink-0";
            }
          }
        });
      }
    }

    toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      setThemePreference(next);
      this.updateThemeIcon(next);
    }

    initEvents() {
      // Alternar tema
      if (this.themeToggleBtn) {
        this.themeToggleBtn.addEventListener('click', () => {
          this.toggleTheme();
        });
      }

      // Hash change
      window.addEventListener('hashchange', () => {
        this.handleHashChange();
      });

      // Búsqueda en barra lateral
      if (this.sidebarSearchInput) {
        this.sidebarSearchInput.addEventListener('input', (e) => {
          this.renderSidebar(e.target.value);
        });
      }

      // Atajos de teclado
      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          this.openSearchModal();
        }
        if (e.key === 'Escape') {
          this.closeSearchModal();
          this.closeGuideModal();
          this.closeWidgetPopup();
          this.closeWelcomeCodingModal();
        }
      });

      // Input en modal de búsqueda
      if (this.searchModalInput) {
        this.searchModalInput.addEventListener('input', (e) => {
          this.handleModalSearch(e.target.value);
        });
      }

      // Botón colapso sidebar
      const collapseBtn = document.getElementById('collapse-sidebar-btn');
      const expandBtn = document.getElementById('expand-sidebar-btn');
      if (collapseBtn) {
        collapseBtn.addEventListener('click', () => this.toggleSidebar(true));
      }
      if (expandBtn) {
        expandBtn.addEventListener('click', () => this.toggleSidebar(false));
      }

      // Botones de Guía Docente
      const guideBtns = document.querySelectorAll('.open-guide-btn');
      guideBtns.forEach(btn => {
        btn.addEventListener('click', () => this.openGuideModal());
      });

      // Menú desplegable interactivo de Asignaturas (clic y cierre al exterior)
      if (this.dropdownBtn && this.dropdownMenu) {
        this.dropdownBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isHidden = this.dropdownMenu.classList.toggle('hidden');
          if (this.dropdownArrow) {
            this.dropdownArrow.classList.toggle('rotate-180', !isHidden);
          }
        });

        document.addEventListener('click', (e) => {
          if (!this.dropdownMenu.contains(e.target) && e.target !== this.dropdownBtn) {
            this.dropdownMenu.classList.add('hidden');
            if (this.dropdownArrow) this.dropdownArrow.classList.remove('rotate-180');
          }
        });
      }

      // Cerrar modales con clic en fondo
      if (this.widgetPopupModalEl) {
        this.widgetPopupModalEl.addEventListener('click', (e) => {
          if (e.target === this.widgetPopupModalEl) {
            this.closeWidgetPopup();
          }
        });
      }
    }

    openMobileSidebar() {
      if (this.sidebarEl) {
        this.sidebarEl.classList.add('mobile-open');
      }
      const backdrop = document.getElementById('sidebar-backdrop');
      if (backdrop) {
        backdrop.classList.remove('hidden');
        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(() => backdrop.classList.add('active'));
        } else {
          backdrop.classList.add('active');
        }
      }
      document.body.classList.add('mobile-menu-open');
    }

    closeMobileSidebar() {
      if (this.sidebarEl) {
        this.sidebarEl.classList.remove('mobile-open');
      }
      const backdrop = document.getElementById('sidebar-backdrop');
      if (backdrop) {
        backdrop.classList.remove('active');
        setTimeout(() => {
          if (!backdrop.classList.contains('active')) {
            backdrop.classList.add('hidden');
          }
        }, 300);
      }
      document.body.classList.remove('mobile-menu-open');
    }

    toggleMobileSidebar() {
      if (!this.sidebarEl) return;
      if (this.sidebarEl.classList.contains('mobile-open')) {
        this.closeMobileSidebar();
      } else {
        this.openMobileSidebar();
      }
    }

    toggleSidebar(collapsed) {
      this.sidebarCollapsed = collapsed;
      const expandBtn = document.getElementById('expand-sidebar-btn');
      if (collapsed) {
        this.sidebarEl.classList.add('hidden');
        if (expandBtn) expandBtn.classList.remove('hidden');
      } else {
        this.sidebarEl.classList.remove('hidden');
        if (expandBtn) expandBtn.classList.add('hidden');
      }
    }

    initSidebarResizer() {
      if (!this.sidebarEl) return;

      // Cargar ancho guardado de localStorage o 360px por defecto
      const savedWidth = localStorage.getItem('leogaviria_sidebar_width');
      if (savedWidth) {
        const widthNum = parseInt(savedWidth, 10);
        if (widthNum >= 280 && widthNum <= 750) {
          this.setSidebarWidth(widthNum, false);
        }
      } else if (window.innerWidth >= 1280) {
        this.setSidebarWidth(360, false);
      }

      // Botón para expandir ancho rápidamente
      if (this.toggleSidebarWidthBtn) {
        this.toggleSidebarWidthBtn.addEventListener('click', () => {
          const currentWidth = this.sidebarEl.getBoundingClientRect().width;
          if (currentWidth < 440) {
            this.setSidebarWidth(500, true);
          } else {
            this.setSidebarWidth(360, true);
          }
        });
      }

      // Botón expandir todas las semanas
      if (this.expandAllWeeksBtn) {
        this.expandAllWeeksBtn.addEventListener('click', () => this.expandAllWeeks());
      }

      // Botón colapsar todas las semanas
      if (this.collapseAllWeeksBtn) {
        this.collapseAllWeeksBtn.addEventListener('click', () => this.collapseAllWeeks());
      }

      // Drag para redimensionar con el mouse
      if (this.sidebarResizerEl) {
        let isDragging = false;
        let startX = 0;
        let startWidth = 0;

        this.sidebarResizerEl.addEventListener('mousedown', (e) => {
          e.preventDefault();
          isDragging = true;
          startX = e.clientX;
          startWidth = this.sidebarEl.getBoundingClientRect().width;
          this.sidebarEl.classList.add('resizing');
          this.sidebarResizerEl.classList.add('is-dragging');
          document.body.classList.add('is-resizing-sidebar');
        });

        document.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          const deltaX = e.clientX - startX;
          const minW = 280;
          const maxW = Math.min(750, Math.floor(window.innerWidth * 0.7));
          const newWidth = Math.max(minW, Math.min(maxW, startWidth + deltaX));
          this.setSidebarWidth(newWidth, false);
        });

        document.addEventListener('mouseup', () => {
          if (!isDragging) return;
          isDragging = false;
          this.sidebarEl.classList.remove('resizing');
          this.sidebarResizerEl.classList.remove('is-dragging');
          document.body.classList.remove('is-resizing-sidebar');
          const currentWidth = Math.round(this.sidebarEl.getBoundingClientRect().width);
          try {
            localStorage.setItem('leogaviria_sidebar_width', currentWidth);
          } catch (err) {}
        });

        // Doble clic para alternar entre ancho estándar y amplio
        this.sidebarResizerEl.addEventListener('dblclick', () => {
          const currentWidth = this.sidebarEl.getBoundingClientRect().width;
          if (currentWidth < 440) {
            this.setSidebarWidth(500, true);
          } else {
            this.setSidebarWidth(360, true);
          }
        });
      }
    }

    setSidebarWidth(width, save = true) {
      if (!this.sidebarEl) return;
      if (window.innerWidth < 768) return; // En dispositivos móviles ocupa 100%
      this.sidebarEl.style.width = `${width}px`;
      if (this.toggleSidebarWidthBtn) {
        const isWide = width >= 440;
        this.toggleSidebarWidthBtn.title = isWide ? "Restablecer ancho estándar del menú" : "Expandir ancho del menú para lectura amplia";
        this.toggleSidebarWidthBtn.innerHTML = isWide ? '<i class="fas fa-compress-alt text-xs"></i>' : '<i class="fas fa-arrows-left-right text-xs"></i>';
      }
      if (save) {
        try {
          localStorage.setItem('leogaviria_sidebar_width', width);
        } catch (e) {}
      }
    }

    expandAllWeeks() {
      this.allWeeksExpanded = true;
      this.currentCurriculum.forEach(w => this.openWeeks.add(w.id));
      this.renderSidebar(this.sidebarSearchInput ? this.sidebarSearchInput.value : '');
    }

    collapseAllWeeks() {
      this.allWeeksExpanded = false;
      this.openWeeks.clear();
      if (this.activeWeekId) {
        this.openWeeks.add(this.activeWeekId);
      }
      this.renderSidebar(this.sidebarSearchInput ? this.sidebarSearchInput.value : '');
    }

    handleInitialRoute() {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'maraton' || hash.startsWith('maraton?')) {
        const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
        const tema = params.get('tema') || params.get('theme') || '';
        this.showMaraton(tema);
        return;
      }
      if (hash.startsWith('maraton/')) {
        const pNum = hash.split('/')[1];
        this.loadMaratonProblem(pNum);
        return;
      }

      const topicExists = this.findTopic(hash);

      if (hash && hash !== 'materias' && hash !== 'inicio' && topicExists) {
        this.loadTopic(hash);
      } else {
        // Al entrar a index.html (sin hash de tema) se presenta el catálogo/slider de materias disponibles
        this.showCoursesHome();
      }
    }

    handleHashChange() {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('sec-')) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }
      if (hash === 'maraton' || hash.startsWith('maraton?')) {
        const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
        const tema = params.get('tema') || params.get('theme') || '';
        this.showMaraton(tema);
        return;
      }
      if (hash.startsWith('maraton/')) {
        const pNum = hash.split('/')[1];
        this.loadMaratonProblem(pNum);
        return;
      }
      if (hash === '' || hash === 'materias' || hash === 'inicio') {
        this.showCoursesHome();
      } else if (hash && hash !== this.currentTopicId) {
        const topicExists = this.findTopic(hash);
        if (topicExists) {
          this.loadTopic(hash);
        } else {
          this.showCoursesHome();
        }
      }
    }

    /**
     * Muestra la Biblioteca de problemas de Maratón
     */
    showMaraton(themeFilter = '') {
      if (typeof window !== 'undefined' && window.innerWidth < 768 && typeof this.closeMobileSidebar === 'function') {
        this.closeMobileSidebar();
      }
      this.currentTopicId = null;
      this.activeWeekId = null;
      this.pauseSliderAutoPlay();
      window.location.hash = themeFilter ? `maraton?tema=${encodeURIComponent(themeFilter)}` : 'maraton';
      document.title = 'Leo Gaviria | 🏃 Maratón: Solución de problemas';
      this.renderSidebar();
      this.maratonUI.renderLibrary(this.contentAreaEl, themeFilter);
      if (this.contentAreaEl) this.contentAreaEl.scrollTop = 0;
    }

    /**
     * Carga la vista de resolución de un problema específico de Maratón
     */
    loadMaratonProblem(problemIdOrNumber) {
      if (typeof window !== 'undefined' && window.innerWidth < 768 && typeof this.closeMobileSidebar === 'function') {
        this.closeMobileSidebar();
      }
      this.currentTopicId = null;
      this.activeWeekId = null;
      this.pauseSliderAutoPlay();
      const problem = getProblemById(problemIdOrNumber);
      if (!problem) {
        this.showMaraton();
        return;
      }
      window.location.hash = `maraton/${problem.numero}`;
      document.title = `Leo Gaviria | Problema ${problem.numero}: ${problem.titulo}`;
      this.renderSidebar();
      this.maratonUI.renderProblemView(this.contentAreaEl, problem);
      if (this.contentAreaEl) this.contentAreaEl.scrollTop = 0;
    }

    /**
     * Renderiza el bloque opcional de enlace a Maratón al final de una lección
     */
    renderMaratonCallout(topic) {
      if (typeof MARATON_PROBLEMS === 'undefined') return '';
      const related = MARATON_PROBLEMS.filter(p => {
        if (p.unidadId && (p.unidadId === topic.unitId || topic.id.startsWith(p.unidadId.replace('unidad-', 'prog-u')))) return true;
        if (p.unidad && topic.weekTitle && topic.weekTitle.includes(p.unidad)) return true;
        return p.temas.some(t => topic.title.toLowerCase().includes(t.toLowerCase()));
      });

      if (related.length === 0) return '';
      const primaryTheme = related[0].temas[0] || 'Todos';

      return `
        <div class="mt-12 bg-gradient-to-r from-emerald-950/40 via-[#101824] to-[#0c121e] border border-emerald-500/30 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-start sm:items-center gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-lg shadow-sm shrink-0 mt-0.5 sm:mt-0">
              <i class="fas fa-person-running"></i>
            </div>
            <div>
              <span class="text-[10px] font-mono uppercase font-bold text-emerald-400 tracking-wider">🏃 Lleva tu conocimiento a la práctica</span>
              <h4 class="text-sm font-bold text-white mt-0.5">¿Listo para resolver retos de programación en Maratón?</h4>
              <p class="text-xs text-gray-300 mt-0.5 leading-relaxed">
                Pon a prueba tu lógica resolviendo los problemas asociados a este tema con el Judge Online integrado.
              </p>
            </div>
          </div>
          <button 
            type="button"
            onclick="window.app.showMaraton('${primaryTheme}')" 
            class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-emerald-600/30 shrink-0 cursor-pointer"
          >
            <span>Resolver problemas de ${primaryTheme}</span>
            <i class="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      `;
    }

    /**
     * Muestra la vista principal con slider / banner de asignaturas disponibles
     */
    showCoursesHome() {
      if (typeof window !== 'undefined' && window.innerWidth < 768 && typeof this.closeMobileSidebar === 'function') {
        this.closeMobileSidebar();
      }
      this.currentTopicId = null;
      this.activeWeekId = null;
      this.pauseSliderAutoPlay();
      window.location.hash = 'materias';
      document.title = 'Leo Gaviria | Asignaturas Disponibles';

      const courses = [
        {
          id: 'prog',
          code: 'INF-100',
          title: 'Programación',
          subtitle: 'Ruta Integral: Fundamentos, Algoritmos y Estructuras de Datos',
          badge: 'Plan 14 Unidades',
          tag: 'Curso Completo',
          icon: 'fa-code',
          gradient: 'from-emerald-950/70 via-[#0d181e] to-[#081216]',
          border: 'border-emerald-500/50',
          badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          iconBg: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
          btnClass: 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-600/30',
          description: 'Desarrolla habilidades sólidas desde la lógica computacional, pseudocódigo, estructuras de control y funciones modulares, hasta el paradigma POO, análisis asintótico Big-O, estructuras lineales (listas, pilas, colas), árboles, grafos y simuladores interactivos de ordenamiento.',
          topicsPreview: [
            'Pensamiento Computacional y Lógica',
            'Estructuras de Control: Decisión y Bucles',
            'Modularidad, Funciones y Memoria',
            'Paradigma POO, Clases y Encapsulamiento',
            'Notación Big-O y Complejidad Asintótica',
            'Simuladores de Algoritmos de Ordenamiento',
            'Estructuras Lineales: Listas, Pilas y Colas',
            'Árboles BST / AVL y Recorridos en Grafos'
          ],
          weeks: 20,
          lessons: 60
        },
        {
          id: 'tics',
          code: 'INF-102',
          title: 'Introducción a las TICS',
          subtitle: 'Estructuras Discretas, Sistemas Numéricos y Fundamentos Computacionales',
          badge: '5 Unidades • 27 Temas',
          tag: 'Curso Completo',
          icon: 'fa-network-wired',
          gradient: 'from-purple-950/70 via-[#161226] to-[#0d0c1a]',
          border: 'border-purple-500/40',
          badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
          iconBg: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
          btnClass: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30',
          description: 'Fundamentos matemáticos y computacionales para ciencias de la computación e ingeniería de software: sistemas numéricos posicionales, inducción matemática y relaciones de recurrencia, álgebra de conjuntos y lógica booleana, teoría de funciones y relaciones, y técnicas avanzadas de conteo y combinatoria.',
          topicsPreview: [
            'Sistemas Numéricos, Conversiones y Aritmética Modular',
            'Inducción Matemática, Recursión y Torres de Hanoi',
            'Teoría de Conjuntos, Diagramas de Venn y Álgebra Booleana',
            'Relaciones Binarias, Órdenes Parciales y Diagramas de Hasse',
            'Combinatoria, Principio del Palomar y Regla del Producto'
          ],
          weeks: 5,
          lessons: 27
        }
      ];

      this.sliderCourses = courses;
      this.currentSlideIndex = 0;

      const slidesHtml = courses.map((c) => `
        <div class="w-full shrink-0 min-w-full p-5 sm:p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br ${c.gradient} border ${c.border} rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-300">
          <div class="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/[0.03] blur-3xl pointer-events-none"></div>

          <div>
            <div class="flex items-center justify-between gap-4 mb-4">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md ${c.badgeClass}">
                  ${c.code} &bull; ${c.badge}
                </span>
                <span class="text-[11px] font-semibold text-gray-400 font-sans hidden sm:inline">
                  ${c.tag}
                </span>
              </div>
              <div class="w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center text-xl shadow-lg shrink-0">
                <i class="fas ${c.icon}"></i>
              </div>
            </div>

            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
              ${c.title}
            </h2>
            <p class="text-sm sm:text-base text-gray-300 font-medium mb-3 leading-relaxed">
              ${c.subtitle}
            </p>

            <p class="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3 sm:line-clamp-none">
              ${c.description}
            </p>

            <div class="mb-5">
              <div class="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                <i class="fas fa-check-double text-emerald-400 text-xs"></i>
                <span>Ejes temáticos clave (14 unidades):</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${c.topicsPreview.map(tp => `
                  <span class="text-xs font-mono bg-[#0f141f]/80 text-gray-300 border border-gray-800/80 px-2.5 py-1 rounded-lg">
                    ${tp}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="pt-5 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-4 text-xs font-mono text-gray-400">
              <div class="flex items-center gap-1.5">
                <i class="far fa-calendar-alt text-emerald-400"></i>
                <span>${c.weeks || 20} Unidades</span>
              </div>
              <div class="flex items-center gap-1.5">
                <i class="fas fa-layer-group text-teal-400"></i>
                <span>${c.lessons || (c.weeks ? c.weeks * 3 : 60)} Lecciones</span>
              </div>
              <div class="flex items-center gap-1.5 hidden sm:flex">
                <i class="fas fa-laptop-code text-sky-400"></i>
                <span>Teórico-Práctico</span>
              </div>
            </div>

            <button 
              type="button"
              onclick="window.app.switchCourse('${c.id}')"
              class="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm ${c.btnClass} transition-all duration-200 flex items-center gap-2 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Ingresar a la Asignatura</span>
              <i class="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      `).join('');

      const cardsGridHtml = courses.map(c => `
        <div class="bg-[#10141d] border border-gray-800 hover:border-gray-700 rounded-xl p-5 flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-xl group">
          <div>
            <div class="flex items-center justify-between mb-3">
              <div class="w-10 h-10 rounded-lg ${c.iconBg} flex items-center justify-center text-lg">
                <i class="fas ${c.icon}"></i>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded ${c.badgeClass}">${c.code}</span>
            </div>
            <h3 class="text-lg font-bold text-white group-hover:text-emerald-300 transition mb-1">${c.title}</h3>
            <p class="text-xs text-gray-400 mb-4 line-clamp-2">${c.subtitle}</p>
            <div class="text-[11px] font-mono text-gray-500 mb-4 flex items-center gap-3">
              <span><i class="far fa-calendar-alt mr-1 text-emerald-400"></i>${c.weeks || 20} Unidades</span>
              <span><i class="fas fa-book mr-1 text-sky-400"></i>${c.lessons || (c.weeks ? c.weeks * 3 : 60)} Temas</span>
            </div>
          </div>
          <button 
            type="button"
            onclick="window.app.switchCourse('${c.id}')"
            class="w-full py-2 rounded-lg bg-[#151c28] hover:bg-emerald-600 text-gray-300 hover:text-white text-xs font-semibold border border-gray-700/80 hover:border-emerald-500 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explorar Asignatura</span>
            <i class="fas fa-chevron-right text-[10px]"></i>
          </button>
        </div>
      `).join('');

      const html = `
        <div class="w-full max-w-6xl xl:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-fade-in space-y-8">
          
          <!-- Encabezado de Bienvenida / Hero Banner -->
          <div class="bg-gradient-to-r from-[#101622] via-[#0d121c] to-[#0a0e17] border border-gray-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div class="relative z-10 max-w-3xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-3">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>CAMPUS ACADÉMICO &bull; PROF. LEO GAVIRIA</span>
              </div>
              <h1 class="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
                Asignaturas Disponibles
              </h1>
              <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                Bienvenido al portal académico interactivo. Selecciona cualquiera de las asignaturas a continuación para acceder a su plan de estudio completo de 14 unidades, guías conceptuales y simuladores de algoritmos paso a paso.
              </p>
            </div>
          </div>

          <!-- SLIDER DE DIAPOSITIVAS DE ASIGNATURAS -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <i class="fas fa-layer-group text-emerald-400 text-sm"></i>
                <h3 class="text-sm font-bold text-gray-200 uppercase tracking-wider font-mono">
                  Diapositivas de Asignaturas
                </h3>
              </div>
              <!-- Controles de navegación del slider -->
              <div class="flex items-center gap-2">
                <button 
                  type="button" 
                  onclick="window.app.prevSlide()" 
                  class="w-8 h-8 rounded-lg bg-[#141923] hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 flex items-center justify-center text-xs transition cursor-pointer"
                  title="Diapositiva Anterior"
                >
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button 
                  type="button" 
                  onclick="window.app.nextSlide()" 
                  class="w-8 h-8 rounded-lg bg-[#141923] hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 flex items-center justify-center text-xs transition cursor-pointer"
                  title="Siguiente Diapositiva"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <!-- Contenedor del Carrusel -->
            <div 
              id="courses-slider-wrapper" 
              class="relative overflow-hidden rounded-2xl w-full"
              onmouseenter="window.app.pauseSliderAutoPlay()"
              onmouseleave="window.app.resumeSliderAutoPlay()"
            >
              <div id="courses-slider-track" class="flex transition-transform duration-500 ease-out w-full" style="transform: translateX(0%);">
                ${slidesHtml}
              </div>
            </div>

            <!-- Indicadores de diapositiva (Dots) -->
            <div class="flex items-center justify-center gap-2 pt-2" id="courses-slider-dots">
              ${courses.map((_, i) => `
                <button 
                  type="button" 
                  onclick="window.app.goToSlide(${i})" 
                  class="slider-dot ${i === 0 ? 'w-8 h-2 rounded-full bg-emerald-400' : 'w-2.5 h-2 rounded-full bg-gray-700 hover:bg-gray-500'} transition-all duration-300 cursor-pointer"
                  title="Ir a Asignatura ${i + 1}"
                ></button>
              `).join('')}
            </div>
          </div>

          <!-- ACCESO RÁPIDO A TODAS LAS ASIGNATURAS (GRID) -->
          <div class="space-y-4 pt-4 border-t border-gray-800/60">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <i class="fas fa-th-large text-emerald-400 text-sm"></i>
                <h3 class="text-sm font-bold text-gray-200 uppercase tracking-wider font-mono">
                  Todas las Materias Disponibles
                </h3>
              </div>
              <span class="text-xs text-gray-500 font-mono">2 Materias Curriculares</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              ${cardsGridHtml}
            </div>
          </div>

        </div>
      `;

      if (this.contentAreaEl) {
        this.contentAreaEl.innerHTML = html;
        this.contentAreaEl.scrollTo({ top: 0, behavior: 'smooth' });
      }

      this.renderSidebar();
      this.initSlider();
    }

    initSlider() {
      this.currentSlideIndex = 0;
      this.totalSlides = this.sliderCourses ? this.sliderCourses.length : 3;
      this.updateSliderUI();

      this.pauseSliderAutoPlay();
      this.sliderAutoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, 7000);
    }

    pauseSliderAutoPlay() {
      if (this.sliderAutoPlayTimer) {
        clearInterval(this.sliderAutoPlayTimer);
        this.sliderAutoPlayTimer = null;
      }
    }

    resumeSliderAutoPlay() {
      if (!this.sliderAutoPlayTimer && this.currentTopicId === null) {
        this.sliderAutoPlayTimer = setInterval(() => {
          this.nextSlide();
        }, 7000);
      }
    }

    goToSlide(index) {
      if (!this.totalSlides) return;
      this.currentSlideIndex = (index + this.totalSlides) % this.totalSlides;
      this.updateSliderUI();
    }

    nextSlide() {
      this.goToSlide(this.currentSlideIndex + 1);
    }

    prevSlide() {
      this.goToSlide(this.currentSlideIndex - 1);
    }

    updateSliderUI() {
      const track = document.getElementById('courses-slider-track');
      if (track) {
        track.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;
      }
      const dotsContainer = document.getElementById('courses-slider-dots');
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, idx) => {
          if (idx === this.currentSlideIndex) {
            dot.className = 'slider-dot w-8 h-2 rounded-full bg-emerald-400 transition-all duration-300';
          } else {
            dot.className = 'slider-dot w-2.5 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-all duration-300 cursor-pointer';
          }
        });
      }
    }

    findTopic(topicId) {
      for (const week of this.currentCurriculum) {
        const t = week.topics.find(top => top.id === topicId);
        if (t) return { ...t, weekNumber: week.number, weekTitle: week.title, weekId: week.id };
      }
      for (const cid in COURSES) {
        if (cid !== this.currentCourseId && COURSES[cid].curriculum) {
          for (const week of COURSES[cid].curriculum) {
            const t = week.topics.find(top => top.id === topicId);
            if (t) {
              this.currentCourseId = cid;
              this.updateCourseHeaderUI();
              return { ...t, weekNumber: week.number, weekTitle: week.title, weekId: week.id };
            }
          }
        }
      }
      return null;
    }

    /**
     * Cambiar de Asignatura (Programación I, Programación II, TICS)
     */
    switchCourse(courseId) {
      if (courseId === 'prog1' || courseId === 'prog2') courseId = 'prog';
      if (!COURSES[courseId]) return;

      this.currentCourseId = courseId;
      try {
        localStorage.setItem(STORAGE_KEY_COURSE, courseId);
      } catch (e) {}

      const course = COURSES[courseId];
      if (this.dropdownMenu) {
        this.dropdownMenu.classList.add('hidden');
        if (this.dropdownArrow) this.dropdownArrow.classList.remove('rotate-180');
      }
      this.updateCourseHeaderUI();
      this.showToast(`✅ Asignatura activa: ${course.title}`, 'success');

      // Cargar primer tema del curso
      this.loadTopic(course.defaultTopic);
    }

    /**
     * Carga un tema y renderiza la interfaz
     */
    loadTopic(topicId) {
      if (typeof window !== 'undefined' && window.innerWidth < 768 && typeof this.closeMobileSidebar === 'function') {
        this.closeMobileSidebar();
      }
      this.pauseSliderAutoPlay();
      const topicData = getTopicData(topicId, this.currentCurriculum);
      if (!topicData) return;

      this.currentTopicId = topicId;
      window.location.hash = topicId;

      const meta = this.findTopic(topicId);
      if (meta) {
        this.activeWeekId = meta.weekId;
        this.openWeeks.add(meta.weekId);
      }

      this.renderSidebar();
      this.renderTopicContent(topicData);
      this.updateOverallProgress();

      // Resetear scroll siempre al inicio del nuevo tema en el contenedor principal
      if (this.contentAreaEl) {
        this.contentAreaEl.scrollTop = 0;
        try {
          this.contentAreaEl.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } catch (e) {
          this.contentAreaEl.scrollTop = 0;
        }
      }
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
      if (typeof document !== 'undefined') {
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      }
      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(() => {
          if (this.contentAreaEl) this.contentAreaEl.scrollTop = 0;
          if (typeof window !== 'undefined') window.scrollTo(0, 0);
        });
      }
    }

    renderSidebar(filterQuery = '') {
      if (!this.sidebarContentEl) return;

      const completedTopics = getCompletedTopics();
      const query = filterQuery.toLowerCase().trim();
      let html = '';

      if (this.sidebarWeeksCountEl) {
        this.sidebarWeeksCountEl.textContent = `${this.currentCurriculum.length} Unidades`;
      }

      // Tarjeta de acceso a Maratón: Solución de Problemas
      if (typeof getMaratonStats === 'function' && typeof MARATON_PROBLEMS !== 'undefined') {
        const mStats = getMaratonStats(MARATON_PROBLEMS);
        html += `
          <div class="mb-3 px-1">
            <button 
              type="button" 
              onclick="window.app.showMaraton()"
              class="w-full text-left p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-[#131d27] to-[#0e1622] border border-emerald-500/30 hover:border-emerald-500/60 transition group cursor-pointer shadow-md flex items-center justify-between gap-2"
              title="Acceder a Maratón: Solución de problemas"
            >
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs shrink-0 group-hover:scale-105 transition">
                  <i class="fas fa-person-running"></i>
                </div>
                <div class="truncate">
                  <span class="text-xs font-bold text-white group-hover:text-emerald-300 transition block leading-tight truncate">
                    🏃 Maratón: Problemas
                  </span>
                  <span class="text-[10px] text-gray-400 font-mono block">
                    ${mStats.resueltos} de ${mStats.total} resueltos
                  </span>
                </div>
              </div>
              <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                ${mStats.porcentaje}%
              </span>
            </button>
          </div>
        `;
      }

      this.currentCurriculum.forEach((week) => {
        const filteredTopics = week.topics.filter(t => {
          if (!query) return true;
          return t.title.toLowerCase().includes(query) || week.title.toLowerCase().includes(query);
        });

        if (query && filteredTopics.length === 0) return;

        const isWeekActive = this.activeWeekId === week.id;
        const isWeekOpen = this.allWeeksExpanded || this.openWeeks.has(week.id) || (isWeekActive && !this.allWeeksExpanded) || Boolean(query);
        const completedCount = week.topics.filter(t => completedTopics.includes(t.id)).length;
        const totalInWeek = week.topics.length;
        const isWeekComplete = completedCount === totalInWeek;

        html += `
          <div class="week-group mb-1.5" data-week-id="${week.id}">
            <!-- Encabezado de Unidad (Accordion) -->
            <button 
              type="button"
              onclick="window.app.toggleWeekAccordion('${week.id}')"
              title="${week.title}"
              class="w-full flex items-start justify-between px-3 py-2 rounded-lg text-xs font-semibold text-gray-300 hover:bg-[#161c28] hover:text-white transition group text-left ${isWeekActive ? 'bg-[#151b27] text-white' : ''}"
            >
              <div class="flex items-start gap-2.5 min-w-0 flex-1 py-0.5">
                <span class="w-6 h-6 rounded-md bg-[#1e2638] text-gray-400 group-hover:text-emerald-400 flex items-center justify-center text-xs shrink-0 transition mt-0.5">
                  <i class="fas ${week.icon} text-[11px]"></i>
                </span>
                <span class="font-medium text-xs text-gray-200 group-hover:text-white leading-snug break-words" title="${week.title}">
                  ${week.title}
                </span>
              </div>
              <div class="flex items-center gap-2 shrink-0 ml-2 mt-1 self-start">
                <span class="text-[10px] tabular-nums font-mono px-1.5 py-0.5 rounded-full ${isWeekComplete ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'bg-gray-800 text-gray-400'}">
                  ${completedCount}/${totalInWeek}
                </span>
                <i class="fas fa-chevron-down text-[10px] text-gray-500 transition-transform duration-200 week-arrow-${week.id} ${isWeekOpen ? 'rotate-180' : ''}"></i>
              </div>
            </button>

            <!-- Lista de Temas de la Unidad -->
            <div id="week-topics-${week.id}" class="space-y-0.5 mt-1 pl-3 border-l border-gray-800 ml-5 ${isWeekOpen ? 'block' : 'hidden'}">
              ${filteredTopics.map(topic => {
                const isActive = topic.id === this.currentTopicId;
                const isCompleted = completedTopics.includes(topic.id);

                return `
                  <a 
                    href="#${topic.id}"
                    title="${topic.title}"
                    class="flex items-start justify-between gap-2 px-2.5 py-2 rounded-md text-xs transition group relative ${isActive ? 'topic-active' : 'text-gray-400 hover:text-gray-200 hover:bg-[#141923]'}"
                  >
                    <div class="flex items-start gap-2 min-w-0 flex-1">
                      <span 
                        onclick="event.preventDefault(); window.app.toggleCompletion('${topic.id}')"
                        class="cursor-pointer text-[12px] pt-0.5 transition shrink-0 ${isCompleted ? 'text-emerald-400' : 'text-gray-600 group-hover:text-gray-400'}"
                        title="${isCompleted ? 'Completado (clic para desmarcar)' : 'Marcar como completado'}"
                      >
                        <i class="${isCompleted ? 'fas fa-circle-check' : 'far fa-circle'}"></i>
                      </span>
                      <span class="leading-snug break-words text-gray-300 group-hover:text-white">${topic.title}</span>
                    </div>

                    <div class="flex items-center gap-1.5 shrink-0 pt-0.5 ml-1">
                      ${topic.hasAnimation ? '<span class="text-[9px] px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap" title="Animación Interactiva">▶ Anim</span>' : ''}
                      <span class="text-[10px] text-gray-500 tabular-nums whitespace-nowrap">${topic.duration}</span>
                    </div>
                  </a>
                `;
              }).join('')}
            </div>
          </div>
        `;
      });

      this.sidebarContentEl.innerHTML = html;
    }

    toggleWeekAccordion(weekId) {
      const container = document.getElementById(`week-topics-${weekId}`);
      const arrow = document.querySelector(`.week-arrow-${weekId}`);
      if (container) {
        const isHidden = container.classList.contains('hidden');
        if (isHidden) {
          container.classList.remove('hidden');
          if (arrow) arrow.classList.add('rotate-180');
          this.openWeeks.add(weekId);
        } else {
          container.classList.add('hidden');
          if (arrow) arrow.classList.remove('rotate-180');
          this.openWeeks.delete(weekId);
        }
      }
    }

    renderTopicContent(topic) {
      if (!this.contentAreaEl) return;

      const isCompleted = isTopicCompleted(topic.id);
      const course = COURSES[this.currentCourseId] || COURSES['prog2'];

      // Búsqueda de anterior y siguiente
      const allTopics = [];
      this.currentCurriculum.forEach(w => {
        w.topics.forEach(t => allTopics.push({ ...t, weekTitle: w.title }));
      });
      const cIndex = allTopics.findIndex(t => t.id === topic.id);
      const prev = cIndex > 0 ? allTopics[cIndex - 1] : null;
      const next = cIndex < allTopics.length - 1 ? allTopics[cIndex + 1] : null;

      const html = `
        <div class="w-full max-w-6xl xl:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-fade-in">
          
          <!-- Migas de Pan -->
          <nav class="flex items-center gap-2 text-xs text-gray-400 mb-4 flex-wrap">
            <span class="text-gray-500 font-medium">Leo Gaviria</span>
            <span class="text-gray-600">/</span>
            <button onclick="window.app.switchCourse('${this.currentCourseId}')" class="hover:text-emerald-400 transition font-medium text-gray-300">${course.title}</button>
            <span class="text-gray-600">/</span>
            <span class="hover:text-gray-300 transition text-gray-400">${topic.weekTitle}</span>
            <span class="text-gray-600">/</span>
            <span class="text-emerald-400 font-medium">${topic.title}</span>
          </nav>

          <!-- Cabecera de la Lección -->
          <header class="topic-header border-b border-gray-800/80 pb-6 mb-10 sm:mb-12 md:mb-16 mt-6 sm:mt-8 md:mt-10">
            <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div class="flex-1">
                <h1 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                  ${topic.title}
                </h1>
                <p class="text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">
                  ${topic.subtitle}
                </p>
              </div>

              <button 
                id="completion-toggle-btn"
                type="button"
                onclick="window.app.toggleCompletion('${topic.id}')"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition border ${isCompleted ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300' : 'bg-[#151b27] border-gray-700 text-gray-300 hover:border-emerald-500/40 hover:text-white'} shrink-0 shadow-sm"
              >
                <i class="${isCompleted ? 'fas fa-check-circle text-emerald-400' : 'far fa-circle text-gray-400'} text-sm"></i>
                <span>${isCompleted ? 'Completado' : 'Marcar como Completado'}</span>
              </button>
            </div>

            <!-- Insignias de Metadatos -->
            <div class="flex flex-wrap items-center gap-2 mt-4">
              ${topic.badges.map(b => `
                <span class="px-2.5 py-1 rounded-md text-xs font-medium ${this.getBadgeClass(b.type)}">
                  ${b.text}
                </span>
              `).join('')}
              <span class="text-xs text-gray-500 flex items-center gap-1 ml-2 font-mono">
                <i class="far fa-clock"></i> ${topic.timeEstimate}
              </span>
            </div>

                        <!-- Píldoras de Accesos Directos a Secciones -->
            <div class="flex items-center gap-2 overflow-x-auto py-3 mt-6 border-t border-gray-800/60 no-scrollbar">
              ${topic.sections.map((s) => {
                const navTitleMap = {
                  // Unidad 01: Fundamentos
                  'que-es-algoritmo': '¿Qué es un algoritmo?',
                  'que-es-programacion': 'Programación y lenguajes',
                  'tipos-lenguajes': 'Tipos de lenguajes',
                  'resolucion-problemas': 'Ciclo de resolución',
                  'modelo-ipo-calculadora': 'Modelo Entrada–Proceso–Salida',
                  'pseudocodigo': 'Pseudocódigo y control',
                  'ejemplo-pseudocodigo': 'Ejemplo práctico',
                  'diagramas-flujo': 'Diagramas de flujo',
                  'simulacion-diagrama-flujo': 'Simulación de flujo',
                  'problemas-resueltos': 'Problemas resueltos',
                  'comparativa-representaciones': 'Cuándo usar cada uno',
                  'expresiones-ast': 'Expresiones y árboles AST',
                  'notaciones-aritmeticas': 'Notaciones aritméticas',
                  'convenciones-nomenclatura': 'Buenas prácticas de código',
                  // Unidad 09: Complejidad
                  'tabla-ordenes': 'Jerarquía de órdenes',
                  'metodologia-calculo': 'Cálculo de complejidad',
                  'escenarios-complejidad': 'Escenarios (Ω, Θ, O)',
                  'algoritmos-recursivos-fibonacci': 'Recursión y optimización',
                  // Estructura canónica y ordenamiento
                  'en-que-consiste': '¿En qué consiste?',
                  'como-funciona': '¿Cómo funciona?',
                  'ejemplo-paso-a-paso': 'Ejemplo',
                  'codigo-y-animacion': 'Código',
                  'codigo-implementacion': 'Código',
                  'analisis-complejidad': 'Complejidad',
                  'cuando-usar': 'Cuándo usar'
                };
                const pillTitle = s.shortTitle || navTitleMap[s.id] || s.title.replace(/^\d+\.\s*/, '').replace(/^[^\w¿¡]+/, '').trim();
                return `
                  <a 
                    href="#sec-${s.id}" 
                    onclick="window.app.scrollToSection('sec-${s.id}', event)" 
                    class="nav-pill text-xs px-3.5 py-2 rounded-lg text-gray-300 bg-[#121622] border border-gray-800 hover:border-emerald-500/40 hover:text-white whitespace-nowrap transition flex items-center gap-2 font-medium"
                  >
                    <i class="fas ${s.icon} text-emerald-400 text-xs"></i>
                    <span>${pillTitle}</span>
                  </a>
                `;
              }).join('')}
              ${topic.comprueba ? `
                <span class="h-4 w-px bg-gray-700/80 mx-1 shrink-0"></span>
                <a 
                  href="#sec-comprueba" 
                  onclick="window.app.scrollToSection('sec-comprueba', event)" 
                  class="nav-pill text-xs px-3.5 py-2 rounded-lg text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 hover:text-white whitespace-nowrap transition flex items-center gap-2 font-bold shadow-sm"
                >
                  <i class="fas fa-clipboard-check text-emerald-400 text-xs"></i>
                  <span>Comprueba</span>
                </a>
              ` : ''}
            </div>
          </header>

          <!-- Secciones de Contenido Principal -->
          <main class="space-y-12">
            ${topic.sections.map(sec => `
              <section id="sec-${sec.id}" class="scroll-mt-20">
                <div class="flex items-center gap-2.5 border-b border-gray-800 pb-3 mb-4">
                  <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs">
                    <i class="fas ${sec.icon}"></i>
                  </span>
                  <h2 class="text-lg md:text-xl font-bold text-white tracking-tight">
                    ${sec.title}
                  </h2>
                </div>

                <!-- HTML del Contenido -->
                <div class="prose prose-invert max-w-none text-gray-300">
                  ${sec.contentHtml}
                </div>

                <!-- Elementos Interactivos Integrados: Explora y Practica (Sin numeración) -->
                ${this.renderSectionInteractive(sec)}

                <!-- Widget legacy si existiera -->
                ${sec.widget ? this.renderWidgetContainer(sec.widget, sec.id) : ''}
              </section>
            `).join('')}

            <!-- Bloque Final de Evaluación: Comprueba (Sin numeración) -->
            ${topic.comprueba ? this.renderCompruebaSection(topic.comprueba) : ''}

            <!-- Bloques complementarios legacy si existieran -->
            

            <!-- Llamado pedagógico a Maratón -->
            
          </main>


        <!-- Barra Inferior de Navegación -->
          <footer class="border-t border-gray-800 mt-16 pt-6 pb-12 flex items-center justify-between gap-4">
            ${prev ? `
              <a 
                href="#${prev.id}"
                onclick="window.app.loadTopic('${prev.id}'); if (event) event.preventDefault();" 
                class="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#141923] border border-gray-800 hover:border-gray-700 hover:bg-[#19202e] transition text-left group flex-1 max-w-xs"
              >
                <i class="fas fa-arrow-left text-gray-500 group-hover:text-emerald-400 transition"></i>
                <div class="min-w-0">
                  <span class="text-[10px] uppercase font-mono text-gray-500 block">Tema Anterior</span>
                  <span class="text-xs font-semibold text-gray-300 group-hover:text-white truncate block">${prev.title}</span>
                </div>
              </a>
            ` : '<div class="flex-1"></div>'}

            ${next ? `
              <a 
                href="#${next.id}"
                onclick="window.app.loadTopic('${next.id}'); if (event) event.preventDefault();" 
                class="flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-[#141923] border border-gray-800 hover:border-gray-700 hover:bg-[#19202e] transition text-right group flex-1 max-w-xs"
              >
                <div class="min-w-0">
                  <span class="text-[10px] uppercase font-mono text-gray-500 block">Siguiente Tema</span>
                  <span class="text-xs font-semibold text-gray-300 group-hover:text-white truncate block">${next.title}</span>
                </div>
                <i class="fas fa-arrow-right text-gray-500 group-hover:text-emerald-400 transition"></i>
              </a>
            ` : '<div class="flex-1"></div>'}
          </footer>

        </div>
      `;

      this.contentAreaEl.innerHTML = html;
    }

  scrollToSection(sectionId, event) {
    if (event) {
      event.preventDefault();
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try {
        history.pushState(null, '', '#' + sectionId);
      } catch (e) {}
    }
  }

    renderWidgetContainer(widget, sectionId, category = '') {
      const escapedTitle = (widget.title || 'Animación').replace(/'/g, "\\'");
      let dotClass = 'bg-emerald-500';
      if (category === 'explora') dotClass = 'bg-purple-400';
      else if (category === 'practica') dotClass = 'bg-amber-400';
      else if (category === 'comprueba') dotClass = 'bg-emerald-400';

      return `
        <div class="widget-frame-container mt-6">
          <div class="bg-[#121622] border-b border-gray-800 px-4 py-2.5 flex items-center justify-between text-xs text-gray-400">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full ${dotClass} animate-pulse"></span>
              <span class="font-medium text-gray-300">${widget.title || 'Componente Interactivo'}</span>
            </div>
            <div class="flex items-center gap-2">
              <button 
                type="button"
                onclick="window.app.openWidgetPopup('${widget.file}', '${escapedTitle}')"
                class="w-8 h-8 rounded-lg bg-[#1e2638] hover:bg-emerald-600 text-gray-300 hover:text-white transition flex items-center justify-center border border-gray-700" 
                title="Pantalla Completa"
              >
                <i class="fas fa-expand text-xs"></i>
              </button>
              <a 
                href="${widget.file}" 
                target="_blank" 
                class="w-8 h-8 rounded-lg bg-[#1e2638] hover:bg-gray-700 text-gray-400 hover:text-white transition flex items-center justify-center border border-gray-700 text-xs" 
                title="Abrir en pestaña independiente"
              >
                <i class="fas fa-external-link-alt text-xs"></i>
              </a>
            </div>
          </div>

          <iframe 
            src="${widget.file}" 
            class="widget-iframe" 
            style="height: ${widget.height || '650px'};" 
            title="${widget.title}" 
            loading="lazy"
            onload="window.app && window.app.adjustIframeHeight && window.app.adjustIframeHeight(this)"
          ></iframe>
        </div>
      `;
    }


  /**
   * Renderiza los elementos interactivos contextualizados dentro de cada seccion (Explora y Practica).
   */
  renderSectionInteractive(sec) {
    if (!sec.interactive || !Array.isArray(sec.interactive) || sec.interactive.length === 0) {
      return '';
    }

    const catMeta = {
      explora: {
        label: 'Explora',
        badge: 'Simulación / Visualización',
        icon: 'fa-compass',
        borderClass: 'border-purple-500/30',
        bgGradient: 'from-[#141226]/80 via-[#111422]/60 to-[#0e131d]',
        headerBadgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
        iconBg: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
        indicatorColor: 'bg-purple-400'
      },
      practica: {
        label: 'Practica',
        badge: 'Actividad / Ejercicio',
        icon: 'fa-pencil-alt',
        borderClass: 'border-amber-500/30',
        bgGradient: 'from-[#221810]/80 via-[#181615]/60 to-[#0e131d]',
        headerBadgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        iconBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
        indicatorColor: 'bg-amber-400'
      }
    };

    return `
      <div class="mt-6 space-y-6">
        ${sec.interactive.map((item, idx) => {
          const meta = catMeta[item.category] || catMeta.explora;
          return `
            <div class="bg-gradient-to-b ${meta.bgGradient} border ${meta.borderClass} rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
              <div class="flex items-start justify-between gap-3 mb-3">
                <div class="flex items-center gap-2.5 flex-wrap">
                  <div class="w-8 h-8 rounded-lg ${meta.iconBg} border flex items-center justify-center text-sm shrink-0">
                    <i class="fas ${meta.icon}"></i>
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${meta.headerBadgeBg}">
                        ${meta.label}
                      </span>
                      <h4 class="text-sm md:text-base font-bold text-white">
                        ${item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              ${item.description ? `
                <p class="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed pl-10">
                  ${item.description}
                </p>
              ` : ''}

              ${item.contentHtml ? `
                <div class="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 pl-10">
                  ${item.contentHtml}
                </div>
              ` : ''}

              ${item.widget ? this.renderWidgetContainer(item.widget, `${sec.id}-${item.category}-${idx}`, item.category) : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  /**
   * Renderiza el bloque global de evaluacion al final de la leccion (Comprueba).
   */
  renderCompruebaSection(comprueba) {
    if (!comprueba) return '';

    return `
      <section id="sec-comprueba" class="scroll-mt-20 mt-14 pt-8 border-t-2 border-dashed border-gray-800/80">
        <div class="bg-gradient-to-b from-[#0e1f18]/80 via-[#10191c]/60 to-[#0e131d] border border-emerald-500/30 rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
          <div class="flex items-start justify-between gap-4 pb-4 border-b border-gray-800/80 mb-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-base shadow-sm shrink-0">
                <i class="fas fa-clipboard-check"></i>
              </div>
              <div>
                <div class="flex items-center gap-2.5 flex-wrap">
                  <h3 class="text-lg md:text-xl font-black text-white tracking-tight">
                    Comprueba
                  </h3>
                  <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border bg-emerald-500/15 text-emerald-300 border-emerald-500/30">
                    Quiz y Evaluación
                  </span>
                </div>
                <h4 class="text-sm font-bold text-emerald-200 mt-1">
                  ${comprueba.title}
                </h4>
                ${comprueba.description ? `
                  <p class="text-xs text-gray-400 mt-0.5 leading-relaxed">
                    ${comprueba.description}
                  </p>
                ` : ''}
              </div>
            </div>
          </div>

          ${comprueba.widget ? this.renderWidgetContainer(comprueba.widget, 'comprueba-quiz', 'comprueba') : ''}
        </div>
      </section>
    `;
  }

    renderComplementarySection(complementary) {
      if (!complementary || !Array.isArray(complementary) || complementary.length === 0) {
        return '';
      }

      const catMeta = {
        explora: {
          label: 'Explora',
          badge: 'Animaciones y Simuladores',
          icon: 'fa-compass',
          borderClass: 'border-purple-500/30',
          bgGradient: 'from-[#141226]/80 via-[#111422]/60 to-[#0e131d]',
          headerBadgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
          iconBg: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
          indicatorColor: 'bg-purple-400',
          description: 'Animaciones, simulaciones y visualizadores interactivos para explorar y comprender a fondo los conceptos.'
        },
        practica: {
          label: 'Practica',
          badge: 'Ejercicios y Actividades',
          icon: 'fa-pencil-alt',
          borderClass: 'border-amber-500/30',
          bgGradient: 'from-[#221810]/80 via-[#181615]/60 to-[#0e131d]',
          headerBadgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          iconBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
          indicatorColor: 'bg-amber-400',
          description: 'Actividades y retos de aplicación práctica diseñados para consolidar tus habilidades algorítmicas.'
        },
        comprueba: {
          label: 'Comprueba',
          badge: 'Quiz y Evaluación',
          icon: 'fa-clipboard-check',
          borderClass: 'border-emerald-500/30',
          bgGradient: 'from-[#0e1f18]/80 via-[#10191c]/60 to-[#0e131d]',
          headerBadgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          iconBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
          indicatorColor: 'bg-emerald-400',
          description: 'Evaluaciones formativas y cuestionarios interactivos para verificar tu dominio del tema.'
        }
      };

      return `
        <div class="mt-14 pt-8 border-t-2 border-dashed border-gray-800/80 space-y-10">
          <div class="flex items-center gap-3">
            <div class="w-2.5 h-7 rounded-full bg-gradient-to-b from-purple-500 via-amber-500 to-emerald-500"></div>
            <div>
              <h2 class="text-xl md:text-2xl font-black text-white tracking-tight">
                Recursos Complementarios
              </h2>
              <p class="text-xs text-gray-400">
                Actividades interactivas, práctica guiada y comprobación de aprendizaje sin numeración.
              </p>
            </div>
          </div>

          ${complementary.map(block => {
            const meta = catMeta[block.category] || {
              label: block.title || 'Complementario',
              badge: 'Recursos',
              icon: 'fa-layer-group',
              borderClass: 'border-gray-700',
              bgGradient: 'from-[#121622] to-[#0e131d]',
              headerBadgeBg: 'bg-gray-800 text-gray-300 border-gray-700',
              iconBg: 'bg-gray-800 text-gray-400 border-gray-700',
              indicatorColor: 'bg-gray-400',
              description: block.description || ''
            };

            return `
              <section id="sec-${block.category}" class="scroll-mt-20 bg-gradient-to-b ${meta.bgGradient} border ${meta.borderClass} rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
                
                <!-- Encabezado de la Categoría Complementaria (Sin numeración) -->
                <div class="flex items-start justify-between gap-4 pb-5 border-b border-gray-800/80 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl ${meta.iconBg} border flex items-center justify-center text-base shadow-sm shrink-0">
                      <i class="fas ${meta.icon}"></i>
                    </div>
                    <div>
                      <div class="flex items-center gap-2.5 flex-wrap">
                        <h3 class="text-lg md:text-xl font-black text-white tracking-tight">
                          ${meta.label}
                        </h3>
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${meta.headerBadgeBg}">
                          ${meta.badge}
                        </span>
                      </div>
                      <p class="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        ${block.description || meta.description}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Lista de Recursos de la Categoría -->
                <div class="space-y-8">
                  ${(block.items || []).map((item, idx) => `
                    <div class="${idx > 0 ? 'pt-8 border-t border-gray-800/60' : ''} space-y-3">
                      <div class="flex items-start justify-between gap-3">
                        <div>
                          <h4 class="text-sm md:text-base font-bold text-white flex items-center gap-2">
                            <span class="w-1.5 h-3.5 rounded-full ${meta.indicatorColor}"></span>
                            <span>${item.title}</span>
                          </h4>
                          ${item.description ? `
                            <p class="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                              ${item.description}
                            </p>
                          ` : ''}
                        </div>
                      </div>

                      ${item.contentHtml ? `
                        <div class="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed">
                          ${item.contentHtml}
                        </div>
                      ` : ''}

                      ${item.widget ? this.renderWidgetContainer(item.widget, item.id || `${block.category}-${idx}`, block.category) : ''}
                    </div>
                  `).join('')}
                </div>

              </section>
            `;
          }).join('')}
        </div>
      `;
    }

    openWidgetPopup(fileUrl, title) {
      const modal = document.getElementById('widget-popup-modal');
      const titleEl = document.getElementById('popup-widget-title');
      const iframe = document.getElementById('popup-widget-iframe');
      const extLink = document.getElementById('popup-external-link');
      if (!modal || !iframe) return;

      if (titleEl) titleEl.textContent = title || 'Animación Interactiva';
      if (extLink) extLink.href = fileUrl;
      iframe.src = fileUrl;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    closeWidgetPopup() {
      const modal = document.getElementById('widget-popup-modal');
      const iframe = document.getElementById('popup-widget-iframe');
      if (!modal) return;

      modal.classList.add('hidden');
      if (iframe) iframe.src = '';
      document.body.style.overflow = '';
    }

    showWelcomeCodingModal() {
      const modal = document.getElementById('welcome-coding-modal');
      const textContainer = document.getElementById('coding-typewriter-text');
      if (!modal || !textContainer) return;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      this.runCodingTypewriter(textContainer);
    }

    closeWelcomeCodingModal() {
      const modal = document.getElementById('welcome-coding-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      if (this.codingTypewriterTimeout) {
        clearTimeout(this.codingTypewriterTimeout);
        this.codingTypewriterTimeout = null;
      }
    }

    runCodingTypewriter(container) {
      if (this.codingTypewriterTimeout) {
        clearTimeout(this.codingTypewriterTimeout);
        this.codingTypewriterTimeout = null;
      }
      container.innerHTML = '';

      const lines = [
        '<span class="text-gray-500"># ================================================================</span>',
        '<span class="text-emerald-400 font-bold"># PLATAFORMA EDUCATIVA INTERACTIVA &bull; PROF. LEO GAVIRIA</span>',
        '<span class="text-gray-500"># Asignaturas: Programación I, Programación II, Introducción a las TICS</span>',
        '<span class="text-gray-500"># ================================================================</span>',
        '',
        '<span class="text-pink-400 font-bold">class</span> <span class="text-emerald-400 font-bold">Profesor</span>:',
        '    <span class="text-sky-400 font-bold">def</span> <span class="text-yellow-300 font-semibold">__init__</span>(<span class="text-orange-300">self</span>):',
        '        <span class="text-orange-300">self</span>.nombre = <span class="text-emerald-300">"Leo Gaviria"</span>',
        '        <span class="text-orange-300">self</span>.rol = <span class="text-emerald-300">"Profesor Universitario"</span>',
        '        <span class="text-orange-300">self</span>.cursos = [<span class="text-emerald-300">"Programación I"</span>, <span class="text-emerald-300">"Programación II"</span>, <span class="text-emerald-300">"Introducción a las TICS"</span>]',
        '',
        '    <span class="text-sky-400 font-bold">def</span> <span class="text-yellow-300 font-semibold">dar_bienvenida</span>(<span class="text-orange-300">self</span>):',
        '        <span class="text-purple-400 font-bold">return</span> <span class="text-emerald-300">"&iexcl;Bienvenido a la clase! Prep&aacute;rate para dominar las estructuras de datos y algoritmos."</span>',
        '',
        '<span class="text-gray-500"># Inicializando entorno y ejecutando mensaje...</span>',
        '<span class="text-cyan-400">profesor</span> = <span class="text-emerald-400 font-bold">Profesor</span>()',
        '<span class="text-purple-400 font-bold">print</span>(<span class="text-cyan-400">profesor</span>.<span class="text-yellow-300 font-semibold">dar_bienvenida</span>())',
        '',
        '<div class="text-emerald-300 font-medium bg-emerald-950/50 border border-emerald-500/40 p-3 rounded-xl mt-2 leading-relaxed shadow-lg">' +
        '  <span class="text-emerald-400 font-bold">&gt;&gt;&gt; Salida del Programa:</span><br>' +
        '  &iexcl;Bienvenido a la clase! Prep&aacute;rate para dominar las estructuras de datos y algoritmos.' +
        '</div>'
      ];

      let lineIndex = 0;
      let currentHTML = '';
      const cursor = '<span class="text-emerald-400 animate-pulse font-bold ml-0.5">█</span>';

      const typeNext = () => {
        if (lineIndex >= lines.length) {
          container.innerHTML = currentHTML;
          return;
        }

        const line = lines[lineIndex];
        if (line === '') {
          currentHTML += '<div class="h-2.5"></div>';
          lineIndex++;
          this.codingTypewriterTimeout = setTimeout(typeNext, 45);
          return;
        }

        currentHTML += `<div class="leading-relaxed">${line}</div>`;
        container.innerHTML = currentHTML + cursor;
        lineIndex++;

        // Auto-scroll al fondo
        if (container.parentElement) {
          container.parentElement.scrollTop = container.parentElement.scrollHeight;
        }

        this.codingTypewriterTimeout = setTimeout(typeNext, 55);
      };

      typeNext();
    }

    adjustIframeHeight(iframe) {
      if (!iframe) return;
      try {
        if (iframe.contentDocument && iframe.contentDocument.body) {
          const doc = iframe.contentDocument;
          const scrollH = Math.max(
            doc.body.scrollHeight || 0,
            doc.documentElement.scrollHeight || 0,
            doc.body.offsetHeight || 0
          );
          if (scrollH > 100) {
            iframe.style.height = `${scrollH + 10}px`;
          }
        }
      } catch (e) {
        // Fallback
      }
    }

    getBadgeClass(type) {
      switch (type) {
        case 'easy': return 'badge-easy';
        case 'medium': return 'badge-medium';
        case 'hard': return 'badge-hard';
        case 'teal':
        case 'emerald': return 'badge-teal';
        case 'purple': return 'badge-purple';
        case 'sky':
        case 'blue': return 'badge-sky';
        case 'amber':
        case 'yellow': return 'badge-amber';
        case 'rose':
        case 'red': return 'badge-rose';
        case 'neutral':
        default: return 'badge-neutral';
      }
    }

    updateOverallProgress() {
      let totalTopics = 0;
      this.currentCurriculum.forEach(w => totalTopics += w.topics.length);

      const completed = getCompletedTopics();
      const count = completed.length;
      const percentage = totalTopics > 0 ? Math.round((count / totalTopics) * 100) : 0;

      if (this.progressFillEl) this.progressFillEl.style.width = `${percentage}%`;
      if (this.progressTextEl) this.progressTextEl.textContent = `${percentage}%`;
      if (this.progressFractionEl) this.progressFractionEl.textContent = `${count}/${totalTopics}`;

      const streakEl = document.getElementById('streak-count');
      if (streakEl) streakEl.textContent = count;
    }

    toggleCompletion(topicId) {
      const { isNowCompleted } = toggleTopicCompleted(topicId);
      this.updateOverallProgress();
      this.renderSidebar();

      if (topicId === this.currentTopicId) {
        const btn = document.getElementById('completion-toggle-btn');
        if (btn) {
          btn.className = `inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition border ${isNowCompleted ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300' : 'bg-[#151b27] border-gray-700 text-gray-300 hover:border-emerald-500/40 hover:text-white'} shrink-0 shadow-sm`;
          btn.innerHTML = `
            <i class="${isNowCompleted ? 'fas fa-check-circle text-emerald-400' : 'far fa-circle text-gray-400'} text-sm"></i>
            <span>${isNowCompleted ? 'Completado' : 'Marcar como Completado'}</span>
          `;
        }
      }
    }

    showToast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `pointer-events-auto px-4 py-3 rounded-xl text-xs font-medium shadow-2xl border flex items-center gap-2.5 transition-all duration-300 animate-fade-in ${
        type === 'success' ? 'bg-[#102419] border-emerald-500/50 text-emerald-200' : 'bg-[#151b27] border-gray-700 text-gray-200'
      }`;
      toast.innerHTML = `
        <i class="${type === 'success' ? 'fas fa-check-circle text-emerald-400' : 'fas fa-info-circle text-sky-400'} text-sm"></i>
        <span>${message}</span>
      `;

      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

    openSearchModal() {
      if (!this.searchModalEl) return;
      this.searchModalEl.classList.remove('hidden');
      if (this.searchModalInput) {
        this.searchModalInput.value = '';
        this.searchModalInput.focus();
        this.handleModalSearch('');
      }
    }

    closeSearchModal() {
      if (!this.searchModalEl) return;
      this.searchModalEl.classList.add('hidden');
    }

    handleModalSearch(query) {
      if (!this.searchResultsEl) return;

      if (!query || query.trim() === '') {
        this.searchResultsEl.innerHTML = `
          <div class="py-8 text-center text-xs text-gray-500 font-mono">
            Escribe el nombre de un algoritmo o tema...
          </div>
        `;
        return;
      }

      const results = searchCurriculum(query, this.currentCurriculum);
      if (results.length === 0) {
        this.searchResultsEl.innerHTML = `
          <div class="py-8 text-center text-xs text-gray-500">
            No se encontraron temas coincidentes con "<span class="text-gray-300">${query}</span>"
          </div>
        `;
        return;
      }

      this.searchResultsEl.innerHTML = results.map(r => `
        <a 
          href="#${r.topicId}"
          onclick="window.app.closeSearchModal()"
          class="flex items-center justify-between p-3 rounded-xl hover:bg-[#19202e] border border-transparent hover:border-gray-700 transition group"
        >
          <div class="min-w-0 flex-1">
            <span class="text-xs text-emerald-400 font-mono block">${r.weekTitle}</span>
            <span class="text-sm font-semibold text-white group-hover:text-emerald-300 transition block leading-snug break-words">${r.topicTitle}</span>
          </div>
          <div class="flex items-center gap-2 shrink-0 ml-3">
            ${r.hasAnimation ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Animación</span>' : ''}
            <span class="text-xs text-gray-500 font-mono">${r.duration}</span>
          </div>
        </a>
      `).join('');
    }

    openGuideModal() {
      if (!this.guideModalEl) return;
      this.guideModalEl.classList.remove('hidden');
    }

    closeGuideModal() {
      if (!this.guideModalEl) return;
      this.guideModalEl.classList.add('hidden');
    }
  }

  // Inicializar al cargar el DOM
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new LeoGaviriaApp();
  });

})();
