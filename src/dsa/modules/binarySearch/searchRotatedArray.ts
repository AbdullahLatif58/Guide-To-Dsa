


 function findingIndex(arr: any, target: any, left: number, right: number) {
       while(left <= right) {
         let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) {
         return mid;
        }
         if(arr[mid] > arr[left])  {
           if(target >= arr[left] && target <= arr[mid]) {
            right = mid - 1
           }else  left = mid + 1;
        }else if(arr[mid] < arr[right]) {
          if(target >= arr[mid] && target <= arr[right]) {
            left = mid + 1;
          } else right = mid - 1;
        }
        
      }
      return -1;
 }

let arr = [4,5,6,7,0,1,2] as any;
 let target = 2;
  let left = 0;
  let right = arr.length - 1;
 console.log(findingIndex(arr, target, left, right));

 //  Find Minimum in Rotated Sorted Array 
let arrays =[4,5,6,7,1,2] as any;

  function findingMinumumNum(arr: any, left: number, right: number) {
      while(left < right) {
         let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[right]) {
         left = mid + 1;
         } else if(arr[mid] < arr[right]) {
           right = mid;
         }
      }
       return arr[left];
  }
   
  

  console.log(findingMinumumNum(arrays, left, arrays.length - 1))

let arrr= [11,13,15,17] as any;
  function findingIteration(arr: any, left: number, right: number) {

     while(left < right) {
      let mid = Math.floor((left + right) / 2);
       if(arr[mid] >= arr[left] && arr[mid] < arr[right]) {
         return 0;
       }
       if(arr[mid] < arr[left]) {
         return mid;
       }
     }
  }
  
  console.log(findingIteration(arr, left, arrr.length - 1));

  let arrey = [1,1,1,1,3,1] as any;
   
    function search(arr: any, target: any, left: number, right: number){
       while( left < right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) {
         return true;
        }
        if(target < arr[mid]) {
         right = mid - 1;
        }else left = mid + 1;
       }
       return false;
   }

   let targets = 7; 

   console.log(search([6,7,1,2,3,4,5], targets, 0, arrey.length - 1));
   console.log(search([6,7,1,2,3,4,5], 4, 0, arrey.length - 1));
   console.log(search([4,5,6,7,0,1,2], 5, 0, arrey.length - 1));
   console.log(search([4,5,6,7,0,1,2], 1, 0, arrey.length - 1));
   console.log(search([30,40,50,5,10,20],40, 0, arrey.length - 1));