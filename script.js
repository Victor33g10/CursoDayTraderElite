const sampleVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const moduleBlueprint = [
  {
    title: "Fundamentos do Day Trade Profissional",
    description: "Base tecnica, estrutura operacional e configuracao do ambiente de execucao.",
    phase: "Fundacao",
    focus: "Ambiente e rotina",
    lessons: [
      { title: "Boas-vindas e visao do programa", goal: "Entenda a jornada completa do curso, a ordem ideal das aulas e a logica do metodo." },
      { title: "Setup da plataforma profissional", goal: "Configure layout, atalhos e janelas para operar com leitura clara e execucao rapida." },
      { title: "Como o mercado se move no intraday", goal: "Veja a dinamica entre liquidez, participantes e deslocamentos de preco ao longo do dia." },
      { title: "Liquidez, volatilidade e horario", goal: "Aprenda como esses fatores mudam o tipo de oportunidade disponivel em cada faixa do pregao." },
      { title: "Tipos de ativos e escolha de mercado", goal: "Compare indice, dolar e outros ambientes para definir onde sua leitura rende melhor." },
      { title: "Custos operacionais e slippage", goal: "Mapeie impacto de corretagem, emolumentos, spread e derrapagem no resultado real." },
      { title: "Estrutura do pregao e janelas de oportunidade", goal: "Saiba quando acelerar, quando reduzir e quais horarios pedem mais seletividade." },
      { title: "Checklist antes da abertura", goal: "Monte uma rotina objetiva de preparacao para entrar no mercado sem improviso." }
    ]
  },
  {
    title: "Leitura de Mercado e Contexto",
    description: "Referencias institucionais, construcao de cenario e priorizacao de contexto.",
    phase: "Fundacao",
    focus: "Contexto e referencias",
    lessons: [
      { title: "Tendencia, correcao e lateralizacao", goal: "Diferencie regimes de mercado e ajuste sua expectativa de movimento para cada um." },
      { title: "Suporte, resistencia e zonas de interesse", goal: "Mapeie niveis que concentram atencao institucional e reacao consistente do preco." },
      { title: "Contexto macro do dia", goal: "Avalie agenda economica, correlacao externa e risco de noticia antes de definir atuacao." },
      { title: "Abertura, leilao e leitura de gap", goal: "Interprete aberturas fortes, distorcidas ou defensivas sem antecipar sinais frageis." },
      { title: "VWAP, medias e referencias institucionais", goal: "Use referencias importantes como contexto e nao como gatilho isolado de operacao." },
      { title: "Timeframe de execucao versus contexto", goal: "Conecte leitura mais ampla com o ponto exato de entrada para evitar ruido desnecessario." },
      { title: "Mapeamento do fluxo ao longo do dia", goal: "Entenda como a intencao muda da primeira hora ao periodo de menor liquidez." },
      { title: "Construindo um mapa operacional diario", goal: "Transforme leitura previa em um plano simples com zonas, cenarios e invalidacoes." }
    ]
  },
  {
    title: "Tape Reading e Fluxo",
    description: "Leitura de book, agressao, absorcao e comportamento dos participantes dominantes.",
    phase: "Leitura",
    focus: "Fluxo e tape reading",
    lessons: [
      { title: "Fundamentos do tape reading", goal: "Aprenda a traduzir agressao e defesa em informacao pratica para a tomada de decisao." },
      { title: "Times and trades sem ruido", goal: "Separe o que e leitura util do que e apenas movimento aleatorio na esteira de negocios." },
      { title: "Book de ofertas e intencao real", goal: "Interprete profundidade, reposicionamento e retirada de lotes com criterio profissional." },
      { title: "Absorcao, agressao e defesa", goal: "Identifique quando o mercado esta aceitando preco e quando esta segurando regiao critica." },
      { title: "Identificando player dominante", goal: "Reconheca padroes de atuacao que revelam presenca institucional em zonas decisivas." },
      { title: "Volume at price e clusters", goal: "Conecte concentracao de volume com aceitacao, rejeicao e continuidade provavel do movimento." },
      { title: "Fluxo em rompimentos", goal: "Use leitura de aceleracao e continuidade para validar rompimentos e evitar armadilhas classicas." },
      { title: "Fluxo em reversoes", goal: "Entenda sinais de exaustao, defesa e troca de mao antes de buscar viradas de contexto." },
      { title: "Replays comentados de fluxo", goal: "Veja sessoes comentadas em velocidade controlada para consolidar leitura em ambiente real." }
    ]
  },
  {
    title: "Estrategias de Entrada",
    description: "Modelos de execucao claros, confluencia e criterios objetivos para disparar trades.",
    phase: "Execucao",
    focus: "Setups e entradas",
    lessons: [
      { title: "Estrategia 1 - rompimento validado", goal: "Monte o cenario ideal para rompimento com contexto, fluxo e aceitacao alinhados." },
      { title: "Estrategia 2 - pullback institucional", goal: "Saiba entrar no reteste certo sem antecipar correcoes fracas ou deslocadas." },
      { title: "Estrategia 3 - reversao em exaustao", goal: "Aplique criterios de reversao apenas quando houver sinal claro de defesa e falha." },
      { title: "Estrategia 4 - abertura com confirmacao", goal: "Atue nos primeiros minutos com disciplina, filtrando impulsos e direcoes falsas." },
      { title: "Criterios de confluencia", goal: "Combine contexto, fluxo, localizacao e timing para operar somente quando a leitura estiver madura." },
      { title: "Entradas parciais e escala", goal: "Use parcelamento de posicao sem perder clareza do risco total e do plano original." },
      { title: "Stop tecnico versus stop financeiro", goal: "Separe invalidacao grafica de limite financeiro para proteger a consistencia." },
      { title: "Estudos de caso de entradas reais", goal: "Revise cenarios executados com comentarios sobre acerto, atraso e descarte de trade." }
    ]
  },
  {
    title: "Gestao de Risco e Capital",
    description: "Protecao de patrimonio, controle de exposicao e metricas que sustentam a curva.",
    phase: "Risco",
    focus: "Protecao de capital",
    lessons: [
      { title: "Base da gestao de risco", goal: "Defina o papel do risco como eixo central da longevidade operacional." },
      { title: "Risco por trade na pratica", goal: "Calcule o valor ideal por operacao conforme capital, estilo e estagio de maturidade." },
      { title: "Limite diario, semanal e mensal", goal: "Crie travas de protecao para interromper desvios antes que virem prejuizo estrutural." },
      { title: "Relacao risco retorno aplicavel", goal: "Adapte a expectativa de payoff ao contexto real do mercado em vez de usar formulas cegas." },
      { title: "Tamanho de posicao inteligente", goal: "Escalone contratos de acordo com conviccao, liquidez e qualidade do cenario." },
      { title: "Como reduzir mao no drawdown", goal: "Use protocolos objetivos para diminuir exposicao sem perder ritmo de aprendizado." },
      { title: "Registro de erros e desvios", goal: "Transforme falhas recorrentes em dados acionaveis de correcao operacional." },
      { title: "Metricas que realmente importam", goal: "Leia consistencia, execucao e expectativa sem se prender apenas ao resultado bruto." },
      { title: "Protocolo de preservacao de capital", goal: "Tenha um plano claro para dias ruins, semanas dificeis e retomada segura." }
    ]
  },
  {
    title: "Execucao Avancada e Scalping",
    description: "Velocidade, ajuste fino de ordens e gestao dinamica de posicao em contextos rapidos.",
    phase: "Execucao",
    focus: "Scalping e gestao ativa",
    lessons: [
      { title: "Execucao rapida sem ansiedade", goal: "Acelere a tomada de decisao mantendo criterio, respiracao e clareza do plano." },
      { title: "Scalping em alta liquidez", goal: "Explore microdeslocamentos com leitura curta, stops justos e objetivo bem definido." },
      { title: "Operando noticia com filtro", goal: "Aprenda quando faz sentido participar e quando a protecao deve prevalecer." },
      { title: "Gestao ativa da posicao", goal: "Acompanhe o trade em andamento sem sabotar a leitura com excesso de intervencao." },
      { title: "Saidas parciais e trailing", goal: "Distribua realizacao e protecao conforme o mercado confirma ou perde forca." },
      { title: "Ajuste fino de ordens", goal: "Refine limite, stop e cancelamento para reduzir friccao de execucao." },
      { title: "Correcao de execucao e reentrada", goal: "Saiba quando recompor posicao com logica e quando aceitar que o timing passou." },
      { title: "Sessoes comentadas de execucao", goal: "Assista a exemplos de atuacao com leitura, clique e gerenciamento explicados em contexto." }
    ]
  },
  {
    title: "Psicologia e Rotina de Alta Performance",
    description: "Disciplina, regulacao emocional e habitos que sustentam consistencia de verdade.",
    phase: "Performance",
    focus: "Psicologia e rotina",
    lessons: [
      { title: "Psicologia do operador consistente", goal: "Entenda a diferenca entre confiar no processo e buscar confirmacao emocional no mercado." },
      { title: "Controle emocional em sequencia", goal: "Aplique tecnicas de retomada apos ganhos ou perdas sem distorcer sua execucao." },
      { title: "Construcao de rotina matinal", goal: "Estruture preparacao mental, revisao tecnica e estado de energia antes da abertura." },
      { title: "Pos-mercado e revisao fria", goal: "Analise decisoes com distanciamento para acelerar aprendizado e reduzir autoengano." },
      { title: "Como vencer o overtrading", goal: "Reconheca gatilhos de excesso e use travas praticas para manter seletividade." },
      { title: "Energia, foco e tomada de decisao", goal: "Ajuste corpo e atencao para operar com lucidez nos horarios que mais importam." },
      { title: "Regras para dias ruins", goal: "Tenha respostas prontas para quando o mercado ou sua execucao saem do padrao." },
      { title: "Plano mental de consistencia", goal: "Consolide um protocolo simples para entrar, operar, revisar e encerrar o dia." }
    ]
  },
  {
    title: "Laboratorio, Replay e Plano Operacional",
    description: "Consolidacao do metodo com revisao pratica, playbook e evolucao continua.",
    phase: "Consolidacao",
    focus: "Replay e refinamento",
    lessons: [
      { title: "Montando seu playbook", goal: "Organize setups, filtros e regras de descarte em um documento operacional vivo." },
      { title: "Como revisar replay com metodo", goal: "Use replay para treinar leitura, correcao de timing e confianca de execucao." },
      { title: "Diario operacional visual", goal: "Construa uma base de revisao com imagens, contexto e justificativa de cada trade." },
      { title: "Score semanal de execucao", goal: "Acompanhe qualidade operacional por criterios objetivos e faceis de manter." },
      { title: "Otimizacao continua", goal: "Refine processo, horarios e contextos favoritos sem perder consistencia." },
      { title: "Simulacoes e metas de evolucao", goal: "Use metas mensuraveis para transformar estudo em progressao observavel." },
      { title: "Plano de evolucao 30 60 90", goal: "Distribua foco, volume de estudo e ajustes em ciclos claros de desenvolvimento." },
      { title: "Aula final - transicao para consistencia", goal: "Conecte tecnica, execucao e comportamento em um plano de longo prazo." },
      { title: "Proximos passos e comunidade", goal: "Saiba como manter ritmo de revisao e aproveitar a comunidade de suporte." }
    ]
  }
];

