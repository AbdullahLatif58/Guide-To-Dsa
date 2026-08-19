// Execution Context

// The simplest definition:

// An Execution Context is the environment in which JavaScript executes a piece of code.

// Think of it as a workspace created by JavaScript to run your code.


// There are two you need to master for interviews:

// 1. Global Execution Context
// 2. Function Execution Context



// 1. Global Execution Context

// When JavaScript starts executing your file:


var name = "Abdullah";

console.log(name);



// Global Execution Context
// ┌──────────────────────────────┐
// │ Variables                    │
// │ Functions                    │
// │ this                         │
// │ Lexical Environment          │
// └──────────────────────────────┘



// 2. Function Execution Context

// Now:

function greet() {
    const message = "Hello";
    console.log(message);
}

greet();



// Creation Phase
//       ↓
// Execution Phase


