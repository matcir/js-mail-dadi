const invited = ['matteo@gmail.com' , 'andrea@hotmail.it', 'chiara@outlook.com']
const userEmail = prompt("Inserisci la tua email");
const lowerCaseEmail = userEmail.toLowerCase;
let result = false;
for (let i=0; i < invited.length; i++) {
    if (userEmail == invited[i]) {
        result = true;
        break;
    }
}
if (result == true) {
    console.log("La tua email è all'interno dell'elenco degli invitati, puoi accedere.");
}
else {
    console.log("La tua email non è presente nell'elenco degli invitati, non puoi accedere.")
}

