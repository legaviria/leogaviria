/**
 * CONTENIDO EDUCATIVO DETALLADO: BUBBLE SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

export const BUBBLE_SORT_DATA = {
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
