/**
 * CONTENIDO EDUCATIVO: INSERTION SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

export const INSERTION_SORT_DATA = {
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
