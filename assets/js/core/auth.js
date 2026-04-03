// Auth module — client-side multi-user authentication
const Auth = (() => {
  const USERS_KEY = 'az104_users';
  const SESSION_KEY = 'az104_session';

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; }
    catch(e) { return {}; }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  return {
    async register(username, password, displayName, examDate, startDate) {
      if (!username || !password || !displayName) return { ok: false, error: 'All fields are required.' };
      if (password.length < 6) return { ok: false, error: 'Password must be at least 6 characters.' };
      const users = getUsers();
      const key = username.toLowerCase().trim();
      if (!/^[a-z0-9_]{3,20}$/.test(key)) return { ok: false, error: 'Username must be 3–20 characters (letters, numbers, underscore).' };
      if (users[key]) return { ok: false, error: 'Username already taken. Please choose another.' };
      const hash = await hashPassword(password);
      users[key] = {
        username: key,
        passwordHash: hash,
        displayName: displayName.trim(),
        examDate: examDate || '2026-06-02',
        startDate: startDate || new Date().toISOString().split('T')[0],
        avatarColor: 'blue',
        joinedDate: new Date().toISOString(),
      };
      saveUsers(users);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ username: key }));
      return { ok: true, user: users[key] };
    },

    async login(username, password) {
      if (!username || !password) return { ok: false, error: 'Username and password are required.' };
      const users = getUsers();
      const key = username.toLowerCase().trim();
      if (!users[key]) return { ok: false, error: 'User not found. Please check your username.' };
      const hash = await hashPassword(password);
      if (users[key].passwordHash !== hash) return { ok: false, error: 'Incorrect password. Please try again.' };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ username: key }));
      return { ok: true, user: users[key] };
    },

    logout() {
      sessionStorage.removeItem(SESSION_KEY);
    },

    getSession() {
      try {
        const s = sessionStorage.getItem(SESSION_KEY);
        return s ? JSON.parse(s) : null;
      } catch(e) { return null; }
    },

    getUser() {
      const session = this.getSession();
      if (!session) return null;
      const users = getUsers();
      return users[session.username] || null;
    },

    updateProfile(updates) {
      const session = this.getSession();
      if (!session) return false;
      const users = getUsers();
      if (!users[session.username]) return false;
      Object.assign(users[session.username], updates);
      saveUsers(users);
      return true;
    },

    async changePassword(currentPassword, newPassword) {
      const session = this.getSession();
      if (!session) return { ok: false, error: 'Not logged in.' };
      const users = getUsers();
      const user = users[session.username];
      if (!user) return { ok: false, error: 'User not found.' };
      const currentHash = await hashPassword(currentPassword);
      if (user.passwordHash !== currentHash) return { ok: false, error: 'Current password is incorrect.' };
      if (newPassword.length < 6) return { ok: false, error: 'New password must be at least 6 characters.' };
      user.passwordHash = await hashPassword(newPassword);
      saveUsers(users);
      return { ok: true };
    },

    getInitials(displayName) {
      if (!displayName) return '?';
      return displayName.split(' ')
        .map(w => w[0] || '')
        .join('')
        .toUpperCase()
        .slice(0, 2) || '?';
    },

    hasUsers() {
      return Object.keys(getUsers()).length > 0;
    }
  };
})();
