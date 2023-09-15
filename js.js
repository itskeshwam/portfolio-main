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

function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
    })
