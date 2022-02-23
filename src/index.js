module.exports = function toReadable (number) {
    const numbersSimple = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const numbersSimpleDec = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const numbersDecade = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy' , 'eighty' , 'ninety']
    const numbersHundred = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
    let numberStr = number.toString().split('')
    let nFull = number + '';
    let nFullDec = (number + 10) + '';
    let a = nFull[0];
    let b = nFull[1];
    let c = nFull[2];
    if (number > 0 && number < 20){
        return numbersSimple[nFull];
    } else if (number > 19 && number < 100){
        return (`${numbersDecade[a]} ${numbersSimple[b]}`).trim();
    } else if (number > 100 && b > 1){
        return (`${numbersHundred[a]} ${numbersDecade[b]} ${numbersSimple[c]}`).trim();
    } else if (number > 100 && b == 0){
        return (`${numbersHundred[a]} ${numbersSimple[c]}`).trim();
    } else if (number > 100 && b == 1){
        return (`${numbersHundred[a]} ${numbersSimpleDec[c]}`).trim();
    } else if (number = 0){
        return 'zero'
    } 
}
