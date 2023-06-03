/*  
    Notice, the name of this function is called from our button, using "onclick", meaning this function
    will not execute until the user has clicked the start game button
*/
function startGame() {
    /* Here we will test our html button that calls this function by using console.log */

    /* create our array of words for the user to guess */
    var words = ['rubik', 'coding', 'pizza', 'orange', 'yoshi', 'mario', 'antidisestablishmentarianism', 'pneumonoultramicroscopicsilicovolcanoconiosis', 'hippopotomonstrosesquippedaliophobia', 'floccinaucinihilipilification'];

    /* give an alert to welcome our user to the game */
    alert("Welcome to my hangman game \n Hangman is a word guessing game \n The computer will choose a random word for you to guess \n good luck");

    /* chose a random word from our array using Math.random */
    var randomWord = words[Math.floor(Math.random() * words.length)];

    /* create an empty array for our user input */
    var answer = [];
    /* Fill the blank spaces in our input array with '_' */
    /* MISSING "i < " */
    for (i = 0; i <  randomWord.length; i++) {
        answer[i] = "_";
    }

    /* declare a variable to keep track of how many letters are left tin the secret word */
    var lettersGuessed = randomWord.length;

    /* start a while loop that will run until until the user has guessed all the letters */
    /* HAD WRONG VARIABLE IN WHILE LOOP */
    while (lettersGuessed > 0) {
        console.log("Hi")
        alert(answer.join(" "));

        /* get user input using prompt() */
        var guess = prompt("Guess a letter");

        /* check if the user input a letter */
        if (guess === null){
            alert('Hey! Guess a letter!');
            break;
        }

        /* check if the user input more than one letter, not allowed! */
        else if (guess.length !== 1){
            alert('Hey! Guess a letter');
        }

        //switch(){

        //}

        /* if the guess is valid */
        else{
            var underCaseGuess = guess.toLowerCase();
            /* check if the guessed letter is in the word */
            for (j = 0; j < randomWord.length; j++) {
                if (randomWord[j] === underCaseGuess && randomWord[j] !== answer[j]) {
                    answer[j] = underCaseGuess;
                    lettersGuessed--;
                }
            }
        }
    }
    /* show the user the found word with an alert */
    alert(answer.join(" "))
    alert("Great job! The secret word was " + randomWord + ".")
}