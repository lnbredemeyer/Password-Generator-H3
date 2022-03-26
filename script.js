//Array of password length
var passwordLength = [];

//Array of picking the password
var pickingArr = [];

// Array of uppercase characters to be included in password
var uppers = [
  "A", 
  "B", 
  "C", 
  "D", 
  "E", 
  "F", 
  "G",
  "H", 
  "I", 
  "J", 
  "K", 
  "L", 
  "M", 
  "N", 
  "O", 
  "P", 
  "Q", 
  "R", 
  "S",
  "T", 
  "U", 
  "V", 
  "W", 
  "X", 
  "Y", 
  "Z"
];

// Array of lowercase characters to be included in password
var lowers = [
  "a", 
  "b", 
  "c", 
  "d", 
  "e", 
  "f", 
  "g",
  "h", 
  "i", 
  "j", 
  "k", 
  "l", 
  "m", 
  "n", 
  "o", 
  "p", 
  "q", 
  "r", 
  "s",
  "t", 
  "u", 
  "v", 
  "w", 
  "x", 
  "y", 
  "z"
];

// Array of special characters to be included in password
var specials = [
  "/", 
  ";", 
  "!", 
  "@", 
  "#", 
  "$", 
  "%", 
  "&", 
  "*", 
  "~"
];

// Array of numberss to be included in password
var numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

//generating the actual password
var generateBtn = document.querySelector("#generate");

//getting the password
function writePassword() {
  var goodPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(goodPrompts){
  var thePassword = generatePassword();
  passwordText.value = thePassword;
  } else {
    passwordText.value = "";
  }
}

generateBtn.addEventListener("click", writePassword);

//creating the password
function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++){
    var randomLetter = Math.floor(Math.random() * pickingArr.length);
    password = password + pickingArr[randomLetter];
  }
  return password;
}

//all of the prompts & confirm 
function getPrompts() {
  pickingArr = [];
  passwordLength = parseInt(prompt("How long do you want a password? Please choose between 8 and 128."));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128!");
    return false;
  }

  if(confirm("Do you want to include special characters?")) {
    pickingArr = pickingArr.concat(specials);
  }

  if(confirm("Do you want to include Uppercase characters?")) {
    pickingArr = pickingArr.concat(uppers);
  }

  if(confirm("Do you want to include Lowercase characters?")) {
    pickingArr = pickingArr.concat(lowers);
  }

  if(confirm("Do you want to include number characters?")) {
    pickingArr = pickingArr.concat(numbers);
  }

  return true;
}