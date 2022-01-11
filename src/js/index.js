var drums = document.querySelectorAll(".drum");

// iterate through all the drums
for (var i=0; i<drums.length; i++) {

    // button click
    drums[i].addEventListener("click", function() {
        playAudio(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

    // keypress
    document.addEventListener("keypress", function(event) {
        playAudio(event.key);
        buttonAnimation(event.key);
    })
}

// play sound
function playAudio(button) {
    switch (button) {
        case "w":
            var tom1 = new Audio("./src/sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("./src/sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case "s":
            var tom3 = new Audio("./src/sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4 = new Audio("./src/sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case "j":
            var snare = new Audio("./src/sounds/snare.mp3");
            snare.play();
            break;
    
        case "k":
            var crash = new Audio("./src/sounds/crash.mp3");
            crash.play();
            break;
    
        case "l":
            var kickBass = new Audio("./src/sounds/kick-bass.mp3");
            kickBass.play();
            break;
    
        default:
            console.log(button);
            break;
    }
}

// button animation
function buttonAnimation(button) {
    var activeButton = document.querySelector("." + button);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}