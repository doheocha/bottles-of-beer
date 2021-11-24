function printBottles() {
    let i = 0;
    while (i<100) {
        let song = " bottles of beer on the wall"
        document.getElementById("bottles").innerHTML = i + song;
    }
}