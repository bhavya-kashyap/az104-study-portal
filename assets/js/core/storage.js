// All persistence via localStorage
window.Store = {
  KEY: 'az104_portal_v2',
  get() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || this.defaults(); }
    catch(e) { return this.defaults(); }
  },
  save(data) { localStorage.setItem(this.KEY, JSON.stringify(data)); },
  defaults() {
    return {
      completedDays: [],
      quizResults: {},    // { 'D1_day4': { score, total, pct, answers, date } }
      examResults: {},    // { 'WE1': { score, total, pct, answers, date } }
      moduleProgress: {}, // { 'D1': { completed: [0,1], current: 2 } }
      studyStreak: 0,
      lastStudyDate: null,
      totalHoursStudied: 0,
      notes: {}
    };
  },
  markDayComplete(dayNum) {
    const d = this.get();
    if (!d.completedDays.includes(dayNum)) {
      d.completedDays.push(dayNum);
      const sched = COURSE_DATA.schedule.find(s=>s.day===dayNum);
      if (sched) d.totalHoursStudied = (d.totalHoursStudied||0) + sched.hours;
      const today = new Date().toDateString();
      if (d.lastStudyDate === new Date(Date.now()-86400000).toDateString()) {
        d.studyStreak = (d.studyStreak||0)+1;
      } else if (d.lastStudyDate !== today) {
        d.studyStreak = 1;
      }
      d.lastStudyDate = today;
      this.save(d);
    }
  },
  saveQuizResult(key, result) {
    const d = this.get();
    if (!d.quizResults) d.quizResults = {};
    d.quizResults[key] = { ...result, date: new Date().toISOString() };
    this.save(d);
  },
  saveExamResult(examId, result) {
    const d = this.get();
    if (!d.examResults) d.examResults = {};
    d.examResults[examId] = { ...result, date: new Date().toISOString() };
    this.save(d);
  },
  getProgress() {
    const d = this.get();
    const completed = (d.completedDays||[]).length;
    const total = COURSE_DATA.totalDays;
    return { completed, total, pct: Math.round(completed/total*100) };
  },
  getDomainScores() {
    const d = this.get();
    const scores = {};
    COURSE_DATA.domains.forEach(dom => { scores[dom.id] = { total:0, count:0 }; });
    Object.values(d.quizResults||{}).forEach(r => {
      if (r.domain && scores[r.domain]) {
        scores[r.domain].total += r.pct;
        scores[r.domain].count++;
      }
    });
    Object.values(d.examResults||{}).forEach(r => {
      if (r.domain && scores[r.domain]) {
        scores[r.domain].total += r.pct;
        scores[r.domain].count++;
      }
    });
    const result = {};
    Object.keys(scores).forEach(k => {
      result[k] = scores[k].count > 0 ? Math.round(scores[k].total/scores[k].count) : null;
    });
    return result;
  }
};