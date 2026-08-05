// Hoisting is JavaScript’s behavior of processing declarations before executing the code.


// JavaScript Execution Has Two Phases

// This is the part many developers miss.

// Every time a function or file runs, JavaScript goes through 2 phases.

// Phase 1 — Memory Creation Phase

// JavaScript scans your code.

// It allocates memory for:

// * Variables
// * Functions
// * Classes

// No code executes yet.

// Phase 2 — Execution Phase

// Now JavaScript executes the code line by line.

// Assignments happen.

// Functions are called.

// Expressions are evaluated.


// Code          Result

// var.                               undefined before assignment
// let                                ReferenceError (TDZ)
// const                              ReferenceError (TDZ)
// Function Declaration               Works
// Function Expression                Error          
// Arrow Function                     Error




// The TDZ is the time between entering a scope and executing the let or const declaration. Accessing the variable during this time throws a ReferenceError.



// One important correction to a common myth

// If an interviewer says, “JavaScript moves variables to the top,” avoid repeating that explanation. A stronger answer is:

// “That’s a simplified way to teach hoisting. Internally, JavaScript doesn’t rewrite your source code. Instead, during the memory creation phase of the execution context, it registers declarations before executing the program.
