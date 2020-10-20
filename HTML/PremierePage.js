window.onload = function(e){

    
}

class destinations {
    constructor(pays) {
        this.pays = pays;
        this.prix = prix;       
    }
}

var desination1 = new destinations("LeCaire",100);
var desination2 = new destinations("Casablanca",100);
var desination3 = new destinations("Johannesburg",100);
var desination4 = new destinations("Madagascar",100);
var desination5 = new destinations("Zimbabwe",100);
var desination6 = new destinations("Tanzanie",100);


let sejour_id = new URLSearchParams(window.location.search).get("id");