const typeMap = {
  "Boas-vindas e visao do programa": "Onboarding",
  "Replays comentados de fluxo": "Replay",
  "Sessoes comentadas de execucao": "Replay",
  "Estudos de caso de entradas reais": "Case",
  "Aula final - transicao para consistencia": "Masterclass",
  "Proximos passos e comunidade": "Guia"
};

function lessonType(title) {
  if (typeMap[title]) return typeMap[title];
  if (title.includes("Estrategia")) return "Estrategia";
  if (title.includes("Checklist") || title.includes("Plano") || title.includes("playbook")) return "Framework";
  if (title.includes("Replay") || title.includes("replay")) return "Replay";
  if (title.includes("Caso") || title.includes("Sessoes")) return "Case";
  return "Aula";
}

function durationInMinutes(moduleIndex, lessonIndex) {
  return 8 + ((moduleIndex * 4 + lessonIndex * 3) % 11);
}

function formatMinutes(total) {
  return `${total} min`;
}

function formatWorkload(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return minutes === 0 ? `${hours}h` : `${hours}h ${String(minutes).padStart(2, "0")}m`;
}

const modules = moduleBlueprint.map((module, moduleIndex) => {
  const lessons = module.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    id: `m${moduleIndex + 1}l${lessonIndex + 1}`,
    moduleId: `module-${moduleIndex + 1}`,
    moduleIndex,
    lessonIndex,
    orderLabel: String(lessonIndex + 1).padStart(2, "0"),
    durationMinutes: durationInMinutes(moduleIndex, lessonIndex),
    durationLabel: formatMinutes(durationInMinutes(moduleIndex, lessonIndex)),
    type: lessonType(lesson.title),
    videoSrc: sampleVideo
  }));

  return {
    ...module,
    id: `module-${moduleIndex + 1}`,
    shortLabel: `Modulo ${String(moduleIndex + 1).padStart(2, "0")}`,
    lessons,
    totalMinutes: lessons.reduce((sum, lesson) => sum + lesson.durationMinutes, 0)
  };
});

