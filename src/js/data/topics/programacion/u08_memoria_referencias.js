/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 08 - MEMORIA Y REFERENCIAS
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U08_TOPICS = {
  "prog-modelo-memoria": {
    id: "prog-modelo-memoria",
    title: "8.1 Modelo de memoria",
    subtitle: "Arquitectura de memoria en tiempo de ejecución: Stack (pila de ejecución) vs Heap (montículo de objetos) y semántica de nombres.",
    unit: 8,
    unitTitle: "Unidad 08: Memoria y referencias",
    week: 8,
    weekTitle: "Unidad 08: Memoria y referencias",
    difficulty: "Media",
    category: "Arquitectura de Software",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 08", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Stack vs Heap", type: "teal" },
      { text: "id()", type: "purple" }
    ],
    sections: [
      {
        id: "arquitectura-stack-heap",
        title: "1. ¿Cómo Administra la Memoria el Intérprete de Python?",
        shortTitle: "Stack vs Heap",
        icon: "fa-memory",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Durante la ejecución de un script, la memoria asignada por el sistema operativo se divide principalmente en dos zonas con roles arquitectónicos distintos:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-sky-500/30 rounded-xl p-4">
              <h5 class="text-sky-400 font-bold text-xs uppercase mb-2">Stack (Pila de Ejecución)</h5>
              <p class="text-xs text-gray-300">
                Memoria rápida y de acceso LIFO. Almacena los marcos de función (stack frames), variables locales y las <strong>referencias (punteros)</strong> hacia los objetos reales.
              </p>
            </div>
            <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4">
              <h5 class="text-purple-400 font-bold text-xs uppercase mb-2">Heap (Montículo de Objetos)</h5>
              <p class="text-xs text-gray-300">
                Espacio dinámico y global donde residen los <strong>objetos de datos reales</strong> (enteros, cadenas, listas, diccionarios, instancias de clases). Administrado por el Garbage Collector.
              </p>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Memoria de Python (Stack vs Heap)",
            description: "Observa cómo las variables en el Stack apuntan a direcciones específicas en el Heap y qué sucede al reasignar:",
            widget: {
              file: "widgets/programacion/u08_visualizador_memoria.html",
              title: "Visualizador de Memoria Stack vs Heap",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "identidad-objetos-id",
        title: "2. Identidad de Objetos y la Función id()",
        shortTitle: "Identidad y id()",
        icon: "fa-fingerprint",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Cada objeto creado en el Heap posee una dirección única e invariable en memoria durante su ciclo de vida. Podemos inspeccionarla con la función <code>id(obj)</code>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            a = [1, 2, 3]<br>
            b = a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># b comparte la referencia de a</span><br>
            print(id(a) == id(b)) &nbsp;<span class="text-emerald-400"># True (apuntan exactamente al mismo objeto)</span>
          </div>
        `,
        quiz: [
          {
            question: "En Python, cuando ejecutas la instrucción: x = 500; y = 500; ¿qué evalúa la expresión: x is y?",
            options: [
              "Siempre True porque tienen el mismo valor numérico.",
              "Generalmente False (o dependiente de optimizaciones del compilador), porque 'is' evalúa identidad de memoria (id(x) == id(y)) y no igualdad de valor.",
              "Arroja un TypeError.",
              "Convierte los enteros en booleanos."
            ],
            correct: 1,
            explanation: "El operador 'is' compara direcciones de memoria (identidad de objeto), mientras que '==' compara el valor contenido. Para enteros fuera del rango de pre-alojamiento (-5 a 256), Python crea dos objetos distintos en el Heap."
          }
        ]
      }
    ]
  },

  "prog-apuntadores": {
    id: "prog-apuntadores",
    title: "8.2 Apuntadores",
    subtitle: "Punteros explícitos en bajo nivel (C/C++) frente a referencias transparentes en Python: seguridad de memoria y recolección de basura.",
    unit: 8,
    unitTitle: "Unidad 08: Memoria y referencias",
    week: 8,
    weekTitle: "Unidad 08: Memoria y referencias",
    difficulty: "Avanzada",
    category: "Bajo Nivel vs Alto Nivel",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 08", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Punteros C", type: "red" },
      { text: "Referencias", type: "teal" }
    ],
    sections: [
      {
        id: "punteros-c-vs-referencias-python",
        title: "1. Punteros Explícitos frente a Referencias Administradas",
        shortTitle: "Punteros vs Referencias",
        icon: "fa-project-diagram",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En lenguajes de bajo nivel como C o C++, los <strong>punteros</strong> son variables que guardan explícitamente la dirección física de memoria de otra variable, permitiendo aritmética de punteros (avanzar N bytes en memoria contigua) y desreferenciación con el operador <code>*</code>. En Python, este modelo está completamente encapsulado para prevenir fallos críticos del sistema.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Comparador: Punteros en C vs. Referencias en Python",
            description: "Analiza la tabla comparativa de riesgos, gestión manual y seguridad de memoria entre ambos paradigmas:",
            widget: {
              file: "widgets/programacion/u08_apuntadores_referencias.html",
              title: "Punteros en C vs Referencias en Python",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "garbage-collector-conteo",
        title: "2. Conteo de Referencias y Garbage Collector",
        shortTitle: "Garbage Collector",
        icon: "fa-recycle",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            CPython administra la memoria mediante dos mecanismos complementarios:
          </p>
          <ul class="text-xs text-gray-300 space-y-2 list-disc pl-5 mb-4">
            <li><strong>Reference Counting (Conteo de Referencias):</strong> Cada objeto en el Heap mantiene un contador interno (<code>ob_refcnt</code>) de cuántas variables o colecciones apuntan a él. Tan pronto como el contador cae a 0, la memoria del objeto se libera de inmediato.</li>
            <li><strong>Ciclic Garbage Collector:</strong> Detecta y recolecta referencias circulares (por ejemplo, el objeto A apunta a B y B apunta a A, pero nadie más los utiliza).</li>
          </ul>
        `,
        quiz: [
          {
            question: "¿Por qué en Python NO se permite la aritmética de punteros (como ptr + 1)?",
            options: [
              "Porque la memoria en Python no es direccionable.",
              "Por seguridad: para evitar que un programa acceda a zonas arbitrarias o no asignadas de la memoria física (Memory Safety).",
              "Porque los punteros en Python se miden en kilobytes y no en bytes.",
              "Es un error del intérprete que se corregirá en futuras versiones."
            ],
            correct: 1,
            explanation: "Python es un lenguaje de memoria segura (memory-safe). Al abstraer las direcciones de hardware, se eliminan por completo los errores de segmentación (Segmentation faults) y la corrupción de memoria."
          }
        ]
      }
    ]
  },

  "prog-referencias-indireccion": {
    id: "prog-referencias-indireccion",
    title: "8.3 Referencias e indirección múltiple",
    subtitle: "Alias de objetos mutables, copia superficial (copy) vs copia profunda (deepcopy), y el operador de identidad is vs igualdad ==.",
    unit: 8,
    unitTitle: "Unidad 08: Memoria y referencias",
    week: 8,
    weekTitle: "Unidad 08: Memoria y referencias",
    difficulty: "Avanzada",
    category: "Mutabilidad y Alias",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 08", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Alias", type: "amber" },
      { text: "deepcopy", type: "purple" }
    ],
    sections: [
      {
        id: "problema-alias-mutabilidad",
        title: "1. El Peligro de los Alias en Objetos Mutables",
        shortTitle: "Alias y Mutabilidad",
        icon: "fa-clone",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Uno de los errores más desconcertantes para programadores que inician en Python ocurre al asignar listas o diccionarios a otra variable con <code>b = a</code>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            lista1 = [1, 2, 3]<br>
            lista2 = lista1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># ¡ALIAS! lista2 no es una copia; es la misma lista</span><br>
            lista2.append(99)<br>
            print(lista1) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400"># [1, 2, 3, 99] ¡lista1 también cambió!</span>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Alias, Copia Superficial y Copia Profunda",
            description: "Modifica listas anidadas bajo los tres esquemas de asignación y observa en qué casos se comparten los subobjetos internos:",
            widget: {
              file: "widgets/programacion/u08_simulador_alias.html",
              title: "Simulador de Alias y Mutabilidad",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "copia-superficial-vs-profunda",
        title: "2. Copia Superficial vs. Copia Profunda (copy vs deepcopy)",
        shortTitle: "copy vs deepcopy",
        icon: "fa-copy",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para evitar los efectos colaterales de los alias, el módulo estándar <code>copy</code> ofrece dos niveles de duplicación:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-amber-500/30 rounded-xl p-4">
              <h5 class="text-amber-400 font-bold text-xs uppercase mb-2">Copia Superficial: copy()</h5>
              <p class="text-xs text-gray-300">
                Clona la colección exterior, pero los objetos mutables contenidos en su interior siguen siendo compartidos por referencia.
              </p>
            </div>
            <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4">
              <h5 class="text-emerald-400 font-bold text-xs uppercase mb-2">Copia Profunda: deepcopy()</h5>
              <p class="text-xs text-gray-300">
                Clona recursivamente la colección y todos los objetos anidados en ella. Crea una estructura totalmente independiente en memoria.
              </p>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "Dada la lista matriz = [[1, 2], [3, 4]], si ejecutamos clon = matriz.copy() y luego clon[0][0] = 99, ¿cuál será el valor de matriz[0][0]?",
            options: [
              "1, porque la copia aísla por completo los datos.",
              "99, porque una copia superficial (shallow copy) comparte las referencias de las sublistas anidadas.",
              "IndexError por alteración indebida de matrices.",
              "None"
            ],
            correct: 1,
            explanation: "La copia superficial crea una nueva lista para el contenedor exterior, pero los elementos interiores ([1, 2] y [3, 4]) son las mismas instancias compartidas por referencia. Para aislar sublistas anidadas se requiere copy.deepcopy()."
          }
        ]
      }
    ]
  }
};
