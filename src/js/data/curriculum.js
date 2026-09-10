/**
 * PLAN DE ESTUDIOS DE 14 UNIDADES - PROGRAMACIÓN
 * Ruta Integral: Fundamentos, Lógica, Recursión, Datos, Gráficos y ML
 * Prof. Leo Gaviria
 */

export const CURRICULUM = [
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

export const TOPIC_ALIASES = {
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

export const CURRICULUM_TICS = [
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

/**
 * Encuentra un tema por su identificador único o alias en cualquier currículum
 */
export function getTopicById(topicId) {
  const actualId = TOPIC_ALIASES[topicId] || topicId;
  const curricula = [CURRICULUM, CURRICULUM_TICS];

  for (const curr of curricula) {
    for (const unit of curr) {
      const topic = unit.topics.find(t => t.id === actualId);
      if (topic) {
        return {
          ...topic,
          unitId: unit.id,
          unitNumber: unit.number,
          unitTitle: unit.title,
          weekId: unit.id,
          weekNumber: unit.number,
          weekTitle: unit.title
        };
      }
    }
  }
  return null;
}

/**
 * Obtiene el tema anterior y siguiente para la navegación guiada
 */
export function getSurroundingTopics(currentTopicId, customCurriculum = null) {
  const actualId = TOPIC_ALIASES[currentTopicId] || currentTopicId;
  const curr = customCurriculum || (actualId.startsWith('tics-') ? CURRICULUM_TICS : CURRICULUM);
  const allTopics = [];

  for (const unit of curr) {
    for (const topic of unit.topics) {
      allTopics.push({
        ...topic,
        unitId: unit.id,
        unitNumber: unit.number,
        unitTitle: unit.title,
        weekId: unit.id,
        weekNumber: unit.number,
        weekTitle: unit.title
      });
    }
  }

  const index = allTopics.findIndex(t => t.id === actualId);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? allTopics[index - 1] : null,
    next: index < allTopics.length - 1 ? allTopics[index + 1] : null
  };
}
