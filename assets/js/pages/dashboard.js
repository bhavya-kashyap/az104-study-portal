Router.register('dashboard', () => {
  const prog = Store.getProgress();
  const data = Store.get();
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const todaySchedule = COURSE_DATA.schedule.find(s => s.date === todayStr);
  const daysLeft = Math.ceil((new Date('2026-06-02') - today) / 86400000);
  const domScores = Store.getDomainScores();
  const avgScore = Object.values(domScores).filter(v=>v!==null);
  const avgPct = avgScore.length ? Math.round(avgScore.reduce((a,b)=>a+b,0)/avgScore.length) : 0;
  const quizCount = Object.keys(data.quizResults||{}).length;
  const examCount = Object.keys(data.examResults||{}).length;

  const domainCards = COURSE_DATA.domains.map(d => {
    const sc = domScores[d.id];
    const scLabel = sc !== null ? sc + '%' : 'Not started';
    const scClass = sc === null ? 'badge-gray' : sc >= 80 ? 'badge-green' : sc >= 60 ? 'badge-yellow' : 'badge-red';
    return `<div class="card" style="border-left:3px solid var(--azure-${d.color})">
      <div class="flex-between mb-4">
        <div class="flex-center gap-2"><i class="fas ${d.icon} ${d.color}"></i><span style="font-weight:600;font-size:14px">${d.name}</span></div>
        <span class="badge ${scClass}">${scLabel}</span>
      </div>
      <div class="progress-wrap"><div class="progress-fill ${d.color}" style="width:${sc||0}%"></div></div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:6px">Exam weight: ${d.weight}</div>
    </div>`;
  }).join('');

  const todayCard = todaySchedule ? `
    <div class="card" style="border:1px solid rgba(0,120,212,.4);background:rgba(0,120,212,.06)">
      <div class="card-title"><i class="fas fa-sun"></i>Today's Session — Day ${todaySchedule.day}</div>
      <div style="font-size:17px;font-weight:600;margin-bottom:10px">${todaySchedule.topic}</div>
      <div class="flex-center gap-3" style="flex-wrap:wrap">
        <span class="badge badge-blue"><i class="fas fa-clock"></i> ${todaySchedule.hours} hours</span>
        <span class="badge badge-purple">${COURSE_DATA.domains.find(d=>d.id===todaySchedule.domain)?.name || 'All Domains'}</span>
        ${todaySchedule.isExam ? '<span class="badge badge-yellow"><i class="fas fa-graduation-cap"></i> Exam Day</span>' : '<span class="badge badge-teal"><i class="fas fa-question-circle"></i> Quiz Day</span>'}
      </div>
      <div class="mt-4 flex-center gap-2">
        ${todaySchedule.isExam
          ? `<button class="btn btn-primary" onclick="Router.navigate('exam')"><i class="fas fa-graduation-cap"></i>Take Today's Exam</button>`
          : `<button class="btn btn-primary" onclick="Router.navigate('quiz')"><i class="fas fa-question-circle"></i>Take Daily Quiz</button>`}
        <button class="btn btn-outline" onclick="Store.markDayComplete(${todaySchedule.day});Router.navigate('dashboard')"><i class="fas fa-check"></i>Mark Complete</button>
      </div>
    </div>` : `<div class="card"><div class="card-title"><i class="fas fa-trophy"></i>All Days Scheduled!</div><p style="color:var(--text-secondary)">You've completed the schedule period. Review your performance and take the mock exams.</p></div>`;

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title">👋 Welcome back, Bhavya!</div>
      <div class="page-subtitle">AZ-104 Azure Administrator — 60-Day Study Portal</div>
    </div>
    <div class="grid-4">
      <div class="stat-card blue"><div class="stat-icon"><i class="fas fa-calendar-check"></i></div><div class="stat-value">${prog.completed}/${prog.total}</div><div class="stat-label">Days Completed</div></div>
      <div class="stat-card yellow"><div class="stat-icon"><i class="fas fa-hourglass-half"></i></div><div class="stat-value">${daysLeft}</div><div class="stat-label">Days Until Exam</div></div>
      <div class="stat-card green"><div class="stat-icon"><i class="fas fa-chart-pie"></i></div><div class="stat-value">${avgPct}%</div><div class="stat-label">Avg Quiz Score</div></div>
      <div class="stat-card purple"><div class="stat-icon"><i class="fas fa-fire"></i></div><div class="stat-value">${data.studyStreak||0}</div><div class="stat-label">Day Streak</div></div>
    </div>
    <div class="grid-2">
      ${todayCard}
      <div class="card">
        <div class="card-title"><i class="fas fa-tachometer-alt"></i>Overall Progress</div>
        <div style="font-size:48px;font-weight:800;color:var(--azure-blue);text-align:center;margin:16px 0">${prog.pct}%</div>
        <div class="progress-wrap" style="height:12px"><div class="progress-fill blue" style="width:${prog.pct}%"></div></div>
        <div class="flex-between mt-4" style="font-size:13px;color:var(--text-secondary)">
          <span><i class="fas fa-question-circle blue"></i> ${quizCount} Quizzes</span>
          <span><i class="fas fa-graduation-cap blue"></i> ${examCount} Exams</span>
          <span><i class="fas fa-clock blue"></i> ${data.totalHoursStudied||0}h Studied</span>
        </div>
      </div>
    </div>
    <div class="card mb-6">
      <div class="card-title"><i class="fas fa-layer-group"></i>Domain Progress Overview</div>
      <div class="grid-3">${domainCards}</div>
    </div>
    <div class="card">
      <div class="card-title"><i class="fas fa-bolt"></i>Quick Actions</div>
      <div class="flex-center gap-3" style="flex-wrap:wrap">
        <button class="btn btn-primary" onclick="Router.navigate('quiz')"><i class="fas fa-question-circle"></i>Daily Quiz</button>
        <button class="btn btn-teal" onclick="Router.navigate('exam')"><i class="fas fa-graduation-cap"></i>Weekend Exam</button>
        <button class="btn btn-purple" onclick="Router.navigate('modules')"><i class="fas fa-book-open"></i>Study Modules</button>
        <button class="btn btn-outline" onclick="Router.navigate('schedule')"><i class="fas fa-calendar-alt"></i>View Schedule</button>
        <button class="btn btn-outline" onclick="Router.navigate('performance')"><i class="fas fa-chart-line"></i>Performance</button>
        <button class="btn btn-outline" onclick="Router.navigate('readiness')"><i class="fas fa-bullseye"></i>Exam Readiness</button>
      </div>
    </div>
  </div>`;
});