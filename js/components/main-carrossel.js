const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".main-carrossel .elements");
let pixels = 0;

btnRight.addEventListener("click", function(){
    pixels = pixels + 150;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener("click", function(){
    pixels = pixels - 150;
    elements.style = `transform: translateX(${pixels}px)`;
});