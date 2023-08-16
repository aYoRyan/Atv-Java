function verseeParouImpar(number) {
    if (number % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

const num = 7;
const result = verseeParouImpar(num);
console.log(`${num} é ${result}.`);
