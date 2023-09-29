"use strict";
//These enums are being used to store the default game size and Number of bombs
//Based on the Difficulty of Easy, Medium, and Hard
var GameDifficulty;
(function (GameDifficulty) {
    GameDifficulty[GameDifficulty["Easy"] = 100] = "Easy";
    GameDifficulty[GameDifficulty["Medium"] = 252] = "Medium";
    GameDifficulty[GameDifficulty["Hard"] = 480] = "Hard"; //This is going to be 20x24
})(GameDifficulty || (GameDifficulty = {}));
var NumOfBombs;
(function (NumOfBombs) {
    NumOfBombs[NumOfBombs["Easy"] = 10] = "Easy";
    NumOfBombs[NumOfBombs["Medium"] = 40] = "Medium";
    NumOfBombs[NumOfBombs["Hard"] = 100] = "Hard";
})(NumOfBombs || (NumOfBombs = {}));
//Creating and initializing the 2d array with a for loop since typescript doesn't do that by default
let row = GameDifficulty.Easy / 10;
let col = GameDifficulty.Easy / 10;
let countGrid = new Array(row);
let bombGrid = new Array(row);
for (let i = 0; i < row; i++) {
    bombGrid[i] = new Array(col);
    countGrid[i] = new Array(col);
}
//Bomb Grid creation (Need to make this as an exported function)
let bombCount = NumOfBombs.Easy;
//This loop is to insert all of the bombs;
for (let i = 0; i < bombCount; i++) {
    let bombRow = Math.floor(Math.random() * row);
    let bombCol = Math.floor(Math.random() * col);
    if (bombGrid[bombRow][bombCol] === true) {
        i--;
    }
    else {
        bombGrid[bombRow][bombCol] = true;
    }
}
let count = 0;
for (let i = 0; i < row * col; i++) {
    let currRow = Math.floor((i) / row);
    let currCol = (i) % col;
    bombGrid[currRow][currCol] != true ? bombGrid[currRow][currCol] = false : count++;
    console.log(`Element ${currRow},${currCol} is ${bombGrid[currRow][currCol]}`);
}
console.log(`Number of bombs are ${count}`);
// let currRow = Math.floor((i) / row);
// let currCol = (i) % col;
//Created the count grid here
for (let i = 0; i < row * col; i++) {
    let currRow = Math.floor((i) / row);
    let currCol = (i) % col;
    let count = 0;
    if (bombGrid[currRow][currCol] == true) {
        continue;
    }
    if (currRow != 0 && bombGrid[currRow - 1][currCol] == true) {
        count++;
    }
    if (currRow != row - 1 && bombGrid[currRow + 1][currCol] == true) {
        count++;
    }
    if (currCol != 0 && bombGrid[currRow][currCol - 1] == true) {
        count++;
    }
    if (currCol != col - 1 && bombGrid[currRow][currCol + 1] == true) {
        count++;
    }
    if ((currRow != 0 && currCol != 0) && bombGrid[currRow - 1][currCol - 1] == true) {
        count++;
    }
    if ((currRow != row - 1 && currCol != 0) && bombGrid[currRow + 1][currCol - 1] == true) {
        count++;
    }
    if ((currRow != 0 && currCol != col - 1) && bombGrid[currRow - 1][currCol + 1]) {
        count++;
    }
    if ((currRow != row - 1 && currCol != col - 1) && bombGrid[currRow + 1][currCol + 1]) {
        count++;
    }
    countGrid[currRow][currCol] = count;
    console.log(`This is the count for element ${currRow},${currCol}: ${count}`);
}
