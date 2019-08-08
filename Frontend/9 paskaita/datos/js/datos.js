function duokManSiosDienosData(){
    let d = new Date("2019-9-8");
    //new Date("galima ivesti data") 
    //jei neivedam i () isveda sios dienos data
    //ir prideda 0 prie menesio
    let metai = d.getFullYear();
    let menuo = d.getMonth();
    let diena = d.getDate();
    
    //kadangi viskas skaiciojama nuo 0, tai (javascript 0 = sausis; 7 = rugpjutis)
    //padidinam menesio/dienos skaiciu 1. (3 var.)        
    //menuo = menuo + 1;
    //menuo++;
    menuo += 1;
    
    let menuoKaipTekstas = String(menuo);
    if(menuoKaipTekstas.length == 1){
        menuo = "0" + menuo;
    }
        
    let dienaKaipTekstas = String(diena);
    if(dienaKaipTekstas.length == 1){
        diena = "0" + diena;
    }
    
    
    let pilnaData = metai + "-" + menuo + "-" + diena;
    return pilnaData;
}