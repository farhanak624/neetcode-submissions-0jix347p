class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count={}
        for (let i=0; i<nums.length; i++){
            if(Object.hasOwn(count,nums[i])){
                count[nums[i]]++
            }else{
                count[nums[i]]=1
            }
        }
        let result
    for (const num of Object.keys(count)){
        if(count[num] > nums.length/2){
            result=num
            break
        }
    }
    return result
    }
}
