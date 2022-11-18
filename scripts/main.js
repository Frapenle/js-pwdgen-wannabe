const userName = prompt ("Inserisci il tuo nome");
const userSurname = prompt ("Inserisci il tuo cognome");
const prefColor = prompt ("Qual è il tuo colore preferito");
const shortYear = 22;
const userData = userName + userSurname + prefColor + shortYear;
console.log(userData);

const userDataSpaced = `${userName} ${userSurname} ${prefColor} ${shortYear}`;
console.log(userDataSpaced);


document.getElementById("nome").innerHTML = (userName);
document.getElementById("cognome").innerHTML = (userSurname);
document.getElementById("colore").innerHTML = (prefColor);


document.getElementById("userdata").innerHTML = (userData);

document.getElementById("userdata-spaced").innerHTML = (userDataSpaced);
