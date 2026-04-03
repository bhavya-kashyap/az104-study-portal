Router.register('schedule', () => {
  const data = Store.get();
  const completed = data.completedDays || [];
  const today = new Date().toISOString().split('T')[0];
  const weeks = [];
  for (let w = 0; w < 9; w++) {
    weeks.push(COURSE_DATA.schedule.slice(w * 7, (w + 1) * 7));
  }
  const weekHeaders = [
    'Week 1: Apr 3–9 | Domain 1 Foundations',
    'Week 2: Apr 10–16 | D1 Deep Dive + D2 Start',
    'Week 3: Apr 17–23 | Domain 2 + Compute Intro',
    'Week 4: Apr 24–30 | Domain 3 Deep Dive',
    'Week 5: May 1–7 | Compute Exam + Networking Start',
    'Week 6: May 8–14 | Networking Deep Dive',
    'Week 7: May 15–21 | Networking Exam + Domain 5',
    'Week 8: May 22–28 | Monitor + Full Revision',
    'Week 9 (Final): May 29–Jun 1 | Mock Exams & Final Prep'
  ];
  const domColorMap = { D1:'blue', D2:'teal', D3:'purple', D4:'yellow', D5:'green', ALL:'red' };

  const weekHtml = weeks.map((week, wi) => {
    const cells = week.map(d => {
      const isToday  = d.date === today;
      const isDone   = completed.includes(d.day);
      const isPast   = new Date(d.date) < new Date(today) && !isToday;
      const isWeekend= d.type === 'weekend';
      const isExam   = d.isExam;
      let cls = 'day-cell';
      if (isToday)   cls += ' today';
      else if (isDone) cls += ' completed';
      else if (isPast) cls += ' past';
      if (isWeekend) cls += ' weekend';
      if (isExam)    cls += ' exam-day';
      const col  = domColorMap[d.domain] || 'blue';
      const icon = isDone ? '✅' : isExam ? '📝' : isToday ? '📍' : '';
      return `<div class="${cls}" onclick="showDayDetail(${d.day})">
        <div class="day-header">${d.dow}</div>
        <div class="day-number" style="color:var(--azure-${col})">${icon || d.day}</div>
        <div class="day-topic">${d.topic.substring(0,42)}${d.topic.length>42?'…':''}</div>
        <div class="day-hours">${d.hours}h${isExam?' 📝':''}</div>
      </div>`;
    });
    while (cells.length < 7) cells.push('<div class="day-cell" style="opacity:.15;cursor:default"></div>');
    return `<div class="card mb-6">
      <div class="card-title"><i class="fas fa-calendar-week"></i>${weekHeaders[wi]}</div>
      <div class="week-grid">${cells.join('')}</div>
    </div>`;
  }).join('');

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-calendar-alt blue"></i> Study Schedule</div>
      <div class="page-subtitle">60-Day Plan: Apr 3 → Jun 1, 2026 | Exam: June 2, 2026</div>
    </div>
    <div class="alert alert-info"><i class="fas fa-info-circle"></i>
      <span><strong>Weekdays:</strong> 1.5 hrs study + 15-min quiz (≤2 hr total) &nbsp;|&nbsp;
      <strong>Weekends:</strong> 3 hrs — includes practice exams. Click any day for full details.</span>
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

window.showDayDetail = function(dayNum) {
  const d = COURSE_DATA.schedule.find(s => s.day === dayNum);
  if (!d) return;
  const domain = COURSE_DATA.domains.find(dm => dm.id === d.domain);
  const isDone = (Store.get().completedDays || []).includes(dayNum);
  openModal(`
    <div class="flex-between mb-4">
      <h2 style="font-size:20px;font-weight:700">Day ${d.day} — ${d.dow}, ${d.date}</h2>
      <button onclick="closeModal()" style="background:none;border:none;color:var(--text-muted);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div class="badge badge-blue mb-4">${domain ? domain.name : 'All Domains'} &nbsp;|&nbsp; ${d.hours} hours</div>
    <h3 style="font-size:16px;font-weight:600;margin:16px 0 8px">${d.topic}</h3>
    <div class="alert ${d.isExam ? 'alert-warning' : 'alert-info'}">
      <i class="fas ${d.isExam ? 'fa-graduation-cap' : 'fa-question-circle'}"></i>
      <span>${d.isExam
        ? 'This is a <strong>Weekend Exam Day</strong>. Take the practice exam after your study session.'
        : 'This is a <strong>Weekday</strong>. Study for 1.5 hrs, then take the 15-min interactive quiz.'}</span>
    </div>
    <div class="flex-center gap-3 mt-6" style="flex-wrap:wrap">
      ${isDone
        ? '<span class="badge badge-green" style="font-size:14px;padding:8px 16px">✅ Already Completed</span>'
        : `<button class="btn btn-success" onclick="Store.markDayComplete(${dayNum});closeModal();Router.navigate('schedule')">
              <i class="fas fa-check"></i> Mark as Complete</button>`}
      ${d.isExam
        ? `<button class="btn btn-primary" onclick="closeModal();Router.navigate('exam')"><i class="fas fa-graduation-cap"></i> Go to Exam</button>`
        : `<button class="btn btn-primary" onclick="closeModal();Router.navigate('quiz')"><i class="fas fa-question-circle"></i> Take Quiz</button>`}
    </div>
  `);
};