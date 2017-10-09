"use strict";
function reverseArray (arr) {  
    let reArr = [];
    for (let i = arr.length; i >= 0; i--) {
        reArr.push(arr[i]);
    }
    return reArr;
}  


