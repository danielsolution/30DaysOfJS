                         //Exercises: Level 1

                                          //1

//Iterate 0 to 10 using for loop, do the same using while and do while loop

//using for loop

for (let i= 0; i <=10; i++) {
    
    console.log(i);   
}

//using while loop
let x = 0
while (x <=10) {
    console.log(x)
    x++ 
} 

//using do while loop

let i = 0
do {
  console.log(i)
  i++
} while (i <= 10)


                                    //2
//Iterate 10 to 0 using for loop, do the same using while and do while loop

//using for loop

for (let j= 10; j >= 0; j--) {
    
  console.log(j);   
}

//using while loop
let y = 10
while (y >= 0) {
  console.log(y)
  y-- 
} 

//using do while loop

let j = 10
do {
console.log(j)
j--
} while (j >= 0)


//Iterate 0 to n using for loop


                              //4
//Write a loop that makes the following pattern using console.log():

/*#
##
###
####
#####
######
####### */

let hashRepeat = '#'

for (let i = 1; i <= 7; i++) {
    console.log(hashRepeat.repeat(i));;
    
}

       //5
//Use loop to print the following pattern:

/*0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */

    
for (let i= 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}


                       //7

//Using loop print the following pattern

/*i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000 */

for (let i= 0; i <= 10; i++) {
  console.log(`${i}   ${i**2}    ${i**3}`);
}

                      //8
//Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

                          //9     
//Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}


                            //10
//Use for loop to iterate from 0 to 100 and print only prime numbers

for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  // Check if num is prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  // If num is prime, print it
  if (isPrime) {
    console.log(num);
  }
}


                            //10
//Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;

for (let i = 0; i <= 100 ; i++) {
  sum = sum + i;
  
}

console.log(sum)

                         //11
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// sum of all even numbers
  
  let sumEven = 0;

  for (let i = 0; i <= 100 ; i++) {
  if (i % 2 ===0) {
  
    sumEven += i;
  } 
    
  }
  
  console.log(sumEven)

//sum of all odd numbers
let arrSum =[]
let sumOdd = 0;

for (let i = 0; i <= 100 ; i++) {
if (i % 2 ===1) {

  sumOdd += i;
  
} 

}

console.log(sumOdd)


                              //12
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

arrSum.push(sumEven,sumOdd)
console.log(arrSum);//[ 2550, 2500 ]

                             //13

//Develop a small script which generate array of 5 random numbers
const randomArray = [];
    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * 20);
      randomArray.push(randomNum);
    }
    console.log(randomArray)
  
  

                              //14
//Develop a small script which generate array of 5 random numbers and the numbers must be unique

const minNumber = 1; // Minimum random number
    const maxNumber = 10; // Maximum random number
    const arrayLength = 5; // Length of the array
    const uniqueRandomArray = [];
    
    if (arrayLength > (maxNumber - minNumber + 1)) {
      throw new Error("Cannot generate unique numbers with the given range and length.");
    }
    
    while (uniqueRandomArray.length < arrayLength) {
      const randomNum1 = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      if (!uniqueRandomArray.includes(randomNum1)) {
        uniqueRandomArray.push(randomNum1);
      }
    }
    

console.log(uniqueRandomArray);




                                 //15
//Develop a small script which generate a six characters random id:

const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomId += charset.charAt(randomIndex);
  }

  console.log(randomId);


                //Exercises: Level 2

                 //1
//Develop a small script which generate any number of characters random id:

const randomCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let RandomId = "";
const desiredLength = Math.floor(Math.random() * randomCharset.length) + 1; // Generates a random length between 1 and 10

for (let i = 0; i < desiredLength; i++) {
  const randomIndex = Math.floor(Math.random() * randomCharset.length);
  RandomId +=randomCharset.charAt(randomIndex);
}

console.log(RandomId);


                              //2
//Write a script which generates a random hexadecimal number
// '#ee33df'

const hexadecimalNumber = "0123456789abcdef";
  let randomHexadecimalNumber = "";

  for (let i = 0; i < 6; i++) {
    const randomHexadecimal = Math.floor(Math.random() * hexadecimalNumber.length);
    randomHexadecimalNumber += hexadecimalNumber.charAt(randomHexadecimal);
  }

  console.log("#" + randomHexadecimalNumber);



                            //3
// Write a script which generates a random rgb color number.  
//   rgb(240,180,80)

const randomRedColor = Math.floor(Math.random() * 256);
const randomGreenColor = Math.floor(Math.random() * 256);
const randomBlueColor = Math.floor(Math.random() * 256);

console.log("rgb(" + randomRedColor + "," + randomGreenColor + "," + randomBlueColor + ")");



                            //4
//Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countriesAllCapital = [];

for (let i = 0; i < countries.length; i++) {
  countriesAllCapital.push(countries[i].toUpperCase())                
  
}
 console.log(countriesAllCapital);
 
                       //5

  //Using the above countries array, create an array for countries length'.
  //[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

  let countriesLength =[]

for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length)  

  
}
 console.log(countriesLength);


                              //6
//Use the countries array to create the following array of arrays:

