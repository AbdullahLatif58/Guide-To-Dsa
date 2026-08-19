// The Event Loop is a mechanism that continuously checks whether the Call Stack is empty and, if it is, moves ready asynchronous callbacks into the Call Stack for execution.



// The Event Loop coordinates synchronous and asynchronous code.

// It decides when asynchronous callbacks are allowed to run.



//              JavaScript Runtime

//         ┌──────────────────┐
//         │    Call Stack    │
//         └────────┬─────────┘
//                  ↑
//                  │
//             Event Loop
//                  │
//        ┌─────────┴─────────┐
//        │                   │
//  Microtask Queue       Task Queue
//        │                   │
//  Promise callbacks     timers/I/O etc.




// Synchronous code
//        ↓
// Microtask Queue
// (Promise.then, queueMicrotask)
//        ↓
// Task/Macrotask Queue
// (setTimeout, setInterval, etc.)