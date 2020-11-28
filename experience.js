const buttonDiv = document.querySelector("#buttonDiv");
const projectDiv = document.querySelector("#projectDiv");

const tictactoeFrame = document.createElement('iframe');
tictactoeFrame.className = 'tictactoeFrame';
tictactoeFrame.width = '400';
tictactoeFrame.height = '520';
tictactoeFrame.src = "projects/tic-tac-toe/index.html";

projectDiv.appendChild(tictactoeFrame);
