//Exercise: Level 1

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge ="30 Days Of JavaScript"

//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,2));//30

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3));//Days Of JavaScript

//Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script")); //true

//Split the string into an array using split() method
console.log(challenge.split());

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(company.split(","));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript","Python"));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)); // output: S

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let characterCode = challenge.indexOf("J");
console.log(challenge.charCodeAt(characterCode));//output : 74

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf("because"));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf("because"));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search(/because/));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '
let newChallenge = ' 30 Days Of JavaScript ';
console.log(newChallenge.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith("30 Days Of JavaScript"));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("30 Days Of JavaScript"));

//Use match() method to find all the a’s in 30 Days Of JavaScript

console.log(challenge.match(/a/g));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let test = '30 Days of'
let test1 = ' JavaScript'
console.log(test.concat( test1));


//Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2));


//EXERCISE LEVEL 2

console.log('There is no exercise better for the heart than reaching down and lifting people up.');

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num1 = "10"
let numChange = parseInt(num1)
let num2 = 10
console.log(numChange);
console.log(typeof num1===typeof num2);// output : false
console.log(typeof numChange == typeof num2);// output : true

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
  
  let check = parseFloat('9.8')
  console.log(check===10);//output :false
  console.log(Math.round(check)===10); //output :true
  

  //Check if 'on' is found in both python and jargon
let found1 = 'python'
console.log(found1.includes('on'));//true

let found2 = "jargon"
console.log(found2.includes('on'));//true


  // hope this course is not full of jargon. Check if jargon is in the sentence.

  let sentence1 ="hope this course is not full of jargon"
  console.log(sentence1.includes("jargon"));//true

  //Generate a random number between 0 and 100 inclusively.

  console.log(Math.floor(Math.random() * 101));

  //Generate a random number between 50 and 100 inclusively.

  let min = 50
  let max = 100

  console.log(Math.floor(Math.random() * (max - min + 1) + min));

//Generate a random number between 0 and 255 inclusively.

  console.log(Math.floor(Math.random() * 256));

  //Access the 'JavaScript' string characters using a random number.
 
  let accessStrgChar = 'JavaScript' 

  console.log(accessStrgChar.charAt(Math.floor(Math.random() * accessStrgChar.length)));

  //Use console.log() and escape characters to print the following pattern.

/*1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

let escapeChar = "1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125"

console.log(escapeChar)

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
 
let slice = 'You cannot end a sentence with because because because is a conjunction'
console.log(slice.substr(31,23));//because because because
console.log(slice.substring(31,54));//because because because


//Exercise 3

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let count = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let countAll = count.match(/love/gi);
console.log(countAll.length);


//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let count2= "You cannot end a sentence with because because because is a conjunction"
console.log((count2.match(/because/gi)).length);

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let clean = sentence2.replace(/[^a-zA-Z0-9\s]/g, "");

console.log(clean);

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let text ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let RegEx = /\d+/g
console.log(text.match(RegEx));//[ '5000', '10000', '15000' ]