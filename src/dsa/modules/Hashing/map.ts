// The important Map methods
// Map cant have duplicate  key values and data like the Set.
// 1. set(key, value)

import { count } from "node:console";


const map = new Map<string, number>();

map.set("apple", 10);
map.set("banana", 20);
map.set("orange", 30);



// If you’re talking about Map methods in hashing/data structures, think of a Map as a hash table: it stores data as key → value pairs.



// 2. get(key)


map.get("apple");


map.get("mango");

// 3. has(key)
 

console.log(map.size);
console.log(map);
console.log(map.has("apple"));

for (let key of map.keys()) {
   console.log(key + " -> "  + map.get(key));
}


// map.set(key, value)
// map.get(key)
// map.has(key)
// map.delete(key)
// map.size
// map.clear()


// map.keys()
// map.values()
// map.entries()
// map.forEach()



// Map
//  ↓
// caching
// session management
// grouping
// lookup indexes
// frequency counting
// in-memory state

// Set
//  ↓
// deduplication
// membership checks
// permissions
// processed IDs
// unique values


                        //   Object.                                        Map
// 1. Keys.               Mainly strings/symbols.                        Any type — objects, numbers, strings, functions, etc.
//2. Purpose.             General-purpose data structure / records.      Key → value lookup and dynamic collections
//3. Performance/API.     Manual patterns like Object.keys() / hasOwn(). Built-in set(), get(), has(), delete(), size and 

// designed for frequent insertion/lookup


//Checking frequency
let arr = [1,2,3,3,2,1,4,5,6,7] as any;

let maps = new Map();

for (let i = 0; i < arr.length; i++) {
   if(maps.has(arr[i])){
      maps.set(arr[i], maps.get(arr[i]) + 1);
   
   }else {
      maps.set(arr[i], 1);
   }
}

console.log(maps);


// sort the people

let names = ["john", "jane", "alice"] as any;
let heights = [170, 160, 180] as any;

let people = new Map();
let ans = [] as any;
function peoplesorting(names: any, heights: any) {
for (let i = 0; i < names.length; i++) {
     people.set(heights[i], names[i]);
}
  heights.sort((a: any, b: any) => b - a);

  for(let i = 0; i < heights.length; i++) {
    names[i] = people.get(heights[i]);
  }
  return names;
}

console.log(people);
console.log(peoplesorting(names, heights));



// Two Sum Problem
arr = [2, 7, 11, 15]
let target = 9;
 function TwoSum(arr: any, target: number) {
     const map = new Map();
      for(let i = 0; i < arr.length; i++) {
         if(map.has(target - arr[i])) {
            return [i, map.get(target - arr[i])];
         }
     else   map.set(arr[i], i);
      }

      return [-1, -1];
 }

console.log(TwoSum(arr, target));


let arr1 = [1,2,2,1];
let arr2 = [2,2];

 function Intersaction(arrOne: any, arrTwo: any) {
   let map = new Map();
    const result: number[] = [];
   
   for( let nums of arrOne) {
    map.set(nums, true);
   }

   for(const nums of arrTwo) {
      if(map.has(nums)) {
         result.push(nums);
         map.delete(nums);
      }

   }
   return result
 }


 console.log(Intersaction(arr1, arr2));
 console.log(Intersaction([4, 9, 5], [9, 4, 9, 8, 4]));
 console.log(Intersaction([1, 2, 3], [4, 5, 6]));

    let k = 2
   

   function subArray(arr: any, k: any) {
      let map = new Map();
      map.set(0,1);
      let sum = 0;
      let count = 0
     for(let nums of arr) {
      sum += nums;
       const previous = map.get(sum - k);
      if(previous) {
          count += previous;
      }
      map.set(sum, (map.get(sum) ?? 0) + 1);
      console.log(map);
     }
     return count;
     
   }

console.log(subArray([1,1,1], 2));


console.log(subArray([10,12,1,1,2,3,7,5], 12));