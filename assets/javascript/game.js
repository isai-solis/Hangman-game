var wins = 0;
var remainingGuesses = 15;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrongGuesses = [];
var correctGuesses = [];


// User presses key to start.
function startgame () {
    wins: 0
    remainingGuesses: 15
    wrongGuesses: []
    correctGuesses: []
}

// blanks are created
    
    // var partialWord = "------".split(""); 

// random word is selected
    function randomWord() {
        var wordBank = ["pistol", "puzzle", "jumble", "document", "jumper", "zombie", "enzyme", "quiche", "jigsaw", "squeak"];

        var random = wordBank[Math.floor(Math.random() * wordBank.length)];

        document.write(random);
        return random;

        
    };

    var word = randomWord();
    console.log (word);

    // blanks could be created here
    // We could use this instead of var partialWord = "------".split("");
    for (var i = 0; i < word.length; i++) {
    correctGuesses.push('_');
    }

// onkeyup function listen for key


    document.onkeyup = function(event) {
        var userGuesses = event.key;
        var userGuess = userGuesses.toLowerCase();
        console.log (userGuess);

        // error msg for non alphabet letters
        if(alphabet.indexOf(userGuess) == -1){
                console.log("Please use the alphabet");
        }

        // initialize correctGuesses array with underscores
        for (var i = 0; i < word.length; i++) {
            correctGuesses.push('_');
        }
        
            
        // displays the letters not guessed correctly
        // letter isn't in word
        if (word.indexOf(userGuess) === -1) {
            // displays letter guessed
            wrongGuesses.push(userGuess);
            wrongGuesses.innerHTML = wrongGuesses.join(', ');
        } 

        // letter guessed is in word
        else { 
            
            // replace blank with the letter
            for (var i=0; i < word.length; i++) {   
                if (word[i]  == userGuess) {
                    partialWord[i] = word[i];
                }

            }  
            // displays the partialWord 
            word.innerHTML = partialWord.join(" ");
            console.log(partialWord.join(" "));

        }
            
        if (partialWord.indexOf("-") == -1) {
            console.log ("You Guessed It!");
        }

        
    };

    startgame ();

    var html = 

    "<p>Press Any Key To Get Started</p>"

    "<p>Wins: " + wins + "</p>"

    "<p>Current Word</p>"

    correctGuesses

    "<p>Number of Guesses Remaining</p>"
   
    "<br>"

    remainingGuesses
   
    "<br>"
   
    "<p>Letters Already Guessed</p>" 

    "<br>"

    wrongGuesses
    
    
      
