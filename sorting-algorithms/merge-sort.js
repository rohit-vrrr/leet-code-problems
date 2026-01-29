function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(a, b) {
  let res = [],
    i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    res.push(a[i] < b[j] ? a[i++] : b[j++]);
  }
  return res.concat(a.slice(i), b.slice(j));
}

console.log(mergeSort([5, 3, 8, 4]));


/**
 * mergeSort([5, 3, 8, 4])
 * mid=2
 * 
 *     left=mergeSort([5, 3])
 *     mid=1
 *         left=mergeSort([5]) -> [5]
 *         right=mergeSort([3]) -> [3]
 *         merge([5], [3]) -> [3, 5]
 * 
 *     right=mergeSort([8, 4])
 *     mid=1
 *         left=mergeSort([8]) -> [8]
 *         right=mergeSort([4]) -> [4]
 *         merge([8], [4]) -> [4, 8]
 */
