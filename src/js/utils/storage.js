/**
 * GESTOR DE ALMACENAMIENTO LOCAL (LocalStorage)
 * Guarda el progreso del estudiante, temas completados, racha y preferencias de tema.
 */

const STORAGE_KEY_PROGRESS = "leogaviria_progress";
const STORAGE_KEY_THEME = "leogaviria_theme_pref";

export function getCompletedTopics() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function isTopicCompleted(topicId) {
  const completed = getCompletedTopics();
  return completed.includes(topicId);
}

export function toggleTopicCompleted(topicId) {
  const completed = getCompletedTopics();
  const index = completed.indexOf(topicId);
  let isNowCompleted = false;

  if (index > -1) {
    completed.splice(index, 1);
    isNowCompleted = false;
  } else {
    completed.push(topicId);
    isNowCompleted = true;
  }

  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(completed));
  } catch (e) {}

  return { completed, isNowCompleted };
}

export function getThemePreference() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {}
  return 'dark';
}

export function applyThemeToDOM(theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      try {
        iframe.contentWindow.postMessage({ type: 'THEME_CHANGE', theme }, '*');
        if (iframe.contentDocument && iframe.contentDocument.documentElement) {
          iframe.contentDocument.documentElement.setAttribute('data-theme', theme);
          if (iframe.contentDocument.body) {
            iframe.contentDocument.body.classList.toggle('theme-light', theme === 'light');
          }
        }
      } catch (e) {}
    });
  }
}

export function setThemePreference(theme) {
  try {
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  } catch (e) {}
  applyThemeToDOM(theme);
}
