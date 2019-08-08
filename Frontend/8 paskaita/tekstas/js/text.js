"use strict";
function sujungtiDviEilutes(eilute1, eilute2) {
    let tarpas = " "
    document.write(eilute1, tarpas, eilute2, tarpas);
    //document.write(eilute1 + " " + eilute2);
    
    //let result = eilute1 + eilute2;
    //document.write(result);
}

function sujungti5Eilutes(eil1, eil2, eil3, eil4, eil5) {
    let result = eil1.concat(eil2, eil3, eil4, eil5);
    document.write(result);
}

function rastiZodzioVietaSakinyje(sakinys, zodis){
    let result = sakinys.indexOf(zodis);
    document.write(result);
}