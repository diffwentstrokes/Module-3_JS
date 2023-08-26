let generateBtn = document.querySelector("#generate");


let upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numericChars = [0,1,2,3,4,5,6,7,8,9];
let specChars = ['@', '%', '+','/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


function passwordOptions() {
  let passwordLength = parseInt(
    prompt("How many characters would you like to use between 8 and 128?")
  );
  if (passwordLength > 7 && passwordLength < 129) {

    
    let uppers = confirm("Would you like to uppercase letters?");
    let lowers = confirm("Would you like lowercase letters?");
    let nums = confirm("Would you like numbers?");
    let specials = confirm("Would you like special characters?");

  let options = {
      strength: passwordLength,
      uppers: uppers,
      lowers: lowers,
      nums: nums,
      specials: specials,
    };
    
    return options;

  } else {
    alert("Please enter a number between 8 and 128");
  }
}
  function generatePassword() {
  
  let userPasswordChoices = passwordOptions();
  let userChoice = "";
  let password = "";

  if (userPasswordChoices.uppers) {
    userChoice += upperCaseLetters.join("");
  }
  if (userPasswordChoices.lowers) {
    userChoice += lowerCaseLetters.join("");
  }
  if (userPasswordChoices.nums) {
    userChoices += numericChars.join("");
  }
  if (userPasswordChoices.specials) {
    userChoice += specChars.join("");
  } 
  for (let i = 0; i < userPasswordChoices.strength; i++) {
    let random = Math.floor(Math.random() * userChoice.length);
    password += userChoice.charAt(random);
  }

  return password;
}
  function writePassword() {
  const finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}


generateBtn.addEventListener("click", writePassword);