var numSquares = 6; 
var colors = []; 
var pickedColor; 
var squares = document.querySelectorAll(".square");  
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");  
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode"); 

init(); 

function init(){
    //mode buttons event listeners
    setUpModeButtons(); 
    setUpSquares(); 
    reset(); 
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor; 
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";  
                changeColors(clickedColor); 
                h1.style.backgroundColor = clickedColor; 
                resetButton.textContent = "Try Again?"; 
            } else{
                messageDisplay.textContent = "Try Again!"; 
                this.style.backgroundColor = "#232323"; 
            }
        }); 
    }
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected"); 
            modeButtons[1].classList.remove("selected"); 
            this.classList.add("selected"); 
            if(this.textContent === "Easy"){
                numSquares = 3; 
            } else {
                numSquares = 6; 
            }
            reset(); 
        }); 
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares); 
    //pick a new random color from array
    pickedColor = pickColor();   
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor; 
    resetButton.textContent = "New Colors"; 
    messageDisplay.textContent = ""; 
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i]; 
        } else {
            squares[i].style.display = "none"; 
        }
    }
    h1.style.backgroundColor = "steelBlue"; 
}

resetButton.addEventListener("click", function(){
    reset(); 
}); 


function generateRandomColors(num){
    var arr = []; 
    for(var i = 0; i < num; i++){
        arr.push(randomColor()); 
    }
    return arr; 
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]; 
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color; 
    }
}

function randomColor(){
    //pick a color from 0 to 255 for rgba
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

