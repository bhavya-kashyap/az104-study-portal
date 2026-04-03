// Study viewer — renders per-day study material from STUDY_LESSONS
Router.register('study', () => {
  const dayNum = window._studyDay;
  if (!dayNum) {
    return `<div class="card fade-in">
      <div class="page-header">
        <div class="page-title"><i class="fas fa-book-open blue"></i> Study Material</div>
      </div>
      <div class="alert alert-info"><i class="fas fa-info-circle"></i>
        <span>No lesson selected. Navigate to the <a href="#" onclick="Router.navigate('schedule');return false">Schedule</a>
        and click a day to start studying.</span>
      </div>
    </div>`;
  }

  const user     = Auth.getUser();
  const schedule = COURSE_DATA.getSchedule(user ? user.startDate : null);
  const schedEntry = schedule.find(s => s.day === dayNum);
  const lesson   = (window.STUDY_LESSONS || {})[dayNum];
  const domain   = schedEntry ? COURSE_DATA.domains.find(d => d.id === schedEntry.domain) : null;

  if (!lesson) {
    return `<div class="fade-in">
      <div class="page-header">
        <div class="page-title"><i class="fas fa-book-open blue"></i> Day ${dayNum}${schedEntry ? ' — ' + schedEntry.topic : ''}</div>
        <div class="page-subtitle">${domain ? domain.name : 'Study Session'}</div>
      </div>
      <div class="alert alert-info"><i class="fas fa-info-circle"></i>
        <span>Detailed study notes for this day are coming in the next update.
        You can review the full domain material in <a href="#" onclick="Router.navigate('modules');return false">Course Modules</a>.</span>
      </div>
      <div class="flex-center gap-3 mt-6" style="flex-wrap:wrap">
        <button class="btn btn-primary" onclick="Router.navigate('quiz')"><i class="fas fa-question-circle"></i> Take Domain Quiz</button>
        <button class="btn btn-outline" onclick="Router.navigate('modules')"><i class="fas fa-book-open"></i> Course Modules</button>
        <button class="btn btn-outline" onclick="Router.navigate('schedule')"><i class="fas fa-calendar-alt"></i> Back to Schedule</button>
      </div>
    </div>`;
  }

  // Build prev/next navigation
  const prevDay = dayNum > 1 ? dayNum - 1 : null;
  const nextDay = dayNum < 60 ? dayNum + 1 : null;
  const prevLesson = prevDay && window.STUDY_LESSONS && window.STUDY_LESSONS[prevDay];
  const nextLesson = nextDay && window.STUDY_LESSONS && window.STUDY_LESSONS[nextDay];

  const sectionHtml = lesson.sections.map((s, i) => `
    <div style="margin-bottom:16px;border:1px solid var(--border);border-radius:var(--radius-sm);overflow:hidden">
      <div onclick="StudyViewer.toggleSection(${i})"
        style="padding:14px 18px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;background:var(--bg-input);font-weight:600;font-size:14px">
        <span><i class="fas fa-graduation-cap" style="color:var(--azure-blue);margin-right:8px"></i>${s.title}</span>
        <i class="fas fa-chevron-down" id="sv-chev-${i}" style="color:var(--text-muted);transition:transform .2s"></i>
      </div>
      <div id="sv-sec-${i}" style="display:none;padding:20px 22px;font-size:14px;line-height:1.8;color:var(--text-secondary)">
        ${s.content}
      </div>
    </div>`).join('');

  const dateDisplay = schedEntry
    ? new Date(schedEntry.date + 'T00:00:00').toLocaleDateString('en-US',
        { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    : '';

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-book-open blue"></i> Day ${dayNum} — ${lesson.title}</div>
      <div class="page-subtitle">${domain ? domain.name : lesson.domain}${dateDisplay ? ' &nbsp;|&nbsp; ' + dateDisplay : ''}</div>
    </div>

    <div class="alert alert-success" style="margin-bottom:20px"><i class="fas fa-lightbulb"></i>
      <span>Read each section carefully, then <strong>take the domain quiz</strong> and score
      <strong>≥ 90%</strong> to mark this day as complete.</span>
    </div>

    <div class="flex-between mb-4" style="flex-wrap:wrap;gap:8px">
      <div class="flex-center gap-2">
        <button class="btn btn-outline btn-sm" onclick="StudyViewer.expandAll()"><i class="fas fa-expand-alt"></i> Expand All</button>
        <button class="btn btn-outline btn-sm" onclick="StudyViewer.collapseAll()"><i class="fas fa-compress-alt"></i> Collapse All</button>
      </div>
      ${lesson.msLearnUrl ? `<a href="${lesson.msLearnUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
        <i class="fas fa-external-link-alt"></i> Microsoft Learn</a>` : ''}
    </div>

    ${sectionHtml}

    <div class="card mt-6">
      <div class="card-title"><i class="fas fa-arrow-right blue"></i> Next Steps</div>
      <div class="flex-center gap-3" style="flex-wrap:wrap">
        <button class="btn btn-primary" onclick="closeModal && closeModal(); Router.navigate('quiz')">
          <i class="fas fa-question-circle"></i> Take ${domain ? domain.name : 'Domain'} Quiz</button>
        ${schedEntry && schedEntry.isExam
          ? `<button class="btn btn-teal" onclick="Router.navigate('exam')"><i class="fas fa-graduation-cap"></i> Go to Exam</button>`
          : ''}
        <button class="btn btn-outline" onclick="Router.navigate('schedule')">
          <i class="fas fa-calendar-alt"></i> Back to Schedule</button>
        ${nextLesson
          ? `<button class="btn btn-outline" onclick="window._studyDay=${nextDay};Router.navigate('study')">
              <i class="fas fa-arrow-right"></i> Day ${nextDay}</button>`
          : ''}
      </div>
    </div>

    <div class="flex-between mt-4" style="font-size:13px;color:var(--text-muted)">
      ${prevLesson
        ? `<button class="btn btn-outline btn-sm" onclick="window._studyDay=${prevDay};Router.navigate('study')">
            <i class="fas fa-arrow-left"></i> Day ${prevDay}</button>`
        : '<span></span>'}
      ${nextLesson
        ? `<button class="btn btn-outline btn-sm" onclick="window._studyDay=${nextDay};Router.navigate('study')">
            Day ${nextDay} <i class="fas fa-arrow-right"></i></button>`
        : '<span></span>'}
    </div>
  </div>`;
});

// Study viewer helpers
window.StudyViewer = {
  _sectionCount() {
    let i = 0;
    while (document.getElementById('sv-sec-' + i)) i++;
    return i;
  },
  toggleSection(idx) {
    const el   = document.getElementById('sv-sec-' + idx);
    const chev = document.getElementById('sv-chev-' + idx);
    if (!el) return;
    const open = el.style.display === 'block';
    el.style.display = open ? 'none' : 'block';
    if (chev) chev.style.transform = open ? '' : 'rotate(180deg)';
  },
  expandAll() {
    const n = this._sectionCount();
    for (let i = 0; i < n; i++) {
      const el   = document.getElementById('sv-sec-' + i);
      const chev = document.getElementById('sv-chev-' + i);
      if (el)   el.style.display = 'block';
      if (chev) chev.style.transform = 'rotate(180deg)';
    }
  },
  collapseAll() {
    const n = this._sectionCount();
    for (let i = 0; i < n; i++) {
      const el   = document.getElementById('sv-sec-' + i);
      const chev = document.getElementById('sv-chev-' + i);
      if (el)   el.style.display = 'none';
      if (chev) chev.style.transform = '';
    }
  }
};
