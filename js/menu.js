function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        menuToggle.innerHTML = '☰';
    } else {
        menuOverlay.classList.add('active');
        menuToggle.innerHTML = '×';
    }
}

// Smooth navigation without flashing
document.querySelectorAll('.menu-item').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        // Navigate without closing menu first
        window.location.href = href;
    });
}); 