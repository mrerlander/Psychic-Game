//variables for computer guess, guess history, attempts, wins, and losses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var attempts = 10;
var wins = 0;
var losses = 0;

//variable to choose random number from computer array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//add function for .onkeyup event
document.onkeyup = function (event) {

    //variable to store keypress
    var userGuess = event.key;
    var nonLetter = document.getElementById("non-letters");

    //if statement for user input (letters only)
    if (computerChoices.includes(userGuess)) {

        nonLetter.innerHTML = "";

        document.getElementById("guesses").innerHTML += userGuess;

        //if statement for correct guess
        if (userGuess === computerGuess) {
            wins++;
            attempts = 10;
            document.getElementById("guesses").innerHTML = "";
            document.getElementById("computer-letter").innerHTML = "<p> Yes! The letter was: " + computerGuess + "</p>";
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("attempts").innerHTML = "10";
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }

        //else if incorrect guess (show letters attempted attempts--)
        else if (attempts > 1) {
            attempts--;
            document.getElementById("attempts").innerHTML = attempts;
        }

        //restart
        else {
            losses++;
            attempts = 10;
            document.getElementById("guesses").innerHTML = "";
            document.getElementById("losses").innerHTML = losses;
            document.getElementById("attempts").innerHTML = "10";
            document.getElementById("computer-letter").innerHTML = "<p> The letter was: " + computerGuess + "</p>";
            console.log(computerGuess);
        }
    }

    //else press a valid key
    else {
        nonLetter.innerHTML = "Letters Only, Please";
    }

};
