document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});

window.addEventListener("resize", function () {
    var myDiv = document.getElementById("sign-up");
    if (window.innerWidth <= 768) {
        // Screen width is smaller or equal to 768 pixels
        myDiv.classList.remove("sign-up");
        myDiv.classList.remove("scrolled-button");
    } else {
        // Screen width is greater than 768 pixels
        if (
            !myDiv.classList.contains("sign-up") ||
            !myDiv.classList.contains("scrolled-button")
        ) {
            // Add the class back if it's not present
            myDiv.classList.add("sign-up");
            myDiv.classList.add("scrolled-button");
        }
    }
});

window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var signUp = document.getElementById("sign-up");
    if (window.scrollY > 500) {
        navbar.classList.add("scrolled");
        // signUp.classList.add("scrolled-button");
    } else {
        navbar.classList.remove("scrolled");
        // signUp.classList.remove("scrolled-button");
    }
});

function scrollToElement(id) {
    var element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
