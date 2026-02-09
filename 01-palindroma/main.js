/* 
Verificare se una parola in input è palindroma 
Palindromo: può essere letta in entrambi i versi ( otto )
*/

function checkPalindrome(word) {
    // Loop chars avoiding ripetitions (length/2)
    for (let i = 0; i < word.length / 2; i++) {
        //Get chars to check
        const leftLetter = word[i];
        const rightLetter = word[word.length - i - 1];

        //If different not palindrome
        if (leftLetter !== rightLetter) {
            return false;
            break;
        }
    }

    return true;
}

//Get word from user
const word = prompt("Inserisci una parola");

//Call function
const isPalindrome = checkPalindrome(word);

//Log output
if (isPalindrome) {
    console.log("E' palindroma")
} else {
    console.log("Non è palindroma");
}