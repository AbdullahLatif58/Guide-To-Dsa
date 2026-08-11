



const checkPangram = (array: number[]): Boolean =>  {
  let seen = new Set<number>();
   for(let nums of array) {
      if(seen.has(nums)) {
         return  false;
      }
      seen.add(nums);
   }
   return true;
}

console.log(checkPangram([1,2,3,4,5]));
console.log(checkPangram([1,1,3,4,5]));



