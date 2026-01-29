function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4]));


/**
 * [5, 3, 8, 4]
 * pivot=arr[3]=4, left=[], right=[]
 * i=0, 0<3, 5<4? no -> right=[5]
 * i=1, 1<3, 3<4? yes -> left=[3]
 * i=2, 2<3, 8<4? no -> right=[5,8]
 * i=3 end loop
 * return [...quickSort([3]), 4, ...quickSort([5,8])]
 */
