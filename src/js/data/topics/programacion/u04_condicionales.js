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
  },

  "prog-minecraft-bloques-condicionales": {
    id: "prog-minecraft-bloques-condicionales",
    title: "4.2 Conexión con Minecraft y bloques condicionales",
    subtitle: "Biblioteca mcpi, coordenadas 3D (x, y, z), colocación de bloques con setBlock() y cambio condicional de color de lana con if-elif-else.",
    unit: 4,
    unitTitle: "Unidad 04: Estructuras condicionales",
    week: 4,
    weekTitle: "Unidad 04: Estructuras condicionales",
    difficulty: "Fácil",
    category: "Python y Minecraft",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "mcpi", type: "teal" },
      { text: "Bloques 3D", type: "purple" }
    ],
    sections: [
      {
        id: "conexion-mcpi-coordenadas-bloque",
        title: "1. Conexión con el Servidor y Colocación de Bloques",
        shortTitle: "Conexión y setBlock",
        icon: "fa-cube",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Mediante la biblioteca <strong>mcpi</strong> (<em>Minecraft Pi Edition API</em>), Python puede conectarse a un servidor activo de Minecraft, consultar la posición espacial del jugador y manipular el entorno voxel en tiempo real:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4 space-y-1">
            <span class="text-purple-400">from</span> mcpi.minecraft <span class="text-purple-400">import</span> Minecraft<br><br>
            <span class="text-gray-500"># 1. Establecer conexión con IP y Puerto del servidor</span><br>
            mc = Minecraft.<span class="text-sky-300">create</span>(<span class="text-emerald-300">"15.235.56.59"</span>, <span class="text-amber-300">8180</span>)<br><br>
            <span class="text-gray-500"># 2. Obtener la entidad del usuario y sus coordenadas enteras de celda</span><br>
            usuario = mc.<span class="text-sky-300">getPlayerEntityId</span>(<span class="text-emerald-300">"24Cris"</span>)<br>
            x, y, z = mc.entity.<span class="text-sky-300">getTilePos</span>(usuario)<br><br>
            <span class="text-gray-500"># 3. Colocar un bloque en las coordenadas del mundo</span><br>
            <span class="text-gray-500"># mc.setBlock(x, y, z, idBloque, idDatos)</span><br>
            mc.<span class="text-sky-300">setBlock</span>(x, y, z, <span class="text-amber-300">35</span>, <span class="text-amber-300">15</span>) &nbsp;<span class="text-gray-500"># Bloque 35 (Lana) con datos 15 (Negro)</span>
          </div>
          <p class="text-xs text-gray-300 leading-relaxed mb-4">
            El sistema de coordenadas de Minecraft se organiza en tres dimensiones ortogonales:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono my-3">
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-sky-400">Eje X (Este - Oeste)</strong>
              <p class="text-[11px] text-gray-300 font-sans mt-1">Valores positivos hacia el Este, negativos hacia el Oeste.</p>
            </div>
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-emerald-400">Eje Y (Altitud / Vertical)</strong>
              <p class="text-[11px] text-gray-300 font-sans mt-1">Valores positivos ascienden hacia el cielo; negativos descienden.</p>
            </div>
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-amber-400">Eje Z (Sur - Norte)</strong>
              <p class="text-[11px] text-gray-300 font-sans mt-1">Valores positivos avanzan al Sur, negativos hacia el Norte.</p>
            </div>
          </div>
        `
      },
      {
        id: "condicionales-color-bloque-minecraft",
        title: "2. Decisiones Lógicas: Cambiar el Color del Bloque según Condiciones",
        shortTitle: "Color Condicional",
        icon: "fa-palette",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Podemos asociar variables numéricas (temperatura, altitud, distancia o inventario) con sentencias <code>if - elif - else</code> para seleccionar dinámicamente qué material o qué color de bloque colocar:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4 space-y-1">
            <span class="text-gray-500"># Determinar color de bloque de lana según variable de temperatura</span><br>
            temperatura = <span class="text-amber-300">28</span><br><br>
            <span class="text-purple-400">if</span> temperatura &gt;= <span class="text-amber-300">30</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;bloque = <span class="text-sky-300">35</span>; color = <span class="text-amber-300">14</span> &nbsp;<span class="text-gray-500"># Lana Roja (Alerta por calor)</span><br>
            <span class="text-purple-400">elif</span> temperatura &gt;= <span class="text-amber-300">20</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;bloque = <span class="text-sky-300">35</span>; color = <span class="text-amber-300">1</span> &nbsp;&nbsp;<span class="text-gray-500"># Lana Naranja (Clima templado cálido)</span><br>
            <span class="text-purple-400">elif</span> temperatura &gt;= <span class="text-amber-300">10</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;bloque = <span class="text-sky-300">35</span>; color = <span class="text-amber-300">5</span> &nbsp;&nbsp;<span class="text-gray-500"># Lana Verde Lima (Clima templado fresco)</span><br>
            <span class="text-purple-400">else</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;bloque = <span class="text-sky-300">35</span>; color = <span class="text-amber-300">11</span> &nbsp;<span class="text-gray-500"># Lana Azul (Frío / Helada)</span><br><br>
            mc.<span class="text-sky-300">setBlock</span>(x + <span class="text-amber-300">1</span>, y, z, bloque, color)
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Visual 3D de Bloques y Condicionales en Minecraft",
            description: "Modifica el valor de la variable ambiental y observa en tiempo real cómo el flujo bifurca y coloca el bloque exacto en el mundo voxel:",
            widget: {
              file: "widgets/programacion/u04_minecraft_bloques_condicional.html",
              title: "Bloques y Condiciones en Minecraft",
              height: "680px"
            }
          }
        ],
        quiz: [
          {
            question: "En mc.setBlock(x, y, z, 35, 14), ¿qué representan los argumentos 35 y 14 respectivamente?",
            options: [
              "35 es el ID de Bloque de Lana y 14 es el identificador de datos para el color Rojo.",
              "35 es la coordenada Y y 14 es la coordenada Z.",
              "35 segundos de retraso y 14 bloques de radio.",
              "35 de salud y 14 de armadura."
            ],
            correct: 0,
            explanation: "En Minecraft Pi Edition, el bloque ID 35 corresponde a Lana (Wool) y el segundo parámetro (data value) especifica el color según la paleta del juego (14 es Rojo, 15 es Negro, 0 es Blanco)."
          }
        ]
      }
    ]
  }
};


