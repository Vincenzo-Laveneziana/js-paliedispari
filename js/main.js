/**  PALINDROME
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
*/


var par = prompt("inserisci una parola");
par = par.charAt(0).toLocaleLowerCase() + par.slice(1);
console.log(par);

//invocazione funzione inverti
var parolaReverse = inverti(par);
console.log(parolaReverse);

if ( par == parolaReverse){
  alert("la parola " + par +  " è una palindrome");
} else {
  alert("La parola " + par +  " non è una palindrome");
}


//funzione inverti
function inverti(word) {

  var reverse = "";

  for ( var i = word.length - 1; i >= 0 ; i-- ){
    reverse += word[i];
  }

  return reverse;
}







/**Pari e Dispari
 * L’utente sceglie pari o dispari e un numero da 1 a 5. 
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
*/

