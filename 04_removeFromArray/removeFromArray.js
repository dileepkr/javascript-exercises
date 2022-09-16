const removeFromArray = function (array, ...args) {
  // remove 1 element from array
  //   function removeElement(array, element) {
  //     const index = array.indexOf(element);
  //     if (index > -1) {
  //       array.splice(index, 1);
  //     }
  //     return array;
  //   }
  //   for (const element of args) {
  //     array = removeElement(array, element);
  //   }
  //   return array;
  return array.filter((x) => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
