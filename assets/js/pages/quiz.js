Router.register('quiz', () => {
  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-question-circle blue"></i> Daily Quiz</div>
      <div class="page-subtitle">15-minute interactive quiz after each study session. Instant feedback + explanations.</div>
    </div>
    <div class="grid-3 mb-6">
      ${COURSE_DATA.domains.map(d => `
        <div class="card" style="cursor:pointer;border-left:3px solid var(--azure-${d.color})"
          onclick="startQuiz('${d.id}','${d.name}')">
          <div class="stat-icon"><i class="fas ${d.icon} ${d.color}"></i></div>
          <div style="font-weight:600;margin:8px 0 4px;font-size:15px">${d.name}</div>
          <div style="font-size:12px;color:var(--text-secondary)">${QUIZ_DATA[d.id].length} questions &nbsp;|&nbsp; ${d.weight}</div>
          <div class="mt-4"><button class="btn btn-primary btn-sm" style="font-size:13px;padding:8px 16px">
            <i class="fas fa-play"></i> Start Quiz</button></div>
        </div>`).join('')}
    </div>
    <div class="card">
      <div class="card-title"><i class="fas fa-history"></i> Recent Quiz Results</div>
      ${renderQuizHistory()}
    </div>
  </div>`;
});

function renderQuizHistory() {
  const results = Store.get().quizResults || {};
  const entries = Object.entries(results).sort((a,b) => new Date(b[1].date) - new Date(a[1].date)).slice(0,10);
  if (!entries.length) return '<p style="color:var(--text-muted);font-size:14px">No quizzes taken yet. Start your first quiz above!</p>';
  return `<table class="review-table"><thead><tr>
    <th>Date</th><th>Domain</th><th>Score</th><th>Result</th></tr></thead><tbody>
    ${entries.map(([key, r]) => {
      const cls = r.pct >= 80 ? 'badge-green' : r.pct >= 60 ? 'badge-yellow' : 'badge-red';
      const dom = COURSE_DATA.domains.find(d => d.id === r.domain);
      return `<tr>
        <td>${new Date(r.date).toLocaleDateString()}</td>
        <td>${dom ? dom.name : r.domain}</td>
        <td>${r.score}/${r.total}</td>
        <td><span class="badge ${cls}">${r.pct}%</span></td></tr>`;
    }).join('')}
  </tbody></table>`;
}

let quizState = {};

window.startQuiz = function(domainId, domainName) {
  const pool = QUIZ_DATA[domainId] || [];
  const questions = shuffleArray([...pool]).slice(0, Math.min(10, pool.length));
  quizState = { domainId, domainName, questions, current: 0, answers: [], startTime: Date.now(), timer: null };
  renderQuizQuestion();
};

function renderQuizQuestion() {
  const { questions, current, domainName } = quizState;
  const q = questions[current];
  const total = questions.length;
  const timeLimit = 15 * 60; // 15 minutes for whole quiz

  const container = document.getElementById('page-container');
  container.innerHTML = `
    <div class="fade-in quiz-container">
      <div class="quiz-header">
        <div>
          <div style="font-weight:700;font-size:15px">${domainName}</div>
          <div class="quiz-progress-text">Question ${current+1} of ${total}</div>
        </div>
        <div id="quiz-timer" class="quiz-timer">15:00</div>
        <button class="btn btn-outline" onclick="Router.navigate('quiz')" style="font-size:12px;padding:6px 14px">✕ Exit</button>
      </div>
      <div class="progress-wrap mb-6"><div class="progress-fill blue" style="width:${((current)/total*100)}%"></div></div>
      <div class="question-card" id="qcard">
        <div class="question-number">Question ${current+1} of ${total} — ${domainName}</div>
        <div class="question-text">${q.q}</div>
        <div class="options-list">
          ${q.options.map((opt, i) => `
            <button class="option-btn" id="opt_${i}" onclick="selectOption(${i})">
              <span class="option-letter">${'ABCD'[i]}</span>
              <span>${opt}</span>
            </button>`).join('')}
        </div>
        <div class="explanation-box" id="explanation">
          <strong>📖 Explanation:</strong><br/>${q.explanation}
        </div>
      </div>
      <div id="quiz-nav" class="flex-center gap-3 mt-4" style="display:none!important">
        <button class="btn btn-primary" id="next-btn" onclick="nextQuestion()">
          ${current+1 < total ? 'Next Question <i class="fas fa-arrow-right"></i>' : 'See Results <i class="fas fa-trophy"></i>'}
        </button>
      </div>
    </div>`;

  // Start / continue timer
  if (current === 0) {
    quizState.startTime = Date.now();
    let remaining = timeLimit;
    quizState.timer = setInterval(() => {
      remaining--;
      const m = Math.floor(remaining/60), s = remaining%60;
      const timerEl = document.getElementById('quiz-timer');
      if (!timerEl) { clearInterval(quizState.timer); return; }
      timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
      if (remaining <= 60) timerEl.className = 'quiz-timer danger';
      else if (remaining <= 180) timerEl.className = 'quiz-timer warning';
      if (remaining <= 0) { clearInterval(quizState.timer); finishQuiz(); }
    }, 1000);
  }
}

window.selectOption = function(idx) {
  const q = quizState.questions[quizState.current];
  const opts = document.querySelectorAll('.option-btn');
  opts.forEach(o => o.disabled = true);

  opts[idx].classList.add(idx === q.answer ? 'correct' : 'wrong');
  if (idx !== q.answer) opts[q.answer].classList.add('correct');

  document.getElementById('explanation').classList.add('show');
  quizState.answers[quizState.current] = idx;

  const nav = document.getElementById('quiz-nav');
  nav.style.display = 'flex';
};

window.nextQuestion = function() {
  quizState.current++;
  if (quizState.current >= quizState.questions.length) {
    clearInterval(quizState.timer);
    finishQuiz();
  } else {
    renderQuizQuestion();
  }
};

function finishQuiz() {
  const { questions, answers, domainId, domainName } = quizState;
  const score = answers.filter((a,i) => a === questions[i].answer).length;
  const total = questions.length;
  const pct = Math.round(score/total*100);
  const key = `${domainId}_${Date.now()}`;

  Store.saveQuizResult(key, { domain: domainId, score, total, pct, answers });

  const grade = pct >= 80 ? 'excellent' : pct >= 65 ? 'good' : pct >= 50 ? 'average' : 'poor';
  const gradeText = pct >= 80 ? '🎉 Excellent!' : pct >= 65 ? '👍 Good Job!' : pct >= 50 ? '📚 Keep Studying' : '⚠️ Needs Work';
  const gradeMsg = pct >= 80
    ? 'Great performance! You have a strong grasp of this domain.'
    : pct >= 65
    ? 'Good progress! Review the questions you missed and try again.'
    : pct >= 50
    ? 'Fair attempt. Focus on the explanations and re-study key topics.'
    : 'This topic needs more attention. Re-read the module notes and try again tomorrow.';

  // Domain analysis
  const domBreakdown = {};
  questions.forEach((q,i) => {
    if (!domBreakdown[domainId]) domBreakdown[domainId] = { correct:0, total:0 };
    domBreakdown[domainId].total++;
    if (answers[i] === q.answer) domBreakdown[domainId].correct++;
  });

  const reviewRows = questions.map((q,i) => {
    const correct = answers[i] === q.answer;
    return `<tr>
      <td>${i+1}</td>
      <td style="max-width:300px;font-size:13px">${q.q.substring(0,80)}${q.q.length>80?'…':''}</td>
      <td>${q.options[answers[i]] || '<em style="color:var(--text-muted)">Not answered</em>'}</td>
      <td>${q.options[q.answer]}</td>
      <td><span class="badge ${correct?'badge-green':'badge-red'}">${correct?'✓ Correct':'✗ Wrong'}</span></td>
    </tr>`;
  }).join('');

  document.getElementById('page-container').innerHTML = `
    <div class="fade-in results-container">
      <div class="page-header">
        <div class="page-title">Quiz Results — ${domainName}</div>
      </div>
      <div class="card text-center mb-6">
        <div class="score-circle ${grade}" style="margin:0 auto 20px">${pct}%<div class="score-label">${score}/${total}</div></div>
        <div style="font-size:22px;font-weight:700;margin-bottom:8px">${gradeText}</div>
        <div style="font-size:14px;color:var(--text-secondary);max-width:500px;margin:0 auto 24px">${gradeMsg}</div>
        <div class="results-grid" style="max-width:400px;margin:0 auto">
          <div class="result-stat"><div class="result-stat-value green">${score}</div><div class="result-stat-label">Correct</div></div>
          <div class="result-stat"><div class="result-stat-value red">${total-score}</div><div class="result-stat-label">Wrong</div></div>
        </div>
        <div class="flex-center gap-3 mt-6" style="justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="startQuiz('${domainId}','${domainName}')"><i class="fas fa-redo"></i> Retry Quiz</button>
          <button class="btn btn-outline" onclick="Router.navigate('quiz')"><i class="fas fa-list"></i> All Quizzes</button>
          <button class="btn btn-teal" onclick="Router.navigate('performance')"><i class="fas fa-chart-line"></i> View Performance</button>
        </div>
      </div>
      <div class="card">
        <div class="card-title"><i class="fas fa-clipboard-list"></i> Detailed Review — All Questions</div>
        <div style="overflow-x:auto">
          <table class="review-table">
            <thead><tr><th>#</th><th>Question</th><th>Your Answer</th><th>Correct Answer</th><th>Result</th></tr></thead>
            <tbody>${reviewRows}</tbody>
          </table>
        </div>
      </div>
    </div>`;
}

function shuffleArray(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}