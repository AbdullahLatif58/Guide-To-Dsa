// A closure is a function that remembers the variables from the lexical scope where it was created, even after the outer function has finished executing.


// A closure = Function + the variables it captured from its surrounding scope.



   function Counter() {
      let count = 0;

      return function() {
         count++;

      }
   }


   const increment = Counter();

   increment(); 
