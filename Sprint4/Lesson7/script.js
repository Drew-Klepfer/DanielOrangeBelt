/* create deadline variable */
var deadline = new Date("apr 1, 2024 00:00:00").getTime();
console.log(deadline)
var x = setInterval(function () {
    var now = new Date().getTime();
    
    /* create var that subtracts the deadline from the current time*/
    var timeLeft = deadline - now;
    console.log(timeLeft);
    /* create days, hours, minutes, and seconds var */
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    console.log(days)
    /* edit the innerHTML of our HTML elements */
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    /* create the condition: check if the deadline is reached */
    if(timeLeft < 0) {
        clearInterval(x);
        /* set all HTML elements to show '0', and set up the 'TIME UP' message */
        document.getElementById("demo").innerHTML = "Time's up!"
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0'; 
    }
}, 1000);