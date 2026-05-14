// PoliticaPlay - Quiz Politica Game Logic
// Handles setup, gameplay, scoring, and results with hardcoded dataset

// Game State
const gameState = {
  currentScreen: 'loading',
  teams: [],
  currentTeamIndex: 0,
  currentQuestionIndex: 0,
  questions: [],
  timer: null,
  timeRemaining: 0,
  questionStartTime: 0,
  answers: [],
  isAnswering: false
};

const TIMER_SECONDS = 15;
const POINTS_CORRECT = 100;
const POINTS_BONUS_FAST = 50;
const POINTS_BONUS_QUICK = 25;

// DOM Elements
const screens = {
  loading: document.getElementById('loadingScreen'),
  setup: document.getElementById('setupScreen'),
  game: document.getElementById('gameScreen'),
  results: document.getElementById('resultsScreen')
};

const elements = {
  teamCount: document.getElementById('teamCount'),
  teamNamesContainer: document.getElementById('teamNamesContainer'),
  quizForm: document.getElementById('quizSetupForm'),
  currentTeamName: document.getElementById('currentTeamName'),
  questionCounter: document.getElementById('questionCounter'),
  currentScore: document.getElementById('currentScore'),
  timerBar: document.getElementById('timerBar'),
  questionText: document.getElementById('questionText'),
  optionsContainer: document.getElementById('optionsContainer'),
  feedbackContainer: document.getElementById('feedbackContainer'),
  liveLeaderboard: document.getElementById('liveLeaderboard'),
  rankingsContainer: document.getElementById('rankingsContainer'),
  reviewContainer: document.getElementById('reviewContainer'),
  playAgainBtn: document.getElementById('playAgainBtn')
};

// Shuffle array utility
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Initialize
function init() {
  showScreen('setup');

  elements.teamCount.addEventListener('change', updateTeamInputs);
  elements.quizForm.addEventListener('submit', startQuiz);
  elements.playAgainBtn.addEventListener('click', resetQuiz);

  updateTeamInputs();
}

// Update team name inputs based on selected count
function updateTeamInputs() {
  const count = parseInt(elements.teamCount.value);
  const container = elements.teamNamesContainer;

  container.innerHTML = '<label class="quiz-form-label">Nomi Squadre</label><div class="quiz-teams-input"></div>';
  const teamsInput = container.querySelector('.quiz-teams-input');

  for (let i = 0; i < count; i++) {
    const teamInput = document.createElement('div');
    teamInput.className = 'quiz-team-input';
    teamInput.innerHTML = `
      <span class="quiz-team-number">${i + 1}</span>
      <input type="text" class="quiz-form-input team-name-input" placeholder="Nome Squadra ${i + 1}" required>
    `;
    teamsInput.appendChild(teamInput);
  }
}

// Start Quiz
function startQuiz(e) {
  e.preventDefault();

  const teamInputs = document.querySelectorAll('.team-name-input');
  gameState.teams = Array.from(teamInputs).map((input, index) => ({
    name: input.value.trim() || `Squadra ${index + 1}`,
    score: 0,
    correctAnswers: 0,
    totalAnswers: 0
  }));

  const category = document.getElementById('category').value;
  const questionCount = parseInt(document.getElementById('questionCount').value);

  // Get questions from hardcoded dataset
  let availableQuestions = window.QuizPoliticaData || [];

  if (category !== 'Misto') {
    availableQuestions = availableQuestions.filter(q => q.category === category);
  }

  if (availableQuestions.length < questionCount) {
    availableQuestions = window.QuizPoliticaData || [];
  }

  // Shuffle and pick
  gameState.questions = shuffleArray(availableQuestions).slice(0, questionCount);

  if (gameState.questions.length === 0) {
    alert('Errore: nessuna domanda disponibile. Riprova.');
    return;
  }

  gameState.currentTeamIndex = 0;
  gameState.currentQuestionIndex = 0;
  gameState.answers = [];
  gameState.isAnswering = false;

  showScreen('game');
  showQuestion();
}

