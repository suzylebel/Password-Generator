
function generatePassword() {
  var passwordLength = prompt("Pick a password length between 8 and 128 characters?");

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){ 
    passwordLength = prompt("Please select a number between 8 and 128 to generate your password characters.");
  }

  var upperCase = confirm("Do you want uppercase letters? (click OK for yes, or cancel for no)");
  var lowerCase = confirm("Do you want lowercase letters? (click OK for yes, or cancel for no)");
  var numbers = confirm("Do you want numbers? (click OK for yes, or cancel for no)");
  var specialCharacters = confirm("Do you want special characters? (click OK for yes, or cancel for no)");

  // while phrase same as line 5 (insure a character type)
  while (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
    alert("Must select a character type to create a password!")
    var upperCase = confirm("Do you want uppercase letters? (click OK for yes, or cancel for no)");
    var lowerCase = confirm("Do you want lowercase letters? (click OK for yes, or cancel for no)");
    var numbers = confirm("Do you want numbers? (click OK for yes, or cancel for no)");
    var specialCharacters = confirm("Do you want special characters? (click OK for yes, or cancel for no)");
  };

  //arrays
  var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", ",", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "~"];



  //  take varaibles user defined and build by character (use if statements)

  let password = "";
  let userSelection = [];

  //  

  if (upperCase) {
    userSelection = userSelection.concat(letterUpper);
    password += getRandomchar(letterUpper);
  }

    if (lowerCase) {
      userSelection = userSelection.concat(letterLower);
      password += getRandomchar(letterLower);
    }

    if (numbers) {
      userSelection = userSelection.concat(numberArray);
      password += getRandomchar(numberArray);
    }

    if (specialCharacters) {
      userSelection = userSelection.concat(symbols);
      password += getRandomchar(symbols);
    }

    for (var i = password.length; i < passwordLength; i++) {
      password += getRandomchar(userSelection);
    }

    return (password);
  }

  function getRandomchar(charArray) {
    var randomIndex = Math.floor(Math.random() * charArray.length);
    return (charArray[randomIndex]);

  }


  ///////////////////////////////

  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
