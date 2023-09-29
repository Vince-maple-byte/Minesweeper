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

// let currRow = Math.floor((i) / row);
// let currCol = (i) % col;

export function createBombGrid(gameDifficulty: string): boolean[][]{
    //Creating and initializing the 2d array with a for loop since typescript doesn't do that by default
    let row: number = 0;
    let col: number = 0;
    let bombCount: number = 0;
    if(gameDifficulty.toLowerCase() === "easy"){
        row = GameDifficulty.Easy / 10;
        col = GameDifficulty.Easy / 10;
        bombCount= NumOfBombs.Easy;
    }
    if(gameDifficulty.toLowerCase() === "medium"){
        row = GameDifficulty.Medium / 14;
        col = GameDifficulty.Medium / 18;
        bombCount= NumOfBombs.Medium;
    }
    if(gameDifficulty.toLowerCase() === "hard"){
        row = GameDifficulty.Hard / 20;
        col = GameDifficulty.Hard / 24;
        bombCount= NumOfBombs.Hard;
    }
    
    let bombGrid: boolean[][] = new Array(row);

    for(let i = 0; i < row; i++){
        bombGrid[i] = new Array(col);
    }

    //Bomb Grid creation (Need to make this as an exported function)
    
    //This loop is to insert all of the bombs;
    for(let i = 0; i < bombCount; i++){
        let bombRow = Math.floor(Math.random() * row);
        let bombCol = Math.floor(Math.random() * col);

        bombGrid[bombRow][bombCol] === true ? i-- : bombGrid[bombRow][bombCol] = true;
    }

    for(let i = 0; i < row * col; i++){
        let currRow = Math.floor((i) / row);
        let currCol = (i) % col;

        if(bombGrid[currRow][currCol] != true){
            bombGrid[currRow][currCol] = false
        }
    }
    return bombGrid;
}

createBombGrid("Easy");

export function createCountGrid(gameDifficulty: string, bombGrid: boolean[][]): number[][]{
    //Creating and initializing the 2d array with a for loop since typescript doesn't do that by default
    let row: number = 0;
    let col: number = 0;
    if(gameDifficulty.toLowerCase() === "easy"){
        row = GameDifficulty.Easy / 10;
        col = GameDifficulty.Easy / 10;
    }
    if(gameDifficulty.toLowerCase() === "medium"){
        row = GameDifficulty.Medium / 14;
        col = GameDifficulty.Medium / 18;
    }
    if(gameDifficulty.toLowerCase() === "hard"){
        row = GameDifficulty.Hard / 20;
        col = GameDifficulty.Hard / 24;
    }
    let countGrid: number[][] = new Array(row);

    for(let i = 0; i < row; i++){
        countGrid[i] = new Array(col);
    }


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
    }
    return countGrid;
}