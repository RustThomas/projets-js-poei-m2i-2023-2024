// Construction de la grille 
var emptyLine = []
for (let i = 0; i < 9; i++) emptyLine.push(0)
var fullLine = [0, 1, 1, 1, 0, 1, 1, 1, 0]
var myGrid = [emptyLine, fullLine, fullLine, fullLine, emptyLine, fullLine, fullLine, fullLine, emptyLine]
var xCar = 1
var yCar = 1

function testMoveCar(){
    if (xCar < 1 ||
        xCar > 9 ||
        yCar < 1 ||
        yCar > 9 ||
        myGrid[yCar - 1][xCar - 1] == 1)
        {
            return false
        }
    moveCar()
    return true
}

function moveCar() {
    let myCar = document.getElementById('voiture')
    myCar.style.gridColumnStart = xCar
    myCar.style.gridColumnEnd = xCar + 1
    myCar.style.gridRowStart = yCar
    myCar.style.gridRowEnd = yCar + 1
}

function moveLeft() {
    xCar--;
    if (!testMoveCar()){
        xCar++
    }  
}

function moveRight() {
    xCar++;
    if (!testMoveCar()){
        xCar--
    }  
}

function moveTop() {
    yCar--;
    if (!testMoveCar()){
        yCar++
    }  
}

function moveBottom() {
    yCar++;
    if (!testMoveCar()){
        yCar--
    }  
}