let grid = document.querySelector(".grid");
let gridNodes = grid.childNodes;
let gridBox = document.querySelectorAll(".gridBox");
//the parapgraph that displays who's turn it is/who won
let displayParagraph = document.querySelector(".display");

//a reset button that gets added on win/draw
let resetButton = document.createElement("button");
resetButton.textContent = "Play again?";

//adds paragraphs to each box of the grid
for (let index of gridBox) {
  paragraph = document.createElement("p");
  index.appendChild(paragraph);
}

//declares the names of each box of the grid
let topLeft = document.querySelector("#topLeft");
let topMiddle = document.querySelector("#topMiddle");
let topRight = document.querySelector("#topRight");
let middleLeft = document.querySelector("#middleLeft");
let middleMiddle = document.querySelector("#middleMiddle");
let middleRight = document.querySelector("#middleRight");
let bottomLeft = document.querySelector("#bottomLeft");
let bottomMiddle = document.querySelector("#bottomMiddle");
let bottomRight = document.querySelector("#bottomRight");

//div that contains messages and eventually reset button
let footer = document.querySelector("#footer");

//variable to track who's turn it is and who wins
let player = "";
let winner = "";
//variable for tracking a draw. If this hits 9 and nobody has won, execute draw
let moves = 0;
//variable to track if somebody has won, to remove EventListener
let win = false;
//this randomizes who goes first
let random = Math.floor(Math.random() * 2);
if (random == 0) {
  player = "X";
  winner = "O";
} else {
  player = "O";
  winner = "X";
}
//shows who's turn it is at the start
displayParagraph.textContent = ("Current player: " + player);

//this function governs what happens when there's a draw
const draw = function() {
        grid.style.backgroundColor = "#faf064";
        displayParagraph.textContent = "Draw!";
        //adds reset button
        footer.appendChild(resetButton);
};
//this big ol' function checks every combination for a win
const checkWin = function () {
  //this is organized into 3 big blocks, first one is wins that involve
  //topLeft. First it makes sure the box isn't blank
  if (topLeft.childNodes[0].textContent.length > 0) {
    //then checks if its contents  are the same as two adjacent boxes
    if (
      topLeft.childNodes[0].textContent ==
        middleLeft.childNodes[0].textContent &&
      topLeft.childNodes[0].textContent == bottomLeft.childNodes[0].textContent
    ) {
      //changes color of said boxes green;
      topLeft.style.backgroundColor = "green";
      middleLeft.style.backgroundColor = "green";
      bottomLeft.style.backgroundColor = "green";
      //sets win to true to stop clicking
      win = true;
      //removes event listeners
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
      //adds reset button
      footer.appendChild(resetButton);
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");
    //another win combination with top left
    } else if (
      topLeft.childNodes[0].textContent ==
        topMiddle.childNodes[0].textContent &&
      topLeft.childNodes[0].textContent == topRight.childNodes[0].textContent
    ) {
      topLeft.style.backgroundColor = "green";
      topMiddle.style.backgroundColor = "green";
      topRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
      footer.appendChild(resetButton);
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");
    //final topLeft win
    } else if (
      topLeft.childNodes[0].textContent ==
        middleMiddle.childNodes[0].textContent &&
      topLeft.childNodes[0].textContent == bottomRight.childNodes[0].textContent
    ) {
      topLeft.style.backgroundColor = "green";
      middleMiddle.style.backgroundColor = "green";
      bottomRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
      footer.appendChild(resetButton);
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    }
  }
  //Second if statement, wins involving center box
  if (middleMiddle.childNodes[0].textContent.length > 0) {
    if (
      middleMiddle.childNodes[0].textContent ==
        topMiddle.childNodes[0].textContent &&
      middleMiddle.childNodes[0].textContent ==
        bottomMiddle.childNodes[0].textContent
    ) {
      middleMiddle.style.backgroundColor = "green";
      topMiddle.style.backgroundColor = "green";
      bottomMiddle.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
      footer.appendChild(resetButton);
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    } else if (
      middleMiddle.childNodes[0].textContent ==
        middleLeft.childNodes[0].textContent &&
      middleMiddle.childNodes[0].textContent ==
        middleRight.childNodes[0].textContent
    ) {
      middleMiddle.style.backgroundColor = "green";
      middleLeft.style.backgroundColor = "green";
      middleRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
      footer.appendChild(resetButton);
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    } else if (
      middleMiddle.childNodes[0].textContent ==
        bottomLeft.childNodes[0].textContent &&
      middleMiddle.childNodes[0].textContent ==
        topRight.childNodes[0].textContent
    ) {
      middleMiddle.style.backgroundColor = "green";
      bottomLeft.style.backgroundColor = "green";
      topRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
      footer.appendChild(resetButton);
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    }
  }
  //final if block, checks for wins with bottomRight
  if (bottomRight.childNodes[0].textContent.length > 0) {
    if (
      bottomRight.childNodes[0].textContent ==
        bottomMiddle.childNodes[0].textContent &&
      bottomRight.childNodes[0].textContent ==
        bottomLeft.childNodes[0].textContent
    ) {
      bottomRight.style.backgroundColor = "green";
      bottomLeft.style.backgroundColor = "green";
      bottomMiddle.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
      footer.appendChild(resetButton);
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    } else if (
      bottomRight.childNodes[0].textContent ==
        middleRight.childNodes[0].textContent &&
      bottomRight.childNodes[0].textContent ==
        topRight.childNodes[0].textContent
    ) {
      bottomRight.style.backgroundColor = "green";
      middleRight.style.backgroundColor = "green";
      topRight.style.backgroundColor = "green";
      win = true;
      for (let index of gridNodes) {
        index.removeEventListener("click", clickBox);
      }
      footer.appendChild(resetButton);
        //Sets the display text to say who the winner is
        displayParagraph.textContent = (winner + " is the winner!");

    }
  }

    //if no win conditions are met and the boxes are full, return draw
    if (moves == 9 && win == false) {
        return draw();
    };


};

