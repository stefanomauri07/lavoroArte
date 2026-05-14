// PoliticaPlay - Fake o Realtà Game Logic

const gameState = {
  currentScreen: 'loading',
  mode: 'single',
  teams: [],
  currentTeamIndex: 0,
  currentIndex: 0,
  statements: [],
  timer: null,
  timeRemaining: 0,
  questionStartTime: 0,
  answers: [],
  isAnswering: false,
  singleScore: 0,
  singleCorrect: 0,
  singleTotal: 0
};

const TIMER_SECONDS = 10;
const POINTS_CORRECT = 100;
const POINTS_BONUS_FAST = 50;

const screens = {
  loading: document.getElementById('loadingScreen'),
  setup: document.getElementById('setupScreen'),
  game: document.getElementById('gameScreen'),
  results: document.getElementById('resultsScreen')
};

const elements = {
  fakeSetupForm: document.getElementById('fakeSetupForm'),
  teamSetupSection: document.getElementById('teamSetupSection'),
  teamCount: document.getElementById('teamCount'),
  teamNamesContainer: document.getElementById('teamNamesContainer'),
  turnIndicator: document.getElementById('turnIndicator'),
  currentTeamName: document.getElementById('currentTeamName'),
  questionCounter: document.getElementById('questionCounter'),
  currentScore: document.getElementById('currentScore'),
  timerBar: document.getElementById('timerBar'),
  statementText: document.getElementById('statementText'),
  fakeBtn: document.getElementById('fakeBtn'),
  realBtn: document.getElementById('realBtn'),
  feedbackContainer: document.getElementById('feedbackContainer'),
  liveLeaderboard: document.getElementById('liveLeaderboard'),
  rankingsContainer: document.getElementById('rankingsContainer'),
  summaryPercent: document.getElementById('summaryPercent'),
  summaryMessage: document.getElementById('summaryMessage'),
  reviewContainer: document.getElementById('reviewContainer'),
  playAgainBtn: document.getElementById('playAgainBtn')
};

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function init() {
  showScreen('setup');

  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      gameState.mode = btn.dataset.mode;
      elements.teamSetupSection.style.display = gameState.mode === 'team' ? 'block' : 'none';
    });
  });

  elements.teamCount.addEventListener('change', updateTeamInputs);
  elements.fakeSetupForm.addEventListener('submit', startGame);
  elements.playAgainBtn.addEventListener('click', resetGame);
  elements.fakeBtn.addEventListener('click', () => handleChoice(false));
  elements.realBtn.addEventListener('click', () => handleChoice(true));

  updateTeamInputs();
}

function updateTeamInputs() {
  const count = parseInt(elements.teamCount.value);
  const container = elements.teamNamesContainer;

  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const teamInput = document.createElement('div');
    teamInput.className = 'fake-team-input';
    teamInput.innerHTML = `
      <span class="fake-team-number">${i + 1}</span>
      <input type="text" class="fake-form-input team-name-input" placeholder="Nome Squadra ${i + 1}">
    `;
    container.appendChild(teamInput);
  }
}

function startGame(e) {
  e.preventDefault();

  const category = document.getElementById('category').value;
  const questionCount = parseInt(document.getElementById('questionCount').value);

  let availableStatements = window.FakeNewsData || [];

  if (category !== 'Misto') {
    availableStatements = availableStatements.filter(s => s.category === category);
  }

  if (availableStatements.length < questionCount) {
    availableStatements = window.FakeNewsData || [];
  }

  gameState.statements = shuffleArray(availableStatements).slice(0, questionCount);

  if (gameState.statements.length === 0) {
    alert('Errore: nessuna affermazione disponibile. Riprova.');
    return;
  }

  if (gameState.mode === 'team') {
    const teamInputs = document.querySelectorAll('.team-name-input');
    gameState.teams = Array.from(teamInputs).map((input, index) => ({
      name: input.value.trim() || `Squadra ${index + 1}`,
      score: 0,
      correctAnswers: 0,
      totalAnswers: 0
    }));
    gameState.currentTeamIndex = 0;
    elements.turnIndicator.style.display = 'flex';
  } else {
    gameState.singleScore = 0;
    gameState.singleCorrect = 0;
    gameState.singleTotal = 0;
    elements.turnIndicator.style.display = 'none';
  }

  gameState.currentIndex = 0;
  gameState.answers = [];
  gameState.isAnswering = false;

  showScreen('game');
  showStatement();
}

function showStatement() {
  const statement = gameState.statements[gameState.currentIndex];
  if (!statement) { showResults(); return; }

  if (gameState.mode === 'team') {
    const team = gameState.teams[gameState.currentTeamIndex];
    elements.currentTeamName.textContent = team.name;
    elements.currentScore.textContent = `${team.score} punti`;
  } else {
    elements.currentScore.textContent = `${gameState.singleScore} punti`;
  }

  elements.questionCounter.textContent = `Affermazione ${gameState.currentIndex + 1}/${gameState.statements.length}`;
  elements.statementText.textContent = statement.statement;

  elements.fakeBtn.className = 'fake-choice-btn btn-fake';
  elements.realBtn.className = 'fake-choice-btn btn-real';
  elements.fakeBtn.disabled = false;
  elements.realBtn.disabled = false;

  elements.feedbackContainer.style.display = 'none';
  updateLiveLeaderboard();
  startTimer();

  gameState.isAnswering = true;
  gameState.questionStartTime = Date.now();
}

