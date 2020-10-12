let toggle = document.querySelector(".toggle");
let navbar = document.querySelector(".navbar")
let nav = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-link");

function toggleNav(){
  toggle.addEventListener("click", function(){
    nav.classList.toggle("display");
    nav.classList.toggle("displayBlock");
    navbar.classList.toggle("displayBlock");
  })
}

toggleNav();
