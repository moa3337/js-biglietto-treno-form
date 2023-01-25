// calcolare prezzo biglietto treno in base ai km,
// con sconti del 20% o 40% in base all'età
// il prezzo è di 0,21 centesimi al km

// CREAZIONE EVENTO SUL CLICK "GENERA"
const btnGenera = document.getElementById('genera');
btnGenera.addEventListener('click',function(){

    // Recupera i valori del nome, dei chilometri e dell'età 
    let name = document.getElementById("name").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;

    // PREZZO €/Km
    console.log('prezzo biglietto: 0.21€/Km');

    // Calcola il prezzo base in base ai chilometri
    let Price = km * 0.21;

    // Applica lo sconto in base all'etÃ 
    if (age < 18) {
        Price = Price - (Price * .2);
    } else if (age >= 65) {
        Price = Price - (Price * .4);
    }

    // PREZZO FINALE IN €
    console.log("Il prezzo del tuo biglietto è di €" + Price);

    // Genera un numero casuale per il posto
    let seatNumber = Math.floor(Math.random() * 100) + 1;

    // Mostra i valori nella pagina
    document.getElementById("passengerName").innerHTML = name;
    document.getElementById("distance").innerHTML = km + " km";
    document.getElementById("seatNumber").innerHTML = seatNumber;
    document.getElementById("ticketPrice").innerHTML = "€" + Price.toFixed(2);   
});

    


