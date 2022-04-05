const areEqual = function (item1, item2) {
  if (areBothArrays(item1, item2)) {
    return areArraysSimilar(item1, item2);
  }
  return item1 === item2;
};

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

const areBothArrays = function (array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2);
};

const similarElements = function (elements, itemIndex) {
  const group = [];
  for (let pos = itemIndex; pos < elements.length; pos++) {
    if (areEqual(elements[pos], elements[itemIndex])) {
      group.push(elements[pos]);
    }
  }
  return group;
};

const groupBy = function (elements) {
  const similarElementsGroup = [];
  for (let index = 0; index < elements.length; index++) {
    if (notOccured(elements[index], elements.slice(0, index))) {
      similarElementsGroup.push(similarElements(elements, index));
    }
  }
  return similarElementsGroup;
};

const main = function () {
  console.log(groupBy([1, 2, 1]));
  console.log(groupBy([1, 2, 3]));
  console.log(groupBy([2, 2, 3]));
  console.log(groupBy([[2, 2], 3, 3, [2, 2], 1]));
  console.log(groupBy([[2, 2], 3, [2, 2]]));
  console.log(groupBy([[2, 2], 3, [2, 2], 3]));
};

main();
