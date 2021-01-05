// Values and Variables

// Data Types

let javascript = true;

let year;

// Basic operators - Math

const firstName = 'Helon';

const lastName = 'Roop';

let ageHelon = 32;

let ageBob = 35;

const now = 2021;

// const birthYear = now - ageHelon;

let job = 'developer';

let greeting = `Hello, ${firstName} ${lastName}`;

// let x = 10 + 5;

// x += 10;

// x++;
// x + 1;

// x--;
// x - 1;

// const drinkingAge = 18;
// const userAge = '18';

// let x, y;

// x = y = 25 - 10 - 5;

// const newAge = (ageHelon - drinkingAge) / 2;

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI =
// mass / height ** 2
// or
// mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// TEST DATA 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// TEST DATA 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// Calculate the BMI and store  in variables
const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / (heightJohn * heightJohn);
const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(
    `Marks BMI is ${markBMI.toFixed(1)} is higher than Johns ${johnBMI.toFixed(
      2
    )}`
  );
} else {
  console.log(`Johns BMI is ${johnBMI} is higher than Marks ${markBMI}`);
}

// Console log the results

// Console.log if Mark has a higher BMI than John
// console.log(markBMI, johnBMI, markHigherBMI);

let msg = '            Hello                  ';

// console.log(msg.length);
// console.log(msg[3]);
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());

// console.log(msg.trim().toUpperCase());

let tvShow = 'catdog';

let newTvShow = tvShow.replace('cat', 'wolf');

// console.log(tvShow.indexOf('z'));

let str = 'supercalifragilicidogouse';

// console.log(newTvShow);

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
const anotherWord = 'bear';
const whale = 'Blue Whale';
const whaleWord = 'blue';

// console.log(whale.toLowerCase().includes(whaleWord));

// console.log('string \n with \n multiple \n lines');

//  if / else statements - making decisions

const age = 17;

if (age >= 18) {
  console.log(`This person is old enough to drive`);
} else {
  const yearsLeft = 18 - age;
  console.log(` this person will be old enough to drive in ${yearsLeft} years`);
}

const birthYear = 1999;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

birthYear.toString();

// console.log(4 + 5 + 'px');

console.log(parseFloat('12.4333.5.6').toFixed(2));

let food = 'tacos';

console.log(food[7]);
