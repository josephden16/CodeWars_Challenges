/**
 * Given a positive integral number n, return a strictly 
 * increasing sequence (list/array/string depending on the language) of 
 * numbers, so that the sum of the squares is equal to n².
 */


function decompose(n) {
  let result = [];

  let currentNumber = n * n;
  for (let i = n - 1; i >= 1; i--) {
    let num = i;
    let numberSquared = num * num;


    if (numberSquared <= currentNumber) {
      result.push(num);
      currentNumber -= numberSquared;
    }


  }


  return result.reverse();
}

console.log(decompose(12));
