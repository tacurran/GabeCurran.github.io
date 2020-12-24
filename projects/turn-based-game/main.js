// Character list is an array. The array represents a single team.
// Characters themselves are objects. The object name will be the character's name, and each key/property unit will be a stat (e.g., HP: 100;)

let startDisplay = document.querySelector("#startDisplay");
let mainGame = document.querySelector("main");
let resetGame = document.querySelector("#resetGame");
let playingField = document.querySelector('#playingField');
let team1Header = document.querySelector('#team1Header');
let team2Header = document.querySelector('#team2Header');

const refresh = function() { // refreshes the page
	location.reload();
}

resetGame.addEventListener("click", refresh);

// player teams
let team1char1 = document.querySelector("#team1char1");
let team1char2 = document.querySelector("#team1char2");
let team1char3 = document.querySelector("#team1char3");

let team2char1 = document.querySelector("#team2char1");
let team2char2 = document.querySelector("#team2char2");
let team2char3 = document.querySelector("#team2char3");

// visuals on the field
let current1 = document.querySelector("#current1");
let current2 = document.querySelector("#current2");

let currentPlayer1 = document.querySelector("#currentPlayer1");
let current1health = document.querySelector("#current1health");
let current1maxHealth = document.querySelector("#current1maxHealth");
let current1HPbar = document.querySelector("#current1HPbar");

let currentPlayer2 = document.querySelector("#currentPlayer2");
let current2health = document.querySelector("#current2health");
let current2maxHealth = document.querySelector("#current2maxHealth");
let current2HPbar = document.querySelector("#current2HPbar");

let team1div = document.querySelector("#team1");
let team2div = document.querySelector("#team2");


// action descriptions
let actionDisplay = document.querySelector("#actionDisplay");
let critDisplay = document.querySelector('#critDisplay')
let addOnDisplay = document.querySelector("#addOnDisplay");
let sentOut = document.querySelector("#sentOut");
let winnerDisplay = document.querySelector("#winnerDisplay");


const characterList = [
    {
		name: "Ekbrilo",
		HP: 200,
        attack: 25,
        type: 'fire'
	},
	{
		name: "Akvo",
		HP: 200,
        attack: 25,
        type: 'water'
	},
	{
		name: "The Grass Man",
		HP: 200,
        attack: 25,
        type: 'grass'
	},
	{
		name: "Kabo",
		HP: 100,
        attack: 50,
        type: 'fire'
	},
	{
		name: "Calysto",
		HP: 100,
        attack: 50,
        type: 'water'
	},
	{
		name: "Phrog",
		HP: 100,
        attack: 50,
        type: 'grass'
	}
];

let turn = 0;

// initializing the teams
let team1;
let team2;

// initializing indices of team arrays
let team1Current = 0;
let team2Current = 0;

let team1Death = function() { // What happens when a member of team 1 is eliminated
	if (team1Current === 0) {
		team1char1.remove(); // removes the character icon from the "waiting area"
	} else if (team1Current === 1) {
		team1char2.remove();
	} else if (team1Current === 2) {
		winnerDisplay.innerHTML = ("Team 2 wins!");
		team1char3.remove();
		attackGuy.remove();
        current1.remove();
        sentOut.remove();
		resetGame.style.visibility = "visible";
	}
};

let team2Death = function() { // What happens when a member of team 2 is eliminated
	if (team2Current === 0) {
		team2char1.remove();
	} else if (team2Current === 1) {
		team2char2.remove();
	} else if (team2Current === 2) {
		winnerDisplay.innerHTML = ("Team 1 wins!");
		team2char3.remove();
		attackGuy.remove();
        current2.remove();
        sentOut.remove();
		resetGame.style.visibility = "visible";
	}
};

const chooseTeam = function() {
    let teamArray = [];

    for (let counter = 1; counter <= 3; counter++) {
		let chosenChar = {}; // initializing as blank object
        let choice = -1 // to match index of characterList

		// Make these into buttons instead!
        while (!choice || isNaN(choice) || typeof(choice) == 'string' || choice < 0 || choice > 6) {
               choice = Number(prompt("Choose your " + counter + " member!\nPick their number!"));
            }
		// ^^ Make these into buttons instead! ^^

        choice--;
        Object.assign(chosenChar, characterList[choice]);
        teamArray.push(chosenChar);
    };
    return teamArray;
};

const makeTeam1 = function() {
	team1 = chooseTeam();
	chooseTeam1Button.remove();
	chooseTeam2Button.style.visibility = "visible";
	return team1;
}

const makeTeam2 = function() { // the unofficial "start the game" function
	team2 = chooseTeam();
	chooseTeam2Button.remove();
	setTeamVisuals();
	setCurrentVisuals();
	startHPbars();
	return team2;
}

const setTeamVisuals = function() {
	mainGame.style.visibility = "visible";
	startDisplay.remove();

	team1char1.innerHTML = team1[0].name;
	team1char2.innerHTML = team1[1].name;
	team1char3.innerHTML = team1[2].name;

	team2char1.innerHTML = team2[0].name;
	team2char2.innerHTML = team2[1].name;
	team2char3.innerHTML = team2[2].name;
}

