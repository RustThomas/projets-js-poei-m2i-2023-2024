//Voiture coordonnées d'origine
var RowStart = 1
var RowEnd = 2
var ColStart = 1
var ColEnd = 2

//park 1 coordonnées
var FirstRowStart = 2
var FirstRowEnd = 4
var FirstColStart = 2
var FirstColEnd = 4

//park 2 coordonnées
var SecRowStart = 2
var SecRowEnd = 4
var SecColStart = 6
var SecColEnd = 8

//park 3 coordonnées
var ThirdRowStart = 6
var ThirdRowEnd = 8
var ThirdColStart = 2
var ThirdColEnd = 4

//park 4 coordonnées
var FouRowStart = 6
var FouRowEnd = 8
var FouColStart = 6
var FouColEnd = 8


//Sélection de la voiture
var voiture = document.querySelector('#voiture');

//Les 4 premières lignes vérifient que la voiture n'est pas sur un des 4 parks
//La 5ème vérifie que la voiture ne va pas "sortir" de la page
function IsMovingPossible(){
    if (((RowStart < FirstRowStart || RowStart > FirstRowEnd) || (ColStart < FirstColStart || ColStart > FirstColEnd)) &&
       ((RowStart < SecRowStart || RowStart > SecRowEnd) || (ColStart < SecColStart || ColStart > SecColEnd)) &&
       ((RowStart < ThirdRowStart || RowStart > ThirdRowEnd) || (ColStart < ThirdColStart || ColStart > ThirdColEnd)) &&
       ((RowStart < FouRowStart || RowStart > FouRowEnd) || (ColStart < FouColStart || ColStart > FouColEnd)) &&
       (RowStart > 0 && RowStart <= 9 && ColStart > 0 && ColStart <= 9))
    {
        return true
    } 
    else
    {
        return false
    }

}

function moveBottom (){
    
    RowStart += 1
    RowEnd += 1
    if (IsMovingPossible())
    {
        voiture.style.gridRowStart = RowStart;
        voiture.style.gridRowEnd = RowEnd;
    }
    else   //Retour des variables à leur état précédent si le mouvement n'est pas possible
    {
        RowStart -= 1
        RowEnd -= 1
    }

    
    
    
}
function moveTop (){
    
    RowStart -= 1
    RowEnd -= 1
    if (IsMovingPossible())
    {
        voiture.style.gridRowStart = RowStart;
        voiture.style.gridRowEnd = RowEnd;
    }
    else
    {
        RowStart += 1
        RowEnd += 1
    }

}


function moveLeft (){
    
    ColStart -= 1
    ColEnd -= 1
    if (IsMovingPossible())
    {
        voiture.style.gridColumnStart = ColStart;
        voiture.style.gridColumnEnd = ColEnd;
    }
    else
    {
        ColStart += 1
        ColEnd += 1
    }

}
function moveRight (){
    
    ColStart += 1
    ColEnd += 1
    if (IsMovingPossible())
    {
        voiture.style.gridColumnStart = ColStart;
        voiture.style.gridColumnEnd = ColEnd;
    }
    else
    {
        ColStart -= 1
        ColEnd -= 1
    }

}



