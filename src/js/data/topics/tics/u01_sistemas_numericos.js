/**
 * UNIDAD 01: SISTEMAS NUMÉRICOS Y FUNDAMENTOS ARITMÉTICOS
 * Asignatura: Introducción a las TICS
 * Prof. Leo Gaviria
 */

export const TICS_U01_TOPICS = {
  "tics-u01-t01-invencion-base": {
    id: "tics-u01-t01-invencion-base",
    title: "1.1 La invención de la base",
    subtitle: "Evolución histórica de la numeración, principio del valor posicional, sistemas base 2, 8, 10 y 16, y su fundamento en la computación.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Fácil",
    category: "Sistemas Numéricos",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Valor Posicional", type: "teal" },
      { text: "Bases 2, 8, 10, 16", type: "blue" }
    ],
    sections: [
      {
        id: "necesidad-historica",
        title: "1. ¿En qué consiste la invención de la base?",
        shortTitle: "¿En qué consiste?",
        icon: "fa-history",
        contentHtml: `
          <!-- Conceptos Básicos: Número, Cantidad y Sistema de Numeración (Insumo) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-[#121622] border border-teal-500/30 rounded-xl p-4">
              <h4 class="text-teal-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fas fa-brain"></i> Número o Cantidad
              </h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                El sentido de número, de cantidad es innato en los seres humanos, percibimos diferencias entre distintas colecciones de objetos y si hay cambios en algunas de ellas. Por eso desde la antigüedad la humanidad tiene la necesidad de comunicar, recordar, nombrar, registrar distintas cantidades y para eso se desarrollaron los sistemas de numeración.
              </p>
            </div>
            <div class="bg-[#121622] border border-sky-500/30 rounded-xl p-4">
              <h4 class="text-sky-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fas fa-list-ol"></i> Sistema de Numeración
              </h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                <strong>Definición:</strong> Conjunto de Signos y Reglas que nos permiten representar una cantidad utilizando signos y aplicando dichas reglas.
              </p>
            </div>
          </div>

          <p class="text-base text-gray-300 leading-relaxed mb-4">
            A lo largo de la historia, la humanidad enfrentó el desafío fundamental de <strong>representar cantidades crecientes con un número limitado de símbolos</strong>. Los primeros métodos, como el conteo unario (marcas en huesos o piedras), resultaban imprácticos para cifras grandes. Los sistemas aditivos antiguos (como la numeración romana o egipcia) requerían inventar continuamente nuevos símbolos para órdenes de magnitud superiores y hacían que las operaciones aritméticas elementales fueran complejas.
          </p>

          <div class="bg-[#141923] border border-teal-500/30 rounded-xl p-4 my-4">
            <h4 class="text-teal-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-lightbulb"></i> La Gran Revolución Intelectual: El Sistema Posicional
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">
              La <strong>invención de la base y el valor posicional</strong> (desarrollada por matemáticos babilonios, mayas e hindúes, y transmitida a occidente por Al-Juarismi) resolvió este problema de manera definitiva: <em>el significado de un dígito depende exclusivamente de la posición que ocupa dentro de la cifra</em>. Un mismo símbolo, por ejemplo el <code>5</code>, representa cinco unidades en <code>5</code>, cincuenta en <code>50</code>, o quinientos en <code>500</code>.
            </p>
          </div>

          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table font-sans">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-teal-400 font-bold">Sistema</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Base (b)</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Conjunto de Dígitos Permitidos</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Ámbito de Aplicación</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="font-bold text-white py-2 px-3">Binario</td>
                  <td class="py-2 px-3 text-sky-400">2</td>
                  <td class="py-2 px-3 text-emerald-400">{ 0, 1 }</td>
                  <td class="py-2 px-3 text-gray-300 font-sans">Lógica de transistores, registros de CPU, memoria física.</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3">Octal</td>
                  <td class="py-2 px-3 text-sky-400">8</td>
                  <td class="py-2 px-3 text-emerald-400">{ 0, 1, 2, 3, 4, 5, 6, 7 }</td>
                  <td class="py-2 px-3 text-gray-300 font-sans">Permisos en sistemas UNIX/Linux (ej. <code>chmod 755</code>), empaquetamiento de 3 bits.</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3">Decimal</td>
                  <td class="py-2 px-3 text-sky-400">10</td>
                  <td class="py-2 px-3 text-emerald-400">{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }</td>
                  <td class="py-2 px-3 text-gray-300 font-sans">Convención humana estándar (derivada de los 10 dedos de las manos).</td>
                </tr>
                <tr>
                  <td class="font-bold text-white py-2 px-3">Hexadecimal</td>
                  <td class="py-2 px-3 text-sky-400">16</td>
                  <td class="py-2 px-3 text-emerald-400">{ 0-9, A, B, C, D, E, F }</td>
                  <td class="py-2 px-3 text-gray-300 font-sans">Direcciones de memoria RAM (punteros), colores web (#FF5733), IPv6.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "mecanismo-posicional",
        title: "2. ¿Cómo funciona el valor posicional?",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-cubes",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En cualquier sistema de base <code>b</code>, una cadena de dígitos <code>d_{n-1} d_{n-2} ... d_1 d_0</code> representa matemáticamente la sumatoria de cada dígito multiplicado por la base elevada a su índice de posición:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-4 font-mono text-center my-4 text-emerald-400 text-sm">
            N = d_{n-1} · b^{n-1} + d_{n-2} · b^{n-2} + ... + d_1 · b^1 + d_0 · b^0
          </div>

          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            Cada paso hacia la izquierda multiplica el peso del dígito por la base <code>b</code>. Por ejemplo, en binario (base 2), los pesos sucesivos son las potencias de dos:
            <code class="text-sky-300">1, 2, 4, 8, 16, 32, 64, 128, 256...</code>
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "¡Vamos a la Pizarra!: ¿Cómo funciona el valor posicional?",
            description: "Sigue la clase interactiva con el Profe Leo en la pizarra: observa la correspondencia posicional de los dígitos, las potencias de la base y la deducción paso a paso del número binario (1011)₂ hasta obtener su valor decimal (11)₁₀:",
            widget: {
              file: "widgets/tics/u01_pizarra_valor_posicional.html",
              title: "Pizarra: Valor Posicional",
              height: "610px"
            }
          },
          {
            category: "explora",
            title: "Simulador de Valor Posicional y Cambio de Base",
            description: "Modifica la base (2, 8, 10 o 16) y escribe cualquier número para observar cómo cada columna calcula su peso específico y su contribución exacta al valor total:",
            widget: {
              file: "widgets/tics/u01_valor_posicional.html",
              title: "Simulador de Valor Posicional",
              height: "520px"
            }
          }
        ]
      },
      {
        id: "relacion-informatica",
        title: "3. Relación fundamental con la Informática",
        shortTitle: "Conexión Informática",
        icon: "fa-microchip",
        contentHtml: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div class="bg-[#121622] border border-sky-500/30 rounded-xl p-4">
              <h4 class="text-sky-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fas fa-bolt"></i> ¿Por qué las computadoras usan Base 2?
              </h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                Los circuitos integrados digitales modernos están construidos con transistores de efecto de campo (MOSFET). Resulta físicamente sencillo y sumamente confiable distinguir entre dos estados de voltaje eléctrico: <strong>nivel bajo</strong> (cercano a 0V, interpretado como <code>0</code>) y <strong>nivel alto</strong> (cercano a 3.3V o 5V, interpretado como <code>1</code>). Distinguir diez niveles de voltaje analógico en chips microscópicos generaría errores continuos debido al ruido térmico.
              </p>
            </div>

            <div class="bg-[#121622] border border-purple-500/30 rounded-xl p-4">
              <h4 class="text-purple-400 font-bold text-sm mb-2 flex items-center gap-2">
                <i class="fas fa-compress"></i> ¿Por qué los programadores usamos Hexadecimal?
              </h4>
              <p class="text-xs text-gray-300 leading-relaxed">
                Una cadena de 32 o 64 bits binarios resulta ilegible para un ser humano (ej. <code>1111111100001010</code>). Dado que <code>16 = 2^4</code>, cada dígito hexadecimal resume de manera exacta un bloque de <strong>4 bits</strong> (un <em>nibble</em>). Así, dos dígitos hexadecimales representan exactamente 1 byte (8 bits), permitiendo escribir direcciones de memoria de manera compacta: <code>0xFF0A</code>.
              </p>
            </div>
          </div>
        `
      }
    ],
    comprueba: {
      title: "Quiz: La invención de la base y valor posicional",
      subtitle: "Comprueba tu comprensión sobre bases numéricas y representación posicional.",
      widget: {
        file: "widgets/tics/u01_reto_sistemas_numericos.html",
        title: "Quiz: Sistemas Numéricos",
        height: "580px"
      }
    }
  },

  "tics-u01-t02-teorema-representacion": {
    id: "tics-u01-t02-teorema-representacion",
    title: "1.2 Teorema de representación",
    subtitle: "Formulación rigurosa del Teorema Fundamental de la Numeración, polinomios de potencias y factorización de naturales.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Fácil",
    category: "Sistemas Numéricos",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Fácil", type: "easy" },
      { text: "Teorema Fundamental", type: "teal" },
      { text: "Polinomio de Potencias", type: "purple" }
    ],
    sections: [
      {
        id: "teorema-fundamental-numeracion",
        title: "1. Teorema Fundamental de la Numeración",
        shortTitle: "Teorema fundamental",
        icon: "fa-square-root-variable",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>Teorema Fundamental de la Numeración</strong> establece que todo número real positivo <code>N</code> puede representarse de manera única en una base entera <code>b > 1</code> mediante una serie polinómica con potencias enteras positivas y negativas:
          </p>

          <div class="bg-[#090d14] border border-teal-500/40 rounded-xl p-4 font-mono text-center my-4 text-emerald-400 text-sm leading-relaxed">
            N = ∑_{i=-m}^{n-1} d_i · b^i = d_{n-1}b^{n-1} + ... + d_1b^1 + d_0b^0 + d_{-1}b^{-1} + ... + d_{-m}b^{-m}
          </div>

          <div class="bg-[#141923] border border-gray-800 rounded-xl p-4 my-4 space-y-2 text-xs text-gray-300">
            <h4 class="text-sky-400 font-bold text-sm mb-1">Condiciones Formales del Teorema:</h4>
            <p>1. <strong>Base:</strong> <code>b ∈ ℕ, b ≥ 2</code> (entero estrictamente mayor a 1).</p>
            <p>2. <strong>Dígitos:</strong> Cada coeficiente <code>d_i</code> es un entero tal que <code>0 ≤ d_i < b</code>.</p>
            <p>3. <strong>Unicidad:</strong> La representación es única, excepto para números con secuencias periódicas de dígitos máximos.</p>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Visualizador de Descomposición Polinómica",
            description: "Introduce un número con parte entera y fraccionaria en base 2, 8 o 16 para visualizar el cálculo riguroso de cada término según el teorema fundamental:",
            widget: {
              file: "widgets/tics/u01_teorema_representacion.html",
              title: "Visualizador del Teorema de Representación",
              height: "520px"
            }
          }
        ]
      },
      {
        id: "ejemplo-paso-a-paso-tfn",
        title: "2. Ejemplo paso a paso de descomposición",
        shortTitle: "Ejemplo paso a paso",
        icon: "fa-list-check",
        contentHtml: `
          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            Consideremos el número binario fraccionario <code class="text-teal-400 font-mono font-bold">1101.101₍₂₎</code>:
          </p>

          <div class="space-y-2 font-mono text-xs my-4">
            <div class="p-2.5 rounded bg-[#10141d] border border-gray-800 text-gray-300">
              <span class="text-teal-400 font-bold">Parte entera:</span> 1·2³ + 1·2² + 0·2¹ + 1·2⁰ = 8 + 4 + 0 + 1 = <strong>13</strong>.
            </div>
            <div class="p-2.5 rounded bg-[#10141d] border border-gray-800 text-gray-300">
              <span class="text-sky-400 font-bold">Parte fraccionaria:</span> 1·2⁻¹ + 0·2⁻² + 1·2⁻³ = 1/2 + 0 + 1/8 = 0.5 + 0.125 = <strong>0.625</strong>.
            </div>
            <div class="p-2.5 rounded bg-teal-500/10 border border-teal-500/30 text-teal-300 font-bold text-sm">
              Resultado final: 1101.101₍₂₎ = 13 + 0.625 = 13.625₍₁₀₎
            </div>
          </div>
        `
      }
    ]
  },

  "tics-u01-t03-operaciones-sistemas": {
    id: "tics-u01-t03-operaciones-sistemas",
    title: "1.3 Operaciones en los sistemas numéricos",
    subtitle: "Aritmética formal en binario y hexadecimal: adición, sustracción, acarreo (carry), préstamo (borrow) y complemento a dos.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Media",
    category: "Sistemas Numéricos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Acarreo y Préstamo", type: "amber" },
      { text: "Aritmética Binaria", type: "teal" }
    ],
    sections: [
      {
        id: "suma-y-acarreo",
        title: "1. Adición posicional y propagación de Acarreo (Carry)",
        shortTitle: "Suma y acarreo",
        icon: "fa-plus",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La suma en cualquier base sigue el mismo principio algorítmico que en decimal: sumamos columna por columna desde el bit menos significativo (LSB) hacia el más significativo (MSB). Cuando la suma de los dígitos más el acarreo entrante iguala o supera la base <code>b</code>, se produce un <strong>acarreo saliente (carry out)</strong> hacia la siguiente columna:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs my-4">
            <div class="subcard-box p-3 border-teal-500/30">
              <span class="text-teal-400 font-bold block mb-1">Reglas de la Suma Binaria (Base 2):</span>
              <ul class="space-y-1 text-gray-300">
                <li>0 + 0 = 0 (carry 0)</li>
                <li>0 + 1 = 1 (carry 0)</li>
                <li>1 + 0 = 1 (carry 0)</li>
                <li>1 + 1 = 0 (carry 1, pues 1+1=2 = 10₂)</li>
                <li>1 + 1 + 1 = 1 (carry 1, pues 1+1+1=3 = 11₂)</li>
              </ul>
            </div>

            <div class="subcard-box p-3 border-sky-500/30">
              <span class="text-sky-400 font-bold block mb-1">Reglas de la Suma Hexadecimal (Base 16):</span>
              <ul class="space-y-1 text-gray-300">
                <li>9 + 4 = D (13 en decimal, carry 0)</li>
                <li>A + 7 = 11₁₆ (10 + 7 = 17 = 16×1 + 1 &rarr; 1, carry 1)</li>
                <li>F + F = 1E₁₆ (15 + 15 = 30 = 16×1 + 14 &rarr; E, carry 1)</li>
              </ul>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Suma y Acarreo Paso a Paso",
            description: "Ejecuta paso a paso la suma de dos números en binario, octal o hexadecimal observando cómo se calcula la suma modular y cómo se propaga el acarreo a la columna contigua:",
            widget: {
              file: "widgets/tics/u01_operaciones_bases.html",
              title: "Simulador de Operaciones y Acarreo",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u01-t04-conversion-sistemas": {
    id: "tics-u01-t04-conversion-sistemas",
    title: "1.4 Conversión entre sistemas",
    subtitle: "Métodos canónicos de conversión: divisiones sucesivas, multiplicaciones sucesivas y empaquetamiento directo por potencias de 2.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Media",
    category: "Sistemas Numéricos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Conversor", type: "teal" },
      { text: "Divisiones Sucesivas", type: "blue" }
    ],
    sections: [
      {
        id: "metodos-conversion",
        title: "1. Métodos de Conversión Canónicos",
        shortTitle: "Métodos de conversión",
        icon: "fa-arrows-rotate",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Para convertir un número entre diferentes bases numéricas existen dos algoritmos fundamentales según la dirección de la transformación:
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div class="subcard-box p-4 border-teal-500/30">
              <h4 class="text-teal-400 font-bold text-xs uppercase mb-2">A. De Decimal a Base b: Divisiones Sucesivas</h4>
              <p class="text-xs text-gray-300 leading-relaxed mb-2">
                Se divide repetidamente el cociente entre la base <code>b</code> hasta que el cociente sea 0. Los <strong>residuos obtenidos se leen en orden inverso</strong> (desde el último residuo obtenido hasta el primero).
              </p>
              <div class="bg-[#090d14] p-2 rounded text-[11px] font-mono text-emerald-400">
                13 ÷ 2 = 6 (r=1) &rarr; 6 ÷ 2 = 3 (r=0) &rarr; 3 ÷ 2 = 1 (r=1) &rarr; 1 ÷ 2 = 0 (r=1) &rArr; 1101₂
              </div>
            </div>

            <div class="subcard-box p-4 border-sky-500/30">
              <h4 class="text-sky-400 font-bold text-xs uppercase mb-2">B. Entre Bases Potencias de 2: Agrupación Directa</h4>
              <p class="text-xs text-gray-300 leading-relaxed mb-2">
                Como <code>8 = 2³</code> y <code>16 = 2⁴</code>, no se requiere pasar por decimal:
              </p>
              <ul class="text-xs text-gray-300 space-y-1 font-mono">
                <li>• <strong>Binario &harr; Octal:</strong> Grupos de 3 bits (ej. 101 110₂ = 56₈).</li>
                <li>• <strong>Binario &harr; Hexadecimal:</strong> Grupos de 4 bits (ej. 1111 1010₂ = FA₁₆).</li>
              </ul>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Conversor Interactivo con Procedimiento Completo",
            description: "Ingresa cualquier cifra en cualquier base y visualiza no solo los resultados equivalentes, sino la escalera completa de divisiones sucesivas paso a paso:",
            widget: {
              file: "widgets/tics/u01_conversor_sistemas.html",
              title: "Conversor de Sistemas Numéricos",
              height: "530px"
            }
          }
        ]
      }
    ]
  },

  "tics-u01-t05-propiedades-naturales": {
    id: "tics-u01-t05-propiedades-naturales",
    title: "1.5 Propiedades fundamentales de los números naturales",
    subtitle: "División euclidiana, lema de división, Algoritmo de Euclides para MCD y relación canónica con el MCM.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Media",
    category: "Sistemas Numéricos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Algoritmo de Euclides", type: "teal" },
      { text: "MCD y MCM", type: "amber" }
    ],
    sections: [
      {
        id: "division-euclidiana-mcd",
        title: "1. División Euclidiana y Algoritmo de Euclides",
        shortTitle: "División y Euclides",
        icon: "fa-divide",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            El <strong>Algoritmo de la División</strong> establece que dados dos enteros <code>a</code> y <code>b</code> con <code>b > 0</code>, existen enteros únicos <code>q</code> (cociente) y <code>r</code> (residuo) tales que:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3">
            a = b · q + r, &nbsp;&nbsp; con 0 ≤ r < b
          </div>

          <p class="text-sm text-gray-300 leading-relaxed mb-3">
            El <strong>Algoritmo de Euclides</strong> es uno de los algoritmos más antiguos y eficientes de la historia de las matemáticas (complejidad logarítmica <code>O(log(min(a, b)))</code>). Se fundamenta en el teorema:
            <code class="text-sky-300 font-mono block my-2 text-center text-sm">MCD(a, b) = MCD(b, a mod b)</code>
            El proceso se repite sucesivamente hasta obtener un residuo <code>0</code>; el último residuo no nulo es el Máximo Común Divisor.
          </p>

          <div class="bg-[#141923] border border-gray-800 rounded-xl p-3 font-mono text-xs text-amber-300">
            <strong>Relación Fundamental MCD y MCM:</strong><br>
            a · b = MCD(a, b) · MCM(a, b) &rArr; MCM(a, b) = (a · b) / MCD(a, b)
          </div>

          <!-- Descomposición Prima: MCD y MCM (Insumo) -->
          <div class="mt-6 pt-4 border-t border-gray-800/80">
            <h4 class="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <i class="fas fa-layer-group text-teal-400"></i> Cálculo de MCD y MCM por Descomposición Prima
            </h4>
            <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
              Además del algoritmo euclidiano, el <strong>Teorema Fundamental de la Aritmética</strong> permite calcular el MCD y el MCM factorizando los números en sus factores primos:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div class="subcard-box p-4 border-teal-500/30">
                <h5 class="text-teal-400 font-bold text-xs uppercase mb-1.5 flex items-center gap-1.5">
                  <i class="fas fa-check-double"></i> Mínimo Común Múltiplo (MCM)
                </h5>
                <p class="text-xs text-gray-300 leading-relaxed mb-2">
                  <strong>Regla:</strong> Se descomponen los números en factores primos, y se multiplican los <em>comunes y no comunes al mayor exponente</em>.
                </p>
                <div class="bg-[#090d14] p-2.5 rounded text-[11px] font-mono text-gray-300 space-y-1 border border-gray-800">
                  <div>12 = 2² × 3</div>
                  <div>18 = 2 × 3²</div>
                  <div class="text-teal-400 font-bold">MCM(12, 18) = 2² × 3² = 4 × 9 = 36</div>
                </div>
              </div>

              <div class="subcard-box p-4 border-sky-500/30">
                <h5 class="text-sky-400 font-bold text-xs uppercase mb-1.5 flex items-center gap-1.5">
                  <i class="fas fa-compress-alt"></i> Máximo Común Divisor (MCD)
                </h5>
                <p class="text-xs text-gray-300 leading-relaxed mb-2">
                  <strong>Regla:</strong> Se descomponen los números en factores primos, y se multiplican <em>SOLO los factores comunes al menor exponente</em>.
                </p>
                <div class="bg-[#090d14] p-2.5 rounded text-[11px] font-mono text-gray-300 space-y-1 border border-gray-800">
                  <div>12 = 2² × 3</div>
                  <div>18 = 2 × 3²</div>
                  <div class="text-sky-400 font-bold">MCD(12, 18) = 2 × 3 = 6</div>
                </div>
              </div>
            </div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "¡Vamos a la Pizarra!: MCM por Descomposición Prima",
            description: "Sigue la clase interactiva con el Profe Leo: descomposición en factores primos de 12 y 18, selección de factores comunes y no comunes al mayor exponente y cálculo de MCM(12, 18) = 36:",
            widget: {
              file: "widgets/tics/u01_pizarra_mcm.html",
              title: "Pizarra: MCM",
              height: "610px"
            }
          },
          {
            category: "explora",
            title: "¡Vamos a la Pizarra!: MCD por Descomposición Prima",
            description: "Sigue la clase interactiva con el Profe Leo: descomposición en factores primos de 12 y 18, selección de factores comunes al menor exponente y cálculo de MCD(12, 18) = 6:",
            widget: {
              file: "widgets/tics/u01_pizarra_mcd.html",
              title: "Pizarra: MCD",
              height: "610px"
            }
          },
          {
            category: "explora",
            title: "Simulador del Algoritmo de Euclides (MCD y MCM)",
            description: "Introduce dos números enteros y visualiza la tabla completa de divisiones sucesivas, el residuo que define el MCD y el cálculo derivado del MCM:",
            widget: {
              file: "widgets/tics/u01_algoritmo_euclides.html",
              title: "Algoritmo de Euclides",
              height: "520px"
            }
          }
        ]
      }
    ]
  },

  "tics-u01-t06-aritmetica-modular": {
    id: "tics-u01-t06-aritmetica-modular",
    title: "1.6 Aritmética modular",
    subtitle: "Congruencias, anillos de residuos Zn, aritmética de reloj y sus aplicaciones directas en criptografía y dispersión hash.",
    unit: 1,
    unitTitle: "Unidad 01: Sistemas numéricos",
    week: 1,
    weekTitle: "Unidad 01: Sistemas numéricos",
    difficulty: "Media",
    category: "Sistemas Numéricos",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 01", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Módulo Zn", type: "teal" },
      { text: "Criptografía y Hash", type: "purple" }
    ],
    sections: [
      {
        id: "congruencia-modular",
        title: "1. Congruencias y Anillo Zn",
        shortTitle: "¿En qué consiste?",
        icon: "fa-clock",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            La <strong>aritmética modular</strong> es un sistema aritmético para números enteros donde los números "se reinician" al alcanzar un cierto valor llamado <strong>módulo</strong> <code>n</code>. Formalmente, dos enteros <code>a</code> y <code>b</code> son congruentes módulo <code>n</code> si su diferencia es divisible exactamente por <code>n</code>:
          </p>

          <div class="bg-[#090d14] border border-teal-500/30 rounded-xl p-3 text-center font-mono text-emerald-400 text-sm my-3">
            a ≡ b (mod n) &iff; n | (a - b) &iff; a mod n = b mod n
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
            El ejemplo más intuitivo es el <strong>reloj de 12 horas</strong>: si son las 10:00 y transcurren 5 horas, no son las 15:00 en un reloj clásico, sino las <code>(10 + 5) mod 12 = 3:00</code>.
          </p>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Aritmética Modular (Reloj Circular Zn)",
            description: "Experimenta con el dial circular de residuos Zn, calcula sumas, restas y productos modulares, y comprende la representación geométrica de las congruencias:",
            widget: {
              file: "widgets/tics/u01_aritmetica_modular.html",
              title: "Simulador de Aritmética Modular",
              height: "520px"
            }
          },
          {
            category: "practica",
            title: "Reto Integrador de la Unidad 01: Sistemas Numéricos",
            description: "Pon a prueba tus competencias en valor posicional, conversiones de base, algoritmo de Euclides y aritmética modular con 5 desafíos interactivos con puntaje:",
            widget: {
              file: "widgets/tics/u01_reto_sistemas_numericos.html",
              title: "Reto Integrador Unidad 01",
              height: "560px"
            }
          }
        ]
      }
    ],
    comprueba: {
      title: "Comprueba: Evaluación de Sistemas Numéricos y Aritmética",
      subtitle: "Evaluación interactiva de la Unidad 01: Sistemas numéricos.",
      widget: {
        file: "widgets/tics/u01_reto_sistemas_numericos.html",
        title: "Evaluación Unidad 01",
        height: "580px"
      }
    }
  }
};
