const userAge = prompt("Inserisci la tua età");
const userKm = prompt("Inserisci i chilometri da percorrere");
console.log(userAge, userKm);

const prezzoBase = (0.21 * userKm).toFixed(2);
console.log(prezzoBase);

const prezzoTotale = document.getElementById("prezzo");
prezzoTotale.innerHTML = `Il prezzo totale del biglietto è <em class="text-info">${prezzoBase} &#x20AC;</em>`;

if (userAge < 18) {
    const prezzoScontato = (prezzoBase - (prezzoBase * 20 / 100)).toFixed(2);
    console.log(prezzoScontato);
    const prezzoTotale = document.getElementById("prezzo");
    prezzoTotale.innerHTML = `Il prezzo totale del biglietto è <em class="text-info">${prezzoScontato} &#x20AC;</em>`;
} else if (userAge >= 65) {
    const prezzoScontato = (prezzoBase - (prezzoBase * 40 / 100)).toFixed(2);
    console.log(prezzoScontato);
    const prezzoTotale = document.getElementById("prezzo");
    prezzoTotale.innerHTML = `Il prezzo totale del biglietto è <em class="text-info">${prezzoScontato} &#x20AC;</em>`;
}