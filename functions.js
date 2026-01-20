(function() {
    // Isolate variables to avoid conflicts
    const triggerBtn = document.getElementById('msdMenuTrigger');
    const closeBtn = document.getElementById('msdCloseBtn');
    const menuOverlay = document.getElementById('msdOverlayMenu');

    function openMenu() {
      menuOverlay.classList.add('msd-is-open');
    }

    function closeMenu() {
      menuOverlay.classList.remove('msd-is-open');
    }

    // Event Listeners
    triggerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Optional: Close on Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && menuOverlay.classList.contains('msd-is-open')) {
        closeMenu();
      }
    });
  })();