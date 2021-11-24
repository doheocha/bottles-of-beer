let i = 0;
function printBottles() {
    while (i<10) {
        setTimeout(function(){ printRealBottles();}, 3000);
        i++;
        break;
    }
}

function printRealBottles() {
    document.getElementById("bottles").innerHTML = i;
    setTimeout(2000);
}