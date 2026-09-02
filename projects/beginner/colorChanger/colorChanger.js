const bgColorInput = document.getElementById('bgColor');
const fontColorInput = document.getElementById('fontColor');

const bgColor = document.getElementById('bgColorButton');
const color = document.getElementById('fontColorButton');
const resetButton = document.getElementById("resetColor");

const buttons = document.getElementsByClassName("color-button");
bgColor.addEventListener('click', (e) =>{
    const innerColor = bgColorInput.value;
    document.body.style.backgroundColor = innerColor;
});

color.addEventListener('click', (e) =>{
    const color = fontColorInput.value;
    document.body.style.color = color;
});

resetButton.addEventListener('click', (e) =>{
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    bgColorInput.value = '#ffffff';
    fontColorInput.value = '#000000';
});