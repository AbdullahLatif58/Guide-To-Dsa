// // left rotation of one element in an array


// let arr = [1,2,3,4,5] as any;
  
//   let copy = arr[0];
//    for(let i = 0; i < arr.length - 1; i++) {
     
//       arr[i] = arr[i + 1];
   
//    }


//    arr[arr.length - 1]  = copy;

//    console.log(arr);

//    // output: [ 2, 3, 4, 5, 1 ]

//    // Easy way to do this same example  using shift

//    const first = arr.shift();

//     if(first !== undefined) {
//       arr.push(first);
//     }
//     console.log(arr);



    // Left and right rotation of an array by n elements


    let arr = [1,2,3,4,5] as any;
  
  let copy = arr[0];
  let secondCopy = arr[1];
  for (let j = 0; j < 2; j++) {
      console.log("Rotation n: " + j);
      for(let i = 0; i < arr.length - 1; i++) {
     
      arr[i] = arr[i + 1];
   
   }
  }
 
 arr[arr.length - 1]  = copy;
  arr[arr.length - 2]  = secondCopy;
   console.log(arr);



   // 3, 4,5, 1, 2