const flatLessons = modules.flatMap((module) =>
  module.lessons.map((lesson) => ({
    ...lesson,
    moduleTitle: module.title,
    moduleShortLabel: module.shortLabel,
    moduleDescription: module.description,
    modulePhase: module.phase,
    moduleFocus: module.focus
  }))
);

const lessonsById = new Map(flatLessons.map((lesson) => [lesson.id, lesson]));
const totalLessons = flatLessons.length;
const totalMinutes = flatLessons.reduce((sum, lesson) => sum + lesson.durationMinutes, 0);

const state = {
  openModuleId: modules[0].id,
  currentLessonId: flatLessons[0].id,
  completedLessons: new Set(),
  focusMode: false
};

const elements = {
  appShell: document.getElementById("appShell"),
  sidebarToggle: document.getElementById("sidebarToggle"),
  sidebarClose: document.getElementById("sidebarClose"),
  sidebarBackdrop: document.getElementById("sidebarBackdrop"),
  focusButton: document.getElementById("focusButton"),
  moduleList: document.getElementById("moduleList"),
  progressRing: document.getElementById("progressRing"),
  progressPercent: document.getElementById("progressPercent"),
  sidebarProgressText: document.getElementById("sidebarProgressText"),
  sidebarProgressHint: document.getElementById("sidebarProgressHint"),
  continueLessonTitle: document.getElementById("continueLessonTitle"),
  continueLessonMeta: document.getElementById("continueLessonMeta"),
  currentModuleCrumb: document.getElementById("currentModuleCrumb"),
  courseStatus: document.getElementById("courseStatus"),
  heroProgressFill: document.getElementById("heroProgressFill"),
  heroProgressText: document.getElementById("heroProgressText"),
  heroProgressDetail: document.getElementById("heroProgressDetail"),
  heroCurrentLesson: document.getElementById("heroCurrentLesson"),
  heroCurrentModule: document.getElementById("heroCurrentModule"),
  overviewStartTitle: document.getElementById("overviewStartTitle"),
  overviewStartMeta: document.getElementById("overviewStartMeta"),
  overviewProgressText: document.getElementById("overviewProgressText"),
  overviewProgressMeta: document.getElementById("overviewProgressMeta"),
  statModules: document.getElementById("statModules"),
  statLessons: document.getElementById("statLessons"),
  statWorkload: document.getElementById("statWorkload"),
  curriculumBadge: document.getElementById("curriculumBadge"),
  playerTitle: document.getElementById("playerTitle"),
  playerType: document.getElementById("playerType"),
  playerDuration: document.getElementById("playerDuration"),
  playerModule: document.getElementById("playerModule"),
  lessonHeadline: document.getElementById("lessonHeadline"),
  lessonSummary: document.getElementById("lessonSummary"),
  overlayLessonTitle: document.getElementById("overlayLessonTitle"),
  prevLessonButton: document.getElementById("prevLessonButton"),
  nextLessonButton: document.getElementById("nextLessonButton"),
  completeLessonButton: document.getElementById("completeLessonButton"),
  videoOverlay: document.getElementById("videoOverlay"),
  courseVideo: document.getElementById("courseVideo"),
  videoSource: document.getElementById("videoSource")
};