// Show current question
function showQuestion() {
  const question = gameState.questions[gameState.currentQuestionIndex];
  if (!question) { showResults(); return; }

  const team = gameState.teams[gameState.currentTeamIndex];

  elements.currentTeamName.textContent = team.name;
  elements.questionCounter.textContent = `Domanda ${gameState.currentQuestionIndex + 1}/${gameState.questions.length}`;
  elements.currentScore.textContent = `${team.score} punti`;
  elements.questionText.textContent = question.question;

  // Render options
  elements.optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(index));
    elements.optionsContainer.appendChild(button);
  });

  elements.feedbackContainer.style.display = 'none';
  updateLiveLeaderboard();
  startTimer();

  gameState.isAnswering = true;
  gameState.questionStartTime = Date.now();
}

// Start countdown timer
function startTimer() {
  gameState.timeRemaining = TIMER_SECONDS;

  if (gameState.timer) clearInterval(gameState.timer);

  updateTimerBar();

  gameState.timer = setInterval(() => {
    gameState.timeRemaining -= 0.1;

    if (gameState.timeRemaining <= 0) {
      gameState.timeRemaining = 0;
      clearInterval(gameState.timer);
      handleTimeUp();
    }

    updateTimerBar();
  }, 100);
}

// Update timer bar visual
function updateTimerBar() {
  const percentage = (gameState.timeRemaining / TIMER_SECONDS) * 100;
  elements.timerBar.style.width = `${percentage}%`;

  if (percentage < 30) {
    elements.timerBar.classList.add('warning');
  } else {
    elements.timerBar.classList.remove('warning');
  }
}

// Handle time up
function handleTimeUp() {
  if (!gameState.isAnswering) return;
  if (!gameState.questions[gameState.currentQuestionIndex]) return;

  const question = gameState.questions[gameState.currentQuestionIndex];
  const team = gameState.teams[gameState.currentTeamIndex];

  team.totalAnswers++;
  gameState.answers.push({
    question: question.question,
    correct: false,
    correctAnswer: question.correct,
    teamAnswer: 'Tempo scaduto',
    explanation: question.explanation
  });

  showFeedback(false, question.correct);
  disableOptions();
  setTimeout(() => nextQuestion(), 2000);
}

// Handle answer selection
function handleAnswer(selectedIndex) {
  if (!gameState.isAnswering) return;
  if (!gameState.questions[gameState.currentQuestionIndex]) return;

  const question = gameState.questions[gameState.currentQuestionIndex];
  const team = gameState.teams[gameState.currentTeamIndex];
  const selectedAnswer = question.options[selectedIndex];
  const isCorrect = selectedAnswer === question.correct;

  clearInterval(gameState.timer);
  gameState.isAnswering = false;

  const timeTaken = (Date.now() - gameState.questionStartTime) / 1000;
  let points = 0;

  if (isCorrect) {
    points = POINTS_CORRECT;
    if (timeTaken < 3) points += POINTS_BONUS_FAST;
    else if (timeTaken < 5) points += POINTS_BONUS_QUICK;
    team.correctAnswers++;
  }

  team.totalAnswers++;
  team.score += points;

  gameState.answers.push({
    question: question.question,
    correct: isCorrect,
    correctAnswer: question.correct,
    teamAnswer: selectedAnswer,
    explanation: question.explanation
  });

  const options = elements.optionsContainer.querySelectorAll('.quiz-option');
  if (options[selectedIndex]) {
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
  }

  if (!isCorrect) {
    const correctIndex = question.options.indexOf(question.correct);
    if (correctIndex >= 0 && options[correctIndex]) {
      options[correctIndex].classList.add('correct');
    }
  }

  disableOptions();
  showFeedback(isCorrect, question.correct, points);
  elements.currentScore.textContent = `${team.score} punti`;
  updateLiveLeaderboard();

  setTimeout(() => nextQuestion(), 2000);
}

