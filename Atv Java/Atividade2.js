function capiturarasletra(array) {
    const capitalizedArray = array.map(word => word.toUpperCase());
    return capitalizedArray;
}

const words = ["oioi", "mundao", "javazada"];
const capitalizedWords = capiturarasletra(words);
console.log(capitalizedWords);