function getCurrentLesson() {
  return lessonsById.get(state.currentLessonId);
}

function getCompletedCount() {
  return state.completedLessons.size;
}

function getProgressPercentage() {
  return Math.round((getCompletedCount() / totalLessons) * 100);
}

function getNextLesson(currentLesson) {
  const currentIndex = flatLessons.findIndex((lesson) => lesson.id === currentLesson.id);
  return flatLessons[currentIndex + 1] || null;
}

function getPreviousLesson(currentLesson) {
  const currentIndex = flatLessons.findIndex((lesson) => lesson.id === currentLesson.id);
  return flatLessons[currentIndex - 1] || null;
}

function moduleCompletion(module) {
  return module.lessons.filter((lesson) => state.completedLessons.has(lesson.id)).length;
}

function moduleStatusLabel(module) {
  const completed = moduleCompletion(module);

  if (completed === 0) return "Nao iniciado";
  if (completed === module.lessons.length) return "Concluido";
  return "Em andamento";
}

function markerInner(lesson) {
  if (state.completedLessons.has(lesson.id)) {
    return `<svg><use href="#icon-check"></use></svg>`;
  }

  if (lesson.id === state.currentLessonId) {
    return `<svg><use href="#icon-play"></use></svg>`;
  }

  return `<span class="lesson-order">${lesson.orderLabel}</span>`;
}

