var voiture = document.getElementById("voiture")

var park1 = document.getElementById("park1")
var park2 = document.getElementById("park2")
var park3 = document.getElementById("park3")
var park4 = document.getElementById("park4")

var style = getComputedStyle(voiture)
console.log(style)

var park1style = getComputedStyle(park1)
var park2style = getComputedStyle(park2)
var park3style = getComputedStyle(park3)
var park4style = getComputedStyle(park4)
/*
function collides() {

}*/ 

function moveRight() {
    console.log(style.gridRowStart, style.gridRowEnd)
    if(style.gridRowEnd ==1 ||style.gridRowEnd == 9 
        ||style.gridRowEnd == 5) {
        if(style.gridColumnEnd <9) {
            voiture.style.gridColumnEnd ++;
            voiture.style.gridColumnStart ++;
            
        }
    }
}

function moveLeft() {
    if(style.gridRowEnd ==1 ||style.gridRowEnd == 9
        ||style.gridRowEnd == 5) {
        if(style.gridColumnStart >1) {
            voiture.style.gridColumnEnd --;
            voiture.style.gridColumnStart --;
            
        }
    }
}

function moveBottom() {
    if(style.gridColumnStart == 1 || style.gridColumnStart ==5 || 
        style.gridColumnStart == 9 ) {
            if(style.gridRowStart<9) {
                voiture.style.gridRowEnd++;
                voiture.style.gridRowStart++;
            }
        }

}

function moveTop() {
    if(style.gridColumnStart == 1 || style.gridColumnStart ==5 || 
        style.gridColumnStart == 9 ) {
            if(style.gridRowStart>1) {
                voiture.style.gridRowEnd--;
                voiture.style.gridRowStart--;
            }
        }

}