// Scope determines where a variable or function is accessible in your code.


// Types of Scope


// 1. Global Scope

// Variables declared outside any function or block.

const appName = "CRM";

function show() {
    console.log(appName);
}

show();



//  2. Function Scope

// Variables declared inside a function.


function login() {

    const token = "abc123";

    console.log(token);

}

login();

console.log(token);


// 3. Block Scope

// Created by js


if (true) {

    let age = 20;
    const city = "Paris";

}

console.log(age);


ReferenceError

// Because let and const are block-scoped.




// 4. Module Scope


// Every JavaScript file is its own module (when using ES Modules).


// user.js

const password = "secret";

export function login() {}



import { login } from "./user.js";

console.log(password);



// Only exported members are accessible.





