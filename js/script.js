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
