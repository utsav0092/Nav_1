const navbtn = document.querySelector(".btn");
const navEl = document.querySelector(".nav");

navbtn.addEventListener("click", () => {
    navEl.classList.toggle("nav-open");
});