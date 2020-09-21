
 function generatePassword (){
  var passwordLength = prompt("Pick a password length between 8 and 128 characters?");
  
  if (passwordLength < 8 || passwordLength > 128){
    alert("Please select a number between 8 and 128 characters.");
    prompt("Pick a password length between 8 and 128 characters?");
  }
  
  var upperCase = confirm("Do you want uppercase letters? (click OK for yes, or cancel for no)");
  var lowerCase = confirm("Do you want lowercase letters? (click OK for yes, or cancel for no)");
  var numbers = confirm("Do you want numbers? (click OK for yes, or cancel for no)");
  var specialCharacters = confirm ("Do you want special characters? (click OK for yes, or cancel for no)");
  

  if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false ){
    alert("Must select a character type.")
  };
 
 var numberArray = [0,1,2,3,4,5,6,7,8,9];
 var letterLower = "abcdefghijklmnopqrstuvwxyz";
 var letterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var symbols = '!#$%&()*+,-./:;<=>?@[\]^`{|}~_';
 


//  take varaibles user defined and build by character (use if statements)

let password = "";
let userSelect = '';

if (upperCase === true) {
  for (let i = letterUpper[0]; i <= letterUpper; i++){
  }


  for (var i = 0; i <= letterUpper.length; i++){
    var c = Math.floor((Math.random()*letterUpper.length)+0);
    password+= letterUpper.charAt(c);
  }
  console.log(password);
  }
//   for (var i = 0; i <= letterLower.length; i++){
//     var randomLetter = Math.floor((Math.random()*letterLower.length)+0);
//     password+= letterLower.charAt(randomLetter);


}



// }
// console.log(password);

// for (var i = 0; i <= letterUpper.length; i++){
//   var c = Math.floor((Math.random()*letterUpper.length)+0);
//   password+= letterUpper.charAt(c);
// }
// console.log(password);

// for (var i = 0; i <= numberArray.length; i++) {
//   var c = Math.floor((Math.random()*numberArray.length))
// }
// console.log(password);

}
       




// for (var i = 0; i < letterLower.length; i++) {
//   console.log(letterLower[i]);
// }
 
// for (var i = 0; i < number.length; i++) {
//   console.log(letterLower[i]);
// }

// for (var i = 0; i < letterUpper.length; i++) {
//   console.log(letterUpper[i]);
// }

// for (var i = 0; i < symbols.length; i++) {
//   console.log(symbols[i]);
// }








// }


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
