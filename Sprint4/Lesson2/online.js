var words = ['phone', 'mobile', 'hello', 'bye', 'javascript', 'html', 'dog'];
alert("Hello welcome to Hang Man game.\n Hang man is word guessing game.\n the computer will pick secret word and the other player will guess it. \n You have 5 lives, use it well.");
var word = words[Math.floor(Math.random() * words.length)];
var answer = [];
for (i = 0; i < word.length; i++) {
    answer[i] = "_";
}
var remaining = word.length;//remaining letters
var life = 5;
while (remaining > 0 && life > 0) {
    alert(answer.join(" "));
    var guess = prompt('Guess a letter');
    if (guess === null) {
        break;
    }
    if (guess.length !== 1) {
        alert("You must enter a single letter.");
    }
    else {
        var g = guess.toLowerCase();
        for (j = 0; j < word.length; j++) {
            if (word[j] === g && word[j] !== answer[j]) {
                answer[j] = g;
                remaining--;
            }
        }
        life--;
    }
}
alert(answer.join(" "))
alert("Good job The answer was " + word)

/* https://www.sololearn.com/compiler-playground/WWpWuERaW7dM */