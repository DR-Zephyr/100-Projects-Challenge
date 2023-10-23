/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

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

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => {
    n.addEventListener('click', linkAction);
});

/*=============== Shadow header ===============*/
const header = document.getElementById('header');

const shadowHeader = () => {
    this.scrollY >= 50
        ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shadowHeader);

/*=============== Shadow header ===============*/
const scrollUp = document.getElementById('scroll-up');

const showScroll = () => {
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', showScroll);

/*=============== Scroll Sections Active Link ===============*/
const sections = document.querySelectorAll('.section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    console.log('/////////////////////////////////////')
    sections.forEach((current) => {
        console.log(`${current.getAttribute('id')}: offsetTop: ${current.offsetTop - 58}, offsetHeight: ${current.offsetHeight}, scrollDown: ${scrollDown}`)
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector(
                '.nav__menu a[href*=' + sectionId + ']'
            );

        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);
