/**
 * CONTENIDO EDUCATIVO: SELECTION SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

export const SELECTION_SORT_DATA = {
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
