// script.js

window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const footerHeight = footer.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - footerHeight - 100) { // 100px margin from bottom
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
