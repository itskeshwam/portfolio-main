// Smooth scroll to sections when header links are clicked
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            const headerOffset = 0; // Adjust this value to fine-tune the scroll position
            const delay = 100;

            if (targetSection) {
                setTimeout(function () {
                const targetOffset = targetSection.getBoundingClientRect().top;
                window.scrollBy({
                    top: targetOffset - headerOffset,
                    behavior: 'smooth'
                });
            }, delay);
        }
    });
});
});



