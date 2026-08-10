// The important Map methods
// Map cant have duplicate  key values and data like the Set.
// 1. set(key, value)


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