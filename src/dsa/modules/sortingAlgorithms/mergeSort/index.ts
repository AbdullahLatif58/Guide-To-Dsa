


function conquer(arr: any, first: number, mid: number, last: number) {
     const temp =  new Array(last - first + 1);
     let i = first;
     let j = mid + 1;
     let k = 0;

     while(i <= mid && j <= last) {

      if(arr[i] <= arr[j] ){
      temp[k++] = arr[i++];

      }else temp[k++] = arr[j++];
     }
     while(i <= mid ){
       temp[k++] = arr[i++];
     }
     while (j <= last) {
      temp[k++] = arr[j++];
     }
      arr.splice(first, temp.length, ...temp);

}


 function divide(arr: any, first: number, last: number) {
    if(first >= last) return;
      let  mid = Math.floor((first + last) / 2);
      divide(arr, first, mid);
      divide(arr, mid + 1, last);
      conquer(arr, first, mid, last)
 }

 let arr = [8,6,1,2,5,10,4,7] as any;
   let first = 0;

   let last = arr.length - 1;

  divide(arr, first, last);

  console.log(arr);