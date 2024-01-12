//Déclarations des boutons & variables module
let operatorButtons = document.querySelectorAll(".operator");
let numberButtons = document.querySelectorAll(".number");
let displayer = document.querySelector("#displayer");
let clearButton = document.querySelector("#clear");
let equalsButton = document.querySelector(".equal-sign");
let numExpression = "" 


//Attribution d'évènements

operatorButtons.forEach(nb => {
    nb.addEventListener('click', (event) => onClickEv(event))
})

numberButtons.forEach(nb => {
    nb.addEventListener('click', (event) => onClickEv(event))
})

clearButton.addEventListener('click', clearDisplayer);
equalsButton.addEventListener('click', onEqualsClick)


//Fonctions

function onClickEv(event) {
    const eventValue = event.currentTarget.value
    const exp = buildNumExpression(eventValue)
    if(validsOnlyNum(exp)) {
        display(exp);
    }
}

function onEqualsClick() {
    console.log(numExpression);
    if(validsOperationExpression(numExpression)) {
        const res = eval(numExpression);
        clearDisplayer();
        display(res);
        numExpression = "";
    }
}

function buildNumExpression(value) {
    numExpression += value;
    return numExpression;
}

function display(expression) {
    displayer.value = expression;
}

function clearDisplayer() {
    displayer.value="";
}

function validsOnlyNum(expression) {
    const pattern = /^[0-9]+\.?[0-9]*$/
    return pattern.test(expression);
}

function validsOperationExpression(expression) {
    const pattern = /^[0-9]+\.?[0-9]*[\* || \/ || \- || +]{1}[0-9]+\.?[0-9]*$/
    return pattern.test(expression)
}