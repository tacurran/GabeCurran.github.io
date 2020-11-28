const buttonDiv = document.querySelector("#buttonDiv");
const projectDiv = document.querySelector("#projectDiv");

let projectNum = 0;

const switchProject = function() {
    if (projectNum == 0) {
        projectDiv.innerHTML = '';
        projectDiv.appendChild(domadventuregameFrame);
        projectNum = 1;
    } else {
        projectDiv.innerHTML = '';
        projectDiv.appendChild(tictactoeFrame);
        projectNum = 0;
    }
};

const buttonSwitcher = document.createElement('button');
buttonSwitcher.textContent = "Switch Project";
buttonSwitcher.addEventListener("click", switchProject);

const tictactoeFrame = document.createElement('iframe');
tictactoeFrame.className = 'tictactoeFrame';
tictactoeFrame.width = '400';
tictactoeFrame.height = '520';
tictactoeFrame.src = "projects/tic-tac-toe/index.html";

const domadventuregameFrame = document.createElement('iframe');
domadventuregameFrame.className = 'domadventuregameFrame';
domadventuregameFrame.width = '900';
domadventuregameFrame.height = '500';
domadventuregameFrame.src = "projects/dom-adventure-game/index.html";

buttonDiv.appendChild(buttonSwitcher);
projectDiv.appendChild(tictactoeFrame);
