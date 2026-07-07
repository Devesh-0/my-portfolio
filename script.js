const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const formMessage = document.querySelector("#formMessage");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = nameInput.value;
    const userEmail = emailInput.value;

    if (userName === "") {
        formMessage.textContent = "Please enter your name before sending.";
    } else if (userEmail === "") {
        formMessage.textContent = "Please enter your email before sending.";
    }else {
        formMessage.textContent = "Thanks, " + userName + "! Your message has been sent.";
    }
});