module.exports = { swapConsecutiveCharacters };

function swapConsecutiveCharacters(str) {
    let swappedStr = '';
    for(i = 0 ; i < str.length ; i = i + 2){
    swappedStr += str[i] + str[i + 1];
    }
    return swappedStr;
}