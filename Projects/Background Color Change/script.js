
const colorBox = document.querySelector('.color-box')
const colorCode = document.getElementById('colorCode')

const generateBtn = document.getElementById('generate')
const copyBtn = document.getElementById('copy')


function randomColor(){

    let letters = "0123456789ABCDEF";

    let color = '#';

    for(let i = 0;i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}


generateBtn.addEventListener('click', () =>{
    const newColor = randomColor();

    colorBox.style.background = newColor;

    colorCode.textContent = newColor;
})

copyBtn.addEventListener('click', () =>{
    navigator.clipboard.writeText(colorCode.textContent);
    alert('Color Copied!')
})