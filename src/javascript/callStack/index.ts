// 1. Call Stack

//                The call stack is the mechanism JavaScript uses to keep track of which function is currently executing.

//                JavaScript executes synchronous code one function at a time.


function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello from the third function!");
}

first();