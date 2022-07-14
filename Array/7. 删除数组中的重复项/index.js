/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function removeDuplicates(nums) {
  let i = 0
  while (i < nums.length) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4]

removeDuplicates(nums)
console.log(nums)
