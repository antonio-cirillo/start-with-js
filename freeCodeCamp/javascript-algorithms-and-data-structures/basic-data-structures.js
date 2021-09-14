// use-an-array-to-store-a-collection-of-data
let yourArray = ["Ciao", true, false, 5, 10]

// access-an-arrays-contents-using-bracket-notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = "a";
console.log(myArray);

// add-items-to-an-array-with-push-and-unshift
function mixedNumbers(arr) {
  arr.unshift(...['I', 2, 'three']);
  arr.push(...[7, 'VIII', 9]);
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// remove-items-from-an-array-with-pop-and-shift
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// remove-items-using-splice
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);

// add-items-using-splice
function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// copy-array-items-using-slice
function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// copy-an-array-with-the-spread-operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// combine-arrays-with-the-spread-operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());

// check-for-the-presence-of-an-element-with-indexof
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// iterate-through-all-an-arrays-items-using-for-loops
function filteredArray(arr, elem) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    let j = 0;
    for(; j < arr[i].length; j++) {
        if(arr[i][j] === elem)
          break;
    }
    if(j === arr[i].length)
      newArr.push(arr[i]);
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// create-complex-multi-dimensional-arrays
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [ ['loop', 'shift', 6, 7, 1000, 'deep'] ],
  [ [ ['concat', false, true, 'spread', 'deeper'] ] ],
  [ [ [ ['mutate', 1327.98, 'splice', 'slice', 'deepest'] ] ] ]
];

// add-key-value-pairs-to-javascript-objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods["bananas"] = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);

// modify-an-object-nested-within-an-object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

console.log(userActivity);

// access-property-names-with-bracket-notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));

// use-the-delete-keyword-to-remove-object-properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

let features = ["oranges", "plums", "strawberries", "foods"]
for(const feature of features)
  delete foods[feature];

console.log(foods);

// check-if-an-object-has-a-property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  if('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj)
    return true;
  else return false;
}

console.log(isEveryoneHere(users));

// iterate-through-the-keys-of-an-object-with-a-for---in-statement
function countOnline(usersObj) {
  let count = 0;
  for(const user in usersObj) {
      if(usersObj[user]["online"] === true) count++;
  }

  return count;
}

// generate-an-array-of-all-object-keys-with-object-keys
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));

// modify-an-array-stored-in-an-object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
