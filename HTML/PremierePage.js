window.onload = function(e){

    
}

class destinations {
    constructor(pays) {
        this.pays = pays;       
    }
}

var desination1 = new destinations("LeCaire");
var desination2 = new destinations("Casablanca");
var desination3 = new destinations("Johannesburg");
var desination4 = new destinations("Madagascar");
var desination5 = new destinations("Zimbabwe");
var desination6 = new destinations("Tanzanie");

let sejour_id = new URLSearchParams(window.location.search).get("id");
