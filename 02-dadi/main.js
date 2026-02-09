/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Funzione per il lancio del dado random
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Funzione di Verifica pari o dispari della somma
function isOddOrEven(value) {
    if (value % 2 === 0) {
        return "pari";
    }

    return "dispari";
}


// Richiesta predizione pari o dispari all'utente
let choice;
do {
    choice = prompt("Scegli 'pari' o 'dispari'");
    
} while (choice != "pari" && choice != "dispari");

// Richiesta valore all'utente
let userValue;
do {
    userValue = Number(prompt("Inserisci un valore da 1 a 6"));
} while (userValue < 1 || userValue > 6);

// Salvataggio lancio del computer
const computerValue = getRandomNumber();

// Somma dei due valori
const sum = computerValue + userValue;

// Controllo pari o dispari della somma
const isSumOddOrEven = isOddOrEven(sum);

// Output vincitore
if (isSumOddOrEven === choice) {
    console.log("Hai Vinto!");
} else {
    console.log("Ha vinto il computer");
}
