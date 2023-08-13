
//Exercises: Level 1

   // 1

//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Philip"
let lastName = "John"
let country = "Nigeria"
let city  = "Lagos"
let age = 30
let isMarried = true
let year = 2023;
 

console.log(typeof (firstName));
console.log(typeof (lastName));
console.log(typeof (country));
console.log(typeof (city));
console.log(typeof (age));
console.log(typeof (isMarried));
console.log(typeof (year));

// 2

//Check if type of '10' is equal to 10
console.log(typeof "10" === typeof 10);// output:false

// 3

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')===10); //output:false


          // 4

//Boolean value is either true or false.

//i) Write three JavaScript statement which provide truthy value.

let car = 'toyota'; //truthy
let pass = true;    //truthy
let positiveNumber = 10;        //truthy


//ii) Write three JavaScript statement which provide falsy value.

let empty = ''; //falsy
let boy;    //falsy
let fail = false;  //falsy

         //5

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//i  4 > 3 - true
 console.log(4 > 3); //output: true

//ii 4 >= 3 - true
console.log(4 >= 3); //output: true

//iii 4 < 3  - false
console.log(4 < 3); //output: false

///iv 4 <= 3  -false
console.log(4 <= 3);//output: false

//v 4 == 4 - true
console.log(4 == 4);//output: true

//vi 4 === 4 -true
console.log(4 === 4);//output: true

//vii 4 != 4  --false
console.log(4 != 4);//output: false

//4 !== 4 --false
console.log(4 !== 4);////output: false

//4 != '4' --false
console.log(4 !='4'); //output: false

//4 == '4' --true
console.log(4 == '4');//output: true

//4 === '4'--false
console.log(4 === '4'); //output: false


//Find the length of python and jargon and make a falsy comparison statement.
let python = "python"
console.log(python.length); //6

let jargon = "jargon"
console.log(jargon.length);//6

console.log(python.length !== jargon.length); //output: false

               
                 //6

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12--true
console.log(4 > 3 && 10 < 12); //output: true

// 4 > 3 && 10 > 12--false
console.log(4 > 3 && 10 > 12);//output: false

//4 > 3 || 10 < 12--true
console.log(4 > 3 || 10 < 12);//output: true

//4 > 3 || 10 > 12 --true
console.log(4 > 3 || 10 > 12);//output: true

//!(4 > 3)--false
console.log(!(4 > 3));//output: false

//!(4 < 3) --true
console.log(!(4 < 3));//output: true

//!(false) --true
console.log(!(false));//output: true

//!(4 > 3 && 10 < 12)--false
console.log(!(4 > 3 && 10 < 12));//output: false

//!(4 > 3 && 10 > 12)--true
console.log(!(4 > 3 && 10 > 12));//output: true

//!(4 === '4') --true
console.log(!(4 === '4'));//output: true

//There is no 'on' in both dragon and python--false

let Python ="python"
let dragon = "dragon"

console.log(!(Python.includes("on") && dragon.includes("on"))); //output: false

        //NO 7

//Use the Date object to do the following activities

let date = new Date()

//What is the year today?
let yearToday = date.getFullYear()
console.log(yearToday); //output: 2023

//What is the month today as a number?
let month = date.getMonth() + 1;
console.log(month); 

//What is the date today?
let dateToday = date.getDate()
console.log(dateToday); 

//What is the day today as a number?
let day = date.getDay();
console.log(day);  

//What is the hours now?
let hours = date.getHours();
console.log(hours); 

//What is the minutes now?
let minutes = date.getMinutes()
console.log(minutes);


//Find out the numbers of seconds elapsed from January 1, 1970 to now.
 let seconds = date.getTime()
 console.log(seconds); 



      
           //Exercises: Level 2

              //1
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//Enter base: 20
//Enter height: 10
//The area of the triangle is 100

