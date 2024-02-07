const gameVariables = require('./game-variables.js');

let getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return userInput;
};

let getComputerChoice = () => {
    const computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "infinite power") {
        return gameVariables.secretMessage;
    }

    if (userChoice === computerChoice) {
        return gameVariables.tieMessage;
    }

    if (userChoice === "rock") {
        return computerChoice === "paper" ? gameVariables.lossMessage : gameVariables.winMessage;
    }

    if (userChoice === "paper") {
        return computerChoice === "scissors" ? gameVariables.lossMessage : gameVariables.winMessage;
    }

    if (userChoice === "scissors") {
        return computerChoice === "rock" ? gameVariables.lossMessage : gameVariables.winMessage;
    }

};

playGame = userInput => {
    userChoice = getUserChoice(userInput);
    if (gameVariables.validChoices.includes(userChoice)) {
        computerChoice = getComputerChoice();
        console.log(`YOUR ${userChoice} against HIS ${computerChoice}`)
        //setting timeout to add some drama
        setTimeout(() => {
            console.log(determineWinner(userChoice, computerChoice));
        }, 1000);
    } else {
        console.log("We can't start this game until you choose a valid weapon");
    }
};

//type your choice in here
playGame("choose your weapon");