var target;

var stephCurry;
var kevinDurant;
var klayThompson;
var draymondGreen;

var currentScore = 0;

var wins = 0;
var losses = 0;

var generateTargetNum = () => {
    return Math.ceil(Math.random() * (120-19)) + 19;
};

var generatePlayerNum = () => {
    return Math.ceil(Math.random() * 12);
};

var intializeGame = () => {
    target = generateTargetNum();
    stephCurry = generatePlayerNum();
    kevinDurant = generatePlayerNum();
    klayThompson = generatePlayerNum();
    draymondGreen = generatePlayerNum();
};

initializeGame();
console.log(target);
console.log(stephCurry,klayThompson,kevinDurant,draymondGreen);