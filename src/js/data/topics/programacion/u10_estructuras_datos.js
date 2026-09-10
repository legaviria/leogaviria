/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 10 - ESTRUCTURAS DE DATOS
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U10_TOPICS = {
  "intro-arboles-binarios": {
    id: "intro-arboles-binarios",
    title: "10.1 Árboles binarios",
    subtitle: "Estructuras de datos jerárquicas y no lineales: nodo, raíz, hijos, hojas, altura, Árboles Binarios de Búsqueda (BST) y recorridos DFS.",
    unit: 10,
    unitTitle: "Unidad 10: Estructuras de datos",
    week: 10,
    weekTitle: "Unidad 10: Estructuras de datos",
    difficulty: "Media",
    category: "Estructuras Jerárquicas",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 10", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "BST", type: "teal" },
      { text: "Recorridos DFS", type: "purple" }
    ],
    sections: [
      {
        id: "conceptos-arbol-binario",
        title: "1. Anatomía y Propiedades de los Árboles Binarios",
        shortTitle: "Anatomía de Árboles",
        icon: "fa-project-diagram",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Un <strong>árbol</strong> es una estructura de datos jerárquica no lineal compuesta por <strong>nodos</strong> conectados por aristas dirigidas. Un <strong>árbol binario</strong> restringe cada nodo a tener como máximo dos hijos (convencionalmente denominados <em>hijo izquierdo</em> e <em>hijo derecho</em>).
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800 text-center"><strong class="text-sky-400">Raíz:</strong> Nodo superior sin padre</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800 text-center"><strong class="text-emerald-400">Hoja:</strong> Nodo sin hijos terminal</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800 text-center"><strong class="text-amber-400">Altura:</strong> Longitud del camino más largo</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800 text-center"><strong class="text-purple-400">BST:</strong> Izquierda &lt; Raíz &lt; Derecha</div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Constructor y Visualizador Interactivo de Árboles Binarios (BST)",
            description: "Inspecciona la topología de un Árbol Binario de Búsqueda y ejecuta los recorridos Preorden, Inorden y Postorden iluminando los nodos paso a paso:",
            widget: {
              file: "widgets/programacion/u10_arbol_binario_visualizer.html",
              title: "Visualizador de Árboles Binarios",
              height: "480px"
            }
          }
        ]
      },
      {
        id: "recorridos-dfs-arboles",
        title: "2. Recorridos en Profundidad: Preorden, Inorden y Postorden",
        shortTitle: "Recorridos DFS",
        icon: "fa-route",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Existen tres formas canónicas de visitar cada nodo de un árbol binario mediante funciones recursivas:
          </p>
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Recorrido</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Secuencia de Visita</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Aplicación Principal</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="text-sky-400 py-2.5 px-3">Inorden</td>
                  <td class="py-2.5 px-3">Izquierda ➔ Raíz ➔ Derecha (I-R-D)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">En un BST, extrae todos los elementos ordenados ascendentemente.</td>
                </tr>
                <tr>
                  <td class="text-purple-400 py-2.5 px-3">Preorden</td>
                  <td class="py-2.5 px-3">Raíz ➔ Izquierda ➔ Derecha (R-I-D)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Serialización, copia y clonación exacta de la estructura del árbol.</td>
                </tr>
                <tr>
                  <td class="text-amber-400 py-2.5 px-3">Postorden</td>
                  <td class="py-2.5 px-3">Izquierda ➔ Derecha ➔ Raíz (I-D-R)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Evaluación de expresiones matemáticas (AST) y liberación de memoria.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        quiz: [
          {
            question: "En un Árbol Binario de Búsqueda (BST) que contiene los números [50, 30, 70, 20, 40], ¿cuál es el resultado de un recorrido Inorden?",
            options: [
              "[50, 30, 20, 40, 70]",
              "[20, 30, 40, 50, 70] (secuencia ordenada)",
              "[20, 40, 30, 70, 50]",
              "[70, 50, 40, 30, 20]"
            ],
            correct: 1,
            explanation: "Por definición de un BST, el recorrido Inorden (Subárbol Izquierdo ➔ Raíz ➔ Subárbol Derecho) siempre visita los elementos en orden estrictamente ascendente: 20, 30, 40, 50, 70."
          }
        ]
      }
    ]
  }
};
