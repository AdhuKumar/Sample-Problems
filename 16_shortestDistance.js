module.exports = { shortestDistance };

// Problem - Given an array of strings wordsDict and two distinct strings word1 and word2, which are both present in the array.
// Write a JavaScript function shortestDistance that returns the minimum distance between the positions of word1 and word2 within 
// the list of words.

function shortestDistance(wordsDict, word1, word2) {
  let minDistance = wordsDic.length;
  let index1 = -1;
  let index2 = -1;

  for (i = 0; i < wordsDic.length; i++) {
    if (wordsDic[i] === word1) {
      index1 = i;
    } else if (wordsDic[i] === word2) {
      index2 = i;
    }

    if (index1 !== -1 && index2 !== -1) {
      minDistance = Math.min(minDistance, Math.abs(index1 - index2));
    }
  }
  return minDistance;
}