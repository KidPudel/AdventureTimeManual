import manual from "./random-color.js";

console.log(document.title)

const character = document.querySelector(".character-name");

character.addEventListener("click", incrementOnClick);

function incrementOnClick() {
    console.log(clicked);
    character.innerHTML = (clicked++).toString() + "times clicked";
}
window.onscroll = moveTopbar;

function moveTopbar() {
    console.log(document.getElementById("topbar"));
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        document.getElementById("topbar").style.top = "0px";
    } else {
        console.log(document.documentElement.scrollTop);
        document.getElementById("topbar").style.top = "-50px";
    }
}