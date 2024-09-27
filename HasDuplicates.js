/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true
Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

*/

const hasDuplicates = (nums) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};

console.log(hasDuplicates([1, 2, 3, 3]));
console.log(hasDuplicates([1, 2, 3, 4]));
