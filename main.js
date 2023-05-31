const navMobileBtn = document.getElementById('nav-mobile-btn');
const navMobile = document.getElementById('nav-mobile');

navMobileBtn.addEventListener('click', () => navMobile.classList.contains('hidden') ? navMobile.classList.remove('hidden') : navMobile.classList.add('hidden'));

navMobile.addEventListener('click', (e) => {
    if(e.target.matches('#nav-mob-features') || e.target.matches('#nav-mob-overview')) {
        navMobile.classList.add('hidden');
    }
});