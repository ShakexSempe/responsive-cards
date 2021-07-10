const navbar = document.getElementById('navbar');
const navHeight = navbar.getBoundingClientRect().height;
const navLinks = document.querySelectorAll('.nav-link') ;

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        
    })
})
