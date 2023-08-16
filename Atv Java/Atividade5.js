function fatorzada(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * fatorzada(number - 1);
    }
}

const num = 5;
const result = fatorzada(num);
console.log(`Fatorzada do ${num} é ${result}`);
