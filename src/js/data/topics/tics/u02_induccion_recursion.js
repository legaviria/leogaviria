/**
 * UNIDAD 02: INDUCCIÓN Y RECURSIÓN
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

export const TICS_U02_TOPICS = {
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
