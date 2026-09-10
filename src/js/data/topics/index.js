import { PROG_U02_TOPICS } from './programacion/u02_entorno_desarrollo.js';
import { PROG_U03_TOPICS } from './programacion/u03_elementos_basicos.js';
import { PROG_U04_TOPICS } from './programacion/u04_condicionales.js';
import { PROG_U05_TOPICS } from './programacion/u05_estructuras_control.js';
import { PROG_U06_TOPICS } from './programacion/u06_funciones_procedimientos.js';
import { PROG_U07_TOPICS } from './programacion/u07_recursividad.js';
import { PROG_U08_TOPICS } from './programacion/u08_memoria_referencias.js';
import { PROG_U10_TOPICS } from './programacion/u10_estructuras_datos.js';
import { PROG_U12_TOPICS } from './programacion/u12_programacion_grafica.js';
import { PROG_U13_TOPICS } from './programacion/u13_procesamiento_datos.js';
import { PROG_U14_TOPICS } from './programacion/u14_machine_learning.js';
import { BUBBLE_SORT_DATA } from './programacion/bubble_sort.js';
import { SELECTION_SORT_DATA } from './programacion/selection_sort.js';
import { INSERTION_SORT_DATA } from './programacion/insertion_sort.js';
import { MERGE_SORT_DATA } from './programacion/merge_sort.js';
import { QUICK_SORT_DATA } from './programacion/quick_sort.js';
import { BIG_O_DATA } from './programacion/big_o.js';
import { CONCEPTOS_BASICOS_DATA } from './programacion/conceptos_basicos.js';
import { REPRESENTACION_ALGORITMOS_DATA } from './programacion/representacion_algoritmos.js';
import { EXPRESIONES_NOTACION_DATA } from './programacion/expresiones_notacion.js';
import { TICS_U01_TOPICS } from './tics/u01_sistemas_numericos.js';
import { TICS_U02_TOPICS } from './tics/u02_induccion_recursion.js';
import { TICS_U03_TOPICS } from './tics/u03_teoria_conjuntos.js';
import { TICS_U04_TOPICS } from './tics/u04_funciones_relaciones.js';
import { TICS_U05_TOPICS } from './tics/u05_conteo_combinatoria.js';
import { getTopicById } from '../curriculum.js';

const TOPIC_REGISTRY = {
  'prog-intro-algoritmos': CONCEPTOS_BASICOS_DATA,
  'prog-conceptos-basicos': CONCEPTOS_BASICOS_DATA,
  'prog-representacion-algoritmos': REPRESENTACION_ALGORITMOS_DATA,
  'prog-expresiones-notacion': EXPRESIONES_NOTACION_DATA,
  'bubble-sort': BUBBLE_SORT_DATA,
  'selection-sort': SELECTION_SORT_DATA,
  'insertion-sort': INSERTION_SORT_DATA,
  'merge-sort': MERGE_SORT_DATA,
  'quick-sort': QUICK_SORT_DATA,
  'big-o-notation': BIG_O_DATA,
  ...TICS_U01_TOPICS,
  ...TICS_U02_TOPICS,
  ...TICS_U03_TOPICS,
  ...TICS_U04_TOPICS,
  ...TICS_U05_TOPICS,
  ...PROG_U02_TOPICS,
  ...PROG_U03_TOPICS,
  ...PROG_U04_TOPICS,
  ...PROG_U05_TOPICS,
  ...PROG_U06_TOPICS,
  ...PROG_U07_TOPICS,
  ...PROG_U08_TOPICS,
  ...PROG_U10_TOPICS,
  ...PROG_U12_TOPICS,
  ...PROG_U13_TOPICS,
  ...PROG_U14_TOPICS
};

/**
 * Obtiene los datos detallados de un tema. Si no tiene archivo dedicado,
 * genera una estructura didáctica rica lista para ser ampliada por el docente.
 */
export function getTopicData(topicId) {
  if (TOPIC_REGISTRY[topicId]) {
    return TOPIC_REGISTRY[topicId];
  }

  const meta = getTopicById(topicId);
  if (!meta) return null;

  return generatePlaceholderTopic(meta);
}

