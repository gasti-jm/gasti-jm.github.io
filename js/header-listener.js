window.addEventListener("scroll", function () {
    const elemento = document.getElementById("header");
    if (window.scrollY >= window.innerHeight) {
        elemento.classList.add("header-effect");
    } else {
        elemento.classList.remove("header-effect");
    }
});