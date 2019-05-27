var target;

var stephCurry;
var kevinDurant;
var klayThompson;
var draymondGreen;
//empty variables which will contain randomly generated values

var currentScore = 0;

var wins = 0;
var losses = 0;
//variables set to 0 which will be updated throughout the game


var generateTargetNum = () => {
    return Math.ceil(Math.random() * (120-19)) + 19;
};
//function that generates a random number from 19-120 which will serve as the target number user will have to reach without exceeding in order to register a win

var generatePlayerNum = () => {
    return Math.ceil(Math.random() * 12);
};
//function that generates a random number from 1-12 which will be assigned to each character individually at the beginning of each turn

var intializeGame = () => {
    target = generateTargetNum();
    stephCurry = generatePlayerNum();
    kevinDurant = generatePlayerNum();
    klayThompson = generatePlayerNum();
    draymondGreen = generatePlayerNum();
    refreshScore();
    refreshTargetScore();
    updateWins();
};
//function that starts the game by assigning values to the target score and player variables and displays target score,current score, wins, and losses

var refreshScore = () => {
    $("#current-score").text("Current Score: " + currentScore);
};
//function that utilizes JQuery to display/update currentScore variable on DOM at #current-score div id and refreshes every time game is intialized

var refreshTargetScore = () => {
    $("#score").text("Target Score: " + target);
};
//function that utilizes JQuery to display/update targetScore variable on DOM at #score div id and refreshes every time game is initialized

var updateWins = () => {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
};
//function that utilizes JQuery to display/update wins/losses variables on DOM at their respective div id's

var checkScore = () => {
    if (currentScore > target) {
        alert("You lose!");
        losses++;
        updateWins();
    } else if (currentScore === target) {
        alert("You win!");
        wins++;
        updateWins();
    }
};
//function that determines if a player has won or lost depending on the comparison of the currentScore variable to the target number variable, player will be notified with alert depending on outcome and a win or loss will be incremented to the corresponding variable


$("#SC").on("click", function() {
    currentScore += stephCurry;
    refreshScore();
    checkScore();
});
$("#KD").on("click", function() {
    currentScore += kevinDurant;
    refreshScore();
    checkScore();
});
$("#KT").on("click", function() {
    currentScore += klayThompson;
    refreshScore();
    checkScore();
});
$("#DG").on("click", function() {
    currentScore += draymondGreen;
    refreshScore();
    checkScore();
});
//key event listener functions which adds a players score value to currentScore variable on each click event and determines if the target score has been reached or exceeded


initializeGame();
console.log(target);
console.log(currentScore);
console.log(stephCurry,klayThompson,kevinDurant,draymondGreen);