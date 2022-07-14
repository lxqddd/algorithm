/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function fourSum(nums, target) {
  const ret = []
  const len = nums.length
  if (len < 4) return ret
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let L = j + 1
      let R = len - 1
      while (L < R) {
        const sum = nums[i] + nums[j] + nums[L] + nums[R]
        if (sum === target) {
          ret.push([nums[i], nums[j], nums[L], nums[R]])
          while (L < R && nums[L] === nums[L + 1]) L++
          while (L < R && nums[R] === nums[R - 1]) R--
          L++
          R--
        } else if (sum > target) {
          R--
        } else if (sum < target) {
          L++
        }
      }
    }
  }
  return ret
}

// const nums = [1, 0, -1, 0, -2, 2]
const nums = [2, 2, 2, 2, 2]
const target = 8

console.log(fourSum(nums, target))
