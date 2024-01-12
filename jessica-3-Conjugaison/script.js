function conjuguer(){
    var verbe = document.querySelector('textarea')
    var conjugaisons = document.querySelector('#conjugaisons')

    var present = conjuguerPresent(verbe.value)
    if(present != null){
        var p = document.createElement('p')
        p.innerHTML = "Present: " + present
        conjugaisons.appendChild(p)
        verbe.value = ''
    }
    

}
function conjuguerPresent(verbe){
    if(verbe.endsWith("er")){
        var garder = verbe.slice(0, -2);
        var conjugue = garder + "e";
        return conjugue;
    }else{
        alert("Désolé, cette fonction ne prend en charge que les verbes du premier groupe.");
        return null
    }
}