/**  PALINDROME
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
*/


/* var par = prompt("inserisci una parola");
par = par.charAt(0).toLocaleLowerCase() + par.slice(1);
console.log(par);

//invocazione funzione inverti
var parolaReverse = inverti(par);
console.log(parolaReverse);

//invocazione funzione palindrome
palindrome(par , parolaReverse);
  



//funzione inverti
function inverti(word) {

  var reverse = "";

  for ( var i = word.length - 1; i >= 0 ; i-- ){
    reverse += word[i];
  }

  return reverse;
}

//funzione palindrome
function palindrome( word1, word2){

  if(word1 == word2){
    alert("la parola " + word1 +  " è una palindrome");
  } else {
    alert("La parola " + word1 +  " non è una palindrome")
  }
} */
 


/**Pari e Dispari
 * L’utente sceglie pari o dispari e un numero da 1 a 5. 
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
*/

var pariDispari = prompt("Scegli pari o dispari");
var tuoNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Il tuo numero " + tuoNumero);

var pcNumero = random(1 , 5);
console.log("Numero del pc " + pcNumero);

var somma = tuoNumero + pcNumero;
console.log("somma del tuo numero + numero pc " + somma);

numPariDispari(somma);



//funzione numero random
function random(number){

  var random = Math.floor( Math.random() *5) +1;

  return random;
}



//funzione somma pari o dispari
function numPariDispari (num){

  if( (num % 2) == 0){
    console.log("Pari hai vinto");
  } else {
    console.log("Hai perso");
  }
  
}

 

