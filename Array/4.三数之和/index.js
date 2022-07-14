/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// var threeSum = function (nums) {
//   let ret = []
//   nums.sort((a, b) => a - b)
//   let len = nums.length
//   if (!nums || len < 3) return ret
//   if (nums[0] > 0 || nums[len - 1] < 0) return ret
//   for (let i = 0; i < len - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue
//     for (let j = i + 1; j < len - 1; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) continue
//       for (let k = j + 1; k < len; k++) {
//         console.log(
//           '\n',
//           'i:',
//           nums[i],
//           '\n',
//           'j:',
//           nums[j],
//           '\n',
//           'k:',
//           nums[k]
//         )
//         console.log(k > j + 1 && nums[k] === nums[k - 1])
//         if (k > j + 1 && nums[k] === nums[k - 1]) break
//         //

//         if (nums[i] + nums[j] + nums[k] === 0) {
//           ret.push([nums[i], nums[j], nums[k]])
//         }
//       }
//     }
//   }
//   return ret
// }

var threeSum = function threeSum(nums) {
  let ret = []
  if (nums.length < 3) return ret
  let len = nums.length
  nums.sort((a, b) => a - b)
  if (nums[0] > 0 && nums[len - 1] < 0) return ret
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = len - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        ret.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        L++
        R--
      } else if (sum > 0) {
        R--
      } else {
        L++
      }
    }
  }
  return ret
}

// let nums = [-1, 0, 1, 2, -1, -4]
// let nums = [0, 0, 0, 0]

let nums = [-2, 0, 1, 1, 2]

console.log(threeSum(nums))
