/*Problem -Write a JavaScript function called titleCase which accepts a sentence (string) as input and transforms it into title case.
Title case means that the initial letter of each word is capitalized.*/
function titleCase(sentence) {
	// write your code here
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}

// Bug Fix Code
function titleCase(sentence){
	let words = sentence.toLowerCase().split(' ');
	
	let titleWordCase = words.map(function(word)){
		return word[0].toUpperCase() + word.substring(1);
	}
	return titleCaseWord.join(' ');
}
//bug fix code

function countOccurrences(str, char) {
    let count = 0;
    for(i = 0 ; i<str.length ; i++){
		if(str[i] === char){
			count++
		}
	}
	return count;
}

// Do not modify the below lines
module.exports = { titleCase };