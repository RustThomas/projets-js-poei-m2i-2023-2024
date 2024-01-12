//Déclarations des boutons & variables module
let operatorButtons = document.querySelectorAll(".operator");
let numberButtons = document.querySelectorAll(".number");
let displayer = document.querySelector("#displayer");
let numExpression = "" 
//Attribution d'évènements

operatorButtons.forEach(nb => {
    nb.addEventListener('click', (event) => onClickEv(event))
})

numberButtons.forEach(nb => {
    nb.addEventListener('click', (event) => onClickEv(event))
})


function onClickEv(event) {
    const eventValue = event.currentTarget.value
    const exp = buildNumExpression(eventValue)
    if(validsOnlyNum(exp)) {
        display(exp);
    }
}

function buildNumExpression(value) {
    numExpression += value;
    return numExpression;
}

function display(expression) {
    displayer.value = expression;
}

function validsOnlyNum(expression) {
    const pattern = /^[0-9]+\.?[0-9]*$/
    return pattern.test(expression);
}