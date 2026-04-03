// Simple Client-Side Router for Single Page Application
const Router = (() => {
  const routes = {};

  return {
    register: (name, handler) => {
      routes[name] = handler;
    },

    navigate: (pageName) => {
      // Route guard: require auth
      if (!Auth.getSession()) {
        if (window.App) App.showLanding();
        return;
      }

      if (!routes[pageName]) {
        console.error(`Page not found: ${pageName}`);
        return;
      }

      // Update active nav item
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
          item.classList.add('active');
        }
      });

      // Update bottom nav
      if (window.App && App.updateBottomNav) App.updateBottomNav(pageName);

      // Render page content
      const container = document.getElementById('page-container');
      try {
        const html = routes[pageName]();
        container.innerHTML = html;
        if (window.updateSidebarProgress) window.updateSidebarProgress();
        // Scroll to top on navigation
        container.scrollIntoView({ block: 'start', behavior: 'instant' });
      } catch (e) {
        console.error(`Error rendering page ${pageName}:`, e);
        container.innerHTML = `<div class="card"><p style="color:var(--azure-red)">Error loading page. Check console.</p></div>`;
      }
    }
  };
})();
