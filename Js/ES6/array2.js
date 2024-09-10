let arr = [1,3,4,6]
let target = 5
let num = 0
function getTargetIndex(nums,target) {
    if(nums.indexOf(target) != -1) return nums.indexOf(target)
    if(nums[nums.length - 1] < target) return nums.length
    if(num[0] > target) return 0
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0,mid)
    let right = nums.slice(mid)
    if(left[left.length - 1] < target && target < right[0]) {
            return mid
    }else if (left[left.length - 1] > target) {
        
       return mid - getTargetIndex(left,target)
    }else if(right[0] < target) {
       return mid + getTargetIndex(right,target)
    }

}
console.log(getTargetIndex(arr,target));