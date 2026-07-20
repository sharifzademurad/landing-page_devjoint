// =====================================================
// 1) MOBİL MENYU TOGGLE
// =====================================================
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

// =====================================================
// 2) SMOOTH SCROLL
// =====================================================
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

// =====================================================
// 3) ƏLAQƏ FORMU - SADƏ VALİDASİYA
// =====================================================
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

        // Ad Soyad boş olmamalıdır
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('input-error');
            nameInput.setAttribute('aria-invalid', 'true'); // YENİ: ekran oxuyucusuna sahənin səhv olduğunu bildirir
            nameError.textContent = 'Ad Soyad boş buraxıla bilməz.';
            nameError.classList.add('show');
            isValid = false;
        } else {
            nameInput.classList.remove('input-error');
            nameInput.removeAttribute('aria-invalid');
            nameError.classList.remove('show');
        }

        // Email boş olmamalı və regex-ə uyğun olmalıdır
        if (emailInput.value.trim() === '') {
            emailInput.classList.add('input-error');
            emailInput.setAttribute('aria-invalid', 'true');
            emailError.textContent = 'E-poçt boş buraxıla bilməz.';
            emailError.classList.add('show');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('input-error');
            emailInput.setAttribute('aria-invalid', 'true');
            emailError.textContent = 'Düzgün e-poçt daxil edin.';
            emailError.classList.add('show');
            isValid = false;
        } else {
            emailInput.classList.remove('input-error');
            emailInput.removeAttribute('aria-invalid');
            emailError.classList.remove('show');
        }

        // Mesaj boş olmamalıdır
        if (messageInput.value.trim() === '') {
            messageInput.classList.add('input-error');
            messageInput.setAttribute('aria-invalid', 'true');
            messageError.textContent = 'Mesaj boş buraxıla bilməz.';
            messageError.classList.add('show');
            isValid = false;
        } else {
            messageInput.classList.remove('input-error');
            messageInput.removeAttribute('aria-invalid');
            messageError.classList.remove('show');
        }

        formSuccess.classList.remove('show');

        if (isValid) {
            formSuccess.classList.add('show');
            contactForm.reset();
        }
    });
}