// given a collection of numbers find the ones that equal the sum
// Assumptions...
// - all numbers are positive
// - collection isn't in any particula order
// - check must result in 2 values
// - should return indexes of valid pairs in an array of arrays

// alt solution: splice a copy of the collection removing values used
// less cycles... probably more efficient...
const findSumsSolution2 = (collection: number[], value: number) => {
  // we can skip the first value as it should be a comparison
  // of 2 values and it will be ??
  const pairs = [];

  let i = 0;
  let collectionCopy = [...collection].filter(item => item < value);
  let collectionLen = collectionCopy.length;
  console.log("start collection", collection);

  do {
    // number to evaluate
    const curNum: number = collectionCopy[i];

    for (let j = 0; j < collectionLen; j++) {
      if (j === i) {
        continue;
      }

      const toCheck = collectionCopy[j];
      if (curNum + toCheck === value) {
        console.log(`FOUND! ${i}=${curNum} ${j}=${toCheck}`);
        pairs.push([i, j]);
        collectionCopy.splice(i, 1);
        collectionCopy.splice(j, 1);
        collectionLen = collectionCopy.length;
        break;
      }
    }

    i++;
  } while (i < collectionLen);

  return pairs;
};

const numsToCheck = [22, 1, 3, 5, 5, 9, 8, 4, 4, 10];
const value = 8;
console.log(findSumsSolution2(numsToCheck, value));

// solution 1: not elegant....
// could be adjusted to hold indexes already used... :thinking:...
const findSumsSolution1 = (collection: number[], value: number) => {
  // we can skip the first value as it should be a comparison
  // of 2 values and it will be ??
  const pairs = [];
  for (let i = 0; i < collection.length; i++) {
    const curNum: number = collection[i];
    console.log("curNum", curNum);
    // if current value is greated than sum than skip it
    if (curNum < value) {
      for (let j = 0; j < collection.length; j++) {
        if (i !== j) {
          const checkAgainst = collection[j];
          if (curNum + checkAgainst === value) {
            console.log(
              "found!!",
              i,
              "value=",
              curNum,
              j,
              "value=",
              collection[j]
            );
            pairs.push([i, j]);
          }
        }
      }
    }
  }

  //dedup array....

  return pairs;
};
