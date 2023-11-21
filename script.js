// Array of special characters to be included in password
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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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
  'z'
];

// Array of uppercase characters to be included in password
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
  'Z'
];

// Function to get password length
function isPasswordLengthInputValid(passwordInputLength) { 
  if (passwordInputLength < 8) {
    return false;
  }
  if (passwordInputLength > 128) {
    return false;
  }
  if (passwordInputLength >= 8 && passwordInputLength <= 128) { 
    return true;
  }
  return false;
}

// Function to prompt user for password options
function getPasswordOptions() {
  console.log("Get Password Options");

  const passwordLength = prompt('How long should your Password be? (password should be between 8 & 128 characters)');
  const passwordLengthAsNumber = parseInt(passwordLength, 10);

  if (isPasswordLengthInputValid(passwordLengthAsNumber)) {
    // Questions to get true or false statements for arrays above, at least 1 must be true
    const isLowercaseIncluded = confirm('Should your password include lowercase characters?');
    const isUppercaseIncluded = confirm('Should your password include uppercase characters?');
    const isNumericIncluded = confirm('Should your password include numeric characters?');
    const isSpecialCharsIncluded = confirm('Should your password include special characters?');

    if (isLowercaseIncluded || isUppercaseIncluded || isNumericIncluded || isSpecialCharsIncluded) {
    } else {
      alert('Please choose at least 1 character type please.');
    } 
  } else {
    alert('Password length invalid, password should have between 8 and 1128 charaters!')
  }
}

  // Object to store user input information
  let userPasswordOptions = {
    passwordLength: passwordLengthAsNumber,
    passwordLower: isLowercaseIncluded,
    passwordUpper: isUppercaseIncluded,
    passwordNumeric: isNumericIncluded,
    passwordSpecial: isSpecialCharsIncluded
  };
  return userPasswordOptions;
}

// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions();
  let userPasswordConfirms = [];
  let password = "";

  if (passwordOptions.passwordLower) {
    userPasswordConfirms = userPasswordConfirms.concat(lowerCasedCharacters);
  }

  if (passwordOptions.passwordUpper) {
    userPasswordConfirms = userPasswordConfirms.concat(upperCasedCharacters);
  }

  if (passwordOptions.passwordNumeric) {
    userPasswordConfirms = userPasswordConfirms.concat(numericCharacters);
  }

  if (passwordOptions.passwordSpecial) {
    userPasswordConfirms = userPasswordConfirms.concat(specialCharacters);
  }


}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);