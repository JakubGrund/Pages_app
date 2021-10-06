//vzít tlačítko
// kliknout na tlačíkto a vykonat funkci
//funkce schová první a rozbrazí druhý screen - display:none


const buttonOne = document.getElementById('button1');
const buttonTwo = document.getElementById('button2');
const boxOne = document.querySelector('.box1');
const boxTwo = document.querySelector('.box2');
const dotOne = document.getElementById('dot1');
const dotTwo = document.getElementById('dot2');


buttonOne.addEventListener("click", nextSlide);
buttonTwo.addEventListener("click", nextSlide);


function nextSlide() {
    boxOne.classList.toggle("zmizeni");
    boxTwo.classList.toggle("zmizeni");
    dotOne.classList.toggle("full-dot");
    dotTwo.classList.toggle("full-dot");
}


dotOne.addEventListener("click", firstDot);
dotTwo.addEventListener("click", secondDot);

function firstDot() {
    boxOne.classList.remove("zmizeni")
    boxTwo.classList.add("zmizeni")
    dotOne.classList.add("full-dot")
    dotTwo.classList.remove("full-dot")
}

function secondDot() {
    boxOne.classList.add("zmizeni")
    boxTwo.classList.remove("zmizeni")
    dotOne.classList.remove("full-dot")
    dotTwo.classList.add("full-dot")
}