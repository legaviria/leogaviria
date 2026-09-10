/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 06 - FUNCIONES Y PROCEDIMIENTOS
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U06_TOPICS = {
  "prog-funciones-intro": {
    id: "prog-funciones-intro",
    title: "6.1 Funciones: definición y componentes",
    subtitle: "Modularidad de software, parámetros vs argumentos, valor de retorno con return, ámbito local/global y valores por defecto.",
    unit: 6,
    unitTitle: "Unidad 06: Funciones y procedimientos",
    week: 6,
    weekTitle: "Unidad 06: Funciones y procedimientos",
    difficulty: "Media",
    category: "Modularidad y Funciones",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 06", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "def / return", type: "teal" },
      { text: "Scope", type: "purple" }
    ],
    sections: [
      {
        id: "anatomia-funciones-parametros",
        title: "1. Definición, Parámetros y Retorno de Valores",
        shortTitle: "Definición y Retorno",
        icon: "fa-cubes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>función</strong> es un bloque autónomo y reutilizable de código diseñado para realizar una tarea específica. Sigue el principio fundamental <strong>DRY</strong> (<em>Don't Repeat Yourself</em>).
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-purple-400">def</span> <span class="text-sky-300">calcular_total</span>(subtotal, tasa_impuesto=0.19):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># tasa_impuesto tiene un valor por defecto (0.19)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;impuesto = subtotal * tasa_impuesto<br>
            &nbsp;&nbsp;&nbsp;&nbsp;total = subtotal + impuesto<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> total &nbsp;<span class="text-gray-500"># Devuelve el valor al llamador y finaliza la función</span>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Animación del Flujo de Ejecución de una Función",
            description: "Sigue visualmente cómo los argumentos pasan a los parámetros locales, el cuerpo se ejecuta en su propio stack frame y return devuelve el resultado:",
            widget: {
              file: "widgets/programacion/u06_flujo_funciones.html",
              title: "Flujo de Ejecución de una Función",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "ambito-scope-variables",
        title: "2. Ámbito de Variables: Local vs. Global",
        shortTitle: "Ámbito (Scope)",
        icon: "fa-compress-arrows-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>ámbito (scope)</strong> determina en qué partes del programa una variable es accesible:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>Variables Locales:</strong> Creadas dentro del cuerpo de la función. Nacen cuando la función es llamada y son destruidas de la memoria cuando la función finaliza. No pueden ser leídas desde fuera de la función.</li>
            <li><strong>Variables Globales:</strong> Declaradas en el nivel principal del script. Son visibles en todo el módulo, pero modificarlas dentro de una función requiere la palabra clave explícita <code>global</code> (práctica generalmente desaconsejada en ingeniería).</li>
          </ul>
        `,
        quiz: [
          {
            question: "¿Qué ocurre si una función en Python finaliza su ejecución sin llegar a ninguna sentencia 'return' explícita?",
            options: [
              "Python arroja un SyntaxError.",
              "Retorna automáticamente el valor especial None.",
              "Retorna 0 por defecto.",
              "Conserva en memoria el último valor calculado."
            ],
            correct: 1,
            explanation: "En Python, toda función que no incluye un 'return' o que ejecuta un 'return' sin argumentos devuelve de forma implícita el objeto singleton None."
          }
        ]
      }
    ]
  },

  "prog-funciones-integradas": {
    id: "prog-funciones-integradas",
    title: "6.2 Funciones integradas de Python",
    subtitle: "El arsenal estándar de built-ins: inspección de tipos, agregaciones matemáticas, conversiones y manipulación de secuencias.",
    unit: 6,
    unitTitle: "Unidad 06: Funciones y procedimientos",
    week: 6,
    weekTitle: "Unidad 06: Funciones y procedimientos",
    difficulty: "Fácil",
    category: "Biblioteca Estándar",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 06", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Built-ins", type: "teal" },
      { text: "len / sum", type: "purple" }
    ],
    sections: [
      {
        id: "catalogo-builtins-principales",
        title: "1. Catálogo de Funciones Nativas (Built-ins)",
        shortTitle: "Funciones Built-ins",
        icon: "fa-puzzle-piece",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Python incluye un conjunto de funciones de primer orden disponibles directamente sin necesidad de importar ningún módulo (disponibles en el módulo <code>builtins</code>):
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">len(seq)</strong>: Longitud o conteo de elementos</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-purple-400">sum(iterable)</strong>: Suma total de valores numéricos</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-emerald-400">min() / max()</strong>: Valor mínimo y máximo</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-amber-400">abs(x)</strong>: Valor absoluto matemático</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-pink-400">round(x, n)</strong>: Redondeo al decimal especificado</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-indigo-400">type(obj)</strong>: Retorna la clase del objeto</div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Explorador Interactivo de Funciones Integradas",
            description: "Prueba interactivamente funciones como len, sum, min, max y abs proporcionando tus propios datos de prueba:",
            widget: {
              file: "widgets/programacion/u06_explorador_builtins.html",
              title: "Explorador de Funciones Built-ins",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-builtins",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Evalúa tu dominio sobre las funciones estándar:</p>`,
        quiz: [
          {
            question: "¿Cuál es el resultado de la llamada: min([45, 12, 89, 3, 27])?",
            options: ["89", "3", "12", "45"],
            correct: 1,
            explanation: "min() recorre la colección iterable y retorna el elemento con el valor numérico más bajo, que en este caso es 3."
          }
        ]
      }
    ]
  },

  "prog-procedimientos-funciones": {
    id: "prog-procedimientos-funciones",
    title: "6.3 Procedimientos y diferencias con las funciones",
    subtitle: "Funciones puras sin efectos colaterales vs procedimientos de mutación y acción, retorno None y arquitectura modular.",
    unit: 6,
    unitTitle: "Unidad 06: Funciones y procedimientos",
    week: 6,
    weekTitle: "Unidad 06: Funciones y procedimientos",
    difficulty: "Media",
    category: "Diseño Modular",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 06", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Side Effects", type: "amber" },
      { text: "Funciones Puras", type: "teal" }
    ],
    sections: [
      {
        id: "funcion-pura-vs-procedimiento",
        title: "1. Funciones Puras vs. Procedimientos (Efectos Colaterales)",
        shortTitle: "Funciones vs Procedimientos",
        icon: "fa-balance-scale",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Aunque en Python ambos se declaran con la palabra reservada <code>def</code>, en ciencia de la computación existe una distinción teórica y práctica fundamental:
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Criterio</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Función Pura (Mathematical)</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Procedimiento (Action / Side Effect)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">Propósito Central</td>
                  <td class="py-2.5 px-3">Calcular y retornar un nuevo valor a partir de sus entradas.</td>
                  <td class="py-2.5 px-3">Ejecutar una acción o provocar un cambio de estado en el sistema.</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Retorno (return)</td>
                  <td class="py-2.5 px-3">Explícito y obligatorio (devuelve un dato concreto).</td>
                  <td class="py-2.5 px-3">Sin return explícito (devuelve <code>None</code>).</td>
                </tr>
                <tr>
                  <td class="font-bold text-amber-400 py-2.5 px-3">Efectos Colaterales</td>
                  <td class="py-2.5 px-3">Cero (no altera archivos, ni consola, ni bases de datos).</td>
                  <td class="py-2.5 px-3">Primordial: imprimir en pantalla, escribir un archivo, enviar un correo.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "practica",
            title: "Clasificador Interactivo: ¿Función o Procedimiento?",
            description: "Analiza fragmentos de código y determina si representan funciones matemáticas puras o procedimientos con efectos colaterales:",
            widget: {
              file: "widgets/programacion/u06_clasificador_procedimientos.html",
              title: "¿Función o Procedimiento?",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-procedimientos",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Verifica tu comprensión del diseño modular:</p>`,
        quiz: [
          {
            question: "Una función que recibe una lista, la ordena in-place con lista.sort() e imprime 'Ordenado' sin sentencia return, es considerada principalmente:",
            options: [
              "Una función pura sin efectos colaterales.",
              "Un procedimiento, ya que muta el estado externo y no devuelve ningún valor calculado.",
              "Un error de sintaxis por no usar return.",
              "Un generador asíncrono."
            ],
            correct: 1,
            explanation: "Al modificar la lista original (mutación in-place) y emitir salida en consola sin retornar ningún dato, se clasifica conceptualmente como un procedimiento con efectos colaterales."
          }
        ]
      }
    ]
  }
};
