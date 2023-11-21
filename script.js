// Array of special characters to be included in password
let specialCharacters = [
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
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
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
  'Z'
];


function generatePassword() {
  let shouldUseLower = true;
  let shouldUseUpper = true;
  let shouldUseNumber = true;
  let shouldUseSpecial = true;
  let passwordCharacters = [];

  let howLong = prompt("How long would you like the password to be? (Must be between 8 and 128 characters)");

  // converting the string answer to a number so can be used later
  let lengthOfPassword = Number(howLong);

  // making sure the number is between 10 and 64 before the other questions are asked.
  if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    shouldUseLower = confirm("Would you like lower case characters in your password?")
    shouldUseUpper = confirm("Would you like upper case characters in your password?");
    shouldUseNumber = confirm("Would you like numbers in your password?");
    shouldUseSpecial = confirm("Would you like special characters in your password?");
  } else {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

}

// // // Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);