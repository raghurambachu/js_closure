// Challenge 1
function addTwo(num) {
    return num + 2
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length;i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

function print(item) {
    console.log(item)
}
let array = [1,2,3,4,5]
forEach(array,print)

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let mapArr = [];
    array.forEach(element => {
        mapArr.push(callback(element))
    })
    return mapArr;
}

//Extension 2
function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for(let i = 0; i < array.length; i++){
        accumulator = callback(accumulator,array[i]);
    }
    return accumulator;
}

//Extension 3
let intersectionArr = [];
function intersection(...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    let arrayAtHand = arrays[i];
    let otherArrs = [];
    for (let j = 0; j < arrays.length; j++) {
      if (j === i) continue;
      otherArrs.push(arrays[j]);
    }
    arrayAtHand.forEach((num) => {
      let existsInAll = otherArrs.every((arr) => arr.includes(num));
      if (existsInAll && !intersectionArr.includes(num))
        intersectionArr.push(num);
    });
  }
  return intersectionArr;
}


//Using Reduce
function intersection(...arrays){
    return arrays.reduce((intersections,array,index) => {
      let otherArrays = [];
      for(let i = 0; i < arrays.length; i++) {
        if(index === i) continue;
        otherArrays.push(arrays[i]);
      }
      for(let i = 0; i < array.length; i++){
        let ifExists = checkIfNumExistsInOtherArrays(array[i],otherArrays)
        if(ifExists && !intersections.includes(array[i])) intersections.push(array[i])
      }
      return intersections
    },[])
  }
  
  
  function checkIfNumExistsInOtherArrays(num,otherArrays){
    return otherArrays.every(arr =>  arr.includes(num))
  }
  


// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    return arrays.reduce((unionArr,arr) => {
        arr.forEach(num => {
            if(!doesExist(num,unionArr)){
                unionArr.push(num);
            }
        })
        return unionArr;
    } ,[])
}

function doesExist(num,unionArr){
    return unionArr.includes(num);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    return array1.reduce((obj,word,index) => {
      if(callback(word) === array2[index]){
        obj[word] = array2[index];
      }
      return obj;
    } ,{})
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.map(arrVal => ({[arrVal] : arrCallbacks.reduce((arrValsOfCallback,callback) => arrValsOfCallback.concat([callback(arrVal)]),[])})).reduce((finalObj,obj) => ({...finalObj,...obj}),{})
  }

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
