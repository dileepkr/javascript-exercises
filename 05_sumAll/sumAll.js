const sumAll = function (num1, num2) {
  if (
    typeof num1 != "number" ||
    typeof num2 != "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  let leftNum;
  let rightNum;
  if (num1 > num2) {
    leftNum = num2;
    rightNum = num1;
  } else if (num1 < num2) {
    leftNum = num1;
    rightNum = num2;
  } else {
    return num1;
  }
  let retVal = 0;
  for (let i = leftNum; i <= rightNum; i++) {
    retVal += i;
  }
  return retVal;
};

// Do not edit below this line
module.exports = sumAll;
