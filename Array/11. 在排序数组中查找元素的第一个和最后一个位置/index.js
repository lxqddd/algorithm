/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let ret = []
  let L = 0
  let R = nums.length - 1
  while (L <= R) {
    if (nums[L] === target && !ret[0]) {
      ret[0] = L
    } else if (!ret[0]) {
      L ++
    }
    if (nums[R] === target && !ret[1]) {
      ret[1] = R
    } else if (!ret[1]) {
      R --
    }

    if (ret[0] != undefined && ret[1] != undefined) {
      return ret
    }
  }

  return [-1, -1]
};

const nums = [5,7,7,8,8,10]
const target = 6

console.log(searchRange(nums, target))

