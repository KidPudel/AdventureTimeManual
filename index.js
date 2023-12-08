console.log(document.title)

const character = document.getElementsByClassName("character-name")[0]

let clicked = 0;
character.addEventListener("click", incrementOnClick) 

function incrementOnClick() {
    console.log(clicked);
    character.innerHTML = (clicked++).toString() + "times clicked";
}

const characterBackground = document.getElementsByClassName("character")[0]
let customColors = [];
for (let i = 0; i < 100; i++) {
    customColors.push("rgb(" + Math.floor(Math.random() * 256) + ", " +  Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +  ") ")
} 

characterBackground.addEventListener("click", switchColor)

function switchColor() {
    const randomColor = customColors[Math.floor(Math.random() * 100)];
    console.log(randomColor);
    characterBackground.style.backgroundColor = randomColor;
}


window.onscroll = function() {showTopBarOnScroll()};

function showTopBarOnScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topbar").style.top = "0px";
    } else {
        document.getElementById("topbar").style.top = "-50px";
    }
}