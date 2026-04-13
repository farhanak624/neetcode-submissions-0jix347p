class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const arr=[...s]
        const trr=[...t]
        let arr1Count={}
        let result= false
        if(arr.length!=trr.length){
            return false
        }
        for (const i in arr){
            arr1Count[arr[i]]=(arr1Count[arr[i]]||0) + 1
            arr1Count[trr[i]]=(arr1Count[trr[i]]||0) - 1
        }
        console.log(arr1Count)
       for (const x of Object.values(arr1Count)){
        if (x!=0){
            return result
        }
       }
       return true
    }
}
