
function add(arr, length, sum) {
    var sum = 0;
    for (var i = 0; i < length; i++){
        sum += arr[i];
    }
    return (sum / length).toFixed(2);
}
var sum = 0;
const myArray = [3, 2, 1, 4, 5, 6];
const arrLength = myArray.length;
var avg = add(myArray, arrLength);
console.log(avg);



// // function in a function
// function foo() {
//     console.log('foo');
//     bar();
// }

// function bar() {
//     console.log('bar');
// }

// foo()


// function odd-even
// function odd(x) {
//     if (x % 2 != 0) {
//         console.log('Odd Number');
//     } else {
//         even();
//     } 
// } function even() {
//     console.log('Even Number');
// }

// const number = 5;
// odd(number);