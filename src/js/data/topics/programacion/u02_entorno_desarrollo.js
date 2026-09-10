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
  }
};
