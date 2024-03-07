// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let km = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log('km da percorrere', km);
let age = parseInt(prompt("Quanti hanni hai?"));
console.log('età', age);

const prezzoBase = 0.21;
const scontoUnder = 20 / 100;
console.log('sconto under: ', scontoUnder);
const scontoOver = 40 / 100;
console.log('sconto under: ', scontoOver);


let prezzoSenzaSconto = km * prezzoBase;



if (age < 18) {
    let prezzoUnder = prezzoSenzaSconto - (prezzoSenzaSconto * scontoUnder);
    console.log('prezzo con sconto under : ', prezzoUnder.toFixed(2));
} else if (age >= 65) {
    let prezzoOver = prezzoSenzaSconto - (prezzoSenzaSconto * scontoOver);
    console.log('prezzo con sconto over : ', prezzoOver.toFixed(2));
} else {
    console.log('prezzo normale :', prezzoSenzaSconto.toFixed(2))
}  