function startTimer() {
  gameState.timeRemaining = TIMER_SECONDS;

  if (gameState.timer) clearInterval(gameState.timer);

  updateTimerBar();

  gameState.timer = setInterval(() => {
    gameState.timeRemaining -= 0.1;

    if (gameState.timeRemaining <= 0) {
      gameState.timeRemaining = 0;
      clearInterval(gameState.timer);
      handleTimeout();
    }

    updateTimerBar();
  }, 100);
}

function updateTimerBar() {
  const percentage = (gameState.timeRemaining / TIMER_SECONDS) * 100;
  elements.timerBar.style.width = `${percentage}%`;

  if (percentage < 30) {
    elements.timerBar.classList.add('warning');
  } else {
    elements.timerBar.classList.remove('warning');
  }
}

function handleTimeout() {
  if (!gameState.isAnswering) return;
  if (!gameState.statements[gameState.currentIndex]) return;

  const statement = gameState.statements[gameState.currentIndex];
  const correctVerdict = statement.isReal ? 'REALTÀ' : 'FAKE';

  if (gameState.mode === 'team') {
    const team = gameState.teams[gameState.currentTeamIndex];
    team.totalAnswers++;
  } else {
    gameState.singleTotal++;
  }

  gameState.answers.push({
    statement: statement.statement,
    correct: false,
    correctVerdict: correctVerdict,
    playerAnswer: 'Tempo scaduto',
    explanation: statement.explanation
  });

  showFeedbackTimeout(correctVerdict);
  disableButtons();
  setTimeout(() => nextStatement(), 2500);
}

function handleChoice(chosenIsReal) {
  if (!gameState.isAnswering) return;
  if (!gameState.statements[gameState.currentIndex]) return;

  const statement = gameState.statements[gameState.currentIndex];
  const isCorrect = chosenIsReal === statement.isReal;
  const chosenVerdict = chosenIsReal ? 'REALTÀ' : 'FAKE';
  const correctVerdict = statement.isReal ? 'REALTÀ' : 'FAKE';

  clearInterval(gameState.timer);
  gameState.isAnswering = false;

  const timeTaken = (Date.now() - gameState.questionStartTime) / 1000;
  let points = 0;

  if (isCorrect) {
    points = POINTS_CORRECT;
    if (timeTaken < 3) points += POINTS_BONUS_FAST;
  }

  if (gameState.mode === 'team') {
    const team = gameState.teams[gameState.currentTeamIndex];
    if (isCorrect) team.correctAnswers++;
    team.totalAnswers++;
    team.score += points;
  } else {
    if (isCorrect) gameState.singleCorrect++;
    gameState.singleTotal++;
    gameState.singleScore += points;
  }

  gameState.answers.push({
    statement: statement.statement,
    correct: isCorrect,
    correctVerdict: correctVerdict,
    playerAnswer: chosenVerdict,
    explanation: statement.explanation
  });

  if (chosenIsReal) {
    elements.realBtn.classList.add(isCorrect ? 'correct-pick' : 'wrong-pick');
  } else {
    elements.fakeBtn.classList.add(isCorrect ? 'correct-pick' : 'wrong-pick');
  }

  disableButtons();
  showFeedback(isCorrect, correctVerdict, points);

  if (gameState.mode === 'team') {
    elements.currentScore.textContent = `${gameState.teams[gameState.currentTeamIndex].score} punti`;
  } else {
    elements.currentScore.textContent = `${gameState.singleScore} punti`;
  }

  updateLiveLeaderboard();
  setTimeout(() => nextStatement(), 2500);
}

function disableButtons() {
  elements.fakeBtn.disabled = true;
  elements.realBtn.disabled = true;
}

function showFeedback(isCorrect, correctVerdict, points = 0) {
  elements.feedbackContainer.style.display = 'block';

  if (isCorrect) {
    elements.feedbackContainer.className = 'fake-feedback correct';
    elements.feedbackContainer.innerHTML = points > 100
      ? `Corretto! +${points} punti (bonus velocità!)<span class="feedback-answer">${correctVerdict} — Era vero!</span>`
      : `Corretto! +${points} punti<span class="feedback-answer">${correctVerdict}</span>`;
  } else {
    elements.feedbackContainer.className = 'fake-feedback wrong';
    elements.feedbackContainer.innerHTML = `Sbagliato!<span class="feedback-answer">La risposta corretta era: ${correctVerdict}</span>`;
  }
}

function showFeedbackTimeout(correctVerdict) {
  elements.feedbackContainer.style.display = 'block';
  elements.feedbackContainer.className = 'fake-feedback fake-feedback-timeout';
  elements.feedbackContainer.innerHTML = `Tempo scaduto!<span class="feedback-answer">La risposta corretta era: ${correctVerdict}</span>`;
}

