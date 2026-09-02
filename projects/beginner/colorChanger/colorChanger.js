document.addEventListener('click', function(e){
    const bgColor = document.getElementById('bgColor').value;
    const color = document.getElementById('fontColor').value;
    if(e.target.id === 'fontColorButton'){
        document.body.style.color = color;
        document.getElementsByClassName("color-button").item(0).style.color = color;
    }
    if(e.target.id === 'bgColorButton'){
        document.body.style.backgroundColor = bgColor;
        document.getElementsByClassName("color-button").item(0).style.backgroundColor = bgColor;
    }
    if(e.target.id === 'resetColor'){
        document.body.style.color = '#000000';
        document.body.style.backgroundColor = '#ffffff';
        document.getElementsByClassName("color-button").item(0).style.color = '#000000';
        document.getElementsByClassName("color-button").item(0).style.backgroundColor = '#797979';
    }
});