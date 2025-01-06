let currentSlide = 0;
const cards = document.querySelectorAll('.review-card');
const dots = document.querySelectorAll('.dot');

function moveSlider(direction) {
    // Update current slide index
    currentSlide = (currentSlide + direction + cards.length) % cards.length;
    
    // Update cards visibility and scaling
    cards.forEach((card, index) => {
        if (index === currentSlide) {
            card.style.transform = 'scale(1.1)';
            card.style.opacity = '1';
        } else {
            card.style.transform = 'scale(0.9)';
            card.style.opacity = '0.8';
        }
    });

    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize the first slide
moveSlider(0); 