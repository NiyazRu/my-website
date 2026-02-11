const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.display = 'block';
        header.style.opacity = '1';
    } else {
        header.style.opacity = '0';
        setTimeout(() => {
            header.style.display = 'none';
        }, 300);
    }
});
