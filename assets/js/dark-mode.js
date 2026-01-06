/**
 * Dark Mode Toggle
 * Handles toggling between light and dark modes
 * Saves user preference to localStorage
 */

(function() {
  'use strict';

  // Check for saved dark mode preference, or default to light mode
  const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

  // Apply dark mode immediately if it was previously enabled
  // This prevents flash of light mode
  if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
  }

  // Function to enable dark mode
  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }

  // Function to disable dark mode
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }

  // Wait for DOM to be ready
  function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (!darkModeToggle) {
      console.warn('Dark mode toggle button not found');
      return;
    }

    // Toggle dark mode when button is clicked
    darkModeToggle.addEventListener('click', function() {
      const isDarkMode = document.body.classList.contains('dark-mode');

      if (isDarkMode) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });

    // Also support keyboard shortcuts (optional)
    document.addEventListener('keydown', function(e) {
      // Toggle with Ctrl/Cmd + Shift + D
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        const isDarkMode = document.body.classList.contains('dark-mode');

        if (isDarkMode) {
          disableDarkMode();
        } else {
          enableDarkMode();
        }
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
  } else {
    // DOM is already ready
    initDarkMode();
  }

})();
