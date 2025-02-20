let guess;
let i;

// constant of the randomly generated number betweem 1 and 100
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("The random number is ", randomNum)

alert("Number Guessing Game. A number is randomly generated. You have 5 attempts to guess that number.");

// prompt the user to guess the number, but no more than 5 attempts
for (i=0; i<5; i++)
{
    guess = prompt("Please enter your guess: ");
    console.log("Your guess is ", guess);
    // condition to check id the guess==randomNumber, or if higher or lower
    if (guess==randomNum){ 
        alert("Congratulations! You guessed the number in "+ (i + 1) + " guess/guesses");
        break;
    } else if (guess>randomNum){
        alert("Hint: The random number is Lower"); 
    } // output hints higher or lower
    else {
        alert("Hint: The random number is Higher");
    }
}

// if failed 5 attempts, output the number
if (i==5){
    alert("You failed!. The random number is " + randomNum);
}