function nextStatement() {
  gameState.currentIndex++;

  if (gameState.mode === 'team' && gameState.teams.length > 0) {
    gameState.currentTeamIndex = (gameState.currentTeamIndex + 1) % gameState.teams.length;
  }

  if (gameState.currentIndex >= gameState.statements.length || gameState.statements.length === 0) {
    showResults();
  } else {
    showStatement();
  }
}

function updateLiveLeaderboard() {
  if (!elements.liveLeaderboard) return;

  if (gameState.mode === 'single') {
    elements.liveLeaderboard.innerHTML = `
      <div class="leaderboard-team active-turn">
        <div class="leaderboard-team-name">Tu</div>
        <div class="leaderboard-team-score">${gameState.singleScore} pt${gameState.singleScore !== 1 ? 'i' : ''}</div>
      </div>
    `;
    return;
  }

  if (!gameState.teams || gameState.teams.length === 0) return;

  const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);

  elements.liveLeaderboard.innerHTML = '';

  sortedTeams.forEach((team, index) => {
    const isActive = team === gameState.teams[gameState.currentTeamIndex];
    const teamElement = document.createElement('div');
    teamElement.className = `leaderboard-team${isActive ? ' active-turn' : ''}`;
    teamElement.innerHTML = `
      <div class="leaderboard-team-rank">#${index + 1}</div>
      <div class="leaderboard-team-name">${team.name}${isActive ? ' (turno)' : ''}</div>
      <div class="leaderboard-team-score">${team.score} pt${team.score !== 1 ? 'i' : ''}</div>
    `;
    elements.liveLeaderboard.appendChild(teamElement);
  });
}

function showResults() {
  showScreen('results');

  if (gameState.mode === 'single') {
    elements.rankingsContainer.style.display = 'none';
    const percent = gameState.singleTotal > 0 ? Math.round((gameState.singleCorrect / gameState.singleTotal) * 100) : 0;
    elements.summaryPercent.textContent = `${percent}%`;
    elements.summaryMessage.textContent = getSummaryMessage(percent);
  } else {
    elements.rankingsContainer.style.display = 'flex';
    elements.rankingsContainer.innerHTML = '';

    const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);

    sortedTeams.forEach((team, index) => {
      const rankElement = document.createElement('div');
      rankElement.className = 'fake-team-score';
      rankElement.innerHTML = `
        <div class="fake-team-rank">${index + 1}</div>
        <div class="fake-team-info">
          <div class="fake-team-result-name">${team.name}</div>
          <div class="fake-team-result-stats">${team.correctAnswers}/${team.totalAnswers} corrette</div>
        </div>
        <div class="fake-team-result-score">${team.score}</div>
      `;
      elements.rankingsContainer.appendChild(rankElement);
    });

    const totalCorrect = gameState.teams.reduce((sum, t) => sum + t.correctAnswers, 0);
    const totalAnswers = gameState.teams.reduce((sum, t) => sum + t.totalAnswers, 0);
    const percent = totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0;
    elements.summaryPercent.textContent = `${percent}%`;
    elements.summaryMessage.textContent = `Squadre: ${totalCorrect}/${totalAnswers} corrette in totale`;
  }

  elements.reviewContainer.innerHTML = '';
  gameState.answers.forEach((answer, index) => {
    const reviewItem = document.createElement('div');
    reviewItem.className = 'fake-review-item';
    reviewItem.innerHTML = `
      <div class="fake-review-statement">${index + 1}. ${answer.statement}</div>
      <div class="fake-review-verdict">
        Hai detto: <span class="${answer.correct ? 'correct' : 'wrong'}">${answer.playerAnswer}</span>
        | La risposta era: <span class="correct">${answer.correctVerdict}</span>
      </div>
      <div class="fake-review-explanation">${answer.explanation}</div>
    `;
    elements.reviewContainer.appendChild(reviewItem);
  });
}

function getSummaryMessage(percent) {
  if (percent >= 90) return 'Eccezionale! Sei un esperto di politica!';
  if (percent >= 70) return 'Ottimo lavoro! Conosci bene la politica italiana.';
  if (percent >= 50) return 'Non male! Ma puoi fare di meglio.';
  if (percent >= 30) return 'Devi studiare un po\' di più!';
  return 'La politica non è il tuo forte... riprova!';
}

function resetGame() {
  if (gameState.timer) clearInterval(gameState.timer);

  gameState.teams = [];
  gameState.currentTeamIndex = 0;
  gameState.currentIndex = 0;
  gameState.statements = [];
  gameState.answers = [];
  gameState.isAnswering = false;
  gameState.singleScore = 0;
  gameState.singleCorrect = 0;
  gameState.singleTotal = 0;

  showScreen('setup');
  elements.fakeSetupForm.reset();
  updateTeamInputs();
}

function showScreen(screenName) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove('active');
  });

  if (screens[screenName]) {
    screens[screenName].classList.add('active');
    gameState.currentScreen = screenName;
  }
}

document.addEventListener('DOMContentLoaded', init);
