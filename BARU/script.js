
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#2e86c1';
        header.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        header.style.backgroundColor = 'cyan';
    }
});

// Menambahkan event klik ke link untuk smooth scrolling
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});