function isValidSubsequence(array, sequence) {
  let seqIndex = 0;

  for (let value of array) {
    if (value === sequence[seqIndex]) {
      seqIndex++;
    }

    if (seqIndex === sequence.length) {
      return true;
    }
  }

  return false;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
console.log(isValidSubsequence(array, sequence)); // true
