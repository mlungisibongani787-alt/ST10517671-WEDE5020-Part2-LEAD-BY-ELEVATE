document.addEventListener('DOMContentLoaded', function () {
    const page = decodeURIComponent(location.pathname.split('/').pop()).toLowerCase() || 'index.html';

    document.querySelectorAll('.main-nav a').forEach(function (link) {
        const href = decodeURIComponent(link.getAttribute('href')).toLowerCase();
        if (href === page || (page === '' && href === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    const form = document.getElementById('enquiryForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const message = document.getElementById('formMessage');
            message.textContent = 'Thank you. Your enquiry has been recorded for this website demonstration.';
            form.reset();
        });
    }

    const year = document.getElementById('currentYear');
    if (year) year.textContent = new Date().getFullYear();
});
