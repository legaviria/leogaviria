/**
 * MOTOR DE BÚSQUEDA INTERACTIVO
 * Permite buscar rápidamente a través de las 14 unidades y temas
 */

import { CURRICULUM } from '../data/curriculum.js';

export function searchCurriculum(query) {
  if (!query || query.trim() === '') return [];

  const q = query.toLowerCase().trim();
  const results = [];

  for (const week of CURRICULUM) {
    // Coincidencia con la unidad
    const weekMatches = week.title.toLowerCase().includes(q) || week.description.toLowerCase().includes(q);

    for (const topic of week.topics) {
      const titleMatches = topic.title.toLowerCase().includes(q);
      const diffMatches = topic.difficulty.toLowerCase().includes(q);

      if (titleMatches || diffMatches || weekMatches) {
        results.push({
          topicId: topic.id,
          topicTitle: topic.title,
          unitTitle: week.title,
          unitNumber: week.number,
          weekTitle: week.title,
          weekNumber: week.number,
          difficulty: topic.difficulty,
          duration: topic.duration,
          hasAnimation: topic.hasAnimation,
          score: titleMatches ? 2 : 1
        });
      }
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
