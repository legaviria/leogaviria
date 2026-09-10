/**
 * CONTENIDO EDUCATIVO: QUICK SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

export const QUICK_SORT_DATA = {
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
