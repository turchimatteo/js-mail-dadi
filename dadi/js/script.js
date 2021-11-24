const number = Math.floor(Math.random() * 6) + 1;
console.log('user:', number);

const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log('computer:', computerNumber);

let message;
if( number > computerNumber ) {
    message = 'Hai vinto';
} else if( computerNumber > number ) {
    message = 'Hai perso';
} else {
    message = 'Pareggio';
}

const preMessage = `Il tuo numero è ${number}, quello del computer è ${computerNumber}: `;
alert(preMessage + message);