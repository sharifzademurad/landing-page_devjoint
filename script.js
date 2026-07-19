
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('nav-open');
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('nav-open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const contactForm = document.getElementById('contactForm');

if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    const formSuccess = document.getElementById('formSuccess');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameInput.classList.add('input-error');
            nameError.textContent = 'Ad Soyad boş buraxıla bilməz.';
            nameError.classList.add('show');
            isValid = false;
        } else {
            nameInput.classList.remove('input-error');
            nameError.classList.remove('show');
        }

        if (emailInput.value.trim() === '') {
            emailInput.classList.add('input-error');
            emailError.textContent = 'E-poçt boş buraxıla bilməz.';
            emailError.classList.add('show');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('input-error');
            emailError.textContent = 'Düzgün e-poçt daxil edin.';
            emailError.classList.add('show');
            isValid = false;
        } else {
            emailInput.classList.remove('input-error');
            emailError.classList.remove('show');
        }

        if (messageInput.value.trim() === '') {
            messageInput.classList.add('input-error');
            messageError.textContent = 'Mesaj boş buraxıla bilməz.';
            messageError.classList.add('show');
            isValid = false;
        } else {
            messageInput.classList.remove('input-error');
            messageError.classList.remove('show');
        }

        formSuccess.classList.remove('show');

        if (isValid) {
            formSuccess.classList.add('show');
            contactForm.reset();
        }
    });
}