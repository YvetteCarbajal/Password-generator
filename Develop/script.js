var characterLength = 8;

var choiceArr = [];

 

var specialCharaArr = ['i', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>'];

var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseArr = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'P', 'Q', 'R', 'S', 'T', 'U', 'P', 'W', 'X', 'Y', 'Z'];

var numberArr = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

 

var generateBtn = document.querySelector("#generate");

 

generateBtn.addEventListener("click", writePassword);

 

function writePassword() {

   var correctPrompts = getPrompts();

   var passwordText = document.querySelector("#password");

 

   if(correctPrompts) {

     var newPassword = generatePassword();

       passwordText.value = newPassword;

   } else {

     passwordText.value = "";

    }

  }

 

  function generatePassword() {

 

    var password = "";

      for(var i = 0; i < characterLength; i++) {

         var randomIndex = Math.floor(Math.random() * choiceArr.length);

         password = password + choiceArr[randomIndex];

     }

     return password;

    }

 

function getPrompts(){

    choiceArr = [];

 

    characterLength = parseInt(prompt("How many charaters do you want your password to be? (8 - 128 charaters"));

 

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {

        alert("Character length has to be a number, 8 - 128 digits. Please try again.");

        return false;

    }

    function customYesNoPrompt(question) {

      var userInput = prompt(question + " (y/n)").toLowerCase();

      return userInput === "yes" || userInput === "y";

    }

    if (customYesNoPrompt("Would you like lowercase letters in your password?")) {

      choiceArr = choiceArr.concat(lowerCaseArr);

    }

    if (customYesNoPrompt("Would you like uppercase letters in your password?")) {

      choiceArr = choiceArr.concat(upperCaseArr);

    }

    if (customYesNoPrompt("Would you like special characters in your password?")) {

      choiceArr = choiceArr.concat(specialCharaArr);

    }

    if (customYesNoPrompt("Would you like numbers in your password?")) {

      choiceArr = choiceArr.concat(numberArr);

    }

    return true;

  }    