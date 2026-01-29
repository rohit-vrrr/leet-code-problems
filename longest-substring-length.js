function longestSubstringLength(str) {
  const lastIndex = new Map();
  let start = 0, maxLen = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (lastIndex.has(ch) && lastIndex.get(ch) >= start) {
      start = lastIndex.get(ch) + 1;
    }
    lastIndex.set(ch, i);
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
}

// Example test cases
console.log(longestSubstringLength("abcabcbb")); // 3
console.log(longestSubstringLength("bbbbb")); // 1
console.log(longestSubstringLength("pwwkew")); // 3
console.log(longestSubstringLength("")); // 0
console.log(longestSubstringLength("dvdf")); // 3
