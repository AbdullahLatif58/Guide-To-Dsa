// // left rotation of one element in an array


let arr = [1,2,3,4,5] as any;
  
  let copy = arr[0];
   for(let i = 0; i < arr.length - 1; i++) {
     
      arr[i] = arr[i + 1];
   
   }


   arr[arr.length - 1]  = copy;

   console.log(arr);

   // output: [ 2, 3, 4, 5, 1 ]

   // Easy way to do this same example  using shift

   const first = arr.shift();

    if(first !== undefined) {
      arr.push(first);
    }
    console.log(arr);



    // Left and right rotation of an array by n elements


  
  


  for (let j = 0; j < 2; j++) {
     let copy = arr[0];
      
      for(let i = 0; i < arr.length - 1; i++) {
     
      arr[i] = arr[i + 1];
   
   }
     arr[arr.length - 1]  = copy;
  }
 

  
   console.log(arr);


// advance way of doing left rotation of an array by n elemmnts 
  for (let index = 0; index < 6; index++) {
   
    const first = arr.shift();

  if(first !== undefined ) {
      arr.push(first);
     
  }

  }
  console.log(arr);
   // 3, 4,5, 1, 2


  // left rotation of an array by one element
   
   
  let copys= arr[arr.length - 1];
   for(let i = arr.length - 1; i > 0; i--) {
      console.log(arr[i]);
      arr[i] = arr[i - 1];

   }

   arr[0]  = copys;

   console.log(arr);

   // ouput: [ 5, 1, 2, 3, 4 ]


   // left rotation nested loop of an array by n elements;
   

   
   for(let j = 0; j < 2; j++) {
      let copy = arr[arr.length - 1];
      console.log(copy + " copy");
      

      for (let i = arr.length - 1; i > 0; i--) {
      
      console.log("arrat length in inner loop " + i);

      
         arr[i] = arr[i - 1]; 
       
        console.log("array index in inner loop: " + arr[i]);
        console.log(arr);
      }
      arr[0] = copy;
   }

   console.log(arr);






   //output:  [4,5,1,2,3]