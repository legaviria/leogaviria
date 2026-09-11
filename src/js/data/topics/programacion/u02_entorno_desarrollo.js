/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 02 - ENTORNO DE DESARROLLO
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U02_TOPICS = {
  "prog-entorno-instalacion": {
    id: "prog-entorno-instalacion",
    title: "2.1 Instalación y configuración de Python y Visual Studio Code",
    subtitle: "Qué es un intérprete, flujo de compilación a bytecode, instalación paso a paso, extensiones esenciales y organización de proyectos.",
    unit: 2,
    unitTitle: "Unidad 02: Entorno de desarrollo",
    week: 2,
    weekTitle: "Unidad 02: Entorno de desarrollo",
    difficulty: "Fácil",
    category: "Entorno y Herramientas",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "VS Code", type: "blue" },
      { text: "Python 3", type: "teal" }
    ],
    sections: [
      {
        id: "que-es-python-interprete",
        title: "1. ¿Qué es Python y qué es un Intérprete?",
        shortTitle: "Python e Intérprete",
        icon: "fa-terminal",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            <strong>Python</strong> es un lenguaje de programación de alto nivel, interpretado, dinámico y multiparadigma, diseñado por Guido van Rossum a principios de los años 90 con un principio rector: la legibilidad del código.
          </p>
          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
            <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-cog"></i> Compilador vs. Intérprete
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              A diferencia de lenguajes compilados puros como C o Rust (que traducen todo el código fuente directamente a código máquina binario nativo antes de la ejecución), Python utiliza un <strong>intérprete</strong>. El código fuente <code>.py</code> se compila primero a un formato intermedio optimizado llamado <strong>Bytecode</strong> (archivos <code>.pyc</code> dentro de <code>__pycache__</code>), y luego la <strong>Python Virtual Machine (PVM)</strong> ejecuta esas instrucciones línea por línea.
            </p>
          </div>
        `
      },
      {
        id: "guia-instalacion-paso-a-paso",
        title: "2. Guía Visual de Instalación y Configuración",
        shortTitle: "Guía de Instalación",
        icon: "fa-download",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para contar con un entorno profesional productivo, requerimos dos piezas fundamentales de software:
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Herramienta</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Propósito Principal</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Detalle Crítico</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">Python 3.x Oficial</td>
                  <td class="py-2.5 px-3">Motor de ejecución e intérprete estándar.</td>
                  <td class="py-2.5 px-3"><span class="text-amber-400 font-semibold">Marcar: "Add python.exe to PATH"</span> al instalar.</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Visual Studio Code</td>
                  <td class="py-2.5 px-3">Editor de código modular, liviano y configurable.</td>
                  <td class="py-2.5 px-3">Instalar extensión oficial <code>ms-python.python</code> y <code>Pylance</code>.</td>
                </tr>
                <tr>
                  <td class="font-bold text-emerald-400 py-2.5 px-3">Terminal Integrada</td>
                  <td class="py-2.5 px-3">Línea de comandos accesible con <kbd class="bg-gray-800 px-1.5 py-0.5 rounded text-gray-200">Ctrl + ñ</kbd>.</td>
                  <td class="py-2.5 px-3">Permite ejecutar <code>python main.py</code> sin salir del editor.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "practica",
            title: "Actividad: Configura tu Entorno",
            description: "Verifica mediante esta lista de comprobación interactiva que tu estación de desarrollo cuente con todos los componentes requeridos:",
            widget: {
              file: "widgets/programacion/u02_checklist_entorno.html",
              title: "Lista de Comprobación: Configura tu Entorno",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-entorno",
        title: "3. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Responde las siguientes preguntas conceptuales sobre el entorno de desarrollo de Python:
          </p>
        `,
        quiz: [
          {
            question: "¿Por qué es fundamental marcar la opción 'Add python.exe to PATH' durante la instalación de Python en Windows?",
            options: [
              "Para que Python consuma menos memoria RAM en ejecución.",
              "Para permitir que el sistema operativo reconozca el comando 'python' desde cualquier terminal o directorio.",
              "Porque de lo contrario no se pueden guardar archivos con extensión .py.",
              "Es un requisito exclusivo de la licencia de código abierto."
            ],
            correct: 1,
            explanation: "La variable de entorno PATH indica al sistema operativo en qué carpetas buscar los ejecutables. Sin ella, la terminal arrojará el error: 'python no se reconoce como un comando interno o externo'."
          },
          {
            question: "¿Qué rol cumple la Máquina Virtual de Python (PVM)?",
            options: [
              "Diseñar las interfaces gráficas del sistema.",
              "Interpretar y ejecutar las instrucciones en Bytecode (.pyc) en la CPU.",
              "Formatear automáticamente el código con sangría de 4 espacios.",
              "Conectarse a internet para descargar paquetes de terceros."
            ],
            correct: 1,
            explanation: "La PVM es el motor interno de tiempo de ejecución de Python que lee el Bytecode intermedio y lo ejecuta instrucción por instrucción."
          }
        ]
      }
    ]
  },

  "prog-primer-programa": {
    id: "prog-primer-programa",
    title: "2.2 Primer programa: ejecución, documentación y pruebas",
    subtitle: "Estructura de un script, la función print(), comentarios, buenas prácticas PEP 8 y ciclo de ejecución interactiva.",
    unit: 2,
    unitTitle: "Unidad 02: Entorno de desarrollo",
    week: 2,
    weekTitle: "Unidad 02: Entorno de desarrollo",
    difficulty: "Fácil",
    category: "Fundamentos de Código",
    timeEstimate: "25 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "print()", type: "teal" },
      { text: "PEP 8", type: "purple" }
    ],
    sections: [
      {
        id: "estructura-programa-print",
        title: "1. Estructura de un Programa y Salida con print()",
        shortTitle: "Estructura y print()",
        icon: "fa-code",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En Python, un programa es un archivo de texto con extensión <code>.py</code> que contiene una serie ordenada de declaraciones y expresiones legibles. La función integrada más elemental para comunicarnos con el usuario es <code>print()</code>, encargada de emitir texto al flujo de salida estándar (<em>stdout</em>).
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            <span class="text-gray-500"># main.py - Nuestro primer script formal</span><br>
            <span class="text-purple-400">print</span>(<span class="text-emerald-300">"¡Hola, mundo de la programación!"</span>)<br>
            <span class="text-purple-400">print</span>(<span class="text-emerald-300">"Resultado:"</span>, <span class="text-sky-300">5</span> + <span class="text-sky-300">3</span> * <span class="text-sky-300">2</span>)
          </div>
          <p class="text-xs text-gray-400 leading-relaxed">
            Observa que <code>print()</code> puede recibir múltiples argumentos separados por coma; por defecto, los imprimirá separados por un espacio y agregará un salto de línea al final.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Interactivo: Del Código al Resultado",
            description: "Modifica el código de prueba, ejecútalo y observa la transición visual desde el código fuente hasta la consola stdout:",
            widget: {
              file: "widgets/programacion/u02_codigo_resultado.html",
              title: "Del Código al Resultado",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comentarios-documentacion",
        title: "2. Comentarios y Documentación en el Código",
        shortTitle: "Comentarios y PEP 8",
        icon: "fa-comment-dots",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El código no solo se escribe para que la máquina lo entienda, sino principalmente para que otros programadores (y tú mismo en el futuro) puedan mantenerlo sin fricción. Python ofrece dos mecanismos:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">Comentarios de una línea (#)</h5>
              <p class="text-xs text-gray-300">
                Inician con <code>#</code>. Son completamente ignorados por el intérprete en tiempo de ejecución. Se utilizan para explicar el <em>por qué</em> de una decisión de diseño:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-2">
                # Tasa de IVA según regulación fiscal vigente<br>
                tasa_iva = 0.19
              </div>
            </div>
            <div class="bg-[#141923] border border-gray-800 rounded-xl p-4">
              <h5 class="text-purple-400 font-bold text-xs uppercase mb-2">Docstrings (&#34;&#34;&#34; ... &#34;&#34;&#34;)</h5>
              <p class="text-xs text-gray-300">
                Cadenas multilínea delimitadas por triples comillas ubicadas al inicio de módulos o funciones. Forman parte de los metadatos accesibles con <code>help()</code>:
              </p>
              <div class="bg-[#0b0e14] p-2 rounded text-[11px] font-mono text-gray-300 mt-2">
                &#34;&#34;&#34;Módulo de cálculo de nómina mensual.<br>Autor: Prof. Leo Gaviria&#34;&#34;&#34;
              </div>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "¿Qué salida imprimirá la siguiente instrucción: print('A', 'B', sep='-', end='*')?",
            options: [
              "A B*",
              "A-B*",
              "A-B con un salto de línea",
              "SyntaxError por parámetros desconocidos"
            ],
            correct: 1,
            explanation: "El parámetro sep='-' reemplaza el espacio por defecto entre argumentos, y end='*' reemplaza el salto de línea final por un asterisco, generando 'A-B*'."
          }
        ]
      }
    ]
  },

  "prog-errores-depuracion": {
    id: "prog-errores-depuracion",
    title: "2.3 Errores y depuración",
    subtitle: "Clasificación taxonómica de errores (Sintaxis, Ejecución y Lógicos), lectura de tracebacks y estrategias metódicas de depuración.",
    unit: 2,
    unitTitle: "Unidad 02: Entorno de desarrollo",
    week: 2,
    weekTitle: "Unidad 02: Entorno de desarrollo",
    difficulty: "Media",
    category: "Depuración de Software",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Traceback", type: "red" },
      { text: "Debugging", type: "teal" }
    ],
    sections: [
      {
        id: "tipos-de-errores",
        title: "1. Clasificación Fundamental de Errores",
        shortTitle: "Tipos de Errores",
        icon: "fa-bug",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Todo programador comete errores constantemente; la diferencia entre un principiante y un profesional radica en su método para diagnosticar, aislar y corregir los fallos. En Python, los errores se dividen en tres grandes familias:
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-red-400 font-bold">Tipo de Error</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Momento de Detección</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo Típico</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Comportamiento</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-red-400 py-2.5 px-3">SyntaxError</td>
                  <td class="py-2.5 px-3">Antes de ejecutar (fase de parsing).</td>
                  <td class="py-2.5 px-3 font-mono text-gray-300">if x > 5 print(x)</td>
                  <td class="py-2.5 px-3">El programa ni siquiera comienza a correr.</td>
                </tr>
                <tr>
                  <td class="font-bold text-amber-400 py-2.5 px-3">RuntimeError (Excepción)</td>
                  <td class="py-2.5 px-3">Durante la ejecución activa.</td>
                  <td class="py-2.5 px-3 font-mono text-gray-300">10 / 0 &nbsp;|&nbsp; int("abc")</td>
                  <td class="py-2.5 px-3">El programa colapsa en la línea del fallo con un Traceback.</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Error Lógico</td>
                  <td class="py-2.5 px-3">Nunca salta error automático.</td>
                  <td class="py-2.5 px-3 font-mono text-gray-300">area = base + altura</td>
                  <td class="py-2.5 px-3">El programa corre pero arroja un resultado incorrecto.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Diagnóstico y Depuración",
            description: "Analiza cuatro casos reales con código defectuoso, interpreta el Traceback y selecciona la causa raíz:",
            widget: {
              file: "widgets/programacion/u02_simulador_depuracion.html",
              title: "Simulador de Diagnóstico y Depuración",
              height: "500px"
            }
          }
        ]
      },
      {
        id: "lectura-traceback-metodologia",
        title: "2. Cómo Leer un Traceback como un Profesional",
        shortTitle: "Lectura de Tracebacks",
        icon: "fa-list-ol",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Cuando ocurre una excepción en tiempo de ejecución, Python imprime un informe de pila llamado <strong>Traceback</strong>. La regla de oro para leerlo es: <strong>leer de abajo hacia arriba</strong>.
          </p>
          <div class="bg-[#141923] border border-red-500/30 rounded-xl p-4 my-4">
            <div class="font-mono text-xs text-red-300 leading-relaxed">
              Traceback (most recent call last):<br>
              &nbsp;&nbsp;File "calculos.py", line 12, in dividir<br>
              &nbsp;&nbsp;&nbsp;&nbsp;return dividendo / divisor<br>
              <strong class="text-red-400">ZeroDivisionError: division by zero</strong>
            </div>
            <p class="text-xs text-gray-300 mt-3">
              1. <strong>Línea final:</strong> Te dice exactamente qué falló (<code>ZeroDivisionError</code>) y el motivo (<code>division by zero</code>).<br>
              2. <strong>Líneas previas:</strong> Te señalan en qué archivo (<code>calculos.py</code>) y en qué número de línea (<code>line 12</code>) se detuvo el intérprete.
            </p>
          </div>
        `,
        quiz: [
          {
            question: "Si tu programa corre sin arrojar ningún mensaje de error, pero calcula que el promedio de las notas 4.0, 3.0 y 5.0 es 8.0, ¿ante qué tipo de error te encuentras?",
            options: [
              "SyntaxError por falta de indentación.",
              "Error Lógico: probablemente una omisión de paréntesis en la precedencia de operadores.",
              "TypeError por mezclar floats con enteros.",
              "ZeroDivisionError en la división por 3."
            ],
            correct: 1,
            explanation: "Al no haber excepciones de runtime, la sintaxis es válida pero la lógica está rota: se escribió 4.0 + 3.0 + (5.0 / 3) en lugar de (4.0 + 3.0 + 5.0) / 3."
          }
        ]
      }
    ]
  },

  "prog-libreria-turtle": {
    id: "prog-libreria-turtle",
    title: "2.4 Uso de la librería Turtle",
    subtitle: "Programación secuencial paso a paso con gráficos por computadora: instrucciones, orientación, lápiz virtual y figuras geométricas.",
    unit: 2,
    unitTitle: "Unidad 02: Entorno de desarrollo",
    week: 2,
    weekTitle: "Unidad 02: Entorno de desarrollo",
    difficulty: "Fácil",
    category: "Gráficos y Secuencias",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 02", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Turtle", type: "emerald" },
      { text: "Secuencial", type: "blue" }
    ],
    sections: [
      {
        id: "sec-turtle-conociendo",
        title: "1. Conociendo Turtle y la Ventana Gráfica",
        shortTitle: "Conociendo Turtle",
        icon: "fa-compass",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La librería <strong>turtle</strong> es uno de los módulos gráficos más intuitivos y didácticos del ecosistema de Python. Inspirada en la tortuga robótica del lenguaje <em>Logo</em> creada por Seymour Papert en el MIT, nos permite visualizar físicamente cómo el computador ejecuta las instrucciones en tiempo real.
          </p>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">01_conociendo_turtle.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

<span class="text-gray-500 italic"># 1. Crear el objeto gráfico de la tortuga</span>
tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># 2. Mantener la ventana gráfica abierta al terminar</span>
<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Elemento</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Propósito en el Programa</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Detalle Pedagógico</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-yellow-400 py-2.5 px-3">import turtle</td>
                  <td class="py-2.5 px-3">Carga el módulo gráfico integrado de Python.</td>
                  <td class="py-2.5 px-3">Viene incluido por defecto en Python, sin requerir <code>pip install</code>.</td>
                </tr>
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">tortuga = turtle.Turtle()</td>
                  <td class="py-2.5 px-3">Crea nuestro actor gráfico o lienzo interactivo.</td>
                  <td class="py-2.5 px-3">Tiene un estado propio: posición <code>(x, y)</code>, ángulo y lápiz.</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">turtle.done()</td>
                  <td class="py-2.5 px-3">Mantiene la ventana visible a la espera del usuario.</td>
                  <td class="py-2.5 px-3">Evita que el sistema operativo cierre la ventana al terminar el script.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
            <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-lightbulb"></i> Idea Principal: El Modelo Mental de la Tortuga
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              Imagina una pequeña tortuga robótica parada sobre una hoja de papel blanca. La tortuga sostiene un marcador en su cola. El centro exacto de la pantalla es el punto cartesiano <strong>(0, 0)</strong>. Al nacer, la tortuga se encuentra mirando directamente hacia la derecha (hacia el <strong>Este, ángulo 0°</strong>). Para dibujar, no le decimos "pinta un cuadrado": debemos ordenarle <em>camina hacia adelante</em>, <em>gira</em>, <em>vuelve a caminar</em>, instrucción por instrucción.
            </p>
          </div>
        `
      },
      {
        id: "sec-turtle-primer-movimiento",
        title: "2. Primer Movimiento: forward(distancia)",
        shortTitle: "forward(100)",
        icon: "fa-arrow-right",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La instrucción fundamental de avance es <code>forward(distancia)</code> (o su versión corta <code>fd()</code>). Recibe un número como argumento, el cual representa la cantidad de <strong>píxeles</strong> que la tortuga debe recorrer en la dirección hacia la que está apuntando.
          </p>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">02_primer_movimiento.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># Avanzar 100 píxeles hacia adelante en línea recta</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
          <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4 my-4">
            <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-microscope"></i> ¿Qué está pasando en este instante?
            </h4>
            <ul class="list-disc list-inside text-xs text-gray-300 space-y-1.5 leading-relaxed">
              <li>La tortuga inicia en el origen <code>(0, 0)</code> mirando al Este (0°).</li>
              <li>El lápiz virtual está apoyado en el papel de manera predeterminada.</li>
              <li>Al recibir <code>forward(100)</code>, la tortuga camina 100 píxeles hacia la derecha hasta alcanzar la coordenada <code>(100, 0)</code>.</li>
              <li>Mientras avanza, el marcador arrastra tinta, dejando una línea continua trazada sobre el lienzo blanco.</li>
            </ul>
          </div>
          <div class="bg-[#141923] border border-sky-500/30 rounded-xl p-4 my-4">
            <h4 class="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-pencil-alt"></i> A Practicar
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              ¿Qué ocurre si cambias <code>tortuga.forward(100)</code> por <code>tortuga.forward(50)</code> o <code>tortuga.forward(250)</code>? La longitud de la línea responde de forma estrictamente proporcional a la distancia enviada como argumento numérico.
            </p>
          </div>
        `
      },
      {
        id: "sec-turtle-giros",
        title: "3. Giros y Orientación: left(grados) y la Importancia del Orden",
        shortTitle: "left(90) y Orden",
        icon: "fa-redo-alt",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para cambiar el rumbo de la tortuga utilizamos las instrucciones de giro: <code>left(grados)</code> (gira hacia la izquierda / antihorario) y <code>right(grados)</code> (gira hacia la derecha / horario). Un detalle crucial: <strong>el giro ocurre sobre el propio eje de la tortuga</strong>, sin alterar su posición en las coordenadas <code>(x, y)</code>.
          </p>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">03_giros_orientacion.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># 1. Avanzar 100 píxeles horizontalmente</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)

<span class="text-gray-500 italic"># 2. Girar 90 grados a la izquierda (ahora mira hacia el Norte, 90°)</span>
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># 3. Avanzar otros 100 píxeles hacia arriba</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4 code-block-card">
              <div class="flex items-center justify-between border-b border-gray-800/80 pb-2 mb-2.5">
                <h5 class="text-amber-400 font-bold text-xs uppercase flex items-center gap-1.5">
                  <i class="fas fa-sort-numeric-down"></i> Secuencia A (Avanzar y luego Girar)
                </h5>
                <button 
                  type="button" 
                  onclick="window.copyCodeToClipboard(this)" 
                  class="flex items-center gap-1 px-2 py-0.5 text-[10px] text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 rounded transition cursor-pointer"
                  title="Copiar código"
                >
                  <i class="fas fa-copy"></i>
                  <span>Copiar</span>
                </button>
              </div>
              <pre class="bg-[#0b0e14] p-2.5 rounded-lg text-xs font-mono text-gray-200 mb-2 border border-gray-800/60"><code>tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)</code></pre>
              <p class="text-xs text-gray-300 leading-relaxed">
                Traza una línea horizontal en el eje X de 100 píxeles y concluye mirando verticalmente hacia arriba (Norte).
              </p>
            </div>
            <div class="bg-[#141923] border border-rose-500/30 rounded-xl p-4 code-block-card">
              <div class="flex items-center justify-between border-b border-gray-800/80 pb-2 mb-2.5">
                <h5 class="text-rose-400 font-bold text-xs uppercase flex items-center gap-1.5">
                  <i class="fas fa-exclamation-triangle"></i> Secuencia B (Girar y luego Avanzar)
                </h5>
                <button 
                  type="button" 
                  onclick="window.copyCodeToClipboard(this)" 
                  class="flex items-center gap-1 px-2 py-0.5 text-[10px] text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 rounded transition cursor-pointer"
                  title="Copiar código"
                >
                  <i class="fas fa-copy"></i>
                  <span>Copiar</span>
                </button>
              </div>
              <pre class="bg-[#0b0e14] p-2.5 rounded-lg text-xs font-mono text-gray-200 mb-2 border border-gray-800/60"><code>tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)</code></pre>
              <p class="text-xs text-gray-300 leading-relaxed">
                Gira primero hacia el Norte en el origen (0,0) y luego traza una línea vertical sobre el eje Y. ¡El orden altera por completo la figura!
              </p>
            </div>
          </div>
          <p class="text-xs text-gray-400 leading-relaxed">
            Esta es la regla de oro de la <strong>programación secuencial</strong>: el estado del sistema en cada paso determina el comportamiento del paso siguiente.
          </p>
        `
      },
      {
        id: "sec-turtle-cuadrado",
        title: "4. Construyendo un Cuadrado: Secuencia Estricta sin Bucles",
        shortTitle: "Construir Cuadrado",
        icon: "fa-vector-square",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para construir un cuadrado perfecto, debemos trazar cuatro lados de igual longitud y girar cuatro veces en ángulo recto (90°). Como la suma de los ángulos exteriores de un polígono cerrado es <strong>360°</strong>, cuatro giros de 90° (\(4 \times 90° = 360°\)) devolverán a la tortuga a su orientación inicial.
          </p>
          <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4 my-4">
            <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-graduation-cap"></i> Principio Pedagógico: ¿Por qué sin bucles for?
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              En esta etapa de formación, no recurrimos a bucles repetitivos como <code>for</code> o <code>while</code>. Escribir las ocho instrucciones secuenciales una por una permite entender con total claridad la causa y el efecto: <strong>cada línea de código produce exactamente una acción física visible</strong>.
            </p>
          </div>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">04_cuadrado_secuencial.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># Lado 1 (horizontal inferior) y giro hacia arriba</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># Lado 2 (vertical derecho) y giro a la izquierda</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># Lado 3 (horizontal superior) y giro hacia abajo</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># Lado 4 (vertical izquierdo) y giro final (cierra la figura)</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Laboratorio Interactivo de Turtle Secuencial",
            description: "Observa la tortuga desplazarse paso a paso en tiempo real, inspecciona el código Python sincronizado y pon a prueba los distintos modos de ejecución:",
            widget: {
              file: "widgets/programacion/u02_turtle_secuencial.html",
              title: "Visualizador Turtle Secuencial",
              height: "540px"
            }
          }
        ]
      },
      {
        id: "sec-turtle-relleno",
        title: "5. Color y Relleno de Figuras: color(), begin_fill() y end_fill()",
        shortTitle: "Relleno de Figuras",
        icon: "fa-fill-drip",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Turtle nos permite dotar de vida a nuestros dibujos personalizando el color del trazo y rellenando el interior de figuras cerradas con colores sólidos mediante la técnica del <strong>bloque delimitador</strong>.
          </p>
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Instrucción</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Función</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">color("borde", "relleno")</td>
                  <td class="py-2.5 px-3">Configura simultáneamente el color del lápiz y el del relleno.</td>
                  <td class="py-2.5 px-3"><code>tortuga.color("black", "#38bdf8")</code></td>
                </tr>
                <tr>
                  <td class="font-bold text-amber-400 py-2.5 px-3">begin_fill()</td>
                  <td class="py-2.5 px-3">Inicia la grabación del perímetro para el coloreado.</td>
                  <td class="py-2.5 px-3">Se invoca <strong>antes</strong> de trazar el primer lado.</td>
                </tr>
                <tr>
                  <td class="font-bold text-emerald-400 py-2.5 px-3">end_fill()</td>
                  <td class="py-2.5 px-3">Rellena la figura geométrica cerrada trazada.</td>
                  <td class="py-2.5 px-3">Se invoca <strong>después</strong> de cerrar la figura.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">05_cuadrado_relleno.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()

<span class="text-gray-500 italic"># Configurar colores: contorno oscuro y relleno azul cielo</span>
tortuga.<span class="text-sky-400">color</span>(<span class="text-emerald-300">"#1e293b"</span>, <span class="text-emerald-300">"#38bdf8"</span>)

<span class="text-gray-500 italic"># 1. Avisar que iniciaremos una figura para rellenar</span>
tortuga.<span class="text-sky-400">begin_fill</span>()

<span class="text-gray-500 italic"># 2. Trazar secuencialmente los 4 lados del cuadrado</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">100</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># 3. Consolidar el relleno</span>
tortuga.<span class="text-sky-400">end_fill</span>()

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
        `
      },
      {
        id: "sec-turtle-cruz-lapiz",
        title: "6. Levantando el Lápiz: penup(), pendown() y Trazos Compuestos",
        shortTitle: "penup, pendown y Cruz",
        icon: "fa-pen-fancy",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            ¿Cómo dibujamos figuras independientes o trazamos patrones desconectados sin que una línea indeseada una los puntos? Para ello controlamos el estado del lápiz con <code>penup()</code> y <code>pendown()</code>.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4">
              <h5 class="text-blue-400 font-bold text-xs uppercase mb-2 flex items-center gap-2">
                <i class="fas fa-hand-paper"></i> tortuga.penup() (o up())
              </h5>
              <p class="text-xs text-gray-300 leading-relaxed">
                Levanta el lápiz de la hoja. Cualquier desplazamiento posterior cambiará la ubicación <code>(x, y)</code> de la tortuga sin rayar ni manchar el papel.
              </p>
            </div>
            <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4">
              <h5 class="text-emerald-400 font-bold text-xs uppercase mb-2 flex items-center gap-2">
                <i class="fas fa-pen"></i> tortuga.pendown() (o down())
              </h5>
              <p class="text-xs text-gray-300 leading-relaxed">
                Apoya el lápiz nuevamente sobre el papel. Las siguientes instrucciones <code>forward()</code> volverán a dibujar líneas visibles.
              </p>
            </div>
          </div>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-3 sm:p-4 my-4 code-block-card">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                  <i class="fab fa-python text-sm"></i> Python
                </span>
                <span class="text-[11px] text-gray-500 font-mono">06_cruz_lapiz.py</span>
              </div>
              <button 
                type="button" 
                onclick="window.copyCodeToClipboard(this)" 
                class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                title="Copiar código al portapapeles"
              >
                <i class="fas fa-copy text-xs"></i>
                <span class="text-[11px] font-medium">Copiar</span>
              </button>
            </div>
            <pre class="bg-[#0a0d14] p-3.5 rounded-lg font-mono text-xs text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300">turtle</span>

tortuga = <span class="text-yellow-300">turtle</span>.<span class="text-cyan-300 font-semibold">Turtle</span>()
tortuga.<span class="text-sky-400">pensize</span>(<span class="text-amber-300">4</span>)

<span class="text-gray-500 italic"># Trazo 1: Barra horizontal de la cruz</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">60</span>)
tortuga.<span class="text-sky-400">backward</span>(<span class="text-amber-300">120</span>)

<span class="text-gray-500 italic"># Regresar al centro sin dibujar</span>
tortuga.<span class="text-sky-400">penup</span>()
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">60</span>)
tortuga.<span class="text-sky-400">left</span>(<span class="text-amber-300">90</span>)
tortuga.<span class="text-sky-400">pendown</span>()

<span class="text-gray-500 italic"># Trazo 2: Barra vertical de la cruz</span>
tortuga.<span class="text-sky-400">forward</span>(<span class="text-amber-300">60</span>)
tortuga.<span class="text-sky-400">backward</span>(<span class="text-amber-300">120</span>)

<span class="text-yellow-300">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
          </div>
        `
      },
      {
        id: "sec-turtle-reto-rubik",
        title: "7. Reto Integrador: Cubo rubik",
        shortTitle: "Reto: Cubo rubik",
        icon: "fa-cube",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Consolidamos todo lo aprendido en este tema construyendo con <strong>turtle</strong> un <strong>Cubo Rubik en perspectiva 3D</strong> que exhibe sus <strong>tres caras visibles</strong> (<strong>Superior</strong>, <strong>Izquierda</strong> y <strong>Derecha</strong>), donde <strong>cada celda pequeña cuenta con los colores exactos del cubo desordenado</strong> (rojo, azul, naranja, blanco, amarillo y verde).
          </p>

          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
            <h4 class="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-cubes"></i> Estructura del Programa: Silueta y Coloreado Celda por Celda
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              El programa se desarrolla en dos fases puramente secuenciales:
              <br><br>
              <strong>1. Silueta del cubo:</strong> La tortuga parte del vértice inicial trazando todas las aristas exteriores y de unión central del cubo mediante giros precisos (<code>left</code> y <code>right</code> de 30°, 60° y 120°) y avances de <code>forward(90)</code>.
              <br><br>
              <strong>2. Celdas una por una para cambiar su color:</strong> A continuación, la tortuga visita secuencialmente cada una de las <strong>27 celdas</strong> del cubo, aplicando <code>t.fillcolor("color")</code>, <code>t.begin_fill()</code>, recorriendo los lados de cada celda con <code>forward(30)</code> y cerrando con <code>t.end_fill()</code>, para luego desplazarse con <code>backward(30)</code> o avances relativos hacia la siguiente celda.
            </p>
          </div>

          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4 my-4">
            <h4 class="text-amber-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-brain"></i> Preguntas de Reflexión (¡Responde mentalmente antes de codificar!)
            </h4>
            <ol class="list-decimal list-inside text-xs text-gray-300 space-y-2 leading-relaxed">
              <li><strong>Estructura secuencial continua:</strong> ¿Por qué trazar primero la silueta completa del cubo nos ayuda a verificar la perspectiva isométrica antes de comenzar a colorear las 27 celdas?</li>
              <li><strong>Navegación con forward y backward:</strong> Al terminar de rellenar una celda con <code>end_fill()</code>, ¿por qué es útil retroceder con <code>backward(30)</code> para quedar en la arista de referencia y dirigirse a la siguiente celda?</li>
              <li><strong>Uso de fillcolor y bloques begin_fill / end_fill:</strong> ¿Cómo interactúa <code>fillcolor()</code> con cada bloque de <code>begin_fill()</code> y <code>end_fill()</code> para garantizar que cada celda tenga exactamente su color correspondiente?</li>
            </ol>
          </div>

          <details class="group bg-[#10141d] border border-emerald-500/30 rounded-xl p-4 my-4">
            <summary class="font-semibold text-sm text-emerald-400 cursor-pointer flex items-center justify-between list-none">
              <span class="flex items-center gap-2"><i class="fas fa-code"></i> Ver Código de Solución Paso a Paso (Cubo rubik 3D: 3 Caras)</span>
              <span class="text-xs text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="mt-4 pt-3 border-t border-gray-800">
              <p class="text-xs text-gray-300 mb-3">
                A continuación tienes la solución completa comentada paso a paso para construir el Cubo Rubik 3D con su silueta y sus 27 celdas coloreadas una por una:
              </p>

              <div class="bg-[#0b0e14] border border-gray-800 rounded-xl p-3 sm:p-4 my-2 code-block-card">
                <div class="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                      <i class="fab fa-python text-sm"></i> Python
                    </span>
                    <span class="text-[11px] text-gray-500 font-mono">07_cubo_rubik_3d.py</span>
                  </div>
                  <button 
                    type="button" 
                    onclick="window.copyCodeToClipboard(this)" 
                    class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-300 hover:text-white bg-[#1e2430] hover:bg-gray-700/80 border border-gray-700/70 hover:border-gray-600 rounded-md transition cursor-pointer shadow-sm"
                    title="Copiar solución completa al portapapeles"
                  >
                    <i class="fas fa-copy text-xs"></i>
                    <span class="text-[11px] font-medium">Copiar Solución</span>
                  </button>
                </div>
                <pre class="bg-[#07090e] p-3.5 rounded-lg font-mono text-[11px] text-gray-200 overflow-x-auto border border-gray-800/80 leading-relaxed"><code><span class="text-purple-400 font-semibold">import</span> <span class="text-yellow-300 font-semibold">turtle</span>

<span class="text-gray-500 italic"># Configuración inicial de la tortuga</span>
t = <span class="text-yellow-300 font-semibold">turtle</span>.<span class="text-yellow-300 font-semibold">Turtle</span>()
t.<span class="text-sky-400">speed</span>(<span class="text-amber-300">20</span>)
t.<span class="text-sky-400">pensize</span>(<span class="text-amber-300">2</span>)

<span class="text-gray-500 italic"># ========================================================</span>
<span class="text-gray-500 italic"># 1. Silueta tridimensional del cubo</span>
<span class="text-gray-500 italic"># ========================================================</span>
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)  
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>) 
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">90</span>)

