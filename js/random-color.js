const manual = document.getElementById("manual");
let randomColors = [];
for (let i = 0; i < 100; i++) {
    randomColors.push("rgb(" + Math.floor(Math.random() * 256) + ", " +  Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +  ") ");
}


manual.addEventListener("click", switchColor);

function switchColor() {
    const randomColor = randomColors[Math.floor(Math.random() * 100)];
    console.log(randomColor);
    manual.style.backgroundColor = randomColor;
}

export default manual;