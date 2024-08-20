const marqueeWrapper = document.querySelector('.marquee-wrapper');

let isDragging = false;
let startX, scrollLeft;

marqueeWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    marqueeWrapper.classList.add('active');
    startX = e.pageX - marqueeWrapper.offsetLeft;
    scrollLeft = marqueeWrapper.scrollLeft;
    marqueeWrapper.style.cursor = 'grabbing';
});

marqueeWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
    marqueeWrapper.classList.remove('active');
    marqueeWrapper.style.cursor = 'grab';
});

marqueeWrapper.addEventListener('mouseup', () => {
    isDragging = false;
    marqueeWrapper.classList.remove('active');
    marqueeWrapper.style.cursor = 'grab';
});

marqueeWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - marqueeWrapper.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    marqueeWrapper.scrollLeft = scrollLeft - walk;
});

marqueeWrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    marqueeWrapper.classList.add('active');
    startX = e.touches[0].pageX - marqueeWrapper.offsetLeft;
    scrollLeft = marqueeWrapper.scrollLeft;
});

marqueeWrapper.addEventListener('touchend', () => {
    isDragging = false;
    marqueeWrapper.classList.remove('active');
});

marqueeWrapper.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - marqueeWrapper.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    marqueeWrapper.scrollLeft = scrollLeft - walk;
});
