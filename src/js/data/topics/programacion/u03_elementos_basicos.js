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
  }
};
