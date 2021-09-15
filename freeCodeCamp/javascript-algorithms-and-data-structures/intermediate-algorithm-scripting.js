// sum-all-numbers-in-a-range
function sumAll(arr) {
  return (arr[0] + arr [1]) * (Math.abs(arr[0] - arr[1]) + 1) / 2;
}

console.log(sumAll([1, 4]));

// diff-two-arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter((value) => 
    !arr2.some((secondValue) => value === secondValue)
  );
  return newArr.concat(arr2.filter((value) => 
    !arr1.some((secondValue) => value === secondValue)
  ))
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));

// seek-and-destroy
function destroyer(arr) {
  var args = [].slice.call(arguments);
  return arr.filter((value) => 
    !args.some(secondValue =>
      secondValue === value
    )
  )
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// wherefore-art-thou
function whatIsInAName(collection, source) {
  var arr = [];
  // Modifica il codice solo sotto questa riga
  console.log(source);
  for(const obj of collection) {
    const keys = Object.keys(source);
    let i = 0
    for(; i < keys.length; i++) {
      if(obj.hasOwnProperty(keys[i])) {
        if(obj[keys[i]] !== source[keys[i]])
          break;
      } else break;
    }
    if(i === keys.length)
      arr.push(obj);
  }
 

  // Modifica il codice solo sopra questa riga
  console.log(arr);
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
