document.write("text written using Javascript Code") 


/* the app randomly picks a letter, and the user has to guess which letter the app chose. Game text:

3. Guess what letter I'm thinking of
    User chooses letter
    Computer chooses a letter
    win/lose output, add outcome to win/loss computation
    resets everytime whether loss/win

4. Wins: (# of times the user has guessed the letter correctly)

5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

6. Guesses Left: (# of guesses left. This will update)

7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins). -->
    */

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft= 10;

    document.onkeyup = function () {
       var userguess = String.fromCharCode(event.keyCode)
      
       console.log(userguess);

       var computerGuess = options[Math.floor(Math.random()* options.length)];
        console.log(computerGuess);

        if ((userguess==computerGuess)) {
            wins++;
            alert("wins: " + wins);
            
        }

        else {
            losses++;
            alert("losses: " + losses);
            
        }



    }