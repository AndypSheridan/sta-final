const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
let navOpen = false

toggleButton.addEventListener('click', function() {
    for(let i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');
    navOpen = true
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 600 && navOpen) {
        for(let i=0; i<navbarLinks.length; i++) {
            if (navbarLinks[i].classList.contains('active')) {
                navbarLinks[i].classList.toggle('active');
            }
        }
        navOpen = false
    }
})