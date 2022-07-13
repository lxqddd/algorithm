// var maxArea = function (height) {
//   let area = 0
//   let temp = 0
//   for (let i = 0; i <= height.length - 2; i++) {
//     for (let j = i + 1; j <= height.length - 1; j++) {
//       if (height[i] > height[j]) {
//         temp = height[j] * (j - i)
//       } else {
//         temp = height[i] * (j - i)
//       }
//       if (temp > area) area = temp
//     }
//   }
//   return area
// }

var maxArea = function (height) {
  let area = 0
  let i = 0
  let j = height.length - 1

  for (i; i < j; ) {
    const minHeight = height[i] > height[j] ? height[j--] : height[i++]
    const temp = minHeight * (j - i + 1)
    area = Math.max(area, temp)
  }
  return area
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(height))