let base = Number(prompt("Enter base"));
let height = Number(prompt("Enter height"));
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`)

  
                    //2
//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//Enter side a: 5
//Enter side b: 4
//Enter side c: 3
//The perimeter of the triangle is 12

let sideA = prompt('Enter side a:');
let sideB = prompt('Enter side b:');
let sideC = prompt('Enter side c:');
let result1 = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`The perimeter of the triangle is ${result1}`);


             //3
//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
 
let length = prompt('Enter length of rectangle:')
let width = prompt('Enter width of rectangle:')
let areaOfRectangle = length * width;
let perimeterOfRectangle = 2 * (length + width);

console.log(`The area of rectangle is ${areaOfRectangle}`);
console.log(`The perimeter of rectangle is ${perimeterOfRectangle}`);


                     //4
//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 
   const pi = Math.PI;

let r = Number(prompt("Enter radius"));

const areaOfCircle = pi * r * r;
const circumferenceOfCircle = 2 * pi * r;

console.log(`area of circle is ${areaOfCircle}`);
console.log(`circumference of circle is ${circumferenceOfCircle}`);  


              //5
//Calculate the slope, x-intercept and y-intercept of y = 2x -2

const slope = 2;
const xIntercept = 1; // x-intercept is 1 (when y = 0)
const yIntercept = -2; // y-intercept is -2 (when x = 0)

console.log(
  `Slope: ${slope}, x-intercept: ${xIntercept}, y-intercept: ${yIntercept}`
);

                  
                       //6
//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2
let x2 =6
let y1 =2
let y2 = 10
let slope2 = (y2- y1) / (x2 - x1);

console.log(slope2);

       //7
//Compare the slope of above two questions.

console.log(`Slopes are equal: ${slope === slope2}`);

         //8
//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

function y(x) {
        return Math.pow(x, 2) + 6 * x + 9;
      }
      
      let x = -3;
      while (y(x) > 0) {
        x += 0.1;
      }
      
      console.log(`The value of x where y = 0 is approximately ${x.toFixed(2)}.`);
      
              //9
//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120

let Hours = Number(prompt("Enter hours"));
let rate = Number(prompt("Enter rate/hour"));
let pay = Hours * rate;

console.log(`Your weekly earning is ${pay}`);
           
                  //10
//If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = 'Daniel';
console.log(myName.length);//output:6
console.log(`my name, ${myName} is short`);

          
                       // 11

//Compare your first name length and your family name length and you should get this output.

//let firstName = 'Asabeneh'
//let lastName = 'Yetayeh'
//Your first name, Asabeneh is longer than your family name, Yetayeh

let FirstName = 'Daniel'
let LastName = 'Ekene'

console.log(`Your first name is, ${FirstName} is longer than your family name, ${LastName}`)

            
                      //12
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25

//output:I am 225 years older than you.

console.log(`I am ${myAge - yourAge} years older than you.`);

         
                      //13
//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//Enter birth year: 1995
//You are 25. You are old enough to drive

//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.

let yearOfUser = prompt('Enter birth year:');
let trueYear = 2023 - yearOfUser;
trueYear >= 18 ? console.log(`You are ${trueYear}. You are old enough to drive.`) : console.log(`You are ${trueYear}. You will be allowed to drive after ${18 - trueYear}.`);






                          //14

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//Enter number of years you live: 100
//You lived 3153600000 seconds.

let numberOfYears = prompt('Enter the number of years you live:');
console.log(`You lived ${numberOfYears * 31536000} seconds`);

             
                 //15
//Create a human readable time format using the Date time object

//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm

let dateNow = new Date();

let Year = dateNow.getFullYear();
let Month = dateNow.getMonth() + 1;
let DateToday   = dateNow.getDate();
let Hour = dateNow.getHours();
let Minutes =dateNow.getMinutes();


console.log(`${Year}-${Month}-${DateToday} ${Hour}:${Minutes}`);
console.log(`${DateToday}-${Month}-${Year} ${Hour}:${Minutes}`);
console.log(`${DateToday}/${Month}/${Year} ${Hour}:${Minutes}`);


                       //Exercises: Level 3
//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let newDate = new Date();

let Years = newDate.getFullYear();

let Months = String(newDate.getMonth() + 1);
let newMonth =Months.padStart(2,0);

let newDateToday   = String(newDate.getDate());
let newDateToday2 = newDateToday.padStart(2,0);

let newHour = String(newDate.getHours());
let newHour2 = newHour.padStart(2,0)

let newMinute = newDate.getMinutes();
let StrMinute= String(newMinute);
let StrMinute2 = StrMinute.padStart(2,0)

console.log(`${Years}-${newMonth}-${newDateToday2} ${newHour2}:${StrMinute2}`);
