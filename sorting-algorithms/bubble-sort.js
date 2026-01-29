function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4]));


/**
 * [5, 3, 8, 4]
 * i=0, swapped=false, (j=0, j<4-0-1=3), 5>3 swap [3,5,8,4], swapped=true
 *                     (j=1, 1<3), 5>8 no swap, swapped=true
 *                     (j=2, 2<3), 8>4 swap [3,5,4,8], swapped=true
 *                     (j=3, 3<3), exit inner loop, swapped=true
 * i=1, swapped=false, (j=0, j<4-1-1=2), 3>5 no swap, swapped=false
 *                     (j=1, 1<2), 5>4 swap [3,4,5,8], swapped=true
 *                     (j=2, 2<2), exit inner loop, swapped=true
 * i=2, swapped=false, (j=0, j<4-2-1=1), 3>4 no swap, swapped=false
 *                     (j=1, 1<1), exit inner loop, swapped=false
 *                     exit outer loop
 * return [3,4,5,8]
 */
