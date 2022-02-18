//**Scoreboard method update the playres score for each match and returns the array */
function scoreBoard(rResult){
    let p1score = 0;
    let p2score = 0;
    switch (rResult) {
        case 'Player 1 wins!':
            p1score += 1;
            break;
        case 'Player 2 wins!':
            p2score +=1;
            break;
        case 'It is a draw!':
            p1score += 0.5;
            p2score += 0.5;
            break;
        default:
            break;
        }
    return [p1score, p2score];
}





//** funtion to check results */
function getResult(p1Choice, p2Choice) {
    switch (p1Choice) {
        case 'rock':
        switch (p2Choice) {
            case 'rock':
                return 'It is a draw!';
                break;
            case 'paper':
                return 'Player 2 wins!';
                break;
            case 'scissors':
                return 'Player 1 wins!';
                break;
            default:
                break;
            }
        break;
        case 'paper':
        switch (p2Choice) {
            case 'rock':
                return 'Player 1 wins!';
                break;
            case 'paper':
                return 'It is a draw!';
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
                return 'Player 1 wins!';
                break;
            case 'scissors':
                return 'It is a draw!';
                break;
            default:
            break;
            }
        break;
        default:
        break;
    }
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

//**player1Play() is getting player1 input from command line */
function player1Play(btnValue) {
    //return convertChoice(parseInt(prompt('Please type 1 for Rock, 2 for Scissors and 3 for Paper')));
    //return convertChoice(parseInt('1'));
    return convertChoice(parseInt(btnValue));
}

// ** function to make computer do its choice number between 1 to 3
function computerPlay() {
    return convertChoice(Math.floor(Math.random()*3)+1);
}

//**playRound function play round of game and declare a result*/
function playRound(btnValue){
    const userChoice = document.querySelector('.userChoice');
    const computerChoice = document.querySelector('.computerChoice');
    let player2Selection = computerPlay();
    let player1Selection = player1Play(btnValue);
    console.log('player1 has choosen: ' + player1Selection);
userChoice.textContent = player1Selection;
console.log('computer has choosen: ' + player2Selection);
computerChoice.textContent = player2Selection;
let result = getResult(player1Selection,player2Selection);
return result;
}


//**game function runs the round for 5 times */
function game(btnValue){
    const roundResultP= document.querySelector('.roundResult');
    roundResultP.innerHTML = '';
    //let buff='';
    // let player1score = 0; 
    // let player2score = 0;
    let index=roundCount-1;
    // for(let index=0; index<1; index++){
        console.log('round number: '+ (index+1));
        //buff += '\n round number: '+ (index+1);
        //roundResultP.innerHTML += '\n round number: '+ (index+1);
        let roundResult = playRound(btnValue);
        console.log(`round ${index+1} result: ${roundResult}`);
        buff += `<p>Round ${index+1} result: ${roundResult}</p>`;
        roundResultP.innerHTML += `${roundResult}`;
        console.log('==');
        //buff += '\n';
        console.log('\n');
        let score = scoreBoard(roundResult)
        player1score += score[0];
        player2score += score[1];
        if (roundCount==5) {
            playGame();
        }
    // }
    // console.log(`player 1 score: ${player1score}, player 2 score: ${player2score}`)+ '\n';
    // buff += `\n player 1 score: ${player1score}, player 2 score: ${player2score}`;
    // board.textContent = buff;
    // (player1score==player2score)?console.log('The game is draw'):(player1score>player2score)?console.log('Player 1 wins the game'):console.log('Player 2 wins the game');        
}

const containerdiv = document.querySelector('.container');
const scoreBoarddiv = document.querySelector('.scoreBoard');
const board = document.querySelector('.board');
let roundCount = 0;
let player1score = 0; 
let player2score = 0;
let buff='';
var buttons = document.querySelectorAll('button');
const roundNumSpan = document.querySelectorAll('.roundNum');
//console.log(roundNumSpan[0]);
//console.log(roundNumSpan[1]);
console.log(buttons);
buttons.forEach(btn => btn.addEventListener('click',()=>{playGame(btn.value);})); 

function playGame(btnValue){
    if(roundCount<5){
        console.log('user input: '+ btnValue);
        roundNumSpan[0].innerText = roundCount+1;
        roundNumSpan[1].innerText = roundCount+1;
        roundCount +=1;
        console.log('round count: '+ roundCount + " from play game");
        game(btnValue);
        board.innerHTML = buff;
    }
    else{
        containerdiv.removeChild(document.querySelector('.round1'));
        containerdiv.removeChild(document.querySelector('.userInput'));
        containerdiv.removeChild(document.querySelector('.choices'));
        scoreBoarddiv.removeChild(document.querySelector('.roundResult'));
        scoreBoarddiv.removeChild(document.querySelector('.round2'));
        //container userInput
        //container choices
        //scoreBoard roundNum
        //scoreBoard roundResult
        console.log('game over');
        console.log(`player 1 score: ${player1score}, player 2 score: ${player2score}`)+ '\n';
        buff += `\n Player 1 score: ${player1score}, Player 2 score: ${player2score}`;
        //(player1score==player2score)?console.log('The game is draw'):(player1score>player2score)?console.log('Player 1 wins the game'):console.log('Player 2 wins the game');        
        (player1score==player2score)?buff+='<p>The game is draw</p>':(player1score>player2score)?buff+='<p>Player 1 wins the game</p>':buff+='<p>Player 2 wins the game</p>';
        board.innerHTML = buff;
        buttons.forEach(btn => btn.removeEventListener('click',()=>{})); 
        btn = document.createElement('button');
        btn.innerText = 'Play again';
        btn.addEventListener('click',()=>{location.reload()});
        div = document.createElement('div');
        div.appendChild(btn);
        scoreBoarddiv.appendChild(div);

    }
}

//console.log('lets play rock paper scissors');
//game();
// var buttons = document.querySelectorAll('button');
// console.log(buttons);
// buttons.forEach(btn => btn.addEventListener('click',()=>{game(btn.value);}));

//CALL THE GAME FUNCTION ONLY WHEN THE COUNT OF ROUND IS LESS THEN OR EQUAL TO 5