function renderModules() {
  elements.moduleList.innerHTML = modules
    .map((module) => {
      const completed = moduleCompletion(module);
      const completionRate = Math.round((completed / module.lessons.length) * 100);
      const isOpen = module.id === state.openModuleId;

      return `
        <article class="module-item ${isOpen ? "is-open" : ""}" data-module-id="${module.id}">
          <button
            class="module-header"
            type="button"
            data-action="toggle-module"
            data-module-id="${module.id}"
            aria-expanded="${isOpen}"
          >
            <span class="module-index">${module.shortLabel.replace("Modulo ", "M")}</span>
            <span class="module-copy">
              <span class="module-summary-row">
                <span class="module-pill">${module.phase}</span>
                <span class="module-tag">${module.focus}</span>
                <span class="module-tag">${formatWorkload(module.totalMinutes)}</span>
              </span>
              <h3>${module.title}</h3>
              <p>${module.description}</p>
              <span class="module-tags">
                <span class="module-tag">${module.lessons.length} aulas</span>
                <span class="module-tag">${completed}/${module.lessons.length} concluidas</span>
              </span>
            </span>
            <span class="module-meta">
              <span class="module-status">
                <strong>${moduleStatusLabel(module)}</strong>
                <span>${completionRate}% do modulo</span>
              </span>
              <span class="module-progress-track" aria-hidden="true">
                <span style="width:${completionRate}%"></span>
              </span>
              <span class="module-toggle" aria-hidden="true">
                <svg><use href="#icon-chevron"></use></svg>
              </span>
            </span>
          </button>
          <div class="module-body-wrap">
            <div class="module-body">
              <div class="lesson-list">
                ${module.lessons
                  .map((lesson) => {
                    const isCurrent = lesson.id === state.currentLessonId;
                    const isCompleted = state.completedLessons.has(lesson.id);

                    return `
                      <button
                        class="lesson-row ${isCurrent ? "is-active" : ""} ${isCompleted ? "is-completed" : ""}"
                        type="button"
                        data-action="select-lesson"
                        data-lesson-id="${lesson.id}"
                        aria-current="${isCurrent ? "true" : "false"}"
                      >
                        <span class="lesson-marker">${markerInner(lesson)}</span>
                        <span class="lesson-main">
                          <strong>${lesson.orderLabel}. ${lesson.title}</strong>
                          <span>${lesson.goal}</span>
                        </span>
                        <span class="lesson-side">
                          <span>${lesson.type}</span>
                          <span>${lesson.durationLabel}</span>
                        </span>
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateProgressSurfaces() {
  const completed = getCompletedCount();
  const percentage = getProgressPercentage();
  const currentLesson = getCurrentLesson();
  const nextLesson = getNextLesson(currentLesson);

  elements.progressRing.style.setProperty("--progress-value", percentage);
  elements.progressPercent.textContent = `${percentage}%`;
  elements.sidebarProgressText.textContent = `${completed} de ${totalLessons} aulas concluidas`;
  elements.sidebarProgressHint.textContent = completed === 0
    ? `Comece por ${currentLesson.title}.`
    : nextLesson
      ? `Proxima recomendacao: ${nextLesson.title}.`
      : "Curriculo finalizado. Hora de revisar os melhores setups.";

  elements.heroProgressFill.style.width = `${percentage}%`;
  elements.heroProgressText.textContent = `${percentage}% concluido`;
  elements.heroProgressDetail.textContent = completed === 0
    ? `Comece pelo ${currentLesson.moduleShortLabel} e siga a ordem sugerida.`
    : nextLesson
      ? `Continue por ${nextLesson.moduleShortLabel} com ${nextLesson.title}.`
      : "Trilha completa concluida. Use os replays e o playbook para reforco.";

  elements.courseStatus.textContent = `${completed} de ${totalLessons} aulas concluidas`;
  elements.heroCurrentLesson.textContent = currentLesson.title;
  elements.heroCurrentModule.textContent = currentLesson.moduleShortLabel;
  elements.continueLessonTitle.textContent = currentLesson.title;
  elements.continueLessonMeta.textContent = `${currentLesson.moduleShortLabel} - Aula ${currentLesson.orderLabel}`;
  elements.currentModuleCrumb.textContent = currentLesson.moduleTitle;
  elements.curriculumBadge.textContent = `${totalLessons} aulas detalhadas`;
  elements.overviewStartTitle.textContent = currentLesson.title;
  elements.overviewStartMeta.textContent = `${currentLesson.moduleShortLabel} - Aula ${currentLesson.orderLabel}`;
  elements.overviewProgressText.textContent = completed === 0
    ? "Nenhuma aula concluida"
    : `${completed} aulas concluidas`;
  elements.overviewProgressMeta.textContent = completed === 0
    ? "Tudo zerado para iniciar do ponto certo."
    : nextLesson
      ? `Proxima aula: ${nextLesson.title}.`
      : "Voce concluiu toda a trilha.";
}

function updatePlayer() {
  const currentLesson = getCurrentLesson();
  const previousLesson = getPreviousLesson(currentLesson);
  const nextLesson = getNextLesson(currentLesson);
  const isCompleted = state.completedLessons.has(currentLesson.id);

  elements.playerTitle.textContent = currentLesson.title;
  elements.playerType.textContent = currentLesson.type;
  elements.playerDuration.textContent = currentLesson.durationLabel;
  elements.playerModule.textContent = currentLesson.moduleTitle;
  elements.lessonHeadline.textContent = currentLesson.title;
  elements.lessonSummary.textContent = currentLesson.goal;
  elements.overlayLessonTitle.textContent = `${currentLesson.moduleShortLabel} - ${currentLesson.title}`;

  elements.prevLessonButton.disabled = !previousLesson;
  elements.nextLessonButton.disabled = !nextLesson;
  elements.completeLessonButton.classList.toggle("is-complete", isCompleted);
  elements.completeLessonButton.querySelector("span").textContent = isCompleted
    ? "Aula concluida"
    : "Marcar como concluida";

  elements.videoSource.src = currentLesson.videoSrc;
  elements.courseVideo.load();
  elements.courseVideo.pause();
  elements.videoOverlay.classList.remove("is-hidden");
}

function updateStaticStats() {
  elements.statModules.textContent = String(modules.length);
  elements.statLessons.textContent = String(totalLessons);
  elements.statWorkload.textContent = formatWorkload(totalMinutes);
}

function render() {
  renderModules();
  updateProgressSurfaces();
  updatePlayer();
}

function setCurrentLesson(lessonId) {
  const lesson = lessonsById.get(lessonId);
  if (!lesson) return;

  state.currentLessonId = lessonId;
  state.openModuleId = lesson.moduleId;
  render();

  const currentButton = elements.moduleList.querySelector(`[data-lesson-id="${lessonId}"]`);
  currentButton?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function toggleLessonComplete() {
  const lesson = getCurrentLesson();

  if (state.completedLessons.has(lesson.id)) {
    state.completedLessons.delete(lesson.id);
  } else {
    state.completedLessons.add(lesson.id);
  }

  render();
}

function toggleSidebar(forceState) {
  const open = typeof forceState === "boolean" ? forceState : !elements.appShell.classList.contains("is-sidebar-open");
  elements.appShell.classList.toggle("is-sidebar-open", open);
}

function toggleFocusMode() {
  state.focusMode = !state.focusMode;
  document.body.classList.toggle("focus-mode", state.focusMode);
  elements.focusButton.textContent = state.focusMode ? "Sair do foco" : "Modo foco";
}

elements.moduleList.addEventListener("click", (event) => {
  const toggleButton = event.target.closest('[data-action="toggle-module"]');
  const lessonButton = event.target.closest('[data-action="select-lesson"]');

  if (lessonButton) {
    setCurrentLesson(lessonButton.dataset.lessonId);
    return;
  }

  if (toggleButton) {
    const moduleId = toggleButton.dataset.moduleId;
    state.openModuleId = state.openModuleId === moduleId ? "" : moduleId;
    renderModules();
  }
});

elements.prevLessonButton.addEventListener("click", () => {
  const previousLesson = getPreviousLesson(getCurrentLesson());
  if (previousLesson) setCurrentLesson(previousLesson.id);
});

elements.nextLessonButton.addEventListener("click", () => {
  const nextLesson = getNextLesson(getCurrentLesson());
  if (nextLesson) setCurrentLesson(nextLesson.id);
});

elements.completeLessonButton.addEventListener("click", toggleLessonComplete);

elements.videoOverlay.addEventListener("click", async () => {
  try {
    await elements.courseVideo.play();
    elements.videoOverlay.classList.add("is-hidden");
  } catch (error) {
    elements.videoOverlay.classList.remove("is-hidden");
  }
});

elements.courseVideo.addEventListener("play", () => {
  elements.videoOverlay.classList.add("is-hidden");
});

elements.courseVideo.addEventListener("pause", () => {
  if (elements.courseVideo.currentTime < elements.courseVideo.duration) {
    elements.videoOverlay.classList.remove("is-hidden");
  }
});

elements.courseVideo.addEventListener("ended", () => {
  state.completedLessons.add(getCurrentLesson().id);
  render();
});

elements.sidebarToggle.addEventListener("click", () => {
  if (window.innerWidth <= 980) {
    toggleSidebar();
    return;
  }

  toggleFocusMode();
});

elements.sidebarClose.addEventListener("click", () => toggleSidebar(false));
elements.sidebarBackdrop.addEventListener("click", () => toggleSidebar(false));
elements.focusButton.addEventListener("click", toggleFocusMode);

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    toggleSidebar(false);
  }
});

updateStaticStats();
render();
