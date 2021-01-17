const buttonDiv = document.querySelector("#buttonDiv");
const projectTitle = document.querySelector("#projectTitle")
const projectDiv = document.querySelector("#projectDiv");
const projectDescription = document.querySelector("#projectDescription");

let project = -1;

const projectArray = [
    {
        name: "Tic Tac Toe",
        title: "Tic Tac Toe",
        description: "A tic-tac-toe game that Troy Alfelt and I made for a school project."
    },
    {
        name: "Adventure Game",
        title: "DOM Adventure Game (Was Not Designed for Mobile)",
        description: "A text adventure game I made for a school project, using DOM methods and event listeners to rebuild the page."
    },
    {
        name: "Turn Based Game",
        title: "A Primitive Turn Based Game",
        description: "I made this two player game with Aliza Howe for a school project."
    }
];

const frameArray = [
    {
        width: 400,
        height: 520,
        src: "projects/tic-tac-toe/index.html"
    },
    {
        width: 900,
        height: 500,
        src: "projects/adventure-game/index.html"
    },
    {
        width: 600,
        height: 600,
        src: "projects/turn-based-game/index.html"
    }
];

const appendProject = function() {
        
        if (project < 2) {
            project++;
        } else {
            project = 0;
        };
    
        let frame = document.createElement('iframe');
        frame.width = frameArray[project].width;
        frame.height = frameArray[project].height;
        frame.src = frameArray[project].src;
    
        projectDiv.innerHTML = '';
        projectTitle.textContent = projectArray[project].name;
        projectDescription.textContent = projectArray[project].description;
        projectDiv.appendChild(frame);
};

const projectButton = document.createElement('button');
projectButton.textContent = "Next Project";
projectButton.addEventListener("click", appendProject);

buttonDiv.appendChild(projectButton);
projectTitle.textContent = projectArray[0].name;
projectDescription.textContent = projectArray[0].description;
appendProject();
