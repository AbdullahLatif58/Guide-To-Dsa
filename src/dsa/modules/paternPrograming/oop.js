let n = 5;

for (let i = 1; i <= n; i++) {
   
  for (let c = 1; c <= n; c++) {
    process.stdout.write("* ");
  }

  console.log(); 
}
//  Output: 
// * * * * * * 
// * * * * * * 
// * * * * * * 
// * * * * * * 
// * * * * * * 


for (let i = 1; i <= n; i++) {
   
  for (let c = 1; c <= i; c++) {
    process.stdout.write(`*`);
  }

  console.log(); 
}


// Output: 

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 


for (let i = 1; i <= n; i++) {
   
  for (let c = 1; c <= i; c++) {
    process.stdout.write(`${i + " " ,c}`);
  }

  console.log(); 
}


// Output: 

// 1
// 12
// 123
// 1234
// 12345
 

for (let i = n; i >= 1; i--) {
  for(let c = 1; c <= i; c++) {
     process.stdout.write(`${i, c} `);
  }
  console.log();
}

// output: 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

for (let i = n; i >= 1 ; i-- ){
  for (let c = n; c>= i; c--){
  process.stdout.write(`${i,c}`);
  }
      console.log();
  }

// output: 
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 


for (let i = 1; i <= n ; i++ ){

  for(let c = 1; c <= n-i; c++)
  {
    process.stdout.write(" ");
  }
  for (let c = 1; c <=i; c++){
  process.stdout.write(`*`);
  }

      console.log();
  }

