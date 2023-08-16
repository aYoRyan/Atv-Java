function isPalindrome(str) {
    str = str.toLowerCase(); // Convertendo para minúsculas para evitar problemas de sensibilidade a maiúsculas/minúsculas
    
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const testString = "radar";
if (isPalindrome(testString)) {
    console.log(`${testString} is a palindrome.`);
} else {
    console.log(`${testString} is not a palindrome.`);
}
