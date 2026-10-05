/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 03 - ELEMENTOS BÁSICOS DE PROGRAMACIÓN
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U03_TOPICS = {
  "prog-variables-constantes": {
    id: "prog-variables-constantes",
    title: "3.1 Variables y constantes",
    subtitle: "Identificadores, modelo de memoria referencial, operadores de asignación combinada y convenciones de nomenclatura PEP 8.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Variables y Estado",
    timeEstimate: "20 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "snake_case", type: "teal" },
      { text: "Memoria RAM", type: "purple" }
    ],
    sections: [
      {
        id: "concepto-variable-asignacion",
        title: "1. ¿Qué es una Variable y cómo se Asigna?",
        shortTitle: "Variables y Asignación",
        icon: "fa-cube",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>variable</strong> es un nombre simbólico (identificador) que hace referencia a una ubicación de memoria donde reside un dato o valor determinado. En Python, las variables se crean dinámicamente en el mismo momento en que se les asigna un valor por primera vez utilizando el operador de asignación <code>=</code>.
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            edad = <span class="text-sky-300">20</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Se crea la variable 'edad' con el entero 20</span><br>
            edad = edad + <span class="text-sky-300">1</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Actualización: se evalúa la derecha (20+1) y se guarda 21</span><br>
            edad += <span class="text-sky-300">5</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Operador combinado equivalente a edad = edad + 5 (26)</span>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Animación: La Memoria del Programa",
            description: "Observa en tiempo real cómo el intérprete actualiza los valores de las variables en la memoria RAM durante la ejecución paso a paso:",
            widget: {
              file: "widgets/programacion/u03_memoria_programa.html",
              title: "La Memoria del Programa",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "constantes-convenciones-pep8",
        title: "2. Constantes y Nomenclatura Estándar (PEP 8)",
        shortTitle: "Constantes y PEP 8",
        icon: "fa-font",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            A nivel de intérprete, Python <strong>no posee una palabra clave 'const'</strong> que bloquee la reasignación de una variable. En su lugar, la comunidad adopta una convención estricta regulada por la guía de estilo oficial <strong>PEP 8</strong>:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">Variables: snake_case</h5>
              <p class="text-xs text-gray-300">
                Palabras en minúsculas separadas por guiones bajos. Deben ser descriptivas y evitar abreviaturas oscuras:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-emerald-300 mt-2">
                salario_base = 2500000<br>
                cantidad_estudiantes = 35
              </div>
            </div>
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-amber-400 font-bold text-xs uppercase mb-2">Constantes: MAYÚSCULAS</h5>
              <p class="text-xs text-gray-300">
                Todas las letras en mayúsculas sostenidas. Comunica al equipo que este valor <em>no debe ser alterado</em> durante el ciclo de vida del software:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-amber-300 mt-2">
                VELOCIDAD_LUZ = 299792458<br>
                PI = 3.1415926535
              </div>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "¿Cuál de los siguientes nombres de variable sigue rigurosamente la convención de estilo PEP 8 para variables ordinarias en Python?",
            options: [
              "tasaInteresAnual (CamelCase)",
              "tasa_interes_anual (snake_case)",
              "TASA_INTERES_ANUAL (Mayúsculas)",
              "Tasa-Interes-Anual (Kebab-case con guiones medios)"
            ],
            correct: 1,
            explanation: "PEP 8 especifica que los nombres de variables y funciones deben escribirse en minúsculas con palabras separadas por guiones bajos (snake_case)."
          }
        ]
      }
    ]
  },

  "prog-tipos-conversiones": {
    id: "prog-tipos-conversiones",
    title: "3.2 Tipos de datos y conversiones",
    subtitle: "Tipado dinámico y fuerte, tipos primitivos (int, float, str, bool), función type() y conversión de tipos (casting).",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Tipos de Datos",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Tipado Fuerte", type: "teal" },
      { text: "Casting", type: "blue" }
    ],
    sections: [
      {
        id: "tipos-primitivos-dinamico",
        title: "1. Tipos Primitivos y Tipado Dinámico Fuerte",
        shortTitle: "Tipos Primitivos",
        icon: "fa-shapes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Python es de <strong>tipado dinámico</strong> (no necesitas declarar el tipo de una variable explícitamente; el intérprete lo infiere en tiempo de ejecución) y de <strong>tipado fuerte</strong> (no permite operaciones entre tipos incompatibles sin una conversión explícita).
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Tipo</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Clase Python</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Descripción</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplos</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">Entero</td>
                  <td class="py-2.5 px-3 font-mono">int</td>
                  <td class="py-2.5 px-3">Números sin parte fraccionaria de precisión arbitraria.</td>
                  <td class="py-2.5 px-3 font-mono">0, 42, -1500</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Flotante</td>
                  <td class="py-2.5 px-3 font-mono">float</td>
                  <td class="py-2.5 px-3">Números reales con punto decimal (IEEE 754 doble precisión).</td>
                  <td class="py-2.5 px-3 font-mono">3.1416, -0.005, 2.5e-3</td>
                </tr>
                <tr>
                  <td class="font-bold text-emerald-400 py-2.5 px-3">Cadena</td>
                  <td class="py-2.5 px-3 font-mono">str</td>
                  <td class="py-2.5 px-3">Secuencias inmutables de caracteres Unicode.</td>
                  <td class="py-2.5 px-3 font-mono">"Python", 'Hola'</td>
                </tr>
                <tr>
                  <td class="font-bold text-amber-400 py-2.5 px-3">Booleano</td>
                  <td class="py-2.5 px-3 font-mono">bool</td>
                  <td class="py-2.5 px-3">Valores lógicos de verdad (subtipo de int: 1 y 0).</td>
                  <td class="py-2.5 px-3 font-mono">True, False</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Explorador Interactivo de Tipos de Datos",
            description: "Introduce cualquier valor numérico, textual o booleano y observa su tipo nativo y el comportamiento de las funciones de conversión int(), float(), str() y bool():",
            widget: {
              file: "widgets/programacion/u03_explorador_tipos.html",
              title: "Explorador Interactivo de Tipos de Datos",
              height: "480px"
            }
          }
        ]
      },
      {
        id: "conversion-tipos-casting",
        title: "2. Conversión Explícita de Tipos (Casting)",
        shortTitle: "Casting de Tipos",
        icon: "fa-exchange-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Dado que la función <code>input()</code> siempre retorna una cadena de texto (<code>str</code>), es indispensable convertir los datos recibidos antes de realizar cálculos matemáticos:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            edad_texto = <span class="text-purple-400">input</span>(<span class="text-emerald-300">"Ingresa tu edad: "</span>) &nbsp;<span class="text-gray-500"># Ej: "19" (str)</span><br>
            edad_numero = <span class="text-sky-300">int</span>(edad_texto) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Convierte "19" ➔ 19 (int)</span><br>
            proximo_ano = edad_numero + <span class="text-sky-300">1</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Operación válida: 20</span>
          </div>
        `,
        quiz: [
          {
            question: "¿Qué valor retorna la expresión bool('False') en Python?",
            options: [
              "False, porque el contenido es la palabra False.",
              "True, porque cualquier cadena no vacía tiene valor de verdad verdadero (truthy).",
              "ValueError, porque no se puede convertir texto a booleano.",
              "None, por ser una contradicción de tipos."
            ],
            correct: 1,
            explanation: "En Python, la regla de conversión a bool() es: una cadena vacía '' es False; cualquier cadena con al menos un carácter (incluso 'False' o '0') es evaluada como True."
          }
        ]
      }
    ]
  },

  "prog-operadores-relacionales-logicos": {
    id: "prog-operadores-relacionales-logicos",
    title: "3.3 Operadores relacionales y lógicos",
    subtitle: "Comparación de igualdad y orden, operadores booleanos (and, or, not), evaluación en cortocircuito y tablas de verdad.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Lógica Computacional",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Booleanos", type: "teal" },
      { text: "Tablas de Verdad", type: "purple" }
    ],
    sections: [
      {
        id: "operadores-relacionales",
        title: "1. Operadores Relacionales de Comparación",
        shortTitle: "Operadores Relacionales",
        icon: "fa-equals",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Los <strong>operadores relacionales</strong> comparan dos operandos y retornan invariablemente un valor booleano (<code>True</code> o <code>False</code>):
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">==</strong> : Igual a</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">!=</strong> : Distinto de</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">&gt;</strong> : Mayor que</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">&lt;</strong> : Menor que</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">&gt;=</strong> : Mayor o igual</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">&lt;=</strong> : Menor o igual</div>
          </div>
          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-3 text-xs text-gray-300">
            <strong class="text-amber-400">⚠️ Error Clásico de Principiante:</strong> No confundas el operador de <em>asignación</em> (<code>=</code>) con el operador de <em>comparación de igualdad</em> (<code>==</code>).
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Expresiones Booleanas y Tablas de Verdad",
            description: "Modifica los operandos numéricos y los operadores relacionales para observar la evaluación en tiempo real y la tabla de verdad lógica:",
            widget: {
              file: "widgets/programacion/u03_simulador_booleanos.html",
              title: "Simulador de Expresiones Booleanas",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "operadores-logicos-cortocircuito",
        title: "2. Operadores Lógicos y Evaluación en Cortocircuito",
        shortTitle: "Operadores Lógicos",
        icon: "fa-project-diagram",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Los operadores lógicos permiten componer condiciones complejas:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>and:</strong> Retorna <code>True</code> únicamente si <em>ambas</em> condiciones son verdaderas. Si la primera es falsa, no evalúa la segunda (cortocircuito).</li>
            <li><strong>or:</strong> Retorna <code>True</code> si <em>al menos una</em> condición es verdadera. Si la primera es verdadera, no evalúa la segunda (cortocircuito).</li>
            <li><strong>not:</strong> Invierte el valor de verdad (<code>not True ➔ False</code>; <code>not False ➔ True</code>).</li>
          </ul>
        `,
        quiz: [
          {
            question: "Dadas las variables a = 10 y b = 5, ¿cuál es el resultado de la expresión: (a > 5) and (b == 10 or a != b)?",
            options: [
              "False",
              "True",
              "TypeError",
              "None"
            ],
            correct: 1,
            explanation: "(a > 5) es True. Dentro del paréntesis: (b == 10) es False, pero (a != b) es True (10 != 5), haciendo el 'or' True. Finalmente True and True resulta en True."
          }
        ]
      }
    ]
  },

  "prog-palabras-reservadas": {
    id: "prog-palabras-reservadas",
    title: "3.4 Palabras reservadas",
    subtitle: "Léxico del lenguaje, catálogo de keywords de Python, reglas sintácticas para identificadores y prevención de colisiones.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Léxico y Sintaxis",
    timeEstimate: "20 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Keywords", type: "purple" },
      { text: "Sintaxis", type: "teal" }
    ],
    sections: [
      {
        id: "concepto-keywords-python",
        title: "1. Concepto y Catálogo de Palabras Reservadas",
        shortTitle: "Palabras Reservadas",
        icon: "fa-key",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Las <strong>palabras reservadas</strong> (<em>keywords</em>) son identificadores especiales que el analizador léxico de Python reserva exclusivamente para definir la estructura gramatical del lenguaje. No pueden ser utilizadas como nombres de variables, funciones ni clases.
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-sky-300 mb-4">
            import keyword<br>
            print(keyword.kwlist)  # Muestra las 35 palabras reservadas oficiales
          </div>
          <p class="text-xs text-gray-400 mb-4">
            Ejemplos clave: <code>if, elif, else, for, while, break, continue, def, return, class, import, from, try, except, finally, with, as, lambda, True, False, None</code>.
          </p>
        `,
        interactive: [
          {
            category: "practica",
            title: "Clasificador Interactivo de Identificadores y Palabras Reservadas",
            description: "Pon a prueba tu criterio léxico clasificando términos en: Palabra reservada, Identificador válido o Identificador inválido:",
            widget: {
              file: "widgets/programacion/u03_clasificador_palabras.html",
              title: "Clasificador de Palabras Reservadas",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "reglas-identificadores-validos",
        title: "2. Reglas Estrictas para Identificadores Válidos",
        shortTitle: "Reglas de Identificadores",
        icon: "fa-check",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para que un nombre de variable sea sintácticamente válido en Python, debe cumplir rigurosamente con tres reglas universales:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>Caracteres permitidos:</strong> Solo letras (a-z, A-Z), dígitos (0-9) y el guión bajo (<code>_</code>). No se admiten espacios ni símbolos especiales ($, @, %, etc.).</li>
            <li><strong>Inicio:</strong> Debe comenzar con una letra o un guión bajo. <em>Jamás puede iniciar con un número</em> (ej. <code>1er_valor</code> es inválido; <code>valor_1</code> es válido).</li>
            <li><strong>Case-Sensitive:</strong> Python distingue mayúsculas de minúsculas (<code>total</code>, <code>Total</code> y <code>TOTAL</code> son tres variables completamente distintas).</li>
          </ul>
        `,
        quiz: [
          {
            question: "¿Cuál de los siguientes identificadores provoca un SyntaxError inmediato en Python?",
            options: [
              "_contador_privado",
              "valor_total_2024",
              "3er_semestre",
              "PrecioConDescuento"
            ],
            correct: 2,
            explanation: "3er_semestre es inválido porque comienza con un dígito numérico ('3'), lo cual viola la regla léxica de identificadores de Python."
          }
        ]
      }
    ]
  },

  "prog-listas": {
    id: "prog-listas",
    title: "3.5 Listas e indexación en Python",
    subtitle: "Colecciones mutables y ordenadas, listas heterogéneas, acceso mediante índices positivos y negativos, operaciones fundamentales y métodos.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Estructuras de Datos Lineales",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Listas Mutables", type: "teal" },
      { text: "Simulador RAM", type: "purple" }
    ],
    sections: [
      {
        id: "concepto-listas-creacion-mutabilidad",
        title: "1. ¿Qué es una Lista? Creación, Mutabilidad y Tipos Mixtos",
        shortTitle: "Creación y Mutabilidad",
        icon: "fa-list-ol",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>lista</strong> es una secuencia ordenada y <strong>mutable</strong> de elementos encerrados entre corchetes <code>[ ]</code> y separados por comas. A diferencia de variables simples que guardan un solo dato, las listas permiten agrupar colecciones completas bajo un único identificador.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">Creación de Listas</h5>
              <div class="bg-[#0b0e14] p-3 rounded font-mono text-xs text-gray-200 space-y-1">
                <span class="text-gray-500"># Lista vacía (dos formas válidas)</span><br>
                vacia_1 = []<br>
                vacia_2 = <span class="text-purple-400">list</span>()<br>
                <span class="text-gray-500"># Lista homogénea numérica</span><br>
                primos = [<span class="text-sky-300">2</span>, <span class="text-sky-300">3</span>, <span class="text-sky-300">5</span>, <span class="text-sky-300">7</span>, <span class="text-sky-300">11</span>]
              </div>
            </div>
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-emerald-400 font-bold text-xs uppercase mb-2">Listas Heterogéneas y Anidadas</h5>
              <div class="bg-[#0b0e14] p-3 rounded font-mono text-xs text-gray-200 space-y-1">
                <span class="text-gray-500"># Múltiples tipos en una misma lista</span><br>
                perfil = [<span class="text-emerald-300">"Ana"</span>, <span class="text-sky-300">20</span>, <span class="text-amber-300">4.75</span>, <span class="text-purple-400">True</span>]<br>
                <span class="text-gray-500"># Listas anidadas (matrices / 2D)</span><br>
                matriz = [[<span class="text-sky-300">1</span>, <span class="text-sky-300">0</span>], [<span class="text-sky-300">0</span>, <span class="text-sky-300">1</span>]]
              </div>
            </div>
          </div>
          <h4 class="text-sm font-bold text-white mt-6 mb-2">Acceso por Índices Positivos y Negativos</h4>
          <p class="text-xs text-gray-300 leading-relaxed mb-3">
            Cada elemento tiene una posición fija. Python ofrece <strong>doble sistema de indexación</strong>: índices positivos de izquierda a derecha (inician en <code>0</code> hasta <code>n - 1</code>) e índices negativos de derecha a izquierda (inician en <code>-1</code> para el último elemento).
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            frutas = [<span class="text-emerald-300">"manzana"</span>, <span class="text-emerald-300">"pera"</span>, <span class="text-emerald-300">"uva"</span>, <span class="text-emerald-300">"mango"</span>, <span class="text-emerald-300">"banano"</span>]<br>
            primero = frutas[<span class="text-sky-300">0</span>] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># "manzana" (índice positivo inicial)</span><br>
            ultimo = frutas[-<span class="text-sky-300">1</span>] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># "banano" (índice negativo: último)</span><br>
            penultimo = frutas[-<span class="text-sky-300">2</span>] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># "mango"</span><br>
            <span class="text-gray-500"># Modificación in-place (mutabilidad)</span><br>
            frutas[<span class="text-sky-300">1</span>] = <span class="text-emerald-300">"fresa"</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Ahora la lista es: ["manzana", "fresa", "uva", "mango", "banano"]</span><br>
            <span class="text-purple-400">del</span> frutas[<span class="text-sky-300">0</span>] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Elimina el primer elemento: ["fresa", "uva", "mango", "banano"]</span>
          </div>
          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-3 text-xs text-gray-300">
            <strong class="text-amber-400">⚠️ Error Clásico:</strong> Si accedes a un índice mayor o igual a <code>len(lista)</code>, Python lanzará una excepción <code class="text-rose-400">IndexError: list index out of range</code>.
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Listas en Memoria RAM",
            description: "Inspecciona cómo cambian los índices, los tipos de datos y la memoria RAM al ejecutar métodos sobre listas paso a paso:",
            widget: {
              file: "widgets/programacion/u03_simulador_listas.html",
              title: "Simulador Interactivo de Listas",
              height: "540px"
            }
          }
        ]
      },
      {
        id: "operaciones-metodos-listas",
        title: "2. Operaciones Fundamentales, Métodos y Funciones de Agregación",
        shortTitle: "Operaciones y Métodos",
        icon: "fa-cogs",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Python provee un nutrido conjunto de operadores y funciones integradas diseñadas específicamente para el trabajo de ingeniería con secuencias:
          </p>
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-sky-400 font-bold">Operación / Función</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Descripción</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Resultado</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">len(lista)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Retorna la cantidad total de elementos.</td>
                  <td class="py-2.5 px-3 text-sky-300">len([10, 20, 30])</td>
                  <td class="text-emerald-400 py-2.5 px-3">3</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">lista1 + lista2</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Concatenación: une dos listas en una nueva.</td>
                  <td class="py-2.5 px-3 text-sky-300">[1, 2] + [3, 4]</td>
                  <td class="text-emerald-400 py-2.5 px-3">[1, 2, 3, 4]</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">lista * n</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Repetición: replica la lista n veces.</td>
                  <td class="py-2.5 px-3 text-sky-300">[0] * 4</td>
                  <td class="text-emerald-400 py-2.5 px-3">[0, 0, 0, 0]</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">elem in lista</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Pertenencia: evalúa si el elemento está presente.</td>
                  <td class="py-2.5 px-3 text-sky-300">5 in [1, 3, 5]</td>
                  <td class="text-emerald-400 py-2.5 px-3">True</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">elem not in lista</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Pertenencia negativa: True si el elemento no existe.</td>
                  <td class="py-2.5 px-3 text-sky-300">9 not in [1, 3, 5]</td>
                  <td class="text-emerald-400 py-2.5 px-3">True</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">min(l) / max(l)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Calcula el valor mínimo o máximo numérico.</td>
                  <td class="py-2.5 px-3 text-sky-300">max([8, 15, 3])</td>
                  <td class="text-emerald-400 py-2.5 px-3">15</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">sum(l)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Suma todos los elementos numéricos.</td>
                  <td class="py-2.5 px-3 text-sky-300">sum([10, 20, 30])</td>
                  <td class="text-emerald-400 py-2.5 px-3">60</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">sorted(l)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Retorna una NUEVA lista ordenada (no muta).</td>
                  <td class="py-2.5 px-3 text-sky-300">sorted([4, 1, 3])</td>
                  <td class="text-emerald-400 py-2.5 px-3">[1, 3, 4]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 class="text-sm font-bold text-white mt-6 mb-2">Arsenal de Métodos de Lista en Python</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.append(x)</strong>: Agrega el elemento <code>x</code> al final de la lista in-place.
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.extend(iter)</strong>: Desempaqueta y añade los elementos del iterable al final.
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.insert(i, x)</strong>: Inserta <code>x</code> en el índice <code>i</code>, corriendo los demás a la derecha.
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.remove(x)</strong>: Busca y elimina la PRIMERA aparición del valor <code>x</code>.
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.pop([i])</strong>: Extrae y retorna el elemento en el índice <code>i</code> (por defecto el último).
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.clear()</strong>: Elimina todos los elementos, dejando la lista vacía <code>[]</code>.
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.index(x)</strong>: Retorna el índice de la primera coincidencia del valor <code>x</code>.
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.count(x)</strong>: Cuenta cuántas veces se repite el elemento <code>x</code> en la lista.
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.sort()</strong>: Ordena in-place la lista (modifica la lista original y retorna <code>None</code>).
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.reverse()</strong>: Invierte in-place el orden de los elementos actuales de la lista.
            </div>
            <div class="bg-[#141923] p-3 rounded-lg border border-gray-800">
              <strong class="text-sky-400 font-mono">l.copy()</strong>: Crea una copia superficial (shallow copy) independiente en memoria.
            </div>
          </div>
        `,
        quiz: [
          {
            question: "Dada la lista valores = [10, 20, 30], si ejecutamos valores.append([40, 50]), ¿cuál será el resultado de len(valores)?",
            options: [
              "5, porque se agregaron dos nuevos enteros.",
              "4, porque la sublista [40, 50] se agrega como un único elemento compuesto en el índice 3.",
              "TypeError por intentar meter una lista dentro de otra.",
              "3, porque append() solo acepta números primitivos."
            ],
            correct: 1,
            explanation: "append() agrega el objeto recibido como un único elemento al final. Para fusionar los elementos de [40, 50] individualmente se debe utilizar el método extend([40, 50])."
          }
        ]
      }
    ]
  },

  "prog-slicing-visual": {
    id: "prog-slicing-visual",
    title: "3.6 Sublistas y Slicing visual",
    subtitle: "Extracción y rebanado con lista[inicio:fin:paso], intervalos semiabiertos, índices positivos/negativos e inversión con paso negativo.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Slicing y Secuencias",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Slicing [::]", type: "teal" },
      { text: "Simulador Visual", type: "amber" }
    ],
    sections: [
      {
        id: "anatomia-slicing-python",
        title: "1. Anatomía y Reglas del Slicing: lista[inicio:fin]",
        shortTitle: "Reglas de Slicing",
        icon: "fa-cut",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>slicing</strong> (rebanado) es una técnica idiomática de Python para extraer una porción contigua de una secuencia produciendo una nueva lista independiente. La sintaxis universal sigue el patrón:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-sky-500/30 font-mono text-xs text-sky-300 text-center mb-4">
            secuencia[ <span class="text-emerald-300">inicio</span> : <span class="text-amber-300">fin</span> : <span class="text-purple-300">paso</span> ]
          </div>
          <p class="text-xs text-gray-300 leading-relaxed mb-4">
            La regla de oro del slicing es el <strong>intervalo semiabierto</strong>: <code>[inicio, fin)</code>. Es decir, incluye el elemento en la posición <code>inicio</code>, pero <em>excluye</em> el elemento en la posición <code>fin</code>. La cantidad de elementos resultantes es exactamente <code>fin - inicio</code> (cuando paso es 1).
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono my-4">
            <div class="bg-[#141923] p-3 rounded border border-gray-800">
              <strong class="text-sky-400">lista[inicio:fin]</strong>
              <div class="text-gray-300 text-[11px] mt-1 font-sans">Desde 'inicio' hasta 'fin - 1'.</div>
            </div>
            <div class="bg-[#141923] p-3 rounded border border-gray-800">
              <strong class="text-emerald-400">lista[:fin]</strong>
              <div class="text-gray-300 text-[11px] mt-1 font-sans">Omite inicio: toma desde el índice 0 hasta 'fin - 1'.</div>
            </div>
            <div class="bg-[#141923] p-3 rounded border border-gray-800">
              <strong class="text-amber-400">lista[inicio:]</strong>
              <div class="text-gray-300 text-[11px] mt-1 font-sans">Omite fin: toma desde 'inicio' hasta el último elemento.</div>
            </div>
            <div class="bg-[#141923] p-3 rounded border border-gray-800">
              <strong class="text-purple-400">lista[::paso]</strong>
              <div class="text-gray-300 text-[11px] mt-1 font-sans">Toda la lista dando saltos de tamaño 'paso' (ej: ::2 pares).</div>
            </div>
            <div class="bg-[#141923] p-3 rounded border border-gray-800">
              <strong class="text-rose-400">lista[::-1]</strong>
              <div class="text-gray-300 text-[11px] mt-1 font-sans">Paso negativo -1: invierte completamente la secuencia.</div>
            </div>
            <div class="bg-[#141923] p-3 rounded border border-gray-800">
              <strong class="text-teal-400">lista[:]</strong>
              <div class="text-gray-300 text-[11px] mt-1 font-sans">Clona la lista completa (copia superficial).</div>
            </div>
          </div>
        `
      },
      {
        id: "experimentos-guiados-frutas",
        title: "2. Experimentos con frutas = ['manzana', 'pera', 'uva', 'mango', 'banano']",
        shortTitle: "Experimentos de Frutas",
        icon: "fa-apple-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Analicemos paso a paso cada uno de los experimentos clásicos de corte sobre una lista de 5 frutas:
          </p>
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl font-mono text-xs">
            <table class="w-full text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-sky-400 font-bold">Expresión</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Índices Involucrados</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Tipo Retorno</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Resultado Evaluado</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="text-sky-300 py-2.5 px-3">frutas[0]</td>
                  <td class="py-2.5 px-3 text-gray-300">Posición física 0</td>
                  <td class="py-2.5 px-3 text-amber-300 font-sans">str (Elemento)</td>
                  <td class="text-emerald-400 py-2.5 px-3">"manzana"</td>
                </tr>
                <tr>
                  <td class="text-sky-300 py-2.5 px-3">frutas[-1]</td>
                  <td class="py-2.5 px-3 text-gray-300">Posición física 4</td>
                  <td class="py-2.5 px-3 text-amber-300 font-sans">str (Elemento)</td>
                  <td class="text-emerald-400 py-2.5 px-3">"banano"</td>
                </tr>
                <tr>
                  <td class="text-sky-300 py-2.5 px-3">frutas[1:4]</td>
                  <td class="py-2.5 px-3 text-gray-300">Índices 1, 2, 3 (excluye el 4)</td>
                  <td class="py-2.5 px-3 text-purple-300 font-sans">list (Sublista)</td>
                  <td class="text-emerald-400 py-2.5 px-3">["pera", "uva", "mango"]</td>
                </tr>
                <tr>
                  <td class="text-sky-300 py-2.5 px-3">frutas[:3]</td>
                  <td class="py-2.5 px-3 text-gray-300">Índices 0, 1, 2 (primeras 3)</td>
                  <td class="py-2.5 px-3 text-purple-300 font-sans">list (Sublista)</td>
                  <td class="text-emerald-400 py-2.5 px-3">["manzana", "pera", "uva"]</td>
                </tr>
                <tr>
                  <td class="text-sky-300 py-2.5 px-3">frutas[2:]</td>
                  <td class="py-2.5 px-3 text-gray-300">Índices 2, 3, 4 (hasta el final)</td>
                  <td class="py-2.5 px-3 text-purple-300 font-sans">list (Sublista)</td>
                  <td class="text-emerald-400 py-2.5 px-3">["uva", "mango", "banano"]</td>
                </tr>
                <tr>
                  <td class="text-sky-300 py-2.5 px-3">frutas[::2]</td>
                  <td class="py-2.5 px-3 text-gray-300">Índices 0, 2, 4 (paso de 2 en 2)</td>
                  <td class="py-2.5 px-3 text-purple-300 font-sans">list (Sublista)</td>
                  <td class="text-emerald-400 py-2.5 px-3">["manzana", "uva", "banano"]</td>
                </tr>
                <tr>
                  <td class="text-sky-300 py-2.5 px-3">frutas[::-1]</td>
                  <td class="py-2.5 px-3 text-gray-300">Índices 4, 3, 2, 1, 0 (orden inverso)</td>
                  <td class="py-2.5 px-3 text-purple-300 font-sans">list (Sublista)</td>
                  <td class="text-emerald-400 py-2.5 px-3">["banano", "mango", "uva", "pera", "manzana"]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
            <h5 class="text-blue-400 font-bold text-xs uppercase mb-2">Relación Metodológica de Slicing</h5>
            <p class="text-xs text-gray-300 font-mono">
              Lista original ➔ Índices evaluados ➔ Elementos seleccionados ➔ Resultado
            </p>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Sublistas y Slicing Visual",
            description: "Interactúa con la lista de frutas, cambia inicio, fin y paso, y observa cómo se iluminan los índices positivos/negativos en vivo:",
            widget: {
              file: "widgets/programacion/u03_slicing_visual.html",
              title: "Slicing Visual en Python",
              height: "560px"
            }
          }
        ],
        quiz: [
          {
            question: "Dada la lista frutas = ['manzana', 'pera', 'uva', 'mango', 'banano'], ¿qué retorna la expresión frutas[-3:-1]?",
            options: [
              "['uva', 'mango']",
              "['uva', 'mango', 'banano']",
              "['pera', 'uva']",
              "[] por tener signos negativos"
            ],
            correct: 0,
            explanation: "El índice -3 corresponde a 'uva' y el índice -1 corresponde a 'banano'. Por la regla semiabierta, el elemento en -1 se excluye, dejando ['uva', 'mango']."
          }
        ]
      }
    ]
  },

  "prog-diccionarios": {
    id: "prog-diccionarios",
    title: "3.7 Diccionarios y estructuras clave-valor",
    subtitle: "Mapeos asociativos CLAVE ➔ VALOR, inmutabilidad de claves, métodos nativos, diccionarios anidados y listas de diccionarios.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Media",
    category: "Colecciones Asociativas",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Clave -> Valor", type: "purple" },
      { text: "Hash Map", type: "teal" }
    ],
    sections: [
      {
        id: "concepto-diccionarios-clave-valor",
        title: "1. ¿Qué es un Diccionario? La Relación CLAVE ➔ VALOR",
        shortTitle: "Clave ➔ Valor",
        icon: "fa-book-atlas",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Un <strong>diccionario</strong> en Python es una colección mutable y no indexada numéricamente que almacena información bajo el paradigma <strong>CLAVE ➔ VALOR</strong> (asociativo, implementado mediante tablas hash de tiempo de acceso promedio O(1)).
          </p>
          <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4 my-4">
            <h5 class="text-purple-400 font-bold text-xs uppercase mb-2 flex items-center gap-2">
              <i class="fas fa-key"></i> Reglas de Oro de los Diccionarios
            </h5>
            <ul class="text-xs text-gray-300 space-y-1.5 list-disc pl-5">
              <li><strong>Claves Únicas:</strong> No pueden existir dos claves idénticas dentro de un mismo diccionario. Si se repite, la última sobrescribe a la primera.</li>
              <li><strong>Claves Inmutables:</strong> Las claves deben ser tipos no modificables (<code>str</code>, <code>int</code>, <code>float</code>, <code>tuple</code>). No se permiten listas ni otros diccionarios como claves.</li>
              <li><strong>Valores Flexibles:</strong> Los valores asociados pueden ser de <em>cualquier tipo</em>: números, listas, booleanos o incluso otros diccionarios anidados.</li>
            </ul>
          </div>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-gray-500"># Ejemplo canónico: datos de un estudiante universitario</span><br>
            estudiante = {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-sky-300">"nombre"</span>: <span class="text-emerald-300">"Ana"</span>,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-sky-300">"edad"</span>: <span class="text-amber-300">20</span>,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-sky-300">"programa"</span>: <span class="text-emerald-300">"Ingeniería"</span><br>
            }
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Visual de Diccionarios (Clave ➔ Valor)",
            description: "Visualiza la relación directa entre claves y valores, prueba accesos seguros con get(), agrega campos y navega estructuras anidadas:",
            widget: {
              file: "widgets/programacion/u03_simulador_diccionarios.html",
              title: "Simulador Visual de Diccionarios",
              height: "540px"
            }
          }
        ]
      },
      {
        id: "operaciones-metodos-diccionarios",
        title: "2. Operaciones, Métodos Esenciales y Recorridos con for",
        shortTitle: "Métodos y Recorridos",
        icon: "fa-laptop-code",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Manipular un diccionario requiere conocer sus métodos de acceso, modificación, adición y eliminación:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4 space-y-1">
            <span class="text-gray-500"># 1. Acceso con corchetes [] vs .get()</span><br>
            nombre = estudiante[<span class="text-sky-300">"nombre"</span>] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># "Ana" (lanza KeyError si no existe)</span><br>
            semestre = estudiante.<span class="text-purple-400">get</span>(<span class="text-sky-300">"semestre"</span>, <span class="text-amber-300">1</span>) &nbsp;<span class="text-gray-500"># 1 (valor por defecto seguro, no lanza error)</span><br><br>
            <span class="text-gray-500"># 2. Modificación e Incorporación</span><br>
            estudiante[<span class="text-sky-300">"edad"</span>] = <span class="text-amber-300">21</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Modifica clave existente</span><br>
            estudiante[<span class="text-sky-300">"semestre"</span>] = <span class="text-amber-300">4</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Añade una nueva clave automáticamente</span><br><br>
            <span class="text-gray-500"># 3. Eliminación con del, .pop() y .popitem()</span><br>
            <span class="text-purple-400">del</span> estudiante[<span class="text-sky-300">"programa"</span>] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Elimina la clave 'programa'</span><br>
            valor_removido = estudiante.<span class="text-purple-400">pop</span>(<span class="text-sky-300">"semestre"</span>) &nbsp;<span class="text-gray-500"># Elimina y retorna 4</span><br>
            ultimo_par = estudiante.<span class="text-purple-400">popitem</span>() &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Elimina y retorna último par (clave, valor)</span><br><br>
            <span class="text-gray-500"># 4. Métodos update(), setdefault(), clear() y copy()</span><br>
            estudiante.<span class="text-purple-400">update</span>({<span class="text-sky-300">"ciudad"</span>: <span class="text-emerald-300">"Pereira"</span>, <span class="text-sky-300">"activo"</span>: <span class="text-purple-400">True</span>})<br>
            estudiante.<span class="text-purple-400">setdefault</span>(<span class="text-sky-300">"promedio"</span>, <span class="text-amber-300">4.5</span>) <span class="text-gray-500"># Inserta solo si no existe</span>
          </div>

          <h4 class="text-sm font-bold text-white mt-6 mb-2">Recorrido de Diccionarios con for</h4>
          <p class="text-xs text-gray-300 leading-relaxed mb-3">
            Podemos recorrer las claves con <code>.keys()</code>, los valores con <code>.values()</code>, o ambos simultáneamente desempaquetando con <code>.items()</code>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-purple-400">for</span> clave, valor <span class="text-purple-400">in</span> estudiante.items():<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">print</span>(<span class="text-emerald-300">f"{clave} ➔ {valor}"</span>)
          </div>

          <h4 class="text-sm font-bold text-white mt-6 mb-2">Estructuras Compuestas: Listas de Diccionarios y Diccionarios Anidados</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="bg-[#141923] p-4 rounded-xl border border-gray-800">
              <h5 class="text-sky-400 font-bold font-mono mb-2">Lista de Diccionarios (Registros)</h5>
              <div class="bg-[#0b0e14] p-2.5 rounded font-mono text-[11px] text-gray-300">
                estudiantes = [<br>
                &nbsp;&nbsp;{"nombre": "Ana", "nota": 4.5},<br>
                &nbsp;&nbsp;{"nombre": "Carlos", "nota": 3.8}<br>
                ]<br>
                print(estudiantes[0]["nombre"]) # "Ana"
              </div>
            </div>
            <div class="bg-[#141923] p-4 rounded-xl border border-gray-800">
              <h5 class="text-purple-400 font-bold font-mono mb-2">Diccionario Anidado (Jerarquías)</h5>
              <div class="bg-[#0b0e14] p-2.5 rounded font-mono text-[11px] text-gray-300">
                universidad = {<br>
                &nbsp;&nbsp;"facultad": "Ingenierías",<br>
                &nbsp;&nbsp;"director": {"nombre": "Leo", "tel": 300123}<br>
                }<br>
                print(universidad["director"]["nombre"])
              </div>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "¿Qué ocurre si intentamos acceder a una clave inexistente en un diccionario usando d['clave_rara'] frente a d.get('clave_rara')?",
            options: [
              "Ambos lanzan un KeyError inmediato.",
              "d['clave_rara'] lanza KeyError, mientras que d.get('clave_rara') retorna None de forma segura.",
              "Ambos retornan None de forma silenciosa.",
              "d.get() crea la clave automáticamente con valor 0."
            ],
            correct: 1,
            explanation: "El acceso con corchetes es estricto y arroja KeyError si la clave no existe; .get() es defensivo y retorna None (o el valor default especificado) sin abortar la ejecución."
          }
        ]
      }
    ]
  },

  "prog-cadenas-strings": {
    id: "prog-cadenas-strings",
    title: "3.8 Cadenas de caracteres y métodos de texto",
    subtitle: "Inmutabilidad de cadenas de texto Unicode, subcadenas, slicing textual, operaciones de secuencia y arsenal completo de métodos nativos.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Manipulación de Cadenas",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "str Inmutable", type: "teal" },
      { text: "Laboratorio Strings", type: "blue" }
    ],
    sections: [
      {
        id: "cadenas-inmutabilidad-indices",
        title: "1. Cadenas como Secuencias Inmutables, Índices y Slicing",
        shortTitle: "Inmutabilidad y Slicing",
        icon: "fa-font",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En Python, una <strong>cadena de caracteres</strong> (<code>str</code>) es una secuencia ordenada e <strong>inmutable</strong> de caracteres Unicode. La inmutabilidad significa que una vez creada, no es posible alterar ninguno de sus caracteres in-place:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            texto = <span class="text-emerald-300">"Python"</span><br>
            <span class="text-gray-500"># texto[0] = "J"  ➔ Provoca TypeError: 'str' object does not support item assignment</span><br>
            <span class="text-gray-500"># Para transformar, se crea una NUEVA cadena mediante concatenación o métodos:</span><br>
            nuevo_texto = <span class="text-emerald-300">"J"</span> + texto[<span class="text-sky-300">1</span>:] &nbsp;<span class="text-gray-500"># "Jython"</span>
          </div>
          <p class="text-xs text-gray-300 leading-relaxed mb-4">
            Al igual que las listas, las cadenas admiten índices positivos (<code>0 a len-1</code>), índices negativos (<code>-1 a -len</code>) y slicing completo:
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-3 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800">
              <strong class="text-sky-400">"Python"[0]</strong>
              <div class="text-emerald-300 text-[11px] mt-1">'P'</div>
            </div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800">
              <strong class="text-sky-400">"Python"[-1]</strong>
              <div class="text-emerald-300 text-[11px] mt-1">'n'</div>
            </div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800">
              <strong class="text-sky-400">"Python"[:2]</strong>
              <div class="text-emerald-300 text-[11px] mt-1">'Py'</div>
            </div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800">
              <strong class="text-rose-400">"Python"[::-1]</strong>
              <div class="text-emerald-300 text-[11px] mt-1">'nohtyP'</div>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Laboratorio Visual de Cadenas (Strings)",
            description: "Escribe cualquier frase, inspecciona sus caracteres con índices duales, experimenta con slicing y ejecuta métodos con visualización inmediata:",
            widget: {
              file: "widgets/programacion/u03_simulador_strings.html",
              title: "Laboratorio Visual de Strings",
              height: "540px"
            }
          }
        ]
      },
      {
        id: "metodos-manipulacion-strings",
        title: "2. Arsenal de Métodos de Manipulación, Búsqueda y Limpieza",
        shortTitle: "Métodos de Strings",
        icon: "fa-spell-check",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El tipo <code>str</code> dispone de métodos integrados de alta velocidad para limpiar, transformar y analizar texto:
          </p>
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl font-mono text-xs">
            <table class="w-full text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-sky-400 font-bold">Método</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Descripción</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Resultado</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">upper() / lower()</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Convierte a mayúsculas o minúsculas completas.</td>
                  <td class="py-2.5 px-3">"py".upper()</td>
                  <td class="text-emerald-400 py-2.5 px-3">"PY"</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">capitalize()</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Convierte solo la primera letra a mayúscula.</td>
                  <td class="py-2.5 px-3">"python".capitalize()</td>
                  <td class="text-emerald-400 py-2.5 px-3">"Python"</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">title()</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Mayúscula inicial para cada palabra.</td>
                  <td class="py-2.5 px-3">"leo gaviria".title()</td>
                  <td class="text-emerald-400 py-2.5 px-3">"Leo Gaviria"</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">strip()</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Elimina espacios en blanco y saltos en los extremos.</td>
                  <td class="py-2.5 px-3">"  hola  ".strip()</td>
                  <td class="text-emerald-400 py-2.5 px-3">"hola"</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">replace(old, new)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Reemplaza todas las apariciones de una subcadena.</td>
                  <td class="py-2.5 px-3">"2025".replace("5", "6")</td>
                  <td class="text-emerald-400 py-2.5 px-3">"2026"</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">split(delimitador)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Divide la cadena retornando una lista de subcadenas.</td>
                  <td class="py-2.5 px-3">"a,b,c".split(",")</td>
                  <td class="text-emerald-400 py-2.5 px-3">["a", "b", "c"]</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">sep.join(iterable)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Une una lista de cadenas intercalando el separador.</td>
                  <td class="py-2.5 px-3">"-".join(["A", "B"])</td>
                  <td class="text-emerald-400 py-2.5 px-3">"A-B"</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">find(sub)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Retorna el índice de sub o -1 si no existe.</td>
                  <td class="py-2.5 px-3">"Python".find("th")</td>
                  <td class="text-emerald-400 py-2.5 px-3">2</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">index(sub)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Retorna índice o lanza ValueError si no existe.</td>
                  <td class="py-2.5 px-3">"Python".index("P")</td>
                  <td class="text-emerald-400 py-2.5 px-3">0</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">count(sub)</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Cuenta cuántas veces aparece la subcadena.</td>
                  <td class="py-2.5 px-3">"banana".count("an")</td>
                  <td class="text-emerald-400 py-2.5 px-3">2</td>
                </tr>
                <tr>
                  <td class="text-amber-300 py-2.5 px-3">startswith() / endswith()</td>
                  <td class="font-sans text-gray-300 py-2.5 px-3">Evalúa si la cadena inicia o concluye con un prefijo/sufijo.</td>
                  <td class="py-2.5 px-3">"test.py".endswith(".py")</td>
                  <td class="text-emerald-400 py-2.5 px-3">True</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        quiz: [
          {
            question: "Dada la cadena archivo = 'reporte_final.PDF', ¿cuál es el resultado de la expresión: archivo.lower().endswith('.pdf')?",
            options: [
              "True",
              "False",
              "TypeError por mezclar métodos",
              "AttributeError"
            ],
            correct: 0,
            explanation: "El encadenamiento de métodos evalúa de izquierda a derecha: .lower() convierte 'reporte_final.PDF' a 'reporte_final.pdf', y sobre esa nueva cadena .endswith('.pdf') retorna True."
          }
        ]
      }
    ]
  },

  "prog-cheat-sheet-referencia": {
    id: "prog-cheat-sheet-referencia",
    title: "3.9 Referencia rápida y Cheat Sheet",
    subtitle: "Guía de consulta rápida estructurada en Sintaxis ➔ Descripción ➔ Ejemplo ➔ Resultado para tipos, operadores, listas, diccionarios, cadenas y slicing.",
    unit: 3,
    unitTitle: "Unidad 03: Elementos básicos de programación",
    week: 3,
    weekTitle: "Unidad 03: Elementos básicos de programación",
    difficulty: "Fácil",
    category: "Cheat Sheet y Consulta",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 03", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Cheat Sheet", type: "teal" },
      { text: "Referencia Rápida", type: "purple" }
    ],
    sections: [
      {
        id: "cheat-sheet-consulta-interactiva",
        title: "1. Consulta Rápida: Sintaxis ➔ Descripción ➔ Ejemplo ➔ Resultado",
        shortTitle: "Cheat Sheet Interactivo",
        icon: "fa-bookmark",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Esta sección condensa en un formato de referencia ágil los conceptos nucleares de Python divididos en las 10 categorías fundamentales solicitadas. Utiliza el buscador instantáneo o los filtros para localizar sintaxis de uso frecuente:
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Cheat Sheet Interactivo con Búsqueda Instantánea",
            description: "Explora la totalidad de tipos de datos, operadores, métodos de listas, diccionarios, strings, índices y slicing con ejemplos listos para probar:",
            widget: {
              file: "widgets/programacion/u03_cheat_sheet_interactivo.html",
              title: "Cheat Sheet Interactivo de Python",
              height: "580px"
            }
          },
          {
            category: "practica",
            title: "Práctica Guiada: Retos de Colecciones y Slicing",
            description: "Pon a prueba tu agilidad mental resolviendo desafíos prácticos sobre listas, diccionarios, strings y slicing:",
            widget: {
              file: "widgets/programacion/u03_practica_colecciones.html",
              title: "Práctica Guiada de Colecciones",
              height: "540px"
            }
          }
        ],
        quiz: [
          {
            question: "En el cheat sheet de Python, ¿cuál es la complejidad computacional promedio de consultar una clave en un diccionario d[clave] frente a buscar un valor con lista.index(valor)?",
            options: [
              "Diccionario O(1) tiempo constante | Lista O(n) tiempo lineal.",
              "Ambos tienen exactamente la misma velocidad O(n).",
              "Lista es más rápida porque usa números consecutivos.",
              "Depende exclusivamente de si el sistema operativo es de 64 bits."
            ],
            correct: 0,
            explanation: "Los diccionarios implementan tablas hash que permiten acceso directo O(1) a través de la clave; las listas requieren un recorrido secuencial elemento a elemento O(n) para localizar un valor arbitrario."
          }
        ]
      }
    ]
  }
};

