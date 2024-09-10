let nums = [3,1,2,2]
function setNewArr(nums,val) {
    while(nums.includes(val)) {
        let index = nums.indexOf(val)
        nums.splice(index,1)
    }
    return nums.length
}
console.log(setNewArr(nums,3));