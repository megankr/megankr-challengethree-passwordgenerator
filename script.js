// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input. Causes generated password to appear within the HTML text area.
var passwordText = document.querySelector("#password");
function writePassword(shuffledPassword) {
if (password.length === 0) {
  return;
  }
  passwordText.value = shuffledPassword;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", function () {writePassword(generatePassword())});

function generatePassword() {

// Ask user for password length value.
  var passwordLength = prompt("Enter a password length 8 - 128 characters.")

// Stops user from continuing if parameters for password length are not met.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must contain between 8 - 128 characters, please choose an appropriate value.");
    return "";

// Asks user to fill additional password criteria, selecting 'OK' will include the given variable in their password.
  } else {
  var yesLowercase = confirm("Should the password include lowercase letters?\nClick 'OK' to confirm.");
  var yesUppercase = confirm("Should the password include uppercase letters?\nClick 'OK' to confirm.");
  var yesNumbers = confirm("Should the password include numbers?\nClick 'OK' to confirm.");
  var yesSymbols = confirm("Should the password include symbols?\nClick 'OK' to confirm.");
  }

  // Possible password variables.
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!#$%&'()*+,-./:;<=>?@]\[^_`{|}~"
  var characters = "";
  var shuffledPassword = "";

 // Creates the character set from which the password will be generated, based on the user's confirmations.
  if (yesLowercase) {characters += lowercase};
  if (yesUppercase) {characters += uppercase};
  if (yesNumbers) {characters += numbers};
  if (yesSymbols) {characters += symbols};

// Randomly selects the possible characters, up to the password length input from the user.
// Found solutions for creating this loop here: https://forum.freecodecamp.org/t/im-getting-really-discouraged-with-loops/
  for (i = 0; i < passwordLength; i++) {
    shuffledPassword += characters[Math.floor(Math.random() * characters.length)]
  }
  return(shuffledPassword);
}