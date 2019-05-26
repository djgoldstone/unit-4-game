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