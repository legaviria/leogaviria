/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 13 - PROCESAMIENTO Y VISUALIZACIÓN DE DATOS
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U13_TOPICS = {
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
