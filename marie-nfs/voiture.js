var car = document.getElementById('voiture')
var btnRight = document.getElementById('right')
var btnLeft = document.getElementById('left')
var btnTop = document.getElementById('top')
var btnBottom = document.getElementById('bottom')
var buttons = document.querySelectorAll('button')

//tests si btn en bordure de cadre (1er if) ou de park (2eme if)
function moveRight(){
    if (car.style.gridColumnStart == '9'){
        desactivateBtn(btnRight)
    } else if ((car.style.gridColumnStart == '1' || car.style.gridColumnStart == '5' ) && 
        (
            (Number(car.style.gridRowStart) >= 2 && Number(car.style.gridRowStart) < 5) || 
            (Number(car.style.gridRowStart) >= 6 && Number(car.style.gridRowStart) < 9)
        )){
        desactivateBtn(btnRight)
    }
    else {
        initialize()
        car.style.gridColumnStart = Number(car.style.gridColumnStart) + 1 
        car.style.gridColumnEnd = Number(car.style.gridColumnEnd) + 1
    }
}

function moveLeft(){
    if (car.style.gridColumnStart == '1'){
        desactivateBtn(btnLeft)
    } else if ((car.style.gridColumnStart == '5' || car.style.gridColumnStart == '9' ) && 
    (
        (Number(car.style.gridRowStart) >= 2 && Number(car.style.gridRowStart) < 5) || 
        (Number(car.style.gridRowStart) >= 6 && Number(car.style.gridRowStart) < 9)
    )){
        desactivateBtn(btnLeft)
    } else {
        initialize()
        car.style.gridColumnStart = Number(car.style.gridColumnStart) - 1
        car.style.gridColumnEnd = Number(car.style.gridColumnEnd) - 1
    }
}

function moveTop(){
    if (car.style.gridRowStart == '1'){
        desactivateBtn(btnTop)
    } else if ((car.style.gridRowStart == '5' || car.style.gridRowStart == '9' ) && 
    (
        (Number(car.style.gridColumnStart) >= 2 && Number(car.style.gridColumnStart) < 5) || 
        (Number(car.style.gridColumnStart) >= 6 && Number(car.style.gridColumnStart) < 9)
    )){
        desactivateBtn(btnTop)
    } else {
        initialize()
        car.style.gridRowStart = Number(car.style.gridRowStart) - 1
        car.style.gridRowEnd = Number(car.style.gridRowEnd) - 1
    }
}

function moveBottom(){
    if (car.style.gridRowStart == '9'){
        desactivateBtn(btnBottom)
    } else if ((car.style.gridRowStart == '1' || car.style.gridRowStart == '5' ) && 
    (
        (Number(car.style.gridColumnStart) >= 2 && Number(car.style.gridColumnStart) < 5) || 
        (Number(car.style.gridColumnStart) >= 6 && Number(car.style.gridColumnStart) < 9)
    )){
        desactivateBtn(btnBottom)
    } else {
        initialize()
        car.style.gridRowStart = Number(car.style.gridRowStart) + 1
        car.style.gridRowEnd = Number(car.style.gridRowEnd) + 1
    }
}

function initialize(){
    if(car.style.gridColumnStart == '' && car.style.gridRowStart == ''){
        car.style.gridColumnStart = '1'
        car.style.gridColumnEnd = '2'
        car.style.gridRowStart = '1'
        car.style.gridRowEnd = '2'
    }
    for (const btn of buttons) {
        btn.removeAttribute('disabled')
        btn.style.cursor = 'pointer'
        btn.style.opacity = '1'
    }
}

function desactivateBtn(btn){
    btn.setAttribute('disabled','');
    btn.style.opacity = '0.9'
    btn.style.cursor = 'default'
}