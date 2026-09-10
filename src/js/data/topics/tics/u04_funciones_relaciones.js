/**
 * UNIDAD 04: FUNCIONES, RELACIONES Y ÓRDENES PARCIALES
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

export const TICS_U04_TOPICS = {
  "tics-u04-t01-propiedades-funciones": {
    id: "tics-u04-t01-propiedades-funciones",
    title: "4.1 Propiedades de las funciones",
    subtitle: "Dominio, codominio, imagen, inyectividad (1 a 1), sobreyectividad (sobre) y biyectividad con criterio de invertibilidad.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Inyectiva", type: "teal" },
      { text: "Sobreyectiva", type: "sky" },
      { text: "Biyectiva", type: "purple" }
    ],
    sections: [
      {
        id: "definicion-propiedades-funciones",
        title: "1. ¿Cómo se clasifican las funciones?",
        shortTitle: "¿En qué consiste?",
        icon: "fa-arrows-to-dot",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>función</strong> <code>f: A &rarr; B</code> es una regla de correspondencia que asigna a cada elemento <code>x ∈ A</code> (dominio) <strong>exactamente un único elemento</strong> <code>y ∈ B</code> (codominio). Las propiedades fundamentales que determinan su comportamiento son:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div class="subcard-box p-3 border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1 font-sans">Inyectiva (1 a 1):</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Elementos distintos del dominio tienen imágenes distintas:
                <code>f(a) = f(b) &rArr; a = b</code>.
              </p>
            </div>
            <div class="subcard-box p-3 border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1 font-sans">Sobreyectiva (Sobre):</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Todo elemento del codominio es imagen de al menos un elemento del dominio:
                <code>Im(f) = B</code>.
              </p>
            </div>
            <div class="subcard-box p-3 border-purple-500/30">
              <span class="text-purple-400 font-bold block mb-1 font-sans">Biyectiva:</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Es inyectiva y sobreyectiva a la vez. Es la <strong>condición necesaria y suficiente para que exista función inversa f⁻¹</strong>.
              </p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Funciones entre Conjuntos",
            description: "Modifica las flechas de asignación entre el dominio A y codominio B para observar en tiempo real la verificación automática de inyectividad, sobreyectividad y biyectividad:",
            widget: {
              file: "widgets/tics/u04_propiedades_funciones.html",
              title: "Simulador de Propiedades de Funciones",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t02-operaciones-funciones": {
    id: "tics-u04-t02-operaciones-funciones",
    title: "4.2 Operaciones con funciones",
    subtitle: "Aritmética de funciones, composición (g ∘ f)(x) = g(f(x)), no conmutatividad y cálculo de funciones inversas.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Composición g ∘ f", type: "teal" },
      { text: "Función Inversa", type: "blue" }
    ],
    sections: [
      {
        id: "composicion-funciones-pipeline",
        title: "1. Composición de Funciones como Pipeline de Datos",
        shortTitle: "Composición de funciones",
        icon: "fa-route",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Dadas dos funciones <code>f: A &rarr; B</code> y <code>g: B &rarr; C</code>, la <strong>composición</strong> <code>g ∘ f: A &rarr; C</code> aplica primero la función f y luego la función g sobre el resultado obtenido:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            (g ∘ f)(x) = g(f(x))
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
            En computación, este concepto equivale al <strong>encadenamiento de funciones</strong> (pipelines en programación funcional o el operador <code>|</code> en pipes de Unix/Linux).
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Composición de Funciones (A → B → C)",
            description: "Selecciona valores de entrada en A y observa la animación del flujo de evaluación encadenada a través de B hasta C:",
            widget: {
              file: "widgets/tics/u04_composicion_funciones.html",
              title: "Composición de Funciones",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t03-propiedades-relaciones": {
    id: "tics-u04-t03-propiedades-relaciones",
    title: "4.3 Propiedades de las relaciones",
    subtitle: "Relaciones binarias R ⊆ A × A, representación matricial y grafo dirigido, y verificación de propiedades algebraicas.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Matriz Booleana", type: "teal" },
      { text: "Dígrafos", type: "amber" }
    ],
    sections: [
      {
        id: "propiedades-relaciones-binarias",
        title: "1. Propiedades Fundamentales de una Relación",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-network-wired",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una relación binaria <code>R</code> sobre un conjunto <code>A</code> es un subconjunto del producto cartesiano: <code>R ⊆ A × A</code>. Las cuatro propiedades esenciales que determinan su estructura algebraica son:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs my-4">
            <div class="subcard-box p-3 border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1 font-sans">1. Reflexiva:</span>
              <p class="text-gray-300 font-sans">Todo elemento está relacionado consigo mismo: <code>∀ x ∈ A, (x, x) ∈ R</code>.</p>
            </div>
            <div class="subcard-box p-3 border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1 font-sans">2. Simétrica:</span>
              <p class="text-gray-300 font-sans">Si x se relaciona con y, y se relaciona con x: <code>(x, y) ∈ R ⇒ (y, x) ∈ R</code>.</p>
            </div>
            <div class="subcard-box p-3 border-amber-500/30">
              <span class="text-amber-400 font-bold block mb-1 font-sans">3. Antisimétrica:</span>
              <p class="text-gray-300 font-sans">No hay reciprocidad en elementos distintos: <code>(x, y) ∈ R ∧ (y, x) ∈ R ⇒ x = y</code>.</p>
            </div>
            <div class="subcard-box p-3 border-purple-500/30">
              <span class="text-purple-400 font-bold block mb-1 font-sans">4. Transitiva:</span>
              <p class="text-gray-300 font-sans">Los caminos de longitud 2 se atajan: <code>(x, y) ∈ R ∧ (y, z) ∈ R ⇒ (x, z) ∈ R</code>.</p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Analizador Interactivo de Relaciones (Matriz Booleana)",
            description: "Activa o desactiva celdas en la matriz booleana 4x4 o selecciona preajustes para observar el diagnóstico instantáneo de sus propiedades algebraicas:",
            widget: {
              file: "widgets/tics/u04_analizador_relaciones.html",
              title: "Analizador de Relaciones",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t04-operaciones-relaciones": {
    id: "tics-u04-t04-operaciones-relaciones",
    title: "4.4 Operaciones con relaciones",
    subtitle: "Unión, intersección, relación inversa R^-1, composición S ∘ R y su cálculo computacional con producto booleano de matrices.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Relación Inversa", type: "teal" },
      { text: "Producto Booleano", type: "blue" }
    ],
    sections: [
      {
        id: "operaciones-relaciones-algebra",
        title: "1. Operaciones y Álgebra de Relaciones",
        shortTitle: "Operaciones con relaciones",
        icon: "fa-code-merge",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Al igual que los conjuntos, las relaciones pueden combinarse mediante unión, intersección y complemento. Además, poseen dos operaciones canónicas exclusivas:
          </p>

          <div class="space-y-2 font-mono text-xs my-4">
            <div class="p-3 rounded bg-[#10141d] border border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1">Relación Inversa (R⁻¹):</span>
              <p class="text-gray-300 font-sans">Se invierte la dirección de cada par: <code>(b, a) ∈ R⁻¹ &iff; (a, b) ∈ R</code>. En términos matriciales corresponde a la traspuesta: <code>M_{R⁻¹} = (M_R)ᵀ</code>.</p>
            </div>
            <div class="p-3 rounded bg-[#10141d] border border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1">Composición de Relaciones (S ∘ R):</span>
              <p class="text-gray-300 font-sans">Existe un intermediario común: <code>(a, c) ∈ S ∘ R &iff; ∃ b ∈ B, ((a, b) ∈ R ∧ (b, c) ∈ S)</code>. Se calcula con el producto booleano de matrices <code>M_{S ∘ R} = M_R ⊙ M_S</code>.</p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Operaciones con Relaciones",
            description: "Calcula en tiempo real la inversa R^-1, la composición S ∘ R, la unión y la intersección de relaciones discretas:",
            widget: {
              file: "widgets/tics/u04_operaciones_relaciones.html",
              title: "Operaciones con Relaciones",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t05-equivalencia-particiones": {
    id: "tics-u04-t05-equivalencia-particiones",
    title: "4.5 Relaciones de equivalencia y particiones",
    subtitle: "Clases de equivalencia [x], conjunto cociente A/R y el teorema de biyección con particiones del conjunto.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Media",
    category: "Funciones y Relaciones",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Clases de Equivalencia", type: "teal" },
      { text: "Particiones", type: "purple" }
    ],
    sections: [
      {
        id: "teorema-equivalencia-particiones",
        title: "1. Clases de Equivalencia y Partición",
        shortTitle: "¿En qué consiste?",
        icon: "fa-layer-group",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una relación de equivalencia (reflexiva, simétrica y transitiva) modela matemáticamente la noción de que dos objetos son <strong>indistinguibles bajo cierto criterio</strong> (por ejemplo, tener el mismo residuo al dividir entre m).
          </p>

          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            La <strong>clase de equivalencia</strong> de un elemento <code>x</code> se denota <code>[x] = { y ∈ A | (x, y) ∈ R }</code>.
            El <strong>Teorema Fundamental</strong> demuestra que toda relación de equivalencia descompone al conjunto A en bloques disjuntos no vacíos que forman una <strong>partición exacta</strong> de A.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Clases de Equivalencia y Particiones",
            description: "Modifica el módulo m y observa cómo el conjunto de enteros se agrupa visualmente en m particiones disjuntas sin solapamientos:",
            widget: {
              file: "widgets/tics/u04_clases_equivalencia.html",
              title: "Clases de Equivalencia",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u04-t06-ordenes-parciales": {
    id: "tics-u04-t06-ordenes-parciales",
    title: "4.6 Órdenes parciales",
    subtitle: "Conjuntos parcialmente ordenados (Posets), comparabilidad, diagramas de Hasse y elementos maximales y minimales.",
    unit: 4,
    unitTitle: "Unidad 04: Funciones y relaciones",
    week: 4,
    weekTitle: "Unidad 04: Funciones y relaciones",
    difficulty: "Avanzada",
    category: "Funciones y Relaciones",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 04", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Posets", type: "teal" },
      { text: "Diagrama de Hasse", type: "amber" }
    ],
    sections: [
      {
        id: "orden-parcial-hasse",
        title: "1. Órdenes Parciales y Diagramas de Hasse",
        shortTitle: "Diagramas de Hasse",
        icon: "fa-diagram-project",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una relación de <strong>orden parcial</strong> (reflexiva, antisimétrica y transitiva) modela jerarquías donde no necesariamente todos los elementos pueden compararse entre sí (por ejemplo, dependencias de tareas en un proyecto de software o inclusión de subconjuntos).
          </p>

          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4 my-4 font-mono text-xs space-y-2">
            <h4 class="text-amber-400 font-bold uppercase text-sm mb-1">El Diagrama de Hasse:</h4>
            <p class="text-gray-300 font-sans leading-relaxed">
              Es un grafo simplificado que representa el orden parcial eliminando:
              1. Todos los bucles reflexivos <code>(x, x)</code>.
              2. Todas las aristas deducibles por transitividad (si <code>x < y</code> y <code>y < z</code>, se omite <code>x < z</code>).
              3. Las flechas se reemplazan por orientación vertical: el elemento mayor se dibuja arriba del menor.
            </p>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Diagramas de Hasse",
            description: "Explora los diagramas de Hasse para el poset de divisibilidad D(12) y para el poset de inclusión de subconjuntos 𝒫({a, b}):",
            widget: {
              file: "widgets/tics/u04_diagrama_hasse.html",
              title: "Diagrama de Hasse",
              height: "530px"
            }
          },
          {
            category: "practica",
            title: "Reto Integrador de la Unidad 04: Funciones y Relaciones",
            description: "Evalúa tus conocimientos con 5 retos interactivos con puntaje sobre funciones biyectivas, relaciones de equivalencia, particiones y diagramas de Hasse:",
            widget: {
              file: "widgets/tics/u04_reto_relaciones.html",
              title: "Reto Integrador Unidad 04",
              height: "560px"
            }
          }
        ]
      }
    ],
    comprueba: {
      title: "Comprueba: Evaluación de Funciones y Relaciones",
      subtitle: "Evaluación interactiva formativa de la Unidad 04.",
      widget: {
        file: "widgets/tics/u04_reto_relaciones.html",
        title: "Evaluación Unidad 04",
        height: "580px"
      }
    }
  }
};
