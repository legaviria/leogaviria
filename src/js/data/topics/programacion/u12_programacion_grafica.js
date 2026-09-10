/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 12 - PROGRAMACIÓN GRÁFICA
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U12_TOPICS = {
  "prog-turtle-intro": {
    id: "prog-turtle-intro",
    title: "12.1 Introducción a Turtle",
    subtitle: "Gráficos de tortuga: coordenadas cartesianas, orientación angular, bucles para trazado de polígonos regulares y espirales fractales.",
    unit: 12,
    unitTitle: "Unidad 12: Programación gráfica",
    week: 12,
    weekTitle: "Unidad 12: Programación gráfica",
    difficulty: "Fácil",
    category: "Interfaces Gráficas",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 12", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Turtle", type: "teal" },
      { text: "Geometría", type: "purple" }
    ],
    sections: [
      {
        id: "conceptos-turtle-canvas",
        title: "1. ¿Qué es Turtle Graphics y cómo se Programa?",
        shortTitle: "Turtle Graphics",
        icon: "fa-palette",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El módulo estándar <code>turtle</code> de Python es un entorno gráfico vectorial inspirado en el lenguaje Logo de Seymour Papert. La metáfora es una "tortuga" que se desplaza sobre un lienzo plano bidimensional arrastrando un lápiz:
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 font-mono text-xs">
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-sky-400">forward(d)</strong>: Avanza d píxeles</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-purple-400">left(a)</strong>: Gira a la izquierda a grados</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-emerald-400">penup()</strong>: Levanta el lápiz</div>
            <div class="bg-[#141923] p-2.5 rounded border border-gray-800"><strong class="text-amber-400">color(c)</strong>: Cambia el color de trazo</div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador Interactivo de Gráficos Turtle",
            description: "Experimenta con la progresión geométrica: genera cuadrados, hexágonos regulares, estrellas y espirales fractales con bucles for:",
            widget: {
              file: "widgets/programacion/u12_turtle_simulator.html",
              title: "Simulador de Turtle",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-turtle",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevalúa los principios de orientación:</p>`,
        quiz: [
          {
            question: "¿Qué ángulo de giro 'left(a)' debe utilizarse en un bucle for de 6 iteraciones para trazar un hexágono regular perfecto?",
            options: ["45 grados", "60 grados (360 / 6)", "90 grados", "120 grados"],
            correct: 1,
            explanation: "La suma de los ángulos exteriores de cualquier polígono regular convexo es 360°. Para 6 lados: 360 / 6 = 60° en cada giro."
          }
        ]
      }
    ]
  },

  "prog-flet-intro": {
    id: "prog-flet-intro",
    title: "12.2 Introducción a Flet",
    subtitle: "Desarrollo de interfaces de usuario modernas y multiplataforma en Python impulsadas por el motor Flutter: controles declarativos y eventos.",
    unit: 12,
    unitTitle: "Unidad 12: Programación gráfica",
    week: 12,
    weekTitle: "Unidad 12: Programación gráfica",
    difficulty: "Media",
    category: "Interfaces Modernas",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 12", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Flet / Flutter", type: "teal" },
      { text: "Reactivo", type: "purple" }
    ],
    sections: [
      {
        id: "arquitectura-flet-declarativa",
        title: "1. Arquitectura y Controles Esenciales en Flet",
        shortTitle: "Arquitectura Flet",
        icon: "fa-window-maximize",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            <strong>Flet</strong> permite a los desarrolladores de Python crear aplicaciones de escritorio, web y móviles nativas de alto rendimiento sin requerir experiencia en frontend, HTML o JavaScript, utilizando el motor gráfico de <strong>Flutter</strong>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            import flet as ft<br>
            def main(page: ft.Page):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;page.add(ft.Text("¡Hola desde Flet!"))<br>
            ft.app(target=main)
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Controles y Layout en Flet",
            description: "Diseña interactivamente una pantalla con campos de texto, botones y contenedores, observando la actualización reactiva page.update():",
            widget: {
              file: "widgets/programacion/u12_flet_ui_builder.html",
              title: "Simulador de UI Flet",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-flet",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Verifica tu comprensión sobre Flet:</p>`,
        quiz: [
          {
            question: "¿Por qué es indispensable llamar al método 'page.update()' en una aplicación Flet tras modificar la propiedad de un control?",
            options: [
              "Para guardar los cambios en la base de datos.",
              "Para sincronizar y redibujar el estado reactivo en la ventana gráfica de Flutter.",
              "Para compilar el script de Python a C++.",
              "Solo es necesario al cerrar la aplicación."
            ],
            correct: 1,
            explanation: "Flet utiliza un modelo cliente-servidor interno reactivo. 'page.update()' envía el árbol de diferencias (diffs) al motor de Flutter para que la interfaz gráfica refleje los nuevos datos en pantalla."
          }
        ]
      }
    ]
  },

  "prog-grafica-calculadora": {
    id: "prog-grafica-calculadora",
    title: "12.3 Ejemplo: calculadora",
    subtitle: "Construcción paso a paso de una calculadora gráfica modular: distribución en rejilla (Rows & Columns), control de estado y despacho de eventos.",
    unit: 12,
    unitTitle: "Unidad 12: Programación gráfica",
    week: 12,
    weekTitle: "Unidad 12: Programación gráfica",
    difficulty: "Media",
    category: "Proyectos Prácticos",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 12", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Calculadora", type: "teal" },
      { text: "Eventos", type: "amber" }
    ],
    sections: [
      {
        id: "desarrollo-calculadora-flet",
        title: "1. Diseño Modular de la Aplicación Calculadora",
        shortTitle: "Calculadora Flet",
        icon: "fa-calculator",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Construimos la calculadora separando limpiamente: (1) El estado interno (display y operandos), (2) La estructura visual (Row/Column para la cuadrícula del teclado numérico) y (3) Los controladores de eventos (clicks en dígitos y operaciones aritméticas).
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Calculadora Modular Flet",
            description: "Prueba la réplica interactiva de la calculadora e inspecciona la correlación entre las pulsaciones de botones y el despachador de eventos:",
            widget: {
              file: "widgets/programacion/u12_flet_calculadora.html",
              title: "Calculadora Flet",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-calculadora",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevaluación del proyecto:</p>`,
        quiz: [
          {
            question: "¿Qué combinación de contenedores de layout de Flet se utiliza habitualmente para organizar el teclado numérico de una calculadora?",
            options: [
              "Una lista desordenada de Canvas.",
              "Un ft.Column que contiene múltiples ft.Row (filas de botones horizontales apiladas verticalmente).",
              "Un único ft.Text.",
              "Frames flotantes absolutos."
            ],
            correct: 1,
            explanation: "La cuadrícula estándar de una calculadora se construye de forma limpia y responsiva mediante una columna principal (ft.Column) que apila verticalmente cada una de las filas (ft.Row) con sus respectivos botones numéricos y operadores."
          }
        ]
      }
    ]
  },

  "prog-grafica-pokedex": {
    id: "prog-grafica-pokedex",
    title: "12.4 Ejemplo: Pokédex",
    subtitle: "Proyecto integrador de software gráfico: consumo de datos estructurados, filtrado dinámico en vivo, tarjetas visuales y vista maestra-detalle.",
    unit: 12,
    unitTitle: "Unidad 12: Programación gráfica",
    week: 12,
    weekTitle: "Unidad 12: Programación gráfica",
    difficulty: "Media",
    category: "Proyectos Integradores",
    timeEstimate: "45 minutos",
    badges: [
      { text: "Unidad 12", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Pokédex", type: "red" },
      { text: "Proyecto Integrador", type: "purple" }
    ],
    sections: [
      {
        id: "proyecto-pokedex-flet",
        title: "1. Arquitectura del Proyecto Integrador Pokédex",
        shortTitle: "Pokédex Flet",
        icon: "fa-gamepad",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Este proyecto combina todos los conceptos aprendidos: estructuras de datos (listas de diccionarios), control de flujo (filtrado por nombre o tipo elemental), diseño de interfaz reactiva y vinculación de eventos en tiempo real con <code>on_change</code>.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Pokédex con Flet",
            description: "Busca Pokémon en tiempo real, filtra por nombre e inspecciona la vista de estadísticas de combate:",
            widget: {
              file: "widgets/programacion/u12_flet_pokedex.html",
              title: "Pokédex Flet",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-pokedex",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevaluación del proyecto integrador:</p>`,
        quiz: [
          {
            question: "En una Pokédex reactiva, ¿cómo se implementa el filtrado en vivo al escribir en la barra de búsqueda?",
            options: [
              "Reiniciando el sistema operativo cada vez que se presiona una tecla.",
              "Asociando una función al evento 'on_change' del ft.TextField que filtra la lista en memoria y actualiza la lista de controles con page.update().",
              "Creando un archivo .txt nuevo por cada letra.",
              "Es imposible filtrar sin una base de datos externa."
            ],
            correct: 1,
            explanation: "El evento on_change dispara la función de filtrado con cada pulsación de tecla, reconstruye la lista de controles visibles y redibuja la interfaz con page.update()."
          }
        ]
      }
    ]
  }
};
