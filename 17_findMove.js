module.exports = { findMove };

function findMove(s) {
   let states = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] === "+" && str[i + 1] === "+") {
      let newState = str.substring(0, i) + "--" + str.substring(i + 2);
      states.push(newState);
    }
  }
  return states;
}
