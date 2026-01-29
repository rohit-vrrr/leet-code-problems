function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([5, 3, 8, 4]));


/**
 * [5, 3, 8, 4]
 * i=0, 0<4, min=0, (j=1, 1<4), 3<5, min=1
 *                  (j=2, 2<4), 8<3 no, min=1
 *                  (j=3, 3<4), 4<3 no, min=1
 *                  (j=4, 4<4) exit inner loop, swap arr[0] and arr[1] -> [3,5,8,4]
 * i=1, 1<4, min=1, (j=2, 2<4), 8<5 no, min=1
 *                  (j=3, 3<4), 4<5, min=3
 *                  (j=4, 4<4) exit inner loop, swap arr[1] and arr[3] -> [3,4,8,5]
 * i=2, 2<4, min=2, (j=3, 3<4), 5<8, min=3
 *                  (j=4, 4<4) exit inner loop, swap arr[2] and arr[3] -> [3,4,5,8]
 * i=3, 3<4, min=3, (j=4, 4<4) exit inner loop, swap arr[3] and arr[3] -> [3,4,5,8]
 * i=4, 4<4 exit outer loop
 * return [3,4,5,8]
 */
