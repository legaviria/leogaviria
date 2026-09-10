/**
 * CONTENIDO EDUCATIVO DETALLADO: CONCEPTOS BÁSICOS DE ALGORITMOS Y PROGRAMACIÓN
 * Unidad 01 - Fundamentos de la Programación
 * Prof. Leo Gaviria - Programación
 */

export const CONCEPTOS_BASICOS_DATA = {
  id: "prog-conceptos-basicos",
  title: "1.1 Conceptos básicos",
  subtitle: "Definición formal de algoritmos, ciclo de resolución de problemas, paradigmas, tipos de lenguajes y modelo Entrada-Proceso-Salida.",
  unit: 1,
  unitTitle: "Unidad 01: Fundamentos de la programación",
  week: 1,
  weekTitle: "Unidad 01: Fundamentos de la programación",
  difficulty: "Fácil",
  category: "Fundamentos de la Programación",
  timeEstimate: "30 minutos",
  badges: [
    { text: "Unidad 01", type: "neutral" },
    { text: "Fácil", type: "easy" },
    { text: "Simuladores", type: "teal" },
    { text: "Paradigmas", type: "purple" },
    { text: "Modelo IPO", type: "blue" }
  ],
  sections: [
    {
      id: "que-es-algoritmo",
      title: "1. ¿Qué es un Algoritmo?",
      shortTitle: "¿Qué es un algoritmo?",
      icon: "fa-terminal",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Un <strong>algoritmo</strong> es una secuencia ordenada, finita y no ambigua de pasos que toma datos de entrada (<em>inputs</em>), realiza una serie de procesos o cálculos, y entrega un resultado de salida (<em>output</em>).
        </p>

        <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
          <table class="w-full text-xs text-left complexity-table">
            <thead>
              <tr>
                <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Fase</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Función Principal</th>
                <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ejemplo Práctico</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-800/60">
              <tr>
                <td class="font-bold text-sky-400 py-2.5 px-3">Entrada (Input)</td>
                <td class="py-2.5 px-3">Recopilación de los datos necesarios del usuario o sistema.</td>
                <td class="py-2.5 px-3"><code class="bg-[#10141d] px-2 py-0.5 rounded text-emerald-400 font-mono">Recibir num1 y num2</code></td>
              </tr>
              <tr>
                <td class="font-bold text-amber-400 py-2.5 px-3">Proceso</td>
                <td class="py-2.5 px-3">Operaciones aritméticas, evaluaciones lógicas y transformaciones.</td>
                <td class="py-2.5 px-3"><code class="bg-[#10141d] px-2 py-0.5 rounded text-amber-300 font-mono">promedio = (num1 + num2) / 2</code></td>
              </tr>
              <tr>
                <td class="font-bold text-emerald-400 py-2.5 px-3">Salida (Output)</td>
                <td class="py-2.5 px-3">Presentación o retorno del resultado final obtenido.</td>
                <td class="py-2.5 px-3"><code class="bg-[#10141d] px-2 py-0.5 rounded text-sky-300 font-mono">Mostrar promedio</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulador Interactivo de Instrucciones Secuenciales (Robot)",
          description: "Experimenta de primera mano cómo una computadora ejecuta órdenes secuenciales precisas. Programa las acciones de un robot móvil (avanzar, girar, recoger) y observa cómo sigue rigurosamente cada instrucción:",
          widget: {
            file: "widgets/programacion/u01_robot_simulador.html",
            title: "Simulador Interactivo de Instrucciones Secuenciales (Robot)",
            height: "520px"
          }
        },
        {
          category: "practica",
          title: "Ordenar Pasos de Resolución de Problemas",
          description: "Pon a prueba tu comprensión arrastrando y ordenando cronológicamente las fases del ciclo para resolver problemas computacionales cotidianos:",
          widget: {
            file: "widgets/programacion/u01_ejercicio1_ordenar_pasos.html",
            title: "Ejercicio: Ordenar Pasos de Resolución de Problemas",
            height: "450px"
          }
        }
      ]
    },
    {
      id: "que-es-programacion",
      title: "2. ¿Qué es Programación y Selección de Lenguajes?",
      shortTitle: "Programación y lenguajes",
      icon: "fa-code",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          La <strong>programación</strong> es el proceso de diseñar, escribir, probar y mantener las instrucciones necesarias para que una computadora ejecute tareas específicas o resuelva problemas de forma autónoma. Con la programación podemos hacer realidad una idea que puede ser muy difícil o tardada de solucionar a mano.
        </p>

        <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
          <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-microchip"></i> ¿Qué tipos de problemas puede resolver una computadora?
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans">
            Una gran cantidad de problemas pueden ser resueltos utilizando programación; sin embargo, los problemas deben ser <strong>cuantitativos</strong> o traducibles a números, variables y ecuaciones. Problemas cualitativos subjetivos o con factores no cuantificables son difíciles de modelar matemáticamente en la máquina.
          </p>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Explorador de Paradigmas de Programación",
          description: "Descubre los diferentes enfoques metodológicos para estructurar y modelar soluciones de software (Imperativo, Orientado a Objetos, Funcional):",
          widget: {
            file: "widgets/programacion/u01_paradigmas_interactivos.html",
            title: "Paradigmas de Programación Interactivos",
            height: "500px"
          }
        }
      ]
    },
    {
      id: "tipos-lenguajes",
      title: "3. Clasificación de Lenguajes de Programación",
      shortTitle: "Tipos de lenguajes",
      icon: "fa-layer-group",
      contentHtml: `
        <p class="text-sm text-gray-300 leading-relaxed mb-3">
          Los lenguajes se clasifican principalmente según su nivel de abstracción respecto al hardware del procesador:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div class="bg-[#121622] border border-gray-800 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">Bajo Nivel</span>
              <h4 class="text-white font-bold text-sm mt-2 mb-1">Código Máquina</h4>
              <p class="text-xs text-gray-400 leading-relaxed">Cadenas binarias puras (<code>0</code> y <code>1</code>) que la CPU interpreta directamente en circuitos lógicos.</p>
            </div>
            <div class="mt-3 pt-2 border-t border-gray-800/80 text-[11px] text-gray-500 font-mono">10110000 01100001</div>
          </div>

          <div class="bg-[#121622] border border-gray-800 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Nivel Medio</span>
              <h4 class="text-white font-bold text-sm mt-2 mb-1">Ensamblador (ASM)</h4>
              <p class="text-xs text-gray-400 leading-relaxed">Utiliza mnemónicos directos para manipular registros y memoria (ej. <code>MOV</code>, <code>ADD</code>, <code>JMP</code>).</p>
            </div>
            <div class="mt-3 pt-2 border-t border-gray-800/80 text-[11px] text-gray-500 font-mono">MOV AX, [BX+4]</div>
          </div>

          <div class="bg-[#121622] border border-gray-800 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Alto Nivel</span>
              <h4 class="text-white font-bold text-sm mt-2 mb-1">Compilados e Interpretados</h4>
              <p class="text-xs text-gray-400 leading-relaxed">Sintaxis abstracta y cercana al lenguaje humano estructurado (Python, C++, Java, Rust).</p>
            </div>
            <div class="mt-3 pt-2 border-t border-gray-800/80 text-[11px] text-gray-500 font-mono">print("Hola Mundo")</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div class="bg-[#101915] border border-emerald-900/60 rounded-xl p-4">
            <h5 class="text-emerald-400 font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
              <i class="fas fa-gears"></i> Lenguajes Compilados (ej. C, C++, Rust)
            </h5>
            <p class="text-xs text-gray-300 leading-relaxed">
              El código fuente se traduce <strong>por completo</strong> a código binario nativo antes de su ejecución. Generan un archivo binario ejecutable independiente de altísimo rendimiento computacional.
            </p>
          </div>
          <div class="bg-[#10141f] border border-sky-900/60 rounded-xl p-4">
            <h5 class="text-sky-400 font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
              <i class="fas fa-play"></i> Lenguajes Interpretados (ej. Python, JavaScript)
            </h5>
            <p class="text-xs text-gray-300 leading-relaxed">
              Un programa intermediario (el <em>intérprete</em>) lee, traduce y ejecuta las instrucciones <strong>línea por línea</strong> en tiempo real. Proporcionan mayor dinamismo y facilidad de experimentación interactiva.
            </p>
          </div>
        </div>

        <div class="bg-[#191522] border border-purple-500/30 rounded-xl p-4 my-4">
          <h4 class="text-purple-300 font-bold text-sm mb-1.5 flex items-center gap-2">
            <i class="fas fa-star text-amber-400"></i> Idea Principal & Regla de Oro
          </h4>
          <p class="text-xs text-gray-200 leading-relaxed font-sans mb-2">
            <strong>IDEA PRINCIPAL:</strong> Aprender la sintaxis de un lenguaje de programación es la parte más sencilla de todo el proceso, pero suele confundirse con el objetivo central. Con una adecuada actitud y compromiso cualquiera puede aprender a programar; el verdadero arte consiste en cultivar el pensamiento lógico computacional.
          </p>
          <div class="p-2.5 rounded-lg bg-[#100d17] border border-purple-500/20 text-xs font-mono text-purple-200">
            🎯 <strong>REGLA DE ORO:</strong> Comprensión de lectura, práctica deliberada y lectura constante de código.
          </div>
        </div>
      `,
      interactive: [
        {
          category: "practica",
          title: "Clasificación de Lenguajes Compilados vs. Interpretados",
          description: "Clasifica los distintos lenguajes de programación según su mecanismo de traducción y nivel de abstracción con respecto a la máquina:",
          widget: {
            file: "widgets/programacion/u01_ejercicio2_clasificacion_lenguajes.html",
            title: "Ejercicio: Clasificación Interactiva de Lenguajes",
            height: "395px"
          }
        }
      ]
    },
    {
      id: "resolucion-problemas",
      title: "4. Resolver un Problema en Programación: El Ciclo Metodológico",
      shortTitle: "Ciclo de resolución",
      icon: "fa-lightbulb",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Resolver un problema no consiste en sentarse a teclear código de inmediato a ciegas. Los programadores profesionales siguen un <strong>ciclo ordenado en 4 fases fundamentales</strong> que evita frustraciones y reduce drásticamente el tiempo de desarrollo:
        </p>

        <ol class="space-y-3 mb-6 text-sm text-gray-300 list-none pl-0">
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">1</span>
            <div><strong>Análisis del Problema:</strong> Identificar con exactitud qué datos se reciben de entrada (inputs), cuáles son las restricciones y cuál es el resultado esperado de salida (outputs).</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">2</span>
            <div><strong>Diseño Algorítmico:</strong> Elaborar la secuencia lógica de pasos mediante herramientas conceptuales independientes del lenguaje: <em>Pseudocódigo</em> o <em>Diagramas de Flujo</em>.</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">3</span>
            <div><strong>Codificación (Implementación):</strong> Traducir la lógica diseñada a la sintaxis concreta de un lenguaje de programación específico (Python, C++, etc.).</div>
          </li>
          <li class="flex items-start gap-3 bg-[#121622] p-3 rounded-lg border border-gray-800">
            <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">4</span>
            <div><strong>Pruebas y Depuración (Debugging):</strong> Ejecutar el programa con casos de prueba variados, verificar casos límite y corregir errores sintácticos o de lógica.</div>
          </li>
        </ol>
      `,
      interactive: [
        {
          category: "explora",
          title: "Fases Metodológicas de Resolución de Problemas",
          description: "Visualizador interactivo de las cuatro etapas canónicas para resolver problemas computacionales ordenadamente:",
          widget: {
            file: "widgets/programacion/u01_resolucion_problemas.html",
            title: "Pasos Metodológicos para la Resolución de Problemas",
            height: "240px"
          }
        }
      ]
    },
    {
      id: "modelo-ipo-calculadora",
      title: "5. Estructura Estándar: Entrada - Proceso - Salida",
      shortTitle: "Modelo Entrada–Proceso–Salida",
      icon: "fa-calculator",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Para consolidar la estructura canónica de los algoritmos, examinemos el cálculo del promedio aritmético de dos calificaciones académicas:
        </p>
        <ul class="space-y-2 text-xs text-gray-300 list-disc pl-5 mb-5 font-sans">
          <li><strong>Entrada:</strong> Se leen dos números decimales, <code class="text-sky-300 font-mono">N1</code> y <code class="text-sky-300 font-mono">N2</code>.</li>
          <li><strong>Proceso:</strong> Se aplica la fórmula matemática <code class="text-amber-300 font-mono">promedio = (N1 + N2) / 2</code>.</li>
          <li><strong>Salida:</strong> Se imprime o retorna el resultado con precisión decimal.</li>
        </ul>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulador Calculadora: Entrada - Proceso - Salida",
          description: "Experimenta en tiempo real la transformación de datos paso a paso en el cálculo del promedio aritmético bajo el modelo IPO:",
          widget: {
            file: "widgets/programacion/u01_calculadora_algoritmo.html",
            title: "Simulador Calculadora: Entrada - Proceso - Salida",
            height: "280px"
          }
        },
        {
          category: "practica",
          title: "Identificar Entrada, Proceso y Salida",
          description: "Arrastra o selecciona el componente adecuado para completar el esquema canónico del algoritmo de promedio:",
          widget: {
            file: "widgets/programacion/u01_ejercicio5_rellenar_espacios.html",
            title: "Ejercicio: Rellenar Espacios Vacíos",
            height: "320px"
          }
        }
      ]
    }
  ]
};
