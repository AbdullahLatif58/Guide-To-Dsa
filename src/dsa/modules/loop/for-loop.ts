export function forLoop(): void {
  console.log("===== FOR LOOP =====");

  for (let i = 1; i < 10; i++) {
    console.log(i);
  }
  for (let n = 200; n >=100; n--) {
    console.log(n);
  }


// sum of n natural numbers 
console.log("===== SUM OF N NATURAL NUMBERS =====");
var n = 100;

if(isNaN(n)) {
 console.log("the number is not valid");
}else{
if(n > 0) {
  var sum = 0;
  for (var i = 0; i <= n; i ++) {
       sum = sum + 1;
       
  }
  console.log("sum is:", sum);
}
else  {
console.log("please enter a vlid number");
}
}

}

// for loop for of
export const forOfLoop = (): void => {

  const users = [
  "ALI", 
  "Ahmad",
  "Sarmad"
]

for(let user of users) {
  console.log(user);
}
}


// for In Loop 
// this is used for getting the Keys mainly.

const user : any = {

    name: "Ali",

    age: 20,

    city: "Lahore"

};
export const ForInLoop = (): void => {

  for (var key in user) {

    console.log(key);
  
}
 // after that keys used fir gets the values
console.log("ForEach")
const userss: any  = [{

    name: "Ali",

    age: 20,

    city: "Lahore"

},
{
   name: "Ali",

    age: 20,

    city: "Lahore"
}];

// userss.array.forEach(element => {
//    console.log(element.age);
// });

// Map
console.log("MAp");
const prices = [100,200,300];

console.log(prices.map(p => Math.floor(p * 1.1)));


//filteration


}


// ForEach 





