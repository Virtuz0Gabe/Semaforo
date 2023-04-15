const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0
let intervelID = null

const trafficLght = (event) => {
    stopautomatic();
    turnOn[event.target.id]()
}

const nextIndex = () => {
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
} // if ternário ^^

const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color] ();
    nextIndex();
}

const stopautomatic = () => {
    clearInterval ( intervelID);
}

const turnOn = {
    'red': () => img.src = "./img/vermelho.png",
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = "img/verde.png",
    'automatic': () => intervelID = setInterval( changecolor, 1000),
    'turnOff': () => img.src = "img/desligado.png"
}


buttons.addEventListener('click', trafficLght );