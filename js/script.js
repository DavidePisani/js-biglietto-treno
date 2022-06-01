/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

//chiedere eta del passeggero e quanti chilometri deve fare

const userAge = parseInt( prompt('Dammi la prima età') );
const userKm = parseInt( prompt('Dammi quanti chilometri devi percorrere') );
    console.log (userAge);
    console.log (userKm);

// calcolo prezzo biglietto

let price = ( userKm * 0.21 );
let priceFix = price.toFixed(2);
    console.log (price);


// messaggio utente

let userMessage = 'Il prezzo del tuo biglietto è di Euro ' + priceFix;

// se minorenne applicare il 20% di sconto
if ( userAge < 18 ) {
    let discount = price * 20 /100;
    console.log (discount)
    let finalPrice = price - discount;
    let finalPriceFix = finalPrice.toFixed(2);
    console.log (finalPrice)
    userMessage = 'Il prezzo del tuo biglietto è di Euro ' + finalPriceFix;
} 

// se over 65anni applicare sconto del 40%

if ( userAge > 65 ) {
    let discount = price * 40 /100;
    console.log (discount)
    let finalPrice = price - discount;
    let finalPriceFix = finalPrice.toFixed(2);
    console.log (finalPrice)
    userMessage = 'Il prezzo del tuo biglietto è di Euro ' + finalPriceFix;
}

// stampa del prezzo finale in in forma umana (00.00€)

document.getElementById('result').innerHTML = userMessage;