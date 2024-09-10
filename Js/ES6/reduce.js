let numArr = [0,0,1,1,1,2,2,3,3,4]
function getNums(nums) {
  let i = 0
 let newArr = nums.reduce((total,curr,index) => {
    if(!total.includes(curr)) {
      total.push(curr)
      nums[i] = curr
      i++
    }
    return total
  },[])
  return i

}
// getNums(numArr)
// console.log(numArr)


// function getNumResult(nums) {
//   let fast = 1
//   let show = 1
//   let length = nums.length
//    while(fast < length) {
//     if(nums[fast] != nums[show-1]) {
//       nums[show] = nums[fast]
//       ++show
//     }
//     fast++
//    }
//    return show
// }
// getNumResult(numArr)
// console.log(numArr)

