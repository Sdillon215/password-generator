// create arrays to hold charachter sets
var lowArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperArr = 'ABCDEFGHIJKELMNOPQRSTUVWXYZ'.split('');
var specCharArr = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~\"\'".split('');
var numArr = '1234567890'.split('');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
