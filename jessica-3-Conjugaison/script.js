function conjuguer(){
    var verbe = document.querySelector('textarea')
    var conjugaisons = document.querySelector('#conjugaisons')
    var opt = document.querySelector('#conjugaisons-opt')
    switch(opt.value){
        case "futur":
            conjugaisons.value = ''
            var futur = conjuguerFutur(verbe.value)
            if(futur != null){
                var p = document.createElement('p')
                p.innerHTML = "Futur:<br>" 
                for (const personne in futur) {
                    p.innerHTML += `${personne}: ${futur[personne]}<br>`
                }
                conjugaisons.appendChild(p)
                verbe.value = ''
            }
            break;
        case "present":
            conjugaisons.value = ''
            var present = conjuguerPresent(verbe.value)
            if(present != null){
                var p = document.createElement('p')
                p.innerHTML = "Present:<br>" 
                for (const personne in present) {
                    p.innerHTML += `${personne}: ${present[personne]}<br>`
                }
                conjugaisons.appendChild(p)
                
            }
            verbe.value = ''
            break;
        case "imparfait":
            conjugaisons.value = ''
            var imparfait = conjuguerImparfait(verbe.value)
            if(imparfait != null){
                var p = document.createElement('p')
                p.innerHTML = "Imparfait:<br>" 
                for (const personne in imparfait) {
                    p.innerHTML += `${personne}: ${imparfait[personne]}<br>`
                }
                conjugaisons.appendChild(p)
                verbe.value = ''
            }
            break
        default:
            alert("il faut choisir la conjugaison");
    }
}
function conjuguerPresent(verbe){
    if(verbe.endsWith("er")){
        var garder = verbe.slice(0, -2);
        var conjugaisons = {
            je: garder + "e",
            tu: garder + "es",
            il_elle_on: garder + "e",
            nous: garder + "ons",
            vous: garder + "ez",
            ils_elles: garder + "ent"
        };
        return conjugaisons;
    }else{
        alert("Désolé, cette fonction ne prend en charge que les verbes du premier groupe.");
        return null
    }
}

function conjuguerFutur(verbe){
    if(verbe.endsWith("er")){
        var garder = verbe.slice(0, -2);
        var conjugaisons = {
            je: garder + "ai",
            tu: garder + "as",
            il_elle_on: garder + "a",
            nous: garder + "ons",
            vous: garder + "ez",
            ils_elles: garder + "ont"
        };
        return conjugaisons;
    }else{
        alert("Désolé, cette fonction ne prend en charge que les verbes du premier groupe.");
        return null
    }
}

function conjuguerImparfait(verbe){
    if(verbe.endsWith("er")){
        var garder = verbe.slice(0, -2);
        var conjugaisons = {
            je: garder + "ais",
            tu: garder + "ais",
            il_elle_on: garder + "ait",
            nous: garder + "ions",
            vous: garder + "iez",
            ils_elles: garder + "aient"
        };
        return conjugaisons;
    }else{
        alert("Désolé, cette fonction ne prend en charge que les verbes du premier groupe.");
        return null
    }
}