class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let checkPrev={}
        let needed;
        for (let i=0;i<nums.length;i++){
            needed=target-nums[i]
            if(needed in checkPrev){
                return [checkPrev[needed],i]
            }
            checkPrev[nums[i]]=i
        }
    }
}
