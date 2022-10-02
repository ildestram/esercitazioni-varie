const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// 1) definisco: una variabile per il bottone e una variabile per i colori
let btn = document.getElementById('btn');
let color = document.querySelector('color');

// imposto l'eventlistener per il click del bottone
btn.addEventListener('click', function () {
    // dobbiamo ottenere un numero random fra 0 e 3 
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
