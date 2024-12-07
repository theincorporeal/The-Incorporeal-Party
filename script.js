// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Back-to-Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆ Top';
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Validation
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (validateForm(name, email, message)) {
        alert('Thank you for contacting us! We will be in touch soon.');
        contactForm.reset();
    }
});

// Form Validation Function
function validateForm(name, email, message) {
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return false;
    }
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Email Validation Function
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Dynamic Theme Toggle (Optional Enhancement)
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
themeToggle.className = 'theme-toggle';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

