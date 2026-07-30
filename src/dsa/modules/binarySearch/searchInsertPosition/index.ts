let arrays =  [1,3,5,6] as any;

let target = 7;

function searchInsert(arr: any, target: any) {
   let left = 0;
   let right = arr.length - 1;
   let mid = Math.floor((left + right) / 2);

   while(left <= right) {
      if(arr[mid] === target) {
         return mid;
      }
      if(arr[mid] < target) {
         left = mid + 1;
      } else {
         right = mid - 1;
      }
      mid = Math.floor((left + right) / 2);
   }
   return left;
}

console.log(searchInsert(arrays, target));