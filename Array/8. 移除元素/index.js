/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
}

const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const val = 2
removeElement(nums, val)
console.log(nums)
