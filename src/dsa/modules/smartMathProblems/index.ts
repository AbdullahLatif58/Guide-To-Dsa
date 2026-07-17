// GCD || HCF

let a = 20;

for(let i = 20; i >=1; i--) {
   if(a % i === 0) {
       console.log(i);
   }
}
// euclidean algorithm : we will subtract the smaller number from the larger number until both numbers are equal. The final value will be the GCD of the two numbers.
let b = 20;
let c= 32;

while (b !== c) {
   if (b > c) {
      b = b - c;
   } else {
      c = c - b;
   }
}
 console.log(b,c)


 // count of primes 

  