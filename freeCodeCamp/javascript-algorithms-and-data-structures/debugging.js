// use-the-javascript-console-to-check-the-value-of-a-variable
let a = 5;
let b = 1;
a++;
console.log(a);
let sumAB = a + b;
console.log(sumAB);

// understanding-the-differences-between-the-freecodecamp-and-browser-console
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

// use-typeof-to-check-the-type-of-a-variable
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

// catch-misspelled-variable-and-function-names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// catch-unclosed-parentheses-brackets-braces-and-quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// catch-mixed-usage-of-single-and-double-quotes
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);

// catch-use-of-assignment-operator-instead-of-equality-operator
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// catch-missing-open-and-closing-parenthesis-after-a-function-call
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

// catch-arguments-passed-in-the-wrong-order-when-calling-a-function
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

// catch-off-by-one-errors-when-using-indexing
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();

// catch-off-by-one-errors-when-using-indexing
function zeroArray(m, n) {
  // Crea un array bidimensionale con m righe e n colonne di zeri
  let newArray = [];
  
  for (let i = 0; i < m; i++) {
    // Aggiungi l'm-esima riga a newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      // Inserisce n zeri nella riga corrente per creare le colonne
      row.push(0);
    }
    // Inserisce nell'array la riga corrente, che ora ha n zeri in al suo interno
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// prevent-infinite-loops-with-a-valid-terminal-condition
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
