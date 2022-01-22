// ** 3 Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this // function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
//console.log("let computer select its choice");
//let computerPlay = () => Math.floor(Math.random()*3)+1;  //this is usefull but when I call it before declaration it does not work
//let computerChoice = computerPlay();
//let player2Selection = convertChoice(computerChoice); // player2Choice variable is used to hold computer choice
//let player2Selection = computerPlay();
//console.log('computer has choosen: ' + player2Selection);
//let userChoice = window.prompt('Please 1 for Rock, 2 for Scissors and 3 for Paper');
//let player1Choice = 3;
// let player1Selection = convertChoice(player1Choice);
// console.log('player1 has choosen: ' + player1Selection);
// let result = playRound(player1Selection,player2Selection);
// console.log('round result: '+ result);

console.log('lets play rock paper scissors');
game();
function game(){
    let player1score = 0; 
    let player2score = 0;
    for(let index=0; index<5; index++){
        console.log('round number: '+ (index+1));
        let roundResult = playRound();
        console.log(`round ${index+1} result: ${roundResult}`);
        console.log('=========================');
        console.log('\n');
        let scoreBoard = sb(roundResult)
        player1score = scoreBoard[0];
        player2score = scoreBoard[1];
    }
    (player1score==player2score)?console.log('The game is draw'):(player1score>player2score)?console.log('Player 1 wins the game'):console.log('Player 2 wins the game');        

    

}


//**playRound function play round of game and declare a result*/
function playRound(){
    let player2Selection = computerPlay();
    console.log('computer has choosen: ' + player2Selection);
    let player1Choice = 3;
    let player1Selection = convertChoice(player1Choice);
    console.log('player1 has choosen: ' + player1Selection);
    let result = getResult(player1Selection,player2Selection);
    return result;
}

// ** function to make computer do its choice number between 1 to 3
function computerPlay() {
    return convertChoice(Math.floor(Math.random()*3)+1);
    //return Math.floor(Math.random()*3)+1;
}

//make a helper function that converts number to string 1 for Rock, 2 for Scissors and 3 for Paper
function convertChoice (Choice) {
    switch (Choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper'
            break;
        case 3:
            return 'scissors';
            break;
        default:
            break;
    }
    
}

//** funtion to check results */
//checkresult(player1Choice, player2Choice);
function getResult(p1Choice, p2Choice) {
    switch (p1Choice) {
        case 'rock':
            switch (p2Choice) {
                case 'rock':
                    return 'It is a draw';
                    break;
                case 'paper':
                    return 'Player 2 wins!';
                    break;
                case 'scissors':
                    return 'Player 1 wins';
                    break;
                default:
                    break;
            }
            break;
        case 'paper':
            switch (p2Choice) {
                case 'rock':
                    return 'Player 1 wins';
                    break;
                case 'paper':
                    return 'It is a draw';
                    break;
                case 'scissors':
                    return 'Player 2 wins!';
                    break;
                default:
                    break;
            }
            break;
        case 'scissors':
            switch (p2Choice) {
                case 'rock':
                    return 'Player 2 wins!';
                    break;
                case 'paper':
                    return 'Player 1 wins';
                    break;
                case 'scissors':
                    return 'It is a draw';
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

//**Scoreboard */
function sb(rResult){
    let p1Score = 0;
    let p2Score = 0;
    switch (rResult) {
        case 'Player 1 wins':
            p1score += 1;
            break;
        case 'Player 2 wins!':
            p2score +=1;
            break;
        case 'It is a draw':
            player1score += 1;
            player2score += 1;
            break;
        default:
            break;
    }
    return [p1Score, p2Score];
}