<span class="text-gray-500 italic"># ========================================================</span>
<span class="text-gray-500 italic"># 2. Celdas una por una para cambiar su color (27 celdas)</span>
<span class="text-gray-500 italic"># ========================================================</span>
<span class="text-gray-500 italic"># Celda 1</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)   
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 2</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"red"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">180</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)   
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>) 
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 3</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"blue"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">180</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)   
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>) 
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 4</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 5</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"yellow"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 6</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 7</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">60</span>) 

<span class="text-gray-500 italic"># Celda 8</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"red"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 9</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)

<span class="text-gray-500 italic"># Celda 10</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">180</span>)

<span class="text-gray-500 italic"># Celda 11</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 12</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)

<span class="text-gray-500 italic"># Celda 13</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"yellow"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()

<span class="text-gray-500 italic"># Celda 14</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 15</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">180</span>)

<span class="text-gray-500 italic"># Celda 16</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"blue"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 17</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 18</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"yellow"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 19</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"blue"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 20</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 21</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"green"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 22</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"red"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 23</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"orange"</span>) 
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()  
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 24</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"blue"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)

<span class="text-gray-500 italic"># Celda 25</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"yellow"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()
t.<span class="text-sky-400">backward</span>(<span class="text-amber-300">60</span>)

<span class="text-gray-500 italic"># Celda 26</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"white"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">left</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()

