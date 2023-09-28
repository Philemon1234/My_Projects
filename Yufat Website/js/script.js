let openNav = document.getElementById("open");
let closeNav = document.getElementById("close");
let navBar = document.querySelector(".nav_links");

openNav.addEventListener("click", function() {
    navBar.classList.add("show_nav");
})

closeNav.addEventListener("click", function() {
    navBar.classList.remove("show_nav");
})

