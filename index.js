
// Detecting Button Press

var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

  });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);   // Sending key events to function
});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}


// function Audio(fileLocation) {
//   this.fileLocation = fileLocation;
//   this.play = function() {
//
//   }
// }

// Use "keydown" event instead of "keypress"

// Constructor Function -> It has to be capitalized
// function Bellboy (name, age, hasWorkPermit, languages) {
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
//   this.moveSuitcase = function() {
//      alert("May I take your suitcase?");
//      pickUpSuitcase();
//      move();
//   }
// }
//
// var bellboy1 = new Bellboy("Tom", 19, "True", ["French", "English"]);
//
// alert(bellboy1.languages);
