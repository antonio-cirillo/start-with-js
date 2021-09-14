// using-the-test-method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// match-literal-strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);

// match-a-literal-string-with-different-possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// ignore-case-while-matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

// extract-matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 

// find-more-than-the-first-match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex);

// match-anything-with-wildcard-period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// match-single-character-with-multiple-possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

// match-letters-of-the-alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[aelmtuso-q]/gi; 
let result = quoteSample.match(alphabetRegex);

// match-numbers-and-letters-of-the-alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

// match-single-characters-not-specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

// match-characters-that-occur-one-or-more-times
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; 
let result = difficultSpelling.match(myRegex);

// match-characters-that-occur-zero-or-more-times
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

// find-characters-with-lazy-matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);

// find-one-or-more-criminals-in-a-hunt
let reCriminals = /C+/g;

// match-beginning-string-patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

// match-ending-string-patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// match-all-letters-and-numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

// match-everything-but-letters-and-numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

// match-all-numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

// match-all-non-numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

// restrict-possible-usernames
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]+[A-Za-z]+[A-Za-z]*[0-9]*$|^[A-Za-z]+[A-Za-z]*[0-9]+[0-9]+$/;
let result = userCheck.test(username);

// match-whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

// match-non-whitespace-characters
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

// specify-upper-and-lower-number-of-matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr);

// specify-only-the-lower-number-of-matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

// specify-exact-number-of-matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);

// check-for-all-or-none
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

// positive-and-negative-lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/;
let result = pwRegex.test(sampleWord);

// check-for-mixed-grouping-of-characters
let myString = "Eleanor Roosevelt";
let myRegex = /^(Franklin|Eleanor)( D.\s| )Roosevelt$/; 
let result = myRegex.test(myString);

// reuse-patterns-using-capture-groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);

// use-capture-groups-to-search-and-replace
let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);

// remove-whitespace-from-start-and-end
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)|(\s+)$/g; 
let result = hello.replace(wsRegex, "");
