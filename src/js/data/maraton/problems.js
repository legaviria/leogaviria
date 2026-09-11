/**
 * BANCO DE PROBLEMAS - MARATÓN: SOLUCIÓN DE PROBLEMAS
 * Colección pedagógica de 43 problemas con casos de prueba, pistas y conceptos.
 */

export const MARATON_PROBLEMS = [
  {
    "id": "prob-1000",
    "numero": 1000,
    "titulo": "Hola Mundo!",
    "slug": "hola-mundo",
    "descripcion": "Bienvenido al módulo **Maratón: Solución de Problemas**. Tu primer reto es el saludo tradicional de todo programador: escribir un programa que imprima el mensaje de bienvenida exacto en la consola.",
    "entrada": "Este problema no requiere ningún dato de entrada.",
    "salida": "Debes imprimir el mensaje exacto `Hola Mundo!` (o `Hello World!`), seguido de un salto de línea.",
    "ejemplo_entrada": "",
    "ejemplo_salida": "Hola Mundo!",
    "unidad": "Unidad 01: Fundamentos de la programación",
    "unidadId": "unidad-01",
    "temas": [
      "Fundamentos"
    ],
    "conceptos": [
      "print()",
      "salida estándar",
      "cadenas de texto"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "# Escribe tu primer programa de Maratón aquí\nprint(\"Hola Mundo!\")\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "",
        "salida_esperada": "Hola Mundo!",
        "visible": true,
        "descripcion": "Caso base de bienvenida"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "",
        "salida_esperada": "Hola Mundo!",
        "visible": false
      }
    ],
    "pistas": [
      "Utiliza la función print() para enviar texto a la salida estándar.",
      "Recuerda encerrar el texto entre comillas dobles o simples: print(\"Hola Mundo!\").",
      "Verifica que las mayúsculas, minúsculas y el signo de exclamación coincidan con la especificación."
    ],
    "retroalimentacion": {
      "exito": "¡Felicitaciones! Has completado tu primer reto en Maratón. La función print() es tu ventana para comunicarte con el usuario.",
      "error_comun": "Revisa los caracteres exactos: asegúrate de no agregar espacios de más ni omitir la exclamación.",
      "pista_falla": "En Python, los textos literales deben estar delimitados por comillas."
    },
    "fuente": "beecrowd",
    "fuente_id": 1000,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1000",
    "activo": true,
    "orden": 1
  },
  {
    "id": "prob-1001",
    "numero": 1001,
    "titulo": "Extremadamente Básico",
    "slug": "extremadamente-basico",
    "descripcion": "Lee dos variables enteras, denominadas **A** y **B**, y calcula la suma de ambas, asignando el resultado a la variable **X**. Muestra el resultado en el formato especificado.",
    "entrada": "El archivo de entrada contiene dos valores enteros, cada uno en una línea separada.",
    "salida": "Imprime la letra `X` (en mayúscula) con un espacio antes y después del signo igual, seguido del valor de la suma.",
    "ejemplo_entrada": "10\n9",
    "ejemplo_salida": "X = 19",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "input()",
      "int()",
      "operador +",
      "asignación de variables"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "# Lee las dos variables enteras y muestra X = resultado\nA = int(input())\nB = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "10\n9",
        "salida_esperada": "X = 19",
        "visible": true,
        "descripcion": "Suma de enteros positivos"
      },
      {
        "id": 2,
        "entrada": "-10\n4",
        "salida_esperada": "X = -6",
        "visible": true,
        "descripcion": "Suma con entero negativo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "15\n-7",
        "salida_esperada": "X = 8",
        "visible": false
      },
      {
        "id": 4,
        "entrada": "0\n0",
        "salida_esperada": "X = 0",
        "visible": false
      }
    ],
    "pistas": [
      "La función input() retorna una cadena; debes convertirla a número entero con int(input()).",
      "Crea la variable X = A + B.",
      "Para imprimir con el formato exacto usa print(f\"X = {X}\") o print(\"X =\", X)."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente! Has dominado la lectura de datos con conversión de tipos y la asignación aritmética.",
      "error_comun": "Ten cuidado con los espacios: debe ser 'X = resultado', no 'X=resultado'.",
      "pista_falla": "Recuerda que si sumas dos cadenas sin int(), se concatenarán en lugar de sumarse numéricamente."
    },
    "fuente": "beecrowd",
    "fuente_id": 1001,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1001",
    "activo": true,
    "orden": 2
  },
  {
    "id": "prob-1002",
    "numero": 1002,
    "titulo": "Área del Círculo",
    "slug": "area-del-circulo",
    "descripcion": "La fórmula para calcular el área de una circunferencia es: $A = \\pi \\cdot R^2$. Para este problema considera el valor de $\\pi = 3.14159$. Lee el valor del radio $R$, calcula el área correspondiente y muéstrala con 4 cifras decimales.",
    "entrada": "La entrada contiene un valor de punto flotante (precisión doble) que representa el radio $R$.",
    "salida": "Imprime el mensaje `A=` seguido del valor del área calculada con 4 lugares después del punto decimal.",
    "ejemplo_entrada": "2.00",
    "ejemplo_salida": "A=12.5664",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "float()",
      "potencia **",
      "formato de números flotantes :.4f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "# Calcula el área de la circunferencia con pi = 3.14159\nR = float(input())\npi = 3.14159\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "2.00",
        "salida_esperada": "A=12.5664",
        "visible": true,
        "descripcion": "Radio pequeño"
      },
      {
        "id": 2,
        "entrada": "100.64",
        "salida_esperada": "A=31819.3103",
        "visible": true,
        "descripcion": "Radio con decimales"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "150.00",
        "salida_esperada": "A=70685.7750",
        "visible": false
      }
    ],
    "pistas": [
      "Convierte la entrada a decimal con float(input()).",
      "Calcula la potencia usando R ** 2 o R * R.",
      "Para formatear a 4 decimales usa f-strings: print(f\"A={area:.4f}\")."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo! El formateo de números en coma flotante es indispensable en ingeniería y ciencias computacionales.",
      "error_comun": "Verifica que uses pi = 3.14159 y no la constante math.pi completa para asegurar la precisión requerida.",
      "pista_falla": "Usa la sintaxis :.4f para limitar a exactamente 4 cifras decimales."
    },
    "fuente": "beecrowd",
    "fuente_id": 1002,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1002",
    "activo": true,
    "orden": 3
  },
  {
    "id": "prob-1003",
    "numero": 1003,
    "titulo": "Suma Simple",
    "slug": "suma-simple",
    "descripcion": "Lee dos valores enteros llamados A y B. Calcula la suma entre ellos y guárdala en una variable llamada SOMA. Muestra el resultado.",
    "entrada": "Dos números enteros ingresados en líneas separadas.",
    "salida": "Imprime `SOMA = ` seguido del valor de la suma con un espacio antes y después del signo igual.",
    "ejemplo_entrada": "30\n10",
    "ejemplo_salida": "SOMA = 40",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "input()",
      "int()",
      "variables",
      "operadores aritméticos"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = int(input())\nB = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "30\n10",
        "salida_esperada": "SOMA = 40",
        "visible": true,
        "descripcion": "Suma positiva"
      },
      {
        "id": 2,
        "entrada": "-30\n10",
        "salida_esperada": "SOMA = -20",
        "visible": true,
        "descripcion": "Suma con negativo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "0\n0",
        "salida_esperada": "SOMA = 0",
        "visible": false
      }
    ],
    "pistas": [
      "Asigna la suma a la variable SOMA = A + B.",
      "Muestra el resultado con print(f\"SOMA = {SOMA}\").",
      "Caso de borde: Si la suma involucra números negativos, el operador + mantiene la regla de los signos (ej: -30 + 10 = -20). No agregues lógica condicional innecesaria."
    ],
    "retroalimentacion": {
      "exito": "¡Bien hecho! Has realizado una suma secuencial limpia.",
      "error_comun": "Asegúrate de que la palabra SOMA esté completamente en mayúsculas.",
      "pista_falla": "Revisa los espacios alrededor del signo igual: 'SOMA = valor'."
    },
    "fuente": "beecrowd",
    "fuente_id": 1003,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1003",
    "activo": true,
    "orden": 4
  },
  {
    "id": "prob-1004",
    "numero": 1004,
    "titulo": "Producto Simple",
    "slug": "producto-simple",
    "descripcion": "Lee dos valores enteros. A continuación, calcula el producto entre ellos y almacena el resultado en una variable llamada PROD. Muestra el resultado.",
    "entrada": "Dos números enteros en líneas separadas.",
    "salida": "Imprime `PROD = ` seguido del valor del producto.",
    "ejemplo_entrada": "3\n9",
    "ejemplo_salida": "PROD = 27",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "operador *",
      "multiplicación de enteros"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = int(input())\nB = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "3\n9",
        "salida_esperada": "PROD = 27",
        "visible": true,
        "descripcion": "Multiplicación positiva"
      },
      {
        "id": 2,
        "entrada": "-30\n10",
        "salida_esperada": "PROD = -300",
        "visible": true,
        "descripcion": "Signos distintos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "0\n9",
        "salida_esperada": "PROD = 0",
        "visible": false
      }
    ],
    "pistas": [
      "En Python, la multiplicación se realiza con el asterisco (*).",
      "Asigna PROD = A * B y muestra print(f\"PROD = {PROD}\").",
      "Caso de borde: Considera que la multiplicación por 0 debe dar exactamente 0 (PROD = 0) y el producto de dos números negativos da un resultado positivo."
    ],
    "retroalimentacion": {
      "exito": "¡Correcto! Has aplicado el operador de producto aritmético.",
      "error_comun": "Verifica que la salida sea 'PROD = valor' con mayúsculas exactas.",
      "pista_falla": "En Python: multiplicación es * y no x."
    },
    "fuente": "beecrowd",
    "fuente_id": 1004,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1004",
    "activo": true,
    "orden": 5
  },
  {
    "id": "prob-1005",
    "numero": 1005,
    "titulo": "Promedio 1",
    "slug": "promedio-1",
    "descripcion": "Lee dos notas de un estudiante: nota A y nota B. Calcula el promedio ponderado sabiendo que la nota A tiene un peso de 3.5 y la nota B tiene un peso de 7.5 (la suma de los pesos es 11). Muestra el promedio con 5 cifras decimales.",
    "entrada": "Dos números de punto flotante correspondientes a las notas del estudiante.",
    "salida": "Imprime `MEDIA = ` seguido del promedio ponderado formateado a 5 decimales.",
    "ejemplo_entrada": "5.0\n7.1",
    "ejemplo_salida": "MEDIA = 6.43182",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "promedio ponderado",
      "división flotante",
      "formato :.5f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = float(input())\nB = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5.0\n7.1",
        "salida_esperada": "MEDIA = 6.43182",
        "visible": true,
        "descripcion": "Promedio ponderado estándar"
      },
      {
        "id": 2,
        "entrada": "0.0\n7.1",
        "salida_esperada": "MEDIA = 4.84091",
        "visible": true,
        "descripcion": "Caso con nota cero"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "10.0\n10.0",
        "salida_esperada": "MEDIA = 10.00000",
        "visible": false
      }
    ],
    "pistas": [
      "Fórmula del promedio ponderado: (A * 3.5 + B * 7.5) / 11.0.",
      "Para 5 decimales utiliza :.5f.",
      "Caso de borde y formato: La suma de pesos es 3.5 + 7.5 = 11. Recuerda redondear a 5 decimales con f'{media:.5f}' para evitar imprecisiones de coma flotante."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente cálculo! El promedio ponderado es fundamental para sistemas de calificación.",
      "error_comun": "Recuerda agrupar la suma con paréntesis antes de dividir entre 11.",
      "pista_falla": "Usa f'MEDIA = {media:.5f}'."
    },
    "fuente": "beecrowd",
    "fuente_id": 1005,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1005",
    "activo": true,
    "orden": 6
  },
  {
    "id": "prob-1006",
    "numero": 1006,
    "titulo": "Promedio 2",
    "slug": "promedio-2",
    "descripcion": "Lee tres notas: A, B y C. Calcula el promedio ponderado sabiendo que el peso de A es 2, el de B es 3 y el de C es 5 (suma de pesos: 10). Muestra el promedio con 1 cifra decimal.",
    "entrada": "Tres números de punto flotante en líneas separadas.",
    "salida": "Imprime `MEDIA = ` seguido del promedio con un decimal.",
    "ejemplo_entrada": "5.0\n6.0\n7.0",
    "ejemplo_salida": "MEDIA = 6.3",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "promedio de tres valores",
      "pesos 2, 3 y 5",
      "formato :.1f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = float(input())\nB = float(input())\nC = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5.0\n6.0\n7.0",
        "salida_esperada": "MEDIA = 6.3",
        "visible": true,
        "descripcion": "Notas intermedias"
      },
      {
        "id": 2,
        "entrada": "5.0\n10.0\n10.0",
        "salida_esperada": "MEDIA = 9.0",
        "visible": true,
        "descripcion": "Notas altas"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "10.0\n10.0\n5.0",
        "salida_esperada": "MEDIA = 7.5",
        "visible": false
      }
    ],
    "pistas": [
      "Fórmula: (A * 2 + B * 3 + C * 5) / 10.0.",
      "Formatea la salida con print(f\"MEDIA = {media:.1f}\").",
      "Caso de borde y formato: La suma de pesos es 2 + 3 + 5 = 10. Asegúrate de mostrar exactamente 1 decimal con f'{media:.1f}'."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien! Has aplicado ponderaciones múltiples con precisión.",
      "error_comun": "Verifica que el divisor sea 10.0 (la suma de 2 + 3 + 5).",
      "pista_falla": "Usa :.1f para una sola cifra decimal."
    },
    "fuente": "beecrowd",
    "fuente_id": 1006,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1006",
    "activo": true,
    "orden": 7
  },
  {
    "id": "prob-1007",
    "numero": 1007,
    "titulo": "Diferencia",
    "slug": "diferencia",
    "descripcion": "Lee cuatro valores enteros (A, B, C y D). Calcula y muestra la diferencia del producto de A y B por el producto de C y D según la fórmula: $DIFERENCA = (A \\cdot B - C \\cdot D)$.",
    "entrada": "Cuatro números enteros en líneas separadas.",
    "salida": "Imprime `DIFERENCA = ` seguido del valor de la diferencia calculada.",
    "ejemplo_entrada": "5\n6\n7\n8",
    "ejemplo_salida": "DIFERENCA = -26",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "precedencia de operadores",
      "multiplicación y resta"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A = int(input())\nB = int(input())\nC = int(input())\nD = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5\n6\n7\n8",
        "salida_esperada": "DIFERENCA = -26",
        "visible": true,
        "descripcion": "Caso con resultado negativo"
      },
      {
        "id": 2,
        "entrada": "0\n0\n7\n8",
        "salida_esperada": "DIFERENCA = -56",
        "visible": true,
        "descripcion": "Caso con ceros"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "5\n6\n-7\n8",
        "salida_esperada": "DIFERENCA = 86",
        "visible": false
      }
    ],
    "pistas": [
      "Calcula dif = (A * B - C * D).",
      "Muestra con print(f\"DIFERENCA = {dif}\").",
      "Caso de borde: El cálculo (A * B - C * D) puede generar diferencias negativas si C * D es mayor que A * B. El formato requiere 'DIFERENCA = ' con mayúsculas exactas."
    ],
    "retroalimentacion": {
      "exito": "¡Correcto! La precedencia aritmética resuelve multiplicaciones antes que restas.",
      "error_comun": "Cuida que el identificador sea DIFERENCA sin tildes ni caracteres especiales.",
      "pista_falla": "En Python: (A * B - C * D)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1007,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1007",
    "activo": true,
    "orden": 8
  },
  {
    "id": "prob-1008",
    "numero": 1008,
    "titulo": "Salario",
    "slug": "salario",
    "descripcion": "Escribe un programa que lea el número de un empleado, el número de horas trabajadas y el valor que recibe por hora. Calcula el salario del empleado y muestra su número y salario con 2 decimales.",
    "entrada": "Un entero (número del empleado), un entero (horas trabajadas) y un flotante (pago por hora).",
    "salida": "Imprime `NUMBER = ` con el número del empleado, y en la siguiente línea `SALARY = U$ ` seguido del salario con dos decimales.",
    "ejemplo_entrada": "25\n100\n5.50",
    "ejemplo_salida": "NUMBER = 25\nSALARY = U$ 550.00",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "múltiples tipos de datos",
      "salida en varias líneas",
      "formato monetario :.2f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "num = int(input())\nhoras = int(input())\nvalor_hora = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "25\n100\n5.50",
        "salida_esperada": "NUMBER = 25\nSALARY = U$ 550.00",
        "visible": true,
        "descripcion": "Empleado estándar"
      },
      {
        "id": 2,
        "entrada": "1\n200\n20.50",
        "salida_esperada": "NUMBER = 1\nSALARY = U$ 4100.00",
        "visible": true,
        "descripcion": "Salario mayor"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "6\n145\n15.55",
        "salida_esperada": "NUMBER = 6\nSALARY = U$ 2254.75",
        "visible": false
      }
    ],
    "pistas": [
      "El salario es horas * valor_hora.",
      "Recuerda incluir 'U$ ' con espacio antes del monto.",
      "Formatea el salario con :.2f."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente! Has manejado salidas en dos líneas con formato exacto.",
      "error_comun": "Revisa el espacio entre U$ y la cifra: 'SALARY = U$ 550.00'.",
      "pista_falla": "print(f'NUMBER = {num}\\nSALARY = U$ {salario:.2f}')."
    },
    "fuente": "beecrowd",
    "fuente_id": 1008,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1008",
    "activo": true,
    "orden": 9
  },
  {
    "id": "prob-1009",
    "numero": 1009,
    "titulo": "Salario con Bonus",
    "slug": "salario-con-bonus",
    "descripcion": "Lee el nombre de un vendedor, su salario fijo y el total de ventas efectuadas en el mes (en dinero). Sabiendo que el vendedor recibe un 15% de comisión sobre sus ventas, calcula y muestra su salario total a fin de mes con 2 cifras decimales.",
    "entrada": "Una cadena (nombre), un flotante (salario base) y un flotante (ventas totales).",
    "salida": "Imprime `TOTAL = R$ ` seguido del salario total a cobrar con 2 decimales.",
    "ejemplo_entrada": "JOAO\n500.00\n1230.30",
    "ejemplo_salida": "TOTAL = R$ 684.54",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "porcentajes",
      "cálculo de comisiones",
      "formato :.2f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "nombre = input()\nsalario = float(input())\nventas = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "JOAO\n500.00\n1230.30",
        "salida_esperada": "TOTAL = R$ 684.54",
        "visible": true,
        "descripcion": "Ventas con comisión"
      },
      {
        "id": 2,
        "entrada": "PEDRO\n700.00\n0.00",
        "salida_esperada": "TOTAL = R$ 700.00",
        "visible": true,
        "descripcion": "Sin ventas"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "MANGOJATA\n1700.00\n1230.50",
        "salida_esperada": "TOTAL = R$ 1884.58",
        "visible": false
      }
    ],
    "pistas": [
      "La comisión es ventas * 0.15.",
      "El total es salario + comisión.",
      "Muestra con print(f\"TOTAL = R$ {total:.2f}\")."
    ],
    "retroalimentacion": {
      "exito": "¡Bien hecho! Los cálculos comerciales de comisiones y bonos son esenciales en programación aplicada.",
      "error_comun": "No olvides leer el nombre del vendedor con input(), aunque no se use en el cálculo.",
      "pista_falla": "15% equivale a multiplicar por 0.15."
    },
    "fuente": "beecrowd",
    "fuente_id": 1009,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1009",
    "activo": true,
    "orden": 10
  },
  {
    "id": "prob-1010",
    "numero": 1010,
    "titulo": "Cálculo Simple",
    "slug": "calculo-simple",
    "descripcion": "En este problema el objetivo es leer el código de la pieza 1, su cantidad y su precio unitario. Luego, leer los datos de la pieza 2 (código, cantidad y precio unitario). Calcula y muestra el valor total a pagar con 2 decimales.",
    "entrada": "Dos líneas. Cada línea contiene el código (int), la cantidad (int) y el valor unitario (float) separados por un espacio.",
    "salida": "Imprime `VALOR A PAGAR: R$ ` seguido del monto total con 2 decimales.",
    "ejemplo_entrada": "12 1 5.30\n16 2 5.10",
    "ejemplo_salida": "VALOR A PAGAR: R$ 15.50",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "split()",
      "desempaquetado",
      "múltiples valores por línea"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "# Lee dos líneas con valores separados por espacio\nlinea1 = input().split()\nlinea2 = input().split()\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "12 1 5.30\n16 2 5.10",
        "salida_esperada": "VALOR A PAGAR: R$ 15.50",
        "visible": true,
        "descripcion": "Dos piezas distintas"
      },
      {
        "id": 2,
        "entrada": "13 2 15.30\n161 4 5.20",
        "salida_esperada": "VALOR A PAGAR: R$ 51.40",
        "visible": true,
        "descripcion": "Cantidades múltiples"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "1 1 15.10\n2 1 15.10",
        "salida_esperada": "VALOR A PAGAR: R$ 30.20",
        "visible": false
      }
    ],
    "pistas": [
      "Usa input().split() para dividir la línea por espacios.",
      "Para la primera pieza: c1, q1, v1 = linea1; q1 = int(q1); v1 = float(v1).",
      "Total = q1 * v1 + q2 * v2."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente dominio de input().split()! Esta técnica es crucial para leer datos tabulares en una sola línea.",
      "error_comun": "Recuerda convertir la cantidad a int() y el precio a float().",
      "pista_falla": "Usa f'VALOR A PAGAR: R$ {total:.2f}'."
    },
    "fuente": "beecrowd",
    "fuente_id": 1010,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1010",
    "activo": true,
    "orden": 11
  },
  {
    "id": "prob-1011",
    "numero": 1011,
    "titulo": "Esfera",
    "slug": "esfera",
    "descripcion": "Haz un programa que calcule y muestre el volumen de una esfera a partir del valor de su radio $R$. La fórmula es: $V = (4/3) \\cdot \\pi \\cdot R^3$. Considera $\\pi = 3.14159$.",
    "entrada": "Un valor numérico correspondiente al radio $R$.",
    "salida": "Imprime `VOLUME = ` seguido del volumen calculado con 3 cifras decimales.",
    "ejemplo_entrada": "3",
    "ejemplo_salida": "VOLUME = 113.097",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "fórmulas geométricas",
      "potencia cúbica ** 3",
      "formato :.3f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "R = float(input())\npi = 3.14159\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "3",
        "salida_esperada": "VOLUME = 113.097",
        "visible": true,
        "descripcion": "Radio pequeño"
      },
      {
        "id": 2,
        "entrada": "15",
        "salida_esperada": "VOLUME = 14137.155",
        "visible": true,
        "descripcion": "Radio mediano"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "1523",
        "salida_esperada": "VOLUME = 14797486501.627",
        "visible": false
      }
    ],
    "pistas": [
      "Usa (4.0 / 3) * pi * (R ** 3).",
      "Cuidado con la división: en Python 3 '4/3' da 1.3333... de forma flotante.",
      "Formatea a 3 decimales con :.3f."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo con cálculos tridimensionales!",
      "error_comun": "Asegúrate de elevar R al cubo (R**3) y no al cuadrado.",
      "pista_falla": "vol = (4/3) * 3.14159 * (R**3)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1011,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1011",
    "activo": true,
    "orden": 12
  },
  {
    "id": "prob-1012",
    "numero": 1012,
    "titulo": "Área",
    "slug": "area",
    "descripcion": "Escribe un programa que lea tres valores flotantes: A, B y C. Luego, calcula y muestra:\na) El área del triángulo rectángulo que tiene base A y altura C.\nb) El área del círculo de radio C (pi = 3.14159).\nc) El área del trapecio que tiene bases A y B, y altura C.\nd) El área del cuadrado que tiene lado B.\ne) El área del rectángulo que tiene lados A y B.",
    "entrada": "Una línea con tres valores flotantes: A, B y C.",
    "salida": "El archivo de salida debe contener 5 líneas con los resultados de las áreas con 3 cifras decimales.",
    "ejemplo_entrada": "3.0 4.0 5.2",
    "ejemplo_salida": "TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "geometría computacional",
      "fórmulas múltiples",
      "formato :.3f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "A, B, C = map(float, input().split())\npi = 3.14159\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "3.0 4.0 5.2",
        "salida_esperada": "TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000",
        "visible": true,
        "descripcion": "Caso base figuras"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "12.7 10.4 15.2",
        "salida_esperada": "TRIANGULO: 96.520\nCIRCULO: 725.833\nTRAPEZIO: 175.560\nQUADRADO: 108.160\nRETANGULO: 132.080",
        "visible": false
      }
    ],
    "pistas": [
      "Triángulo: (A * C) / 2.",
      "Círculo: pi * (C ** 2).",
      "Trapecio: ((A + B) * C) / 2.",
      "Cuadrado: B * B.",
      "Rectángulo: A * B."
    ],
    "retroalimentacion": {
      "exito": "¡Impresionante! Has resuelto un conjunto completo de cálculos geométricos.",
      "error_comun": "Revisa los nombres de las figuras: TRIANGULO, CIRCULO, TRAPEZIO, QUADRADO, RETANGULO.",
      "pista_falla": "Recuerda que el radio del círculo es C y el lado del cuadrado es B."
    },
    "fuente": "beecrowd",
    "fuente_id": 1012,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1012",
    "activo": true,
    "orden": 13
  },
  {
    "id": "prob-1013",
    "numero": 1013,
    "titulo": "El Mayor",
    "slug": "el-mayor",
    "descripcion": "Haz un programa que lea tres valores enteros y presente el mayor seguido del mensaje `eh o maior`. Puedes usar condicionales o la fórmula para comparar de a pares.",
    "entrada": "Tres valores enteros en una misma línea.",
    "salida": "Imprime el mayor de los tres valores seguido de un espacio y `eh o maior`.",
    "ejemplo_entrada": "7 14 106",
    "ejemplo_salida": "106 eh o maior",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "if",
      "max()",
      "comparaciones"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "a, b, c = map(int, input().split())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "7 14 106",
        "salida_esperada": "106 eh o maior",
        "visible": true,
        "descripcion": "Mayor al final"
      },
      {
        "id": 2,
        "entrada": "217 14 6",
        "salida_esperada": "217 eh o maior",
        "visible": true,
        "descripcion": "Mayor al inicio"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "10 20 15",
        "salida_esperada": "20 eh o maior",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes usar condicionales: si a >= b y a >= c el mayor es a, etc.",
      "También puedes usar la función integrada max(a, b, c).",
      "Imprime print(f\"{mayor} eh o maior\")."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente lógica de comparación!",
      "error_comun": "Ten cuidado con el texto exacto: 'eh o maior' en minúsculas.",
      "pista_falla": "mayor = max(a, b, c)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1013,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1013",
    "activo": true,
    "orden": 14
  },
  {
    "id": "prob-1014",
    "numero": 1014,
    "titulo": "Consumo",
    "slug": "consumo",
    "descripcion": "Calcula el consumo promedio de un automóvil a partir de la distancia total recorrida (en km) y el total de combustible consumido (en litros). Muestra el resultado con 3 cifras decimales seguido de `km/l`.",
    "entrada": "Un entero X (distancia en km) y un flotante Y (combustible en litros).",
    "salida": "Imprime el valor que representa el consumo promedio con 3 decimales, seguido de un espacio y `km/l`.",
    "ejemplo_entrada": "500\n35.0",
    "ejemplo_salida": "14.286 km/l",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "tasa de consumo",
      "división flotante",
      "formato :.3f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "X = int(input())\nY = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "500\n35.0",
        "salida_esperada": "14.286 km/l",
        "visible": true,
        "descripcion": "Consumo estándar"
      },
      {
        "id": 2,
        "entrada": "2254\n147.4",
        "salida_esperada": "15.292 km/l",
        "visible": true,
        "descripcion": "Viaje largo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "4554\n464.6",
        "salida_esperada": "9.802 km/l",
        "visible": false
      }
    ],
    "pistas": [
      "El consumo promedio es distancia / combustible: X / Y.",
      "Formatea con print(f\"{consumo:.3f} km/l\").",
      "Caso de borde y formato: Asegúrate de convertir la distancia a entero (o float) y el combustible a float. La salida debe tener exactamente 3 decimales seguidos de ' km/l'."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien! El cálculo de ratios es ampliamente utilizado.",
      "error_comun": "Asegúrate de incluir 'km/l' con un espacio después del número.",
      "pista_falla": "consumo = X / Y."
    },
    "fuente": "beecrowd",
    "fuente_id": 1014,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1014",
    "activo": true,
    "orden": 15
  },
  {
    "id": "prob-1015",
    "numero": 1015,
    "titulo": "Distancia Entre dos Puntos",
    "slug": "distancia-entre-dos-puntos",
    "descripcion": "Lee los cuatro valores correspondientes a las coordenadas de dos puntos en el plano: $p_1 = (x_1, y_1)$ y $p_2 = (x_2, y_2)$. Calcula la distancia euclidiana entre ellos usando la fórmula $D = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ y muéstrala con 4 decimales.",
    "entrada": "Dos líneas. Cada línea contiene dos valores flotantes separados por un espacio.",
    "salida": "Imprime el valor de la distancia con 4 cifras decimales.",
    "ejemplo_entrada": "1.0 7.0\n5.0 9.0",
    "ejemplo_salida": "4.4721",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "fórmula euclidiana",
      "raíz cuadrada math.sqrt o ** 0.5",
      "formato :.4f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "import math\nx1, y1 = map(float, input().split())\nx2, y2 = map(float, input().split())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "1.0 7.0\n5.0 9.0",
        "salida_esperada": "4.4721",
        "visible": true,
        "descripcion": "Puntos cuadrante 1"
      },
      {
        "id": 2,
        "entrada": "-2.5 0.4\n12.1 7.3",
        "salida_esperada": "16.1484",
        "visible": true,
        "descripcion": "Coordenadas con negativos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "2.5 -0.4\n-12.2 7.0",
        "salida_esperada": "16.4575",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes calcular la raíz usando math.sqrt() o elevando a la 0.5: ** 0.5.",
      "dist = math.sqrt((x2 - x1)**2 + (y2 - y1)**2).",
      "Muestra con print(f\"{dist:.4f}\")."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo aplicando geometría analítica en Python!",
      "error_comun": "Revisa los signos de resta: (x2 - x1)**2.",
      "pista_falla": "La raíz cuadrada de z se puede calcular como z ** 0.5."
    },
    "fuente": "beecrowd",
    "fuente_id": 1015,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1015",
    "activo": true,
    "orden": 16
  },
  {
    "id": "prob-1016",
    "numero": 1016,
    "titulo": "Distancia",
    "slug": "distancia",
    "descripcion": "Dos autos (X e Y) parten en la misma dirección. El auto X sale con una velocidad constante de 60 km/h y el auto Y sale con una velocidad constante de 90 km/h. En una hora (60 minutos), el auto Y se aleja 30 kilómetros del auto X, es decir, se aleja 1 kilómetro cada 2 minutos. Lee la distancia (en km) y calcula cuánto tiempo le toma al auto Y tomar esa distancia respecto al auto X.",
    "entrada": "Un valor entero que representa la distancia en kilómetros.",
    "salida": "Imprime el tiempo necesario seguido del texto `minutos`.",
    "ejemplo_entrada": "30",
    "ejemplo_salida": "60 minutos",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "velocidad relativa",
      "física computacional"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "distancia = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "30",
        "salida_esperada": "60 minutos",
        "visible": true,
        "descripcion": "Distancia de 30 km"
      },
      {
        "id": 2,
        "entrada": "110",
        "salida_esperada": "220 minutos",
        "visible": true,
        "descripcion": "Distancia de 110 km"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "7",
        "salida_esperada": "14 minutos",
        "visible": false
      }
    ],
    "pistas": [
      "Si se aleja 1 km cada 2 minutos, el tiempo total en minutos es distancia * 2.",
      "Muestra con print(f\"{distancia * 2} minutos\").",
      "Caso de borde y lógica: Dado que el carro Y se aleja a 1 km cada 2 minutos (30 km/h de velocidad relativa), la fórmula directa es distancia * 2 minutos."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente razonamiento sobre velocidad relativa!",
      "error_comun": "Asegúrate de incluir la palabra 'minutos' con espacio.",
      "pista_falla": "tiempo = distancia * 2."
    },
    "fuente": "beecrowd",
    "fuente_id": 1016,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1016",
    "activo": true,
    "orden": 17
  },
  {
    "id": "prob-1017",
    "numero": 1017,
    "titulo": "Combustible Gastado",
    "slug": "combustible-gastado",
    "descripcion": "Un automóvil rinde 12 km/L de combustible. Escribe un programa para calcular y mostrar la cantidad de litros de combustible gastados en un viaje, dados el tiempo gastado (en horas) y la velocidad media (en km/h).",
    "entrada": "Dos enteros: el tiempo gastado en horas y la velocidad media en km/h.",
    "salida": "Imprime la cantidad de litros consumidos con 3 cifras decimales.",
    "ejemplo_entrada": "10\n85",
    "ejemplo_salida": "70.833",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "distancia = tiempo * velocidad",
      "litros = distancia / 12",
      "formato :.3f"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "tiempo = int(input())\nvelocidad = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "10\n85",
        "salida_esperada": "70.833",
        "visible": true,
        "descripcion": "Viaje largo"
      },
      {
        "id": 2,
        "entrada": "2\n92",
        "salida_esperada": "15.333",
        "visible": true,
        "descripcion": "Viaje corto"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "22\n67",
        "salida_esperada": "122.833",
        "visible": false
      }
    ],
    "pistas": [
      "Primero calcula la distancia: distancia = tiempo * velocidad.",
      "Luego calcula los litros dividiendo entre 12: litros = distancia / 12.",
      "Formatea a 3 decimales con print(f\"{litros:.3f}\")."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien resuelto!",
      "error_comun": "No dividas entre 12 con división entera //, usa división flotante /.",
      "pista_falla": "litros = (tiempo * velocidad) / 12.0."
    },
    "fuente": "beecrowd",
    "fuente_id": 1017,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1017",
    "activo": true,
    "orden": 18
  },
  {
    "id": "prob-1018",
    "numero": 1018,
    "titulo": "Billetes",
    "slug": "billetes",
    "descripcion": "Lee un valor entero. A continuación, calcula el menor número posible de billetes en los que se puede descomponer el valor. Los billetes posibles son de 100, 50, 20, 10, 5, 2 y 1. Muestra el valor leído y la relación de billetes.",
    "entrada": "Un número entero positivo.",
    "salida": "Imprime el valor leído y a continuación la cantidad de billetes de cada denominación.",
    "ejemplo_entrada": "576",
    "ejemplo_salida": "576\n5 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n1 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n0 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores",
      "Ciclos"
    ],
    "conceptos": [
      "algoritmo voraz / greedy",
      "división entera //",
      "módulo %"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "valor = int(input())\nprint(valor)\nbilletes = [100, 50, 20, 10, 5, 2, 1]\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "576",
        "salida_esperada": "576\n5 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n1 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n0 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00",
        "visible": true,
        "descripcion": "Descomposición estándar"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "11257",
        "salida_esperada": "11257\n112 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n0 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n1 nota(s) de R$ 2,00\n0 nota(s) de R$ 1,00",
        "visible": false
      },
      {
        "id": 3,
        "entrada": "503",
        "salida_esperada": "503\n5 nota(s) de R$ 100,00\n0 nota(s) de R$ 50,00\n0 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n0 nota(s) de R$ 5,00\n1 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00",
        "visible": false
      }
    ],
    "pistas": [
      "Primero imprime el valor original: print(valor).",
      "Para cada billete: cantidad = resto // billete; resto = resto % billete.",
      "Formato: f\"{cantidad} nota(s) de R$ {billete},00\"."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente algoritmo voraz de descomposición de cambio!",
      "error_comun": "Recuerda imprimir el valor original antes de la lista de billetes.",
      "pista_falla": "Usa una lista con [100, 50, 20, 10, 5, 2, 1] y un ciclo for."
    },
    "fuente": "beecrowd",
    "fuente_id": 1018,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1018",
    "activo": true,
    "orden": 19
  },
  {
    "id": "prob-1020",
    "numero": 1020,
    "titulo": "Edad en Días",
    "slug": "edad-en-dias",
    "descripcion": "Lee un valor entero correspondiente a la edad de una persona en días y muéstralo en años, meses y días, seguido por el texto respectivo. Considera el año con 365 días y el mes con 30 días.",
    "entrada": "Un valor entero que representa la cantidad de días.",
    "salida": "Tres líneas: `X ano(s)`, `Y mes(es)`, `Z dia(s)`.",
    "ejemplo_entrada": "400",
    "ejemplo_salida": "1 ano(s)\n1 mes(es)\n5 dia(s)",
    "unidad": "Unidad 03: Elementos básicos de programación",
    "unidadId": "unidad-03",
    "temas": [
      "Variables",
      "Operadores"
    ],
    "conceptos": [
      "división entera //",
      "resto %",
      "conversión temporal"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "dias = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "400",
        "salida_esperada": "1 ano(s)\n1 mes(es)\n5 dia(s)",
        "visible": true,
        "descripcion": "Más de un año"
      },
      {
        "id": 2,
        "entrada": "800",
        "salida_esperada": "2 ano(s)\n2 mes(es)\n10 dia(s)",
        "visible": true,
        "descripcion": "Más de dos años"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "30",
        "salida_esperada": "0 ano(s)\n1 mes(es)\n0 dia(s)",
        "visible": false
      }
    ],
    "pistas": [
      "Años = dias // 365.",
      "Resto = dias % 365.",
      "Meses = resto // 30; Días restantes = resto % 30."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo dominando la aritmética modular!",
      "error_comun": "Considera exactamente 365 días por año y 30 días por mes según el enunciado.",
      "pista_falla": "Usa // para el cociente entero y % para el resto."
    },
    "fuente": "beecrowd",
    "fuente_id": 1020,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1020",
    "activo": true,
    "orden": 20
  },
  {
    "id": "prob-1043",
    "numero": 1043,
    "titulo": "Triángulo",
    "slug": "triangulo",
    "descripcion": "Lee tres valores de punto flotante (A, B y C) y verifica si con ellos es posible formar un triángulo. De ser posible, calcula el perímetro del triángulo y muéstralo con el mensaje `Perimetro = XX.X`. Si no es posible, calcula el área del trapecio que tiene a A y B como bases y a C como altura, mostrando `Area = XX.X`.",
    "entrada": "Tres valores flotantes en una sola línea.",
    "salida": "Imprime `Perimetro = ` o `Area = ` con un decimal.",
    "ejemplo_entrada": "6.0 4.0 2.0",
    "ejemplo_salida": "Area = 10.0",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "desigualdad triangular",
      "if / else",
      "área de trapecio"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "A, B, C = map(float, input().split())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6.0 4.0 2.0",
        "salida_esperada": "Area = 10.0",
        "visible": true,
        "descripcion": "No forma triángulo (trapecio)"
      },
      {
        "id": 2,
        "entrada": "6.0 4.0 2.1",
        "salida_esperada": "Perimetro = 12.1",
        "visible": true,
        "descripcion": "Forma triángulo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "5.0 5.0 5.0",
        "salida_esperada": "Perimetro = 15.0",
        "visible": false
      }
    ],
    "pistas": [
      "Desigualdad triangular: A < B + C y B < A + C y C < A + B.",
      "Perímetro = A + B + C.",
      "Área trapecio = ((A + B) * C) / 2."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente aplicación de la propiedad geométrica de los triángulos!",
      "error_comun": "Deben cumplirse las tres condiciones de desigualdad triangular simultáneamente.",
      "pista_falla": "if A < B + C and B < A + C and C < A + B:"
    },
    "fuente": "beecrowd",
    "fuente_id": 1043,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1043",
    "activo": true,
    "orden": 21
  },
  {
    "id": "prob-1044",
    "numero": 1044,
    "titulo": "Múltiplos",
    "slug": "multiplos",
    "descripcion": "Lee dos valores enteros (A y B). Después, el programa debe mostrar el mensaje `Sao Multiplos` o `Nao sao Multiplos`, dependiendo de si los números son múltiplos el uno del otro.",
    "entrada": "Dos números enteros en una sola línea.",
    "salida": "Muestra `Sao Multiplos` o `Nao sao Multiplos`.",
    "ejemplo_entrada": "6 24",
    "ejemplo_salida": "Sao Multiplos",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "operador módulo %",
      "divisibilidad mutua"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "A, B = map(int, input().split())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6 24",
        "salida_esperada": "Sao Multiplos",
        "visible": true,
        "descripcion": "Múltiplos en orden"
      },
      {
        "id": 2,
        "entrada": "6 25",
        "salida_esperada": "Nao sao Multiplos",
        "visible": true,
        "descripcion": "No múltiplos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "24 6",
        "salida_esperada": "Sao Multiplos",
        "visible": false
      }
    ],
    "pistas": [
      "Dos números son múltiplos si A % B == 0 o B % A == 0.",
      "Recuerda que el orden de entrada no garantiza cuál es el mayor.",
      "Caso de borde: Dos números son múltiplos si A % B == 0 o B % A == 0. Recuerda probar ambos sentidos porque los números pueden venir en cualquier orden."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien! Considerar ambos sentidos (A%B o B%A) es la clave de este problema.",
      "error_comun": "No asumas que B siempre es mayor que A.",
      "pista_falla": "if A % B == 0 or B % A == 0:"
    },
    "fuente": "beecrowd",
    "fuente_id": 1044,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1044",
    "activo": true,
    "orden": 22
  },
  {
    "id": "prob-1045",
    "numero": 1045,
    "titulo": "Tipos de Triángulos",
    "slug": "tipos-de-triangulos",
    "descripcion": "Lee 3 números flotantes (A, B y C) y ordénalos de forma decreciente, de modo que el lado A sea el mayor de los tres. Luego clasifícalos según sus lados y ángulos.",
    "entrada": "Tres números flotantes en una sola línea.",
    "salida": "Muestra la clasificación correspondiente (NAO FORMA TRIANGULO, TRIANGULO RETANGULO, OBTUSANGULO, ACUTANGULO, EQUILATERO, ISOSCELES).",
    "ejemplo_entrada": "7.0 5.0 7.0",
    "ejemplo_salida": "TRIANGULO ACUTANGULO\nTRIANGULO ISOSCELES",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "ordenamiento de 3 valores",
      "clasificación por ángulos y lados"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "lados = sorted(list(map(float, input().split())), reverse=True)\nA, B, C = lados[0], lados[1], lados[2]\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "7.0 5.0 7.0",
        "salida_esperada": "TRIANGULO ACUTANGULO\nTRIANGULO ISOSCELES",
        "visible": true,
        "descripcion": "Acutángulo e isósceles"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "6.0 6.0 10.0",
        "salida_esperada": "TRIANGULO OBTUSANGULO\nTRIANGULO ISOSCELES",
        "visible": false
      },
      {
        "id": 3,
        "entrada": "6.0 8.0 10.0",
        "salida_esperada": "TRIANGULO RETANGULO",
        "visible": false
      }
    ],
    "pistas": [
      "Primero ordena de mayor a menor para asegurar que A >= B >= C.",
      "Si A >= B + C: print('NAO FORMA TRIANGULO') y no evalúes más.",
      "Compara A**2 con B**2 + C**2 (igual: RETANGULO, mayor: OBTUSANGULO, menor: ACUTANGULO).",
      "Además verifica si A == B == C (EQUILATERO) o si dos son iguales (ISOSCELES)."
    ],
    "retroalimentacion": {
      "exito": "¡Gran manejo de condicionales compuestos y cascadas lógicas!",
      "error_comun": "Si el triángulo es equilátero, no imprimas que es isósceles.",
      "pista_falla": "Ordena primero con sorted(..., reverse=True)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1045,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1045",
    "activo": true,
    "orden": 23
  },
  {
    "id": "prob-1048",
    "numero": 1048,
    "titulo": "Incremento Salarial",
    "slug": "incremento-salarial",
    "descripcion": "La empresa ABC decidió otorgar un reajuste salarial a sus empleados según el rango de salario:\n- 0 a 400.00: 15%\n- 400.01 a 800.00: 12%\n- 800.01 a 1200.00: 10%\n- 1200.01 a 2000.00: 7%\n- Mayor a 2000.00: 4%\nLee el salario del empleado, calcula y muestra el nuevo salario, el valor ganado y el porcentaje obtenido.",
    "entrada": "Un número flotante con dos decimales.",
    "salida": "Muestra `Novo salario: XX.XX`, `Reajuste ganho: XX.XX` y `Em percentual: X %`.",
    "ejemplo_entrada": "400.00",
    "ejemplo_salida": "Novo salario: 460.00\nReajuste ganho: 60.00\nEm percentual: 15 %",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "if-elif-else en cascada",
      "escalas salariales"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "salario = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "400.00",
        "salida_esperada": "Novo salario: 460.00\nReajuste ganho: 60.00\nEm percentual: 15 %",
        "visible": true,
        "descripcion": "Rango 15%"
      },
      {
        "id": 2,
        "entrada": "800.01",
        "salida_esperada": "Novo salario: 880.01\nReajuste ganho: 80.00\nEm percentual: 10 %",
        "visible": true,
        "descripcion": "Rango 10%"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "2000.00",
        "salida_esperada": "Novo salario: 2140.00\nReajuste ganho: 140.00\nEm percentual: 7 %",
        "visible": false
      }
    ],
    "pistas": [
      "Usa una estructura if-elif-else para determinar la tasa de incremento.",
      "Reajuste = salario * (porcentaje / 100).",
      "Nuevo salario = salario + reajuste."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente estructura de if-elif-else para rangos numéricos!",
      "error_comun": "Revisa los límites: 400.00 entra en 15%, 800.00 entra en 12%.",
      "pista_falla": "Ten cuidado con los signos <= en los límites superiores."
    },
    "fuente": "beecrowd",
    "fuente_id": 1048,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1048",
    "activo": true,
    "orden": 24
  },
  {
    "id": "prob-1049",
    "numero": 1049,
    "titulo": "Animal",
    "slug": "animal",
    "descripcion": "En este problema debes leer tres palabras que definen las características de un animal según la clasificación zoológica (árbol taxonómico) e imprimir el animal correspondiente.",
    "entrada": "Tres palabras en líneas separadas.",
    "salida": "El nombre del animal resultante según el árbol taxonómico.",
    "ejemplo_entrada": "vertebrado\nave\ncarnivoro",
    "ejemplo_salida": "aguia",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "árbol de decisión",
      "condicionales anidados",
      "comparación de cadenas"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "p1 = input().strip()\np2 = input().strip()\np3 = input().strip()\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "vertebrado\nave\ncarnivoro",
        "salida_esperada": "aguia",
        "visible": true,
        "descripcion": "Águila"
      },
      {
        "id": 2,
        "entrada": "invertebrado\nanelideo\nonivoro",
        "salida_esperada": "minhoca",
        "visible": true,
        "descripcion": "Lombriz"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "vertebrado\nmamifero\nonivoro",
        "salida_esperada": "homem",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes anidar condicionales if p1 == 'vertebrado': if p2 == ...",
      "O también usar un diccionario con tuplas clave: {('vertebrado', 'ave', 'carnivoro'): 'aguia'}.",
      "Caso de borde: Usa comparaciones exactas con cadenas ('vertebrado', 'ave', 'carnivoro'). Una estructura de if-elif-else anidada previene evaluar ramas innecesarias."
    ],
    "retroalimentacion": {
      "exito": "¡Árbol de decisión implementado con maestría!",
      "error_comun": "Asegúrate de no dejar espacios en blanco al comparar las cadenas.",
      "pista_falla": "Usa strip() para limpiar saltos de línea y espacios accidentales."
    },
    "fuente": "beecrowd",
    "fuente_id": 1049,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1049",
    "activo": true,
    "orden": 25
  },
  {
    "id": "prob-1050",
    "numero": 1050,
    "titulo": "DDD",
    "slug": "ddd",
    "descripcion": "Lee un número entero que representa un código de área telefónica (DDD). A continuación muestra la ciudad correspondiente: 61 Brasilia, 71 Salvador, 11 Sao Paulo, 21 Rio de Janeiro, 32 Juiz de Fora, 19 Campinas, 27 Vitoria, 31 Belo Horizonte. Si el código no está en la lista, muestra `DDD nao cadastrado`.",
    "entrada": "Un número entero.",
    "salida": "El nombre de la ciudad correspondiente o `DDD nao cadastrado`.",
    "ejemplo_entrada": "11",
    "ejemplo_salida": "Sao Paulo",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "diccionarios",
      "búsqueda con get() o if-in"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "ddd = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "11",
        "salida_esperada": "Sao Paulo",
        "visible": true,
        "descripcion": "Sao Paulo"
      },
      {
        "id": 2,
        "entrada": "61",
        "salida_esperada": "Brasilia",
        "visible": true,
        "descripcion": "Brasilia"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "77",
        "salida_esperada": "DDD nao cadastrado",
        "visible": false
      }
    ],
    "pistas": [
      "Un diccionario es la forma más limpia: mapa = {11: 'Sao Paulo', ...}.",
      "mapa.get(ddd, 'DDD nao cadastrado').",
      "Caso de borde: Si el código DDD no existe en el diccionario o tabla de ciudades, la salida debe ser exactamente 'DDD nao cadastrado' (sin tildes)."
    ],
    "retroalimentacion": {
      "exito": "¡Mapeo de datos impecable!",
      "error_comun": "Recuerda la tilde y mayúsculas en 'DDD nao cadastrado'.",
      "pista_falla": "Usa diccionario o if-elif con caso default."
    },
    "fuente": "beecrowd",
    "fuente_id": 1050,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1050",
    "activo": true,
    "orden": 26
  },
  {
    "id": "prob-1051",
    "numero": 1051,
    "titulo": "Impuestos",
    "slug": "impuestos",
    "descripcion": "En un país ficticio, el impuesto sobre la renta se calcula por tramos progresivos:\n- De 0.00 a 2000.00: Exento\n- De 2000.01 a 3000.00: 8%\n- De 3000.01 a 4500.00: 18%\n- Mayor a 4500.00: 28%\nCalcula el impuesto a pagar según el salario ingresado.",
    "entrada": "Un número flotante con dos decimales.",
    "salida": "Si el salario es menor o igual a 2000, imprime `Isento`. En caso contrario, imprime `R$ ` seguido del valor con 2 decimales.",
    "ejemplo_entrada": "3002.00",
    "ejemplo_salida": "R$ 80.36",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "cálculo impositivo por tramos",
      "condicionales progresivos"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "salario = float(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "3002.00",
        "salida_esperada": "R$ 80.36",
        "visible": true,
        "descripcion": "Tramo mixto 8% y 18%"
      },
      {
        "id": 2,
        "entrada": "1701.12",
        "salida_esperada": "Isento",
        "visible": true,
        "descripcion": "Exento"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "4520.00",
        "salida_esperada": "R$ 355.60",
        "visible": false
      }
    ],
    "pistas": [
      "El impuesto no es directo sobre todo el monto, sino sobre cada porción que supere cada umbral.",
      "Para 3002: los primeros 2000 son libres, los siguientes 1000 pagan 8% (80), y los restantes 2 pagan 18% (0.36) -> Total 80.36.",
      "Caso de borde: Los tramos impositivos son marginales: solo el monto que excede cada umbral tributa a la tasa correspondiente. Si el salario es <= 2000, imprime 'Isento'."
    ],
    "retroalimentacion": {
      "exito": "¡Gran dominio de la lógica progresiva de impuestos por tramos!",
      "error_comun": "No apliques el porcentaje superior a todo el salario; aplícalo sólo a la porción de ese tramo.",
      "pista_falla": "Calcula cada segmento por separado con min/max o if escalonados."
    },
    "fuente": "beecrowd",
    "fuente_id": 1051,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1051",
    "activo": true,
    "orden": 27
  },
  {
    "id": "prob-1052",
    "numero": 1052,
    "titulo": "Mes",
    "slug": "mes",
    "descripcion": "Lee un valor entero entre 1 y 12 e imprime el nombre del mes correspondiente en inglés con la primera letra en mayúscula.",
    "entrada": "Un número entero entre 1 y 12.",
    "salida": "El nombre del mes en inglés (ejemplo: January, February, etc.).",
    "ejemplo_entrada": "1",
    "ejemplo_salida": "January",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales"
    ],
    "conceptos": [
      "listas",
      "indexación de listas",
      "condicionales"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "mes = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "1",
        "salida_esperada": "January",
        "visible": true,
        "descripcion": "Primer mes"
      },
      {
        "id": 2,
        "entrada": "7",
        "salida_esperada": "July",
        "visible": true,
        "descripcion": "Mes intermedio"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "12",
        "salida_esperada": "December",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes usar una lista de meses: meses = ['January', 'February', ...].",
      "Ten en cuenta que las listas en Python comienzan en índice 0: meses[mes - 1].",
      "Caso de borde: Los nombres de los meses deben imprimirse en inglés con la primera letra en mayúscula (ej: 'January', 'February', ..., 'December')."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente indexación!",
      "error_comun": "Recuerda que el índice del mes es mes - 1.",
      "pista_falla": "meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']."
    },
    "fuente": "beecrowd",
    "fuente_id": 1052,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1052",
    "activo": true,
    "orden": 28
  },
  {
    "id": "prob-1059",
    "numero": 1059,
    "titulo": "Números Pares",
    "slug": "numeros-pares",
    "descripcion": "Escribe un programa que imprima todos los números pares entre 1 y 100, inclusive.",
    "entrada": "Este problema no contiene entradas.",
    "salida": "Imprime todos los números pares entre 1 y 100, un número por línea.",
    "ejemplo_entrada": "",
    "ejemplo_salida": "2\n4\n6\n8\n...\n100",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "for",
      "range() con paso 2",
      "operador módulo %"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "# Imprime los pares del 1 al 100\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "",
        "salida_esperada": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40\n42\n44\n46\n48\n50\n52\n54\n56\n58\n60\n62\n64\n66\n68\n70\n72\n74\n76\n78\n80\n82\n84\n86\n88\n90\n92\n94\n96\n98\n100",
        "visible": true,
        "descripcion": "Secuencia completa de pares"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "",
        "salida_esperada": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40\n42\n44\n46\n48\n50\n52\n54\n56\n58\n60\n62\n64\n66\n68\n70\n72\n74\n76\n78\n80\n82\n84\n86\n88\n90\n92\n94\n96\n98\n100",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes usar for i in range(2, 101, 2): print(i).",
      "O recorrer del 1 al 101 y comprobar if i % 2 == 0: print(i).",
      "Detalle de implementación: Puedes usar range(2, 101, 2) para iterar directamente sobre los pares sin necesidad de comprobar if i % 2 == 0 en cada paso."
    ],
    "retroalimentacion": {
      "exito": "¡Dominio total de ciclos for y range()!",
      "error_comun": "Recuerda que en range(inicio, fin) el límite 'fin' no es inclusivo: usa 101 para incluir 100.",
      "pista_falla": "range(2, 101, 2) genera directamente los pares."
    },
    "fuente": "beecrowd",
    "fuente_id": 1059,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1059",
    "activo": true,
    "orden": 29
  },
  {
    "id": "prob-1064",
    "numero": 1064,
    "titulo": "Positivos y Promedio",
    "slug": "positivos-y-promedio",
    "descripcion": "Lee 6 valores numéricos. Muestra cuántos de ellos son positivos y a continuación el promedio de dichos valores positivos con un decimal.",
    "entrada": "Seis números (enteros o flotantes) en líneas separadas.",
    "salida": "La primera línea debe ser `X valores positivos` y la segunda línea el promedio con una cifra decimal.",
    "ejemplo_entrada": "7\n-5\n6\n-3.4\n4.6\n12",
    "ejemplo_salida": "4 valores positivos\n7.4",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos",
      "Condicionales"
    ],
    "conceptos": [
      "acumuladores",
      "contadores",
      "filtrado de positivos"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "positivos = []\nfor _ in range(6):\n    val = float(input())\n    # Completa tu solución aquí\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "7\n-5\n6\n-3.4\n4.6\n12",
        "salida_esperada": "4 valores positivos\n7.4",
        "visible": true,
        "descripcion": "Valores mixtos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "1\n2\n3\n4\n5\n6",
        "salida_esperada": "6 valores positivos\n3.5",
        "visible": false
      }
    ],
    "pistas": [
      "Si val > 0: guárdalo en una lista o incrementa un contador y suma acumulada.",
      "Promedio = suma / contador.",
      "Formatea el promedio con :.1f."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente combinación de bucle for y acumuladores!",
      "error_comun": "El promedio se calcula únicamente entre los valores positivos, no entre los 6.",
      "pista_falla": "if val > 0: count += 1; suma += val."
    },
    "fuente": "beecrowd",
    "fuente_id": 1064,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1064",
    "activo": true,
    "orden": 30
  },
  {
    "id": "prob-1067",
    "numero": 1067,
    "titulo": "Números Impares",
    "slug": "numeros-impares",
    "descripcion": "Lee un valor entero X (1 <= X <= 1000). A continuación muestra los números impares desde 1 hasta X, un valor por línea, inclusive X si fuera el caso.",
    "entrada": "Un número entero X.",
    "salida": "Todos los números impares desde 1 hasta X, uno por línea.",
    "ejemplo_entrada": "8",
    "ejemplo_salida": "1\n3\n5\n7",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "for",
      "generación de impares",
      "range()"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "X = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "8",
        "salida_esperada": "1\n3\n5\n7",
        "visible": true,
        "descripcion": "X par"
      },
      {
        "id": 2,
        "entrada": "11",
        "salida_esperada": "1\n3\n5\n7\n9\n11",
        "visible": true,
        "descripcion": "X impar inclusivo"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "1",
        "salida_esperada": "1",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes usar for i in range(1, X + 1, 2): print(i).",
      "Caso de borde: Si el valor ingresado es par, el ciclo imprimirá hasta X-1. Si es impar, el último número impreso será exactamente X.",
      "Detalle de implementación: Presta atención al tipo de dato (int vs float) y verifica que no queden impresiones residuales o textos de depuración."
    ],
    "retroalimentacion": {
      "exito": "¡Perfecto manejo de secuencias impares!",
      "error_comun": "Asegúrate de que el rango llegue hasta X + 1 para incluir X cuando sea impar.",
      "pista_falla": "range(1, X + 1, 2)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1067,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1067",
    "activo": true,
    "orden": 31
  },
  {
    "id": "prob-1070",
    "numero": 1070,
    "titulo": "Seis Números Impares",
    "slug": "seis-numeros-impares",
    "descripcion": "Lee un valor entero X. Luego muestra los 6 números impares consecutivos a partir de X, un valor por línea, inclusive X si fuera impar.",
    "entrada": "Un valor entero positivo.",
    "salida": "Seis números impares consecutivos a partir de X.",
    "ejemplo_entrada": "9",
    "ejemplo_salida": "9\n11\n13\n15\n17\n19",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "while",
      "contador de repeticiones",
      "impares"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "X = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "9",
        "salida_esperada": "9\n11\n13\n15\n17\n19",
        "visible": true,
        "descripcion": "Inicia en impar"
      },
      {
        "id": 2,
        "entrada": "8",
        "salida_esperada": "9\n11\n13\n15\n17\n19",
        "visible": true,
        "descripcion": "Inicia en par"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "1",
        "salida_esperada": "1\n3\n5\n7\n9\n11",
        "visible": false
      }
    ],
    "pistas": [
      "Si X es par, el primer impar es X + 1.",
      "Luego puedes generar 6 impares sumando de 2 en 2.",
      "Detalle de implementación: Si el número inicial X es par, el primer impar es X + 1. A partir de allí, genera los siguientes 5 sumando 2 sucesivamente."
    ],
    "retroalimentacion": {
      "exito": "¡Gran trabajo generando secuencias consecutivas!",
      "error_comun": "Asegúrate de imprimir exactamente 6 valores.",
      "pista_falla": "if X % 2 == 0: X += 1; for i in range(6): print(X + i*2)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1070,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1070",
    "activo": true,
    "orden": 32
  },
  {
    "id": "prob-1071",
    "numero": 1071,
    "titulo": "Suma de Números Consecutivos Impares I",
    "slug": "suma-de-numeros-consecutivos-impares-i",
    "descripcion": "Lee dos valores enteros X e Y. Calcula y muestra la suma de todos los números impares existentes entre ellos (estrictamente entre ellos, sin incluir a X ni a Y).",
    "entrada": "Dos números enteros X e Y en líneas separadas.",
    "salida": "La suma de los números impares estrictamente entre X e Y.",
    "ejemplo_entrada": "6\n-5",
    "ejemplo_salida": "5",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "rango abierto",
      "min() y max()",
      "acumulación con for"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "x = int(input())\ny = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6\n-5",
        "salida_esperada": "5",
        "visible": true,
        "descripcion": "Uno positivo y otro negativo"
      },
      {
        "id": 2,
        "entrada": "15\n12",
        "salida_esperada": "13",
        "visible": true,
        "descripcion": "Positivos cercanos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "12\n12",
        "salida_esperada": "0",
        "visible": false
      }
    ],
    "pistas": [
      "Primero halla el menor y mayor: inicio = min(x, y) + 1, fin = max(x, y).",
      "Recorre for n in range(inicio, fin): si n % 2 != 0 suma n.",
      "Caso de borde: Los números X e Y pueden venir en orden descendente (X > Y). Usa min(X, Y) y max(X, Y) y excluye los extremos de la suma iterando en range(min + 1, max)."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente! Los límites estrictos son clave en problemas de algoritmos.",
      "error_comun": "Recuerda no incluir ni a X ni a Y en la suma.",
      "pista_falla": "range(min(x,y) + 1, max(x,y))."
    },
    "fuente": "beecrowd",
    "fuente_id": 1071,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1071",
    "activo": true,
    "orden": 33
  },
  {
    "id": "prob-1073",
    "numero": 1073,
    "titulo": "Cuadrado de un Par",
    "slug": "cuadrado-de-un-par",
    "descripcion": "Lee un valor entero N (5 < N < 2000). Muestra el cuadrado de cada uno de los valores pares desde 1 hasta N, inclusive si N fuera par.",
    "entrada": "Un número entero N.",
    "salida": "Para cada número par, muestra `X^2 = Y`.",
    "ejemplo_entrada": "6",
    "ejemplo_salida": "2^2 = 4\n4^2 = 16\n6^2 = 36",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "for",
      "potencias",
      "formato de expresiones"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "N = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6",
        "salida_esperada": "2^2 = 4\n4^2 = 16\n6^2 = 36",
        "visible": true,
        "descripcion": "N = 6"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "4",
        "salida_esperada": "2^2 = 4\n4^2 = 16",
        "visible": false
      }
    ],
    "pistas": [
      "Recorre for i in range(2, N + 1, 2):",
      "Imprime print(f\"{i}^2 = {i ** 2}\").",
      "Detalle de implementación: Itera con range(2, N + 1, 2) y muestra cada línea con el formato exacto f'{i}^2 = {i**2}'."
    ],
    "retroalimentacion": {
      "exito": "¡Muy bien! Has impreso expresiones cuadráticas paso a paso.",
      "error_comun": "Revisa los espacios alrededor del igual: '{i}^2 = {i**2}'.",
      "pista_falla": "range(2, N + 1, 2)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1073,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1073",
    "activo": true,
    "orden": 34
  },
  {
    "id": "prob-1078",
    "numero": 1078,
    "titulo": "Tablas de Multiplicar",
    "slug": "tablas-de-multiplicar",
    "descripcion": "Lee un valor entero N (2 < N < 1000). A continuación, muestra la tabla de multiplicar de N del 1 al 10 en el formato especificado.",
    "entrada": "Un número entero N.",
    "salida": "La tabla de multiplicar en el formato `1 x N = N ... 10 x N = 10*N`.",
    "ejemplo_entrada": "140",
    "ejemplo_salida": "1 x 140 = 140\n2 x 140 = 280\n3 x 140 = 420\n4 x 140 = 560\n5 x 140 = 700\n6 x 140 = 840\n7 x 140 = 980\n8 x 140 = 1120\n9 x 140 = 1260\n10 x 140 = 1400",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "for",
      "tablas aritméticas",
      "range(1, 11)"
    ],
    "dificultad": "inicial",
    "lenguaje": "python",
    "codigo_inicial": "N = int(input())\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "140",
        "salida_esperada": "1 x 140 = 140\n2 x 140 = 280\n3 x 140 = 420\n4 x 140 = 560\n5 x 140 = 700\n6 x 140 = 840\n7 x 140 = 980\n8 x 140 = 1120\n9 x 140 = 1260\n10 x 140 = 1400",
        "visible": true,
        "descripcion": "Tabla del 140"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "5",
        "salida_esperada": "1 x 5 = 5\n2 x 5 = 10\n3 x 5 = 15\n4 x 5 = 20\n5 x 5 = 25\n6 x 5 = 30\n7 x 5 = 35\n8 x 5 = 40\n9 x 5 = 45\n10 x 5 = 50",
        "visible": false
      }
    ],
    "pistas": [
      "Usa for i in range(1, 11):",
      "Imprime f\"{i} x {N} = {i * N}\".",
      "Detalle de implementación: El ciclo debe ir de 1 a 10 inclusive: for i in range(1, 11). Formatea como f'{i} x {N} = {i * N}'."
    ],
    "retroalimentacion": {
      "exito": "¡Tabla de multiplicar impecable!",
      "error_comun": "Ten cuidado con usar 'x' en minúscula y con los espacios.",
      "pista_falla": "for i in range(1, 11): print(f'{i} x {N} = {i*N}')."
    },
    "fuente": "beecrowd",
    "fuente_id": 1078,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1078",
    "activo": true,
    "orden": 35
  },
  {
    "id": "prob-1080",
    "numero": 1080,
    "titulo": "El Más Alto y Su Posición",
    "slug": "el-mas-alto-y-su-posicion",
    "descripcion": "Lee 100 números enteros (o una lista de valores). Encuentra e imprime el mayor valor leído y la posición en que fue leído (1-indexed).",
    "entrada": "Valores enteros en líneas separadas.",
    "salida": "El valor más alto y su posición en la línea siguiente.",
    "ejemplo_entrada": "2\n113\n45\n34565\n6\n8",
    "ejemplo_salida": "34565\n4",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos",
      "Listas"
    ],
    "conceptos": [
      "búsqueda lineal",
      "máximo con índice",
      "enumerate"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "# Lee los números e identifica el máximo y su posición\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "2\n113\n45\n34565\n6\n8",
        "salida_esperada": "34565\n4",
        "visible": true,
        "descripcion": "Máximo en posición 4"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "500\n10\n20",
        "salida_esperada": "500\n1",
        "visible": false
      }
    ],
    "pistas": [
      "Mantén dos variables: mayor = -1 y pos_mayor = -1.",
      "Al leer cada valor en la posición i (1-indexed), si val > mayor actualiza mayor y pos_mayor = i.",
      "Caso de borde: Inicializa el valor mayor con un número menor al mínimo posible (o lee el primer número como referencia inicial en posición 1). Las posiciones son 1-indexadas (1 a 100)."
    ],
    "retroalimentacion": {
      "exito": "¡Algoritmo de búsqueda de máximo resuelto con éxito!",
      "error_comun": "Recuerda que la posición solicitada es 1-indexed (inicia en 1).",
      "pista_falla": "mayor = -1; pos = 0."
    },
    "fuente": "beecrowd",
    "fuente_id": 1080,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1080",
    "activo": true,
    "orden": 36
  },
  {
    "id": "prob-1101",
    "numero": 1101,
    "titulo": "Secuencia de Números y Suma",
    "slug": "secuencia-de-numeros-y-suma",
    "descripcion": "Lee un conjunto de parejas de valores M y N. Para cada pareja, muestra la secuencia de enteros en orden ascendente entre el menor y el mayor valor de la pareja, seguido del texto `Sum=X`, donde X es la suma de todos los números de la secuencia. El programa se detiene cuando M o N sea menor o igual a cero.",
    "entrada": "Cada línea contiene dos números enteros M y N. La última línea contiene al menos un número menor o igual a 0.",
    "salida": "Para cada pareja válida, imprime la secuencia de enteros separados por un espacio seguido de `Sum=total`.",
    "ejemplo_entrada": "5 2\n6 3\n5 0",
    "ejemplo_salida": "2 3 4 5 Sum=14\n3 4 5 6 Sum=18",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "while con centinela",
      "ordenamiento de pareja",
      "acumulación"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "while True:\n    try:\n        m, n = map(int, input().split())\n        if m <= 0 or n <= 0:\n            break\n        # Completa la solución aquí\n    except EOFError:\n        break\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5 2\n6 3\n5 0",
        "salida_esperada": "2 3 4 5 Sum=14\n3 4 5 6 Sum=18",
        "visible": true,
        "descripcion": "Dos parejas y centinela"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "1 1\n0 5",
        "salida_esperada": "1 Sum=1",
        "visible": false
      }
    ],
    "pistas": [
      "Usa un ciclo while True: si m <= 0 or n <= 0: break.",
      "menor, mayor = min(m, n), max(m, n).",
      "nums = list(range(menor, mayor + 1)).",
      "print(' '.join(map(str, nums)) + f' Sum={sum(nums)}')."
    ],
    "retroalimentacion": {
      "exito": "¡Gran manejo de bucles con condición de parada centinela!",
      "error_comun": "Ten cuidado con los espacios: 'Sum=' va pegado a la suma sin espacio tras el igual.",
      "pista_falla": "if m <= 0 or n <= 0: break."
    },
    "fuente": "beecrowd",
    "fuente_id": 1101,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1101",
    "activo": true,
    "orden": 37
  },
  {
    "id": "prob-1115",
    "numero": 1115,
    "titulo": "Cuadrante",
    "slug": "cuadrante",
    "descripcion": "Escribe un programa para leer las coordenadas (X, Y) de una cantidad indeterminada de puntos en el sistema cartesiano. Para cada punto, muestra el cuadrante al que pertenece: `primeiro`, `segundo`, `terceiro` o `quarto`. El programa se termina cuando al menos una de las dos coordenadas sea NULA (0).",
    "entrada": "Contiene varias líneas. Cada línea contiene dos enteros X e Y.",
    "salida": "Para cada punto, muestra el cuadrante correspondiente.",
    "ejemplo_entrada": "2 2\n3 -2\n-8 -1\n-7 1\n0 2",
    "ejemplo_salida": "primeiro\nquarto\nterceiro\nsegundo",
    "unidad": "Unidad 04: Estructuras condicionales",
    "unidadId": "unidad-04",
    "temas": [
      "Condicionales",
      "Ciclos"
    ],
    "conceptos": [
      "plano cartesiano",
      "cuadrantes",
      "bucle con condición de salida"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "while True:\n    x, y = map(int, input().split())\n    if x == 0 or y == 0:\n        break\n    # Clasifica el cuadrante\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "2 2\n3 -2\n-8 -1\n-7 1\n0 2",
        "salida_esperada": "primeiro\nquarto\nterceiro\nsegundo",
        "visible": true,
        "descripcion": "Puntos en los 4 cuadrantes"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "1 5\n-1 -5\n3 0",
        "salida_esperada": "primeiro\nterceiro",
        "visible": false
      }
    ],
    "pistas": [
      "Q1: X > 0 y Y > 0 ('primeiro').",
      "Q2: X < 0 y Y > 0 ('segundo').",
      "Q3: X < 0 y Y < 0 ('terceiro').",
      "Q4: X > 0 y Y < 0 ('quarto')."
    ],
    "retroalimentacion": {
      "exito": "¡Geometría cartesiana y condicionales resueltos con precisión!",
      "error_comun": "Si X == 0 o Y == 0, debes terminar el ciclo sin imprimir nada.",
      "pista_falla": "if x > 0 and y > 0: print('primeiro')."
    },
    "fuente": "beecrowd",
    "fuente_id": 1115,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1115",
    "activo": true,
    "orden": 38
  },
  {
    "id": "prob-1146",
    "numero": 1146,
    "titulo": "Secuencias Crecientes",
    "slug": "secuencias-crecientes",
    "descripcion": "Tu programa debe leer un número entero X de forma repetida. Para cada X leído, debe imprimir la secuencia de números enteros desde 1 hasta X en una sola línea, separados por un espacio. El programa se detiene cuando X sea igual a 0.",
    "entrada": "Varios enteros, uno por línea. El último es 0.",
    "salida": "Para cada X, imprime los enteros de 1 a X separados por espacio. No debe haber espacio al final de la línea.",
    "ejemplo_entrada": "5\n10\n3\n0",
    "ejemplo_salida": "1 2 3 4 5\n1 2 3 4 5 6 7 8 9 10\n1 2 3",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "join()",
      "formateo de secuencias",
      "bucle while"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "while True:\n    X = int(input())\n    if X == 0:\n        break\n    print(\" \".join(str(i) for i in range(1, X + 1)))\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5\n10\n3\n0",
        "salida_esperada": "1 2 3 4 5\n1 2 3 4 5 6 7 8 9 10\n1 2 3",
        "visible": true,
        "descripcion": "Secuencias estándar"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "1\n0",
        "salida_esperada": "1",
        "visible": false
      }
    ],
    "pistas": [
      "Usa ' '.join(str(i) for i in range(1, X + 1)) para garantizar que no haya espacio sobrante al final.",
      "Detén el bucle al recibir 0.",
      "Caso de borde: La secuencia para cada valor de X debe terminar con un salto de línea sin espacio sobrante al final. Cuando se lee un 0, el programa debe terminar inmediatamente."
    ],
    "retroalimentacion": {
      "exito": "¡Excelente técnica usando ' '.join() para evitar espacios residuales al final de línea!",
      "error_comun": "Evita imprimir print(i, end=' ') en el último elemento para no dejar espacio extra.",
      "pista_falla": "print(' '.join(str(i) for i in range(1, X + 1)))."
    },
    "fuente": "beecrowd",
    "fuente_id": 1146,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1146",
    "activo": true,
    "orden": 39
  },
  {
    "id": "prob-1151",
    "numero": 1151,
    "titulo": "Fibonacci Fácil",
    "slug": "fibonacci-facil",
    "descripcion": "La siguiente secuencia de números 0, 1, 1, 2, 3, 5, 8, 13, 21... se conoce como la serie de Fibonacci. En ella, cada término a partir del tercero es la suma de los dos anteriores. Escribe un programa que lea un entero N (0 < N < 46) e imprima los primeros N términos de la secuencia en una sola línea, separados por un espacio.",
    "entrada": "Un número entero N.",
    "salida": "Los primeros N números de Fibonacci separados por un espacio.",
    "ejemplo_entrada": "5",
    "ejemplo_salida": "0 1 1 2 3",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "sucesión de Fibonacci",
      "actualización de variables a, b = b, a+b",
      "secuencias"
    ],
    "dificultad": "intermedio",
    "lenguaje": "python",
    "codigo_inicial": "N = int(input())\nfib = [0, 1]\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "5",
        "salida_esperada": "0 1 1 2 3",
        "visible": true,
        "descripcion": "Primeros 5 términos"
      },
      {
        "id": 2,
        "entrada": "8",
        "salida_esperada": "0 1 1 2 3 5 8 13",
        "visible": true,
        "descripcion": "Primeros 8 términos"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "2",
        "salida_esperada": "0 1",
        "visible": false
      }
    ],
    "pistas": [
      "Puedes generar la lista iterativamente: while len(fib) < N: fib.append(fib[-1] + fib[-2]).",
      "Muestra con print(' '.join(map(str, fib[:N]))).",
      "Caso de borde y formato: Los números deben estar separados por un espacio, pero el último número de la serie NO debe tener un espacio residual a la derecha."
    ],
    "retroalimentacion": {
      "exito": "¡Magnífico! La serie de Fibonacci es un clásico fundamental de la computación.",
      "error_comun": "Asegúrate de no incluir espacios al final de la línea.",
      "pista_falla": "a, b = 0, 1; genera término a término sumando los dos anteriores."
    },
    "fuente": "beecrowd",
    "fuente_id": 1151,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1151",
    "activo": true,
    "orden": 40
  },
  {
    "id": "prob-1157",
    "numero": 1157,
    "titulo": "Divisores I",
    "slug": "divisores-i",
    "descripcion": "Lee un número entero N e imprime todos sus divisores en orden ascendente, un divisor por línea.",
    "entrada": "Un número entero N.",
    "salida": "Todos los divisores de N en orden ascendente.",
    "ejemplo_entrada": "6",
    "ejemplo_salida": "1\n2\n3\n6",
    "unidad": "Unidad 05: Estructuras de control repetitivas",
    "unidadId": "unidad-05",
    "temas": [
      "Ciclos"
    ],
    "conceptos": [
      "divisores",
      "for",
      "operador módulo %"
    ],
    "dificultad": "basico",
    "lenguaje": "python",
    "codigo_inicial": "N = int(input())\nfor i in range(1, N + 1):\n    if N % i == 0:\n        print(i)\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "6",
        "salida_esperada": "1\n2\n3\n6",
        "visible": true,
        "descripcion": "Divisores de 6"
      },
      {
        "id": 2,
        "entrada": "24",
        "salida_esperada": "1\n2\n3\n4\n6\n8\n12\n24",
        "visible": true,
        "descripcion": "Divisores de 24"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 3,
        "entrada": "7",
        "salida_esperada": "1\n7",
        "visible": false
      }
    ],
    "pistas": [
      "Un número i es divisor de N si N % i == 0.",
      "Recorre desde 1 hasta N inclusive.",
      "Detalle de implementación: Un número i es divisor de N si N % i == 0. Itera desde 1 hasta N inclusive imprimiendo cada divisor en una nueva línea."
    ],
    "retroalimentacion": {
      "exito": "¡Cálculo de divisores perfecto!",
      "error_comun": "Recuerda incluir tanto el 1 como el propio N.",
      "pista_falla": "if N % i == 0: print(i)."
    },
    "fuente": "beecrowd",
    "fuente_id": 1157,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1157",
    "activo": true,
    "orden": 41
  },
  {
    "id": "prob-1435",
    "numero": 1435,
    "titulo": "Matriz Cuadrada I",
    "slug": "matriz-cuadrada-i",
    "descripcion": "Escribe un programa que lea un entero N (0 <= N <= 100) de forma repetida. Para cada N, construye e imprime una matriz de tamaño N x N donde el borde exterior contiene 1s, el siguiente anillo interior contiene 2s, y así sucesivamente hacia el centro. Cada número debe formatearse ocupando 3 espacios justificado a la derecha (`%3d`), con un espacio entre columnas y una línea en blanco tras cada matriz. El programa termina con N = 0.",
    "entrada": "Varios enteros N (uno por línea). Finaliza con 0.",
    "salida": "La matriz concéntrica correspondiente formateada adecuadamente.",
    "ejemplo_entrada": "1\n2\n3\n0",
    "ejemplo_salida": "  1\n\n  1   2\n  1   2\n... (con formato %3d)",
    "unidad": "Unidad 10: Estructuras de datos",
    "unidadId": "unidad-10",
    "temas": [
      "Matrices",
      "Ciclos"
    ],
    "conceptos": [
      "matrices 2D",
      "distancia a los bordes min(i, j, n-1-i, n-1-j)",
      "formateo %3d"
    ],
    "dificultad": "intermedio",
    "lenguaje": "python",
    "codigo_inicial": "# Matriz cuadrada concéntrica\nwhile True:\n    n = int(input())\n    if n == 0: break\n    for i in range(n):\n        fila = []\n        for j in range(n):\n            val = min(i, j, n - 1 - i, n - 1 - j) + 1\n            fila.append(f\"{val:3d}\")\n        print(\" \".join(fila))\n    print()\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "1\n2\n0",
        "salida_esperada": "  1\n\n  1   1\n  1   1\n",
        "visible": true,
        "descripcion": "Matrices N=1 y N=2"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "3\n0",
        "salida_esperada": "  1   1   1\n  1   2   1\n  1   1   1\n",
        "visible": false
      }
    ],
    "pistas": [
      "El valor de cada celda (i, j) es min(i, j, n-1-i, n-1-j) + 1.",
      "Formatea cada celda con f'{val:3d}'.",
      "Separa cada fila con un espacio entre números y deja una línea vacía tras cada matriz."
    ],
    "retroalimentacion": {
      "exito": "¡Fascinante dominio de matrices bidimensionales y cálculo concéntrico!",
      "error_comun": "Recuerda el formateo de 3 caracteres por número: f'{val:3d}'.",
      "pista_falla": "val = min(i, j, n - 1 - i, n - 1 - j) + 1."
    },
    "fuente": "beecrowd",
    "fuente_id": 1435,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1435",
    "activo": true,
    "orden": 42
  },
  {
    "id": "prob-1557",
    "numero": 1557,
    "titulo": "Matriz Cuadrada III",
    "slug": "matriz-cuadrada-iii",
    "descripcion": "Escribe un programa que lea un entero N (0 <= N <= 15). Para cada N, construye una matriz cuadrada de tamaño N x N donde cada elemento en la fila i y columna j sea $2^{i+j}$. Los números de cada columna deben justificarse a la derecha usando un ancho T igual a la cantidad de dígitos del número mayor de la matriz ($2^{2N-2}$). Cada matriz debe estar separada por una línea en blanco. El programa termina con N = 0.",
    "entrada": "Varios enteros N (uno por línea). Finaliza con N = 0.",
    "salida": "La matriz de potencias de 2 formateada con el ancho correspondiente a su elemento mayor.",
    "ejemplo_entrada": "1\n2\n3\n0",
    "ejemplo_salida": "1\n\n 1  2\n 2  4\n\n  1   2   4\n  2   4   8\n  4   8  16\n",
    "unidad": "Unidad 10: Estructuras de datos",
    "unidadId": "unidad-10",
    "temas": [
      "Matrices",
      "Ciclos",
      "Algoritmos"
    ],
    "conceptos": [
      "potencias de 2 (2**(i+j))",
      "ancho dinámico len(str(max))",
      "matrices"
    ],
    "dificultad": "desafio",
    "lenguaje": "python",
    "codigo_inicial": "# Matriz de potencias de 2 con ancho dinámico T\nwhile True:\n    n = int(input())\n    if n == 0: break\n    max_val = 2 ** (2 * n - 2)\n    T = len(str(max_val))\n    for i in range(n):\n        fila = [f\"{2**(i+j):{T}d}\" for j in range(n)]\n        print(\" \".join(fila))\n    print()\n",
    "casos_prueba": [
      {
        "id": 1,
        "entrada": "1\n2\n3\n0",
        "salida_esperada": "1\n\n 1  2\n 2  4\n\n  1   2   4\n  2   4   8\n  4   8  16\n",
        "visible": true,
        "descripcion": "Matrices N=1, N=2 y N=3"
      }
    ],
    "casos_prueba_ocultos": [
      {
        "id": 2,
        "entrada": "4\n0",
        "salida_esperada": "   1   2   4   8\n   2   4   8  16\n   4   8  16  32\n   8  16  32  64\n",
        "visible": false
      }
    ],
    "pistas": [
      "El valor mayor de la matriz es 2 ** (2*n - 2).",
      "El ancho T es len(str(mayor)).",
      "Usa f\"{val:{T}d}\" para formatear cada celda con ancho dinámico T."
    ],
    "retroalimentacion": {
      "exito": "¡Desafío completado! Has implementado matrices con formato dinámico avanzado.",
      "error_comun": "El ancho T cambia según N; asegúrate de calcularlo para cada matriz.",
      "pista_falla": "T = len(str(2 ** (2 * n - 2)))."
    },
    "fuente": "beecrowd",
    "fuente_id": 1557,
    "fuente_url": "https://judge.beecrowd.com/es/problems/view/1557",
    "activo": true,
    "orden": 43
  }
];

export function getProblemById(idOrNumber) {
  if (!idOrNumber) return null;
  const str = String(idOrNumber).trim();
  const num = parseInt(str.replace('prob-', ''));
  return MARATON_PROBLEMS.find(p => p.id === str || p.numero === num || p.slug === str) || null;
}

export function getProblemsByTheme(theme) {
  if (!theme || theme === 'Todos') return MARATON_PROBLEMS;
  return MARATON_PROBLEMS.filter(p => p.temas.includes(theme));
}

export function getProblemsByDifficulty(diff) {
  if (!diff || diff === 'Todos') return MARATON_PROBLEMS;
  return MARATON_PROBLEMS.filter(p => p.dificultad === diff);
}

export function getProblemsByUnit(unitId) {
  if (!unitId || unitId === 'Todas') return MARATON_PROBLEMS;
  return MARATON_PROBLEMS.filter(p => p.unidadId === unitId);
}
