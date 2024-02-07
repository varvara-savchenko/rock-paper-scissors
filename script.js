const lossMessage = "Yay, machine has beated you!";
const winMessage = "You won, humanity is proud! <3";
const tieMessage = "Tie (too boring, try again).";
const validChoices = ["rock", "paper", "scissors", "infinite power"];

let getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return validChoices.includes(userInput) ? userInput : "Please choose the right weapon: rock, paper or scissors";
};

let getComputerChoice = () => {
    const computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
            break;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "infinite power") {
        return "Oh no! Who told you the cheat code? I'm brrrroook01010101#";
    }

    if (userChoice === computerChoice) {
        return tieMessage;
    }

    if (userChoice === "rock") {
        return computerChoice === "paper" ? lossMessage : winMessage;
    }

    if (userChoice === "paper") {
        return computerChoice === "scissors" ? lossMessage : winMessage;
    }

    if (userChoice === "scissors") {
        return computerChoice === "rock" ? lossMessage : winMessage;
    }

};

playGame = () => {
    userChoice = getUserChoice("choose the weapon"); //type your choice in here
    if (validChoices.includes(userChoice)) {
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

playGame();
