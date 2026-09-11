/**
 * VISTAS Y COMPONENTES UI - MARATÓN: SOLUCIÓN DE PROBLEMAS
 * Renderizado de biblioteca, filtros, editor Python y Judge interactivo.
 */

import { MARATON_PROBLEMS, getProblemById } from './problems.js';
import { getMaratonState, getProblemRecord, getMaratonStats, saveDraftCode, recordProblemEvaluation } from './storage.js';
import { judgeSubmission } from './runner.js';

export class MaratonUI {
  constructor(app) {
    this.app = app;
    this.activeFilters = {
      search: '',
      tema: 'Todos',
      dificultad: 'Todos',
      estado: 'Todos',
      unidad: 'Todas'
    };
    this.currentProblem = null;
    this.currentEvaluation = null;
    this.activeTestCaseTab = 0;
    this.isEvaluating = false;
  }

  getDifficultyBadge(diff) {
    switch(diff) {
      case 'inicial':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">🟢 Inicial</span>';
      case 'basico':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">🔵 Básico</span>';
      case 'intermedio':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">🟠 Intermedio</span>';
      case 'desafio':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">🔴 Desafío</span>';
      default:
        return '<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-800 text-gray-300">' + diff + '</span>';
    }
  }

  getStatusBadge(status) {
    switch(status) {
      case 'resuelto':
        return '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" title="Problema Resuelto"><i class="fas fa-check-circle text-[10px]"></i> Resuelto</span>';
      case 'en_progreso':
        return '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30" title="En Progreso"><i class="fas fa-circle-half-stroke text-[10px]"></i> En progreso</span>';
      default:
        return '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] text-gray-500 bg-gray-800/60 border border-gray-700/60" title="No Iniciado"><i class="far fa-circle text-[10px]"></i> No iniciado</span>';
    }
  }

