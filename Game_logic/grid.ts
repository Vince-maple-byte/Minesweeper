//These enums are being used to store the default game size and Number of bombs
//Based on the Difficulty of Easy, Medium, and Hard
enum GameDifficulty {
    Easy = 100, //This is going to be 10x10
    Medium = 252, //This is going to be 14x18
    Hard = 480 //This is going to be 20x24
}

enum NumOfBombs {
    Easy = 10,
    Medium = 40,
    Hard = 100
}

//Creating and initializing the 2d array with a for loop since typescript doesn't do that by default
let row: number = GameDifficulty.Easy / 10;
let col: number = GameDifficulty.Easy / 10;
let countGrid: number[][] = new Array(row);
let bombGrid: boolean[][] = new Array(row);

for(let i = 0; i < row; i++){
    bombGrid[i] = new Array(col);
    countGrid[i] = new Array(col);
}

//Bomb Grid creation (Need to make this as an exported function)
let bombCount: number = NumOfBombs.Easy;
//This loop is to insert all of the bombs;
for(let i = 0; i < bombCount; i++){
    let bombRow = Math.floor(Math.random() * row);
    let bombCol = Math.floor(Math.random() * col);

    if(bombGrid[bombRow][bombCol] === true){
        i--;
    } 
    else{
        bombGrid[bombRow][bombCol] = true;
    }
}

let count: number = 0;
for(let i = 0; i < row * col; i++){
    let currRow = Math.floor((i) / row);
    let currCol = (i) % col;

    bombGrid[currRow][currCol] != true ? bombGrid[currRow][currCol] = false : count++;
    console.log(`Element ${currRow},${currCol} is ${bombGrid[currRow][currCol]}`);
}
console.log(`Number of bombs are ${count}`);
// let currRow = Math.floor((i) / row);
// let currCol = (i) % col;

//Created the count grid here

for(let i = 0; i < row * col; i++){
    let currRow = Math.floor((i) / row);
    let currCol = (i) % col;
    let count: number = 0;

    if(bombGrid[currRow][currCol] == true){
        continue;
    }
    if(currRow != 0 && bombGrid[currRow-1][currCol] == true){
        count++;
    }
    if(currRow != row-1 && bombGrid[currRow+1][currCol] == true){
        count++;
    }
    if(currCol != 0 && bombGrid[currRow][currCol-1] == true){
        count++;
    }
    if(currCol != col-1 && bombGrid[currRow][currCol+1] == true){
        count++;
    }
    if((currRow != 0 && currCol != 0) && bombGrid[currRow-1][currCol-1] == true){
        count++;
    }
    if((currRow != row-1 && currCol != 0) && bombGrid[currRow+1][currCol-1] == true){
        count++;
    }
    if((currRow != 0 && currCol != col-1) && bombGrid[currRow-1][currCol+1]){
        count++;
    }
    if((currRow != row-1 && currCol != col-1) && bombGrid[currRow+1][currCol+1]){
        count++;
    }
    countGrid[currRow][currCol] = count; 
    console.log(`This is the count for element ${currRow},${currCol}: ${count}`);
}