const pickColor = function(currentPlayerDiv, team, currentPlayer) { // sets character colors according to type
	if (team[currentPlayer].type == "fire") {
		currentPlayerDiv.style.backgroundColor = "#FF824C";
	} else if (team[currentPlayer].type == "water") {
		currentPlayerDiv.style.backgroundColor = "#4CDCFF";
	} else if (team[currentPlayer].type == "grass") {
		currentPlayerDiv.style.backgroundColor = "#63DC75";
	}
};

const startHPbars = function() { // setting up the HP bars at beginning of match
	current1maxHealth.innerHTML = ("/" + team1[team1Current].HP);
	current1HPbar.max = team1[team1Current].HP;
	current1HPbar.value = team1[team1Current].HP;
	current1HPbar.optimum = (team1[team1Current].HP/2)+1;
	current1HPbar.high = team1[team1Current].HP/2;
	current1HPbar.low = (team1[team1Current].HP/4)+1;

	current2maxHealth.innerHTML = ("/" + team2[team2Current].HP);
	current2HPbar.max = team2[team2Current].HP;
	current2HPbar.value = team2[team2Current].HP;
	current2HPbar.optimum = (team2[team2Current].HP/2)+1;
	current2HPbar.high = team2[team2Current].HP/2;
	current2HPbar.low = (team2[team2Current].HP/4)+1;
}

const setCurrentVisuals = function() { // updates the playing field after each attack
	currentPlayer1.innerHTML = team1[team1Current].name;
	current1health.innerHTML = team1[team1Current].HP;
	current1HPbar.value = team1[team1Current].HP;
	pickColor(currentPlayer1, team1, team1Current);

	currentPlayer2.innerHTML = team2[team2Current].name;
	current2health.innerHTML = team2[team2Current].HP;
	current2HPbar.value = team2[team2Current].HP;
	pickColor(currentPlayer2, team2, team2Current);
}

const weakList = {
    grass: ['fire'],
    fire: ['water'],
    water: ['grass']
};

const resistanceList = {
    water: ['fire', 'water'],
    grass: ['water', 'grass'],
    fire: ['grass', 'fire']
}

let critCalculator = function(damage) { // calculates critical hits

        critDisplay.innerHTML = ''
        let crit = false;

        if (Math.round(Math.random() * 100) <= 15) {
            crit = true;
        }

        if (crit == true) {
            critDisplay.innerHTML = 'It was a Critical Hit,\nthe damage dealt was doubled!'
            return damage * 2;
        } else {
            return damage;
        }
    };

const damageCalculator = function(attacker, target, ) {
    let weak = false;
    let resistant = false;
    let damage = 0;

    if (weakList[target.type].includes(attacker.type)) { // e.g., if weakList['grass'].includes('water')
        weak = true;
    }

    if (resistanceList[target.type].includes(attacker.type)) { // e.g., if resistanceList['fire'].includes('fire')
        resistant = true;
    }

    if (!weak && !resistant) {
        damage = attacker.attack;
    } else if (weak && !resistant) {
		damage = attacker.attack*2;
		addOnDisplay.innerHTML = (target.name + " takes double damage from a " + attacker.type + " type!");
    } else if (!weak && resistant) {
        damage = attacker.attack*0.5;
		addOnDisplay.innerHTML = (target.name + " resists the " + attacker.type + " attack (damage reduced by half)!");
    }
    damage = critCalculator(damage);
    return damage;
};

const turnCalculator = function() {
    if (turn === 0) {
        attack(team2[team2Current], team1[team1Current]);
        turn = 1;
		// Team 1's turn now
    } else {
        attack(team1[team1Current], team2[team2Current]);
        turn = 0;
		// Team 2's turn now
    };
};

// function for subtracting a character's HP due to an attack
const attack = function(attacker, target) {
    let damage = damageCalculator(attacker, target);
	actionDisplay.innerHTML = (attacker.name + " attacks " + target.name + "!");
	let originalHP = target.HP;
	if (originalHP > damage) {
		target.HP -= damage;
	} else if (originalHP <= damage) {
		target.HP = 0; // so HP can't go into the negatives
        if (turn === 0) {
            team1Death();
			team1Current++;
			sentOut.innerHTML = "Team 1's " + (team1[team1Current].name + " is newest on the field!");
            turn = 1;
        } else {
            team2Death();
			team2Current++;
			sentOut.innerHTML = "Team 2's " + (team2[team2Current].name + " is newest on the field!");
            turn = 0;
        };
	};
	setCurrentVisuals();
};

const attackGuy = document.querySelector('#attackGuy')
attackGuy.addEventListener("click", turnCalculator);

const chooseTeam1Button = document.querySelector('#chooseTeam1Button');
const chooseTeam2Button = document.querySelector('#chooseTeam2Button');

chooseTeam1Button.addEventListener("click", makeTeam1);
chooseTeam2Button.addEventListener("click", makeTeam2);
