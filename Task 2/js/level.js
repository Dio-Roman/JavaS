let x;
for (x = 1; x <=100; x++) {
    if (x%3 == 0) {
        console.log ("Fizz"); 
    } else if ((x%5 ==0)&&(x%3 !=0)) {
        console.log ("Buzz");
    } else {
        console.log(x);
    }       
}
