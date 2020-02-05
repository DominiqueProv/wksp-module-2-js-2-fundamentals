// Q1
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
    let highNum;
    if (num1 > num2){
       highNum = num1; 
    } else {
        highNum = num2;
    }
    console.log(`The highest number is ${highNum}`)
}

// Call the function
max(12, 43);