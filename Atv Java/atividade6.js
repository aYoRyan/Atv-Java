function calcularmédia(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

const numberArray = [10, 20, 30, 40, 50];
const average = calcularmédia(numberArray);
console.log("Média: " + average);
