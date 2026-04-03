Router.register('profile', () => {
  const user = Auth.getUser();
  if (!user) return '<div class="card"><p>Not logged in.</p></div>';
  const data  = Store.get();
  const prog  = Store.getProgress();
  const quizCount = Object.keys(data.quizResults || {}).length;
  const examCount = Object.keys(data.examResults || {}).length;
  const joined = new Date(user.joinedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const colorOptions = [
    { value: 'blue',   label: 'Azure Blue', gradient: 'linear-gradient(135deg,#0078d4,#8764b8)' },
    { value: 'teal',   label: 'Teal',       gradient: 'linear-gradient(135deg,#00b294,#0078d4)' },
    { value: 'purple', label: 'Purple',     gradient: 'linear-gradient(135deg,#8764b8,#0078d4)' },
    { value: 'green',  label: 'Green',      gradient: 'linear-gradient(135deg,#107c10,#00b294)' },
    { value: 'red',    label: 'Red',        gradient: 'linear-gradient(135deg,#d13438,#8764b8)' },
  ];

  const currentGradient = (colorOptions.find(c => c.value === user.avatarColor) || colorOptions[0]).gradient;

  const colorOptionsHtml = colorOptions.map(c => `
    <button type="button" class="avatar-color-btn${user.avatarColor === c.value ? ' selected' : ''}"
      style="background:${c.gradient}" title="${c.label}"
      onclick="Profile.selectColor('${c.value}')">
      ${user.avatarColor === c.value ? '<i class="fas fa-check"></i>' : ''}
    </button>`).join('');

  return `<div class="fade-in">
    <div class="page-header">
      <div class="page-title"><i class="fas fa-user-cog blue"></i> My Profile</div>
      <div class="page-subtitle">Manage your account settings and personal information</div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><i class="fas fa-id-card"></i> Account Info</div>
        <div style="text-align:center;margin-bottom:24px">
          <div class="profile-avatar-lg" id="profile-avatar-preview" style="background:${currentGradient}">
            ${Auth.getInitials(user.displayName)}
          </div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:12px">Choose Avatar Color</div>
          <div class="avatar-color-picker">${colorOptionsHtml}</div>
        </div>
        <form id="profile-form" onsubmit="Profile.save(event)">
          <div class="form-field">
            <label class="form-label">Display Name</label>
            <input type="text" class="form-input" name="displayName" value="${user.displayName}" required/>
          </div>
          <div class="form-field">
            <label class="form-label">Username</label>
            <input type="text" class="form-input" value="${user.username}" disabled style="opacity:.55;cursor:not-allowed"/>
            <div style="font-size:11px;color:var(--text-muted);margin-top:4px">Username cannot be changed</div>
          </div>
          <div class="form-field">
            <label class="form-label">Study Start Date <span style="font-size:11px;color:var(--text-muted);font-weight:400">(day 1 of your 60-day plan)</span></label>
            <input type="date" class="form-input" name="startDate" value="${user.startDate || new Date().toISOString().split('T')[0]}"/>
          </div>
          <div class="form-field">
            <label class="form-label">Target Exam Date</label>
            <input type="date" class="form-input" name="examDate" value="${user.examDate || '2026-06-02'}"/>
          </div>
          <button type="submit" class="btn btn-primary mt-4"><i class="fas fa-save"></i> Save Changes</button>
        </form>
        <div id="profile-saved" class="alert alert-success mt-4 hidden">
          <i class="fas fa-check-circle"></i> Profile updated!
        </div>
      </div>

      <div>
        <div class="card mb-6">
          <div class="card-title"><i class="fas fa-chart-pie"></i> Account Statistics</div>
          <div class="grid-2" style="margin-bottom:16px">
            <div class="stat-card blue"><div class="stat-icon"><i class="fas fa-calendar-check"></i></div><div class="stat-value">${prog.pct}%</div><div class="stat-label">Course Progress</div></div>
            <div class="stat-card green"><div class="stat-icon"><i class="fas fa-question-circle"></i></div><div class="stat-value">${quizCount}</div><div class="stat-label">Quizzes Taken</div></div>
            <div class="stat-card purple"><div class="stat-icon"><i class="fas fa-graduation-cap"></i></div><div class="stat-value">${examCount}</div><div class="stat-label">Exams Taken</div></div>
            <div class="stat-card teal"><div class="stat-icon"><i class="fas fa-fire"></i></div><div class="stat-value">${data.studyStreak || 0}</div><div class="stat-label">Day Streak</div></div>
          </div>
          <div style="font-size:13px;color:var(--text-secondary);margin-bottom:6px">
            <i class="fas fa-calendar blue"></i> Member since: <strong>${joined}</strong>
          </div>
          <div style="font-size:13px;color:var(--text-secondary)">
            <i class="fas fa-clock blue"></i> Total Study Time: <strong>${data.totalHoursStudied || 0} hours</strong>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><i class="fas fa-lock"></i> Change Password</div>
          <form id="password-form" onsubmit="Profile.changePassword(event)">
            <div class="form-field">
              <label class="form-label">Current Password</label>
              <input type="password" class="form-input" name="currentPassword" placeholder="Current password" required/>
            </div>
            <div class="form-field">
              <label class="form-label">New Password</label>
              <input type="password" class="form-input" name="newPassword" placeholder="New password (min 6 chars)" minlength="6" required/>
            </div>
            <button type="submit" class="btn btn-outline mt-4"><i class="fas fa-key"></i> Update Password</button>
          </form>
          <div id="password-msg" class="mt-4 hidden"></div>
        </div>
      </div>
    </div>
  </div>`;
});

// Profile page helpers (exposed globally for inline handlers)
window.Profile = {
  _selectedColor: null,

  selectColor(color) {
    this._selectedColor = color;
    const gradients = {
      blue:   'linear-gradient(135deg,#0078d4,#8764b8)',
      teal:   'linear-gradient(135deg,#00b294,#0078d4)',
      purple: 'linear-gradient(135deg,#8764b8,#0078d4)',
      green:  'linear-gradient(135deg,#107c10,#00b294)',
      red:    'linear-gradient(135deg,#d13438,#8764b8)',
    };
    const preview = document.getElementById('profile-avatar-preview');
    if (preview) preview.style.background = gradients[color] || gradients.blue;
    document.querySelectorAll('.avatar-color-btn').forEach(btn => {
      const matches = btn.getAttribute('onclick').includes(`'${color}'`);
      btn.classList.toggle('selected', matches);
      btn.innerHTML = matches ? '<i class="fas fa-check"></i>' : '';
    });
  },

  save(e) {
    e.preventDefault();
    const form = e.target;
    const updates = {
      displayName: form.displayName.value.trim(),
      startDate:   form.startDate.value,
      examDate:    form.examDate.value,
    };
    if (this._selectedColor) updates.avatarColor = this._selectedColor;
    Auth.updateProfile(updates);
    App.populateSidebar();
    this._selectedColor = null;
    const msg = document.getElementById('profile-saved');
    msg.classList.remove('hidden');
    setTimeout(() => msg.classList.add('hidden'), 3000);
  },

  async changePassword(e) {
    e.preventDefault();
    const form = e.target;
    const msgEl = document.getElementById('password-msg');
    const submitBtn = form.querySelector('button[type=submit]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Updating…';
    const result = await Auth.changePassword(form.currentPassword.value, form.newPassword.value);
    if (result.ok) {
      msgEl.className = 'alert alert-success mt-4';
      msgEl.innerHTML = '<i class="fas fa-check-circle"></i> Password updated successfully!';
      form.reset();
    } else {
      msgEl.className = 'alert alert-danger mt-4';
      msgEl.innerHTML = `<i class="fas fa-times-circle"></i> ${result.error}`;
    }
    msgEl.classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-key"></i> Update Password';
    setTimeout(() => msgEl.classList.add('hidden'), 5000);
  },
};
