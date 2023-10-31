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

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter password length between 8 and 128 characters:"));

  //Validate length
  //isNaN(length) checks that the use enter a valid number for the password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return; // exit if the function has no character selected
  }


  //Password options have been created
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  //At least one special type to be selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  //Object to store the user's choices
  var passwordOptions = {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial,
  };

  return passwordOptions; // return user choices
}

// Function for getting a random element from an array
function passRandom(arr) {
  // Generate a random index 
  var randomPass = Math.floor(Math.random() * arr.length);
  return arr[randomPass];
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions(); // call the function in order to prompt the message
  // Check if the user cancels the prompt in order to return and avoid undefined 
  if (!options) return;

  var characters = [];
  if (options.includeLowercase) characters = characters.concat(lowerCasedCharacters);
  if (options.includeUppercase) characters = characters.concat(upperCasedCharacters);
  if (options.includeNumeric) characters = characters.concat(numericCharacters);
  if (options.includeSpecial) characters = characters.concat(specialCharacters);

  var password = "";
  for (var j = 0; j < options.length; j++) {
    password = password + passRandom(characters);
  }

  return password; // Return the generated password
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