/**
 * GESTOR DE ESTADO Y PROGRESO - MARATÓN: SOLUCIÓN DE PROBLEMAS
 * Persistencia en localStorage desacoplada del progreso de lecciones.
 */

export const STORAGE_KEY_MARATON = 'leogaviria_maraton_progress';

export function getMaratonState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MARATON);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Error al leer estado de Maratón:', e);
    return {};
  }
}

export function saveMaratonState(state) {
  try {
    localStorage.setItem(STORAGE_KEY_MARATON, JSON.stringify(state));
  } catch (e) {
    console.error('Error al guardar estado de Maratón:', e);
  }
}

export function getProblemRecord(problemId) {
  const state = getMaratonState();
  return state[problemId] || {
    status: 'no_iniciado', // 'no_iniciado' | 'en_progreso' | 'resuelto'
    intentos: 0,
    codigo_guardado: '',
    fecha_resolucion: null,
    ultimo_intento: null,
    casos_pasados: 0,
    total_casos: 0
  };
}

export function saveDraftCode(problemId, code) {
  const state = getMaratonState();
  if (!state[problemId]) {
    state[problemId] = {
      status: 'en_progreso',
      intentos: 0,
      codigo_guardado: code,
      fecha_resolucion: null,
      ultimo_intento: new Date().toISOString(),
      casos_pasados: 0,
      total_casos: 0
    };
  } else {
    state[problemId].codigo_guardado = code;
    state[problemId].ultimo_intento = new Date().toISOString();
    if (state[problemId].status === 'no_iniciado') {
      state[problemId].status = 'en_progreso';
    }
  }
  saveMaratonState(state);
}

export function recordProblemEvaluation(problemId, code, evaluationResult) {
  const state = getMaratonState();
  const prev = state[problemId] || {
    status: 'no_iniciado',
    intentos: 0,
    codigo_guardado: '',
    fecha_resolucion: null,
    ultimo_intento: null,
    casos_pasados: 0,
    total_casos: 0
  };

  const isSuccess = evaluationResult.allPassed;
  const newStatus = isSuccess ? 'resuelto' : 'en_progreso';
  const now = new Date().toISOString();

  state[problemId] = {
    ...prev,
    status: prev.status === 'resuelto' ? 'resuelto' : newStatus,
    intentos: (prev.intentos || 0) + 1,
    codigo_guardado: code,
    ultimo_intento: now,
    fecha_resolucion: isSuccess && !prev.fecha_resolucion ? now : prev.fecha_resolucion,
    casos_pasados: Math.max(prev.casos_pasados || 0, evaluationResult.passedCount || 0),
    total_casos: evaluationResult.totalCount || 0
  };

  saveMaratonState(state);
  return state[problemId];
}

export function getMaratonStats(problemsList) {
  const state = getMaratonState();
  const total = problemsList.length;
  let resueltos = 0;
  let enProgreso = 0;

  const porDificultad = {
    inicial: { total: 0, resueltos: 0 },
    basico: { total: 0, resueltos: 0 },
    intermedio: { total: 0, resueltos: 0 },
    desafio: { total: 0, resueltos: 0 }
  };

  problemsList.forEach(p => {
    const rec = state[p.id];
    const diff = p.dificultad || 'basico';
    if (porDificultad[diff]) {
      porDificultad[diff].total++;
    }

    if (rec && rec.status === 'resuelto') {
      resueltos++;
      if (porDificultad[diff]) porDificultad[diff].resueltos++;
    } else if (rec && rec.status === 'en_progreso') {
      enProgreso++;
    }
  });

  const pendientes = total - resueltos;
  const porcentaje = total > 0 ? Math.round((resueltos / total) * 100) : 0;

  return {
    total,
    resueltos,
    enProgreso,
    pendientes,
    porcentaje,
    porDificultad
  };
}
