class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map={}
        let sorted;
        
        for (let word of strs){
           sorted=word.split('').sort().join('')
           if(sorted in map){
             map[sorted].push(word)
           }else{
             map[sorted]=[]
             map[sorted].push(word)
           }
        }
        console.log(Object.values(map))
        return Object.values(map)
    }
}
