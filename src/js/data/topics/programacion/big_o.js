/**
 * CONTENIDO EDUCATIVO: NOTACIÓN BIG-O Y COMPLEJIDAD ASINTÓTICA
 * Unidad 09 - Análisis y Complejidad de Algoritmos
 * Prof. Leo Gaviria - Programación
 */

export const BIG_O_DATA = {
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
