module.exports = { arrayIntersection };

function arrayIntersection(array1, array2) {
    // Write your code inside this function only.
 let intersection = [];
  for (i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) && !intersection.includes(array1[i])) {
      intersection.push(array1[i]);
    }
  }
  return intersection;
}

}