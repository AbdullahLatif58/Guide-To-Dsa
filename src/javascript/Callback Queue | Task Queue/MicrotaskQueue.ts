// Microtask Queue

// The Microtask Queue is a queue used for callbacks that need to run as soon as the current synchronous work finishes, before the next normal task.



// 1. What is a microtask?

// A microtask is a small unit of work that is executed in the background, typically in the browser, without blocking the main execution thread.

Promise.resolve().then(() => {
    console.log("Hello");
});


// After synchronous execution completes, JavaScript drains the microtask queue completely before moving to the next task in the task queue.





      //         JavaScript
      //             │
      //     Execute synchronous
      //             │
      //             ↓
      //        Call Stack
      //             │
      //           empty
      //             ↓
      //   ┌───────────────────┐
      //   │ Microtask Queue   │
      //   │                   │
      //   │ Promise.then()    │
      //   │ queueMicrotask()  │
      //   └─────────┬─────────┘
      //             │
      //        drain ALL
      //             ↓
      //   ┌───────────────────┐
      //   │    Task Queue     │
      //   │                   │
      //   │ setTimeout()      │
      //   │ setInterval()     │
      //   │ I/O callbacks     │
      //   └───────────────────┘

