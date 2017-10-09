"use strict";
function countBs (str) {  
    var i;
    var sum = 0;
    for (i = 0; i <= str.length; i++) {
       var s =  str.charAt(i);
      if ((s == "b")||(s=="B")) {
          sum++;
      }  
    }
    return sum;
}  


