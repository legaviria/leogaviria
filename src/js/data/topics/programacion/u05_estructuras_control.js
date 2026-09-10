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

  "prog-bucle-while": {
    id: "prog-bucle-while",
    title: "5.2 Estructura while",
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
    title: "5.3 Manejo de excepciones: try y except",
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
  }
};
