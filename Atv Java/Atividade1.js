function calculoSoma(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
const sum = calculoSoma(numbers);
console.log("Sum of elements: " + sum);
