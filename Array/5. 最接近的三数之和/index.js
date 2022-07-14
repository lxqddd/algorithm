/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ret = nums[0] + nums[1] + nums[2]
  let len = nums.length

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = len - 1
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (Math.abs(target - sum) < Math.abs(target - ret)) {
        ret = sum
      } else if (sum > target) {
        R--
      } else if (sum < target) {
        L++
      } else {
        return ret
      }
    }
  }
  return ret
}

let nums = [-1, 2, 1, -4]
// let nums = [0, 0, 0]
let target = 1

console.log(threeSumClosest(nums, target))
