// create arrays to hold charachter sets
var lowArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperArr = 'ABCDEFGHIJKELMNOPQRSTUVWXYZ'.split('');
var specCharArr = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~\"\'".split('');
var numArr = '1234567890'.split('');
var passwordArr = [];

// function to generate password
function generatePassword() {
    // prompt asking how long user would like password
    var length = prompt("How long would you like your password to be? Must be between 8 and 128 characters.");
    // confirm user input is between 8 and 128 and turn string into integer
    if (length > 8 && length < 128 && length !== NaN) {
        length = parseInt(length);
        // confirm all other characters
        var lowerCase = confirm("Would you like to include lowercase letters?");
        var upperCase = confirm("Would you like to include uppercase letters?");
        var specCharacters = confirm("Would you like to include special characters?");
        var numbers = confirm("Would you like to include numbers?");
        
        // on confirm concat to passwordArr
        if (lowerCase) {
            passwordArr = passwordArr.concat(lowArr);
        }
        if (upperCase) {
            passwordArr = passwordArr.concat(upperArr);
        }
        if (specCharacters) {
            passwordArr = passwordArr.concat(specCharArr);
        }
        if (numbers) {
            passwordArr = passwordArr.concat(numArr);
        }
        console.log(length);
    } 
    // if incorrect length is entered alert user and call generatePassword again
    else {
        alert("Please enter a number between 8 and 128.");
        generatePassword();
    }



}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button - on click calls writePassword function
generateBtn.addEventListener("click", writePassword);
