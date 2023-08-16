function countLetterOccurrences(str, letter) {
    str = str.toLowerCase(); // Convertendo para minúsculas para evitar problemas de sensibilidade a maiúsculas/minúsculas
    letter = letter.toLowerCase(); // Convertendo a letra para minúscula também
    
    let count = 0;
    for (const char of str) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}

const inputString = "Hello, how are you doing today?";
const targetLetter = "o";
const occurrences = countLetterOccurrences(inputString, targetLetter);
console.log(`A letra '${targetLetter}' aparece ${occurrences} vezes na string.`);
