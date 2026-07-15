import { log } from "node:console";

let arr = [12,14,1,5,6] as any;
// sorting in ascemding orders
const n = arr.length;
function swap (arra: any, i: number, j: number) {
   [arra[i], arra[j]] = [arra[j], arra[i]];
}

for(let i = 0; i < n - 1; i++) {

   for(let j = 0; j < n - 1 - i ; j++) {
    if(arr[j] > arr[j + 1]) {
     swap(arr, j, j + 1);
   }
}
}

console.log(arr);

// sorting in descending orders orders

for(let i = 0; i < n - 1; i++) {

   for(let j = 0; j < n - 1 - i ; j++) {
    if(arr[j] < arr[j + 1]) {
     swap(arr, j, j + 1);
   }
}
}

console.log(arr);

let arr2 = [1,2,3,4,5] as any;
let swapped = false;
for(let i = 0; i < n - 1; i++) {
   console.log(arr2)
    swapped = false;
     for(let j = 0; j < n - 1 - i; j++){
      
       if(arr2[j] > arr2[j + 1]) {
       swap(arr2, j, j + 1);
       swapped = true;
   }
   
   }
   if(!swapped) {
      break;
   }
}





let arr3 = [7,4,5,2,9,1] as any;

let length = arr3.length;

for(let i = 0; i < length - 1; i++) {
     console.log(arr3)
   for(let j = 0; j < length - 1 - i ; j++) {
    if(arr3[j] >= arr3[j + 1]) {
     swap(arr3, j, j + 1);
   }
}
}

console.log(arr3);