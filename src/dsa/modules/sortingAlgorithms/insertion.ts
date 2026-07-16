   
   let arr = [5, 2, 9, 1, 5, 7] as any;

   arr.sort();
   arr.reverse();
   console.log(arr);
// ascending orrder
     for(let i = 1; i < arr.length; i++) {

      console.log(arr);
      let key = arr[i];

      console.log(i);
      let j = i - 1;
       console.log(j);
      while(j >= 0 && arr[j] > key) {
         arr[j + 1] = arr[j];
         j--;
         console.log(arr);
      }
      arr[j + 1] = key;
    
     }

     console.log(arr);

// descending order

       for(let i = 1; i < arr.length; i++) {
      

      let key = arr[i];

      let j = i - 1;
      
      while(j >= 0 && arr[j] < key) {
         arr[j + 1] = arr[j];
         j--;
      }
      arr[j + 1] = key;
    
     }

