var voiture = document.getElementById("voiture")

var park1 = document.getElementById("park1")
var park2 = document.getElementById("park2")
var park3 = document.getElementById("park3")
var park4 = document.getElementById("park4")

var style = getComputedStyle(voiture)

console.log("Vroom")

var park1style = getComputedStyle(park1)
var park2style = getComputedStyle(park2)
var park3style = getComputedStyle(park3)
var park4style = getComputedStyle(park4)




//Initialisation voiture, à remplacer si meilleure solution. 
voiture.style.gridColumnEnd +=2;
voiture.style.gridColumnStart ++;
voiture.style.gridRowEnd +=2;
voiture.style.gridRowStart ++;



console.log("Start")
console.log("Rows",style.gridRowStart, style.gridRowEnd)
console.log("Columns",style.gridColumnStart, style.gridColumnEnd)

function moveRight() {
    console.log("Move right")
    console.log("Rows",style.gridRowStart, style.gridRowEnd)
    console.log("Columns",style.gridColumnStart, style.gridColumnEnd)
    if(style.gridRowEnd ==2 ||style.gridRowEnd == 10
        ||style.gridRowEnd == 6) {
        if(style.gridColumnEnd <10) {
            console.log("in if, columns :",voiture.style.gridColumnEnd,
            voiture.style.gridColumnStart);
            voiture.style.gridColumnEnd ++;
            voiture.style.gridColumnStart ++;
            console.log("in if, columns post :",voiture.style.gridColumnEnd,
            voiture.style.gridColumnStart)
            
        }
    }
    console.log("Rows",style.gridRowStart, style.gridRowEnd)
    console.log("Columns",style.gridColumnStart, style.gridColumnEnd)
}

function moveLeft() {
    console.log("Move Left")
    console.log("Rows",style.gridRowStart, style.gridRowEnd)
    console.log("Columns",style.gridColumnStart, style.gridColumnEnd)
    if(style.gridRowEnd ==2 ||style.gridRowEnd == 10
        ||style.gridRowEnd == 6) {
        if(style.gridColumnStart >1) {
            voiture.style.gridColumnEnd --;
            voiture.style.gridColumnStart --;
            
        }
    }
}

function moveBottom() {
    console.log("Move Bottom")
    console.log("Rows",style.gridRowStart, style.gridRowEnd)
    console.log("Columns",style.gridColumnStart, style.gridColumnEnd)
    if(style.gridColumnStart == 1 || style.gridColumnStart ==5 || 
        style.gridColumnStart == 9 ) {
            if(style.gridRowStart<9) {
                voiture.style.gridRowEnd++;
                voiture.style.gridRowStart++;
            }
        }

}

function moveTop() {
    console.log("Move Top")
    console.log("Rows",style.gridRowStart, style.gridRowEnd)
    console.log("Columns",style.gridColumnStart, style.gridColumnEnd)
    if(style.gridColumnStart == 1 || style.gridColumnStart ==5 || 
        style.gridColumnStart == 9 ) {
            if(style.gridRowStart>1) {
                voiture.style.gridRowEnd--;
                voiture.style.gridRowStart--;
            }
        }

}