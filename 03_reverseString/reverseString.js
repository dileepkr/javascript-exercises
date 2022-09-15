const reverseString = function (string) {
  if (string.length <= 1) {
    return string;
  }
  let start = 0;
  let end = string.length - 1;
  let chars = string.split("");
  while (start < end) {
    let temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;
    start += 1;
    end -= 1;
  }
  return chars.join("");
};

// Do not edit below this line
module.exports = reverseString;
