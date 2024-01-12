const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');




iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});


iconClose.addEventListener('click', () => {

    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });

});

// backgraund header

function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader)



// Scroll sections active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


// counts




//  testimonial section 
let swiper = new Swiper(".testimonial_container", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }

});


// animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

    })
    sr.reveal('.home_content, .about_acces-content , .demo  , .wrapper')
    sr.reveal ('.home_imgg, .about_accses-img , .finish p ' , {origin: 'bottom' })
    sr.reveal (` .team_title , .about_content, .about_robet-content, .features_des , .testimonial_item , .finish` ,{origin: 'left' })
    sr.reveal (` .features_title, .about_img,  .about_robet-img, .click`, {origin: 'right' })
    sr.reveal (` .team_content a , .features_content div , .about_content li, .robet_content h2, .pricing_content , .tool a , .blog_content div , .socials a`, {interval:100 })