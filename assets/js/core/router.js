// router.js

// Simple page component example
const homePage = () => {
    document.getElementById('app').innerHTML = '<h1>Home Page</h1><p>Welcome to the AZ-104 Study Portal!</p>';
};

const aboutPage = () => {
    document.getElementById('app').innerHTML = '<h1>About Page</h1><p>This portal helps you prepare for the AZ-104 exams.</p>';
};

// Router function to handle navigation
const router = () => {
    const routes = {
        '/': homePage,
        '/about': aboutPage,
    };

    const path = window.location.pathname;
    const page = routes[path] || homePage; // Default to homePage if route not found
    page();
};

// Event listeners for navigation
window.addEventListener('popstate', router); // Handle browser back and forward buttons
window.addEventListener('load', router); // Handle initial page load

// Example: Add navigation support (e.g., links)
document.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        event.preventDefault();
        const path = event.target.getAttribute('href');
        history.pushState(null, '', path); // Change URL without reloading
        router(); // Call router to change page
    }
});
