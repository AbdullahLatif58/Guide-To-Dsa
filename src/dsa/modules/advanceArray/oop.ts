// // // left rotation of one element in an array


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



//     // Left and right rotation of an array by n elements


  
  


//   for (let j = 0; j < 2; j++) {
//      let copy = arr[0];
      
//       for(let i = 0; i < arr.length - 1; i++) {
     
//       arr[i] = arr[i + 1];
   
//    }
//      arr[arr.length - 1]  = copy;
//   }
 

  
//    console.log(arr);


// // advance way of doing left rotation of an array by n elemmnts 
//   for (let index = 0; index < 6; index++) {
   
//     const first = arr.shift();

//   if(first !== undefined ) {
//       arr.push(first);
     
//   }

//   }
//   console.log(arr);
//    // 3, 4,5, 1, 2


//   // left rotation of an array by one element
   
   
//   let copys= arr[arr.length - 1];
//    for(let i = arr.length - 1; i > 0; i--) {
//       console.log(arr[i]);
//       arr[i] = arr[i - 1];

//    }

//    arr[0]  = copys;

//    console.log(arr);

//    // ouput: [ 5, 1, 2, 3, 4 ]


//    // left rotation nested loop of an array by n elements;
   

   
//    for(let j = 0; j < 2; j++) {
//       let copy = arr[arr.length - 1];
    
      

//       for (let i = arr.length - 1; i > 0; i--) {
      


      
//          arr[i] = arr[i - 1]; 
       
       

//       }
//       arr[0] = copy;
//    }

//    console.log(arr);

//    //output:  [4,5,1,2,3]

//    let arrays = [1,2,3,4,5] as any;

//    for(let j = 0; j < 2; j++) {
//       let last = arrays.pop();
//       if(last !== undefined){
//          arrays.unshift(last);
//       }
//    }

//    console.log(arrays);

// //output:  [4, 5, 1, 2, 3]

// // advance way of left rotation of an array by n elements using reverse method

// let array = [1,2,3,4,5] as any;

// let k = 2;
// k = k % array.length;

//  reverse(0, k -1)

 

//    function  reverse(i: any , j: any): void {
//       while( i < j ) {
//          let temp = array[i];
//          console.log("temp is " +  temp);
//          array[i] = array[j];
//          array[j] = temp;
//          console.log( temp);
//          i++
//          console.log(1); 
//          j--
//          console.log(j);
//       }
//    }
// console.log(array);

// output: [2, 1, 3, 4, 5]

// getting eliminating the duplication in an sorted array
const arrayss = [1,1,2,3,4,5,5,5] as any;
removeDuplication(arrayss)
function removeDuplication(nums: number[]) {

    let j = 1;

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] !== nums[i + 1]) {

            nums[j]  = nums[i + 1] as any;

            j++;
        }

    }

    return j;
}
 

 console.log(arrayss);
