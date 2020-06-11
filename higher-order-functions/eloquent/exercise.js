// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.

function FlattenArr(arrayToFlatten){
  return arrayToFlatten.reduce((flatArray,value) =>  flatArray.concat(Array.isArray(value) ? FlattenArr(value) : value),[])
}
console.log(FlattenArr(arrays));

// // → [1, 2, 3, 4, 5, 6]


// // Challenge 2. Your own loop
// // Your code here.
function loop(value,condition,step,print){
  for( ;condition(value);value = step(value)){
    print(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// // → 3
// // → 2
// // → 1

// // Challenge 3. Everything
function every(array, test) {
  let doesSatisfy = true;
  for(let i = 0; i < array.length; i++) {
    if(!test(array[i])) doesSatisfy = false;
  }
  return doesSatisfy;
}

console.log(every([1, 3, 5], n => n < 10));
// // → true
console.log(every([2, 4, 16], n => n < 10));
// // → false
console.log(every([], n => n < 10));
// // → true

// // Challenge 4. Dominant writing direction
function dominantDirection(text) {
  
}

// console.log(dominantDirection("Hello!"));
// // → ltr
// console.log(dominantDirection("Hey, مساء الخير"));
// // → rtl
