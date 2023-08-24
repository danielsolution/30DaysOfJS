            //Exercises: Level 1

                 //1 
//Get user input using prompt(“”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//Enter your age: 30
//You are old enough to drive.

//Enter your age:15
//You are left with 3 years to drive.

let age = prompt("Enter your age:")

if (age >= 18) {
    console.log('You are old enough to drive');
}else{
     console.log(`you are left with ${18 - age} years to drive`);
}


                       //2
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//Enter your age: 30
//You are 5 years older than me.

let myAge = 25;
let yourAge = prompt("Enter your age:");

if (myAge < yourAge) {
     console.log(`You are ${yourAge - myAge} years older than me.`);  
}else{
     console.log(`I am ${myAge - yourAge} years older than you.`);
}

                      //3
//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//  4 is greater than 3

let a = 4
let b = 3

//using if else

if (a > b) {
    console.log(`${a} is greater than ${b}`); 
}else{
     console.log(`${a} is less than ${b}`);
}

// using ternary operator

a > b
 ? console.log(`${a} is greater than ${b}`)
:console.log(`${a} is less than ${b}`)

                //4
//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//Enter a number: 2
//2 is an even number

//Enter a number: 9
//9 is an odd number.

let number = prompt("Enter a number:")

if (number % 2 === 0) {
     console.log(`${number} is an even number`);
}else{
     console.log(`${number} is an odd number`);
}


                 //Exercises: Level 2

                 //1

//Write a code which can give grades to students according to theirs scores:
                // 80-100, A
                 //70-89, B
                // 60-69, C
                // 50-59, D
                // 0-49, F

let scores = prompt("Enter a score:") 

switch (true) {
     case scores >= 80 :
          console.log("A");
          
      break;

     case scores >=70 :
          console.log("B");

      break;

      case scores >= 60 :
          console.log("C");
          
      break;

     case scores >=50 :
          console.log("D");

      break;

     default:
          console.log("F");
          break;
}


                       //2

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
// June, July or August, the season is Summer

let seasonsUserInput = prompt("Enter a month:")
let seasons = seasonsUserInput.toLocaleLowerCase()

if (seasons === "september" || seasons ==="october" || seasons ==="november" ) {
    console.log("The season is Autumn"); 
}else if (seasons === "december" || seasons ==="january" || seasons ==="february" ) {
     console.log("The season is Winter"); 
}else if (seasons === "march" || seasons ==="april" || seasons ==="may" ) {
     console.log("The season is Spring");
}else if (seasons === "june" || seasons ==="july" || seasons ==="august" ) {
     console.log("The season is Summer");
} 

                                    //3
//Check if a day is weekend day or a working day. Your script will take day as an input

//What is the day  today? Saturday
//Saturday is a weekend.

//What is the day today? saturDaY
//Saturday is a weekend.

//What is the day today? Friday
//Friday is a working day.

//What is the day today? FrIDAy
//Friday is a working day.

let dayUserInput = prompt("Enter day:")
let day = dayUserInput.toLowerCase();

switch (day) {
     case "monday" :
          console.log("Monday is a working day");
          
      break;

     case "tuesday" :
          console.log("Tuesday is a working day");

      break;

      case "wednesday" :
          console.log("Wednesday is a working day");
          
      break;

     case "thursday" :
          console.log("Thursday is a working day");

      break;

      case "friday" :
          console.log("Friday is a working day");
          break;

     case "saturday" :
               console.log("Saturday is a weekend");
               break;

     case "sunday" :
               console.log("Sunday is a weekend");
                    break;
}



                                  //Exercises: Leve3

               //1

//Write a program which tells the number of days in a month.

//Enter a month: January
//January has 31 days.

//Enter a month: JANUARY
//January has 31 day

//Enter a month: February
//February has 28 days.

//Enter a month: FEbruary
//February has 28 days.

let monthUserInput = prompt('Enter the desired month:');

let monthLowerCase = monthUserInput.toLowerCase();
let month = monthLowerCase.charAt(0).toUpperCase() + monthLowerCase.substring(1);

if (month === 'september' || month === 'april' || month === 'june' || month === 'november') {
    console.log(`${month} has 30 days`)
}
if (month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december') {
    console.log(`${month} has 31 days`)
}
if (month === 'february') {
    console.log(`${month} has 28 days`)
}


                            //2
// Write a program which tells the number of days in a month, now consider leap year.

let now = new Date();
let year = now.getFullYear();
let isLeapYear = false;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}

let input = prompt("Enter a month:");
let days;

input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

console.log(input);

switch (input) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    days = 31;
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    days = 30;
    break;
  case "February":
    days = isLeapYear ? 29 : 28;
    break;
  default:
    console.log("Invalid input");
}

if (days) console.log(`${input} has ${days} days.`);









