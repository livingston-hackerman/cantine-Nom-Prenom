
// I. Préparez votre projet.
// II. Déclarez les données de la commande.

const attiekePoisson = 1500
const rizPoulet = 2000
const allocoOeuf = 1000

let client = "Awa"
let codeDuPlat = 1
let quantite = Number("3")
let montantVers = 5000
let prixUnitaire = 0

// III. Determinez le prix unitaire

    if(codeDuPlat == 1){
    prixUnitaire = attiekePoisson
    }
    else if(codeDuPlat == 2){
    prixUnitaire = rizPoulet
    }
    else {
    prixUnitaire = allocoOeuf
    }
console.log(' le prix unitaire du plat de awa est '+prixUnitaire+' FCFA '); 

// IV. Calculez le montant de la commande.

function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire*quantite;
}
let montant = (calculerTotal(prixUnitaire, quantite))
console.log(' le montant total est '+montant+' FCFA ');