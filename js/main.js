const userAge = prompt("Inserisci la tua età");
const userKm = prompt("Inserisci i chilometri da percorrere");
console.log(userAge, userKm);

const prezzoBase = (0.21 * userKm);
console.log(prezzoBase);

if (userAge < 18) {
    const prezzoScontato = (prezzoBase - (prezzoBase * 20 / 100));
    console.log(prezzoScontato);
} else if (userAge >= 65) {
    const prezzoScontato = (prezzoBase - (prezzoBase * 40 / 100));
    console.log(prezzoScontato);
}