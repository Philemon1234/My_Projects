let openNav = document.getElementById("open");
let closeNav = document.getElementById("close");
let nav_links = document.querySelector(".nav_links");

openNav.addEventListener("click", function() {
    nav_links.classList.add("show_nav");
})

closeNav.addEventListener("click", function() {
    nav_links.classList.remove("show_nav");
})

