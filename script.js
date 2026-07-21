
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('header__nav--open');
        menuToggle.classList.toggle('header__toggle--open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('header__nav--open');
            menuToggle.classList.remove('header__toggle--open');
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
            nameInput.classList.add('contact__input--invalid');
            nameInput.setAttribute('aria-invalid', 'true');
            nameError.textContent = 'Ad Soyad boş buraxıla bilməz.';
            nameError.classList.add('contact__error--visible');
            isValid = false;
        } else {
            nameInput.classList.remove('contact__input--invalid');
            nameInput.removeAttribute('aria-invalid');
            nameError.classList.remove('contact__error--visible');
        }

        if (emailInput.value.trim() === '') {
            emailInput.classList.add('contact__input--invalid');
            emailInput.setAttribute('aria-invalid', 'true');
            emailError.textContent = 'E-poçt boş buraxıla bilməz.';
            emailError.classList.add('contact__error--visible');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('contact__input--invalid');
            emailInput.setAttribute('aria-invalid', 'true');
            emailError.textContent = 'Düzgün e-poçt daxil edin.';
            emailError.classList.add('contact__error--visible');
            isValid = false;
        } else {
            emailInput.classList.remove('contact__input--invalid');
            emailInput.removeAttribute('aria-invalid');
            emailError.classList.remove('contact__error--visible');
        }

        if (messageInput.value.trim() === '') {
            messageInput.classList.add('contact__input--invalid');
            messageInput.setAttribute('aria-invalid', 'true');
            messageError.textContent = 'Mesaj boş buraxıla bilməz.';
            messageError.classList.add('contact__error--visible');
            isValid = false;
        } else {
            messageInput.classList.remove('contact__input--invalid');
            messageInput.removeAttribute('aria-invalid');
            messageError.classList.remove('contact__error--visible');
        }

        formSuccess.classList.remove('contact__success--visible');

        if (isValid) {
            formSuccess.classList.add('contact__success--visible');
            contactForm.reset();
        }
    });
}