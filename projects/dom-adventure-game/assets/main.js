// this code is brought to you by the js gang

// DOM Adventure Game

// They won the game scene!
const win = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["You did it!", "Congratulations on the win!", "Hit spacebar to continue"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Space for continue to next scene
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return playAgain();
        } else {}
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", continueKey);
    
}

// Gold lose scene
const goldLose = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["You were too greedy, you lose!", "Hit spacebar to continue"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Space for continue to next scene
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return playAgain();
        } else {}
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", continueKey);
}

// Gold room scene, they're almost done
const goldRoom = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["\nThis room has a big pile of gold.", "How much will you take?"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Checking to see if they have a good answer and acting accordingly
    const checkContent = function() {
        event.preventDefault();
        let answer = goldInput.value.toLowerCase();
            if (answer <= 100) {
                return win();
            } else if (answer > 100) {
                return goldLose();
            } else {}
    };
    
    // All the form and input stuff
    let goldForm = document.createElement('form')
    let goldInput = document.createElement('input')
    let goldSubmit = document.createElement('input')
    
    goldInput.setAttribute("type", "number");
    goldSubmit.setAttribute("type", "submit");
    
    buttonDiv.appendChild(goldForm);
    goldForm.appendChild(goldInput);
    goldForm.appendChild(goldSubmit);
    
    // Adding a click listener for a submit button
    goldSubmit.addEventListener('click', checkContent);
};

// Hallway lose scene
const hallwayLose = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["You hide away in the dark room...", "The lady from before sprints in!", "She attacks you with her demonic hands and teeth!", "Hit spacebar to continue"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Space for continue to next scene
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return death();
        } else {}
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", continueKey);
};

// Hallway scene
const hallway = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["You're in a very long hallway.", "There's a doorway at the end lit up with a candle\nand you hear footsteps running towards you from behind now.", "There is also a doorway closer, but the room is dark.", "\nWill you hide in the dark room or run to the end and lock the door?"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Checking to see if they have the right answer and acting accordingly
    const checkContent = function() {
        event.preventDefault();
        let answer = hallwayInput.value.toLowerCase();
            if (answer == 'run' || answer == 'run away') {
                return goldRoom();
            } else if (answer == 'hide') {
                return hallwayLose();
            } else {
                alert('Will you "run" or "hide"?')
            }
    };
    
    // All the form and input stuff
    let hallwayForm = document.createElement('form')
    let hallwayInput = document.createElement('input')
    let hallwaySubmit = document.createElement('input')
    
    hallwayInput.setAttribute("type", "text");
    hallwaySubmit.setAttribute("type", "submit");
    
    buttonDiv.appendChild(hallwayForm);
    hallwayForm.appendChild(hallwayInput);
    hallwayForm.appendChild(hallwaySubmit);
    
    // Adding a click listener for a submit button
    hallwaySubmit.addEventListener('click', checkContent);
}

// The lady ate them
const sirenLose = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["The lady jumps at you and attacks with her vicious fangs", "Hit spacebar to continue."];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Space for continue to next scene
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return death();
        } else {}
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", continueKey);
};

// scary lady time
const siren = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["\nThe floor below you opens", "You hit the floor...ow.", "It's dark but you can still look around you.", "You see a lady crying in the dark corner of the room.", "You also see a doorway that could lead out.", "\nWill you help the lady or leave the room?"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Checking to see if they have the right answer and acting accordingly
    const checkContent = function() {
        event.preventDefault();
        let answer = sirenInput.value.toLowerCase();
            if (answer == 'leave' || answer == 'leave the room') {
                return hallway();
            } else if (answer == 'help'|| answer == 'help the lady' || answer == 'lady') {
                return sirenLose();
            } else {
                alert('Will you "help" or "leave"?')
            }
    };
    
    // All the form and input stuff
    let sirenForm = document.createElement('form')
    let sirenInput = document.createElement('input')
    let sirenSubmit = document.createElement('input')
    
    sirenInput.setAttribute("type", "text");
    sirenSubmit.setAttribute("type", "submit");
    
    buttonDiv.appendChild(sirenForm);
    sirenForm.appendChild(sirenInput);
    sirenForm.appendChild(sirenSubmit);
    
    // Adding a click listener for a submit button
    sirenSubmit.addEventListener('click', checkContent);
}

// They won the RNG Game
const rngWin = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["Looks like you picked the right number!", "Hit spacebar to continue."];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Space for continue to next scene
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return goldRoom();
        } else {}
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", continueKey);
}

// They lost the RNG Game
const rngLose = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["Looks like you picked the wrong number...", "Hit spacebar to continue."];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Space for continue to next scene
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return siren();
        } else {}
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", continueKey);
};

