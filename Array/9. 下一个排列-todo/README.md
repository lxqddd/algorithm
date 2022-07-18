# 解题思路

## 数组不需要借助第三个变量就可以交换元素位置的方法

```javascript
let nums = ([1, 2, 3, 4, 5, 6][(nums[1], nums[3])] = [nums[3], nums[1]])

console.log(nums) // [1, 4, 3, 2, 5, 6]
```