// Disable all option buttons
function disableOptions() {
  elements.optionsContainer.querySelectorAll('.quiz-option').forEach(option => {
    option.disabled = true;
  });
}

// Show feedback message
function showFeedback(isCorrect, correctAnswer, points = 0) {
  elements.feedbackContainer.style.display = 'block';

  if (isCorrect) {
    elements.feedbackContainer.className = 'quiz-feedback correct';
    elements.feedbackContainer.textContent = points > 100
      ? `Corretto! +${points} punti (bonus velocità!)`
      : `Corretto! +${points} punti`;
  } else {
    elements.feedbackContainer.className = 'quiz-feedback wrong';
    elements.feedbackContainer.textContent = `Sbagliato! La risposta corretta era: ${correctAnswer}`;
  }
}

// Move to next question or show results
function nextQuestion() {
  gameState.currentQuestionIndex++;

  if (gameState.teams.length > 0) {
    gameState.currentTeamIndex = (gameState.currentTeamIndex + 1) % gameState.teams.length;
  }

  if (gameState.currentQuestionIndex >= gameState.questions.length || gameState.questions.length === 0) {
    showResults();
  } else {
    showQuestion();
  }
}

// Update live leaderboard sidebar
function updateLiveLeaderboard() {
  if (!elements.liveLeaderboard) return;

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

// Show results screen
function showResults() {
  showScreen('results');

  const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);

  elements.rankingsContainer.innerHTML = '';
  sortedTeams.forEach((team, index) => {
    const rankElement = document.createElement('div');
    rankElement.className = 'quiz-team-score';
    rankElement.innerHTML = `
      <div class="quiz-team-rank">${index + 1}</div>
      <div class="quiz-team-info">
        <div class="quiz-team-result-name">${team.name}</div>
        <div class="quiz-team-result-stats">${team.correctAnswers}/${team.totalAnswers} corrette</div>
      </div>
      <div class="quiz-team-result-score">${team.score}</div>
    `;
    elements.rankingsContainer.appendChild(rankElement);

    saveBestScore(team.name, team.score);
  });

  elements.reviewContainer.innerHTML = '';
  gameState.answers.forEach((answer, index) => {
    const reviewItem = document.createElement('div');
    reviewItem.className = 'quiz-review-item';
    reviewItem.innerHTML = `
      <div class="quiz-review-question">${index + 1}. ${answer.question}</div>
      <div class="quiz-review-answer">
        La tua risposta: <span class="${answer.correct ? 'correct' : 'wrong'}">${answer.teamAnswer}</span>
        ${!answer.correct ? ` | Risposta corretta: <span class="correct">${answer.correctAnswer}</span>` : ''}
      </div>
      ${answer.explanation ? `<div class="quiz-review-explanation">${answer.explanation}</div>` : ''}
    `;
    elements.reviewContainer.appendChild(reviewItem);
  });
}

// Save best score to localStorage
function saveBestScore(teamName, score) {
  try {
    const key = `politicaplay_best_${teamName.toLowerCase().replace(/\s+/g, '_')}`;
    const currentBest = parseInt(localStorage.getItem(key) || '0');
    if (score > currentBest) {
      localStorage.setItem(key, score.toString());
    }
  } catch (error) {
    console.warn('Failed to save score:', error.message);
  }
}

// Reset quiz
function resetQuiz() {
  if (gameState.timer) clearInterval(gameState.timer);

  gameState.teams = [];
  gameState.currentTeamIndex = 0;
  gameState.currentQuestionIndex = 0;
  gameState.questions = [];
  gameState.answers = [];
  gameState.isAnswering = false;

  showScreen('setup');
  elements.quizForm.reset();
  updateTeamInputs();
}

// Show specific screen
function showScreen(screenName) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove('active');
  });

  if (screens[screenName]) {
    screens[screenName].classList.add('active');
    gameState.currentScreen = screenName;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
