const userAge = prompt("Inserisci la tua età");
const userKm = prompt("Inserisci i chilometri da percorrere");
console.log(userAge, userKm);

const prezzoBase = (0.21 * userKm).toFixed(2);

if (userAge < 18) {
    const prezzoScontato = (prezzoBase - (prezzoBase * 20 / 100)).toFixed(2);
    console.log(`Il prezzo totale del biglietto è ${prezzoScontato}`);
} else if (userAge >= 65) {
    const prezzoScontato = (prezzoBase - (prezzoBase * 40 / 100)).toFixed(2);
    console.log(`Il prezzo totale del biglietto è ${prezzoScontato}`);
} else {
    console.log(`Il prezzo totale del biglietto è ${prezzoBase}`);
}
