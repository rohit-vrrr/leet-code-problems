// Two Sum
function twoSum(nums, target) {
  const map = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
  return null;
}

// Example test cases
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]
console.log(twoSum([1,2,3,4,5], 10)); // null
console.log(twoSum([-1,-2,-3,-4,-5], -8)); // [2,4]
