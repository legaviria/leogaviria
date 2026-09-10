/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 07 - RECURSIVIDAD
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U07_TOPICS = {
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
