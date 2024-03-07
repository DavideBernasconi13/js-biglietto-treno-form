// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let fname = document.querySelector('.fname');
let sname = document.querySelector('.sname');
let km = document.querySelector('.km');

let age = document.querySelector('.age');
const ticket = document.getElementById('ticket');
let offerta = document.querySelector('.tipologiaOfferta');

const prezzoBase = 0.21;
const scontoUnder = 20 / 100;
//console.log('sconto under: ', scontoUnder);
const scontoOver = 40 / 100;
//console.log('sconto under: ', scontoOver);

const price = document.querySelector('.price');

const carrozzaNumero = document.querySelector('.carrozzaNumero');
let carrozzaNumeroRandom = parseInt(Math.random() * 12) + 1;
console.log(carrozzaNumeroRandom);


//funzione prendi i dati e mettili al posto giusto
const inviaDati = document.getElementById('submit');

inviaDati.addEventListener('click', function () {
    // compila nome e cognome sul biglietto
    ticket.querySelector('.fname').innerHTML = fname.value;
    ticket.querySelector('.sname').innerHTML = sname.value;

    // legge i km e calcola il prezzo base, senza sconti
    let kmValue = parseInt(km.value);
    console.log('valore km: ', kmValue);
    let prezzoSenzaSconto = kmValue * prezzoBase;
    console.log(prezzoSenzaSconto);

    //esegue confronto su età per determinare l'offerta
    if (age.value < 18) {
        offerta.innerHTML = "Offerta junior";
    } else if (age.value >= 65) {
        offerta.innerHTML = "Offerta senior";
    } else {
        offerta.innerHTML = "Offerta standard"
    }

    // determina il numero di carrozza
    carrozzaNumero.innerHTML = carrozzaNumeroRandom;

    price.innerHTML = '€ ';
    //console.log('vuoi percorrere km: ', parseInt(km.value));
    //console.log('La tua età è: ', parseInt(age.value));
    if (age.value < 18) {
        let prezzoUnder = prezzoSenzaSconto - (prezzoSenzaSconto * scontoUnder);
        price.append(prezzoUnder.toFixed(2));
        //console.log('prezzo con sconto under : ', prezzoUnder.toFixed(2));
    } else if (age.value >= 65) {
        let prezzoOver = prezzoSenzaSconto - (prezzoSenzaSconto * scontoOver);
        price.append(prezzoOver.toFixed(2));
        //console.log('prezzo con sconto over : ', prezzoOver.toFixed(2));
    } else {
        price.append(prezzoSenzaSconto.toFixed(2));

        //console.log('prezzo normale :', prezzoSenzaSconto.toFixed(2))
    }
    ticket.classList.remove('d-none');
})

// funzione reset i dati
const reset = document.getElementById('reset');

reset.addEventListener('click', function () {
    fname.value = '';
    sname.value = '';
    age.value = '';
    km.value = '';
    price.innerHTML = '€ ';
    ticket.classList.add('d-none');
})



