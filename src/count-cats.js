const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  if (backyard.length === 0) {
    return count;
  } else {
    for (let i = 0; i < backyard.length; i++) {
      if (Array.isArray(backyard[i])) {
        if (backyard.length === 0) {
          return count;
        } else {
          for (let j = 0; j < backyard[i].length; j++) {
            backyard[i][j] === "^^" ? (count += 1) : count;
          }
        }
      }
    }
  }
  return count;
};
