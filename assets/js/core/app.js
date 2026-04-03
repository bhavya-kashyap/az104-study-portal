// App boot
document.addEventListener('DOMContentLoaded', () => {
  // Countdown
  function updateCountdown() {
    const exam = new Date('2026-06-02T09:00:00');
    const now = new Date();
    const diff = exam - now;
    if (diff <= 0) { document.getElementById('countdown-mini').textContent = '🎓 Exam Day!'; return; }
    const days = Math.floor(diff/86400000);
    const hrs  = Math.floor((diff%86400000)/3600000);
    document.getElementById('countdown-mini').innerHTML =
      `<i class="fas fa-clock"></i> ${days}d ${hrs}h to Exam`;
  }
  updateCountdown();
  setInterval(updateCountdown, 60000);

  window.updateSidebarProgress = function() {
    const p = Store.getProgress();
    const pct = p.pct + '%';
    document.getElementById('sidebar-progress-pct').textContent = pct;
    document.getElementById('sidebar-progress-bar').style.width = pct;
  };

  // Nav click
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => Router.navigate(item.dataset.page));
  });

  // Modal close on overlay click
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') window.closeModal();
  });

  window.openModal = function(html) {
    document.getElementById('modal-box').innerHTML = html;
    document.getElementById('modal-overlay').classList.remove('hidden');
  };
  window.closeModal = function() {
    document.getElementById('modal-overlay').classList.add('hidden');
  };

  window.updateSidebarProgress();
  Router.navigate('dashboard');
});