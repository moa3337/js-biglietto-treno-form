// calcolare prezzo biglietto treno in base ai km,
// con sconti del 20% o 40% in base all'età
// il prezzo è di 0,21 centesimi al km

// PREZZO €/Km
console.log('Prezzo biglietto: 0.21€/Km');

// Km DA PERCORRERE?
const km = prompt('Quanti Km devi percorrere?');

// ETA' PASSEGERO?
const age = prompt('Quanti anni hai?');

// CALCOLO PER IL PREZZO
let price = km * 0.21;

// SCONTO 20% UNDER 18
if(age < 18){
    price = price - (price * .2);
}
// SCONTO 40% OVER 65
else if(age >= 65){
    price = price - (price * .4);
}

// PREZZo CON 2 DECIMALI
price = price.toFixed(2);

// PREZZO FINALE IN €
console.log('Il prezzo del tuo biglietto è di €' + price);

// PREZZO NEL TITOLO DELLA PAGINA
