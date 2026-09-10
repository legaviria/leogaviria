/**
 * CONTENIDO EDUCATIVO DETALLADO: EXPRESIONES Y NOTACIÓN ARITMÉTICA
 * Unidad 01 - Fundamentos de la Programación
 * Prof. Leo Gaviria - Programación
 */

export const EXPRESIONES_NOTACION_DATA = {
  id: "prog-expresiones-notacion",
  title: "1.3 Expresiones y notación aritmética",
  subtitle: "Operadores, jerarquía PEMDAS, árboles sintácticos (AST), notaciones Infija/Prefija/Postfija, convenciones PEP 8 y evaluación.",
  unit: 1,
  unitTitle: "Unidad 01: Fundamentos de la programación",
  week: 1,
  weekTitle: "Unidad 01: Fundamentos de la programación",
  difficulty: "Fácil",
  category: "Fundamentos de la Programación",
  timeEstimate: "35 minutos",
  badges: [
    { text: "Unidad 01", type: "neutral" },
    { text: "Fácil", type: "easy" },
    { text: "Árboles AST", type: "teal" },
    { text: "Notación RPN", type: "purple" },
    { text: "PEP 8", type: "blue" },
    { text: "Quiz Evaluativo", type: "rose" }
  ],
  sections: [
    {
      id: "expresiones-ast",
      title: "1. Expresiones Aritméticas y Árboles Sintácticos (AST)",
      shortTitle: "Expresiones y árboles AST",
      icon: "fa-calculator",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Una <strong>expresión aritmética</strong> es una combinación válida de:
        </p>
        <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4 font-sans">
          <li><strong>Operandos:</strong> Números, constantes o variables (ej. <code class="text-sky-300 font-mono">5</code>, <code class="text-sky-300 font-mono">x</code>, <code class="text-sky-300 font-mono">12</code>).</li>
          <li><strong>Operadores:</strong> Símbolos aritméticos que representan una operación (<code class="text-amber-300 font-mono">+</code>, <code class="text-amber-300 font-mono">-</code>, <code class="text-amber-300 font-mono">*</code>, <code class="text-amber-300 font-mono">/</code>, <code class="text-amber-300 font-mono">^</code>).</li>
          <li><strong>Símbolos de agrupación:</strong> Paréntesis <code class="text-emerald-400 font-mono">()</code> o corchetes <code class="text-emerald-400 font-mono">[]</code> para definir el orden explícito de evaluación.</li>
        </ul>
        <p class="text-xs text-gray-300 leading-relaxed mb-4">
          El resultado de evaluar una expresión aritmética es siempre un <strong>único valor numérico</strong>.
        </p>

        <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
          <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-tree"></i> Árboles de Expresiones (AST - Abstract Syntax Tree)
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans mb-3">
            Toda expresión aritmética puede modelarse matemáticamente como un <strong>Árbol Sintáctico Abstracto</strong>, donde:
          </p>
          <ul class="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-sans">
            <li>Los <strong>Nodos Internos</strong> (raíces y ramas) son los <strong>Operadores</strong> (<code class="text-amber-300 font-mono">*</code>, <code class="text-amber-300 font-mono">+</code>, <code class="text-amber-300 font-mono">-</code>).</li>
            <li>Las <strong>Hojas</strong> (extremos terminales) son los <strong>Operandos</strong> (<code class="text-sky-300 font-mono">A</code>, <code class="text-sky-300 font-mono">B</code>, <code class="text-sky-300 font-mono">C</code>, <code class="text-sky-300 font-mono">D</code>).</li>
          </ul>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Recorrido Paso a Paso en Árboles de Expresión AST",
          description: "Explora la animación del recorrido paso a paso a través de los nodos del árbol sintáctico para comprender cómo se generan secuencialmente cada una de las notaciones:",
          widget: {
            file: "widgets/programacion/u01_recorrido_pasos.html",
            title: "Recorrido Paso a Paso en Árboles de Expresión",
            height: "560px"
          }
        }
      ]
    },
    {
      id: "notaciones-aritmeticas",
      title: "2. Notaciones Aritméticas: Infija, Prefija y Postfija (RPN)",
      shortTitle: "Notaciones aritméticas",
      icon: "fa-shuffle",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Según la posición relativa de los operadores respecto a los operandos en el recorrido del árbol, existen tres notaciones principales:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <span class="text-[10px] font-mono font-bold uppercase text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">Infija</span>
            <h4 class="text-white font-bold text-sm mt-2 mb-1">Operador en medio</h4>
            <p class="text-xs text-gray-400 leading-relaxed">Formato estándar para humanos. Requiere paréntesis y reglas de precedencia.</p>
            <div class="mt-3 text-xs font-mono text-emerald-400 bg-[#0a0d14] p-2 rounded">(A + B) * (C - D)</div>
          </div>

          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <span class="text-[10px] font-mono font-bold uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Prefija (Polaca)</span>
            <h4 class="text-white font-bold text-sm mt-2 mb-1">Operador antes</h4>
            <p class="text-xs text-gray-400 leading-relaxed">Recorrido Preorden (Raíz, Izquierda, Derecha). No requiere paréntesis.</p>
            <div class="mt-3 text-xs font-mono text-amber-300 bg-[#0a0d14] p-2 rounded">* + A B - C D</div>
          </div>

          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <span class="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Postfija (RPN)</span>
            <h4 class="text-white font-bold text-sm mt-2 mb-1">Operador después</h4>
            <p class="text-xs text-gray-400 leading-relaxed">Recorrido Postorden (Izquierda, Derecha, Raíz). Ideal para evaluación con Pilas.</p>
            <div class="mt-3 text-xs font-mono text-purple-300 bg-[#0a0d14] p-2 rounded">A B + C D - *</div>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Conversor Interactivo de Notaciones Aritméticas",
          description: "Experimenta la conversión entre notación Infija, Prefija y Postfija (RPN), y analiza cómo se organizan los operadores sin necesidad de paréntesis:",
          widget: {
            file: "widgets/programacion/u01_notaciones_aritmeticas.html",
            title: "Notaciones Aritméticas (Infija, Prefija, Postfija)",
            height: "480px"
          }
        },
        {
          category: "practica",
          title: "Prueba de Escritorio Interactiva",
          description: "Una prueba de escritorio es una simulación manual paso a paso de la ejecución de un algoritmo o expresión, registrando en una tabla los valores que van tomando las variables en cada instrucción:",
          widget: {
            file: "widgets/programacion/u01_ejercicio7_prueba_escritorio.html",
            title: "Ejercicio: Prueba de Escritorio Interactiva",
            height: "380px"
          }
        }
      ]
    },
    {
      id: "convenciones-nomenclatura",
      title: "3. Convenciones de Nomenclatura y Código Auto-Documentado",
      shortTitle: "Buenas prácticas de código",
      icon: "fa-font",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Al escribir código, es crucial adoptar convenciones de nombres consistentes para mejorar la legibilidad y el mantenimiento. Recuerda: <strong>el código se lee muchas más veces de las que se escribe</strong>.
        </p>

        <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Convención</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Regla / Formato</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Uso Común</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-800/60">
              <tr>
                <td class="font-bold text-sky-400 py-2 px-3 font-mono">snake_case</td>
                <td class="py-2 px-3">Minúsculas separadas por guión bajo (<code class="text-sky-300">_</code>).</td>
                <td class="py-2 px-3">Variables y funciones en Python (PEP 8), C, SQL.</td>
                <td class="py-2 px-3 font-mono text-emerald-400">saldo_cuenta, calcular_iva()</td>
              </tr>
              <tr>
                <td class="font-bold text-amber-400 py-2 px-3 font-mono">camelCase</td>
                <td class="py-2 px-3">Inicia en minúscula; siguientes palabras con mayúscula inicial.</td>
                <td class="py-2 px-3">Variables y métodos en JavaScript, Java, C#.</td>
                <td class="py-2 px-3 font-mono text-amber-300">saldoCuenta, calcularIva()</td>
              </tr>
              <tr>
                <td class="font-bold text-purple-400 py-2 px-3 font-mono">PascalCase</td>
                <td class="py-2 px-3">Todas las palabras inician con mayúscula.</td>
                <td class="py-2 px-3">Clases y Tipos de datos en la gran mayoría de lenguajes.</td>
                <td class="py-2 px-3 font-mono text-purple-300">CuentaBancaria, CalculadoraIva</td>
              </tr>
              <tr>
                <td class="font-bold text-rose-400 py-2 px-3 font-mono">kebab-case</td>
                <td class="py-2 px-3">Minúsculas separadas por guión medio (<code class="text-rose-300">-</code>).</td>
                <td class="py-2 px-3">Nombres de archivos, URLs, clases en HTML/CSS.</td>
                <td class="py-2 px-3 font-mono text-rose-300">tarjeta-usuario, menu-principal</td>
              </tr>
              <tr>
                <td class="font-bold text-teal-400 py-2 px-3 font-mono">SCREAMING_SNAKE</td>
                <td class="py-2 px-3">Mayúsculas separadas por guión bajo (<code class="text-teal-300">_</code>).</td>
                <td class="py-2 px-3">Constantes cuyo valor no muta nunca.</td>
                <td class="py-2 px-3 font-mono text-teal-300">VALOR_PI, MAX_REINTENTOS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-[#121622] border border-gray-800 rounded-xl p-4 my-4">
          <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-file-signature"></i> El Concepto de "Código Auto-Documentado"
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans mb-2">
            La regla de oro moderna en ingeniería de software es: <strong>El mejor comentario es el que no se escribe porque el nombre de la variable o función lo explica todo por sí solo.</strong>
          </p>
          <ul class="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-sans">
            <li>❌ <code>d = 10  # Días de retraso del cliente</code> ➔ ✅ <code>dias_retraso_cliente = 10</code></li>
            <li>❌ <code>valido = True</code> ➔ ✅ <code>es_correo_valido = True</code></li>
            <li>❌ <code>m_desc</code> ➔ ✅ <code>monto_descuento_promocional</code></li>
          </ul>
        </div>
      `,
      interactive: [
        {
          category: "practica",
          title: "Casillas de Verificación: Propiedades y Convenciones",
          description: "Pon a prueba tus conocimientos seleccionando todas las afirmaciones correctas sobre árboles AST, notaciones y convenciones de nomenclatura PEP 8:",
          widget: {
            file: "widgets/programacion/u01_ejercicio6_casillas_verificacion.html",
            title: "Ejercicio: Casillas de Verificación (Convenciones de Nombres)",
            height: "410px"
          }
        }
      ]
    }
  ],
  comprueba: {
    title: "Quiz de Evaluación: Fundamentos, Representación y Expresiones",
    description: "Pon a prueba tus conocimientos sobre toda la Unidad 01 (Algoritmos, Programación, Metodología de resolución, Pseudocódigo, Diagramas de flujo, Expresiones aritméticas y Convenciones de nomenclatura) respondiendo el siguiente cuestionario evaluativo de 10 preguntas:",
    widget: {
      file: "widgets/programacion/u01_fundamentos_quiz.html",
      title: "Quiz Interactivo - Unidad 01: Fundamentos de la Programación",
      height: "490px"
    }
  }
};
