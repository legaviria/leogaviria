/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 04 - ESTRUCTURAS CONDICIONALES
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U04_TOPICS = {
  "prog-condicionales-if-elif-else": {
    id: "prog-condicionales-if-elif-else",
    title: "4.1 if, elif y else",
    subtitle: "Bifurcaciones de flujo lógico, condiciones anidadas, evaluación de rangos numéricos y patrones de decisión en Python.",
    unit: 4,
    unitTitle: "Unidad 04: Estructuras condicionales",
    week: 4,
    weekTitle: "Unidad 04: Estructuras condicionales",
    difficulty: "Fácil",
    category: "Control de Flujo",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "if-elif-else", type: "teal" },
      { text: "Bifurcaciones", type: "purple" }
    ],
    sections: [
      {
        id: "anatomia-sentencias-condicionales",
        title: "1. Anatomía de las Sentencias Condicionales",
        shortTitle: "Anatomía if-elif-else",
        icon: "fa-code-branch",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Las estructuras condicionales permiten alterar el flujo secuencial de un programa, ejecutando ciertos bloques de código solo si se cumple una expresión lógica determinada:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-purple-400">if</span> condicion_1:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Se ejecuta solo si condicion_1 es True</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;accion_primaria()<br>
            <span class="text-purple-400">elif</span> condicion_2:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Se evalúa si condicion_1 fue False y condicion_2 es True</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;accion_alternativa()<br>
            <span class="text-purple-400">else</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Rama por defecto: se ejecuta si NINGUNA de las anteriores se cumplió</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;accion_por_defecto()
          </div>
          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-3 text-xs text-gray-300">
            <strong>Indentación Obligatoria:</strong> Python utiliza sangría (habitualmente 4 espacios) en lugar de llaves <code>{ }</code> para delimitar qué instrucciones pertenecen al cuerpo de la condición.
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador del Flujo Condicional",
            description: "Modifica la calificación numérica del estudiante y observa cómo el flujo bifurca y resalta el camino ejecutado:",
            widget: {
              file: "widgets/programacion/u04_flujo_condicional.html",
              title: "Visualizador del Flujo Condicional",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "ejemplos-practicos-anidamiento",
        title: "2. Condiciones Anidadas y Casos Prácticos de Ingeniería",
        shortTitle: "Condiciones Anidadas",
        icon: "fa-laptop-code",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Podemos colocar estructuras condicionales dentro de otras (anidamiento) o utilizar operadores lógicos compuestos (<code>and, or</code>) para escribir código más plano y legible:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-gray-500"># Determinación del mayor de tres números</span><br>
            <span class="text-purple-400">if</span> a &gt;= b <span class="text-purple-400">and</span> a &gt;= c:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;mayor = a<br>
            <span class="text-purple-400">elif</span> b &gt;= a <span class="text-purple-400">and</span> b &gt;= c:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;mayor = b<br>
            <span class="text-purple-400">else</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;mayor = c
          </div>
        `,
        quiz: [
          {
            question: "En una cadena de 'if - elif - else', si la primera condición 'if' se evalúa como True, ¿qué ocurre con los bloques 'elif' y 'else' subsiguientes?",
            options: [
              "También se evalúan por si alguna otra condición es verdadera.",
              "Se ignoran por completo y el flujo continúa después del bloque condicional.",
              "Python arroja un error de ambigüedad si dos ramas son verdaderas.",
              "Solo se ignora el 'else', pero todos los 'elif' se ejecutan."
            ],
            correct: 1,
            explanation: "Las estructuras if-elif-else son mutuamente excluyentes. Tan pronto una condición resulta verdadera, se ejecuta su bloque y se saltan todas las ramas restantes de la estructura."
          }
        ]
      }
    ]
  }
};
