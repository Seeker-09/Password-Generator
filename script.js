/*  MY NOTES: 
    1. I could add an array that keeps track of which character confirmations are true, and have numbers (or just strings ig) correspond with thich character confirmation is which and push those numbers to the array, and random number through that so that i would only get those numbers for the switch statment.*/  

// Assignment code here
var generatePassword = function() {
    // Int variables
    var passwordLength;
    var passwordLengthMin = 8;
    var passwordLengthMax = 128;
    
    // bool variables
    var passwordLengthConfirm = false;

    // character arrays
    var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

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

    // store the types of characters to have in the password
    var lowercaseConfirm = window.confirm("Would you like lowercase letters in your password?");

    var uppercaseConfirm = window.confirm("Would you like uppercase letters in your password?");

    var numbersConfirm = window.confirm("Would you like numbers in your password?");

    var specialCharactersConfirm = window.confirm("Would you like special characters in your password?");

    // check if at least option has been chosen. if not, choose one for them 
    if (!lowercaseConfirm && !uppercaseConfirm && !numbersConfirm && !specialCharactersConfirm) {
        var characterRandomNumber = Math.floor(Math.random() * (4 - 1) + 1);

        // for convenience, i made the 'at least one needs to be selected' automated. Can convert it to make the user choose again if wanted
        switch (characterRandomNumber) {
            case 1:
                lowercaseConfirm = true;
                break;

            case 2:
                uppercaseConfirm = true;
                break;

            case 3:
                numbersConfirm = true;
                break;

            case 4:
                specialCharactersConfirm = true;
                break;

            default:
                window.alert("something broke lul");
                break;
        }
    }

    // TODO: can be made better but this works
    // generate password and return
    // need to initialize 'password' empty because i was getting 'undefined' returned along with the generated password
    var password = ''; 
    for (let i = 0; i < passwordLength; i++) {
        characterRandomNumber = Math.floor(Math.random() * (4 - 1) + 1);

        switch (characterRandomNumber) {
            case 1:
                if (lowercaseConfirm) {
                    // concatenates the character onto password
                    password += lowercaseArray[Math.floor(Math.random() * (lowercaseArray.length - 1))];
                    break;
                }
                
            case 2:
                if (uppercaseConfirm) {
                    // concatenates the character onto password
                    password += uppercaseArray[Math.floor(Math.random() * (uppercaseArray.length - 1))];
                    break;
                }

            case 3:
                if (numbersConfirm) {
                    // concatenates the character onto password
                    password += numbersArray[Math.floor(Math.random() * (numbersArray.length - 1))];
                    break;
                }

            case 4:
                if (specialCharactersConfirm) {
                    // concatenates the character onto password
                    password += specialCharactersArray[Math.floor(Math.random() * specialCharactersArray.length - 1)];
                    break;
                }

            default:
                // this is a catch for when the rng doesn't work. acts as a reroll basically
                i--;
                break;
        }
    }

    return password;
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