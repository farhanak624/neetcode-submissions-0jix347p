class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count=[]
        let result=false
        for (let i=0; i<nums.length; i++){
            if(count[nums[i]]){
                result=true
            }
            count[nums[i]]=1
        }
    return result
    }
}
