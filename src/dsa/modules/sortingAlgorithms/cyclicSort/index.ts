
// let arra = [3,11,9,2,1,4]  as any;
// function cyclicSort(arr: any) {
//      let i = 0;
//      let n = arr.length;

//      while (i < n) {
//       let correct = arr[i] - 1;
//       if(arr[i] !== arr[correct]) {
//          [arr[i], arr[correct]] = [arr[correct], arr[i]];

//        }else {
//          i++;
//        }
//   } 
// }
// cyclicSort(arra);
// console.log(arra);

// finding missing numbers in array
let array = [0,3,1] as any;

function missingNumber(arr: any) {
   let n = arr.length
   let i = 0;
   

    while (i < n) {
      let correct = arr[i];
      if(arr[i] !== arr[correct]) {
         [arr[i], arr[correct]] = [arr[correct], arr[i]];
       }else i ++
}
     for( let j = 0; j < n; j++) {
      if(arr[j] !== j ) {
         return j;
      }
     }
}
console.log(missingNumber(array))


//Find all the nimber disappeared in an array

let arrays = [4,3,2,7,8,1] as any;

function findingDisappar(arr: any) {
   let n = arr.length
   let i = 0;
     while (i < n) {
      let correct = arr[i] - 1;
      if(arr[i] !== arr[correct]) {
         [arr[i], arr[correct]] = [arr[correct], arr[i]];
       }else i ++
}
    let result = [] as any;
     for( let j = 0; j < arr.length; j++) {
      if(arr[j] !== j + 1) {
      result.push(j + 1);
      }
     }
     return result;
}

console.log(findingDisappar([4,3,2,7,8,1]));

