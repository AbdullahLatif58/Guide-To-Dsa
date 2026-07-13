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
    
      

      for (let i = arr.length - 1; i > 0; i--) {
      


      
         arr[i] = arr[i - 1]; 
       
       

      }
      arr[0] = copy;
   }

   console.log(arr);

   //output:  [4,5,1,2,3]

   let arrays = [1,2,3,4,5] as any;

   for(let j = 0; j < 2; j++) {
      let last = arrays.pop();
      if(last !== undefined){
         arrays.unshift(last);
      }
   }

   console.log(arrays);

//output:  [4, 5, 1, 2, 3]

// advance way of left rotation of an array by n elements using reverse method

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


//  merged a sorted arrays 
let  arr1 = [2,4,5]  as any;
 let  arr2 =[1,3,6,8] as any;
  let merge = new Array(arr1.length + arr2.length) as number[];
let i = 0 as any;
let j = 0 as any;
let k = 0 as any;

   while (i < arr1.length && j < arr2.length) {
   if(arr1[i] < arr2[j]) {
      merge[k] = arr1[i];
      i++
   }else {
      merge[k] = arr2[j];
      j++
   }
   }

   console.log(merge);


 const prices = [7,1,5,3,6,4] as any[];
var maxProfit = function(prices: any) {
      let maxProfit = 0;
      let min = prices[0];

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min) min = prices[i];
         let profit = prices[i] - min;
         maxProfit = Math.max(maxProfit, profit ); 
    }
    return maxProfit;
    
};

maxProfit(prices);

console.log(prices);


function swap(arr: any[],i: any,j: any): void {
   [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  
  const nums = [2,0,2,1,1,0] as any
var sortColors = function(nums: any) {
    let i = 0; let j = 0; let k = nums.length;
    while(i < k) {
        if(nums[i] === 0) {
             swap(nums,i, j);
             i++;
             j++
        }else if (nums[i] === 2){
            swap(nums, i,k);
            i++;
            k--
        }else {
            i++;
            k--
        }
    }
};