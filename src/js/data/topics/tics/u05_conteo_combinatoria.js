/**
 * UNIDAD 05: PRINCIPIOS FUNDAMENTALES DEL CONTEO Y COMBINATORIA
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

export const TICS_U05_TOPICS = {
  "tics-u05-t01-reglas-suma-producto-palomar": {
    id: "tics-u05-t01-reglas-suma-producto-palomar",
    title: "5.1 Reglas de la suma y el producto. Principio del palomar",
    subtitle: "Regla aditiva, regla multiplicativa, diagramas de árbol y Principio de las Casillas (Dirichlet) con aplicaciones en informática.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Fácil",
    category: "Principios de Conteo",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Regla del Producto", type: "teal" },
      { text: "Principio del Palomar", type: "amber" }
    ],
    sections: [
      {
        id: "reglas-conteo-palomar",
        title: "1. Principios Fundamentales del Conteo",
        shortTitle: "¿En qué consiste?",
        icon: "fa-calculator",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El conteo sistemático es la base para el <strong>análisis de complejidad temporal y espacial</strong> de algoritmos, así como para la criptografía y las redes de datos. Dos axiomas fundamentales rigen este dominio:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div class="subcard-box p-4 border-teal-500/30">
              <span class="text-teal-400 font-bold block text-sm mb-1 font-sans">1. Regla de la Suma:</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Si una tarea puede realizarse de <code>n_1</code> formas o bien de <code>n_2</code> formas mutuamente excluyentes (disjuntas), existen <code>n_1 + n_2</code> maneras totales de realizarla.
              </p>
            </div>
            <div class="subcard-box p-4 border-sky-500/30">
              <span class="text-sky-400 font-bold block text-sm mb-1 font-sans">2. Regla del Producto:</span>
              <p class="text-gray-300 font-sans leading-relaxed">
                Si un procedimiento se compone de una secuencia de dos etapas independientes con <code>n_1</code> y <code>n_2</code> opciones respectivamente, existen <code>n_1 × n_2</code> resultados posibles.
              </p>
            </div>
          </div>

          <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4 my-4">
            <h4 class="text-amber-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-box-open"></i> El Principio del Palomar (Dirichlet)
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              Si se distribuyen <code>n</code> palomas (objetos) en <code>k</code> casillas (nidos) y <code>n > k</code>, entonces <strong>al menos una casilla debe contener 2 o más palomas</strong>. En su versión generalizada, al menos una casilla contiene <code>⌈n/k⌉</code> objetos. Es la demostración formal de por qué ocurren colisiones en funciones Hash.
            </p>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Árbol de Decisiones y Principio del Palomar",
            description: "Genera árboles de decisiones multinivel aplicando la regla del producto y experimenta con el principio del palomar variando objetos y casillas:",
            widget: {
              file: "widgets/tics/u05_arbol_palomar.html",
              title: "Árboles y Principio del Palomar",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t02-permutaciones": {
    id: "tics-u05-t02-permutaciones",
    title: "5.2 Permutaciones",
    subtitle: "Ordenamientos de elementos sin repetición, explosión factorial n! y cálculo de P(n, r) = n! / (n - r)!.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Fácil",
    category: "Principios de Conteo",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Factorial n!", type: "teal" },
      { text: "Orden Estricto", type: "blue" }
    ],
    sections: [
      {
        id: "permutaciones-orden",
        title: "1. Permutaciones: Cuando el Orden Importa",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-arrow-down-a-z",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>permutación</strong> de <code>n</code> objetos tomados de <code>r</code> en <code>r</code> es un arreglo ordenado donde <strong>el orden de los elementos altera el resultado</strong>:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            P(n, r) = n · (n - 1) · (n - 2) · ... · (n - r + 1) = n! / (n - r)!
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
            Cuando <code>r = n</code>, ordenamos todos los elementos: <code>P(n, n) = n!</code>. El crecimiento factorial es de los más rápidos en computación, lo que explica la alta complejidad de problemas NP-completos como el Viajante de Comercio (TSP).
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Permutaciones y Crecimiento Factorial",
            description: "Modifica n y r para calcular P(n, r) y observa la lista generada de todas las secuencias ordenadas posibles:",
            widget: {
              file: "widgets/tics/u05_permutaciones.html",
              title: "Simulador de Permutaciones",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t03-permutaciones-repeticion": {
    id: "tics-u05-t03-permutaciones-repeticion",
    title: "5.3 Permutaciones con repetición",
    subtitle: "Arreglos con elementos indistinguibles, cálculo de anagramas y la fórmula del coeficiente multinomial.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Media",
    category: "Principios de Conteo",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Coeficiente Multinomial", type: "teal" },
      { text: "Anagramas", type: "purple" }
    ],
    sections: [
      {
        id: "permutaciones-elementos-repetidos",
        title: "1. Elementos Repetidos y Anagramas",
        shortTitle: "Permutaciones con repetición",
        icon: "fa-repeat",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Si tenemos <code>n</code> objetos de los cuales <code>n_1</code> son idénticos de un primer tipo, <code>n_2</code> de un segundo tipo, ..., y <code>n_k</code> de un k-ésimo tipo (con <code>n_1 + n_2 + ... + n_k = n</code>), el número de permutaciones distinguibles es el <strong>coeficiente multinomial</strong>:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            PR = n! / (n_1! · n_2! · ... · n_k!)
          </div>

          <p class="text-xs text-gray-300 leading-relaxed">
            Se divide entre los factoriales de las frecuencias porque intercambiar dos elementos idénticos entre sí no genera un arreglo nuevo visualmente distinguishable.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Calculadora Interactiva de Anagramas Multinomiales",
            description: "Escribe cualquier palabra o cadena de caracteres y observa el desglose de frecuencias de letras, la simplificación factorial y el total de anagramas únicos:",
            widget: {
              file: "widgets/tics/u05_permutaciones_repeticion.html",
              title: "Permutaciones con Repetición",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t04-combinaciones": {
    id: "tics-u05-t04-combinaciones",
    title: "5.4 Combinaciones",
    subtitle: "Selecciones no ordenadas, subconjuntos de tamaño r, coeficientes binomiales C(n, r) y comparativa rigurosa con permutaciones.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Media",
    category: "Principios de Conteo",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Selección sin Orden", type: "teal" },
      { text: "Coeficientes Binomiales", type: "amber" }
    ],
    sections: [
      {
        id: "combinaciones-seleccion",
        title: "1. Combinaciones: El Orden NO Importa",
        shortTitle: "¿En qué consiste?",
        icon: "fa-arrows-split-up-and-left",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Una <strong>combinación</strong> es una selección de <code>r</code> objetos tomados de un conjunto de <code>n</code> objetos donde <strong>el orden de selección es irrelevante</strong> (corresponde a elegir un subconjunto de tamaño r):
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            C(n, r) = (n r) = n! / [r! · (n - r)!] = P(n, r) / r!
          </div>

          <p class="text-xs text-gray-300 leading-relaxed">
            Como para cada grupo de <code>r</code> objetos existen <code>r!</code> órdenes posibles, dividimos las permutaciones entre <code>r!</code> para colapsar todas las variantes idénticas en una sola combinación.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Comparador Interactivo: Permutación vs Combinación",
            description: "Modifica los parámetros n y r para observar cuantitativamente cómo las combinaciones reducen el espacio de búsqueda dividiendo entre r!:",
            widget: {
              file: "widgets/tics/u05_combinaciones.html",
              title: "Permutación vs Combinación",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t05-combinaciones-repeticion": {
    id: "tics-u05-t05-combinaciones-repeticion",
    title: "5.5 Combinaciones con repetición",
    subtitle: "Selecciones con reposición, modelo geométrico de estrellas y barras (stars and bars) y soluciones enteras no negativas.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Avanzada",
    category: "Principios de Conteo",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Estrellas y Barras", type: "teal" },
      { text: "Selección con Reposición", type: "purple" }
    ],
    sections: [
      {
        id: "estrellas-y-barras",
        title: "1. El Método de Estrellas y Barras",
        shortTitle: "Estrellas y barras",
        icon: "fa-star",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Las <strong>combinaciones con repetición</strong> cuentan las formas de seleccionar <code>r</code> elementos de <code>n</code> categorías disponibles, pudiendo repetir cualquier categoría las veces que se desee.
          </p>

          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            El método clásico de <strong>estrellas y barras</strong> representa los <code>r</code> objetos idénticos como estrellas (★) y utiliza <code>n - 1</code> barras divisoras (|) para delimitar las <code>n</code> categorías. El número de formas es la combinación de elegir las posiciones de las barras:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3 font-bold">
            CR(n, r) = C(n + r - 1, r) = (n + r - 1)! / [r! · (n - 1)!]
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Estrellas y Barras",
            description: "Modifica el número de categorías n y objetos r para observar la representación gráfica de las estrellas y separadores y su cálculo exacto:",
            widget: {
              file: "widgets/tics/u05_estrellas_barras.html",
              title: "Estrellas y Barras",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u05-t06-reto-integrador-final": {
    id: "tics-u05-t06-reto-integrador-final",
    title: "5.6 Reto Final Integrador: Matemática Discreta y Computación",
    subtitle: "Desafío culminante que articula sistemas numéricos, inducción, teoría de conjuntos, funciones y combinatoria aplicada a las TICS.",
    unit: 5,
    unitTitle: "Unidad 05: Principios fundamentales del conteo",
    week: 5,
    weekTitle: "Unidad 05: Principios fundamentales del conteo",
    difficulty: "Avanzada",
    category: "Reto Integrador Final",
    timeEstimate: "45 minutos",
    badges: [
      { text: "Unidad 05", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Desafío Culminante", type: "amber" },
      { text: "TICS & Computación", type: "teal" }
    ],
    sections: [
      {
        id: "integracion-tics-computacion",
        title: "1. La Matemática Discreta como Fundamento de las TICS",
        shortTitle: "Fundamento computacional",
        icon: "fa-crown",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            A lo largo de este curso de <strong>Introducción a las TICS</strong>, hemos recorrido los pilares matemáticos indispensables que sostienen la ingeniería de software y la infraestructura tecnológica moderna:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs my-4">
            <div class="p-3 rounded bg-[#10141d] border border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1">1. Sistemas Numéricos:</span>
              <p class="text-gray-300 font-sans">El lenguaje del silicio: compresión hexadecimal, aritmética de complementos y reloj modular en criptografía y direccionamiento de memoria.</p>
            </div>
            <div class="p-3 rounded bg-[#10141d] border border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1">2. Inducción y Recursión:</span>
              <p class="text-gray-300 font-sans">El diseño de algoritmos de Divide y Vencerás, estructuras auto-referenciadas y verificación formal de correctitud.</p>
            </div>
            <div class="p-3 rounded bg-[#10141d] border border-amber-500/30">
              <span class="text-amber-400 font-bold block mb-1">3. Teoría de Conjuntos y Lógica:</span>
              <p class="text-gray-300 font-sans">Modelos relacionales en bases de datos (SQL), compuertas electrónicas digitales y operadores booleanos.</p>
            </div>
            <div class="p-3 rounded bg-[#10141d] border border-purple-500/30">
              <span class="text-purple-400 font-bold block mb-1">4. Funciones, Relaciones y Conteo:</span>
              <p class="text-gray-300 font-sans">Tablas Hash con colisiones, arquitecturas cliente-servidor en grafos, seguridad de contraseñas y cálculo asintótico Big-O.</p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "practica",
            title: "Gran Reto Final de Matemática Discreta y TICS",
            description: "Supera los 5 desafíos integradores que combinan criptografía, direccionamiento IP, algoritmos de bucles anidados e inclusión-exclusión:",
            widget: {
              file: "widgets/tics/u05_reto_final_conteo.html",
              title: "Reto Final Integrador TICS",
              height: "560px"
            }
          }
        ]
      }
    ],
    comprueba: {
      title: "Comprueba: Evaluación Final Integradora de Introducción a las TICS",
      subtitle: "Certificación y autoevaluación formativa de la asignatura completa.",
      widget: {
        file: "widgets/tics/u05_reto_final_conteo.html",
        title: "Evaluación Final Integradora",
        height: "580px"
      }
    }
  }
};
