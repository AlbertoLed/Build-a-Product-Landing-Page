const navMobileBtn = document.getElementById('nav-mobile-btn');
const navMobile = document.getElementById('nav-mobile');

//When the nav bar icon is clicked then shows navbar
navMobileBtn.addEventListener('click', () => navMobile.classList.contains('hidden') ? navMobile.classList.remove('hidden') : navMobile.classList.add('hidden'));

//When and option in the navbar is clicked then hidden navbar
navMobile.addEventListener('click', (e) => {
    if(e.target.matches('#nav-mob-features') || e.target.matches('#nav-mob-overview')) {
        navMobile.classList.add('hidden');
    }
});