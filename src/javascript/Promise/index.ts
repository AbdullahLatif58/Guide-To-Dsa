// 1. What is a Promise?

// A Promise is an object that represents the eventual result of an asynchronous operation.


// Promise
//    │
//    ├── Pending
//    │
//    ├── Fulfilled
//    │
//    └── Rejected



//    2. Pending

//    When a Promise is created, it starts as:

//    Pending





//  const promise = new Promise((resolve) => {

//     resolve("Data received");

// });

// 3. Fulfilled

// resolve("Success");





// 4. Rejected

// reject("Something went wrong");


// once the prmise is marked as Fullfilled or Rejected, its cannot be changed to any other state. It is immutable

// 6. .then()

const promise = Promise.resolve("Hello");

promise.then((value) => {
    console.log(value);
});


// The callback passed to .then() runs as a microtask.


// 7. .catch()

// .catch() handles rejection.

const promises = Promise.reject("Something went wrong");

promise.catch((error) => {
    console.log(error);
});


// 8. .finally()

Promise.resolve("Success")
    .finally(() => {
        console.log("Cleanup");
    });


//  13. Promise combinators




// Promise.all() = Waits for all promises.If one rejects, the entire Promise.all() rejects.

// Promise.allSettled() = Waits for all, regardless of success/failure.


// Promise.race() = Returns the result of the first Promise to settle . So the first one to either succeed or fail wins.


// Promise.any()

// Returns the first fulfilled Promise.

// Rejected promises don’t win.


         //         Promise
         //            │
         //     ┌──────┴──────┐
         //     ↓             ↓
         //  Success         Failure
         //     │             │
         // fulfilled       rejected
         //     │             │
         //   .then()       .catch()
         //     │             │
         //     └──────┬──────┘
         //            ↓
         //         .finally()


         