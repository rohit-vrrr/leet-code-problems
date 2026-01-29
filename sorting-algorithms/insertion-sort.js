function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([5, 3, 8, 4]));


/**
 * [5, 3, 8, 4]
 * i=1, 1<4, key=3, j=0, 0>=0 and 5>3, arr[1]=5 -> [5,5,8,4], j=-1
 *                  j=-1 exit while, arr[0]=3 -> [3,5,8,4]
 * i=2, 2<4, key=8, j=1, 1>=0 and 5>8 no, exit while, arr[2]=8 -> [3,5,8,4]
 * i=3, 3<4, key=4, j=2, 2>=0 and 8>4, arr[3]=8 -> [3,5,8,8], j=1
 *                  1>=0 and 5>4, arr[2]=5 -> [3,5,5,8], j=0
 *                  0>=0 and 3>4 no, exit while, arr[1]=4 -> [3,4,5,8]
 * i=4, 4<4 exit outer loop
 * return [3,4,5,8]
 */
