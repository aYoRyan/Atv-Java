function reverseWordOrder(str) {
    const words = str.split(' ');
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

const inputString = "Olá, como vai você?";
const reversedString = reverseWordOrder(inputString);
console.log(reversedString);