/*[
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

let countriesAllWithFirstThreeCapital= []

for (let i = 0; i < countries.length; i++) {
  countriesAllWithFirstThreeCapital.push(countries[i].toUpperCase().substring(0,3))                
  
}
 
let countriesWithArraysOfArray= []

for (let i = 0; i < countries.length; i++) {
  countriesWithArraysOfArray.push([countries[i],countriesAllWithFirstThreeCapital[i],countriesLength[i]])                
  
}
console.log(countriesWithArraysOfArray);



                                   //7
//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
//['Finland','Ireland', 'Iceland']

let countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes('land')) {
    countriesWithLand.push(countries[i]);
  }
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}




                                      //8
//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
//['Albania', 'Bolivia','Ethiopia']

let countriesEndsWithIa = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes('ia')) {
    countriesEndsWithIa.push(countries[i]);
  }
}

if (countriesEndsWithIa.length > 0) {
  console.log(countriesEndsWithIa);
} else {
  console.log('These are countries ends without ia')
}

  
                               //9
//   Using the above countries array, find the country containing the biggest number of characters.
//   Ethiopia

//countriesEndsWithIa = ['Albania', 'Bolivia', 'Ethiopia'];

let longestCountry = countriesEndsWithIa[0]; // Initialize with the first country

for (let i = 1; i < countriesEndsWithIa.length; i++) {
  if (countriesEndsWithIa[i].length > longestCountry.length) {
    longestCountry =countriesEndsWithIa[i];
  }
}

console.log( longestCountry);


                                    //10
  // Using the above countries array, find the country containing only 5 characters.
  //  ['Japan', 'Kenya'] 

  let countriesWithFiveCharacters =[]

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length===5) {
    countriesWithFiveCharacters.push(countries[i])  
  }
  
}
 console.log(countriesWithFiveCharacters);

                            //11
//Find the longest word in the webTechs array

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let longestWordWebtech = webTechs[0];

for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longestWordWebtech.length) {
    longestWordWebtech =webTechs[i];
  }
}

console.log( longestWordWebtech);  //output :JavaScript

                   //12
  //Use the webTechs array to create the following array of arrays:
  //[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

  let webTechsLength =[];
let webTechsArrayOfArrays = [];

for (let i = 0; i < webTechs.length; i++) {
  webTechsLength.push(webTechs[i].length)
  webTechsArrayOfArrays.push ([webTechs[i],webTechsLength[i]])  
}
 
console.log(webTechsArrayOfArrays);

                    //13
//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let mernAcronym = ""

for (let i = 0; i < mernStack.length; i++) {
  mernAcronym += (mernStack[i].substring(0,1))
}
 
console.log(mernAcronym);

                              //14
//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);

}

                                    //15
//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon']
let fruitsReverse =[]


console.log(fruits.indexOf(fruits[fruits.length-1]))                

for (let i = fruits.indexOf(fruits[fruits.length-1]); i >= 0; i--) {
  console.log(fruits[i]);
  fruitsReverse.push(fruits[i])
}

console.log(fruitsReverse);//[ 'lemon', 'mango', 'orange', 'banana' ]

                                    //16
//Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

// Loop through the outer array
for (let i = 0; i < fullStack.length; i++) {
  // Get the current sub-array
  const subArray = fullStack[i];

  // Loop through the elements in the current sub-array
  for (let j = 0; j < subArray.length; j++) {
    // Print each element
    console.log(subArray[j]);

  }
}


                                //Exercises: Level 3
                                //1
  // Copy countries array(Avoid mutation)-

  const countriesArray = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ]
  

                                   //2
//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

let sortedCountries = countriesArray.sort()
console.log(sortedCountries)

                                       //3

//Sort the webTechs array and mernStack array

let sortedWebTechs = webTechs.sort()
console.log(webTechs)

let sortedMernStack = mernStack.sort()
console.log(sortedMernStack)


                             //4
//Extract all the countries contain the word 'land' from the countries array and print it as array


let countrieSWithTheWordLand =[]
for (let i= 0; i < countriesArray.length; i++) {
  
  if (countriesArray[i].includes('land')) {

    countrieSWithTheWordLand.push(countriesArray[i])
    
  }
  
}

console.log(countrieSWithTheWordLand);


                        //5
//Find the country containing the hightest number of characters in the countries array

let countryWithHighestCharacter =countriesArray[0]

for (let i= 1; i < countriesArray.length; i++) {
  
  if (countriesArray[i].length > countryWithHighestCharacter.length) {

    countryWithHighestCharacter = countriesArray[i]
    
  }
  
}
console.log(countryWithHighestCharacter);//Central African Republic

                               //6
//Extract all the countries contain the word 'land' from the countries array and print it as array
//done-duplicate question (same as Exercise 3, question NO4)

                             //7
//Extract all the countries containing only four characters from the countries array and print it as array

let countriesWithFourCharacter = []

for (let i= 0; i < countriesArray.length; i++) {
  
  if (countriesArray[i].length === 4) {

    countriesWithFourCharacter.push(countriesArray[i])
    
  }
  
}

console.log(countriesWithFourCharacter);

                                   //8
//Extract all the countries containing two or more words from the countries array and print it as array

countriesArrayWithTwoOrWords = [];

for (let i = 0; i < countriesArray.length; i++) {
  if (countriesArray[i].includes(" ")) {
    countriesArrayWithTwoOrWords.push(countriesArray[i])
  }
  
}

console.log(countriesArrayWithTwoOrWords);

                                //9
//Reverse the countries array and capitalize each country and stored it as an array
let countriesArrayReverse = [];

for (let i = 0; i < countriesArray.length; i++) {
  countriesArrayReverse.push(countriesArray[i].toUpperCase())
  countriesArrayReverse.reverse();
  
}

console.log(countriesArrayReverse);