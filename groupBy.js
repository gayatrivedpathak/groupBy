const areArraysSimilar = function (array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

const isArrayOccured = function (items, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (Array.isArray(elements[index])) {
      return areArraysSimilar(items, elements[index]);
    }
  }
  return false;
};

const notOccured = function (item, elements) {
  if (Array.isArray(item)) {
    return !isArrayOccured(item, elements);
  }
  return !elements.includes(item);
};

const similarElements = function (elements, itemIndex) {
  const group = [];
  for (let pos = itemIndex; pos < elements.length; pos++) {
    if (Array.isArray(elements[pos]) && Array.isArray(elements[itemIndex])) {
      if (areArraysSimilar(elements[pos], elements[itemIndex])) {
        group.push(elements[pos]);
      }
    } else {
      if (elements[pos] === elements[itemIndex]) {
        group.push(elements[pos]);
      }
    }
  }
  return group;
};

const groupBy = function (elements) {
  const similarGroups = [];
  for (let index = 0; index < elements.length; index++) {
    if (notOccured(elements[index], elements.slice(0, index))) {
      similarGroups.push(similarElements(elements, index));
    }
  }
  return similarGroups;
};

const main = function () {
  // console.log(groupBy([1, 2, 1]));
  // console.log(groupBy([1, 2, 3]));
  // console.log(groupBy([2, 2, 3]));
  console.log(groupBy([[2, 2], 3, 3, [2, 2], 1]));
  // console.log(groupBy([[2, 2], 3, [2, 2]]));
  console.log(groupBy([[2, 2], 3, [2, 2], 3]));
};

main();