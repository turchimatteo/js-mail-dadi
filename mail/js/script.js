//Email di default
const email = ['turchi12@gmail.com', 'boolean@gmail.com', 'pincopallo@gmail.com', 'paperella@hotmail.it', 'slack@yhaoo.com']
//Email user
const userEmail = prompt('Scrivi quì la tua email:');
//Cerchiamo l'email dell'utente nelle email di default
let serchEmail = false
for (let i = 0; i < email.length; i++) {
    const foundEmail = email[i];
    if (foundEmail === userEmail) {
        serchEmail = true
    }
    
}
//Stampiamo la risposta a seconda se l'email è presente in quelle di default
if (serchEmail) {
    alert('La tua email è valida.')
} else {
    alert('La tua email non è valida.')
}