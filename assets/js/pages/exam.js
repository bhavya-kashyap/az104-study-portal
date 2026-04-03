Router.register('exam', () => {
  const results = Store.get().examResults || {};
  const examCards = EXAM_DATA.map(e => {
    const done = results[e.id];
    const domain = COURSE_DATA.domains.find(d => d.id === e.domain);
    const col = domain ? domain.color : 'blue';
    return `<div class="card" style="border-left:3px solid var(--azure-${col})">
      <div class="flex-between mb-4">
        <span class="badge badge-${col}">${domain ? domain.name : 'All Domains'}</span>
        ${done ? `<span class="badge badge-green">✅ ${done.pct}%</span>` : '<span class="badge badge-gray">Not taken</span>'}
      </div>
      <div style="font-weight:700;font-size:15px;margin-bottom:6px;line-height:1.4">${e.title}</div>
      <div style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">
        <i class="fas fa-list-ol blue"></i> ${e.questions.length} Questions &nbsp;|&nbsp;
        <i class="fas fa-clock blue"></i> ~${Math.ceil(e.questions.length * 1.5)} minutes
      </div>
      ${done ? `<div class="progress-wrap mb-4"><div class="progress-fill ${done.pct >= 70 ? 'green' : 'red'}" style="width:${done.pct}%"></div></div>` : ''}
      <div class="flex-center gap-2">
        <button class="btn btn-primary" onclick="startExam('${e.id}')">
          <i class="fas fa-${done ? 'redo' : 'play'}"></i> ${done ? 'Retake Exam' : 'Start Exam'}
        </button>
        ${done ? `<button class="btn btn-outline" onclick="viewExamReview('${e.id}')"><i class="fas fa-chart-bar"></i> Review</button>` : ''}
      </div>
    </div>`;
  }).join('');

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-graduation-cap blue"></i> Weekend Practice Exams</div>
      <div class="page-subtitle">Domain exams and full mock exams — real AZ-104 exam simulation</div>
    </div>
    <div class="alert alert-warning"><i class="fas fa-info-circle"></i>
      <span>Weekend exams simulate real AZ-104 conditions. Target <strong>70%+ per domain</strong> and
      <strong>75%+ on mock exams</strong>. Real exam passing score is <strong>700/1000</strong>.</span>
    </div>
    <div class="grid-3">${examCards}</div>
  </div>`;
});

let examState = {};

window.startExam = function(examId) {
  const exam = EXAM_DATA.find(e => e.id === examId);
  if (!exam) return;
  const questions = shuffleArr([...exam.questions]);
  examState = {
    examId, exam, questions,
    current: 0,
    answers: new Array(questions.length).fill(null),
    startTime: Date.now(),
    timer: null,
    submitted: false
  };
  renderExamQuestion();
};

function renderExamQuestion() {
  const { questions, current, exam } = examState;
  const q = questions[current];
  const total = questions.length;
  const timeLimit = total * 90;
  const container = document.getElementById('page-container');

  container.innerHTML = `
    <div class="fade-in quiz-container">
      <div class="quiz-header">
        <div>
          <div style="font-weight:700;font-size:14px">${exam.title}</div>
          <div class="quiz-progress-text">Question ${current + 1} of ${total}</div>
        </div>
        <div id="exam-timer" class="quiz-timer">${fmtTime(timeLimit)}</div>
        <button class="btn btn-danger" onclick="confirmSubmitExam()" style="font-size:12px;padding:6px 14px">
          <i class="fas fa-paper-plane"></i> Submit
        </button>
      </div>
      <div class="progress-wrap mb-6">
        <div class="progress-fill blue" style="width:${(current / total * 100).toFixed(1)}%"></div>
      </div>
      <div class="question-card">
        <div class="question-number">Question ${current + 1} of ${total}</div>
        <div class="question-text">${q.q}</div>
        <div class="options-list">
          ${q.options.map((opt, i) => {
            const sel = examState.answers[current] === i;
            return `<button class="option-btn ${sel ? 'selected' : ''}" id="eopt_${i}" onclick="selectExamOption(${i})">
              <span class="option-letter">${'ABCD'[i]}</span>
              <span>${opt}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
      <div class="flex-between mt-4">
        <button class="btn btn-outline" onclick="examNav(-1)" ${current === 0 ? 'disabled' : ''}>
          <i class="fas fa-arrow-left"></i> Previous
        </button>
        <span style="font-size:13px;color:var(--text-secondary)">
          ${examState.answers.filter(a => a !== null).length}/${total} answered
        </span>
        <button class="btn btn-primary" onclick="examNav(1)">
          ${current + 1 < total
            ? 'Next <i class="fas fa-arrow-right"></i>'
            : 'Review &amp; Submit <i class="fas fa-check"></i>'}
        </button>
      </div>
    </div>`;

  if (current === 0 && !examState.timer) {
    let remaining = timeLimit;
    examState.timer = setInterval(() => {
      remaining--;
      const el = document.getElementById('exam-timer');
      if (!el) { clearInterval(examState.timer); return; }
      el.textContent = fmtTime(remaining);
      if (remaining <= 120) el.className = 'quiz-timer danger';
      else if (remaining <= 300) el.className = 'quiz-timer warning';
      if (remaining <= 0) { clearInterval(examState.timer); submitExam(); }
    }, 1000);
  }
}

window.selectExamOption = function(idx) {
  examState.answers[examState.current] = idx;
  document.querySelectorAll('.option-btn').forEach((b, i) => {
    b.classList.toggle('selected', i === idx);
  });
};

window.examNav = function(dir) {
  examState.current = Math.max(0, Math.min(examState.questions.length - 1, examState.current + dir));
  renderExamQuestion();
};

window.confirmSubmitExam = function() {
  const unanswered = examState.answers.filter(a => a === null).length;
  openModal(`
    <h2 style="font-size:20px;font-weight:700;margin-bottom:16px">Submit Exam?</h2>
    ${unanswered > 0
      ? `<div class="alert alert-warning"><i class="fas fa-exclamation-triangle"></i>
          <span>You have <strong>${unanswered} unanswered</strong> question(s). These will be marked incorrect.</span></div>`
      : `<div class="alert alert-success"><i class="fas fa-check-circle"></i>
          <span>All ${examState.questions.length} questions answered. Ready to submit!</span></div>`}
    <div class="flex-center gap-3 mt-6">
      <button class="btn btn-danger" onclick="closeModal();submitExam()">
        <i class="fas fa-paper-plane"></i> Yes, Submit Now
      </button>
      <button class="btn btn-outline" onclick="closeModal()">Continue Reviewing</button>
    </div>`);
};

window.submitExam = function() {
  clearInterval(examState.timer);
  const { questions, answers, examId, exam } = examState;
  const score = answers.filter((a, i) => a === questions[i].answer).length;
  const total = questions.length;
  const pct = Math.round(score / total * 100);
  Store.saveExamResult(examId, { domain: exam.domain, score, total, pct, answers: [...answers] });
  renderExamResults(score, total, pct, questions, answers, exam.title);
};

window.viewExamReview = function(examId) {
  const r = (Store.get().examResults || {})[examId];
  const exam = EXAM_DATA.find(e => e.id === examId);
  if (!r || !exam) return;
  renderExamResults(r.score, r.total, r.pct, exam.questions, r.answers || [], exam.title);
};

function renderExamResults(score, total, pct, questions, answers, title) {
  const grade = pct >= 80 ? 'excellent' : pct >= 70 ? 'good' : pct >= 55 ? 'average' : 'poor';
  const gradeText = pct >= 80 ? '🎉 Outstanding!' : pct >= 70 ? '✅ Passed!' : pct >= 55 ? '📚 Almost There' : '⚠️ Needs More Work';
  const gradeMsg = pct >= 80
    ? 'Excellent performance! You are well prepared for this domain.'
    : pct >= 70
    ? 'Good result — above the 700/1000 passing threshold. Keep reviewing weak spots.'
    : pct >= 55
    ? 'Close but not there yet. Focus on incorrect questions and re-read those module sections.'
    : 'This domain needs significant more study time. Revisit the course modules and retry.';

  const domBreak = {};
  questions.forEach((q, i) => {
    const d = q.domain || 'General';
    if (!domBreak[d]) domBreak[d] = { correct: 0, total: 0 };
    domBreak[d].total++;
    if (answers[i] === q.answer) domBreak[d].correct++;
  });

  const reviewRows = questions.map((q, i) => {
    const correct = answers[i] === q.answer;
    const yourAns = answers[i] !== null ? q.options[answers[i]] : '<em style="color:var(--text-muted)">Not answered</em>';
    return `<tr>
      <td style="font-weight:600;color:var(--text-muted)">${i + 1}</td>
      <td style="font-size:13px;max-width:260px">${q.q.substring(0, 90)}${q.q.length > 90 ? '…' : ''}</td>
      <td style="font-size:12px;color:${correct ? '#4caf50' : 'var(--azure-red)'}">${yourAns}</td>
      <td style="font-size:12px;color:#4caf50">${q.options[q.answer]}</td>
      <td><span class="badge ${correct ? 'badge-green' : 'badge-red'}">${correct ? '✓' : '✗'}</span></td>
    </tr>
    <tr>
      <td colspan="5" style="padding:0 14px 12px;font-size:12px;color:var(--text-muted);background:rgba(0,120,212,.04)">
        <strong style="color:var(--azure-blue)">💡 Explanation:</strong> ${q.explanation}
      </td>
    </tr>`;
  }).join('');

  document.getElementById('page-container').innerHTML = `
    <div class="fade-in results-container">
      <div class="page-header">
        <div class="page-title">Exam Results — ${title}</div>
        <div class="page-subtitle">${new Date().toLocaleDateString('en-GB', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</div>
      </div>
      <div class="card text-center mb-6">
        <div class="score-circle ${grade}" style="margin:0 auto 20px">
          ${pct}%
          <div class="score-label">${score}/${total}</div>
        </div>
        <div style="font-size:24px;font-weight:700;margin-bottom:8px">${gradeText}</div>
        <div style="font-size:14px;color:var(--text-secondary);max-width:520px;margin:0 auto 24px">${gradeMsg}</div>
        <div class="grid-4" style="max-width:600px;margin:0 auto 24px">
          <div class="result-stat"><div class="result-stat-value green">${score}</div><div class="result-stat-label">Correct</div></div>
          <div class="result-stat"><div class="result-stat-value red">${total - score}</div><div class="result-stat-label">Wrong</div></div>
          <div class="result-stat"><div class="result-stat-value blue">${pct}%</div><div class="result-stat-label">Score</div></div>
          <div class="result-stat"><div class="result-stat-value ${pct >= 70 ? 'green' : 'red'}">${pct >= 70 ? 'PASS' : 'FAIL'}</div><div class="result-stat-label">Status</div></div>
        </div>
        <div class="flex-center gap-3" style="justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="Router.navigate('exam')"><i class="fas fa-list"></i> All Exams</button>
          <button class="btn btn-teal" onclick="Router.navigate('performance')"><i class="fas fa-chart-line"></i> Performance</button>
          <button class="btn btn-purple" onclick="Router.navigate('readiness')"><i class="fas fa-bullseye"></i> Exam Readiness</button>
        </div>
      </div>
      <div class="card">
        <div class="card-title"><i class="fas fa-clipboard-list"></i> Full Question Review with Explanations</div>
        <div style="overflow-x:auto">
          <table class="review-table">
            <thead><tr><th>#</th><th>Question</th><th>Your Answer</th><th>Correct Answer</th><th>Result</th></tr></thead>
            <tbody>${reviewRows}</tbody>
          </table>
        </div>
      </div>
    </div>`;
}

function fmtTime(secs) {
  const m = Math.floor(secs / 60), s = secs % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}