function generatePlaceholderTopic(meta) {
  return {
    id: meta.id,
    title: meta.title,
    subtitle: `Contenido estructurado para ${meta.unitTitle || meta.weekTitle}. Diseñado para integrar animaciones y código paso a paso.`,
    unit: meta.unitNumber || meta.weekNumber,
    unitTitle: meta.unitTitle || meta.weekTitle,
    week: meta.unitNumber || meta.weekNumber,
    weekTitle: meta.unitTitle || meta.weekTitle,
    difficulty: meta.difficulty,
    category: "Estructuras de Datos y Algoritmos",
    timeEstimate: meta.duration,
    badges: [
      { text: `Unidad ${String(meta.unitNumber || meta.weekNumber).padStart(2, '0')}`, type: "neutral" },
      { text: meta.difficulty, type: meta.difficulty === 'Fácil' ? 'easy' : meta.difficulty === 'Media' ? 'medium' : 'hard' },
      { text: "En Progreso / Plantilla", type: "blue" }
    ],
    sections: [
      {
        id: "en-que-consiste",
        title: "1. ¿En qué consiste?",
        shortTitle: "¿En qué consiste?",
        icon: "fa-book-open",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            Este tema forma parte fundamental del plan de estudios de <strong>${meta.weekTitle}</strong>. Desarrolla las bases teóricas, el modelado formal y la aplicación práctica dentro del paradigma de estructuras de datos orientadas a objetos.
          </p>

          <div class="bg-[#141923] border border-blue-500/30 rounded-xl p-4 my-4">
            <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
              <i class="fas fa-bullseye"></i> Objetivos Clave de Aprendizaje
            </h4>
            <ul class="text-xs text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li>Comprender la representación matemática y la memoria subyacente.</li>
              <li>Analizar las invariantes de estado y condiciones de borde.</li>
              <li>Implementar las operaciones canónicas con manejo adecuado de memoria y excepciones.</li>
            </ul>
          </div>
        `
      },
      {
        id: "como-funciona",
        title: "2. ¿Cómo funciona y Especificación?",
        shortTitle: "¿Cómo funciona?",
        icon: "fa-project-diagram",
        contentHtml: `
          <p class="text-base text-gray-300 leading-relaxed mb-4">
            A continuación se presenta el pseudocódigo y el flujo conceptual formal:
          </p>
          <div class="bg-[#10141d] border border-gray-800 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-x-auto">
            <pre><code>// Especificación formal del TDA / Algoritmo
template &lt;typename T&gt;
class EstructuraDatos {
private:
    // Punteros internos y metadatos
    size_t capacidad;
    size_t tamanio;

public:
    void insertar(const T&amp; elemento);
    bool eliminar(const T&amp; elemento);
    T* buscar(const T&amp; criterio) const;
};</code></pre>
          </div>
        `
      },
      {
        id: "animacion-y-desarrollo",
        title: "3. Visualización y Animación",
        icon: "fa-play-circle",
        contentHtml: `
          <div class="bg-[#121622] border-2 border-dashed border-gray-700 rounded-xl p-8 text-center my-4">
            <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl">
              <i class="fas fa-wand-magic-sparkles"></i>
            </div>
            <h4 class="text-base font-semibold text-white mb-1">¡Espacio listo para tu nueva animación interactiva!</h4>
            <p class="text-xs text-gray-400 max-w-lg mx-auto mb-4">
              Puedes agregar una animación interactiva aquí exportando tu widget desde Google Colab (tal como en la Semana 8 con Bubble Sort) o creando un archivo HTML/JS en la carpeta <code>widgets/</code>.
            </p>
            <div class="inline-flex items-center gap-2 bg-[#1e2638] px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400 border border-emerald-500/30">
              <i class="fas fa-file-code"></i> widgets/${meta.id}_visualizer.html
            </div>
          </div>
        `
      },
      {
        id: "analisis-complejidad",
        title: "4. Análisis de Complejidad",
        icon: "fa-chart-pie",
        contentHtml: `
          <div class="overflow-x-auto my-4 border border-gray-800 rounded-xl">
            <table class="w-full text-xs text-left complexity-table">
              <thead>
                <tr>
                  <th>Operación</th>
                  <th>Mejor Caso</th>
                  <th>Caso Promedio</th>
                  <th>Peor Caso</th>
                  <th>Espacio Extra</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold text-white">Acceso / Búsqueda</td>
                  <td><code>O(1)</code></td>
                  <td><code>O(n)</code></td>
                  <td><code>O(n)</code></td>
                  <td><code>O(1)</code></td>
                </tr>
                <tr>
                  <td class="font-bold text-white">Inserción</td>
                  <td><code>O(1)</code></td>
                  <td><code>O(n)</code></td>
                  <td><code>O(n)</code></td>
                  <td><code>O(1)</code></td>
                </tr>
                <tr>
                  <td class="font-bold text-white">Eliminación</td>
                  <td><code>O(1)</code></td>
                  <td><code>O(n)</code></td>
                  <td><code>O(n)</code></td>
                  <td><code>O(1)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  };
}
