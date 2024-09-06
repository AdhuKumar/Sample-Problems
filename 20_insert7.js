module.exports = { insert7 };

function insert7(inputString) {
    // Write your code inside this function only.
   let modifiedStr = "";
  let count = 0;

  for (i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") {
      modifiedStr += " ";
    } else {
      count++;

      modifiedStr += inputString[i];
      if (count === 6) {
        modifiedStr += "7";
        count = 0;
      }
    }
  }
  return modifiedStr;
}

