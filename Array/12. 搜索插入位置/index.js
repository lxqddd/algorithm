/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = 0
  if (target < nums[0]) return 0
  if (target > nums[nums.length - 1]) return nums.length
  while (i < nums.length) {
    if (nums[i] === target) {
      return i
    } else if (target > nums[i] && target < nums[i + 1]) {
      return i + 1
    }
    i++
  }
}

// var searchInsert = function (nums, target) {
//   let hasTarget = nums.indexOf(target)
//   if (hasTarget >= 0) return hasTarget
//   if (target > nums[nums.length - 1]) return nums.length
//   for (let i = 0; i < nums.length; i++) {
//     if (target <= nums[i]) {
//       return i
//     }
//   }
// }

const nums = [1, 3, 5, 6]
const target = 7

console.log(searchInsert(nums, target))
