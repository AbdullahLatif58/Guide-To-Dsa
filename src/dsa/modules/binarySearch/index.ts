// the binary serach is the searching we perform like the indexing of the db is the best example of the binary search man

let arr = [1, 4, 5,6,7 ,8,9,12,13,15,18,20,21,23,25,27] as any;
 let  target = 25;

 
   function binarySearch(arr: any, target: any) {
       let left= 0;
       let  right = arr.length - 1;
       while (left <= right) {
         let mid = Math.floor((left + right) / 2);
         if(arr[mid] === target) {
            return mid;
         }
          if(arr[mid] < target) {
            left = mid + 1;

          }else {
            right = mid - 1;
          }
         }
         return  -1;
       }


       const index = binarySearch(arr, target);

   if (index !== -1) {

    console.log(`Found ${target} at index ${index}`);

} else {

    console.log("Target not found");

}

