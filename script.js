// Assignment code here
var generatePassword = function() {
    // Int variables
    var passwordLength;
    var passwordLengthMin = 8;
    var passwordLengthMax = 128;
    
    // bool variables
    var passwordLengthConfirm = false;

    // ask for the desired length of the password
    while (!passwordLengthConfirm) {
        passwordLength = window.prompt("How long would you like your password to be? NOTE: Your password must be at least 8 characters no more than 128 characters.");
        
        if (passwordLength >= passwordLengthMin && passwordLength <= passwordLengthMax) {   
            passwordLengthConfirm = true;
        }
        else if (passwordLength < passwordLengthMin) {
            window.alert("The length of the password is too short.");
        }
        else {
            window.alert("The length of the password is too long.");
        }
    }

    // types of characters to have in the password
    var lowercaseConfirm = window.confirm("Would you like lowercase letters in your password?");

    var uppercaseConfirm = window.confirm("Would you like uppercase letters in your password?");

    var numbersConfirm = window.confirm("Would you like numbers in your password?");

    var specialCharactersConfirm = window.confirm("Would you like cpecial characters in your password?");

    // special characters prompt. yes or no confirm prompt
        // yes/no lowercase
        // yes/no uppercase
        // yes/no numeric
        // yes/no special characters
    // validate answers. at least one should be yes. random number selection if all no

    // generate password and return
}

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
