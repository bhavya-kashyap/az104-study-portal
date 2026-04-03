// Simple Client-Side Router for Single Page Application
const Router = (() => {
  const routes = {};

  return {
    // Register a new page route
    register: (name, handler) => {
      routes[name] = handler;
    },

    // Navigate to a page
    navigate: (pageName) => {
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

      // Render page content
      const container = document.getElementById('page-container');
      try {
        const html = routes[pageName]();
        container.innerHTML = html;
        window.updateSidebarProgress();
      } catch (e) {
        console.error(`Error rendering page ${pageName}:`, e);
        container.innerHTML = `<div class="card"><p style="color:var(--azure-red)">Error loading page. Check console.</p></div>`;
      }
    }
  };
})();
