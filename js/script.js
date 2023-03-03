/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// chiedo all'utente di inserire una parola
let userWord = document.getElementById("user-word");

let checkButtonEl = document.getElementById("check-button");

checkButtonEl.addEventListener("click", function() {

    // inizializzo una variabile per inserire nel DOM il risultato
    let palindromeEl = document.getElementById("palindroma");

    if (userWord.value == "") {

        palindromeEl.innerText = "Scrivi Qualcosa!";

    } else {

        // scrivo nel DOM il risultato
        palindromeEl.innerText = checkPalindrome(userWord.value);

        console.log(checkPalindrome(userWord));

    }

})



// aggiungo il ciclo while così finchè non si compila, non si potrà andare avanti
// while (userWord == null || userWord == "") {

//     userWord = prompt("Inserisci una parola");

// }


// creo la variabile secondo la quale se la parola è palindroma non entra e va avanti, se non lo è entro nel ciclo for
function checkPalindrome(word) {

    // inizializzo una variabile per non scrivere sempre .length
    let wordLength = word.length;

    // creo un ciclo for per calcolare se la prima lettera e l'ultima corrispondente siano uguali, fino ad arrivare alla metà
    for (let i = 0; i < wordLength / 2; i++) {
        // se la prima lettera è diversa dall'ultima, allora non è palindroma
        if (word[i] !== word[wordLength - 1 - i]) {

            return "La parola che hai inserito non è palindroma";

        } 

    }

    // ritorniamo questo risultato = palindroma
    return "La parola che hai inserito è palindroma";

}



/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



// chiedo all'utente di scegliere pari o dispari
const evenOrOddEl = document.getElementById("even-or-odd");
const userNumberEl = document.getElementById("user-number");
const userButtonEl = document.getElementById("user-button");
const userOutputEl = document.getElementById("user-output");

// inizializzo una variabile somma che potrà essere riutilizzata in qualsiasi momento
let somma;

// al click del bottone, dopo aver inserito i dati, si entrerà
userButtonEl.addEventListener("click", function() {
    // se ciò che si inserisce non è un numero o non è pari o dispari uscirà tale messaggio
    if(isNaN(userNumberEl.value) || userNumberEl.value == "" || evenOrOddEl.value == "" || (evenOrOddEl.value !== "pari" && evenOrOddEl.value !== "dispari")) {

        userOutputEl.innerText = "Compila entrambi i campi correttamente";

    } else {

        // inizializzo una variabile con contenuto la variabile di numeri casuali
        let randomNumbers = randomNumberBetween(1, 5);

        // console.log(randomNumbers);

        // sommo i due numeri = computer + utente
        somma = randomNumbers + parseInt(userNumberEl.value);
    
        // console.log(somma);

        // isEvenOrOdd(somma)

        // console.log(isEvenOrOdd(somma));

        // do' l'output in pagina...
        userOutputEl.innerText = `Hai deciso di giocare ${evenOrOddEl.value}.
        Il numero che hai scelto è: ${userNumberEl.value}. 
        Il numero che ha generato il computer è: ${randomNumbers}. 
        Il risultato è: ${somma}.
        Quindi ${isEvenOrOdd(somma)}.`;
    }

});







// FUNCTIONS

// numero random del computer
function randomNumberBetween(min, max) {

    let random = Math.floor(Math.random() * (max - min + 1) + min);

    return random;
}



// se un numero è pari o dispari
function isEvenOrOdd(number) {

    if((number % 2 == 0 && evenOrOddEl.value == "pari") || (number % 2 != 0 && evenOrOddEl.value == "dispari")) {
        
        return " hai vinto";
        
    } else if ((number % 2 != 0 && evenOrOddEl.value == "pari") || (number % 2 == 0 && evenOrOddEl.value == "dispari")){
        
        return " hai perso";
        
    }

}

// /FUNCTIONS






