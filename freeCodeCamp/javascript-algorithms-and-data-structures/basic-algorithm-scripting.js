// convert-celsius-to-fahrenheit
function convertToF(celsius) {
  let fahrenheit = 9/5 * celsius + 32;
  return fahrenheit;
}

convertToF(30);

// reverse-a-string
function reverseString(str) {
  const strArr = [...str];
  let strReverse = "";
  for(let i = strArr.length - 1; i > -1; i--)
    strReverse += strArr[i];

  return strReverse;
}

reverseString("hello");

// factorialize-a-number
function factorialize(num) {
  if(num <= 1)
    return 1

  return factorialize(num - 1) * num;
}

factorialize(5);

// find-the-longest-word-in-a-string
function findLongestWordLength(str) {
  const regEx = /\w+/g;
  const arr = str.match(regEx);
  let max = 0;
  for(const word of arr) {
    max < word.length ? max = word.length: max = max;
  }
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// return-largest-numbers-in-arrays
function largestOfFour(arr) {
  const newArr = [];
  for(const subarr of arr) {
    newArr.push(Math.max(...subarr));
  }
  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// confirm-the-ending
function confirmEnding(str, target) {
  const arrStr = [...str];
  const arrTarget = [...target];

  for(let i = arrTarget.length - 1; i > -1; i--) {
    if(arrTarget[i] !== arrStr[arrStr.length - 1 - (arrTarget.length - 1 - i)])
      return false;
  }

  return true;
}

confirmEnding("Bastian", "n");

// repeat-a-string-repeat-a-string
function repeatStringNumTimes(str, num) {
  const tmp = str;
  if(num < 1)
    return "";
    
  while(num-- > 1)
    str += tmp;
  return str;
}

console.log(repeatStringNumTimes("abc", 3));

// truncate-a-string
function truncateString(str, num) {
  if(num  >= str.length)
    return str;

  let arr = [...str];
  arr = arr.slice(0, num);

  str = "";
  for(const letter of arr)
    str += letter;

  return str + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// basic-algorithm-scripting/finders-keepers
function findElement(arr, func) {
  for(const num of arr) {
    if(func(num))
      return num;
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// boo-who 
function booWho(bool) {
  if(typeof bool === "boolean") {
    return true;
  } else return false;
}

// title-case-a-sentence
function titleCase(str) {
  let strr = str[0].toUpperCase();
  
  for(let i = 1; i < str.length; i++) {
    if(str[i] === ' ') {
      strr += str[i] + str[i + 1].toUpperCase()
      i++;
    } else {
      strr += str[i].toLowerCase();
    }
  }

  return strr;
}

console.log(titleCase("I'm a little tea pot"));

// slice-and-splice
function frankenSplice(arr1, arr2, n) {
  const finish = arr2.slice(n, arr2.length);
  let arr3 = [];
  arr3.push(...arr2.slice(0, n));
  arr3.push(...arr1);
  arr3.push(...finish);
  return arr3;
}

console.log(frankenSplice([1, 2,] , ["a", "b"], 1));

// falsy-bouncer
function bouncer(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(!arr[i]) {
      arr.splice(i, 1);
      i--
    }
  }
  return arr;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// where-do-i-belong
function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);  
  if(arr[0] === num) return 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] <= num && arr[i + 1] >= num)
      return i + 1;
  }

  return arr.length;
}

// mutations
function mutation(arr) {
  let tmp1 = arr[1];
  let tmp2 = arr[0];
  tmp1 = tmp1.toUpperCase();
  tmp2 = tmp2.toUpperCase();

  const lettereDaUsare = [...tmp2];

  for(const letter of [...tmp1]) {
    let i = 0;
    for(; i < lettereDaUsare.length; i++) {
        if(lettereDaUsare[i] === letter) 
          break;
    }
    if(i === lettereDaUsare.length)
      return false 
  }
  
  return true;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

// chunky-monkey
function chunkArrayInGroups(arr, size) {
  const ARR = [];
  for(let i = 0; i < arr.length; i += size) {
      ARR.push([...arr.slice(i, ((i + 1 + size) <= arr.length ? i + size : arr.length))]);
  }
  return ARR;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

console.log(getIndexToIns([3, 10, 5], 3));
