/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// chiedo all'utente di inserire una parola
let userWord = prompt("Inserisci una parola");

// inizializzo una variabile per inserire nel DOM il risultato
let palindromeEl = document.getElementById("palindroma");

// scrivo nel DOM il risultato
palindromeEl.innerText = checkPalindrome(userWord);


// creo la variabile secondo la quale se la parola è palindroma non entra e va avanti, se non lo è entro nel ciclo for
function checkPalindrome(word) {

    // inizializzo una variabile per non scrivere sempre .length
    let wordLength = userWord.length;

    // creo un ciclo for per calcolare se la parola tagliata a metà sia la stessa
    for (let i = 0; i < wordLength / 2; i++) {
        // se la prima metà della parola è diversa dalla seconda, allora non è palindroma
        if (userWord[i] !== userWord[wordLength - 1 - i]) {
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
const userNumberEl = document.getElementById("user-number");
const userButtonEl = document.getElementById("user-button");
const userOutputEl = document.getElementById("user-output");

let somma;
let evenOrOdd = prompt("Pari o Dispari?")

userButtonEl.addEventListener("click", function() {
    if(isNaN(userNumberEl.value) || userNumberEl.value == "") {

        userOutputEl.innerText = "non è un numero";

    }


    let randomNumbers = randomNumberBetween(1, 5);

    console.log(randomNumbers);

    somma = randomNumbers + parseInt(userNumberEl.value);
    
    console.log(somma);

    isEvenOrOdd(somma)

    console.log(isEvenOrOdd(somma));

    userOutputEl.innerText = `Hai deciso di giocare ${evenOrOdd}.
                              Il numero che hai scelto è: ${userNumberEl.value}. 
                              Il numero che ha generato il computer è: ${randomNumbers}. 
                              Quindi ${isEvenOrOdd(somma)}`;

});




// numero random del computer
function randomNumberBetween(min, max) {

    let random = Math.floor(Math.random() * (max - min + 1) + min);

    return random;
}





//  se un numero è pari o dispari
function isEvenOrOdd(number) {

    if(number % 2 == 0 && evenOrOdd == "pari") {
        
        return " hai vinto";
        
    } else {
        
        return " hai perso";
        
    }

}








