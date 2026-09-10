/**
 * CONTENIDO EDUCATIVO DETALLADO: UNIDAD 14 - FUNDAMENTOS DE MACHINE LEARNING
 * Prof. Leo Gaviria - Programación
 */

export const PROG_U14_TOPICS = {
  "prog-ml-fundamentos": {
    id: "prog-ml-fundamentos",
    title: "14.1 ¿Qué es y cómo funciona?",
    subtitle: "De la programación basada en reglas explícitas al aprendizaje inductivo a partir de datos: tipos de aprendizaje, características y variables objetivo.",
    unit: 14,
    unitTitle: "Unidad 14: Fundamentos de Machine Learning",
    week: 14,
    weekTitle: "Unidad 14: Fundamentos de Machine Learning",
    difficulty: "Media",
    category: "Inteligencia Artificial",
    timeEstimate: "30 minutos",
    badges: [
      { text: "Unidad 14", type: "neutral" },
      { text: "Media", type: "medium" },
      { text: "Machine Learning", type: "teal" },
      { text: "Supervisado", type: "purple" }
    ],
    sections: [
      {
        id: "concepto-paradigma-ml",
        title: "1. El Cambio de Paradigma: Reglas vs. Aprendizaje",
        shortTitle: "¿Qué es Machine Learning?",
        icon: "fa-brain",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En la <strong>programación clásica</strong>, el desarrollador escribe reglas manuales y condiciones lógicas que se aplican a los datos para obtener resultados. En el <strong>Machine Learning</strong>, alimentamos a un algoritmo matemático con datos históricos y sus respuestas esperadas; el algoritmo aprende los patrones y genera un <strong>modelo predictivo</strong> autónomo:
          </p>
          <div class="overflow-x-auto my-5 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-purple-400 font-bold">Paradigma</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Entradas al Sistema</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Salida Producida</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60">
                <tr>
                  <td class="font-bold text-sky-400 py-2.5 px-3">Programación Tradicional</td>
                  <td class="py-2.5 px-3">Reglas lógicas humanas + Datos crudos</td>
                  <td class="py-2.5 px-3 text-emerald-300 font-mono">Respuestas / Salidas</td>
                </tr>
                <tr>
                  <td class="font-bold text-purple-400 py-2.5 px-3">Machine Learning</td>
                  <td class="py-2.5 px-3">Datos históricos + Respuestas observadas</td>
                  <td class="py-2.5 px-3 text-amber-300 font-mono">Reglas / Modelo Matemático</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Animación del Ciclo de Vida de Machine Learning",
            description: "Recorre las cinco etapas fundamentales de un pipeline de ML: Recolección ➔ Preparación ➔ Entrenamiento ➔ Inferencia ➔ Evaluación:",
            widget: {
              file: "widgets/programacion/u14_ciclo_ml.html",
              title: "Ciclo de Vida de ML",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "taxonomia-aprendizaje-ia",
        title: "2. Aprendizaje Supervisado vs. No Supervisado",
        shortTitle: "Tipos de Aprendizaje",
        icon: "fa-project-diagram",
        contentHtml: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-[#141923] border border-emerald-500/30 rounded-xl p-4">
              <h5 class="text-emerald-400 font-bold text-xs uppercase mb-2">Aprendizaje Supervisado (Con Etiquetas)</h5>
              <p class="text-xs text-gray-300">
                Los datos contienen la respuesta objetivo ($y$). Se divide en:<br>
                • <strong>Clasificación:</strong> Salida categórica discreta (ej. spam / no spam, benigno / maligno).<br>
                • <strong>Regresión:</strong> Salida numérica continua (ej. precio de una vivienda, temperatura de mañana).
              </p>
            </div>
            <div class="bg-[#141923] border border-purple-500/30 rounded-xl p-4">
              <h5 class="text-purple-400 font-bold text-xs uppercase mb-2">Aprendizaje No Supervisado (Sin Etiquetas)</h5>
              <p class="text-xs text-gray-300">
                Solo disponemos de características ($X$). El modelo descubre agrupaciones o patrones ocultos por sí mismo (ej. segmentación de clientes con K-Means, reducción de dimensionalidad con PCA).
              </p>
            </div>
          </div>
        `,
        quiz: [
          {
            question: "Predecir el valor exacto en dólares de las acciones de una empresa tecnológica para la próxima semana es un problema de:",
            options: [
              "Clasificación binaria",
              "Regresión supervisada (variable objetivo numérica continua)",
              "Aprendizaje por refuerzo sin datos",
              "Clustering no supervisado"
            ],
            correct: 1,
            explanation: "Cuando el valor a estimar es un número continuo en un rango real (como un precio o temperatura) y disponemos de datos históricos etiquetados, se trata de una tarea de Regresión Supervisada."
          }
        ]
      }
    ]
  },

  "prog-ml-construccion-modelo": {
    id: "prog-ml-construccion-modelo",
    title: "14.2 ¿Cómo se construye un modelo?",
    subtitle: "El pipeline de Scikit-Learn: división train_test_split, ajuste con fit(), inferencia con predict() y el dilema sesgo-varianza (underfitting vs overfitting).",
    unit: 14,
    unitTitle: "Unidad 14: Fundamentos de Machine Learning",
    week: 14,
    weekTitle: "Unidad 14: Fundamentos de Machine Learning",
    difficulty: "Avanzada",
    category: "Entrenamiento de Modelos",
    timeEstimate: "40 minutos",
    badges: [
      { text: "Unidad 14", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "fit / predict", type: "teal" },
      { text: "Overfitting", type: "amber" }
    ],
    sections: [
      {
        id: "pipeline-construccion-modelo",
        title: "1. El Flujo Formal de Construcción en Scikit-Learn",
        shortTitle: "Flujo de Entrenamiento",
        icon: "fa-cogs",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Cualquier modelo de Machine Learning en Python sigue el protocolo uniforme de la biblioteca <strong>Scikit-Learn</strong>:
          </p>
          <div class="bg-[#10141d] p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 mb-4">
            from sklearn.model_selection import train_test_split<br>
            from sklearn.linear_model import LogisticRegression<br><br>
            # 1. Separar datos de entrenamiento (80%) y prueba (20%)<br>
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)<br><br>
            # 2. Instanciar estimador y entrenar (ajustar parámetros)<br>
            modelo = LogisticRegression()<br>
            modelo.fit(X_train, y_train)<br><br>
            # 3. Predecir con datos nuevos nunca antes vistos<br>
            predicciones = modelo.predict(X_test)
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Simulador de Ajuste: Underfitting vs Ajuste Óptimo vs Overfitting",
            description: "Ajusta la complejidad del modelo y observa cómo el sobreajuste memoriza el ruido de entrenamiento pero falla al generalizar:",
            widget: {
              file: "widgets/programacion/u14_entrenamiento_modelo.html",
              title: "Ajuste del Modelo",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "comprueba-entrenamiento",
        title: "2. Comprueba tus Conocimientos",
        shortTitle: "Autoevaluación",
        icon: "fa-check-double",
        contentHtml: `<p class="text-base text-gray-300 leading-relaxed mb-4">Autoevaluación sobre entrenamiento de modelos:</p>`,
        quiz: [
          {
            question: "¿Por qué es un error metodológico crítico evaluar la precisión final de un modelo de ML utilizando el mismo conjunto de datos con el que fue entrenado?",
            options: [
              "Porque la computadora se bloquea por falta de memoria.",
              "Porque se produciría una ilusión de rendimiento perfecto (overfitting): el modelo podría haber memorizado los datos sin aprender a generalizar a situaciones nuevas.",
              "Porque Scikit-Learn arroja un error de sintaxis.",
              "Porque la variable objetivo cambiaría de tipo."
            ],
            correct: 1,
            explanation: "Evaluar con los mismos datos de entrenamiento oculta el sobreajuste (overfitting). Se necesita un conjunto de prueba (Test set) completamente independiente para medir la verdadera capacidad predictiva del modelo."
          }
        ]
      }
    ]
  },

  "prog-ml-evaluacion-modelo": {
    id: "prog-ml-evaluacion-modelo",
    title: "14.3 ¿Cómo se evalúa un modelo?",
    subtitle: "Métricas de clasificación rigurosas: Matriz de Confusión, Exactitud (Accuracy), Precisión, Exhaustividad (Recall) y Puntuación F1-Score.",
    unit: 14,
    unitTitle: "Unidad 14: Fundamentos de Machine Learning",
    week: 14,
    weekTitle: "Unidad 14: Fundamentos de Machine Learning",
    difficulty: "Avanzada",
    category: "Métricas de Rendimiento",
    timeEstimate: "35 minutos",
    badges: [
      { text: "Unidad 14", type: "neutral" },
      { text: "Avanzada", type: "hard" },
      { text: "Matriz de Confusión", type: "teal" },
      { text: "Precision / Recall", type: "purple" }
    ],
    sections: [
      {
        id: "matriz-confusion-metricas",
        title: "1. La Matriz de Confusión y sus Derivadas",
        shortTitle: "Matriz de Confusión",
        icon: "fa-chart-pie",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            En problemas de clasificación, la <strong>Exactitud (Accuracy)</strong> puede ser engañosa si los datos están desbalanceados (ej. en detección de fraude, si el 99% de las transacciones son legítimas, un modelo tonto que siempre diga "no fraude" tendría 99% de exactitud pero sería inútil). La <strong>Matriz de Confusión</strong> desglosa el rendimiento real:
          </p>
          <div class="grid grid-cols-2 gap-2.5 my-4 font-mono text-xs text-center">
            <div class="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/40"><strong class="text-emerald-400">Verdadero Positivo (VP):</strong> Acierto positivo</div>
            <div class="bg-red-950/40 p-2.5 rounded border border-red-500/40"><strong class="text-red-400">Falso Positivo (FP):</strong> Error Tipo I (Falsa Alarma)</div>
            <div class="bg-red-950/40 p-2.5 rounded border border-red-500/40"><strong class="text-red-400">Falso Negativo (FN):</strong> Error Tipo II (Peligroso)</div>
            <div class="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/40"><strong class="text-emerald-400">Verdadero Negativo (VN):</strong> Acierto negativo</div>
          </div>
        `,
        interactive: [
          {
            category: "explora",
            title: "Matriz de Confusión Interactiva",
            description: "Modifica los cuadrantes de predicción y observa el recálculo instantáneo de Accuracy, Precision, Recall y F1-Score:",
            widget: {
              file: "widgets/programacion/u14_matriz_confusion.html",
              title: "Matriz de Confusión",
              height: "460px"
            }
          }
        ]
      },
      {
        id: "precision-vs-recall",
        title: "2. Precision, Recall y F1-Score: ¿Cuál Priorizar?",
        shortTitle: "Precision vs Recall",
        icon: "fa-balance-scale",
        contentHtml: `
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th class="py-2.5 px-3 bg-[#141923] text-emerald-400 font-bold">Métrica</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Fórmula</th>
                  <th class="py-2.5 px-3 bg-[#141923] text-gray-200 font-bold">Cuándo Priorizarla</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/60 font-mono">
                <tr>
                  <td class="text-sky-400 py-2.5 px-3">Precisión</td>
                  <td class="py-2.5 px-3">VP / (VP + FP)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Cuando los Falsos Positivos son muy costosos (ej. clasificar un correo importante como Spam).</td>
                </tr>
                <tr>
                  <td class="text-purple-400 py-2.5 px-3">Exhaustividad (Recall)</td>
                  <td class="py-2.5 px-3">VP / (VP + FN)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Cuando los Falsos Negativos son críticos (ej. diagnóstico de cáncer; no podemos ignorar un paciente enfermo).</td>
                </tr>
                <tr>
                  <td class="text-amber-400 py-2.5 px-3">F1-Score</td>
                  <td class="py-2.5 px-3">2 · (P · R) / (P + R)</td>
                  <td class="py-2.5 px-3 font-sans text-gray-300">Media armónica cuando se busca un balance óptimo entre Precision y Recall.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        quiz: [
          {
            question: "En un sistema médico para detectar una enfermedad grave y contagiosa, ¿qué métrica debe optimizarse prioritariamente para evitar que pacientes infectados sean dados de alta por error?",
            options: [
              "Precisión",
              "Exhaustividad (Recall / Sensibilidad) para minimizar los Falsos Negativos (FN)",
              "Tiempo de compilación",
              "Solo la exactitud total"
            ],
            correct: 1,
            explanation: "El Recall mide qué proporción de los casos positivos reales logró detectar el modelo. En medicina, un Falso Negativo (decirle a una persona enferma que está sana) es potencialmente fatal, por lo que el Recall es la métrica de máxima prioridad."
          }
        ]
      }
    ]
  }
};
