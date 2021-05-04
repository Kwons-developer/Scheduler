const body = document.querySelector("body");

const IMG = 6;


function genRandom() {
    const number = Math.floor(Math.random() * IMG);
    return number;
}

function paintImage(IMG) {
    const image = new Image();
    image.src = `background/${IMG + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}


function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();