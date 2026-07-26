



 function findPivot(arr: any, f: number, l: number) {
   let pivot = arr[f];
   let i = f + 1;
   let j = l;

   while (i <= j ){
      while(i <= l && arr[i] <= pivot) i++
      while(j > f && arr[j] > pivot) j--;
        if(i < j ) {
         swaps(arr, i, j)
        }
   }
     swaps(arr, f, j)
   return j;
 }


 function swap(arr: any, i: number, j : number) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
 }

 function swaps(arr: any, i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }

 function quikSort(arr: any,f: number, l: number) {
     if(f >= l) return ;
     let pidx = findPivot(arr, f, l);
     quikSort(arr, f, pidx - 1);
     quikSort(arr, pidx + 1, l)
 }
 

 let arr = [8, 6, 9, 10,2,3,1,11,13] as any;

 let first = 0;
 let last = arr.length - 1;


 quikSort(arr, 0, arr.length - 1 )

 console.log(arr);