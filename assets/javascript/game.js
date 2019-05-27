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
};
//function that starts the game by assigning values to the target score and player variables

$("#SC").on("click", function() {
    currentScore += stephCurry;
});
$("#KD").on("click", function() {
    currentScore += kevinDurant;
});
$("#KT").on("click", function() {
    currentScore += klayThompson;
});
$("#DG").on("click", function() {
    currentScore += draymondGreen;
});
//key event listener functions which adds a players score value to currentScore variable on each click event


initializeGame();
console.log(target);
console.log(currentScore);
console.log(stephCurry,klayThompson,kevinDurant,draymondGreen);