  /**
   * Renderiza la Biblioteca de Problemas
   */
  renderLibrary(container, initialTheme = '') {
    if (initialTheme && initialTheme !== 'Todos') {
      this.activeFilters.tema = initialTheme;
    }

    const stats = getMaratonStats(MARATON_PROBLEMS);
    const maratonState = getMaratonState();

    const allTemas = ['Todos'];
    const allUnidades = ['Todas'];

    MARATON_PROBLEMS.forEach(p => {
      p.temas.forEach(t => { if (!allTemas.includes(t)) allTemas.push(t); });
      if (p.unidad && !allUnidades.includes(p.unidad)) allUnidades.push(p.unidad);
    });

    const filtered = MARATON_PROBLEMS.filter(p => {
      const q = this.activeFilters.search.toLowerCase().trim();
      if (q) {
        const matchesNum = String(p.numero).includes(q);
        const matchesTitle = p.titulo.toLowerCase().includes(q);
        const matchesConcepts = p.conceptos.some(c => c.toLowerCase().includes(q));
        if (!matchesNum && !matchesTitle && !matchesConcepts) return false;
      }
      if (this.activeFilters.tema !== 'Todos' && !p.temas.includes(this.activeFilters.tema)) return false;
      if (this.activeFilters.dificultad !== 'Todos' && p.dificultad !== this.activeFilters.dificultad) return false;
      if (this.activeFilters.unidad !== 'Todas' && p.unidad !== this.activeFilters.unidad) return false;

      const record = maratonState[p.id];
      const status = (record && record.status) || 'no_iniciado';
      if (this.activeFilters.estado !== 'Todos' && status !== this.activeFilters.estado) return false;

      return true;
    });

    const html = `
      <div class="w-full max-w-6xl xl:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <!-- Migas de Pan -->
        <nav class="flex items-center gap-2 text-xs text-gray-400 mb-4 flex-wrap">
          <span class="text-gray-500 font-medium">Leo Gaviria</span>
          <span class="text-gray-600">/</span>
          <span class="text-emerald-400 font-medium flex items-center gap-1">
            <i class="fas fa-person-running text-xs"></i> Maratón: Solución de problemas
          </span>
        </nav>

        <!-- Cabecera de Maratón -->
        <header class="bg-gradient-to-br from-[#0c1816] via-[#101924] to-[#0c121e] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
          <div class="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div class="flex-1">
              <div class="flex items-center gap-2.5 mb-2">
                <span class="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-lg shadow-sm">
                  <i class="fas fa-person-running"></i>
                </span>
                <span class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Judge Online Educativo Integrado
                </span>
              </div>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                🏃 Maratón: Solución de problemas
              </h1>
              <p class="text-xs sm:text-sm text-gray-300 mt-2 max-w-2xl leading-relaxed">
                Biblioteca transversal de problemas algorítmicos. Pon a prueba tus habilidades de programación en Python, ejecuta tu código en sandbox seguro, evalúa con casos de prueba y recibe retroalimentación pedagógica en tiempo real.
              </p>
            </div>

            <!-- Widget de Progreso del Estudiante -->
            <div class="bg-[#0b0e14]/90 border border-emerald-500/30 rounded-xl p-4 sm:p-5 w-full md:w-80 shrink-0 shadow-lg backdrop-blur-sm">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-white flex items-center gap-1.5">
                  <i class="fas fa-trophy text-amber-400 text-xs"></i> Tu Progreso en Maratón
                </span>
                <span class="text-xs font-mono font-bold text-emerald-400">${stats.resueltos} / ${stats.total}</span>
              </div>

              <div class="w-full h-2.5 bg-gray-800/80 rounded-full overflow-hidden mb-3">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" style="width: ${stats.porcentaje}%"></div>
              </div>

              <div class="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
                <div class="bg-[#141923] p-1.5 rounded border border-gray-800">
                  <span class="text-emerald-400 block font-bold">${stats.porDificultad.inicial.resueltos}/${stats.porDificultad.inicial.total}</span>
                  <span class="text-gray-500 text-[9px]">Inicial</span>
                </div>
                <div class="bg-[#141923] p-1.5 rounded border border-gray-800">
                  <span class="text-sky-400 block font-bold">${stats.porDificultad.basico.resueltos}/${stats.porDificultad.basico.total}</span>
                  <span class="text-gray-500 text-[9px]">Básico</span>
                </div>
                <div class="bg-[#141923] p-1.5 rounded border border-gray-800">
                  <span class="text-amber-400 block font-bold">${stats.porDificultad.intermedio.resueltos}/${stats.porDificultad.intermedio.total}</span>
                  <span class="text-gray-500 text-[9px]">Interm.</span>
                </div>
                <div class="bg-[#141923] p-1.5 rounded border border-gray-800">
                  <span class="text-rose-400 block font-bold">${stats.porDificultad.desafio.resueltos}/${stats.porDificultad.desafio.total}</span>
                  <span class="text-gray-500 text-[9px]">Desafío</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Barra de Filtros Combinables -->
        <div class="bg-[#121622] border border-gray-800 rounded-2xl p-4 mb-6 shadow-md">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <!-- Búsqueda textual -->
            <div class="lg:col-span-1">
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Buscar reto</label>
              <div class="relative">
                <i class="fas fa-search absolute left-3 top-2.5 text-xs text-gray-500"></i>
                <input 
                  type="text" 
                  id="maraton-filter-search" 
                  value="${this.activeFilters.search}" 
                  placeholder="# o nombre..." 
                  class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 outline-none focus:border-emerald-500/50 transition"
                >
              </div>
            </div>

            <!-- Filtro Tema -->
            <div>
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Tema</label>
              <select 
                id="maraton-filter-tema" 
                class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-gray-200 outline-none focus:border-emerald-500/50 transition cursor-pointer"
              >
                ${allTemas.map(t => `<option value="${t}" ${this.activeFilters.tema === t ? 'selected' : ''}>${t}</option>`).join('')}
              </select>
            </div>

            <!-- Filtro Dificultad -->
            <div>
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Dificultad</label>
              <select 
                id="maraton-filter-dificultad" 
                class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-gray-200 outline-none focus:border-emerald-500/50 transition cursor-pointer"
              >
                <option value="Todos" ${this.activeFilters.dificultad === 'Todos' ? 'selected' : ''}>Todas</option>
                <option value="inicial" ${this.activeFilters.dificultad === 'inicial' ? 'selected' : ''}>🟢 Inicial</option>
                <option value="basico" ${this.activeFilters.dificultad === 'basico' ? 'selected' : ''}>🔵 Básico</option>
                <option value="intermedio" ${this.activeFilters.dificultad === 'intermedio' ? 'selected' : ''}>🟠 Intermedio</option>
                <option value="desafio" ${this.activeFilters.dificultad === 'desafio' ? 'selected' : ''}>🔴 Desafío</option>
              </select>
            </div>

            <!-- Filtro Estado -->
            <div>
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Estado</label>
              <select 
                id="maraton-filter-estado" 
                class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-gray-200 outline-none focus:border-emerald-500/50 transition cursor-pointer"
              >
                <option value="Todos" ${this.activeFilters.estado === 'Todos' ? 'selected' : ''}>Todos</option>
                <option value="resuelto" ${this.activeFilters.estado === 'resuelto' ? 'selected' : ''}>✓ Resueltos</option>
                <option value="en_progreso" ${this.activeFilters.estado === 'en_progreso' ? 'selected' : ''}>◐ En progreso</option>
                <option value="no_iniciado" ${this.activeFilters.estado === 'no_iniciado' ? 'selected' : ''}>○ No iniciados</option>
              </select>
            </div>

            <!-- Filtro Unidad -->
            <div>
              <label class="block text-[10px] font-mono uppercase text-gray-400 mb-1 font-semibold">Unidad</label>
              <select 
                id="maraton-filter-unidad" 
                class="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-gray-200 outline-none focus:border-emerald-500/50 transition cursor-pointer"
              >
                ${allUnidades.map(u => `<option value="${u}" ${this.activeFilters.unidad === u ? 'selected' : ''}>${u}</option>`).join('')}
              </select>
            </div>
          </div>

          <!-- Resumen de Filtro Activo y Botón Limpiar -->
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-800/80 text-xs text-gray-400 flex-wrap gap-2">
            <span class="font-mono text-[11px]">
              Mostrando <strong class="text-emerald-400 font-bold">${filtered.length}</strong> de ${MARATON_PROBLEMS.length} problemas
            </span>
            <button 
              id="maraton-clear-filters-btn" 
              class="text-[11px] text-gray-400 hover:text-emerald-400 transition cursor-pointer flex items-center gap-1 font-semibold"
            >
              <i class="fas fa-rotate-left text-[10px]"></i> Restablecer filtros
            </button>
          </div>
        </div>

        <!-- Listado de Problemas (Tabla Responsive) -->
        <div class="bg-[#121622] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-[#161c28] border-b border-gray-800 text-gray-400 font-mono text-[11px] uppercase tracking-wider">
                  <th class="py-3 px-4 w-16 text-center">#</th>
                  <th class="py-3 px-4 min-w-[220px]">Problema y Conceptos</th>
                  <th class="py-3 px-4 min-w-[120px]">Tema</th>
                  <th class="py-3 px-4 min-w-[140px] hidden md:table-cell">Unidad</th>
                  <th class="py-3 px-4 w-28 text-center">Dificultad</th>
                  <th class="py-3 px-4 w-28 text-center">Estado</th>
                  <th class="py-3 px-4 w-32 text-right">Acción</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-800/70">
                ${filtered.length === 0 ? `
                  <tr>
                    <td colspan="7" class="py-12 text-center text-gray-500 font-mono">
                      <i class="fas fa-inbox text-2xl mb-2 text-gray-600 block"></i>
                      No se encontraron problemas con los filtros seleccionados.
                    </td>
                  </tr>
                ` : filtered.map(p => {
                  const rec = maratonState[p.id];
                  const status = (rec && rec.status) || 'no_iniciado';

                  return `
                    <tr class="hover:bg-[#151c29]/70 transition group cursor-pointer" onclick="window.app.loadMaratonProblem(${p.numero})">
                      <td class="py-3 px-4 text-center font-mono font-bold text-gray-400 group-hover:text-emerald-400">
                        ${p.numero}
                      </td>
                      <td class="py-3 px-4">
                        <div class="font-bold text-white group-hover:text-emerald-300 transition text-sm mb-1">
                          ${p.titulo}
                        </div>
                        <div class="flex flex-wrap gap-1">
                          ${p.conceptos.slice(0, 3).map(c => `
                            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-800/80 text-gray-300 border border-gray-700/50">
                              ${c}
                            </span>
                          `).join('')}
                        </div>
                      </td>
                      <td class="py-3 px-4 text-gray-300 font-medium">
                        ${p.temas.join(', ')}
                      </td>
                      <td class="py-3 px-4 text-gray-400 text-[11px] hidden md:table-cell">
                        ${p.unidad || '—'}
                      </td>
                      <td class="py-3 px-4 text-center whitespace-nowrap">
                        ${this.getDifficultyBadge(p.dificultad)}
                      </td>
                      <td class="py-3 px-4 text-center whitespace-nowrap">
                        ${this.getStatusBadge(status)}
                      </td>
                      <td class="py-3 px-4 text-right whitespace-nowrap" onclick="event.stopPropagation();">
                        <button 
                          onclick="window.app.loadMaratonProblem(${p.numero})"
                          class="px-3 py-1.5 rounded-lg bg-[#1e2638] hover:bg-emerald-600 text-gray-200 hover:text-white border border-gray-700/70 hover:border-emerald-500 text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
                        >
                          <span>Resolver</span>
                          <i class="fas fa-arrow-right text-[10px]"></i>
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    this.bindLibraryEvents(container);
  }

