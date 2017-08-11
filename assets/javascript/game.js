var wins = 0;
var remainingGuesses = 15;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrongGuesses = [];
var correctGuesses = [""];






// User presses key to start.
    function youwin() {
        wins++;
        remainingGuesses = 15;
        wrongGuesses = [];
        document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
        randomWord();
        console.log (word);
        // document.getElementById("word").innerHTML = word;
        
        console.log ("youwin");


    }
   
    function youlose() {
        remainingGuesses = 15;
        wrongGuesses = [];
        document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
        randomWord();
        console.log (word);
        // document.getElementById("word").innerHTML = word;
        
        console.log ("you lose");

    }

// blanks are created
    
    var partialWord = "------".split(""); 
    // document.querySelector("#word").innerHTML = partialWord;
    console.log (partialWord);

    


// random word is selected
    function randomWord() {
        var wordBank = ["pistol", "puzzle", "jumble", "jumper", "zombie", "enzyme", "quiche", "jigsaw", "squeak"];

        var random = wordBank[Math.floor(Math.random() * wordBank.length)];

        

        // document.getElementById("word").innerHTML = partialWord;

        // console.log (partialWord);
        return random;

    };

    var word = randomWord();
        console.log (word);
    

    // blanks could be created here
    // We could use this instead of var partialWord = "------".split("");
    // for (var i = 0; i < word.length; i++) {
    // correctGuesses.push('_');
    // }



    // user types a letter
    document.onkeyup = function(event) {
        var userGuesses = event.key;
        var userGuess = userGuesses.toLowerCase();

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("word").innerHTML = partialWord;

        console.log (userGuess);

        // error msg for non alphabet letters
        if(alphabet.indexOf(userGuess) == -1){
            alert ("Please use the alphabet");
                console.log("Please use the alphabet");
        }

       
        // displays the letters not guessed correctly
        // letter isn't in word
        if (word.indexOf(userGuess) === -1) {
            // displays letter guessed
            wrongGuesses.push(userGuess);
            // wrongGuesses.innerHTML = wrongGuesses.join (", ");
            document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
            
            document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
            remainingGuesses--;
            
            if (remainingGuesses == -1) {
                youlose();
                alert ("Game Over");
            }

        } 



        // letter guessed is in word
        else { 
            
            // replace blank with the letter
            for (var i=0; i < word.length; i++) {   
                if (word[i]  == userGuess) {
                    partialWord[i] = word[i];
                }

            }  
            // displays the partialWord additions
            document.querySelector("#word").innerHTML = partialWord.join(" ");
            console.log(partialWord.join(" "));

        }
            
        if (partialWord.indexOf("-") === -1) {
               youwin();
            alert("Your Guessed It!");
            console.log ("You Guessed It!");
        }
    
        
           
        
         
    };

// document.querySelector("#wins").innerhtml = wins;
// document.querySelector("#word").innerhtml = partialWord;
// document.querySelector("#remainingGuesses").innerhtml = remainingGuesses;

// document.getElementById("wins").innerHTML = wins;
// document.getElementById("word").innerHTML = partialWord;
// document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

   


    
    
    
      
