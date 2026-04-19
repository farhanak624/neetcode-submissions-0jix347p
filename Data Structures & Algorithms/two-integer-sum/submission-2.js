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
            console.log(checkPrev)
            if(needed in checkPrev){
                console.log(checkPrev[needed],checkPrev[nums[i]])
                return [checkPrev[needed],i]
            }
            checkPrev[nums[i]]=i
        }
    }
}
