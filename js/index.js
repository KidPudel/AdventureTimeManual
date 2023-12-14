import characterSpace from "./random-color.js"

console.log(document.title)

const character = document.getElementsByClassName("character-name")[0]

let clicked = 0;
character.addEventListener("click", incrementOnClick) 

function incrementOnClick() {
    console.log(clicked);
    character.innerHTML = (clicked++).toString() + "times clicked";
}
