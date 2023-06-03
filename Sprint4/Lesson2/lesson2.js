function startGame() {
    var words =
        ['rubik', 
        'soccer', 
        'mario', 
        'yoshi',
        'html', 
        'css', 
        'cat'];

    alert("Welcome to my hangman game!\n Hangman is word guessing game.\n The computer will pick a secret word for you. \n Good luck!");

    /* choose a random word from our array words */
    var word = words[Math.floor(Math.random() * words.length)];

    /* fill in blank spaces for the length of the word */
    var answer = [];
    for (i = 0; i < word.length; i++) {
        answer[i] = "_";
    }

    /* use this variable to keep track of how many letters are left in the secret word */
    var remaining = word.length;
    
    /* while there are still letters to be guesses */
    while (remaining > 0 ) {
        alert(answer.join(" "));

        /* get user input */
        var guess = prompt('Guess a letter');

        /* check user input */
        if (guess === null) {
            break;
        }
        if (guess.length !== 1) {
            alert("You must enter a single letter.");
        }
        else {
            var g = guess.toLowerCase();
            /* check if the word is correct */
            for (j = 0; j < word.length; j++) {
                if (word[j] === g && word[j] !== answer[j]) {
                    answer[j] = g;
                    remaining--;
                }
            }
        }
    }

    /* show user the completed answer */
    alert(answer.join(" "));
    alert("Good job, the secret word was " + word);
}