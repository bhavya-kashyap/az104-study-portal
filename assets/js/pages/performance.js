Router.register('performance', () => {
  const data = Store.get();
  const quizResults = Object.values(data.quizResults || {});
  const examResults = Object.values(data.examResults || {});
  const allResults = [...quizResults, ...examResults].sort((a, b) => new Date(a.date) - new Date(b.date));
  const domScores = Store.getDomainScores();
  const prog = Store.getProgress();

  const avgAll = allResults.length
    ? Math.round(allResults.reduce((s, r) => s + r.pct, 0) / allResults.length)
    : 0;

  const trend = allResults.slice(-7).map((r, i) => ({
    label: new Date(r.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' }),
    val: r.pct
  }));

  const trendBars = trend.length
    ? trend.map(t => `
        <div class="bar-item">
          <div class="bar-value">${t.val}%</div>
          <div class="bar-fill ${t.val >= 70 ? 'green' : t.val >= 50 ? 'yellow' : 'red'}"
            style="height:${t.val}%;background:${t.val >= 70 ? 'var(--azure-green)' : t.val >= 50 ? 'var(--azure-yellow)' : 'var(--azure-red)'}"></div>
          <div class="bar-label">${t.label}</div>
        </div>`).join('')
    : '<p style="color:var(--text-muted);font-size:14px;padding:20px">No data yet — take quizzes to see your trend!</p>';

  const domainRows = COURSE_DATA.domains.map(d => {
    const sc = domScores[d.id];
    const display = sc !== null ? sc : 0;
    const cls = sc === null ? 'gray' : sc >= 80 ? 'green' : sc >= 60 ? 'yellow' : 'red';
    const label = sc === null ? 'No data' : `${sc}%`;
    return `<div class="domain-row">
      <div class="domain-name">
        <i class="fas ${d.icon} ${d.color}" style="margin-right:8px"></i>${d.name}
      </div>
      <div class="domain-bar-wrap">
        <div class="progress-wrap" style="margin:0">
          <div class="progress-fill ${cls}" style="width:${display}%"></div>
        </div>
      </div>
      <div class="domain-score" style="color:${sc===null?'var(--text-muted)':sc>=70?'#4caf50':'var(--azure-red)'}">
        ${label}
      </div>
    </div>`;
  }).join('');

  const quizHistoryRows = quizResults
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 15)
    .map(r => {
      const dom = COURSE_DATA.domains.find(d => d.id === r.domain);
      const cls = r.pct >= 80 ? 'badge-green' : r.pct >= 60 ? 'badge-yellow' : 'badge-red';
      return `<tr>
        <td>${new Date(r.date).toLocaleDateString()}</td>
        <td>${dom ? dom.name : r.domain}</td>
        <td>${r.score}/${r.total}</td>
        <td><span class="badge ${cls}">${r.pct}%</span></td>
        <td style="color:${r.pct>=70?'#4caf50':'var(--azure-red)'}">${r.pct >= 70 ? '✅ Pass' : '❌ Below target'}</td>
      </tr>`;
    }).join('') || `<tr><td colspan="5" style="color:var(--text-muted);text-align:center;padding:20px">No quizzes taken yet</td></tr>`;

  const examHistoryRows = examResults
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(r => {
      const exam = EXAM_DATA.find(e => e.id === r.examId) || {};
      const cls = r.pct >= 70 ? 'badge-green' : r.pct >= 55 ? 'badge-yellow' : 'badge-red';
      return `<tr>
        <td>${new Date(r.date).toLocaleDateString()}</td>
        <td style="font-size:13px">${exam.title || r.examId}</td>
        <td>${r.score}/${r.total}</td>
        <td><span class="badge ${cls}">${r.pct}%</span></td>
        <td style="color:${r.pct>=70?'#4caf50':'var(--azure-red)'}">${r.pct >= 70 ? '✅ Pass' : '❌ Fail'}</td>
      </tr>`;
    }).join('') || `<tr><td colspan="5" style="color:var(--text-muted);text-align:center;padding:20px">No exams taken yet</td></tr>`;

  const weakDomains = COURSE_DATA.domains.filter(d => {
    const sc = domScores[d.id];
    return sc !== null && sc < 70;
  });
  const strongDomains = COURSE_DATA.domains.filter(d => {
    const sc = domScores[d.id];
    return sc !== null && sc >= 80;
  });

  const feedbackHtml = `
    ${weakDomains.length ? `
      <div class="alert alert-warning mb-4"><i class="fas fa-exclamation-triangle"></i>
        <div><strong>Areas Needing Attention:</strong><br/>
        ${weakDomains.map(d => `<span class="badge badge-yellow" style="margin:4px 4px 0 0">${d.name} — ${domScores[d.id]}%</span>`).join('')}
        <br/><small style="display:block;margin-top:8px">Revisit course modules and take additional quizzes in these domains.</small>
        </div>
      </div>` : ''}
    ${strongDomains.length ? `
      <div class="alert alert-success mb-4"><i class="fas fa-check-circle"></i>
        <div><strong>Strong Domains — Keep it up:</strong><br/>
        ${strongDomains.map(d => `<span class="badge badge-green" style="margin:4px 4px 0 0">${d.name} — ${domScores[d.id]}%</span>`).join('')}
        </div>
      </div>` : ''}
    ${allResults.length === 0 ? `
      <div class="alert alert-info"><i class="fas fa-info-circle"></i>
        <span>No performance data yet. Complete quizzes and exams to see your analysis here.</span>
      </div>` : ''}`;

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-chart-line blue"></i> Performance Analytics</div>
      <div class="page-subtitle">Your complete quiz and exam history with domain-level analysis</div>
    </div>

    <div class="grid-4">
      <div class="stat-card blue">
        <div class="stat-icon"><i class="fas fa-percentage"></i></div>
        <div class="stat-value">${avgAll}%</div>
        <div class="stat-label">Overall Average</div>
      </div>
      <div class="stat-card green">
        <div class="stat-icon"><i class="fas fa-question-circle"></i></div>
        <div class="stat-value">${quizResults.length}</div>
        <div class="stat-label">Quizzes Taken</div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon"><i class="fas fa-graduation-cap"></i></div>
        <div class="stat-value">${examResults.length}</div>
        <div class="stat-label">Exams Taken</div>
      </div>
      <div class="stat-card teal">
        <div class="stat-icon"><i class="fas fa-calendar-check"></i></div>
        <div class="stat-value">${prog.pct}%</div>
        <div class="stat-label">Course Complete</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><i class="fas fa-chart-bar"></i> Score Trend (Last 7 Sessions)</div>
        <div style="display:flex;align-items:flex-end;gap:10px;height:180px;padding-bottom:30px">
          ${trendBars}
        </div>
      </div>
      <div class="card">
        <div class="card-title"><i class="fas fa-brain"></i> Performance Feedback</div>
        ${feedbackHtml}
      </div>
    </div>

    <div class="card mb-6">
      <div class="card-title"><i class="fas fa-layer-group"></i> Domain Score Breakdown</div>
      ${domainRows}
      <div class="alert alert-info mt-4" style="margin-bottom:0"><i class="fas fa-info-circle"></i>
        <span>Target: <strong>70%+ per domain</strong> for exam readiness. Weights: D1 (20-25%), D3 (20-25%), D2 (15-20%), D4 (15-20%), D5 (10-15%).</span>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><i class="fas fa-question-circle"></i> Quiz History</div>
        <div style="overflow-x:auto">
          <table class="review-table">
            <thead><tr><th>Date</th><th>Domain</th><th>Score</th><th>%</th><th>Status</th></tr></thead>
            <tbody>${quizHistoryRows}</tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-title"><i class="fas fa-graduation-cap"></i> Exam History</div>
        <div style="overflow-x:auto">
          <table class="review-table">
            <thead><tr><th>Date</th><th>Exam</th><th>Score</th><th>%</th><th>Status</th></tr></thead>
            <tbody>${examHistoryRows}</tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title"><i class="fas fa-download"></i> Reset Data</div>
      <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">
        Clear all quiz/exam data to start fresh. Course progress will also be reset.
      </p>
      <button class="btn btn-danger" onclick="confirmReset()">
        <i class="fas fa-trash"></i> Reset All Progress
      </button>
    </div>
  </div>`;
});

window.confirmReset = function() {
  openModal(`
    <h2 style="font-size:20px;font-weight:700;margin-bottom:12px">⚠️ Reset All Progress?</h2>
    <p style="color:var(--text-secondary);margin-bottom:20px">
      This will permanently delete all quiz results, exam scores, and completion records.
      This cannot be undone.
    </p>
    <div class="flex-center gap-3">
      <button class="btn btn-danger" onclick="localStorage.removeItem(Store.KEY);closeModal();Router.navigate('dashboard')">
        <i class="fas fa-trash"></i> Yes, Reset Everything
      </button>
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
    </div>`);
};