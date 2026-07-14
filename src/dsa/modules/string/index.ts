let s = "Abdullah";

 s.length; // 8
 console.log(s.length);


 console.log(s.slice(4,8));

  console.log(s.slice(-4,s.length));




console.log(s.substring(0,6));


// this will add the string with this


console.log(s.concat(" ","hello"));

/// printing each letter in new line

for( let i = 0; i < s.length; i++) {
   console.log(s[i]);
}



// now we will reverse this 

for( let i = s.length - 1; i >= 0; i--) {
   console.log(s.charAt(i));
}


// in this we will reverse the string using the concat

let rev = "" as  string;

for( let i = s.length - 1; i >= 0; i--) {
    rev = rev + s.charAt(i);
}

console.log(rev);


// how to check the frequency of the character in a string

let str = "Hello m is m my name free free free"


let arr = new Array(128).fill(0);

  for( let i = 0; i <  str.length; i++){
     let index = str.charCodeAt(i);
       arr[index] = arr[index] + 1;
  }
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      console.log(String.fromCharCode(i) + " : " + arr[i]);
    }
  }

  