/**
 * Mobile Navigation Logic
 * Handles the sidebar toggle, overlay, and link clicking behaviors for mobile devices.
 */

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebar = document.querySelector('.sidebar-left');
    const navLinks = document.querySelectorAll('.sidebar-nav a'); // Select all links in sidebar

    // Guard clause to ensure elements exist
    if (!menuToggle || !sidebarOverlay || !sidebar) {
        console.error('Mobile navigation elements not found:', { menuToggle, sidebarOverlay, sidebar });
        return;
    }

    // Toggle Sidebar
    function toggleSidebar() {
        const isActive = sidebar.classList.contains('active');
        if (isActive) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event Listeners
    menuToggle.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when a navigation link is clicked (UX best practice for single-page docs)
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Optional: Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    console.log('Mobile navigation initialized.');
});
