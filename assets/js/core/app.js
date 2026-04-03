// App controller — auth state, sidebar, landing page, version switcher
const App = (() => {
  const AVATAR_GRADIENTS = {
    blue:   'linear-gradient(135deg,#0078d4,#8764b8)',
    teal:   'linear-gradient(135deg,#00b294,#0078d4)',
    purple: 'linear-gradient(135deg,#8764b8,#0078d4)',
    green:  'linear-gradient(135deg,#107c10,#00b294)',
    red:    'linear-gradient(135deg,#d13438,#8764b8)',
  };

  let countdownInterval = null;
  let versionDropdownOpen = false;

  function formatExamDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  function populateSidebar() {
    const user = Auth.getUser();
    if (!user) return;
    const avatarEl = document.getElementById('sidebar-avatar');
    const nameEl   = document.getElementById('sidebar-name');
    const examEl   = document.getElementById('sidebar-exam');
    if (avatarEl) { avatarEl.textContent = Auth.getInitials(user.displayName); avatarEl.style.background = AVATAR_GRADIENTS[user.avatarColor] || AVATAR_GRADIENTS.blue; }
    if (nameEl)   nameEl.textContent = user.displayName;
    if (examEl)   examEl.textContent = `Exam: ${formatExamDate(user.examDate)}`;
  }

  function updateCountdown() {
    const el = document.getElementById('countdown-mini');
    if (!el) return;
    const user = Auth.getUser();
    const examDateStr = (user && user.examDate) ? user.examDate : '2026-06-02';
    const exam = new Date(examDateStr + 'T09:00:00');
    const diff = exam - new Date();
    if (diff <= 0) { el.innerHTML = '🎓 Exam Day!'; return; }
    const days = Math.floor(diff / 86400000);
    const hrs  = Math.floor((diff % 86400000) / 3600000);
    el.innerHTML = `<i class="fas fa-clock"></i> ${days}d ${hrs}h to Exam`;
  }

  function initApp() {
    document.getElementById('landing-screen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');

    populateSidebar();
    updateCountdown();
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 60000);

    window.updateSidebarProgress = function() {
      const p = Store.getProgress();
      const pct = p.pct + '%';
      const pctEl = document.getElementById('sidebar-progress-pct');
      const barEl = document.getElementById('sidebar-progress-bar');
      if (pctEl) pctEl.textContent = pct;
      if (barEl) barEl.style.width = pct;
    };

    // Use event delegation on the sidebar — safe to call initApp multiple times
    const navEl = document.getElementById('sidebar');
    if (navEl && !navEl._navDelegated) {
      navEl._navDelegated = true;
      navEl.addEventListener('click', e => {
        const item = e.target.closest('.nav-item');
        if (item && item.dataset.page) {
          Router.navigate(item.dataset.page);
          closeSidebar();
        }
      });
    }

    window.updateSidebarProgress();
    Router.navigate('dashboard');
    Store.migrateFromLegacy();
  }

  // ── Landing ──────────────────────────────────────────────────────
  function showLanding() {
    document.getElementById('landing-screen').classList.remove('hidden');
    document.getElementById('app').classList.add('hidden');
    initTypewriter();
  }

  function initTypewriter() {
    const words = ['AZ-104 Exam', 'Azure Skills', 'Your Certification', 'Cloud Mastery'];
    let wordIdx = 0, charIdx = 0, deleting = false;
    const el = document.getElementById('hero-typewriter');
    if (!el) return;
    function tick() {
      const word = words[wordIdx % words.length];
      el.textContent = deleting ? word.slice(0, charIdx--) : word.slice(0, ++charIdx);
      if (!deleting && charIdx === word.length) { setTimeout(() => { deleting = true; }, 1800); }
      else if (deleting && charIdx === 0) { deleting = false; wordIdx++; }
      setTimeout(tick, deleting ? 55 : 110);
    }
    tick();
  }

  // ── Auth modal ───────────────────────────────────────────────────
  function showAuthModal(mode) {
    const overlay = document.getElementById('auth-overlay');
    const box     = document.getElementById('auth-box');
    overlay.classList.remove('hidden');
    box.innerHTML = mode === 'login' ? renderLoginForm() : renderRegisterForm();
  }

  function closeAuthModal() {
    document.getElementById('auth-overlay').classList.add('hidden');
  }

  function renderLoginForm() {
    return `
      <button class="auth-close" onclick="App.closeAuthModal()">&#10005;</button>
      <div class="auth-header">
        <div class="auth-logo"><i class="fab fa-microsoft"></i></div>
        <h2>Welcome Back</h2>
        <p>Sign in to continue your AZ-104 journey</p>
      </div>
      <div id="auth-error" class="auth-error hidden"></div>
      <form id="login-form" onsubmit="App.handleLogin(event)">
        <div class="auth-field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Your username" autocomplete="username" required/>
        </div>
        <div class="auth-field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Your password" autocomplete="current-password" required/>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px">
          <i class="fas fa-sign-in-alt"></i> Sign In
        </button>
      </form>
      <div class="auth-switch">Don't have an account? <a href="#" onclick="App.showAuthModal('register');return false">Create one</a></div>`;
  }

  function renderRegisterForm() {
    const todayStr = new Date().toISOString().split('T')[0];
    return `
      <button class="auth-close" onclick="App.closeAuthModal()">&#10005;</button>
      <div class="auth-header">
        <div class="auth-logo"><i class="fab fa-microsoft"></i></div>
        <h2>Create Account</h2>
        <p>Start your AZ-104 exam preparation journey</p>
      </div>
      <div id="auth-error" class="auth-error hidden"></div>
      <form id="register-form" onsubmit="App.handleRegister(event)">
        <div class="auth-field">
          <label>Display Name</label>
          <input type="text" name="displayName" placeholder="Your full name" required/>
        </div>
        <div class="auth-field">
          <label>Username</label>
          <input type="text" name="username" placeholder="3–20 chars: letters, numbers, _" autocomplete="username" required/>
        </div>
        <div class="auth-field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Min 6 characters" autocomplete="new-password" minlength="6" required/>
        </div>
        <div class="auth-field">
          <label>Study Start Date <span style="color:var(--text-muted);font-weight:400">(day 1 of your 60-day plan)</span></label>
          <input type="date" name="startDate" id="reg-startDate" value="${todayStr}"/>
        </div>
        <div class="auth-field">
          <label>Target Exam Date <span style="color:var(--text-muted);font-weight:400">(optional)</span></label>
          <input type="date" name="examDate" value="2026-06-02"/>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px">
          <i class="fas fa-user-plus"></i> Create Account
        </button>
      </form>
      <div class="auth-switch">Already have an account? <a href="#" onclick="App.showAuthModal('login');return false">Sign in</a></div>`;
  }

  async function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type=submit]');
    const errorEl   = document.getElementById('auth-error');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in…';
    const result = await Auth.login(form.username.value, form.password.value);
    if (result.ok) {
      closeAuthModal();
      initApp();
    } else {
      errorEl.textContent = result.error;
      errorEl.classList.remove('hidden');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type=submit]');
    const errorEl   = document.getElementById('auth-error');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account…';
    const result = await Auth.register(form.username.value, form.password.value, form.displayName.value, form.examDate.value, form.startDate.value);
    if (result.ok) {
      closeAuthModal();
      initApp();
    } else {
      errorEl.textContent = result.error;
      errorEl.classList.remove('hidden');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
    }
  }

  // ── Sidebar mobile ───────────────────────────────────────────────
  function toggleSidebar() {
    const sidebar   = document.getElementById('sidebar');
    const backdrop  = document.getElementById('sidebar-backdrop');
    const isOpen    = sidebar.classList.toggle('sidebar-open');
    backdrop.classList.toggle('hidden', !isOpen);
  }

  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('sidebar-open');
    document.getElementById('sidebar-backdrop').classList.add('hidden');
  }

  // ── Version switcher ─────────────────────────────────────────────
  async function toggleVersionDropdown() {
    const dropdown = document.getElementById('version-dropdown');
    const chevron  = document.getElementById('version-chevron');
    versionDropdownOpen = !versionDropdownOpen;
    if (!versionDropdownOpen) {
      dropdown.classList.add('hidden');
      chevron.className = 'fas fa-chevron-up';
      return;
    }
    dropdown.classList.remove('hidden');
    chevron.className = 'fas fa-chevron-down';
    dropdown.innerHTML = '<div class="version-dropdown-loading"><i class="fas fa-spinner fa-spin"></i> Loading…</div>';
    try {
      const resp = await fetch(`https://api.github.com/repos/${APP_CONFIG.REPO_OWNER}/${APP_CONFIG.REPO_NAME}/releases`);
      if (!resp.ok) throw new Error('API error');
      const releases = await resp.json();
      if (!Array.isArray(releases) || !releases.length) {
        dropdown.innerHTML = '<div class="version-dropdown-loading">No releases found</div>';
        return;
      }
      dropdown.innerHTML = releases.map(r => {
        const isCurrent = r.tag_name === APP_CONFIG.VERSION;
        return `<a class="version-dropdown-item${isCurrent ? ' version-current-item' : ''}"
          href="${isCurrent ? 'javascript:void(0)' : r.html_url}"
          ${!isCurrent ? 'target="_blank" rel="noopener"' : ''}>
          <i class="fas fa-tag"></i> ${r.tag_name}
          ${isCurrent ? '<span class="version-badge-current">current</span>' : ''}
        </a>`;
      }).join('');
    } catch(err) {
      dropdown.innerHTML = '<div class="version-dropdown-loading">Could not load releases</div>';
    }
  }

  // ── Bottom nav ───────────────────────────────────────────────────
  function updateBottomNav(pageName) {
    document.querySelectorAll('.bnav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === pageName);
    });
  }

  // ── Logout ───────────────────────────────────────────────────────
  function logout() {
    Auth.logout();
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    showLanding();
  }

  // ── Public API ───────────────────────────────────────────────────
  return {
    initApp, showLanding, showAuthModal, closeAuthModal,
    handleLogin, handleRegister, logout,
    toggleSidebar, closeSidebar,
    toggleVersionDropdown, updateBottomNav,
    populateSidebar,
  };
})();

// ── Bootstrap ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Click-outside to close auth modal
  document.getElementById('auth-overlay').addEventListener('click', e => {
    if (e.target.id === 'auth-overlay') App.closeAuthModal();
  });

  // Modal close on overlay click (app modal)
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay' && window.closeModal) window.closeModal();
  });

  // Global modal helpers (needed by quiz/exam pages before initApp)
  window.openModal = function(html) {
    document.getElementById('modal-box').innerHTML = html;
    document.getElementById('modal-overlay').classList.remove('hidden');
  };
  window.closeModal = function() {
    document.getElementById('modal-overlay').classList.add('hidden');
  };

  // Swipe left on sidebar to close (mobile)
  let touchStartX = 0;
  document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientX - touchStartX < -60) App.closeSidebar();
  }, { passive: true });

  if (Auth.getSession()) {
    App.initApp();
  } else {
    App.showLanding();
  }
});