  bindLibraryEvents(container) {
    const searchInput = container.querySelector('#maraton-filter-search');
    const temaSelect = container.querySelector('#maraton-filter-tema');
    const diffSelect = container.querySelector('#maraton-filter-dificultad');
    const estadoSelect = container.querySelector('#maraton-filter-estado');
    const unidadSelect = container.querySelector('#maraton-filter-unidad');
    const clearBtn = container.querySelector('#maraton-clear-filters-btn');

    const update = () => {
      this.activeFilters.search = searchInput ? searchInput.value : '';
      this.activeFilters.tema = temaSelect ? temaSelect.value : 'Todos';
      this.activeFilters.dificultad = diffSelect ? diffSelect.value : 'Todos';
      this.activeFilters.estado = estadoSelect ? estadoSelect.value : 'Todos';
      this.activeFilters.unidad = unidadSelect ? unidadSelect.value : 'Todas';
      this.renderLibrary(container);
    };

    if (searchInput) searchInput.addEventListener('input', update);
    if (temaSelect) temaSelect.addEventListener('change', update);
    if (diffSelect) diffSelect.addEventListener('change', update);
    if (estadoSelect) estadoSelect.addEventListener('change', update);
    if (unidadSelect) unidadSelect.addEventListener('change', update);

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.activeFilters = { search: '', tema: 'Todos', dificultad: 'Todos', estado: 'Todos', unidad: 'Todas' };
        this.renderLibrary(container);
      });
    }
  }

  /**
   * Renderiza la vista individual de resolución de problema
   */
  renderProblemView(container, problem) {
    this.currentProblem = problem;
    this.currentEvaluation = null;
    this.activeTestCaseTab = 0;

    const record = getProblemRecord(problem.id);
    const codeToShow = record.codigo_guardado || problem.codigo_inicial;

    const html = `
      <div class="w-full max-w-6xl xl:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <!-- Migas de Pan -->
        <nav class="flex items-center justify-between gap-2 text-xs text-gray-400 mb-4 flex-wrap">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-gray-500 font-medium">Leo Gaviria</span>
            <span class="text-gray-600">/</span>
            <button onclick="window.app.showMaraton()" class="hover:text-emerald-400 transition font-medium text-gray-300">
              🏃 Maratón
            </button>
            <span class="text-gray-600">/</span>
            <span class="text-emerald-400 font-medium">#${problem.numero} - ${problem.titulo}</span>
          </div>

          <button 
            onclick="window.app.showMaraton()" 
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141923] border border-gray-800 hover:border-gray-700 text-xs text-gray-300 hover:text-white transition cursor-pointer"
          >
            <i class="fas fa-arrow-left text-[10px]"></i> Volver a la Biblioteca
          </button>
        </nav>

        <!-- Cabecera del Reto -->
        <header class="border-b border-gray-800/80 pb-5 mb-6">
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div class="flex items-center gap-2.5 mb-1.5 flex-wrap">
                <span class="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Problema ${problem.numero}
                </span>
                ${this.getDifficultyBadge(problem.dificultad)}
                <span class="text-xs text-gray-400 font-medium px-2 py-0.5 rounded bg-gray-800/70">
                  ${problem.temas.join(', ')}
                </span>
                ${problem.unidad ? `<span class="text-xs text-gray-500 font-mono">${problem.unidad}</span>` : ''}
              </div>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                ${problem.titulo}
              </h1>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <div id="maraton-problem-status-pill">
                ${this.getStatusBadge(record.status)}
              </div>
              <span class="text-[11px] font-mono text-gray-500">
                Intentos: <strong id="maraton-attempts-counter" class="text-gray-300">${record.intentos || 0}</strong>
              </span>
            </div>
          </div>
        </header>

        <!-- Contenedor Principal: 2 Columnas (Descripción + Editor/Judge) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Columna Izquierda: Enunciado Pedagógico (5 columnas) -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Descripción -->
            <div class="bg-[#121622] border border-gray-800 rounded-2xl p-5 shadow-sm">
              <h3 class="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-2">
                <i class="fas fa-file-lines"></i> Descripción del Problema
              </h3>
              <div class="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed space-y-3">
                <p>${problem.descripcion}</p>
              </div>
            </div>

            <!-- Entrada y Salida -->
            <div class="grid grid-cols-1 gap-4">
              <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
                <h4 class="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <i class="fas fa-right-to-bracket text-[11px]"></i> Especificación de Entrada
                </h4>
                <p class="text-xs text-gray-300 leading-relaxed">${problem.entrada}</p>
              </div>

              <div class="bg-[#121622] border border-gray-800 rounded-xl p-4">
                <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <i class="fas fa-right-from-bracket text-[11px]"></i> Especificación de Salida
                </h4>
                <p class="text-xs text-gray-300 leading-relaxed">${problem.salida}</p>
              </div>
            </div>

            <!-- Ejemplos -->
            <div class="bg-[#121622] border border-gray-800 rounded-2xl p-5 shadow-sm">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                  <i class="fas fa-vial"></i> Ejemplo de Ejecución
                </h3>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <span class="text-[10px] text-gray-500 font-bold uppercase block mb-1">Entrada de Ejemplo</span>
                  <pre class="bg-[#080b11] p-3 rounded-lg border border-gray-800 text-emerald-300 overflow-x-auto min-h-[50px]"><code>${problem.ejemplo_entrada || '(Sin entrada)'}</code></pre>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 font-bold uppercase block mb-1">Salida Esperada</span>
                  <pre class="bg-[#080b11] p-3 rounded-lg border border-gray-800 text-sky-300 overflow-x-auto min-h-[50px]"><code>${problem.ejemplo_salida}</code></pre>
                </div>
              </div>
            </div>

            <!-- Conceptos Relacionados -->
            <div class="bg-[#121622] border border-gray-800 rounded-2xl p-4">
              <h4 class="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <i class="fas fa-lightbulb text-[11px]"></i> Conceptos Clave para Practicar
              </h4>
              <div class="flex flex-wrap gap-1.5">
                ${problem.conceptos.map(c => `
                  <span class="px-2 py-1 rounded-md bg-[#192132] border border-gray-700 text-gray-300 text-xs font-mono">
                    ${c}
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Pistas Progresivas (Acordeón) -->
            ${problem.pistas && problem.pistas.length > 0 ? `
              <div class="bg-[#121622] border border-gray-800 rounded-2xl p-5 shadow-sm">
                <h4 class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <i class="fas fa-wand-magic-sparkles text-[11px]"></i> Pistas Progresivas de Apoyo
                </h4>
                <div class="space-y-2">
                  ${problem.pistas.map((pista, idx) => `
                    <details class="group bg-[#0b0e14] border border-gray-800 rounded-xl p-3 cursor-pointer">
                      <summary class="text-xs font-semibold text-gray-300 group-hover:text-amber-300 flex items-center justify-between list-none">
                        <span class="flex items-center gap-2">
                          <i class="fas fa-key text-amber-400/80 text-[10px]"></i>
                          <span>Pista ${idx + 1}</span>
                        </span>
                        <span class="text-[10px] text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p class="mt-2.5 text-xs text-gray-300 leading-relaxed border-t border-gray-800/80 pt-2">
                        ${pista}
                      </p>
                    </details>
                  `).join('')}
                </div>
              </div>
            ` : ''}

          </div>

          <!-- Columna Derecha: Editor de Código + Judge (7 columnas) -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Tarjeta del Editor Python -->
            <div class="bg-[#121622] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <!-- Barra Superior del Editor -->
              <div class="bg-[#161c28] px-4 py-2.5 border-b border-gray-800 flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                    <i class="fab fa-python text-sm"></i> solución.py
                  </span>
                  <span class="text-[11px] text-gray-500 font-mono hidden sm:inline">• Python 3 Sandbox</span>
                </div>

                <div class="flex items-center gap-1.5">
                  <button 
                    id="maraton-copy-code-btn" 
                    onclick="window.copyCodeToClipboard(this)"
                    class="px-2 py-1 rounded bg-[#1e2638] hover:bg-gray-700 text-gray-300 text-[11px] font-mono flex items-center gap-1 border border-gray-700 transition cursor-pointer"
                    title="Copiar código al portapapeles"
                  >
                    <i class="fas fa-copy text-[10px]"></i> <span>Copiar</span>
                  </button>
                  <button 
                    id="maraton-reset-code-btn" 
                    class="px-2 py-1 rounded bg-[#1e2638] hover:bg-rose-900/40 text-gray-300 hover:text-rose-300 text-[11px] font-mono flex items-center gap-1 border border-gray-700 transition cursor-pointer"
                    title="Reiniciar código inicial"
                  >
                    <i class="fas fa-rotate-left text-[10px]"></i> <span>Reiniciar</span>
                  </button>
                </div>
              </div>

              <!-- Área de Edición de Código con Soporte Tab y Numeración -->
              <div class="relative bg-[#07090e] p-3 sm:p-4 font-mono text-xs">
                <textarea 
                  id="maraton-code-editor" 
                  rows="14"
                  spellcheck="false"
                  autocomplete="off"
                  autocapitalize="off"
                  class="w-full bg-transparent text-gray-200 outline-none resize-y font-mono text-xs leading-relaxed border-none focus:ring-0 selection:bg-emerald-500/30"
                  placeholder="# Escribe tu solución aquí"
                >${codeToShow}</textarea>
              </div>

              <!-- Barra Inferior de Controles del Editor -->
              <div class="bg-[#141923] p-3 sm:px-4 sm:py-3 border-t border-gray-800 flex items-center justify-between flex-wrap gap-3">
                <span class="text-[11px] text-gray-500 font-mono hidden sm:inline flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 bg-gray-800 rounded text-[9px] text-gray-400 border border-gray-700">Ctrl</kbd> + <kbd class="px-1.5 py-0.5 bg-gray-800 rounded text-[9px] text-gray-400 border border-gray-700">Enter</kbd> para Comprobar
                </span>

                <div class="flex items-center gap-2 ml-auto">
                  <!-- Botón Ejecutar (solo casos visibles rápidos) -->
                  <button 
                    id="maraton-run-btn" 
                    class="px-3.5 py-2 rounded-xl bg-[#1e2638] hover:bg-gray-700 text-gray-200 hover:text-white text-xs font-semibold border border-gray-700 transition cursor-pointer flex items-center gap-1.5 shadow-sm"
                    title="Ejecutar contra casos de prueba de ejemplo"
                  >
                    <i class="fas fa-play text-sky-400 text-xs"></i>
                    <span>▶ Ejecutar</span>
                  </button>

                  <!-- Botón Comprobar (evaluación completa con judge) -->
                  <button 
                    id="maraton-check-btn" 
                    class="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold transition cursor-pointer flex items-center gap-2 shadow-lg shadow-emerald-600/30"
                    title="Evaluar solución completa con casos visibles y ocultos"
                  >
                    <i class="fas fa-check-double text-xs"></i>
                    <span>✓ Comprobar Solución</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Panel de Evaluación del Judge (Resultados y Casos de Prueba) -->
            <div id="maraton-judge-results-panel" class="bg-[#121622] border border-gray-800 rounded-2xl p-5 shadow-xl min-h-[160px] flex flex-col justify-center">
              <div class="text-center py-6 text-xs text-gray-500 font-mono">
                <i class="fas fa-terminal text-2xl text-gray-600 mb-2 block"></i>
                Presiona <strong>▶ Ejecutar</strong> o <strong>✓ Comprobar Solución</strong> para evaluar tu código.
              </div>
            </div>

          </div>

        </div>
      </div>
    `;

    container.innerHTML = html;
    this.bindProblemEvents(container, problem);
  }

  bindProblemEvents(container, problem) {
    const editor = container.querySelector('#maraton-code-editor');
    const runBtn = container.querySelector('#maraton-run-btn');
    const checkBtn = container.querySelector('#maraton-check-btn');
    const resetBtn = container.querySelector('#maraton-reset-code-btn');

    if (editor) {
      editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = editor.selectionStart;
          const end = editor.selectionEnd;
          const val = editor.value;
          editor.value = val.substring(0, start) + '    ' + val.substring(end);
          editor.selectionStart = editor.selectionEnd = start + 4;
          saveDraftCode(problem.id, editor.value);
        } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          if (checkBtn) checkBtn.click();
        }
      });

      editor.addEventListener('input', () => {
        saveDraftCode(problem.id, editor.value);
      });
    }

    if (resetBtn && editor) {
      resetBtn.addEventListener('click', () => {
        if (confirm('¿Deseas reiniciar el código a la plantilla inicial del reto?')) {
          editor.value = problem.codigo_inicial;
          saveDraftCode(problem.id, editor.value);
          this.app.showToast('Código inicial restablecido', 'info');
        }
      });
    }

    if (runBtn) {
      runBtn.addEventListener('click', () => this.handleEvaluate(problem, editor.value, false));
    }

    if (checkBtn) {
      checkBtn.addEventListener('click', () => this.handleEvaluate(problem, editor.value, true));
    }
  }

  async handleEvaluate(problem, code, isFullCheck) {
    if (this.isEvaluating) return;
    this.isEvaluating = true;

    const panel = document.getElementById('maraton-judge-results-panel');
    const runBtn = document.getElementById('maraton-run-btn');
    const checkBtn = document.getElementById('maraton-check-btn');

    if (runBtn) runBtn.disabled = true;
    if (checkBtn) checkBtn.disabled = true;

    if (panel) {
      panel.innerHTML = `
        <div class="py-8 text-center">
          <div class="inline-block w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-3"></div>
          <p class="text-xs font-mono text-gray-300 font-semibold">
            ${isFullCheck ? 'Evaluando contra la suite completa de casos de prueba...' : 'Ejecutando programa en sandbox seguro...'}
          </p>
          <span class="text-[11px] text-gray-500 font-mono block mt-1">Aislamiento de procesos y control de tiempo activo</span>
        </div>
      `;
    }

    try {
      const evaluation = await judgeSubmission(problem, code, isFullCheck);
      this.currentEvaluation = evaluation;

      if (isFullCheck) {
        const updatedRecord = recordProblemEvaluation(problem.id, code, evaluation);
        const pill = document.getElementById('maraton-problem-status-pill');
        if (pill) pill.innerHTML = this.getStatusBadge(updatedRecord.status);
        const counter = document.getElementById('maraton-attempts-counter');
        if (counter) counter.innerText = updatedRecord.intentos;
      }

      this.renderEvaluationResults(panel, evaluation, isFullCheck);
    } catch (e) {
      if (panel) {
        panel.innerHTML = `
          <div class="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs">
            <i class="fas fa-triangle-exclamation mr-1.5"></i> Error al evaluar: ${e.message || e}
          </div>
        `;
      }
    } finally {
      this.isEvaluating = false;
      if (runBtn) runBtn.disabled = false;
      if (checkBtn) checkBtn.disabled = false;
    }
  }

  renderEvaluationResults(panel, evalResult, isFullCheck) {
    if (!panel) return;

    const isAll = evalResult.allPassed;
    const bannerBg = isAll ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' : 'bg-amber-500/15 border-amber-500/40 text-amber-300';
    const bannerIcon = isAll ? 'fa-circle-check text-emerald-400' : 'fa-triangle-exclamation text-amber-400';
    const bannerTitle = isAll ? '🎉 ¡Pruebas Superadas Exitosamente!' : '⚠️ Discrepancia en Casos de Prueba';

    const activeTab = Math.min(this.activeTestCaseTab, evalResult.results.length - 1);
    const currentCase = evalResult.results[activeTab] || evalResult.results[0];

    const html = `
      <div class="space-y-4 animate-fade-in">
        
        <!-- Banner de Estado Global -->
        <div class="p-4 rounded-xl border ${bannerBg} flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <i class="fas ${bannerIcon} text-lg mt-0.5 shrink-0"></i>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider">${bannerTitle}</h4>
              <p class="text-xs mt-1 leading-relaxed text-gray-200">
                ${evalResult.feedback}
              </p>
            </div>
          </div>
          <div class="text-right shrink-0 font-mono text-xs">
            <span class="font-bold ${isAll ? 'text-emerald-400' : 'text-amber-400'}">
              ${evalResult.passedCount} / ${evalResult.totalCount}
            </span>
            <span class="text-[10px] text-gray-400 block">casos pasados</span>
          </div>
        </div>

        <!-- Pestañas de Casos de Prueba Evaluados -->
        <div>
          <div class="flex items-center gap-1.5 border-b border-gray-800 pb-2 overflow-x-auto no-scrollbar">
            ${evalResult.results.map((r, idx) => `
              <button 
                type="button"
                onclick="window.app.maratonUI.switchCaseTab(${idx})"
                class="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition cursor-pointer flex items-center gap-1.5 shrink-0 ${activeTab === idx ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-[#161c28] text-gray-400 hover:text-white border border-transparent'}"
              >
                <span class="w-2 h-2 rounded-full ${r.passed ? 'bg-emerald-400' : 'bg-rose-400'}"></span>
                <span>${r.visible ? `Caso ${idx + 1}` : `Caso Oculto ${idx + 1}`}</span>
              </button>
            `).join('')}
          </div>

          <!-- Detalle del Caso Seleccionado -->
          ${currentCase ? `
            <div class="mt-3 space-y-3">
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-400 font-mono">${currentCase.descripcion}</span>
                <span class="font-mono font-bold ${currentCase.passed ? 'text-emerald-400' : 'text-rose-400'}">
                  ${currentCase.passed ? '✓ Superado (AC)' : (currentCase.status === 'TIMEOUT' ? '⏱ Tiempo Límite Excedido' : '❌ Salida Incorrecta (WA)')}
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span class="text-[10px] text-gray-500 uppercase font-bold block mb-1">Entrada</span>
                  <pre class="bg-[#080b11] p-2.5 rounded border border-gray-800 text-gray-300 min-h-[42px] overflow-x-auto"><code>${currentCase.entrada || '(Sin entrada)'}</code></pre>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 uppercase font-bold block mb-1">Salida Esperada</span>
                  <pre class="bg-[#080b11] p-2.5 rounded border border-gray-800 text-sky-300 min-h-[42px] overflow-x-auto"><code>${currentCase.salida_esperada}</code></pre>
                </div>
              </div>

              <div>
                <span class="text-[10px] text-gray-500 uppercase font-bold block mb-1">Salida Obtenida de tu Código</span>
                <pre class="bg-[#080b11] p-2.5 rounded border border-gray-800 ${currentCase.passed ? 'text-emerald-300' : 'text-rose-300'} overflow-x-auto min-h-[42px]"><code>${currentCase.salida_obtenida || (currentCase.error ? currentCase.error : '(Salida vacía)')}</code></pre>
              </div>

              ${currentCase.error ? `
                <div class="p-3 bg-rose-950/30 border border-rose-500/30 rounded-xl text-rose-300 text-xs font-mono">
                  ${currentCase.error}
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>

      </div>
    `;

    panel.innerHTML = html;
  }

  switchCaseTab(idx) {
    this.activeTestCaseTab = idx;
    const panel = document.getElementById('maraton-judge-results-panel');
    if (panel && this.currentEvaluation) {
      this.renderEvaluationResults(panel, this.currentEvaluation, true);
    }
  }
}
