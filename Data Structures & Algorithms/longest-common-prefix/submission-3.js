class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
     let refString=strs[0]
     let prefix=''

     for (let i=0; i<refString.length; i++){
     let isMatch=true;
        for (let j=0; j<strs.length; j++){
        if(i>=strs[j].length){
            isMatch=false
            break
        }
            if(refString[i]!==strs[j][i]){
                isMatch=false
                break
            }
        }
    if(isMatch){
        prefix+=refString[i]
    }else{
        break
    }
     }
     return prefix
    }
}
