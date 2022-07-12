/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const temp = nums1.concat(nums2).sort((a, b) => a - b)
  if (temp.length % 2 === 0) {
    return (temp[temp.length / 2 - 1] + temp[temp.length / 2]) / 2
  }
  return temp[Math.ceil(temp.length / 2) - 1]
}

let nums1 = [1, 2],
  nums2 = [3, 4]

console.log(findMedianSortedArrays(nums1, nums2))
