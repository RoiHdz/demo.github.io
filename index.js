let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".navbar-responsive");

navToggle.addEventListener("click",() => {
	navMenu.classList.toggle("nav-active")
})