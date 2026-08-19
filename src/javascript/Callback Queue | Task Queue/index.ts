// What is the Task Queue?

// The Task Queue (often called the Callback Queue or Macrotask Queue) is where certain asynchronous callbacks wait until JavaScript is ready to execute them.



         //     JavaScript Runtime

         //  ┌─────────────────┐
         //  │   Call Stack    │
         //  │                 │
         //  └────────┬────────┘
         //           ↑
         //       Event Loop
         //           ↑
         //  ┌────────┴────────┐
         //  │   Task Queue   │
         //  │                 │
         //  │ setTimeout cb   │
         //  └─────────────────┘


         