/**
 * MOTOR DE EJECUCIÓN SANDBOX Y JUDGE EDUCATIVO - MARATÓN
 * Ejecuta código Python en un entorno seguro y evalúa casos de prueba.
 */

/**
 * Normaliza la salida para comparación justa (elimina espacios residuales por línea y \r).
 */
export function normalizeOutput(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim()
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n');
}

/**
 * Ejecuta código Python con Skulpt capturando I/O y protegiendo contra timeouts.
 */
export async function runPythonCode(code, inputStr = '', timeoutMs = 3500) {
  if (typeof window !== 'undefined' && typeof window.Sk === 'undefined') {
    return {
      success: false,
      output: '',
      error: 'El motor de ejecución de Python (Skulpt) se está inicializando. Por favor, reintenta en un momento.',
      errorType: 'InitError',
      pedagogicalAdvice: 'Espera unos segundos y vuelve a presionar Ejecutar.',
      isTimeout: false
    };
  }

  const Sk = typeof window !== 'undefined' ? window.Sk : global.Sk;
  if (!Sk) {
    return {
      success: false,
      output: '',
      error: 'Entorno de ejecución de Python no disponible.',
      errorType: 'MissingEngine',
      pedagogicalAdvice: 'Verifica la conexión o recarga la página.',
      isTimeout: false
    };
  }

  let output = '';
  const inputLines = inputStr ? inputStr.split(/\r?\n/) : [];
  let inputIdx = 0;

  try {
    Sk.configure({
      output: (text) => { output += text; },
      read: (x) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined) {
          throw new Error('Módulo no encontrado en el entorno seguro: ' + x);
        }
        return Sk.builtinFiles['files'][x];
      },
      inputfun: () => {
        if (inputIdx < inputLines.length) {
          return inputLines[inputIdx++];
        }
        return '';
      },
      inputfunTakesPrompt: false,
      execLimit: timeoutMs,
      python3: true
    });

    await Sk.misceval.asyncToPromise(() => {
      return Sk.importMainWithBody('<stdin>', false, code, true);
    });

    return {
      success: true,
      output: output,
      error: null,
      errorType: null,
      pedagogicalAdvice: '',
      isTimeout: false
    };
  } catch (err) {
    const errStr = err ? err.toString() : 'Error de ejecución';
    const isTimeout = errStr.includes('TimeLimitError') || errStr.includes('run time limit');
    let friendlyError = errStr;
    let errorType = 'RuntimeError';
    let pedagogicalAdvice = '';

    if (isTimeout) {
      errorType = 'TimeLimitError';
      friendlyError = `⚠️ Tiempo límite excedido (${timeoutMs / 1000}s).`;
      pedagogicalAdvice = 'Es posible que tu código contenga un ciclo infinito (while True sin condición de parada o con un contador que nunca se incrementa).';
    } else if (errStr.includes('EOFError')) {
      errorType = 'EOFError';
      friendlyError = '⚠️ EOFError: Tu programa intentó leer más datos de los que fueron suministrados en la entrada.';
      pedagogicalAdvice = 'Asegúrate de que tus llamadas a input() coincidan exactamente con la cantidad de líneas esperadas en el problema.';
    } else if (errStr.includes('ValueError')) {
      errorType = 'ValueError';
      friendlyError = '⚠️ ValueError: Error de conversión o formato de datos.';
      pedagogicalAdvice = 'Verifica que estés aplicando int() o float() únicamente a textos que contengan números válidos. Si una línea contiene múltiples números, usa .split().';
    } else if (errStr.includes('ZeroDivisionError')) {
      errorType = 'ZeroDivisionError';
      friendlyError = '⚠️ ZeroDivisionError: Se intentó dividir entre cero.';
      pedagogicalAdvice = 'Revisa que los denominadores o módulos no sean iguales a 0 antes de operar.';
    } else if (errStr.includes('IndexError')) {
      errorType = 'IndexError';
      friendlyError = '⚠️ IndexError: Posición de lista fuera de rango.';
      pedagogicalAdvice = 'Revisa que la lista o arreglo tenga suficientes elementos antes de acceder al índice especificado.';
    } else if (errStr.includes('SyntaxError')) {
      errorType = 'SyntaxError';
      friendlyError = `⚠️ ${errStr}`;
      pedagogicalAdvice = 'Revisa los dos puntos (:), paréntesis sin cerrar y la indentación de los bloques de código.';
    }

    return {
      success: false,
      output: output,
      error: friendlyError,
      errorType: errorType,
      pedagogicalAdvice: pedagogicalAdvice,
      isTimeout: isTimeout
    };
  }
}

