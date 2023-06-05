//DETECTING BUTTON PRESS
var numberOfDrumButton = document.querySelectorAll(".drum").length; //getting length of drum class 
for(var i =0;i<numberOfDrumButton;i++){ // applying eventListener to all  drum buttons
    //using anynomous function execute event listener after "click".
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
      // this.style.color="white"; //changing text color to white every time each button got clicked.
      var buttonInnerHTML=this.innerHTML; //selecting particular button
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
   
    }); 
}

//DETECTING KEYPRESS

document.addEventListener("keydown",function(event){ //eventListener is added to whole document ,evnt is a property.
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    //adding sound to buttons
    switch(key){
        case "w":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
             var kick = new Audio ("sounds/kick-bass.mp3");
             kick.play();
             break;  
        case "s":
             var snare = new Audio ("sounds/snare.mp3");
             snare.play();
             break; 
        case "d":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;  
        case "k":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;  
        case "l":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;   
        default:console.log(buttonInnerHTML) ;           
      }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey); //finding active button
    activeButton.classList.add("pressed");  //applying animation property of 'pressed' class
    setTimeout(function(){
        activeButton.classList.remove("pressed");  //setTimeout:to remove animation after 100ms
    },100);
}