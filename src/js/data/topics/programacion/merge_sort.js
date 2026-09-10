/**
 * CONTENIDO EDUCATIVO: MERGE SORT
 * Unidad 11 - Algoritmos de Ordenamiento
 * Prof. Leo Gaviria - Programación
 */

export const MERGE_SORT_DATA = {
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
