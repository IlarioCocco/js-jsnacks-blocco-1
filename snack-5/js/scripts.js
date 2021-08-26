
// Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

// Crea un array vuoto, 
var containerNumeri = [];

// Chiedi per 6 volte all’utente di inserire un numero
// se è dispari inseriscilo nell’array
for (var i = 0; i < 6; i++) {
    var numero = prompt("inserisci il numero");
    var resto = numero % 2;
    containerNumeri.push(numero);
}
console.log(containerNumeri);
