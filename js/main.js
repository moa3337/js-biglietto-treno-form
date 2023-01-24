// calcolare prezzo biglietto treno in base ai km,
// con sconti del 20% o 40% in base all'età
// il prezzo è di 0,21 centesimi al km

// CREAZIONE EVENTO SUL CLICK "GENERA"
const btnGenera = document.getElementById('genera');
btnGenera.addEventListener('click',function(){
    console.log('ho premuto il bottone');
    // QUESTO CODICE VIENE ESEGUITO QUANDO SI PREME "GENERA"
    // RECUPERARE: NOME, COGNOME, ETA' E KM
    
    const userName = document.getElementById('name').value;
    const km = document.getElementById('km');
    const age = document.getElementById('age');

    
    let price = km * 0.21;
    // SCONTO UNDER 18
    if (age < 18) {
        price = price - (price * .2);
    }
    // SCONTO 40% OVER 65
    else if (age >= 65) {
        price = price - (price * .4);
    }
    
    // ASSEGNAZIONE POSTO E COD CP
    let seatNumber = Math.floor(Math.random)() * 100;
    let randomCod = Math.floor(Math.random)() * 100 + 10;

    // INFORMAZIONE DA STAMPARE SUL BIGLIETTO
    // document.getElementById('discount').innerHTML =
    document.getElementById('seat').innerHTML = seatNumber;
    document.getElementById('cod').innerHTML = randomCod;
    document.getElementById('price').innerHTML = "€" + price.toFixed(2);
});

