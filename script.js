// Función que realiza la encriptación/desencriptación con el método Atbash
function atbashCipher(text) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Define el alfabeto en orden normal
    const reversed = alphabet.split("").reverse().join(""); // Invierte el alfabeto (Atbash)

    return text
        .toUpperCase() // Convierte el texto ingresado a mayúsculas para estandarizarlo
        .split("") // Divide el texto en un array de caracteres
        .map(char => { 
            const index = alphabet.indexOf(char); // Busca la posición del carácter en el alfabeto
            return index !== -1 ? reversed[index] : char; // Si está en el alfabeto, lo reemplaza; si no, lo deja igual
        })
        .join(""); // Une los caracteres en un solo string
}

// Función que se activa al presionar el botón
function encrypt() {
    const input = document.getElementById("inputText").value; // Obtiene el texto ingresado por el usuario
    const output = atbashCipher(input); // Aplica el cifrado Atbash
    document.getElementById("outputText").value = output; // Muestra el resultado en el área de texto de salida
}
