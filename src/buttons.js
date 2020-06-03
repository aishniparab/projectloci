// Toggle Sounds
var x = document.getElementById("myAudio");

function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};

// Toggle Art
function displayArt() {
    var art = document.getElementById("art-sample");
    //show
    if (art.style.display === "none") {
        art.style.display = "block";
    } else {
        art.style.display = "none";
    }
}

// Toggle Smell Tags
var isShowing=false;
function popSmells(){
    var smells = document.getElementById("smellbar");
    if (isShowing){
        smells.className = "";    
        isShowing=false;
    } else{
        smells.className = "show";
        isShowing=true;
    }
}