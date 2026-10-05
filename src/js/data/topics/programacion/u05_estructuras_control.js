/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 05 - ESTRUCTURAS DE CONTROL
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U05_TOPICS = {
  "prog-bucle-for": {
    id: "prog-bucle-for",
    title: "5.1 Estructura for",
    subtitle: "Iteración determinada, función range(inicio, fin, paso), variables acumuladoras y contadoras, ciclos anidados y recorridos.",
    unit: 5,
    unitTitle: "Unidad 05: Estructuras de control",
    week: 5,
    weekTitle: "Unidad 05: Estructuras de control",
    difficulty: "Media",
    category: "Bucles e Iteración",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "for in", type: "teal" },
      { text: "range()", type: "amber" }
    ],
    sections: [
      {
        id: "concepto-bucle-for-range",
        title: "1. ¿Cómo Funciona la Estructura for y range()?",
        shortTitle: "Estructura for y range()",
        icon: "fa-repeat",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            A diferencia de otros lenguajes donde el bucle <code>for</code> es un simple contador numérico, en Python <code>for</code> es un iterador universal: recorre uno a uno los elementos de cualquier secuencia iterable (listas, tuplas, cadenas o generadores de números como <code>range()</code>).
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-amber-400 font-bold">Invocación de range()</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Secuencia Generada</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Explicación</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="text-sky-400 py-2.5 px-3">range(5)</td>
                  <td class="py-2.5 px-3 text-emerald-300">0, 1, 2, 3, 4</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Inicia en 0 por defecto; llega hasta n-1 (no incluye el 5).</td>
                </tr>
                <tr>
                  <td class="text-purple-400 py-2.5 px-3">range(1, 6)</td>
                  <td class="py-2.5 px-3 text-emerald-300">1, 2, 3, 4, 5</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Rango cerrado por izquierda y abierto por derecha: [inicio, fin).</td>
                </tr>
                <tr>
                  <td class="text-amber-400 py-2.5 px-3">range(0, 10, 2)</td>
                  <td class="py-2.5 px-3 text-emerald-300">0, 2, 4, 6, 8</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Incrementa de dos en dos según el tercer parámetro 'paso' (step).</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Visual del Bucle for",
            description: "Sigue la traza en memoria de cada iteración, observando el cambio en el contador 'i', el acumulador y las salidas en consola:",
            widget: {
              file: "widgets/programacion/u05_simulador_for.html",
              title: "Simulador Visual del Bucle for",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "patrones-acumuladores-anidados",
        title: "2. Patrones: Contadores, Acumuladores y Bucles Anidados",
        shortTitle: "Patrones y Ciclos Anidados",
        icon: "fa-layer-group",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Dos de los patrones algorítmicos más frecuentes en ingeniería son el <strong>contador</strong> (suma una constante) y el <strong>acumulador</strong> (suma una cantidad variable en cada ciclo):
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            suma_total = 0 &nbsp;<span class="text-gray-500"># Acumulador inicializado en neutro aditivo (0)</span><br>
            <span class="text-purple-400">for</span> numero <span class="text-purple-400">in</span> [15, 28, 42, 10]:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;suma_total += numero<br>
            <span class="text-purple-400">print</span>("Total acumulado:", suma_total) &nbsp;<span class="text-gray-500"># 95</span>
          </div>
        `,
        quiz: [
          {
            question: "¿Cuántas veces se ejecutará el cuerpo interno del bucle: for i in range(2, 8, 3)?",
            options: [
              "6 veces",
              "2 veces (con i=2 e i=5)",
              "3 veces (con i=2, i=5 e i=8)",
              "Ninguna, porque 8 no es divisible por 3"
            ],
            correct: 1,
            explanation: "Inicia en i=2. Siguiente paso: i=2+3=5. Siguiente paso: 5+3=8 (como 8 no es estrictamente menor que el límite 8, el bucle finaliza). Se ejecutó 2 veces."
          }
        ]
      }
    ]
  },

  "prog-minecraft-puente-for": {
    id: "prog-minecraft-puente-for",
    title: "5.2 Construcción de un puente en Minecraft con bucles for",
    subtitle: "Ciclos repetitivos for y range() aplicados a la construcción voxel: líneas de bloques, puente sobre hueco, barandas y plataformas 2D anidadas.",
    unit: 5,
    unitTitle: "Unidad 05: Estructuras de control",
    week: 5,
    weekTitle: "Unidad 05: Estructuras de control",
    difficulty: "Media",
    category: "Ciclos y Automatización 3D",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "for in range", type: "amber" },
      { text: "Construcción 3D", type: "teal" }
    ],
    sections: [
      {
        id: "relacion-ciclo-coordenada-bloque",
        title: "1. La Cadena Metodológica: Código ➔ Iteración ➔ Variable ➔ Coordenada ➔ Bloque",
        shortTitle: "Ciclos y Coordenadas",
        icon: "fa-road",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Al automatizar construcciones tridimensionales en Minecraft, la variable contadora de un ciclo <code>for</code> se transforma directamente en un <strong>desplazamiento de coordenadas espaciales</strong>. La experiencia pedagógica sigue estrictamente la cadena:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-amber-500/30 text-center font-mono text-xs text-amber-300 mb-5">
            Código Python &nbsp;➔&nbsp; Iteración &nbsp;➔&nbsp; Variable (i) &nbsp;➔&nbsp; Coordenada (x+i) &nbsp;➔&nbsp; Bloque &nbsp;➔&nbsp; Construcción Voxel
          </div>

          <h4 class="text-sm font-bold text-white mb-2">Desarrollo Progresivo de Construcciones</h4>
          <div class="space-y-3 text-xs">
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-sky-400 font-mono">1. Línea simple de bloques:</strong>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-1">
                for i in range(8):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;mc.setBlock(x + i, y, z, 5, 0) # Madera de Roble
              </div>
            </div>
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-amber-400 font-mono">2. Puente sobre un hueco (abismo):</strong>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-1">
                # Coloca bloques sobre el vacío entre las dos orillas<br>
                for i in range(1, 9):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;mc.setBlock(x + i, y, z, 4, 0) # Adoquín resistente
              </div>
            </div>
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-emerald-400 font-mono">3. Puente con barandas de seguridad a los lados:</strong>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-1">
                for i in range(1, 9):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;mc.setBlock(x + i, y, z, 5, 0)     # Camino central de madera<br>
                &nbsp;&nbsp;&nbsp;&nbsp;mc.setBlock(x + i, y+1, z-1, 85, 0) # Baranda izquierda (Vallas)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;mc.setBlock(x + i, y+1, z+1, 85, 0) # Baranda derecha (Vallas)
              </div>
            </div>
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-purple-400 font-mono">4. Plataforma 2D mediante ciclos anidados:</strong>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-1">
                for dx in range(6):      # Recorre el largo (eje X)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;for dz in range(3):  # Recorre el ancho (eje Z)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mc.setBlock(x + dx, y, z + dz, 41, 0) # Bloques de Oro
              </div>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Construcción de Puente en Minecraft",
            description: "Sigue la animación paso a paso de la colocación de bloques con ciclos for para cruzar el hueco o construir plataformas con ciclos anidados:",
            widget: {
              file: "widgets/programacion/u05_minecraft_puente_for.html",
              title: "Construcción de Puente con Ciclos",
              height: "680px"
            }
          },
          {
            category: "practica",
            title: "Práctica Guiada: Condicionales y Ciclos en Minecraft",
            description: "Resuelve retos de código aplicando bloques condicionales, coordenadas y bucles repetitivos en Minecraft:",
            widget: {
              file: "widgets/programacion/u04_practica_minecraft_condicionales.html",
              title: "Práctica en Minecraft",
              height: "540px"
            }
          }
        ],
        quiz: [
          {
            question: "En la construcción de una plataforma de suelo con ciclos anidados: for dx in range(4): for dz in range(3): mc.setBlock(x+dx, y, z+dz, 1, 0), ¿cuántas veces se ejecuta la función setBlock?",
            options: [
              "12 veces, colocando una matriz de 4x3 bloques de piedra.",
              "7 veces (4 + 3).",
              "4 veces.",
              "3 veces."
            ],
            correct: 0,
            explanation: "El ciclo exterior se ejecuta 4 veces (dx = 0, 1, 2, 3), y por cada una de ellas el ciclo interior se ejecuta 3 veces (dz = 0, 1, 2). El total de iteraciones es 4 * 3 = 12."
          }
        ]
      }
    ]
  },

  "prog-bucle-while": {
    id: "prog-bucle-while",
    title: "5.3 Estructura while",
    subtitle: "Iteración condicional indeterminada, centinelas, banderas booleanas, bucles infinitos y sentencias de control break y continue.",
    unit: 5,
    unitTitle: "Unidad 05: Estructuras de control",
    week: 5,
    weekTitle: "Unidad 05: Estructuras de control",
    difficulty: "Media",
    category: "Bucles e Iteración",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "while", type: "teal" },
      { text: "break / continue", type: "purple" }
    ],
    sections: [
      {
        id: "concepto-while-parada",
        title: "1. ¿Cuándo Utilizar while en Lugar de for?",
        shortTitle: "Ciclo while y Parada",
        icon: "fa-sync",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Utilizamos <code>for</code> cuando conocemos de antemano el número exacto de repeticiones o tenemos una colección finita. Por el contrario, utilizamos <code>while</code> cuando la repetición depende de una <strong>condición dinámica que cambia durante la ejecución</strong> (ej. esperar a que el usuario ingrese la contraseña correcta, leer un sensor hasta que baje la temperatura o validar entradas).
          </p>
          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-3 text-xs text-gray-300 mb-4">
            <strong class="text-amber-400">⚠️ La Regla de Oro del while:</strong> El cuerpo del bucle <em>debe contener al menos una instrucción que modifique las variables evaluadas en la condición</em>; de lo contrario, el programa entrará en un <strong>bucle infinito</strong> y congelará el proceso.
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador Interactivo de while",
            description: "Avanza paso a paso la verificación de condición, ejecución del cuerpo e incremento del contador:",
            widget: {
              file: "widgets/programacion/u05_visualizador_while.html",
              title: "Visualizador del Bucle while",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "control-break-continue",
        title: "2. Sentencias de Control: break y continue",
        shortTitle: "break y continue",
        icon: "fa-forward",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Podemos alterar el flujo ordinario de un ciclo utilizando dos palabras clave:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-red-400 font-bold text-xs uppercase mb-2">break (Terminación Inmediata)</h5>
              <p class="text-xs text-gray-300">
                Rompe y finaliza el bucle de inmediato, transfiriendo el control a la primera línea fuera del ciclo:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-2">
                while True:<br>
                &nbsp;&nbsp;dato = input("Escribe 'salir': ")<br>
                &nbsp;&nbsp;if dato == "salir":<br>
                &nbsp;&nbsp;&nbsp;&nbsp;break  # Sale del bucle infinito
              </div>
            </div>
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">continue (Salto de Iteración)</h5>
              <p class="text-xs text-gray-300">
                Omite el resto del código de la iteración actual y salta inmediatamente a la siguiente verificación de condición:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-2">
                for num in range(6):<br>
                &nbsp;&nbsp;if num % 2 == 0:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;continue  # Salta los pares<br>
                &nbsp;&nbsp;print(num)  # Imprime: 1, 3, 5
              </div>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "¿Qué salida imprimirá el siguiente código: c = 0; while c < 3: c += 1; if c == 2: continue; print(c)?",
            options: [
              "1, 2, 3",
              "1 y 3",
              "2 y 3",
              "Bucle infinito"
            ],
            correct: 1,
            explanation: "Cuando c=1, imprime 1. Cuando c=2, la condición 'c==2' ejecuta 'continue', saltándose el print de esa vuelta. Cuando c=3, imprime 3 y el bucle termina porque 3 < 3 es False."
          }
        ]
      }
    ]
  },

  "prog-excepciones-try-except": {
    id: "prog-excepciones-try-except",
    title: "5.4 Manejo de excepciones: try y except",
    subtitle: "Construcción de software tolerante a fallos, captura de excepciones tipadas, cláusulas else y finally, y validación robusta de entradas.",
    unit: 5,
    unitTitle: "Unidad 05: Estructuras de control",
    week: 5,
    weekTitle: "Unidad 05: Estructuras de control",
    difficulty: "Media",
    category: "Manejo de Errores",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "try / except", type: "teal" },
      { text: "Robustez", type: "purple" }
    ],
    sections: [
      {
        id: "anatomia-try-except",
        title: "1. ¿Qué es una Excepción y cómo se Captura?",
        shortTitle: "Bloques try / except",
        icon: "fa-shield-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>excepción</strong> es un evento disruptivo que ocurre durante la ejecución de un programa cuando se intenta una operación inválida (como dividir entre cero, convertir texto alfanumérico a número o abrir un archivo inexistente). Sin control, la excepción aborta el proceso de inmediato.
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-purple-400">try</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;edad = <span class="text-sky-300">int</span>(<span class="text-purple-400">input</span>("Tu edad: "))<br>
            <span class="text-purple-400">except</span> <span class="text-amber-400">ValueError</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">print</span>("Error: Debes ingresar un número entero válido.")<br>
            <span class="text-purple-400">else</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">print</span>(f"Edad procesada: {edad}")<br>
            <span class="text-purple-400">finally</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">print</span>("Fin del intento de lectura.")
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Control de Excepciones",
            description: "Provoca diferentes errores en tiempo de ejecución y observa cómo el bloque try/except/else/finally redirige el flujo protegiendo la aplicación:",
            widget: {
              file: "widgets/programacion/u05_simulador_excepciones.html",
              title: "Simulador de Excepciones",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "catalogo-excepciones-comunes",
        title: "2. Catálogo de Excepciones Esenciales en Python",
        shortTitle: "Excepciones Frecuentes",
        icon: "fa-exclamation-triangle",
        contentHtml: `
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2 px-3 bg-[#141923] text-red-400 font-bold">Excepción</th>
                  <th class="py-2 px-3 bg-[#141923] text-gray-200 font-bold">Causa Principal</th>
                  <th class="py-2 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="text-amber-400 py-2 px-3">ZeroDivisionError</td>
                  <td class="py-2 px-3 font-sans text-gray-300">División o módulo entre cero.</td>
                  <td class="py-2 px-3">10 / 0</td>
                </tr>
                <tr>
                  <td class="text-sky-400 py-2 px-3">ValueError</td>
                  <td class="py-2 px-3 font-sans text-gray-300">Tipo correcto pero valor o contenido inapropiado.</td>
                  <td class="py-2 px-3">int("hola")</td>
                </tr>
                <tr>
                  <td class="text-purple-400 py-2 px-3">TypeError</td>
                  <td class="py-2 px-3 font-sans text-gray-300">Operación aplicada a tipos incompatibles.</td>
                  <td class="py-2 px-3">"5" + 10</td>
                </tr>
                <tr>
                  <td class="text-emerald-400 py-2 px-3">IndexError</td>
                  <td class="py-2 px-3 font-sans text-gray-300">Índice fuera del rango de la lista o secuencia.</td>
                  <td class="py-2 px-3">lista[99]</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        quiz: [
          {
            question: "¿En qué circunstancias se ejecuta obligatoriamente el bloque 'finally' de una estructura try/except?",
            options: [
              "Únicamente cuando ocurrió una excepción.",
              "Únicamente cuando NO ocurrió ninguna excepción.",
              "Siempre, sin importar si hubo excepción o si el código se ejecutó limpiamente.",
              "Solo si el usuario presiona Ctrl+C."
            ],
            correct: 2,
            explanation: "El bloque finally está garantizado para ejecutarse siempre, ideal para tareas críticas de limpieza como cerrar archivos, conexiones de red o liberar recursos."
          }
        ]
      }
    ]
  },

  "prog-minecraft-pixelart-bucles": {
    id: "prog-minecraft-pixelart-bucles",
    title: "5.5 Ciclos anidados y Pixel Art en Minecraft",
    subtitle: "Recorrido de matrices bidimensionales, producto cartesiano de iteraciones, paleta de bloques y construcción de figuras voxel 3D.",
    unit: 5,
    unitTitle: "Unidad 05: Estructuras de control",
    week: 5,
    weekTitle: "Unidad 05: Estructuras de control",
    difficulty: "Media",
    category: "Ciclos Anidados y Matrices",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Ciclos Anidados", type: "purple" },
      { text: "Pixel Art Voxel", type: "teal" }
    ],
    sections: [
      {
        id: "matrices-2d-ciclos-anidados",
        title: "1. Matrices Bidimensionales y Ciclos Anidados (for en for)",
        shortTitle: "Ciclos Anidados y Matrices",
        icon: "fa-th",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Un <strong>ciclo anidado</strong> consiste en colocar una estructura de repetición dentro del cuerpo de otra. Este patrón es el estándar computacional para recorrer estructuras de datos en dos dimensiones: <strong>matrices</strong>, imágenes compuestas por píxeles y mundos voxel como Minecraft.
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4 space-y-1">
            <span class="text-gray-500"># Matriz 2D: Lista de listas donde cada fila contiene columnas de píxeles</span><br>
            matriz = [<br>
            &nbsp;&nbsp;&nbsp;&nbsp;[<span class="text-amber-300">0</span>, <span class="text-amber-300">85</span>, <span class="text-amber-300">85</span>, <span class="text-amber-300">0</span>], &nbsp;<span class="text-gray-500"># Fila 0</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;[<span class="text-amber-300">85</span>, <span class="text-amber-300">1</span>, <span class="text-amber-300">1</span>, <span class="text-amber-300">85</span>], &nbsp;<span class="text-gray-500"># Fila 1</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;[<span class="text-amber-300">0</span>, <span class="text-amber-300">85</span>, <span class="text-amber-300">85</span>, <span class="text-amber-300">0</span>] &nbsp;&nbsp;<span class="text-gray-500"># Fila 2</span><br>
            ]<br><br>
            filas = <span class="text-sky-300">len</span>(matriz) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># 3 filas en vertical</span><br>
            columnas = <span class="text-sky-300">len</span>(matriz[<span class="text-amber-300">0</span>]) &nbsp;<span class="text-gray-500"># 4 columnas en horizontal</span><br><br>
            <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-sky-300">range</span>(filas): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Ciclo EXTERIOR: avanza fila por fila</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">for</span> j <span class="text-purple-400">in</span> <span class="text-sky-300">range</span>(columnas): &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Ciclo INTERIOR: recorre cada columna de la fila</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;valor = matriz[i][j] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Acceso en tiempo O(1)</span>
          </div>

          <h4 class="text-sm font-bold text-white mb-2">Transformación Espacial en Minecraft</h4>
          <p class="text-xs text-gray-300 leading-relaxed mb-3">
            Para dibujar la imagen como una pared vertical en Minecraft, relacionamos los índices matriciales con las coordenadas del mundo:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono my-3">
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-sky-400">Eje X (Ancho / Columnas)</strong>
              <p class="text-[11px] text-gray-300 font-sans mt-1">Se calcula como <code>x + j</code>. A medida que <code>j</code> aumenta de 0 a columnas-1, los bloques se colocan de izquierda a derecha.</p>
            </div>
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-emerald-400">Eje Y (Alto / Filas)</strong>
              <p class="text-[11px] text-gray-300 font-sans mt-1">Se calcula como <code>y + (filas - 1 - i)</code>. En Python la fila 0 es la superior; en Minecraft +Y es arriba. Invertir <code>i</code> evita que el dibujo quede al revés.</p>
            </div>
            <div class="bg-[#141923] p-3 rounded-xl border border-gray-800">
              <strong class="text-purple-400">Eje Z (Profundidad)</strong>
              <p class="text-[11px] text-gray-300 font-sans mt-1">Se mantiene constante en <code>z</code> para crear una pared plana 2D erguida en el mundo tridimensional.</p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Pixel Art en Minecraft con Ciclos Anidados",
            description: "Sigue la animación en tiempo real de cómo se ejecutan los dos bucles for en sincronía con la matriz en memoria y la construcción voxel 3D:",
            widget: {
              file: "widgets/programacion/u05_minecraft_pixelart_bucles.html",
              title: "Pixel Art y Ciclos Anidados",
              height: "680px"
            }
          }
        ]
      },
      {
        id: "paleta-bloques-mapeo-colores",
        title: "2. Diccionario de Paleta de Bloques y Construcción Condicional",
        shortTitle: "Paleta y Renderizado Voxel",
        icon: "fa-palette",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En lugar de memorizar IDs numéricos dispersos de Minecraft, el código profesional organiza un diccionario que asocia el valor de cada celda con una tupla <code>(bloque, idDatos)</code>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4 space-y-1">
            <span class="text-gray-500"># Paleta de materiales de Minecraft (pokemon.py)</span><br>
            PALETA = {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-300">1</span>: &nbsp;(<span class="text-sky-300">35</span>, <span class="text-amber-300">0</span>), &nbsp;&nbsp;<span class="text-gray-500"># Blanco (Lana)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-300">26</span>: (<span class="text-sky-300">35</span>, <span class="text-amber-300">4</span>), &nbsp;&nbsp;<span class="text-gray-500"># Amarillo (Lana)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-300">30</span>: (<span class="text-sky-300">41</span>, <span class="text-amber-300">0</span>), &nbsp;&nbsp;<span class="text-gray-500"># Oro sólido (Bloque)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-300">85</span>: (<span class="text-sky-300">35</span>, <span class="text-amber-300">14</span>), &nbsp;<span class="text-gray-500"># Rojo (Lana)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-300">93</span>: (<span class="text-sky-300">251</span>, <span class="text-amber-300">15</span>),<span class="text-gray-500"># Negro (Hormigón)</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-300">97</span>: (<span class="text-sky-300">173</span>, <span class="text-amber-300">0</span>) &nbsp;&nbsp;<span class="text-gray-500"># Carbón (Contornos)</span><br>
            }<br><br>
            <span class="text-gray-500"># Renderizado defensivo dentro del ciclo interno:</span><br>
            <span class="text-purple-400">if</span> valor <span class="text-purple-400">in</span> PALETA:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;bloque, sub_id = PALETA[valor]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;mc.<span class="text-sky-300">setBlock</span>(x + j, y + (filas - <span class="text-amber-300">1</span> - i), z, bloque, sub_id)
          </div>
          <p class="text-xs text-gray-300 leading-relaxed mb-4">
            Si una celda tiene valor <code>0</code> (aire o transparencia), la condición <code>if valor in PALETA</code> simplemente la ignora, ahorrando miles de operaciones innecesarias de colocación de bloques sobre el servidor.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Catálogo Completo de la Paleta de Minecraft (97 Materiales)",
            description: "Explora la paleta interactiva con los 97 bloques de Minecraft de paleta_minecraft.png y pokemon.py. Filtra por familias (Lanas, Hormigón, Terracotas, Minerales), examina el voxel 3D interactivo y copia tuplas de Python con un solo clic:",
            widget: {
              file: "widgets/programacion/u05_paleta_colores_minecraft.html",
              title: "Paleta de Colores Minecraft",
              height: "720px"
            }
          },
          {
            category: "practica",
            title: "Práctica Guiada: Ciclos Anidados y Pixel Art en Minecraft",
            description: "Pon a prueba tus conocimientos sobre dimensiones matriciales, producto de iteraciones y cálculo de coordenadas 3D:",
            widget: {
              file: "widgets/programacion/u05_practica_pixelart_bucles.html",
              title: "Práctica de Matrices y Ciclos",
              height: "540px"
            }
          }
        ],
        quiz: [
          {
            question: "Si una imagen pixel art está compuesta por 20 filas y 15 columnas, ¿cuál es la complejidad computacional temporal de construirla con ciclos anidados for?",
            options: [
              "O(filas × columnas) = O(300 iteraciones), ya que cada píxel de la matriz debe ser visitado exactamente una vez.",
              "O(filas + columnas) = O(35 iteraciones).",
              "O(filas) = O(20 iteraciones).",
              "O(1) tiempo constante independiente del tamaño de la imagen."
            ],
            correct: 0,
            explanation: "Para recorrer una cuadrícula de N filas y M columnas, el ciclo interno realiza M pasos por cada uno de los N pasos del ciclo externo, totalizando N × M iteraciones (complejidad temporal O(N × M))."
          }
        ]
      }
    ]
  }
};