/**
 * Evalúa el código de un estudiante contra los casos de prueba del problema.
 */
export async function judgeSubmission(problem, studentCode, isFullCheck = true) {
  const visibleCases = problem.casosPrueba || problem.casos_prueba || [];
  const hiddenCases = isFullCheck ? (problem.casosPruebaOcultos || problem.casos_prueba_ocultos || []) : [];
  const casesToRun = [...visibleCases, ...hiddenCases];

  const results = [];
  let allPassed = true;
  let passedCount = 0;
  let firstError = null;

  for (let i = 0; i < casesToRun.length; i++) {
    const tc = casesToRun[i];
    const isVisible = tc.visible !== false;

    const runResult = await runPythonCode(studentCode, tc.entrada || '', 3500);

    if (!runResult.success) {
      allPassed = false;
      if (!firstError) firstError = runResult.error;
      results.push({
        id: tc.id || (i + 1),
        visible: isVisible,
        descripcion: tc.descripcion || `Caso de prueba #${i + 1}`,
        entrada: isVisible ? tc.entrada : '[Oculto para evaluación]',
        salida_esperada: isVisible ? tc.salidaEsperada : '[Oculto]',
        salida_obtenida: runResult.output,
        passed: false,
        error: runResult.error,
        advice: runResult.pedagogicalAdvice,
        status: runResult.isTimeout ? 'TIMEOUT' : 'ERROR'
      });
      if (runResult.isTimeout) break;
      continue;
    }

    const expected = tc.salidaEsperada !== undefined ? tc.salidaEsperada : tc.salida_esperada;
    const normActual = normalizeOutput(runResult.output);
    const normExpected = normalizeOutput(expected);
    const passed = normActual === normExpected;

    if (passed) {
      passedCount++;
    } else {
      allPassed = false;
    }

    results.push({
      id: tc.id || (i + 1),
      visible: isVisible,
      descripcion: tc.descripcion || `Caso de prueba #${i + 1}`,
      entrada: isVisible ? tc.entrada : '[Caso oculto]',
      salida_esperada: isVisible ? expected : '[Caso oculto]',
      salida_obtenida: isVisible ? runResult.output : (passed ? '[Correcto]' : '[Discrepancia en salida]'),
      passed: passed,
      error: null,
      status: passed ? 'AC' : 'WA' // Accepted / Wrong Answer
    });
  }

  // Generación de retroalimentación pedagógica
  let feedback = '';
  let feedbackType = 'info';

  if (allPassed) {
    feedback = (problem.retroalimentacion && (problem.retroalimentacion.exito || problem.retroalimentacion.acierto)) || '🎉 ¡Excelente! Has superado todas las pruebas de este reto.';
    feedbackType = 'success';
  } else if (firstError && firstError.includes('Tiempo límite')) {
    feedback = '⚠️ Tu programa se detuvo por tiempo límite. Revisa que tus ciclos while y for avancen hacia una condición de terminación.';
    feedbackType = 'warning';
  } else if (passedCount > 0) {
    feedback = `⚠️ Tu solución funciona para ${passedCount} de ${casesToRun.length} casos de prueba. Revisa los casos límite y el formato exacto de salida.`;
    feedbackType = 'warning';
  } else {
    feedback = (problem.retroalimentacion && (problem.retroalimentacion.errorComun || problem.retroalimentacion.error_comun)) || '💡 La salida de tu programa no coincide con lo esperado. Revisa los tipos de datos, operadores y el formato exacto.';
    feedbackType = 'error';
  }

  const score = casesToRun.length > 0 ? Math.round((passedCount / casesToRun.length) * 100) : 0;

  return {
    accepted: allPassed,
    passed: passedCount,
    total: casesToRun.length,
    score: score,
    results: results,
    feedback: feedback,
    feedbackType: feedbackType
  };
}
