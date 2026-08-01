


const arr = [2,5,7,3] as any;
 
let k = 2;
function findingBookAllocation(arr: any, k: number) {
   let first = 0;
   let last = 0;
   for(let i = 0; i < arr.length; i++) {
      first = Math.max(arr[i], first)
      last += arr[i];
      }

      while (first < last) {
          
      }
}