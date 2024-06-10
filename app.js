const myAge = 13;
// Create variable with value of 2
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

let myName = "Pepper".toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

document.getElementById('output').textContent = `My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`;
