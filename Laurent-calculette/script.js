function onClick(value) {
    document.getElementById('resultat').value += value;
}

function reset() {
    document.getElementById('resultat').value = '';
}


function calcul() {
    let calcul = document.getElementById('resultat').value;
        let result = eval(calcul)
        document.getElementById('resultat').value = result;

}
