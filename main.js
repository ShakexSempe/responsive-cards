const navbar = document.getElementById('navbar');
const navHeight = navbar.getBoundingClientRect().height;
const navLinks = document.querySelectorAll('.nav-link') ;

// navLinks.forEach(link => {
//     link.addEventListener("click", e => {
//         e.preventDefault();
//         const id = e.currentTarget.getAttribute('href').slice(1);
//         const element = document.getElementById(id);
//         console.log(id);
//         const navHeight = navbar.getBoundingClientRect().height;
//         position = element.offsetTop - navHeight;

//         window.scrollTo({
//             left: 0,
//             top: position,
//         });
//     })
// })
