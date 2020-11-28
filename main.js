const buttonDiv = document.querySelector("#buttonDiv");
const projectDiv = document.querySelector("#projectDiv");
const projectDescription = document.querySelector("#projectDescription");

const tictactoeTitle = "Tic Tac Toe"
const tictactoeDecsription = "A tic-tac-toe game that my partner, Troy Alfelt, and I made for a school project."

const domadventuregameTitle = "DOM Adventure Game (Was Not Designed for Mobile)"
const domadventuregameDescription = "A text adventure game I made for a school project, using DOM methods and event listeners to rebuild the page."

let projectNum = 0;

const switchProject = function() {
    if (projectNum == 0) {
        projectDiv.innerHTML = '';
        projectDiv.appendChild(domadventuregameFrame);
        projectTitle.textContent = domadventuregameTitle;
        projectDescription.textContent = domadventuregameDescription;
        projectNum = 1;
    } else {
        projectDiv.innerHTML = '';
        projectDiv.appendChild(tictactoeFrame);
        projectTitle.textContent = tictactoeTitle;
        projectDescription.textContent = tictactoeDecsription;
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
