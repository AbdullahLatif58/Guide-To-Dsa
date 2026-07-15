let arr = [5, 2, 9, 1, 5, 6] as any;

let n = arr.length;

 function swap (arra: any, i: number, j: number) {
   [arra[i], arra[j]] = [arra[j], arra[i]];
}

 for(let i = 0; i < n - 1; i++) {
   let minIndex = i;
   for(let j = i + 1; j < n; j++) {
     
      if(arr[minIndex] >= arr[j]) minIndex = j;
 console.log(arr);
      if(minIndex !== i ) { 
         swap(arr, i, minIndex)
      }
   }
 }


 console.log(arr);