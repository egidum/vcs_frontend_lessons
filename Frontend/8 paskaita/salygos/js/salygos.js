'use strict';
//function arSkaiciusDidesnisUz10(skaicius) {
//    if(skaicius > 10) {
//        document.write("Skaičius", " " + skaicius + " ", "didesnis už 10<br>");
//    }
//    else {
//        document.write("Skaičius", " " + skaicius + " ", "mažesnis už 10<br>");
//    }
//
//}

//function arSkaiciusDidesnisUz10(skaicius) {
//    let statusas  = "";
//    if(skaicius > 10) {
//        statusas = "didesnis";
//    }
//    else {
//        statusas = "mažesnis";        
//    }
//
//    document.write("Skaičius", " " + skaicius + " " + statusas + " už 10<br>");
//}

        // daugiau už ar lygu />=/; daugiau už />/; 
        // mažiau už ar lygu /<=/; mažiau už /</ ; 
        // lygu /==/ 

function arSkaiciusDidesnisUz10(skaicius) {
    let statusas  = "";
    if(skaicius > 10) {
        statusas = "didesnis už";
    }
    else if(skaicius == 10) {
        statusas = "lygus";
    }
    else{
        statusas  = "mažesnis už";
    }
    document.write("Skaičius", " " + skaicius + " " + statusas + " 10<br>");
}

function arTinkamasSlaptazodis(ivedamasSlaptazodis) {
    let esamasSlaptazodis = "12345"
    if(esamasSlaptazodis == ivedamasSlaptazodis) {
        document.write("<strong>Slaptažodis tinka!</strong> Jus prisijungėte.<br>");
        console.log("tinka");
    }
    else{
        document.write("<strong>Slaptažodis netinka!</strong> Bandykite dar kartą.<br>");
        console.log("netinka");
    }
}
