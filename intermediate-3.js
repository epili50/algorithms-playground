/**
 * Constrir un array a partir de otro. 
 * 
 * Otra operación típica es ir construyendo un array mientras se recorre otro
 * 
 * Desde el juego lapalabradeldia.com nos han pedido filtrar todas las palabras que existen en el diccionario y quedarnos solo con las que tienen 5 letras.
 * 
 * Dado un array de palabras, consturye un array nuevo solamente con las palabras que contienen exactamente 5 letras.
 */

function getWords5Letters(words) {
    let words5Letters = [];

    return words5Letters;
}


console.log(getWords5Letters(["mesa", "silla", "cuchara", "tenedor", "cama"]));
// ["mesa", "cama"], se espera ["mesa", "cama"] porque son las únicas palabras que tienen exactamente 5 letras

console.log(getWords5Letters(["perro", "gato", "loro", "pez", "ciervo"]));
// ["perro", "loro"], se espera ["perro", "loro"] porque son las únicas palabras que tienen exactamente 5 letras

console.log(getWords5Letters(["sol", "luz", "mar", "cielo", "sol"]));
// [], se espera [] porque ninguna de las palabras tiene 5 letras