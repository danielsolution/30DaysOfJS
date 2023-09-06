                   //EXERCISE 1

                   //NO1
//Declare an empty array;

let arr = new Array();

                //NO2
//Declare an array with more than 5 number of elements
 
let arr1 = ["man","woma","boy","girl","uncle",20,47]

               //3
//Find the length of your array

console.log(arr1.length);

                          //4
//Get the first item, the middle item and the last item of the array
console.log(arr1[0]);
console.log(arr1[3]);
console.log(arr1[arr1.length-1]);

                     //5

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [4,"orange",true,40,[45],100,"peter"]
console.log(mixedDataTypes.length > 5);//true

                            //6
//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]

                            //7
//Print the array using console.log()
 console.log(itCompanies);

                            //8
//Print the number of companies in the array

console.log(itCompanies.length);

                     //9
//Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[(itCompanies.length - 1)]);

                         //10
//Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);


                                    //11
//Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

                                  
                                                //12
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let itCompaniesSentence = itCompanies.join()
console.log(`${itCompaniesSentence} are big IT companies`);

                                         //13
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

if (itCompanies.includes('Facebook')===true) {
  console.log("Facebook");
}else{
  console.log('a company is not found');
}

                                        //14
//Filter out companies which have more than one 'o' without the filter method

const filteredCompanies = [];

itCompanies.forEach((company) => {
  if (company.indexOf("o") !== company.lastIndexOf("o")) {
    return;
  }

  filteredCompanies.push(company);
});

console.log(filteredCompanies);
                                        //15
//Sort the array using sort() method
 let arraySort = itCompanies.sort();
 console.log(arraySort);

                                 //16
 //Reverse the array using reverse() method
 console.log(itCompanies.reverse());

                                    //17
//Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3));

                            //18
//Slice out the last 3 companies from the array

console.log(itCompanies.slice(-3));


                              //19
//Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(3,4));

           
                         //20
//Remove the first IT company from the array

console.log(itCompanies.shift());

                    // 21
//Remove the middle IT company or companies from the array
console.log(itCompanies);

let middleIndex = Math.floor((itCompanies.length - 1) / 2); // calculate the middle index

itCompanies.splice(middleIndex, itCompanies.length % 2 === 0 ? 2 : 1);

console.log(itCompanies);

                         //22
//Remove the last IT company from the array
console.log(itCompanies.pop());

//Remove all IT companies
console.log(itCompanies.splice());
                                   


//Exercise: Level 2 

                               //1
//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


                                //2
//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[^\w\s]|_/g,'').split(" ")
console.log(words)
console.log(words.length)


                                  //3
//In the following shopping cart add, remove, edit items

//add 'Meat' in the beginning of your shopping cart if it has not been already added
//add Sugar at the end of you shopping cart if it has not been already added
//remove 'Honey' if you are allergic to honey
//modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
//i am not allergic to honey
shoppingCart[3] = 'Green Tea'

console.log(shoppingCart);//[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Honey', 'Sugar' ]


                                            //4
//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.includes('Ethiopia')===true) {
  console.log('ETHIOPIA');
}


                                          //5
//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (webTechs.includes('Sass')===true) {
  console.log('Sass is a CSS preprocess');
}else{
  webTechs.push('Sass')
  console.log(webTechs);
}


                                        //6
 //Concatenate the following two variables and store it in a fullStack variable. 
 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

                              //Exercise: Level 3
//The following is an array of 10 students ages:
 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

                  //1
//Sort the array and find the min and max age
 console.log(ages.sort());
 let minAge = ages[0];
 console.log(minAge);//19

 let maxAge = ages[ages.length -1];
 console.log(maxAge); //26
            
                         //2
//Find the median age(one middle item or two middle items divided by two)

let median;
const middle = Math.floor(ages.length / 2);

if (ages.length % 2 === 1) {
  
  median = ages[middle];
} else {
  
  median = (ages[middle - 1] + ages[middle]) / 2;
}

console.log(`The median of the array is: ${median}`);//24


                                  //3
//Find the average age(all items divided by number of items)

let sum =0;
for (let i = 0; i < ages.length; i++) {
   sum = sum + ages[i] ;   
}

console.log(sum);//228
let average = sum/ages.length
console.log(average);//22.8
                                //4
//Find the range of the ages(max minus min)

let range = maxAge - minAge;
console.log(range);//7

//Compare the value of (min - average) and (max - average),use abs() method 

console.log(Math.abs(minAge - average));
console.log(Math.abs(maxAge - average));

// method 1.Slice the first ten countries from the countries array

const Countries = [
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
  'Zimbabwe'
]

console.log(Countries.slice(0,10));//['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria']


//2.Find the middle country(ies) in the countries array

let middleCountry = Countries[Math.floor(Countries.length/2)];
console.log(middleCountry);//Lesotho


// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

console.log(Countries.length);//193-odd

let firstHalf = Countries.slice(0,Countries.indexOf(middleCountry) + 1);
let secondHalf = Countries.slice(Countries.indexOf(middleCountry) + 1);
  

  console.log(firstHalf,firstHalf.length);//length-97
  console.log(secondHalf,secondHalf.length);//length-96
  
