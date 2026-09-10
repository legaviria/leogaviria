/**
 * CONTENIDO EDUCATIVO DETALLADO: ALGORITMOS Y SU REPRESENTACIÓN
 * Unidad 01 - Fundamentos de la Programación
 * Prof. Leo Gaviria - Programación
 */

export const REPRESENTACION_ALGORITMOS_DATA = {
  id: "prog-representacion-algoritmos",
  title: "1.2 Algoritmos y su representación",
  subtitle: "Pseudocódigo, estructuras de control básicas, diagramas de flujo ANSI/ISO y depuración paso a paso.",
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
    { text: "Pseudocódigo", type: "sky" },
    { text: "Diagramas ANSI", type: "teal" },
    { text: "Depurador", type: "purple" }
  ],
  sections: [
    {
      id: "pseudocodigo",
      title: "1. ¿Qué es el Pseudocódigo y Estructuras de Control?",
      shortTitle: "Pseudocódigo y control",
      icon: "fa-file-lines",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Un <strong>pseudocódigo</strong> es un lenguaje informal y simplificado que utilizan los programadores para planificar y diseñar algoritmos antes de escribir código real. No es un lenguaje de programación directamente ejecutable por la computadora; está pensado exclusivamente para ser leído y comprendido con facilidad por seres humanos. Mezcla estructuras formales de programación con frases en lenguaje natural (como español o inglés).
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <h4 class="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-list-check"></i> Características Principales
            </h4>
            <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li><strong>Sintaxis flexible:</strong> No se rige por reglas estrictas de puntuación o palabras clave rígidas.</li>
              <li><strong>Independencia del lenguaje:</strong> Un mismo pseudocódigo se puede traducir a C++, Python, Java o cualquier otro lenguaje sin modificar su lógica.</li>
              <li><strong>Enfoque en la lógica:</strong> Permite resolver el problema conceptual sin preocuparse por la sintaxis o los errores de compilación.</li>
            </ul>
          </div>

          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-shield-halved"></i> ¿Por qué debemos usarlo?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li><strong>Aislamiento de errores de lógica:</strong> Si un programa falla, puede ser por sintaxis o por lógica. El pseudocódigo elimina la sintaxis para concentrarse 100% en la lógica resolutiva.</li>
              <li><strong>Comunicación multidisciplinaria:</strong> Permite que analistas de negocio, diseñadores y clientes entiendan la lógica del sistema.</li>
              <li><strong>Documentación viva:</strong> Funciona como un plano arquitectónico reutilizable en cualquier lenguaje futuro.</li>
            </ul>
          </div>
        </div>

        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Todo algoritmo computable puede expresarse combinando únicamente <strong>tres estructuras de control básicas</strong>:
        </p>

        <div class="space-y-4 my-4">
          <!-- 1. Secuencia -->
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-5 h-5 rounded bg-sky-500/20 text-sky-400 font-mono text-xs flex items-center justify-center font-bold">1</span>
              <h4 class="text-sm font-bold text-sky-400">Secuencia (Paso a paso lineal)</h4>
            </div>
            <p class="text-xs text-gray-400 mb-2">Las instrucciones se ejecutan estrictamente una tras otra, en el orden en que están escritas:</p>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-emerald-400 overflow-x-auto border border-gray-800"><code>Escribir "Ingrese el precio del producto:"
Leer precio
calcular IVA = precio * 0.19
calcular total = precio + IVA
Escribir "El total a pagar es:", total</code></pre>
          </div>

          <!-- 2. Condicional -->
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-5 h-5 rounded bg-amber-500/20 text-amber-400 font-mono text-xs flex items-center justify-center font-bold">2</span>
              <h4 class="text-sm font-bold text-amber-400">Decisión o Condicional (Caminos alternativos)</h4>
            </div>
            <p class="text-xs text-gray-400 mb-2">Bifurca el flujo de ejecución evaluando una condición lógica:</p>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-amber-300 overflow-x-auto border border-gray-800"><code>SI saldo_cuenta &gt;= monto_retiro ENTONCES
    saldo_cuenta = saldo_cuenta - monto_retiro
    Escribir "Retiro exitoso"
SINO
    Escribir "Fondos insuficientes"
FIN_SI</code></pre>
          </div>

          <!-- 3. Repetición -->
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-5 h-5 rounded bg-purple-500/20 text-purple-400 font-mono text-xs flex items-center justify-center font-bold">3</span>
              <h4 class="text-sm font-bold text-purple-400">Repetición o Bucle (Iteración)</h4>
            </div>
            <p class="text-xs text-gray-400 mb-2">Ejecuta reiteradamente un bloque mientras se satisfaga una condición:</p>
            <pre class="bg-[#0a0d14] p-3 rounded-lg font-mono text-xs text-purple-300 overflow-x-auto border border-gray-800"><code>intentos = 0
MIENTRAS intentos &lt; 3 Y clave_incorrecta HACER
    Escribir "Ingrese su contraseña:"
    Leer clave
    intentos = intentos + 1
FIN_MIENTRAS</code></pre>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulador de Comandos en Pseudocódigo",
          description: "Explora los comandos estándar utilizados en pseudocódigo y conoce su propósito y sintaxis de aplicación:",
          widget: {
            file: "widgets/programacion/u01_comandos_pseudocodigo.html",
            title: "Comandos Principales de Pseudocódigo",
            height: "520px"
          }
        }
      ]
    },
    {
      id: "ejemplo-pseudocodigo",
      title: "2. Ejemplo Práctico en Pseudocódigo: Determinar Mayoría de Edad",
      shortTitle: "Ejemplo práctico",
      icon: "fa-laptop-code",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Examinemos la solución algorítmica completa en pseudocódigo para resolver el problema clásico de verificar si una persona es mayor de edad:
        </p>

        <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-x-auto my-4 shadow-xl">
          <pre><code>INICIO
    // Entrada: Solicitar y capturar la edad del usuario
    Escribir "Ingresa tu edad:"
    Leer edad
    
    // Proceso y Decisión Condicional
    SI edad &gt;= 18 ENTONCES
        // Salida para camino verdadero
        Escribir "Eres mayor de edad."
    SINO
        // Salida para camino falso
        Escribir "Eres menor de edad."
    FIN_SI
FIN</code></pre>
        </div>

        <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4 my-4">
          <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
            <i class="fas fa-magnifying-glass"></i> Traza de Ejecución
          </h4>
          <p class="text-xs text-gray-300 leading-relaxed font-sans">
            Si el usuario ingresa <code class="text-emerald-400 font-mono">20</code>, la condición <code class="text-amber-300 font-mono">20 &gt;= 18</code> es verdadera, por lo que el programa ejecuta la rama positiva e imprime <em>"Eres mayor de edad."</em> Si ingresa <code class="text-rose-400 font-mono">15</code>, se desvía a la rama <code class="text-rose-400 font-mono">SINO</code> imprimiendo <em>"Eres menor de edad."</em>
          </p>
        </div>
      `,
      interactive: [
        {
          category: "practica",
          title: "Emparejamiento de Fases del Algoritmo",
          description: "Asocia cada bloque o fase del algoritmo de mayoría de edad con su componente lógico correspondiente:",
          widget: {
            file: "widgets/programacion/u01_ejercicio3_emparejamiento_fases.html",
            title: "Ejercicio: Emparejamiento de Fases del Algoritmo",
            height: "360px"
          }
        }
      ]
    },
    {
      id: "diagramas-flujo",
      title: "3. Diagrama de Flujo y Simbología Estándar",
      shortTitle: "Diagramas de flujo",
      icon: "fa-project-diagram",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          Un <strong>diagrama de flujo</strong> es una representación gráfica y visual de un algoritmo que utiliza símbolos geométricos estandarizados (rectángulos, rombos, óvalos, paralelogramos) interconectados por flechas direccionales para ilustrar el flujo paso a paso de la ejecución. A diferencia del pseudocódigo, no emplea texto informal en líneas consecutivas, sino esquemas visuales de alto impacto cognitivo.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <h4 class="text-sky-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-shapes"></i> Características Visuales
            </h4>
            <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li><strong>Simbología estándar ANSI/ISO:</strong> Cada figura geométrica tiene un significado único e inequívoco (inicio/fin, proceso, decisión, entrada/salida).</li>
              <li><strong>Claridad visual inmediata:</strong> Permite rastrear la lógica del algoritmo de un solo vistazo siguiendo las flechas de dirección.</li>
              <li><strong>Independencia tecnológica:</strong> Representa la solución conceptual antes de traducirla a cualquier lenguaje específico.</li>
            </ul>
          </div>

          <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
            <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-bolt"></i> ¿Por qué debemos utilizarlos?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li><strong>Detección rápida de bucles infinitos:</strong> La representación gráfica expone de forma inmediata cuando una ruta carece de salida o una iteración no converge.</li>
              <li><strong>Validación con interesados no técnicos:</strong> Ayuda a que directivos y clientes comprendan la lógica de negocio sin requerir conocimientos técnicos de programación.</li>
              <li><strong>Documentación y auditoría:</strong> Sirve como mapa arquitectónico de procesos complejos para integración y mantenimiento.</li>
            </ul>
          </div>
        </div>
      `,
      interactive: [
        {
          category: "explora",
          title: "Catálogo Interactivo de Símbolos ANSI",
          description: "Conoce cada una de las figuras normativas estándar (ANSI/ISO) y su función en la construcción de diagramas de flujo:",
          widget: {
            file: "widgets/programacion/u01_simbolos_diagrama.html",
            title: "Simbología Estándar de Diagramas de Flujo",
            height: "520px"
          }
        },
        {
          category: "practica",
          title: "Opción Múltiple: Simbología y Conceptos",
          description: "Verifica tu dominio sobre las figuras geométricas canónicas y los conceptos clave de la representación algorítmica:",
          widget: {
            file: "widgets/programacion/u01_ejercicio4_opcion_multiple.html",
            title: "Ejercicio: Opción Múltiple de Algoritmos",
            height: "380px"
          }
        }
      ]
    },
    {
      id: "simulacion-diagrama-flujo",
      title: "4. Simulación y Trazabilidad Visual de Diagramas de Flujo",
      shortTitle: "Simulación de flujo",
      icon: "fa-play-circle",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          A continuación se presenta el diagrama de flujo interactivo correspondiente al problema de la mayoría de edad. Ingresa una edad, presiona <strong>Simular Flujo</strong> y observa cómo la señal se propaga paso a paso iluminando cada nodo y flecha en tiempo real:
        </p>
      `,
      interactive: [
        {
          category: "explora",
          title: "Simulación y Trazabilidad Visual de Diagrama de Flujo",
          description: "Ingresa una edad y observa cómo la señal se propaga paso a paso iluminando cada nodo y flecha en tiempo real según la condición lógica:",
          widget: {
            file: "widgets/programacion/u01_diagrama_flujo_animado.html",
            title: "Simulador Interactivo con Trazado de Flujo (Mayoría de Edad)",
            height: "560px"
          }
        }
      ]
    },
    {
      id: "problemas-resueltos",
      title: "5. Problemas Resueltos: Pseudocódigo vs Diagrama de Flujo y Depurador",
      shortTitle: "Problemas resueltos",
      icon: "fa-code-compare",
      contentHtml: `
        <p class="text-base text-gray-300 leading-relaxed mb-4">
          La mejor manera de afianzar el dominio algorítmico es comparar en paralelo cómo se modelan formalmente problemas típicos mediante texto estructurado (pseudocódigo) frente a geometría conectada (diagramas de flujo).
        </p>
        <p class="text-xs text-gray-400 leading-relaxed">
          Los cuatro problemas clásicos de formación computacional incluyen:
        </p>
        <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 my-3 font-sans">
          <li><strong>Problema 1 (Suma):</strong> Estructura puramente secuencial y cálculo directo de la suma de dos números enteros.</li>
          <li><strong>Problema 2 (Mayor de dos números):</strong> Estructura condicional alternativa doble (<code class="text-amber-300">SI-SINO</code>) para determinar el valor máximo.</li>
          <li><strong>Problema 3 (Contador 1 a N):</strong> Estructura repetitiva (<code class="text-purple-300">MIENTRAS</code>) con actualización incremental de variable iterativa.</li>
          <li><strong>Problema 4 (Tabla de multiplicar):</strong> Estructura de ciclo condicionado para generar e imprimir productos sucesivos.</li>
        </ul>
      `,
      interactive: [
        {
          category: "explora",
          title: "Depurador Visual de Problemas Resueltos",
          description: "Compara en paralelo pseudocódigo frente a flujograma e interactúa con el depurador visual paso a paso para inspeccionar el estado de memoria en cuatro algoritmos resueltos:",
          widget: {
            file: "widgets/programacion/u01_problemas_resueltos_debugger.html",
            title: "Problemas Resueltos y Depurador Visual Interactivo",
            height: "640px"
          }
        }
      ]
    },
    {
      id: "comparativa-representaciones",
      title: "6. ¿Cuándo usar Pseudocódigo y cuándo Diagramas de Flujo?",
      shortTitle: "Cuándo usar cada uno",
      icon: "fa-scale-balanced",
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <!-- Pseudocódigo -->
          <div class="bg-[#101915] border border-emerald-900/60 rounded-xl p-5">
            <h4 class="text-emerald-400 font-semibold text-sm mb-3 flex items-center gap-2">
              <i class="fas fa-file-code"></i> ¿Cuándo preferir Pseudocódigo?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2.5">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Algoritmos complejos con muchas líneas:</strong> Se redacta y edita mucho más rápido en cualquier editor de texto simple.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Estructuras de datos intrincadas:</strong> Expresar arreglos multidimensionales o llamadas a funciones es más natural en texto.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">•</span>
                <span><strong>Transición inmediata al código:</strong> La distancia sintáctica entre pseudocódigo y código real (C++, Python) es mínima.</span>
              </li>
            </ul>
          </div>

          <!-- Diagrama de Flujo -->
          <div class="bg-[#141923] border border-sky-900/60 rounded-xl p-5">
            <h4 class="text-sky-400 font-semibold text-sm mb-3 flex items-center gap-2">
              <i class="fas fa-diagram-project"></i> ¿Cuándo preferir Diagramas de Flujo?
            </h4>
            <ul class="text-xs text-gray-300 space-y-2.5">
              <li class="flex items-start gap-2">
                <span class="text-sky-400 font-bold">•</span>
                <span><strong>Procesos con bifurcaciones visuales claras:</strong> Excelente para flujos de decisiones condicionales y máquinas de estados.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-sky-400 font-bold">•</span>
                <span><strong>Exposiciones y reuniones multidisciplinarias:</strong> Permite que personas de diversas áreas comprendan el flujo sin intimidarse por texto técnico.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-sky-400 font-bold">•</span>
                <span><strong>Etapa de diseño preliminar:</strong> Ideal para maquetar el recorrido global antes de descender al detalle fino de las variables.</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ]
};
