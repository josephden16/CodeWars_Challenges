/**
 * Sum of Pairs
   Given a list of integers and a single sum value,
   return the first two values (parse from the left please) in order of appearance that add up to form the sum.
 */



function sumPairs(ints, s) {
  let numbers = ints;
  const target = s;
  const arraySize = ints.length;
  let result = [];
  let gap = Infinity;
  const numLimit = arraySize - 2;

  for (let i = 0; i <= numLimit; i++) {
    let number = numbers[i];
    for (let j = i + 1; j < arraySize; j++) {
      let nextNumber = numbers[j];
      let sum = number + nextNumber;
      if (sum === target) {
        if ((j - i) < gap) {
          result = [number, nextNumber];
          gap = j - i;
        }
      }
    }
  }

  if (result.length > 0) {
    return result;
  }
  return undefined;
}
