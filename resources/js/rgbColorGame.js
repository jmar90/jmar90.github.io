/** SELECT ELEMENTS AND SAVE INTO VARIABLES **/
var numCircles = 8; //Number of circles (start off with 8)
var colors = []; 
var pickedColor; 
var circles = document.querySelectorAll(".circle"); //All circles
var colorDisplay = document.querySelector("h2"); //Only 1 h2 on page, & it's the display of the color to be guessed
var messageDisplay = document.querySelector("#message"); //Message that will display (eg, "Try again")
var header = document.querySelector("header"); //header on page
var resetButton = document.querySelector("#reset"); //New colors/Play again button
var modeButtons = document.querySelectorAll(".mode"); //Easy/medium/hard buttons

/** DOM MANIPULATION **/
//CREATE AND RUN A FUNCTION THAT WILL LOAD ALL NECESSARY COMPONENTS WHEN PAGE LOADS
init();

function init(){
  //Set up event listeners for mode buttons
    setupModeButtons();
  //Set up event listeners for circles
    setupCircles();
  //Generate random rgb colors, pick a color to be guessed, etc.
    reset();
}

function setupCircles(){
    for(let i = 0; i < circles.length; i++){
        circles[i].addEventListener("click", function(){
          //Grab the color of the clicked circle
            var clickedColor = this.style.backgroundColor;
           //Compare clickedColor to pickedColor (ie, compare user's guess to the actual answer)
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!"; 
                changeColors(clickedColor);
                header.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
              //Change color of circle to match body background color (so circle appears to disappear)
                this.style.backgroundColor = "#ededed";
                this.style.boxShadow= "none";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function setupModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
          //When button clicked, 'selected' class initially removed from all buttons then added back to the clicked button
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
          //Figure out how many circles to display based on the mode button that was clicked
            this.textContent === "Easy " ? numCircles = 3: this.textContent === "Medium " ? numCircles = 6: numCircles = 8;
          //Run reset function
            reset();
        });
    }
}

function reset(){
  //Fill colors array with random colors
    colors = generateRandomColors(numCircles);
  //Pick a random color from array
    pickedColor = pickColor();
  //Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
  //Change reset button text from 'play again' back to 'new colors'
    resetButton.textContent = "New Colors";
  //Change messageDisplay back to blank to get rid of 'correct' or 'try again' message
    messageDisplay.textContent = "";
  //Change colors of circles
    for(let i = 0; i < circles.length; i++){
        if(colors[i]){ //If color at index i
            circles[i].style.display = "block"; //Display all circles to begin with befor assigning color (that way if someone was in easy mode & now switched to hard, all circles are now back)
            circles[i].style.backgroundColor = colors[i];
        } else {
            circles[i].style.display = "none";
        }
    }
  //Change header background back to its original color
    header.style.background = "#ededed"; 
  //Center circles based on numCircles (If 3 or 6, want two rows of 3; otherwise, keep the initial format of two rows of 4)
    for(let i = 0; i < circles.length; i++){
        if(numCircles === 3 || numCircles === 6){
            circles[i].classList.add("center");
        } else{
            circles[i].classList.remove("center");
        }
    }
}


//DEFINE PICKCOLOR FUNCTION (randomly select color from 'colors' array to be guessed)
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}


//GENERATE RANDOM 'COLORS' ARRAY
function generateRandomColors(num){
    var arr = [];
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //Pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    //Return rgb string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


//CREATE FUNCTION TO CHANGE COLORS OF CIRCLES
function changeColors(color){
    for(let i = 0; i < circles.length; i++){
        circles[i].style.backgroundColor = color;
    }
}


//MAKE RESET BUTTON FUNCTIONAL
resetButton.addEventListener("click", function(){
    reset();
});