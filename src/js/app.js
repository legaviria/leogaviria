/**
 * APLICACIÓN PRINCIPAL - LEO GAVIRIA | PROGRAMACIÓN II
 * Orquestador de interfaz, enrutamiento, asignaturas,
 * widgets interactivos en popup y seguimiento de progreso.
 */

import { CURRICULUM, getTopicById, getSurroundingTopics } from './data/curriculum.js';
import { getTopicData } from './data/topics/index.js';
import { getCompletedTopics, isTopicCompleted, toggleTopicCompleted, getThemePreference, setThemePreference } from './utils/storage.js';
import { searchCurriculum } from './utils/search.js';
import { MARATON_PROBLEMS, getProblemById } from './data/maraton/problems.js';
import { getMaratonProgress, setProblemDraft, getProblemDraft, recordEvaluation, getMaratonStats } from './data/maraton/storage.js';
import { runPythonCode, judgeSubmission } from './data/maraton/runner.js';
import { MaratonUI } from './data/maraton/ui.js';


  // =========================================================================
  // HELPER GLOBAL: COPIAR CÓDIGO AL PORTAPAPELES
  // =========================================================================
  window.copyCodeToClipboard = function(btn) {
    if (!btn) return;
    const card = btn.closest('.code-block-card, .code-card-wrapper') || btn.parentElement.parentElement;
    const codeEl = card ? card.querySelector('code, pre') : null;
    const text = codeEl ? (codeEl.innerText || codeEl.textContent).trim() : '';
    if (!text) return;

    const setCopied = () => {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check text-emerald-400"></i><span class="text-emerald-400 font-medium text-[11px] ml-1">¡Copiado!</span>';
      btn.classList.add('border-emerald-500/60');
      if (window.app && typeof window.app.showToast === 'function') {
        window.app.showToast('Código copiado al portapapeles', 'success');
      }
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.classList.remove('border-emerald-500/60');
      }, 2000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(setCopied).catch(() => {
        fallbackCopy(text);
        setCopied();
      });
    } else {
      fallbackCopy(text);
      setCopied();
    }

    function fallbackCopy(str) {
      const ta = document.createElement('textarea');
      ta.value = str;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      ta.style.top = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try { document.execCommand('copy'); } catch(e) {}
      document.body.removeChild(ta);
    }
  };

  class LeoGaviriaApp {
  constructor() {
    this.currentTopicId = null;
    this.activeWeekId = null;
    this.sidebarCollapsed = false;
    this.currentCourse = 'prog';
    this.openWeeks = new Set();
    this.allWeeksExpanded = false;
    this.maratonUI = new MaratonUI(this);

    this.initElements();
    this.initTheme();
    this.initSidebarResizer();
    this.initEvents();
    this.handleInitialRoute();
  }

  initElements() {
    // Contenedores principales
    this.sidebarEl = document.getElementById('sidebar');
    this.sidebarContentEl = document.getElementById('sidebar-content');
    this.sidebarWeeksCountEl = document.getElementById('sidebar-weeks-count');
    this.toggleSidebarWidthBtn = document.getElementById('toggle-sidebar-width-btn');
    this.sidebarResizerEl = document.getElementById('sidebar-resizer');
    this.expandAllWeeksBtn = document.getElementById('expand-all-weeks-btn');
    this.collapseAllWeeksBtn = document.getElementById('collapse-all-weeks-btn');
    this.contentAreaEl = document.getElementById('content-area');
    this.progressFillEl = document.getElementById('progress-fill');
    this.progressTextEl = document.getElementById('progress-percentage');
    this.progressFractionEl = document.getElementById('progress-fraction');
    
    // Búsqueda
    this.sidebarSearchInput = document.getElementById('sidebar-search');
    this.searchModalEl = document.getElementById('search-modal');
    this.searchModalInput = document.getElementById('modal-search-input');
    this.searchResultsEl = document.getElementById('search-results');

    // Modales y botones
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.guideModalEl = document.getElementById('guide-modal');
    this.widgetPopupModalEl = document.getElementById('widget-popup-modal');
  }

  initTheme() {
    const savedTheme = getThemePreference();
    setThemePreference(savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  updateThemeIcon(theme) {
    if (!this.themeToggleBtn) return;
    const icon = this.themeToggleBtn.querySelector('i');
    if (icon) {
      if (theme === 'light') {
          icon.className = 'fas fa-moon text-sm text-sky-500';
          this.themeToggleBtn.title = 'Cambiar a Modo Oscuro';
        } else {
          icon.className = 'fas fa-sun text-sm text-amber-400';
          this.themeToggleBtn.title = 'Cambiar a Modo Claro';
        }
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setThemePreference(next);
    this.updateThemeIcon(next);
  }

  initEvents() {
    // Cambio de tema
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // Hash change para navegación por URL
    window.addEventListener('hashchange', () => {
      this.handleHashChange();
    });

    // Búsqueda en barra lateral
    if (this.sidebarSearchInput) {
      this.sidebarSearchInput.addEventListener('input', (e) => {
        this.renderSidebar(e.target.value);
      });
    }

    // Atajos de teclado (Ctrl+K para búsqueda, Escape para modales)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.openSearchModal();
      }
      if (e.key === 'Escape') {
        this.closeSearchModal();
        this.closeGuideModal();
        this.closeWidgetPopup();
      }
    });

    // Input en modal de búsqueda
    if (this.searchModalInput) {
      this.searchModalInput.addEventListener('input', (e) => {
        this.handleModalSearch(e.target.value);
      });
    }

    // Botones de colapso de sidebar
    const collapseBtn = document.getElementById('collapse-sidebar-btn');
    const expandBtn = document.getElementById('expand-sidebar-btn');
    if (collapseBtn) {
      collapseBtn.addEventListener('click', () => this.toggleSidebar(true));
    }
    if (expandBtn) {
      expandBtn.addEventListener('click', () => this.toggleSidebar(false));
    }

    // Botones de Guía para Docentes
    const guideBtns = document.querySelectorAll('.open-guide-btn');
    guideBtns.forEach(btn => {
      btn.addEventListener('click', () => this.openGuideModal());
    });

    // Ajuste dinámico de altura de iframes al redimensionar ventana
    window.addEventListener('resize', () => {
      document.querySelectorAll('.widget-iframe').forEach(iframe => {
        this.adjustIframeHeight(iframe);
      });
    });
  }

    openMobileSidebar() {
      if (this.sidebarEl) {
        this.sidebarEl.classList.add('mobile-open');
      }
      const backdrop = document.getElementById('sidebar-backdrop');
      if (backdrop) {
        backdrop.classList.remove('hidden');
        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(() => backdrop.classList.add('active'));
        } else {
          backdrop.classList.add('active');
        }
      }
      document.body.classList.add('mobile-menu-open');
    }

    closeMobileSidebar() {
      if (this.sidebarEl) {
        this.sidebarEl.classList.remove('mobile-open');
      }
      const backdrop = document.getElementById('sidebar-backdrop');
      if (backdrop) {
        backdrop.classList.remove('active');
        setTimeout(() => {
          if (!backdrop.classList.contains('active')) {
            backdrop.classList.add('hidden');
          }
        }, 300);
      }
      document.body.classList.remove('mobile-menu-open');
    }

    toggleMobileSidebar() {
      if (!this.sidebarEl) return;
      if (this.sidebarEl.classList.contains('mobile-open')) {
        this.closeMobileSidebar();
      } else {
        this.openMobileSidebar();
      }
    }

  toggleSidebar(collapsed) {
    this.sidebarCollapsed = collapsed;
    const expandBtn = document.getElementById('expand-sidebar-btn');
    
    if (collapsed) {
      this.sidebarEl.classList.add('hidden');
      if (expandBtn) expandBtn.classList.remove('hidden');
    } else {
      this.sidebarEl.classList.remove('hidden');
      if (expandBtn) expandBtn.classList.add('hidden');
    }
  }

  initSidebarResizer() {
    if (!this.sidebarEl) return;

    // Cargar ancho guardado de localStorage o 360px por defecto
    const savedWidth = localStorage.getItem('leogaviria_sidebar_width');
    if (savedWidth) {
      const widthNum = parseInt(savedWidth, 10);
      if (widthNum >= 280 && widthNum <= 750) {
        this.setSidebarWidth(widthNum, false);
      }
    } else if (window.innerWidth >= 1280) {
      this.setSidebarWidth(360, false);
    }

    // Botón para expandir ancho rápidamente
    if (this.toggleSidebarWidthBtn) {
      this.toggleSidebarWidthBtn.addEventListener('click', () => {
        const currentWidth = this.sidebarEl.getBoundingClientRect().width;
        if (currentWidth < 440) {
          this.setSidebarWidth(500, true);
        } else {
          this.setSidebarWidth(360, true);
        }
      });
    }

    // Botón expandir todas las semanas
    if (this.expandAllWeeksBtn) {
      this.expandAllWeeksBtn.addEventListener('click', () => this.expandAllWeeks());
    }

    // Botón colapsar todas las semanas
    if (this.collapseAllWeeksBtn) {
      this.collapseAllWeeksBtn.addEventListener('click', () => this.collapseAllWeeks());
    }

    // Drag para redimensionar con el mouse
    if (this.sidebarResizerEl) {
      let isDragging = false;
      let startX = 0;
      let startWidth = 0;

      this.sidebarResizerEl.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        startX = e.clientX;
        startWidth = this.sidebarEl.getBoundingClientRect().width;
        this.sidebarEl.classList.add('resizing');
        this.sidebarResizerEl.classList.add('is-dragging');
        document.body.classList.add('is-resizing-sidebar');
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        const minW = 280;
        const maxW = Math.min(750, Math.floor(window.innerWidth * 0.7));
        const newWidth = Math.max(minW, Math.min(maxW, startWidth + deltaX));
        this.setSidebarWidth(newWidth, false);
      });

      document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        this.sidebarEl.classList.remove('resizing');
        this.sidebarResizerEl.classList.remove('is-dragging');
        document.body.classList.remove('is-resizing-sidebar');
        const currentWidth = Math.round(this.sidebarEl.getBoundingClientRect().width);
        try {
          localStorage.setItem('leogaviria_sidebar_width', currentWidth);
        } catch (err) {}
      });

      // Doble clic para alternar entre ancho estándar y amplio
      this.sidebarResizerEl.addEventListener('dblclick', () => {
        const currentWidth = this.sidebarEl.getBoundingClientRect().width;
        if (currentWidth < 440) {
          this.setSidebarWidth(500, true);
        } else {
          this.setSidebarWidth(360, true);
        }
      });
    }
  }

  setSidebarWidth(width, save = true) {
    if (!this.sidebarEl) return;
    if (window.innerWidth < 768) return; // En dispositivos móviles ocupa 100%
    this.sidebarEl.style.width = `${width}px`;
    if (this.toggleSidebarWidthBtn) {
      const isWide = width >= 440;
      this.toggleSidebarWidthBtn.title = isWide ? "Restablecer ancho estándar del menú" : "Expandir ancho del menú para lectura amplia";
      this.toggleSidebarWidthBtn.innerHTML = isWide ? '<i class="fas fa-compress-alt text-xs"></i>' : '<i class="fas fa-arrows-left-right text-xs"></i>';
    }
    if (save) {
      try {
        localStorage.setItem('leogaviria_sidebar_width', width);
      } catch (e) {}
    }
  }

  expandAllWeeks() {
    this.allWeeksExpanded = true;
    CURRICULUM.forEach(w => this.openWeeks.add(w.id));
    this.renderSidebar(this.sidebarSearchInput ? this.sidebarSearchInput.value : '');
  }

  collapseAllWeeks() {
    this.allWeeksExpanded = false;
    this.openWeeks.clear();
    if (this.activeWeekId) {
      this.openWeeks.add(this.activeWeekId);
    }
    this.renderSidebar(this.sidebarSearchInput ? this.sidebarSearchInput.value : '');
  }

  handleInitialRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'maraton' || hash.startsWith('maraton?')) {
      const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
      const tema = params.get('tema') || params.get('theme') || '';
      this.showMaraton(tema);
      return;
    }
    if (hash.startsWith('maraton/')) {
      const pNum = hash.split('/')[1];
      this.loadMaratonProblem(pNum);
      return;
    }

    if (hash && hash !== 'materias' && hash !== 'inicio' && getTopicById(hash)) {
      this.loadTopic(hash);
    } else {
      this.showCoursesHome();
    }
  }

  handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('sec-')) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    if (hash === 'maraton' || hash.startsWith('maraton?')) {
      const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
      const tema = params.get('tema') || params.get('theme') || '';
      this.showMaraton(tema);
      return;
    }
    if (hash.startsWith('maraton/')) {
      const pNum = hash.split('/')[1];
      this.loadMaratonProblem(pNum);
      return;
    }
    if (hash === '' || hash === 'materias' || hash === 'inicio') {
      this.showCoursesHome();
    } else if (hash && hash !== this.currentTopicId) {
      if (getTopicById(hash)) {
        this.loadTopic(hash);
      } else {
        this.showCoursesHome();
      }
    }
  }

  /**
   * Cambiar entre asignaturas del menú superior
   */
  switchCourse(courseId) {
    if (courseId === 'prog' || courseId === 'prog1' || courseId === 'prog2') {
      this.currentCourse = 'prog';
      const label = document.getElementById('current-course-label');
      if (label) label.textContent = 'Programación';
      this.showToast('✅ Asignatura activa: Programación (14 Unidades)', 'success');
      this.loadTopic('prog-conceptos-basicos');
    } else if (courseId === 'tics') {
      this.currentCourse = 'tics';
      const label = document.getElementById('current-course-label');
      if (label) label.textContent = 'Introducción a las TICS';
      this.showToast('✅ Asignatura activa: Introducción a las TICS (5 Unidades • 27 Temas)', 'success');
      this.loadTopic('tics-u01-t01-invencion-base');
    }
  }

  /**
   * Carga un tema y actualiza toda la interfaz
   */
  loadTopic(topicId) {
    if (window.innerWidth < 768 && typeof this.closeMobileSidebar === 'function') {
      this.closeMobileSidebar();
    }
    const topicData = getTopicData(topicId);
    if (!topicData) return;

    this.currentTopicId = topicId;
    window.location.hash = topicId;

    // Actualizar semana activa
    const meta = getTopicById(topicId);
    if (meta) {
      this.activeWeekId = meta.weekId;
      this.openWeeks.add(meta.weekId);
    }

    // Renderizar
    this.renderSidebar();
    this.renderTopicContent(topicData);
    this.updateOverallProgress();

    // Resetear scroll siempre al inicio del nuevo tema en el contenedor principal
    if (this.contentAreaEl) {
      this.contentAreaEl.scrollTop = 0;
      try {
        this.contentAreaEl.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch (e) {
        this.contentAreaEl.scrollTop = 0;
      }
    }
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    if (typeof document !== 'undefined') {
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    }
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => {
        if (this.contentAreaEl) this.contentAreaEl.scrollTop = 0;
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
      });
    }
  }

  /**
   * Renderiza la barra lateral con las 16 semanas
   */
  renderSidebar(filterQuery = '') {
    if (!this.sidebarContentEl) return;

    const completedTopics = getCompletedTopics();
    const query = filterQuery.toLowerCase().trim();

    if (this.sidebarWeeksCountEl) {
      this.sidebarWeeksCountEl.textContent = `${CURRICULUM.length} Unidades`;
    }

    let html = '';

    // Tarjeta de acceso a Maratón: Solución de Problemas
    if (typeof getMaratonStats === 'function' && typeof MARATON_PROBLEMS !== 'undefined') {
      const mStats = getMaratonStats(MARATON_PROBLEMS);
      html += `
        <div class="mb-3 px-1">
          <button 
            type="button" 
            onclick="window.app.showMaraton()"
            class="w-full text-left p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-[#131d27] to-[#0e1622] border border-emerald-500/30 hover:border-emerald-500/60 transition group cursor-pointer shadow-md flex items-center justify-between gap-2"
            title="Acceder a Maratón: Solución de problemas"
          >
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs shrink-0 group-hover:scale-105 transition">
                <i class="fas fa-person-running"></i>
              </div>
              <div class="truncate">
                <span class="text-xs font-bold text-white group-hover:text-emerald-300 transition block leading-tight truncate">
                  🏃 Maratón: Problemas
                </span>
                <span class="text-[10px] text-gray-400 font-mono block">
                  ${mStats.resueltos} de ${mStats.total} resueltos
                </span>
              </div>
            </div>
            <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              ${mStats.porcentaje}%
            </span>
          </button>
        </div>
      `;
    }

    CURRICULUM.forEach((week) => {
      // Filtrar temas
      const filteredTopics = week.topics.filter(t => {
        if (!query) return true;
        return t.title.toLowerCase().includes(query) || week.title.toLowerCase().includes(query);
      });

      if (query && filteredTopics.length === 0) return;

      const isWeekActive = this.activeWeekId === week.id;
      const isWeekOpen = this.allWeeksExpanded || this.openWeeks.has(week.id) || (isWeekActive && !this.allWeeksExpanded) || Boolean(query);
      const completedCount = week.topics.filter(t => completedTopics.includes(t.id)).length;
      const totalInWeek = week.topics.length;
      const isWeekComplete = completedCount === totalInWeek;

      html += `
        <div class="week-group mb-1.5" data-week-id="${week.id}">
          <!-- Encabezado de Unidad (Accordion) -->
          <button 
            type="button"
            onclick="window.app.toggleWeekAccordion('${week.id}')"
            title="${week.title}"
            class="w-full flex items-start justify-between px-3 py-2 rounded-lg text-xs font-semibold text-gray-300 hover:bg-[#161c28] hover:text-white transition group text-left ${isWeekActive ? 'bg-[#151b27] text-white' : ''}"
          >
            <div class="flex items-start gap-2.5 min-w-0 flex-1 py-0.5">
              <span class="w-6 h-6 rounded-md bg-[#1e2638] text-gray-400 group-hover:text-emerald-400 flex items-center justify-center text-xs shrink-0 transition mt-0.5">
                <i class="fas ${week.icon} text-[11px]"></i>
              </span>
              <span class="font-medium text-xs text-gray-200 group-hover:text-white leading-snug break-words" title="${week.title}">
                ${week.title}
              </span>
            </div>
            <div class="flex items-center gap-2 shrink-0 ml-2 mt-1 self-start">
              <span class="text-[10px] tabular-nums font-mono px-1.5 py-0.5 rounded-full ${isWeekComplete ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'bg-gray-800 text-gray-400'}">
                ${completedCount}/${totalInWeek}
              </span>
              <i class="fas fa-chevron-down text-[10px] text-gray-500 transition-transform duration-200 week-arrow-${week.id} ${isWeekOpen ? 'rotate-180' : ''}"></i>
            </div>
          </button>

          <!-- Lista de Temas de la Unidad -->
          <div id="week-topics-${week.id}" class="space-y-0.5 mt-1 pl-3 border-l border-gray-800 ml-5 ${isWeekOpen ? 'block' : 'hidden'}">
            ${filteredTopics.map(topic => {
              const isActive = topic.id === this.currentTopicId;
              const isCompleted = completedTopics.includes(topic.id);

              return `
                <a 
                  href="#${topic.id}"
                  title="${topic.title}"
                  class="flex items-start justify-between gap-2 px-2.5 py-2 rounded-md text-xs transition group relative ${isActive ? 'topic-active' : 'text-gray-400 hover:text-gray-200 hover:bg-[#141923]'}"
                >
                  <div class="flex items-start gap-2 min-w-0 flex-1">
                    <span 
                      onclick="event.preventDefault(); window.app.toggleCompletion('${topic.id}')"
                      class="cursor-pointer text-[12px] pt-0.5 transition shrink-0 ${isCompleted ? 'text-emerald-400' : 'text-gray-600 group-hover:text-gray-400'}"
                      title="${isCompleted ? 'Completado (clic para desmarcar)' : 'Marcar como completado'}"
                    >
                      <i class="${isCompleted ? 'fas fa-circle-check' : 'far fa-circle'}"></i>
                    </span>
                    <span class="leading-snug break-words text-gray-300 group-hover:text-white">${topic.title}</span>
                  </div>

                  <div class="flex items-center gap-1.5 shrink-0 pt-0.5 ml-1">
                    ${topic.hasAnimation ? '<span class="text-[9px] px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap" title="Contiene Animación Interactiva">▶ Anim</span>' : ''}
                    <span class="text-[10px] text-gray-500 tabular-nums whitespace-nowrap">${topic.duration}</span>
                  </div>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    this.sidebarContentEl.innerHTML = html;
  }

  toggleWeekAccordion(weekId) {
    const container = document.getElementById(`week-topics-${weekId}`);
    const arrow = document.querySelector(`.week-arrow-${weekId}`);
    if (container) {
      const isHidden = container.classList.contains('hidden');
      if (isHidden) {
        container.classList.remove('hidden');
        if (arrow) arrow.classList.add('rotate-180');
        this.openWeeks.add(weekId);
      } else {
        container.classList.add('hidden');
        if (arrow) arrow.classList.remove('rotate-180');
        this.openWeeks.delete(weekId);
      }
    }
  }

  /**
   * Renderiza el contenido completo de la lección seleccionada
   */
  renderTopicContent(topic) {
    if (!this.contentAreaEl) return;

    const isCompleted = isTopicCompleted(topic.id);
    const { prev, next } = getSurroundingTopics(topic.id);

    const html = `
      <div class="w-full max-w-6xl xl:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-fade-in">
        
        <!-- Migas de Pan (Breadcrumbs) -->
        <nav class="flex items-center gap-2 text-xs text-gray-400 mb-4 flex-wrap">
          <span class="text-gray-500 font-medium">Leo Gaviria</span>
          <span class="text-gray-600">/</span>
          <a href="#bubble-sort" class="hover:text-emerald-400 transition font-medium text-gray-300">Programación II</a>
          <span class="text-gray-600">/</span>
          <span class="hover:text-gray-300 transition text-gray-400">${topic.weekTitle}</span>
          <span class="text-gray-600">/</span>
          <span class="text-emerald-400 font-medium">${topic.title}</span>
        </nav>

        <!-- Cabecera del Tema (Header) -->
        <header class="topic-header border-b border-gray-800/80 pb-6 mb-10 sm:mb-12 md:mb-16 mt-6 sm:mt-8 md:mt-10">
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div class="flex-1">
              <h1 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                ${topic.title}
              </h1>
              <p class="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
                ${topic.subtitle}
              </p>
            </div>

            <!-- Botón de Estado de Finalización -->
            <button 
              id="completion-toggle-btn"
              type="button"
              onclick="window.app.toggleCompletion('${topic.id}')"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition border ${isCompleted ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300' : 'bg-[#151b27] border-gray-700 text-gray-300 hover:border-emerald-500/40 hover:text-white'} shrink-0 shadow-sm"
            >
              <i class="${isCompleted ? 'fas fa-check-circle text-emerald-400' : 'far fa-circle text-gray-400'} text-sm"></i>
              <span>${isCompleted ? 'Completado' : 'Marcar como Completado'}</span>
            </button>
          </div>

          <!-- Insignias de Metadatos (Badges) -->
          <div class="flex flex-wrap items-center gap-2 mt-4">
            ${topic.badges.map(b => `
              <span class="px-2.5 py-1 rounded-md text-xs font-medium ${this.getBadgeClass(b.type)}">
                ${b.text}
              </span>
            `).join('')}
            <span class="text-xs text-gray-500 flex items-center gap-1 ml-2 font-mono">
              <i class="far fa-clock"></i> ${topic.timeEstimate}
            </span>
          </div>

                      <!-- Píldoras de Accesos Directos a Secciones -->
            <div class="flex items-center gap-2 overflow-x-auto py-3 mt-6 border-t border-gray-800/60 no-scrollbar">
              ${topic.sections.map((s) => {
                const navTitleMap = {
                  // Unidad 01: Fundamentos
                  'que-es-algoritmo': '¿Qué es un algoritmo?',
                  'que-es-programacion': 'Programación y lenguajes',
                  'tipos-lenguajes': 'Tipos de lenguajes',
                  'resolucion-problemas': 'Ciclo de resolución',
                  'modelo-ipo-calculadora': 'Modelo Entrada–Proceso–Salida',
                  'pseudocodigo': 'Pseudocódigo y control',
                  'ejemplo-pseudocodigo': 'Ejemplo práctico',
                  'diagramas-flujo': 'Diagramas de flujo',
                  'simulacion-diagrama-flujo': 'Simulación de flujo',
                  'problemas-resueltos': 'Problemas resueltos',
                  'comparativa-representaciones': 'Cuándo usar cada uno',
                  'expresiones-ast': 'Expresiones y árboles AST',
                  'notaciones-aritmeticas': 'Notaciones aritméticas',
                  'convenciones-nomenclatura': 'Buenas prácticas de código',
                  // Unidad 09: Complejidad
                  'tabla-ordenes': 'Jerarquía de órdenes',
                  'metodologia-calculo': 'Cálculo de complejidad',
                  'escenarios-complejidad': 'Escenarios (Ω, Θ, O)',
                  'algoritmos-recursivos-fibonacci': 'Recursión y optimización',
                  // Estructura canónica y ordenamiento
                  'en-que-consiste': '¿En qué consiste?',
                  'como-funciona': '¿Cómo funciona?',
                  'ejemplo-paso-a-paso': 'Ejemplo',
                  'codigo-y-animacion': 'Código',
                  'codigo-implementacion': 'Código',
                  'analisis-complejidad': 'Complejidad',
                  'cuando-usar': 'Cuándo usar'
                };
                const pillTitle = s.shortTitle || navTitleMap[s.id] || s.title.replace(/^\d+\.\s*/, '').replace(/^[^\w¿¡]+/, '').trim();
                return `
                  <a 
                    href="#sec-${s.id}" 
                    onclick="window.app.scrollToSection('sec-${s.id}', event)" 
                    class="nav-pill text-xs px-3.5 py-2 rounded-lg text-gray-300 bg-[#121622] border border-gray-800 hover:border-emerald-500/40 hover:text-white whitespace-nowrap transition flex items-center gap-2 font-medium"
                  >
                    <i class="fas ${s.icon} text-emerald-400 text-xs"></i>
                    <span>${pillTitle}</span>
                  </a>
                `;
              }).join('')}
              ${topic.comprueba ? `
                <span class="h-4 w-px bg-gray-700/80 mx-1 shrink-0"></span>
                <a 
                  href="#sec-comprueba" 
                  onclick="window.app.scrollToSection('sec-comprueba', event)" 
                  class="nav-pill text-xs px-3.5 py-2 rounded-lg text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 hover:text-white whitespace-nowrap transition flex items-center gap-2 font-bold shadow-sm"
                >
                  <i class="fas fa-clipboard-check text-emerald-400 text-xs"></i>
                  <span>Comprueba</span>
                </a>
              ` : ''}
            </div>
          </header>

          <!-- Secciones de Contenido Principal -->
          <main class="space-y-12">
            ${topic.sections.map(sec => `
              <section id="sec-${sec.id}" class="scroll-mt-20">
                <div class="flex items-center gap-2.5 border-b border-gray-800 pb-3 mb-4">
                  <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs">
                    <i class="fas ${sec.icon}"></i>
                  </span>
                  <h2 class="text-lg md:text-xl font-bold text-white tracking-tight">
                    ${sec.title}
                  </h2>
                </div>

                <!-- HTML del Contenido -->
                <div class="prose prose-invert max-w-none text-gray-300">
                  ${sec.contentHtml}
                </div>

                <!-- Elementos Interactivos Integrados: Explora y Practica (Sin numeración) -->
                ${this.renderSectionInteractive(sec)}

                <!-- Widget legacy si existiera -->
                ${sec.widget ? this.renderWidgetContainer(sec.widget, sec.id) : ''}
              </section>
            `).join('')}

            <!-- Bloque Final de Evaluación: Comprueba (Sin numeración) -->
            ${topic.comprueba ? this.renderCompruebaSection(topic.comprueba) : ''}

            <!-- Bloques complementarios legacy si existieran -->
            ${(topic.complementary && topic.complementary.length > 0) ? this.renderComplementarySection(topic.complementary) : ''}

            <!-- Llamado pedagógico a Maratón -->
            ${this.renderMaratonCallout(topic)}
          </main>


        <!-- Barra Inferior de Navegación entre Temas -->
        <footer class="border-t border-gray-800 mt-16 pt-6 pb-12 flex items-center justify-between gap-4">
          ${prev ? `
            <a 
                href="#${prev.id}"
                onclick="window.app.loadTopic('${prev.id}'); if (event) event.preventDefault();"
                class="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#141923] border border-gray-800 hover:border-gray-700 hover:bg-[#19202e] transition text-left group flex-1 max-w-xs"
            >
              <i class="fas fa-arrow-left text-gray-500 group-hover:text-emerald-400 transition"></i>
              <div class="min-w-0">
                <span class="text-[10px] uppercase font-mono text-gray-500 block">Tema Anterior</span>
                <span class="text-xs font-semibold text-gray-300 group-hover:text-white truncate block">${prev.title}</span>
              </div>
            </a>
          ` : '<div class="flex-1"></div>'}

          ${next ? `
            <a 
                href="#${next.id}"
                onclick="window.app.loadTopic('${next.id}'); if (event) event.preventDefault();"
                class="flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-[#141923] border border-gray-800 hover:border-gray-700 hover:bg-[#19202e] transition text-right group flex-1 max-w-xs"
            >
              <div class="min-w-0">
                <span class="text-[10px] uppercase font-mono text-gray-500 block">Siguiente Tema</span>
                <span class="text-xs font-semibold text-gray-300 group-hover:text-white truncate block">${next.title}</span>
              </div>
              <i class="fas fa-arrow-right text-gray-500 group-hover:text-emerald-400 transition"></i>
            </a>
          ` : '<div class="flex-1"></div>'}
        </footer>

      </div>
    `;

    this.contentAreaEl.innerHTML = html;
  }

  /**
   * Renderiza el contenedor del widget con botón para abrir en Popup Pantalla Completa
   */
  scrollToSection(sectionId, event) {
    if (event) {
      event.preventDefault();
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try {
        history.pushState(null, '', '#' + sectionId);
      } catch (e) {}
    }
  }

  renderWidgetContainer(widget, sectionId, category = '') {
    const escapedTitle = (widget.title || 'Animación').replace(/'/g, "\\'");
    let dotClass = 'bg-emerald-500';
    if (category === 'explora') dotClass = 'bg-purple-400';
    else if (category === 'practica') dotClass = 'bg-amber-400';
    else if (category === 'comprueba') dotClass = 'bg-emerald-400';

    return `
      <div class="widget-frame-container mt-6">
        <!-- Barra superior del Widget -->
        <div class="bg-[#121622] border-b border-gray-800 px-4 py-2.5 flex items-center justify-between text-xs text-gray-400">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${dotClass} animate-pulse"></span>
            <span class="font-medium text-gray-300">${widget.title || 'Componente Interactivo'}</span>
          </div>
          <div class="flex items-center gap-2">
            <!-- Botón Maximizar en Popup estilo Modal Pantalla Completa (Solo Icono) -->
            <button 
              type="button"
              onclick="window.app.openWidgetPopup('${widget.file}', '${escapedTitle}')"
              class="w-8 h-8 rounded-lg bg-[#1e2638] hover:bg-emerald-600 text-gray-300 hover:text-white transition flex items-center justify-center border border-gray-700" 
              title="Pantalla Completa"
            >
              <i class="fas fa-expand text-xs"></i>
            </button>
            <a 
              href="${widget.file}" 
              target="_blank" 
              class="w-8 h-8 rounded-lg bg-[#1e2638] hover:bg-gray-700 text-gray-400 hover:text-white transition flex items-center justify-center border border-gray-700 text-xs" 
              title="Abrir en pestaña independiente"
            >
              <i class="fas fa-external-link-alt text-xs"></i>
            </a>
          </div>
        </div>

        <!-- iframe que ejecuta el widget extraído con aislamiento completo -->
        <iframe 
          src="${widget.file}" 
          class="widget-iframe" 
          style="height: ${widget.height || '650px'};" 
          title="${widget.title}" 
          loading="lazy"
          onload="window.app && window.app.adjustIframeHeight && window.app.adjustIframeHeight(this)"
        ></iframe>
      </div>
    `;
  }

  /**
   * Renderiza los bloques complementarios de la lección (Explora, Practica, Comprueba) sin numeración.
   */

  /**
   * Renderiza los elementos interactivos contextualizados dentro de cada seccion (Explora y Practica).
   */
  renderSectionInteractive(sec) {
    if (!sec.interactive || !Array.isArray(sec.interactive) || sec.interactive.length === 0) {
      return '';
    }

    const catMeta = {
      explora: {
        label: 'Explora',
        badge: 'Simulación / Visualización',
        icon: 'fa-compass',
        borderClass: 'border-purple-500/30',
        bgGradient: 'from-[#141226]/80 via-[#111422]/60 to-[#0e131d]',
        headerBadgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
        iconBg: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
        indicatorColor: 'bg-purple-400'
      },
      practica: {
        label: 'Practica',
        badge: 'Actividad / Ejercicio',
        icon: 'fa-pencil-alt',
        borderClass: 'border-amber-500/30',
        bgGradient: 'from-[#221810]/80 via-[#181615]/60 to-[#0e131d]',
        headerBadgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        iconBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
        indicatorColor: 'bg-amber-400'
      }
    };

    return `
      <div class="mt-6 space-y-6">
        ${sec.interactive.map((item, idx) => {
          const meta = catMeta[item.category] || catMeta.explora;
          return `
            <div class="bg-gradient-to-b ${meta.bgGradient} border ${meta.borderClass} rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
              <div class="flex items-start justify-between gap-3 mb-3">
                <div class="flex items-center gap-2.5 flex-wrap">
                  <div class="w-8 h-8 rounded-lg ${meta.iconBg} border flex items-center justify-center text-sm shrink-0">
                    <i class="fas ${meta.icon}"></i>
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${meta.headerBadgeBg}">
                        ${meta.label}
                      </span>
                      <h4 class="text-sm md:text-base font-bold text-white">
                        ${item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              ${item.description ? `
                <p class="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed pl-10">
                  ${item.description}
                </p>
              ` : ''}

              ${item.contentHtml ? `
                <div class="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 pl-10">
                  ${item.contentHtml}
                </div>
              ` : ''}

              ${item.widget ? this.renderWidgetContainer(item.widget, `${sec.id}-${item.category}-${idx}`, item.category) : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  /**
   * Renderiza el bloque global de evaluacion al final de la leccion (Comprueba).
   */
  renderCompruebaSection(comprueba) {
    if (!comprueba) return '';

    return `
      <section id="sec-comprueba" class="scroll-mt-20 mt-14 pt-8 border-t-2 border-dashed border-gray-800/80">
        <div class="bg-gradient-to-b from-[#0e1f18]/80 via-[#10191c]/60 to-[#0e131d] border border-emerald-500/30 rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
          <div class="flex items-start justify-between gap-4 pb-4 border-b border-gray-800/80 mb-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-base shadow-sm shrink-0">
                <i class="fas fa-clipboard-check"></i>
              </div>
              <div>
                <div class="flex items-center gap-2.5 flex-wrap">
                  <h3 class="text-lg md:text-xl font-black text-white tracking-tight">
                    Comprueba
                  </h3>
                  <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border bg-emerald-500/15 text-emerald-300 border-emerald-500/30">
                    Quiz y Evaluación
                  </span>
                </div>
                <h4 class="text-sm font-bold text-emerald-200 mt-1">
                  ${comprueba.title}
                </h4>
                ${comprueba.description ? `
                  <p class="text-xs text-gray-400 mt-0.5 leading-relaxed">
                    ${comprueba.description}
                  </p>
                ` : ''}
              </div>
            </div>
          </div>

          ${comprueba.widget ? this.renderWidgetContainer(comprueba.widget, 'comprueba-quiz', 'comprueba') : ''}
        </div>
      </section>
    `;
  }

  renderComplementarySection(complementary) {
    if (!complementary || !Array.isArray(complementary) || complementary.length === 0) {
      return '';
    }

    const catMeta = {
      explora: {
        label: 'Explora',
        badge: 'Animaciones y Simuladores',
        icon: 'fa-compass',
        borderClass: 'border-purple-500/30',
        bgGradient: 'from-[#141226]/80 via-[#111422]/60 to-[#0e131d]',
        headerBadgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
        iconBg: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
        indicatorColor: 'bg-purple-400',
        description: 'Animaciones, simulaciones y visualizadores interactivos para explorar y comprender a fondo los conceptos.'
      },
      practica: {
        label: 'Practica',
        badge: 'Ejercicios y Actividades',
        icon: 'fa-pencil-alt',
        borderClass: 'border-amber-500/30',
        bgGradient: 'from-[#221810]/80 via-[#181615]/60 to-[#0e131d]',
        headerBadgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        iconBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
        indicatorColor: 'bg-amber-400',
        description: 'Actividades y retos de aplicación práctica diseñados para consolidar tus habilidades algorítmicas.'
      },
      comprueba: {
        label: 'Comprueba',
        badge: 'Quiz y Evaluación',
        icon: 'fa-clipboard-check',
        borderClass: 'border-emerald-500/30',
        bgGradient: 'from-[#0e1f18]/80 via-[#10191c]/60 to-[#0e131d]',
        headerBadgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        iconBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        indicatorColor: 'bg-emerald-400',
        description: 'Evaluaciones formativas y cuestionarios interactivos para verificar tu dominio del tema.'
      }
    };

    return `
      <div class="mt-14 pt-8 border-t-2 border-dashed border-gray-800/80 space-y-10">
        <div class="flex items-center gap-3">
          <div class="w-2.5 h-7 rounded-full bg-gradient-to-b from-purple-500 via-amber-500 to-emerald-500"></div>
          <div>
            <h2 class="text-xl md:text-2xl font-black text-white tracking-tight">
              Recursos Complementarios
            </h2>
            <p class="text-xs text-gray-400">
              Actividades interactivas, práctica guiada y comprobación de aprendizaje sin numeración.
            </p>
          </div>
        </div>

        ${complementary.map(block => {
          const meta = catMeta[block.category] || {
            label: block.title || 'Complementario',
            badge: 'Recursos',
            icon: 'fa-layer-group',
            borderClass: 'border-gray-700',
            bgGradient: 'from-[#121622] to-[#0e131d]',
            headerBadgeBg: 'bg-gray-800 text-gray-300 border-gray-700',
            iconBg: 'bg-gray-800 text-gray-400 border-gray-700',
            indicatorColor: 'bg-gray-400',
            description: block.description || ''
          };

          return `
            <section id="sec-${block.category}" class="scroll-mt-20 bg-gradient-to-b ${meta.bgGradient} border ${meta.borderClass} rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
              
              <!-- Encabezado de la Categoría Complementaria (Sin numeración) -->
              <div class="flex items-start justify-between gap-4 pb-5 border-b border-gray-800/80 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl ${meta.iconBg} border flex items-center justify-center text-base shadow-sm shrink-0">
                    <i class="fas ${meta.icon}"></i>
                  </div>
                  <div>
                    <div class="flex items-center gap-2.5 flex-wrap">
                      <h3 class="text-lg md:text-xl font-black text-white tracking-tight">
                        ${meta.label}
                      </h3>
                      <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${meta.headerBadgeBg}">
                        ${meta.badge}
                      </span>
                    </div>
                    <p class="text-xs text-gray-400 mt-0.5 leading-relaxed">
                      ${block.description || meta.description}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Lista de Recursos de la Categoría -->
              <div class="space-y-8">
                ${(block.items || []).map((item, idx) => `
                  <div class="${idx > 0 ? 'pt-8 border-t border-gray-800/60' : ''} space-y-3">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <h4 class="text-sm md:text-base font-bold text-white flex items-center gap-2">
                          <span class="w-1.5 h-3.5 rounded-full ${meta.indicatorColor}"></span>
                          <span>${item.title}</span>
                        </h4>
                        ${item.description ? `
                          <p class="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                            ${item.description}
                          </p>
                        ` : ''}
                      </div>
                    </div>

                    ${item.contentHtml ? `
                      <div class="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed">
                        ${item.contentHtml}
                      </div>
                    ` : ''}

                    ${item.widget ? this.renderWidgetContainer(item.widget, item.id || `${block.category}-${idx}`, block.category) : ''}
                  </div>
                `).join('')}
              </div>

            </section>
          `;
        }).join('')}
      </div>
    `;
  }

  /**
   * Abre la animación en un modal emergente (popup) que ocupa toda la pantalla
   */
  openWidgetPopup(fileUrl, title) {
    const modal = document.getElementById('widget-popup-modal');
    const titleEl = document.getElementById('popup-widget-title');
    const iframe = document.getElementById('popup-widget-iframe');
    const extLink = document.getElementById('popup-external-link');
    if (!modal || !iframe) return;

    if (titleEl) titleEl.textContent = title || 'Animación Interactiva';
    if (extLink) extLink.href = fileUrl;
    iframe.src = fileUrl;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Cierra el popup de animación
   */
  closeWidgetPopup() {
    const modal = document.getElementById('widget-popup-modal');
    const iframe = document.getElementById('popup-widget-iframe');
    if (!modal) return;

    modal.classList.add('hidden');
    if (iframe) iframe.src = '';
    document.body.style.overflow = '';
  }

  adjustIframeHeight(iframe) {
    if (!iframe) return;
    try {
      if (iframe.contentDocument && iframe.contentDocument.body) {
        const doc = iframe.contentDocument;
        const scrollH = Math.max(
          doc.body.scrollHeight || 0,
          doc.documentElement.scrollHeight || 0,
          doc.body.offsetHeight || 0
        );
        if (scrollH > 100) {
          iframe.style.height = `${scrollH + 10}px`;
        }
      }
    } catch (e) {
      // Fallback a altura inline configurada
    }
  }

  getBadgeClass(type) {
    switch (type) {
      case 'easy': return 'badge-easy';
      case 'medium': return 'badge-medium';
      case 'hard': return 'badge-hard';
      case 'teal':
      case 'emerald': return 'badge-teal';
      case 'purple': return 'badge-purple';
      case 'sky':
      case 'blue': return 'badge-sky';
      case 'amber':
      case 'yellow': return 'badge-amber';
      case 'rose':
      case 'red': return 'badge-rose';
      case 'neutral':
      default: return 'badge-neutral';
    }
  }

  /**
   * Actualiza el progreso global del curso (calculado sobre el total de temas)
   */
  updateOverallProgress() {
    let totalTopics = 0;
    CURRICULUM.forEach(w => totalTopics += w.topics.length);

    const completed = getCompletedTopics();
    const count = completed.length;
    const percentage = totalTopics > 0 ? Math.round((count / totalTopics) * 100) : 0;

    if (this.progressFillEl) {
      this.progressFillEl.style.width = `${percentage}%`;
    }
    if (this.progressTextEl) {
      this.progressTextEl.textContent = `${percentage}%`;
    }
    if (this.progressFractionEl) {
      this.progressFractionEl.textContent = `${count}/${totalTopics}`;
    }

    const streakEl = document.getElementById('streak-count');
    if (streakEl) {
      streakEl.textContent = count;
    }
  }

  toggleCompletion(topicId) {
    const { isNowCompleted } = toggleTopicCompleted(topicId);
    this.updateOverallProgress();
    this.renderSidebar();

    // Actualizar botón si el tema actual está en pantalla
    if (topicId === this.currentTopicId) {
      const btn = document.getElementById('completion-toggle-btn');
      if (btn) {
        btn.className = `inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition border ${isNowCompleted ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300' : 'bg-[#151b27] border-gray-700 text-gray-300 hover:border-emerald-500/40 hover:text-white'} shrink-0 shadow-sm`;
        btn.innerHTML = `
          <i class="${isNowCompleted ? 'fas fa-check-circle text-emerald-400' : 'far fa-circle text-gray-400'} text-sm"></i>
          <span>${isNowCompleted ? 'Completado' : 'Marcar como Completado'}</span>
        `;
      }
    }
  }

  // Notificaciones flotantes (Toasts)
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `pointer-events-auto px-4 py-3 rounded-xl text-xs font-medium shadow-2xl border flex items-center gap-2.5 transition-all duration-300 animate-fade-in ${
      type === 'success' ? 'bg-[#102419] border-emerald-500/50 text-emerald-200' : 'bg-[#151b27] border-gray-700 text-gray-200'
    }`;
    toast.innerHTML = `
      <i class="${type === 'success' ? 'fas fa-check-circle text-emerald-400' : 'fas fa-info-circle text-sky-400'} text-sm"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Modal de Búsqueda
  openSearchModal() {
    if (!this.searchModalEl) return;
    this.searchModalEl.classList.remove('hidden');
    if (this.searchModalInput) {
      this.searchModalInput.value = '';
      this.searchModalInput.focus();
      this.handleModalSearch('');
    }
  }

  closeSearchModal() {
    if (!this.searchModalEl) return;
    this.searchModalEl.classList.add('hidden');
  }

  handleModalSearch(query) {
    if (!this.searchResultsEl) return;

    if (!query || query.trim() === '') {
      this.searchResultsEl.innerHTML = `
        <div class="py-8 text-center text-xs text-gray-500 font-mono">
          Escribe el nombre de un algoritmo o tema (ej. "bubble", "ordenamiento", "árbol")...
        </div>
      `;
      return;
    }

    const results = searchCurriculum(query);
    if (results.length === 0) {
      this.searchResultsEl.innerHTML = `
        <div class="py-8 text-center text-xs text-gray-500">
          No se encontraron temas coincidentes con "<span class="text-gray-300">${query}</span>"
        </div>
      `;
      return;
    }

    this.searchResultsEl.innerHTML = results.map(r => `
      <a 
        href="#${r.topicId}"
        onclick="window.app.closeSearchModal()"
        class="flex items-center justify-between p-3 rounded-xl hover:bg-[#19202e] border border-transparent hover:border-gray-700 transition group"
      >
        <div class="min-w-0 flex-1">
          <span class="text-xs text-emerald-400 font-mono block">${r.weekTitle}</span>
          <span class="text-sm font-semibold text-white group-hover:text-emerald-300 transition block leading-snug break-words">${r.topicTitle}</span>
        </div>
        <div class="flex items-center gap-2 shrink-0 ml-3">
          ${r.hasAnimation ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Animación</span>' : ''}
          <span class="text-xs text-gray-500 font-mono">${r.duration}</span>
        </div>
      </a>
    `).join('');
  }

  // Modal de Guía Docente
  openGuideModal() {
    if (!this.guideModalEl) return;
    this.guideModalEl.classList.remove('hidden');
  }

  closeGuideModal() {
    if (!this.guideModalEl) return;
    this.guideModalEl.classList.add('hidden');
  }

  // Modal de Bienvenida con Animación de Código
  showWelcomeCodingModal() {
    const modal = document.getElementById('welcome-coding-modal');
    const container = document.getElementById('coding-typewriter');
    if (!modal || !container) return;

    modal.classList.remove('hidden');
    if (this.codingTypewriterTimeout) {
      clearTimeout(this.codingTypewriterTimeout);
      this.codingTypewriterTimeout = null;
    }
    container.innerHTML = '';

    const lines = [
      '<span class="text-gray-500"># ================================================================</span>',
      '<span class="text-emerald-400 font-bold"># PLATAFORMA EDUCATIVA INTERACTIVA &bull; PROF. LEO GAVIRIA</span>',
      '<span class="text-gray-500"># Asignaturas: Programación I, Programación II, Introducción a las TICS</span>',
      '<span class="text-gray-500"># ================================================================</span>',
      '',
      '<span class="text-pink-400 font-bold">class</span> <span class="text-emerald-400 font-bold">Profesor</span>:',
      '    <span class="text-sky-400 font-bold">def</span> <span class="text-yellow-300 font-semibold">__init__</span>(<span class="text-orange-300">self</span>):',
      '        <span class="text-orange-300">self</span>.nombre = <span class="text-emerald-300">"Leo Gaviria"</span>',
      '        <span class="text-orange-300">self</span>.rol = <span class="text-emerald-300">"Profesor Universitario"</span>',
      '        <span class="text-orange-300">self</span>.cursos = [<span class="text-emerald-300">"Programación I"</span>, <span class="text-emerald-300">"Programación II"</span>, <span class="text-emerald-300">"Introducción a las TICS"</span>]',
      '',
      '    <span class="text-sky-400 font-bold">def</span> <span class="text-yellow-300 font-semibold">dar_bienvenida</span>(<span class="text-orange-300">self</span>):',
      '        <span class="text-purple-400 font-bold">return</span> <span class="text-emerald-300">"&iexcl;Bienvenido a la clase! Prep&aacute;rate para dominar las estructuras de datos y algoritmos."</span>',
      '',
      '<span class="text-gray-500"># Inicializando entorno y ejecutando mensaje...</span>',
      '<span class="text-cyan-400">profesor</span> = <span class="text-emerald-400 font-bold">Profesor</span>()',
      '<span class="text-purple-400 font-bold">print</span>(<span class="text-cyan-400">profesor</span>.<span class="text-yellow-300 font-semibold">dar_bienvenida</span>())',
      '',
      '<div class="text-emerald-300 font-medium bg-emerald-950/50 border border-emerald-500/40 p-3 rounded-xl mt-2 leading-relaxed shadow-lg">' +
      '  <span class="text-emerald-400 font-bold">&gt;&gt;&gt; Salida del Programa:</span><br>' +
      '  &iexcl;Bienvenido a la clase! Prep&aacute;rate para dominar las estructuras de datos y algoritmos.' +
      '</div>'
    ];

    let lineIndex = 0;
    let currentHTML = '';
    const cursor = '<span class="text-emerald-400 animate-pulse font-bold ml-0.5">█</span>';

    const typeNext = () => {
      if (lineIndex >= lines.length) {
        container.innerHTML = currentHTML;
        return;
      }

      const line = lines[lineIndex];
      if (line === '') {
        currentHTML += '<div class="h-2.5"></div>';
        lineIndex++;
        this.codingTypewriterTimeout = setTimeout(typeNext, 45);
        return;
      }

      currentHTML += `<div class="leading-relaxed">${line}</div>`;
      container.innerHTML = currentHTML + cursor;
      lineIndex++;

      const isBox = line.includes('Salida del Programa');
      const delay = isBox ? 400 : 90;
      this.codingTypewriterTimeout = setTimeout(typeNext, delay);
    };

    typeNext();
  }

  closeWelcomeCodingModal() {
    const modal = document.getElementById('welcome-coding-modal');
    if (modal) modal.classList.add('hidden');
    if (this.codingTypewriterTimeout) {
      clearTimeout(this.codingTypewriterTimeout);
      this.codingTypewriterTimeout = null;
    }
  }

  showCoursesHome() {
    if (window.innerWidth < 768 && typeof this.closeMobileSidebar === 'function') {
      this.closeMobileSidebar();
    }
    this.currentTopicId = null;
    this.activeWeekId = null;
    this.pauseSliderAutoPlay();
    window.location.hash = 'materias';
    document.title = 'Leo Gaviria | Asignaturas Disponibles';

    const courses = [
      {
        id: 'prog',
        code: 'INF-100',
        title: 'Programación',
        subtitle: 'Ruta Integral: Fundamentos, Algoritmos y Estructuras de Datos',
        badge: 'Plan 14 Unidades',
        tag: 'Curso Completo',
        icon: 'fa-code',
        gradient: 'from-emerald-950/70 via-[#0d181e] to-[#081216]',
        border: 'border-emerald-500/50',
        badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        iconBg: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
        btnClass: 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-600/30',
        description: 'Desarrolla habilidades sólidas desde la lógica computacional, pseudocódigo, estructuras de control y funciones modulares, hasta el paradigma POO, análisis asintótico Big-O, estructuras lineales (listas, pilas, colas), árboles, grafos y simuladores interactivos de ordenamiento.',
        topicsPreview: [
          'Pensamiento Computacional y Lógica',
          'Estructuras de Control: Decisión y Bucles',
          'Modularidad, Funciones y Memoria',
          'Paradigma POO, Clases y Encapsulamiento',
          'Notación Big-O y Complejidad Asintótica',
          'Simuladores de Algoritmos de Ordenamiento',
          'Estructuras Lineales: Listas, Pilas y Colas',
          'Árboles BST / AVL y Recorridos en Grafos'
        ],
        weeks: 20,
        lessons: 60
      },
      {
        id: 'tics',
        code: 'INF-102',
        title: 'Introducción a las TICS',
        subtitle: 'Estructuras Discretas, Sistemas Numéricos y Fundamentos Computacionales',
        badge: '5 Unidades • 27 Temas',
        tag: 'Curso Completo',
        icon: 'fa-network-wired',
        gradient: 'from-purple-950/70 via-[#161226] to-[#0d0c1a]',
        border: 'border-purple-500/40',
        badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        iconBg: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
        btnClass: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30',
        description: 'Fundamentos matemáticos y computacionales para ciencias de la computación e ingeniería de software: sistemas numéricos posicionales, inducción matemática y relaciones de recurrencia, álgebra de conjuntos y lógica booleana, teoría de funciones y relaciones, y técnicas avanzadas de conteo y combinatoria.',
        topicsPreview: [
          'Sistemas Numéricos, Conversiones y Aritmética Modular',
          'Inducción Matemática, Recursión y Torres de Hanoi',
          'Teoría de Conjuntos, Diagramas de Venn y Álgebra Booleana',
          'Relaciones Binarias, Órdenes Parciales y Diagramas de Hasse',
          'Combinatoria, Principio del Palomar y Regla del Producto'
        ],
        weeks: 5,
        lessons: 27
      }
    ];

    this.sliderCourses = courses;
    this.currentSlideIndex = 0;

    const slidesHtml = courses.map((c) => `
      <div class="w-full shrink-0 min-w-full p-5 sm:p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br ${c.gradient} border ${c.border} rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-300">
        <div class="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/[0.03] blur-3xl pointer-events-none"></div>

        <div>
          <div class="flex items-center justify-between gap-4 mb-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md ${c.badgeClass}">
                ${c.code} &bull; ${c.badge}
              </span>
              <span class="text-[11px] font-semibold text-gray-400 font-sans hidden sm:inline">
                ${c.tag}
              </span>
            </div>
            <div class="w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center text-xl shadow-lg shrink-0">
              <i class="fas ${c.icon}"></i>
            </div>
          </div>

          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
            ${c.title}
          </h2>
          <p class="text-sm sm:text-base text-gray-300 font-medium mb-3 leading-relaxed">
            ${c.subtitle}
          </p>

          <p class="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3 sm:line-clamp-none">
            ${c.description}
          </p>

          <div class="mb-5">
            <div class="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
              <i class="fas fa-check-double text-emerald-400 text-xs"></i>
              <span>Ejes temáticos clave (14 unidades):</span>
            </div>
            <div class="flex flex-wrap gap-2">
              ${c.topicsPreview.map(tp => `
                <span class="text-xs font-mono bg-[#0f141f]/80 text-gray-300 border border-gray-800/80 px-2.5 py-1 rounded-lg">
                  ${tp}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="pt-5 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-4 text-xs font-mono text-gray-400">
            <div class="flex items-center gap-1.5">
              <i class="far fa-calendar-alt text-emerald-400"></i>
              <span>${c.weeks || 20} Unidades</span>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fas fa-layer-group text-teal-400"></i>
              <span>${c.lessons || (c.weeks ? c.weeks * 3 : 60)} Lecciones</span>
            </div>
            <div class="flex items-center gap-1.5 hidden sm:flex">
              <i class="fas fa-laptop-code text-sky-400"></i>
              <span>Teórico-Práctico</span>
            </div>
          </div>

          <button 
            type="button"
            onclick="window.app.switchCourse('${c.id}')"
            class="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm ${c.btnClass} transition-all duration-200 flex items-center gap-2 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Ingresar a la Asignatura</span>
            <i class="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    `).join('');

    const cardsGridHtml = courses.map(c => `
      <div class="bg-[#10141d] border border-gray-800 hover:border-gray-700 rounded-xl p-5 flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-xl group">
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="w-10 h-10 rounded-lg ${c.iconBg} flex items-center justify-center text-lg">
              <i class="fas ${c.icon}"></i>
            </div>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded ${c.badgeClass}">${c.code}</span>
          </div>
          <h3 class="text-lg font-bold text-white group-hover:text-emerald-300 transition mb-1">${c.title}</h3>
          <p class="text-xs text-gray-400 mb-4 line-clamp-2">${c.subtitle}</p>
          <div class="text-[11px] font-mono text-gray-500 mb-4 flex items-center gap-3">
            <span><i class="far fa-calendar-alt mr-1 text-emerald-400"></i>${c.weeks || 20} Unidades</span>
            <span><i class="fas fa-book mr-1 text-sky-400"></i>${c.lessons || (c.weeks ? c.weeks * 3 : 60)} Temas</span>
          </div>
        </div>
        <button 
          type="button"
          onclick="window.app.switchCourse('${c.id}')"
          class="w-full py-2 rounded-lg bg-[#151c28] hover:bg-emerald-600 text-gray-300 hover:text-white text-xs font-semibold border border-gray-700/80 hover:border-emerald-500 transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Explorar Asignatura</span>
          <i class="fas fa-chevron-right text-[10px]"></i>
        </button>
      </div>
    `).join('');

    const html = `
      <div class="w-full max-w-6xl xl:max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-fade-in space-y-8">
        
        <div class="bg-gradient-to-r from-[#101622] via-[#0d121c] to-[#0a0e17] border border-gray-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div class="relative z-10 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-3">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>CAMPUS ACADÉMICO &bull; PROF. LEO GAVIRIA</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Asignaturas Disponibles
            </h1>
            <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
              Bienvenido al portal académico interactivo. Selecciona cualquiera de las asignaturas a continuación para acceder a su plan de estudio completo de 14 unidades, guías conceptuales y simuladores de algoritmos paso a paso.
            </p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i class="fas fa-layer-group text-emerald-400 text-sm"></i>
              <h3 class="text-sm font-bold text-gray-200 uppercase tracking-wider font-mono">
                Diapositivas de Asignaturas
              </h3>
            </div>
            <div class="flex items-center gap-2">
              <button 
                type="button" 
                onclick="window.app.prevSlide()" 
                class="w-8 h-8 rounded-lg bg-[#141923] hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 flex items-center justify-center text-xs transition cursor-pointer"
                title="Diapositiva Anterior"
              >
                <i class="fas fa-chevron-left"></i>
              </button>
              <button 
                type="button" 
                onclick="window.app.nextSlide()" 
                class="w-8 h-8 rounded-lg bg-[#141923] hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 flex items-center justify-center text-xs transition cursor-pointer"
                title="Siguiente Diapositiva"
              >
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div 
            id="courses-slider-wrapper" 
            class="relative overflow-hidden rounded-2xl w-full"
            onmouseenter="window.app.pauseSliderAutoPlay()"
            onmouseleave="window.app.resumeSliderAutoPlay()"
          >
            <div id="courses-slider-track" class="flex transition-transform duration-500 ease-out w-full" style="transform: translateX(0%);">
              ${slidesHtml}
            </div>
          </div>

          <div class="flex items-center justify-center gap-2 pt-2" id="courses-slider-dots">
            ${courses.map((_, i) => `
              <button 
                type="button" 
                onclick="window.app.goToSlide(${i})" 
                class="slider-dot ${i === 0 ? 'w-8 h-2 rounded-full bg-emerald-400' : 'w-2.5 h-2 rounded-full bg-gray-700 hover:bg-gray-500'} transition-all duration-300 cursor-pointer"
                title="Ir a Asignatura ${i + 1}"
              ></button>
            `).join('')}
          </div>
        </div>

        <div class="space-y-4 pt-4 border-t border-gray-800/60">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i class="fas fa-th-large text-emerald-400 text-sm"></i>
              <h3 class="text-sm font-bold text-gray-200 uppercase tracking-wider font-mono">
                Todas las Materias Disponibles
              </h3>
            </div>
            <span class="text-xs text-gray-500 font-mono">2 Materias Curriculares</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            ${cardsGridHtml}
          </div>
        </div>

      </div>
    `;

    const contentArea = document.getElementById('content-area');
    if (contentArea) {
      contentArea.innerHTML = html;
      contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    }

    this.renderSidebar();
    this.initSlider();
  }

  initSlider() {
    this.currentSlideIndex = 0;
    this.totalSlides = this.sliderCourses ? this.sliderCourses.length : 3;
    this.updateSliderUI();

    this.pauseSliderAutoPlay();
    this.sliderAutoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, 7000);
  }

  pauseSliderAutoPlay() {
    if (this.sliderAutoPlayTimer) {
      clearInterval(this.sliderAutoPlayTimer);
      this.sliderAutoPlayTimer = null;
    }
  }

  resumeSliderAutoPlay() {
    if (!this.sliderAutoPlayTimer && this.currentTopicId === null) {
      this.sliderAutoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, 7000);
    }
  }

  goToSlide(index) {
    if (!this.totalSlides) return;
    this.currentSlideIndex = (index + this.totalSlides) % this.totalSlides;
    this.updateSliderUI();
  }

  nextSlide() {
    this.goToSlide(this.currentSlideIndex + 1);
  }

  prevSlide() {
    this.goToSlide(this.currentSlideIndex - 1);
  }

  updateSliderUI() {
    const track = document.getElementById('courses-slider-track');
    if (track) {
      track.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;
    }
    const dotsContainer = document.getElementById('courses-slider-dots');
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        if (idx === this.currentSlideIndex) {
          dot.className = 'slider-dot w-8 h-2 rounded-full bg-emerald-400 transition-all duration-300';
        } else {
          dot.className = 'slider-dot w-2.5 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-all duration-300 cursor-pointer';
        }
      });
    }
  }
}

// Iniciar aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  window.app = new LeoGaviriaApp();
});
