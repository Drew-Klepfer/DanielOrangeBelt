/* print 15 hearts <3 */
function printHearts(){
    for(let index = 0; index < 15; index++){
        console.log("<3");
        document.getElementById("text").innerText += "<3" + '\xa0';
    }
}

/* print 10-20 in ascending order */
function printAscending() {
    for (let index = 0; index < 11; index++){
        i = 10
        console.log(i + index);
        document.getElementById("ascending").innerText += i + index + '\xa0';
    }
}

/* print 10-20 in descending order */
function printDescending() {
    for (let index = 11; index > 0; index--){
        i = 9
        console.log(i + index);
        document.getElementById("descending").innerText += i + index + '\xa0';
    }
}