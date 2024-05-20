function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const nav = () =>{
    const navp = document.getElementById('popup');
    navp.style.display = navp.style.display === "block" ? "none" : "block";
}

function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Get the reference to the image element
    var img = document.getElementById("modeToggleBtn");

    // Check the current source of the image and toggle it
    if (img.src.includes("img/mode1.png")) {
        img.src = "img/mode.png";
    } else {
        img.src = "img/mode1.png";
    }
}