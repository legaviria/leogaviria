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
  },

  "prog-minecraft-funciones-matrices": {
    id: "prog-minecraft-funciones-matrices",
    title: "6.4 Funciones para Minecraft: Librería Pokémon y Dibujado Modular",
    subtitle: "Modularización con funciones, parámetros espaciales (x, y, z), procedimientos con efectos colaterales y consumo de librerías con import pokemon as pk.",
    unit: 6,
    unitTitle: "Unidad 06: Funciones y procedimientos",
    week: 6,
    weekTitle: "Unidad 06: Funciones y procedimientos",
    difficulty: "Media",
    category: "Funciones y Librerías Modulares",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 06", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "def dibujar_pixelart", type: "purple" },
      { text: "Librería Pokémon", type: "teal" }
    ],
    sections: [
      {
        id: "modularizacion-funciones-reutilizables",
        title: "1. Modularización de Código: De Scripts Monolíticos a Funciones Reutilizables",
        shortTitle: "Funciones Reutilizables",
        icon: "fa-cubes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En lugar de duplicar los ciclos <code>for</code> cada vez que deseamos construir una figura en Minecraft, encapsulamos la lógica dentro de una <strong>función modular</strong> que recibe parámetros configurables:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4 space-y-1">
            <span class="text-purple-400">from</span> mcpi.minecraft <span class="text-purple-400">import</span> Minecraft<br>
            <span class="text-purple-400">import</span> pokemon <span class="text-purple-400">as</span> pk<br><br>
            <span class="text-gray-500"># Definición de la función modular con 4 parámetros formales</span><br>
            <span class="text-purple-400">def</span> <span class="text-sky-300">dibujar_pixelart</span>(x, y, z, matriz):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;filas = <span class="text-sky-300">len</span>(matriz) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Variable local</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;columnas = <span class="text-sky-300">len</span>(matriz[<span class="text-amber-300">0</span>]) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Variable local</span><br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-sky-300">range</span>(filas):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">for</span> j <span class="text-purple-400">in</span> <span class="text-sky-300">range</span>(columnas):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;valor = matriz[i][j]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> valor <span class="text-purple-400">in</span> pk.PALETA:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bloque, sub_id = pk.PALETA[valor]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mc.<span class="text-sky-300">setBlock</span>(x + j, y + (filas - i), z, bloque, sub_id)<br><br>
            <span class="text-gray-500"># Invocación principal pasando entidad y matriz de Pokémon</span><br>
            x, y, z = mc.entity.<span class="text-sky-300">getTilePos</span>(usuario)<br>
            <span class="text-sky-300">dibujar_pixelart</span>(x, y, z, pk.PK_125) &nbsp;&nbsp;<span class="text-gray-500"># Dibuja Electabuzz en (x, y, z)</span><br>
            <span class="text-sky-300">dibujar_pixelart</span>(x + <span class="text-amber-300">25</span>, y, z, pk.PK_025) <span class="text-gray-500"># Dibuja Pikachu a 25 bloques a la derecha</span>
          </div>

          <h4 class="text-sm font-bold text-white mb-2">Características del Diseño Modular</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-sky-400 font-mono">1. Procedimiento con Efectos Colaterales</strong>
              <p class="text-[11px] text-gray-300 mt-1">No requiere sentencia <code>return</code> porque su misión no es calcular un número, sino modificar el entorno tridimensional enviando paquetes de red con <code>mc.setBlock</code>.</p>
            </div>
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-purple-400 font-mono">2. Ámbito Local (Local Scope)</strong>
              <p class="text-[11px] text-gray-300 mt-1">Las variables <code>filas, columnas, i, j, valor, bloque</code> se crean dentro del marco de la función y se liberan de memoria una vez finaliza el dibujado.</p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Modular: Invocación de Funciones y Librería Pokémon en Minecraft",
            description: "Observa la pila de llamadas (Call Stack), el paso de argumentos, las variables locales en memoria y el renderizado voxel en 3D:",
            widget: {
              file: "widgets/programacion/u06_minecraft_pokemon_libreria.html",
              title: "Librería Pokémon y Funciones",
              height: "700px"
            }
          }
        ]
      },
      {
        id: "arquitectura-libreria-pokemon",
        title: "2. Arquitectura de Librerías y Módulos: import pokemon as pk",
        shortTitle: "Librerías y Módulos",
        icon: "fa-book-open",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una buena práctica en ingeniería de software es la <strong>separación de responsabilidades</strong>:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>pokemon.py (Módulo de Datos):</strong> Almacena exclusivamente estructuras de información: el diccionario <code>PALETA</code> y las matrices de sprites (<code>PK_001</code> Bulbasaur, <code>PK_025</code> Pikachu, <code>PK_125</code> Electabuzz).</li>
            <li><strong>dibujar.py (Módulo Lógico / Operativo):</strong> Importa la librería con <code>import pokemon as pk</code>, conecta con el servidor y define la función operativa <code>dibujar_pixelart()</code>.</li>
          </ul>

          <h4 class="text-sm font-bold text-white mb-2">Parámetros con Valores por Defecto</h4>
          <p class="text-xs text-gray-300 leading-relaxed mb-3">
            Podemos hacer que nuestra función sea aún más versátil agregando parámetros opcionales con valores predeterminados, por ejemplo para controlar el plano de construcción:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-purple-400">def</span> <span class="text-sky-300">dibujar_pixelart</span>(x, y, z, matriz, orientacion=<span class="text-emerald-300">'X'</span>):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-sky-300">range</span>(len(matriz)):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">for</span> j <span class="text-purple-400">in</span> <span class="text-sky-300">range</span>(len(matriz[0])):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> orientacion == <span class="text-emerald-300">'X'</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mc.<span class="text-sky-300">setBlock</span>(x + j, y + (filas - i), z, bloque, sub_id) &nbsp;<span class="text-gray-500"># Pared plano XY</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mc.<span class="text-sky-300">setBlock</span>(x, y + (filas - i), z + j, bloque, sub_id) &nbsp;<span class="text-gray-500"># Pared plano YZ</span>
          </div>
        `,
        interactive: [
          {
            category: "practica",
            title: "Práctica Guiada: Modularización con Funciones en Minecraft",
            description: "Resuelve retos sobre parámetros formales, argumentos, efectos colaterales y reutilización de librerías:",
            widget: {
              file: "widgets/programacion/u06_practica_funciones_minecraft.html",
              title: "Práctica de Funciones en Minecraft",
              height: "540px"
            }
          }
        ],
        quiz: [
          {
            question: "¿Cuál es la principal ventaja arquitectónica de separar las definiciones de matrices y paleta en 'pokemon.py' e importar dicho módulo en 'dibujar.py'?",
            options: [
              "Desacoplamiento: separa los datos del algoritmo de renderizado, permitiendo añadir cientos de Pokémon nuevos sin tener que modificar una sola línea de código en la función dibujar_pixelart.",
              "Reduce el consumo de memoria RAM a exactamente 0 bytes.",
              "Hace que Python ejecute el código antes de conectarse al servidor.",
              "Minecraft exige que todos los archivos se llamen pokemon.py."
            ],
            correct: 0,
            explanation: "El desacoplamiento entre datos (pokemon.py) y lógica (dibujar.py) permite mantener, extender y testear el código de manera independiente, siguiendo los mejores principios de ingeniería de software."
          }
        ]
      }
    ]
  }
};