<span class="text-gray-500 italic"># Celda 27</span>
t.<span class="text-sky-400">fillcolor</span>(<span class="text-emerald-300">"red"</span>)
t.<span class="text-sky-400">begin_fill</span>()
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">120</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">right</span>(<span class="text-amber-300">60</span>)
t.<span class="text-sky-400">forward</span>(<span class="text-amber-300">30</span>)
t.<span class="text-sky-400">end_fill</span>()

t.<span class="text-sky-400">hideturtle</span>()
<span class="text-yellow-300 font-semibold">turtle</span>.<span class="text-sky-400">done</span>()</code></pre>
              </div>

              <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
                <table class="w-full text-xs text-left complexity-table">
                  <thead>
                    <tr>
                      <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Fase</th>
                      <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Descripción</th>
                      <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Comandos Principales</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-800/60">
                    <tr>
                      <td class="font-bold text-sky-400 py-2.5 px-3">Fase 1</td>
                      <td class="py-2.5 px-3">Silueta del cubo</td>
                      <td class="py-2.5 px-3">Trazo de las aristas exteriores e internas con <code>forward(90)</code> y giros de 30°, 60° y 120°.</td>
                    </tr>
                    <tr>
                      <td class="font-bold text-emerald-400 py-2.5 px-3">Fase 2</td>
                      <td class="py-2.5 px-3">Coloreado de las 27 celdas</td>
                      <td class="py-2.5 px-3">Relleno secuencial de cada celda con <code>fillcolor()</code>, <code>begin_fill()</code>, lados de 30 px, <code>end_fill()</code> y <code>backward(30)</code>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        `
      }
    ]
  };
}
