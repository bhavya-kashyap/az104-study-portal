Router.register('readiness', () => {
  const data = Store.get();
  const prog = Store.getProgress();
  const domScores = Store.getDomainScores();
  const quizResults = Object.values(data.quizResults || {});
  const examResults = Object.values(data.examResults || {});
  const allScores = [...quizResults, ...examResults].map(r => r.pct);
  const avgScore = allScores.length
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
    : 0;

  const today = new Date();
  const examDate = new Date('2026-06-02');
  const daysLeft = Math.max(0, Math.ceil((examDate - today) / 86400000));

  // Readiness scoring algorithm (weighted)
  const weights = {
    courseProgress: 0.25,
    avgScore: 0.35,
    domainCoverage: 0.25,
    examsTaken: 0.15
  };

  const domainCoverage = COURSE_DATA.domains.filter(d => domScores[d.id] !== null).length / COURSE_DATA.domains.length;
  const examsTakenPct = Math.min(1, examResults.length / EXAM_DATA.length);
  const avgScoreNorm = avgScore / 100;
  const courseProgressNorm = prog.pct / 100;

  const readinessPct = Math.round(
    (courseProgressNorm * weights.courseProgress +
     avgScoreNorm * weights.avgScore +
     domainCoverage * weights.domainCoverage +
     examsTakenPct * weights.examsTaken) * 100
  );

  const readinessLevel =
    readinessPct >= 80 ? { label: 'Exam Ready! 🎉', color: '#4caf50', desc: 'Your performance indicates strong readiness for AZ-104. Keep practicing mock exams and reviewing weak spots.', advice: 'Take both full mock exams this weekend. Focus on time management — 1.5 min/question average.' }
    : readinessPct >= 60 ? { label: 'On Track ✅', color: 'var(--azure-blue)', desc: 'Good progress! You are on track but still need to strengthen some domains and take more practice exams.', advice: 'Identify and revisit your lowest-scoring domains. Complete all weekend exams before June 2.' }
    : readinessPct >= 40 ? { label: 'Building Up 📚', color: 'var(--azure-yellow)', desc: 'You have covered some ground but need more consistency. Increase daily study time if possible.', advice: 'Do not skip quiz days. Re-read module notes for domains below 60%. Consistency is key.' }
    : { label: 'Needs Focus ⚠️', color: 'var(--azure-red)', desc: 'Early stage or insufficient data. Start completing daily quizzes and weekend exams consistently.', advice: 'Begin with Domain 1 (Identities) and Domain 3 (Compute) — they carry the most exam weight.' };

  const componentRows = [
    { label: 'Course Completion', value: prog.pct, weight: '25%', tip: `${prog.completed} of ${prog.total} days completed` },
    { label: 'Average Quiz/Exam Score', value: avgScore, weight: '35%', tip: `Based on ${allScores.length} attempts — target 70%+` },
    { label: 'Domain Coverage', value: Math.round(domainCoverage * 100), weight: '25%', tip: `${COURSE_DATA.domains.filter(d => domScores[d.id] !== null).length} of 5 domains attempted` },
    { label: 'Exams Completed', value: Math.round(examsTakenPct * 100), weight: '15%', tip: `${examResults.length} of ${EXAM_DATA.length} practice exams taken` },
  ];

  const componentHtml = componentRows.map(c => {
    const cls = c.value >= 80 ? 'green' : c.value >= 60 ? 'blue' : c.value >= 40 ? 'yellow' : 'red';
    return `<div class="domain-row">
      <div class="domain-name">
        <div style="font-weight:600;font-size:13px">${c.label}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${c.tip}</div>
      </div>
      <div class="domain-bar-wrap">
        <div class="progress-wrap" style="margin:0">
          <div class="progress-fill ${cls}" style="width:${c.value}%"></div>
        </div>
      </div>
      <div style="flex:0 0 80px;text-align:right;font-size:12px;color:var(--text-muted)">${c.weight} weight</div>
      <div class="domain-score" style="flex:0 0 50px;color:${c.value>=70?'#4caf50':'var(--azure-yellow)'}">
        ${c.value}%
      </div>
    </div>`;
  }).join('');

  const domainStatusHtml = COURSE_DATA.domains.map(d => {
    const sc = domScores[d.id];
    const status = sc === null ? 'not-started'
      : sc >= 80 ? 'strong'
      : sc >= 70 ? 'good'
      : sc >= 55 ? 'fair'
      : 'weak';
    const statusConfig = {
      'not-started': { badge: 'badge-gray',   icon: 'fa-circle',       label: 'Not Started',    advice: `Start studying ${d.name} and complete the quizzes.` },
      'strong':      { badge: 'badge-green',  icon: 'fa-check-circle', label: `Strong — ${sc}%`, advice: 'Maintain with periodic review.' },
      'good':        { badge: 'badge-blue',   icon: 'fa-thumbs-up',    label: `Good — ${sc}%`,   advice: 'Take one more quiz to push above 80%.' },
      'fair':        { badge: 'badge-yellow', icon: 'fa-exclamation',  label: `Fair — ${sc}%`,   advice: 'Revisit module notes and take 2–3 more quizzes.' },
      'weak':        { badge: 'badge-red',    icon: 'fa-times-circle', label: `Weak — ${sc}%`,   advice: 'Urgent: Re-study this domain fully. High priority.' },
    }[status];
    return `<div class="card" style="border-left:3px solid var(--azure-${d.color})">
      <div class="flex-between mb-3">
        <div class="flex-center gap-2">
          <i class="fas ${d.icon} ${d.color}"></i>
          <span style="font-weight:600;font-size:13px">${d.name}</span>
        </div>
        <span class="badge ${statusConfig.badge}"><i class="fas ${statusConfig.icon}" style="margin-right:4px"></i>${statusConfig.label}</span>
      </div>
      <div class="progress-wrap"><div class="progress-fill ${d.color}" style="width:${sc || 0}%"></div></div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:8px">
        <i class="fas fa-lightbulb" style="color:var(--azure-yellow);margin-right:4px"></i>${statusConfig.advice}
      </div>
      <div style="font-size:11px;color:var(--text-muted);margin-top:4px">Exam weight: ${d.weight}</div>
    </div>`;
  }).join('');

  const timeline = [
    { label: 'Week 1–2', task: 'Domain 1: Identity & Governance', done: prog.completed >= 8 },
    { label: 'Week 3',   task: 'Domain 2: Storage',               done: prog.completed >= 15 },
    { label: 'Week 4–5', task: 'Domain 3: Compute',               done: prog.completed >= 29 },
    { label: 'Week 6–7', task: 'Domain 4: Networking',            done: prog.completed >= 43 },
    { label: 'Week 7–8', task: 'Domain 5: Monitor & Backup',      done: prog.completed >= 50 },
    { label: 'Week 8–9', task: 'Full Revision + Mock Exams',      done: prog.completed >= 58 },
    { label: 'Jun 2',    task: '🎓 AZ-104 Exam Day!',             done: false },
  ];

  const timelineHtml = timeline.map((t, i) => `
    <div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:16px">
      <div style="flex-shrink:0;width:36px;height:36px;border-radius:50%;border:2px solid ${t.done ? 'var(--azure-green)' : i === timeline.findIndex(x => !x.done) ? 'var(--azure-blue)' : 'var(--border)'};
        background:${t.done ? 'rgba(16,124,16,.15)' : i === timeline.findIndex(x => !x.done) ? 'rgba(0,120,212,.15)' : 'var(--bg-input)'};
        display:flex;align-items:center;justify-content:center;font-size:14px">
        ${t.done ? '✅' : i === timeline.findIndex(x => !x.done) ? '📍' : '○'}
      </div>
      <div>
        <div style="font-weight:600;font-size:14px;color:${t.done ? '#4caf50' : 'var(--text-primary)'}">${t.task}</div>
        <div style="font-size:12px;color:var(--text-muted)">${t.label}</div>
      </div>
    </div>`).join('');

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-bullseye blue"></i> Exam Readiness Report</div>
      <div class="page-subtitle">Real-time analysis of your preparation for the AZ-104 exam on June 2, 2026</div>
    </div>

    <div class="card mb-6 text-center">
      <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;font-weight:600">Overall Exam Readiness Score</div>
      <div class="readiness-gauge" style="color:${readinessLevel.color}">${readinessPct}%</div>
      <div style="font-size:22px;font-weight:700;margin-bottom:10px;color:${readinessLevel.color}">${readinessLevel.label}</div>
      <div style="font-size:14px;color:var(--text-secondary);max-width:540px;margin:0 auto 20px">${readinessLevel.desc}</div>
      <div class="alert alert-info" style="max-width:600px;margin:0 auto;text-align:left">
        <i class="fas fa-lightbulb"></i>
        <span><strong>Copilot Recommendation:</strong> ${readinessLevel.advice}</span>
      </div>
      <div style="margin-top:20px;font-size:15px;color:var(--text-secondary)">
        <i class="fas fa-hourglass-half" style="color:var(--azure-yellow)"></i>
        <strong style="color:var(--text-primary)">${daysLeft}</strong> days remaining until your exam.
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><i class="fas fa-sliders-h"></i> Readiness Components</div>
        ${componentHtml}
      </div>
      <div class="card">
        <div class="card-title"><i class="fas fa-route"></i> Course Milestone Timeline</div>
        ${timelineHtml}
      </div>
    </div>

    <div class="card mb-6">
      <div class="card-title"><i class="fas fa-layer-group"></i> Domain-by-Domain Readiness</div>
      <div class="grid-3">${domainStatusHtml}</div>
    </div>

    <div class="card">
      <div class="card-title"><i class="fas fa-clipboard-check"></i> Pre-Exam Checklist</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        ${[
          ['Complete all 60 study days', prog.completed >= 60],
          ['Score 70%+ on all domain quizzes', Object.values(domScores).filter(v=>v!==null).every(v=>v>=70)],
          ['Take Domain 1 (Identity) exam', !!data.examResults?.WE1],
          ['Take Domain 2 (Storage) exam', !!data.examResults?.WE2],
          ['Take Domain 3 (Compute) exam', !!data.examResults?.WE4],
          ['Take Domain 4 (Networking) exam', !!data.examResults?.WE6],
          ['Take Domain 5 (Monitor) exam', !!data.examResults?.WE7],
          ['Complete Mock Exam 1 (60 Qs)', !!data.examResults?.MOCK1],
          ['Complete Mock Exam 2 (60 Qs)', !!data.examResults?.MOCK2],
          ['Score 75%+ on both Mock Exams', [data.examResults?.MOCK1, data.examResults?.MOCK2].every(e=>e&&e.pct>=75)],
        ].map(([task, done]) => `
          <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg-input);border-radius:var(--radius-sm);border-left:3px solid ${done?'var(--azure-green)':'var(--border)'}">
            <span style="font-size:16px">${done ? '✅' : '⬜'}</span>
            <span style="font-size:13px;color:${done?'#4caf50':'var(--text-secondary)'}">${task}</span>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
});