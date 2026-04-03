Router.register('schedule', () => {
  const user = Auth.getUser();
  const schedule = COURSE_DATA.getSchedule(user ? user.startDate : null);
  const startDateObj = new Date((schedule[0].date) + 'T00:00:00');
  const endDateObj   = new Date((schedule[59].date) + 'T00:00:00');
  const fmtDate = d => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const examDateDisplay = user && user.examDate
    ? new Date(user.examDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : fmtDate(endDateObj);
  const data = Store.get();
  const completed = data.completedDays || [];
  const today = new Date().toISOString().split('T')[0];

  // Split into 9 weeks and build dynamic week headers
  const weeks = [];
  for (let w = 0; w < 9; w++) {
    weeks.push(schedule.slice(w * 7, (w + 1) * 7));
  }
  const weekDomainLabels = [
    'Domain 1 Foundations', 'D1 Deep Dive + D2 Start', 'Domain 2 + Compute Intro',
    'Domain 3 Deep Dive', 'Compute Exam + Networking Start', 'Networking Deep Dive',
    'Networking Exam + Domain 5', 'Monitor + Full Revision', 'Mock Exams & Final Prep'
  ];
  const domColorMap = { D1:'blue', D2:'teal', D3:'purple', D4:'yellow', D5:'green', ALL:'red' };

  function weekRangeLabel(week, wi) {
    if (!week.length) return `Week ${wi + 1}`;
    const first = new Date(week[0].date + 'T00:00:00');
    const last  = new Date(week[week.length - 1].date + 'T00:00:00');
    const fmtShort = d => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `Week ${wi + 1}: ${fmtShort(first)}–${fmtShort(last)} | ${weekDomainLabels[wi] || ''}`;
  }

  const weekHtml = weeks.map((week, wi) => {
    const cells = week.map(d => {
      const isToday   = d.date === today;
      const isDone    = completed.includes(d.day);
      const isPast    = new Date(d.date) < new Date(today) && !isToday;
      const isWeekend = d.type === 'weekend';
      const isExam    = d.isExam;
      let cls = 'day-cell';
      if (isToday)    cls += ' today';
      else if (isDone) cls += ' completed';
      else if (isPast) cls += ' past';
      if (isWeekend)  cls += ' weekend';
      if (isExam)     cls += ' exam-day';
      const col  = domColorMap[d.domain] || 'blue';
      const icon = isDone ? '✅' : isExam ? '📝' : isToday ? '📍' : '';
      return `<div class="${cls}" onclick="showDayDetail(${d.day})">
        <div class="day-header">${d.dow} ${new Date(d.date + 'T00:00:00').getDate()}</div>
        <div class="day-number" style="color:var(--azure-${col})">${icon || d.day}</div>
        <div class="day-topic">${d.topic.substring(0,42)}${d.topic.length>42?'…':''}</div>
        <div class="day-hours">${isWeekend ? '2× content' : 'daily lesson'}${isExam?' 📝':''}</div>
      </div>`;
    });
    while (cells.length < 7) cells.push('<div class="day-cell" style="opacity:.15;cursor:default"></div>');
    return `<div class="card mb-6">
      <div class="card-title"><i class="fas fa-calendar-week"></i>${weekRangeLabel(week, wi)}</div>
      <div class="week-grid">${cells.join('')}</div>
    </div>`;
  }).join('');

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-calendar-alt blue"></i> Study Schedule</div>
      <div class="page-subtitle">60-Day Plan: ${fmtDate(startDateObj)} → ${fmtDate(endDateObj)} | Exam: ${examDateDisplay}</div>
    </div>
    <div class="alert alert-info"><i class="fas fa-info-circle"></i>
      <span><strong>Weekdays:</strong> one lesson per day &nbsp;|&nbsp;
      <strong>Weekends:</strong> two lessons (double content). Click any day to study and take the quiz.
      Pass with <strong>≥ 90%</strong> to mark the day complete.</span>
    </div>
    <div class="flex-center gap-3 mb-6" style="flex-wrap:wrap">
      <span style="font-size:13px;color:var(--text-secondary)">Legend:</span>
      <span class="badge badge-blue">📍 Today</span>
      <span class="badge badge-green">✅ Completed</span>
      <span class="badge badge-yellow">📝 Exam Day</span>
      <span class="badge badge-purple">🌙 Weekend</span>
      <span class="badge badge-gray">Past Day</span>
    </div>
    ${weekHtml}
  </div>`;
});

// Helper: check if user passed the domain quiz with >= 90%
function hasPassedDomainQuiz(domainId) {
  const results = Store.get().quizResults || {};
  return Object.values(results).some(r => r.domain === domainId && r.pct >= 90);
}

// Helper: check if user passed any exam with >= 90%
function hasPassedExam() {
  const results = Store.get().examResults || {};
  return Object.values(results).some(r => r.pct >= 90);
}

window.showDayDetail = function(dayNum) {
  const user = Auth.getUser();
  const schedule = COURSE_DATA.getSchedule(user ? user.startDate : null);
  const d = schedule.find(s => s.day === dayNum);
  if (!d) return;
  const domain = COURSE_DATA.domains.find(dm => dm.id === d.domain);
  const isDone = (Store.get().completedDays || []).includes(dayNum);
  const hasContent = window.STUDY_LESSONS && window.STUDY_LESSONS[dayNum];

  // Determine if the quiz gate is satisfied
  const domainId = d.domain === 'ALL' ? null : d.domain;
  const quizPassed = d.isExam
    ? hasPassedExam()
    : (domainId ? hasPassedDomainQuiz(domainId) : true);

  const dateDisplay = new Date(d.date + 'T00:00:00').toLocaleDateString('en-US',
    { weekday:'long', month:'long', day:'numeric', year:'numeric' });

  const markCompleteBtn = isDone
    ? '<span class="badge badge-green" style="font-size:14px;padding:8px 16px">✅ Already Completed</span>'
    : quizPassed
      ? `<button class="btn btn-success" onclick="Store.markDayComplete(${dayNum});closeModal();Router.navigate('schedule')">
            <i class="fas fa-check"></i> Mark as Complete</button>`
      : `<button class="btn btn-outline" disabled title="Pass the quiz with ≥90% first" style="opacity:.6;cursor:not-allowed">
            <i class="fas fa-lock"></i> Complete after Quiz</button>`;

  openModal(`
    <div class="flex-between mb-4">
      <h2 style="font-size:20px;font-weight:700">Day ${d.day} — ${dateDisplay}</h2>
      <button onclick="closeModal()" style="background:none;border:none;color:var(--text-muted);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div class="badge badge-blue mb-4">${domain ? domain.name : 'All Domains'} &nbsp;|&nbsp; ${d.type === 'weekend' ? '2× content' : 'Daily lesson'}</div>
    <h3 style="font-size:16px;font-weight:600;margin:16px 0 8px">${d.topic}</h3>
    <div class="alert ${d.isExam ? 'alert-warning' : 'alert-info'}">
      <i class="fas ${d.isExam ? 'fa-graduation-cap' : 'fa-book-open'}"></i>
      <span>${d.isExam
        ? 'This is an <strong>Exam Day</strong>. Complete the practice exam after reviewing your study material.'
        : 'Study the material for this day, then take the domain quiz. You need <strong>≥ 90%</strong> to mark complete.'}</span>
    </div>
    ${!quizPassed && !isDone ? `<div class="alert alert-warning mt-3"><i class="fas fa-exclamation-triangle"></i>
      <span>Pass the <strong>${domain ? domain.name : ''} quiz with ≥ 90%</strong> to unlock day completion.</span></div>` : ''}
    <div class="flex-center gap-3 mt-6" style="flex-wrap:wrap">
      ${markCompleteBtn}
      ${hasContent
        ? `<button class="btn btn-teal" onclick="closeModal();window._studyDay=${dayNum};Router.navigate('study')"><i class="fas fa-book-open"></i> Study Material</button>`
        : `<button class="btn btn-teal" onclick="closeModal();Router.navigate('modules')"><i class="fas fa-book-open"></i> Course Modules</button>`}
      ${d.isExam
        ? `<button class="btn btn-primary" onclick="closeModal();Router.navigate('exam')"><i class="fas fa-graduation-cap"></i> Go to Exam</button>`
        : `<button class="btn btn-primary" onclick="closeModal();Router.navigate('quiz')"><i class="fas fa-question-circle"></i> Take Quiz</button>`}
    </div>
  `);
};