// Assignment Code
var generateBtn = document.querySelector("#generate");

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword () {

  var passwordLength  = prompt("Choose a password legnth between 8 and 128?");

if (!passwordLength) return "No password";

passwordLength = parseInt(passwordLength);

if (!passwordLength) {
  alert("please enter a valid number.")
  return generatePassword()
}

if(passwordLength < 8 || passwordLength > 128) {
alert("Please enter a number between 8 and 128.")
return generatePassword();
}

var allCharacters = [];
var allChoices = [];
var result = []

var includeNumbers = confirm("Include numbers?")
var includeSymbols = confirm("include symbols")
var includeUppercase = confirm("include upper case")
var includeLowercase = confirm("include lower case")

if (includeNumbers) {
  allCharacters = allCharacters.concat(numericCharacters);
}
if (includeSymbols) {
  allCharacters = allCharacters.concat(specialCharacters);
}
if (includeUppercase) {
  allCharacters = allCharacters.concat(upperCasedCharacters)
}
if (includeLowercase) {
  allCharacters = allCharacters.concat(lowerCasedCharacters)
}
console.log(allCharacters);
if (!includeNumbers && !includeSymbols && !includeLowercase && !includeUppercase) {
  alert("must select at least one option")
  return null
}
var userChoices = {
  passLength : passwordLength,
  includeNumbers : includeNumbers,
  includeSymbols : includeSymbols,
  includeUppercase : includeUppercase,
  includeLowercase  : includeLowercase,
}
console.log(userChoices)
function getRandom (arr){
  var randomIndex = Math.floor(Math.random()* arr.length)
  var randomElement = arr[randomIndex]
  return randomElement
}
if (userChoices.includeNumbers){
  allChoices.push(getRandom(numericCharacters))
}
if (userChoices.includeSymbols){
  allChoices.push(getRandom(specialCharacters))
}
if (userChoices.includeUppercase){
  allChoices.push(getRandom(upperCasedCharacters))
}
if (userChoices.includeLowercase){
  allChoices.push(getRandom(lowerCasedCharacters))
}
for(var i = 0;i<allChoices.length;i++){
result[i]=allCharacters[i]
}
for(var i=0;i<userChoices.passLength;i++){
  var possibleCharacter = getRandom(allCharacters)
  result.push(possibleCharacter)
}
return result.join("")
}