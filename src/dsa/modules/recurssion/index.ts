function index(n: number){
   if (n === 0 ) return ;
   console.log("hello");
   console.log(n)
   index(n - 1);
   console.log(n)
 }


 index(5)

  // recurssion Sum

    function sum(n: number): number {
      if(n === 1) return 1;

      return n + sum(n -1);
      
    }

   console.log(sum(5));

   function fibNacci(n: number, firtst: number = 0, second : number = 1) {
      if( n === 0) return;
      const third = firtst + second;
      process.stderr.write(`${third}` + " ")
      fibNacci(n - 1, second, third);
      
   }
   process.stdout.write(0 + " " + 1 + " ")
   console.log(fibNacci(8));


   function fibNacciSum(n: number, firtst: number = 0, second : number = 1): number{
      if( n === 0) return 0;
      const third = firtst + second;
      console.log(firtst);
    return firtst +  fibNacciSum(n -1, second, third);
      
   }

   console.log(fibNacciSum(8));