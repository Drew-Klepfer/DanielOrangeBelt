function printHearts(){
    for(var count = 0; count < 15; count++){
        console.log("<3");
        document.getElementById("text").innerText += "<3" + '\xa0';
    }
}

function printAscending() {
    for(var count = 10; count < 21; count++) {
        console.log(count);
        document.getElementById("ascending").innerText += count + '\xa0';
    }
}

function printDescending() {
    for(var count = 20; count > 9; count--) {
        console.log(count);
        document.getElementById("descending").innerText += count + '\xa0';
    }
}