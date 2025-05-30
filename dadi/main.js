const diceFaces = [1,2,3,4,5,6];

const randomPlayer = Math.ceil(Math.random() * diceFaces.length);
const randomComputer = Math.ceil(Math.random() * diceFaces.length);

console.log(` Il tuo numero è: ${randomPlayer} `);
console.log(` Il numero del computer è: ${randomComputer} `);

if (randomPlayer > randomComputer) {
    console.log("Hai vinto!");
}
else if (randomComputer > randomPlayer) {
    console.log("Hai perso..");
}
else{
    console.log("Pareggio!");
}