//Create an RNG game! If they fail, they will go to a further away room from the finish.
const numGuess = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["May the RNG gods be in your favor...", "\nPick a number, 1 or 2?"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
  //Create a random number
  let realNum = Math.round(Math.random() * 2);
    
    // Checking to see if they have the right answer and acting accordingly
    const checkContent = function() {
        event.preventDefault();
        let answer = rngInput.value.toLowerCase();
            if (answer == realNum) {
                return rngWin();
            } else {
                return rngLose();
            }
    };
    
    // All the form and input stuff
    let rngForm = document.createElement('form')
    let rngInput = document.createElement('input')
    let rngSubmit = document.createElement('input')
    
    rngInput.setAttribute("type", "number");
    rngSubmit.setAttribute("type", "submit");
    
    buttonDiv.appendChild(rngForm);
    rngForm.appendChild(rngInput);
    rngForm.appendChild(rngSubmit);
    
    // Adding a click listener for a submit button
    rngSubmit.addEventListener('click', checkContent);
};

// Bear Death Scene
const bearDeath = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["Welp, that wasn't a good decision.", "The bear charges at you...", "Hit spacebar to continue."];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Space for continue to next scene
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return death();
        } else {}
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", continueKey);
};

// Bear Scene
const bearRoom = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["\nThere is a bear in here.", "It's sitting in front of another door eating from a pot of honey.", "\nHow are you going to move the bear?"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Checking to see if they have the right answer and acting accordingly
    const checkContent = function() {
        event.preventDefault();
        let answer = bearInput.value.toLowerCase();
            if (answer == 'taunt the bear' || answer == 'taunt' || answer == 'taunt bear') {
                return numGuess();
            } else {
                return bearDeath();
            }
    };

    // All the form and input stuff
    let bearForm = document.createElement('form')
    let bearInput = document.createElement('input')
    let bearSubmit = document.createElement('input')
    
    bearInput.setAttribute("type", "text");
    bearSubmit.setAttribute("type", "submit");
    
    buttonDiv.appendChild(bearForm);
    bearForm.appendChild(bearInput);
    bearForm.appendChild(bearSubmit);
    
    // Adding a click listener for a submit button
    bearSubmit.addEventListener('click', checkContent);
    
};

// pitTrap Scene
const pitTrap = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["\nThe door swings open to utter darkness.", "You step through, but your foot can't find the floor.", "It's a big pit. And you're falling.", "\n\tAAAAAAAAHHHHHHHHHhhhhhhhhhhhh.....\n", "Hit spacebar to continue"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Space for continue to next scene
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return death();
        } else {}
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", continueKey);
};

// First Scene 
const start = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ['\nYou awake in a dimly lit room.', 'There are doors to your left and right.', '\nWhich door do you pick?\n'];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Buttons for choosing a door
    let buttons = ['Left', 'Right'];
        for (let button of buttons) {
            const createButton = document.createElement('button');
            createButton.className = "nav-button";
            createButton.textContent = button;
            buttonDiv.appendChild(createButton);
            createButton.addEventListener("click", event => {
                if (button == 'Left') {
                    window.removeEventListener('keydown', doorKeys)
                    return bearRoom();
                } else if (button == 'Right') {
                    window.removeEventListener('keydown', doorKeys)
                    return pitTrap();
                } else {
                    console.log('broke')
                }
            });
        };
    
    // Key Listener for choosing a door
        
    // Arrow keys for picking answer
    const doorKeys = function (event) {
            
        switch(event.key) {
                case 'ArrowLeft':
                    window.removeEventListener('keydown', doorKeys)
                    return bearRoom();
                    break;

                case 'ArrowRight':
                    window.removeEventListener('keydown', doorKeys)
                    return pitTrap();

                default:
                    console.log('wrong key');
                    break;
        };
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", doorKeys);
};

// If the player dies, show this scene
const playAgain = function() {
    
    resetScene();
    
    let playAgainButton = document.createElement("button");
        buttonDiv.appendChild(playAgainButton)
        playAgainButton.textContent = "Click here to play again!";
        playAgainButton.addEventListener("click", event => {
         start();
    });
};

// Death scene
const death = function() {
    
    resetScene();
    
    // Displayed Text
    let paragraphs = ['You died...', "Hit spacebar to continue"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Space for continue to next scene
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return playAgain();
        } else {}
    };  
    
    //Add event listener for keydown
    window.addEventListener("keydown", continueKey);
    
};

// This function will reset the page for a new scene
const resetScene = function() {
    sceneDiv.innerHTML = ''
    buttonDiv.innerHTML = ''
}

// Starting Page, also defining some important global variables
const sceneDiv = document.querySelector("#sceneDiv");
const buttonDiv = document.querySelector("#buttonDiv")

resetScene();

let button = document.createElement("button");
sceneDiv.appendChild(button)
button.textContent = "Start Game";
button.addEventListener("click", event => {
    start();
});