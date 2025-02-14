/*=============== SHOW MENU ===============*/

document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLink = document.querySelectorAll('.nav__link');

    const linkAction = () => {
        navMenu.classList.remove('show-menu');
    };

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    navLink.forEach((n) => n.addEventListener('click', linkAction));
});


/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    }

});



/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMsg = document.getElementById('contact-msg'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    if (contactName.value === '' || contactEmail.value === '' || contactMsg.value === '') {

        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = "preencha todos os campos! 👀"
    } else {
        //serviceID, templateID, #form, publicKey
        emailjs.sendForm('service_m8tkbwd', 'template_ex2wubb', '#contact-form', 'uBC7j858YsjR5TekU')
            .then(() => {
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Mensagem enviada ✔'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('Opa, alguma coisa deu errado aqui... 🛠', error)
            })

        contactName.value = ''
        contactEmail.value = ''
        contactMsg.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== Popup  ===============*/

document.querySelectorAll('.projects__content').forEach(content => {
    content.addEventListener('click', () => {
        content.classList.toggle('active');
    });
});

/*=============== Qualification  ===============*/

const showMoreBtn = document.getElementById('showMoreBtn');
const qualificationExtras = document.querySelectorAll('.qualification__extra');

showMoreBtn.addEventListener('click', () => {
  qualificationExtras.forEach(extra => extra.classList.toggle('active'));
  showMoreBtn.textContent = qualificationExtras[0].classList.contains('active') ? 'Ver Menos' : 'Ver Mais';
});
