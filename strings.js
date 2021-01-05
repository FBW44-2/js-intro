const parkWalkStr = 'I can walk in the park all day!';

let park = parkWalkStr.substring(18, 22);

console.log(park);

const helloStr = 'Hello World';

console.log(helloStr.toUpperCase());

const earthlingString = 'HELLO Earthling';

console.log(earthlingString.toLowerCase());

const javascriptStr = 'JavaScript';
const midChars = javascriptStr.substring(3, 6);

console.log(midChars);

const niceShoesStr = 'nice shoes';
console.log(niceShoesStr.includes('l'));
console.log(niceShoesStr.includes('n'));

const fruityStr = 'Bananas';
const fruityChar = fruityStr[0];
console.log(`${fruityChar}${fruityStr}${fruityChar}`);

const scritchStr = 'Scritch';
const lastThreeChars = scritchStr.substring(scritchStr.length - 3);

console.log(lastThreeChars + scritchStr + lastThreeChars);

// let weirdName = 'Scritch';
// let part = weirdName.slice(0, 3);
// let partW2 = `${part}${weirdName}${part}`;
// console.log(partW2);

const boogieNightStr = 'BoogieWoogie';
const firstLetter = boogieNightStr[0];
const lastLetter = boogieNightStr[boogieNightStr.length - 1];
const remainderString = boogieNightStr.substring(1, boogieNightStr.length - 1);

console.log(lastLetter + remainderString + firstLetter);

const newStr1 = 'BoogieWoogie';
const changedStr = newStr1.replace(newStr1[0], newStr1[newStr1.length - 1]);
console.log(newStr1[0], newStr1[newStr1.length - 1]);
console.log(changedStr);

const firstName = 'Helon';
const location = 'Berlin';
const job = 'teacher';
const mySentence = `My name is ${firstName}. I live in ${location} and I am a ${job}.`;

console.log(mySentence);

const foxStr = 'the quick brown fox';

const firstChar = foxStr[0].toUpperCase();

const remainderStr = foxStr.slice(1);

console.log(firstChar, remainderStr);