//function that executes when a box is clicked
const clickBox = function (evt) {
  let paragraphSymbol = evt.target.childNodes[0];
  //sets the content of the box to the current player
  paragraphSymbol.textContent = player;
  //switches to the next player
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  };

  if (winner == "O") {
      winner = "X";
  } else {
      winner = "O"
  };
  //updates message of who's turn it is
  displayParagraph.textContent = ("Current player: " + player);
  //removes event listener for the clicked box
  evt.target.removeEventListener("click", clickBox);
  //increases the global variable moves for checking draws
    moves++;
  //checks if that click created a win/draw
  return checkWin();
};

const reset = function() {
  //function that resets colors to default
  grid.style.backgroundColor = "transparent";
  topLeft.style.backgroundColor = "transparent";
  topMiddle.style.backgroundColor = "transparent";
  topRight.style.backgroundColor = "transparent";
  middleLeft.style.backgroundColor = "transparent";
  middleRight.style.backgroundColor = "transparent";
  middleMiddle.style.backgroundColor = "transparent";
  bottomLeft.style.backgroundColor = "transparent";
  bottomMiddle.style.backgroundColor = "transparent";
  bottomRight.style.backgroundColor = "transparent";
  //gets rid of Xs and Os
  topLeft.childNodes[0].textContent = "";
  topMiddle.childNodes[0].textContent = "";
  topRight.childNodes[0].textContent = "";
  middleLeft.childNodes[0].textContent = "";
  middleMiddle.childNodes[0].textContent = "";
  middleRight.childNodes[0].textContent = "";
  bottomLeft.childNodes[0].textContent = "";
  bottomMiddle.childNodes[0].textContent = "";
  bottomRight.childNodes[0].textContent = "";
  //resets moves
  moves = 0;
  //resets win
  win = false;
  displayParagraph.textContent = ("Current player: " + player);
  //adds event listeners back
  for (let index of gridNodes) {
    index.addEventListener("click", clickBox);
  }
  //gets rid of reset button
  footer.removeChild(resetButton);
}
//adds listener to reset button
resetButton.addEventListener("click", reset);
//adds listeners to grid at start
for (let index of gridNodes) {
  index.addEventListener("click", clickBox);
}
