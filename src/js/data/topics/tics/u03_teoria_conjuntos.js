/**
 * UNIDAD 03: TEORÍA DE CONJUNTOS Y ÁLGEBRA BOOLEANA
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

export const TICS_U03_TOPICS = {
  "tics-u03-t01-conjuntos-subconjuntos": {
    id: "tics-u03-t01-conjuntos-subconjuntos",
    title: "3.1 Conjuntos y subconjuntos",
    subtitle: "Definición formal de conjunto, pertenencia (∈), inclusión (⊆), cardinalidad, conjunto vacío (∅) y universo (U).",
    unit: 3,
    unitTitle: "Unidad 03: Teoría de conjuntos",
    week: 3,
    weekTitle: "Unidad 03: Teoría de conjuntos",
    difficulty: "Fácil",
    category: "Teoría de Conjuntos",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Pertenencia e Inclusión", type: "teal" },
      { text: "Conjunto Vacío ∅", type: "blue" }
    ],
    sections: [
      {
        id: "conceptos-fundamentales-conjuntos",
        title: "1. ¿En qué consiste un conjunto?",
        shortTitle: "¿En qué consiste?",
        icon: "fa-shapes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Un <strong>conjunto</strong> es una colección bien definida de objetos distintos considerados como un todo. Los objetos que lo componen se denominan <strong>elementos</strong> o miembros. La relación fundamental es la <strong>pertenencia</strong>: escribimos <code>x ∈ A</code> si el elemento x pertenece al conjunto A, o <code>x ∉ A</code> si no pertenece.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div class="subcard-box p-4 border-teal-500/30">
              <span class="text-teal-400 font-bold block text-sm mb-1">Inclusión (Subconjuntos ⊆):</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Decimos que <code>A ⊆ B</code> (A es subconjunto de B) si y solo si <strong>todo elemento de A es también elemento de B</strong>:
                <code>∀ x, (x ∈ A ⇒ x ∈ B)</code>.
              </p>
            </div>
            <div class="subcard-box p-4 border-sky-500/30">
              <span class="text-sky-400 font-bold block text-sm mb-1">Conjunto Vacío (∅):</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                El conjunto sin elementos se denota <code>∅</code> o <code>{}</code>. Su cardinalidad es <code>|∅| = 0</code>. Por vaciedad lógica, <strong>el conjunto vacío es subconjunto de todo conjunto A (∅ ⊆ A)</strong>.
              </p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Explorador Interactivo de Conjuntos y Pertenencia",
            description: "Escribe tus propios conjuntos A y B, evalúa relaciones de inclusión y comprueba si cualquier elemento x pertenece a cada uno en tiempo real:",
            widget: {
              file: "widgets/tics/u03_explorador_conjuntos.html",
              title: "Explorador de Conjuntos",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u03-t02-operaciones-conjuntos": {
    id: "tics-u03-t02-operaciones-conjuntos",
    title: "3.2 Operaciones con conjuntos",
    subtitle: "Álgebra fundamental: Unión (∪), Intersección (∩), Diferencia relativa (\), Complemento (A^c) y Diferencia Simétrica (Δ).",
    unit: 3,
    unitTitle: "Unidad 03: Teoría de conjuntos",
    week: 3,
    weekTitle: "Unidad 03: Teoría de conjuntos",
    difficulty: "Media",
    category: "Teoría de Conjuntos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Diagrama de Venn", type: "teal" },
      { text: "Álgebra de Conjuntos", type: "purple" }
    ],
    sections: [
      {
        id: "operaciones-fundamentales",
        title: "1. Operaciones y Diagramas de Venn",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-circle-nodes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Al igual que en la aritmética combinamos números mediante suma y producto, en la teoría de conjuntos combinamos subconjuntos de un universo <code>U</code> mediante operaciones estándar:
          </p>

          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table font-mono">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-teal-400 font-bold">Operación</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Notación</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Definición Formal por Comprensión</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Unión</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A ∪ B</td>
                  <td class="py-2 px-3 text-emerald-400">{ x ∈ U | x ∈ A ∨ x ∈ B }</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Intersección</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A ∩ B</td>
                  <td class="py-2 px-3 text-emerald-400">{ x ∈ U | x ∈ A ∧ x ∈ B }</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Diferencia</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A \ B</td>
                  <td class="py-2 px-3 text-emerald-400">{ x ∈ U | x ∈ A ∧ x ∉ B }</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Complemento</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A^c</td>
                  <td class="py-2 px-3 text-emerald-400">{ x ∈ U | x ∉ A } = U \ A</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3 font-sans">Dif. Simétrica</td>
                  <td class="py-2 px-3 text-sky-300 font-bold">A Δ B</td>
                  <td class="py-2 px-3 text-emerald-400">(A \ B) ∪ (B \ A) = (A ∪ B) \ (A ∩ B)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Diagrama de Venn Interactivo",
            description: "Haz clic en cada operación para ver cómo se sombrean las regiones correspondientes del Diagrama de Venn y cuáles elementos pertenecen al conjunto resultante:",
            widget: {
              file: "widgets/tics/u03_diagrama_venn.html",
              title: "Diagrama de Venn Interactivo",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u03-t03-algebra-booleana": {
    id: "tics-u03-t03-algebra-booleana",
    title: "3.3 Álgebra booleana de la teoría de conjuntos",
    subtitle: "Isomorfismo con la lógica proposicional, compuertas lógicas y verificación de las Leyes de De Morgan.",
    unit: 3,
    unitTitle: "Unidad 03: Teoría de conjuntos",
    week: 3,
    weekTitle: "Unidad 03: Teoría de conjuntos",
    difficulty: "Media",
    category: "Teoría de Conjuntos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Leyes de De Morgan", type: "amber" },
      { text: "Lógica Booleana", type: "teal" }
    ],
    sections: [
      {
        id: "leyes-de-morgan",
        title: "1. Álgebra de Boole y Leyes de De Morgan",
        shortTitle: "Leyes de De Morgan",
        icon: "fa-toggle-on",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Existe un <strong>isomorfismo estructural exacto</strong> entre el álgebra de conjuntos <code>(𝒫(U), ∪, ∩, ^c)</code> y el álgebra booleana de la lógica de circuitos <code>({0, 1}, ∨, ∧, ¬)</code>. Las leyes que rigen la simplificación de expresiones de conjuntos son idénticas a las utilizadas por los ingenieros de hardware para diseñar circuitos lógicos.
          </p>

          <div class="bg-[#090d14] border border-amber-500/30 rounded-xl p-4 my-4 font-mono text-xs space-y-2">
            <h4 class="text-amber-400 font-bold uppercase text-sm mb-1">Las Leyes de De Morgan para Conjuntos:</h4>
            <div class="p-2 rounded bg-[#10141d] text-teal-300 font-bold">
              1. (A ∪ B)^c = A^c ∩ B^c &nbsp;&nbsp; (El complemento de la unión es la intersección de complementos)
            </div>
            <div class="p-2 rounded bg-[#10141d] text-sky-300 font-bold">
              2. (A ∩ B)^c = A^c ∪ B^c &nbsp;&nbsp; (El complemento de la intersección es la unión de complementos)
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Álgebra Booleana y Leyes de De Morgan",
            description: "Analiza la tabla de verdad y la correspondencia entre operadores de conjuntos, operadores lógicos (AND, OR, NOT, XOR) y compuertas digitales:",
            widget: {
              file: "widgets/tics/u03_algebra_booleana.html",
              title: "Álgebra Booleana y De Morgan",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u03-t04-tuplas-conjunto-potencia": {
    id: "tics-u03-t04-tuplas-conjunto-potencia",
    title: "3.4 Tuplas y conjuntos potencia",
    subtitle: "Pares ordenados, producto cartesiano A × B, conjunto potencia 𝒫(A) y su correspondencia con máscaras de bits binarias.",
    unit: 3,
    unitTitle: "Unidad 03: Teoría de conjuntos",
    week: 3,
    weekTitle: "Unidad 03: Teoría de conjuntos",
    difficulty: "Media",
    category: "Teoría de Conjuntos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Producto Cartesiano", type: "teal" },
      { text: "Conjunto Potencia 2^n", type: "blue" }
    ],
    sections: [
      {
        id: "producto-cartesiano-potencia",
        title: "1. Producto Cartesiano y Conjunto Potencia",
        shortTitle: "Cartesiano y potencia",
        icon: "fa-grid-2",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>producto cartesiano</strong> <code>A × B</code> es el conjunto de todos los pares ordenados <code>(a, b)</code> tales que <code>a ∈ A</code> y <code>b ∈ B</code>. Su cardinalidad es el producto de cardinalidades: <code>|A × B| = |A| · |B|</code>. Es el fundamento matemático del modelo relacional en bases de datos (SQL).
          </p>

          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>conjunto potencia</strong> <code>𝒫(A)</code> es la familia de <strong>todos los subconjuntos posibles de A</strong>, incluidos el conjunto vacío <code>∅</code> y el propio conjunto <code>A</code>. Si <code>|A| = n</code>, entonces:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            |𝒫(A)| = 2^{|A|} = 2^n subconjuntos
          </div>

          <p class="text-xs text-gray-300 leading-relaxed">
            En programación, cada subconjunto se representa elegantemente mediante un entero de <code>n</code> bits (una <em>máscara de bits</em> o bitmask), donde el bit <code>i</code> vale <code>1</code> si el elemento <code>i</code> está incluido en el subconjunto y <code>0</code> si no lo está.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Producto Cartesiano y Conjunto Potencia",
            description: "Define conjuntos pequeños y visualiza la cuadrícula de tuplas ordenadas de A × B junto con los 2^n subconjuntos generados con sus máscaras de bits binarias:",
            widget: {
              file: "widgets/tics/u03_tuplas_potencia.html",
              title: "Cartesiano y Conjunto Potencia",
              height: "530px"
            }
          },
          {
            category: "practica",
            title: "Reto Integrador de la Unidad 03: Teoría de Conjuntos",
            description: "Resuelve 5 desafíos interactivos con puntaje sobre cardinalidad de potencia, leyes de De Morgan, producto cartesiano y subconjuntos propios:",
            widget: {
              file: "widgets/tics/u03_reto_conjuntos.html",
              title: "Reto Integrador Unidad 03",
              height: "560px"
            }
          }
        ]
      }
    ],
    comprueba: {
      title: "Comprueba: Evaluación de Teoría de Conjuntos",
      subtitle: "Evaluación interactiva formativa de la Unidad 03.",
      widget: {
        file: "widgets/tics/u03_reto_conjuntos.html",
        title: "Evaluación Unidad 03",
        height: "580px"
      }
    }
  }
};
