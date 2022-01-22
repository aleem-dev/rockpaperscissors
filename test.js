// then ask user if another round?
//document.write('hello world in html');
let player1Choice = 'rock';
//let player1Choice = 'paper';
//let player1Choice = 'scissors';
let player2Choice = 'rock';
//let player2Choice = 'paper';
//let player2Choice = 'scissors';
//console.log('variable declaration is fine, and function call made');


//** funtion to check results */
checkresult(player1Choice, player2Choice);
function checkresult(p1Choice, p2Choice) {
    console.log('function is checking results');
    switch (p1Choice) {
        case 'rock':
            console.log('player 1 choose: rock');
            switch (p2Choice) {
                case 'rock':
                    console.log('player 2 choose: rock');
                    console.log('It is a draw');
                    break;
                case 'paper':
                    console.log('player 2 choose: paper');
                    console.log('Player 2 wins!');
                    break;
                case 'scissors':
                    console.log('player 2 choose: scissors');
                    console.log('Player 1 wins');
                    break;
                default:
                    break;
            }
            break;
        case 'paper':
            console.log('player 1 choose: paper');
            switch (p2Choice) {
                case 'rock':
                    console.log('player 2 choose: rock');
                    console.log('Player 1 wins');
                    break;
                case 'paper':
                    console.log('player 2 choose: paper');
                    console.log('It is a draw');
                    break;
                case 'scissors':
                    console.log('player 2 choose: scissors');
                    console.log('Player 2 wins!');
                    break;
                default:
                    break;
            }
            break;
        case 'scissors':
            console.log('player 1 choose: scissors');
            switch (p2Choice) {
                case 'rock':
                    console.log('player 2 choose: rock');
                    console.log('Player 2 wins!');
                    break;
                case 'paper':
                    console.log('player 2 choose: paper');
                    console.log('Player 1 wins');
                    break;
                case 'scissors':
                    console.log('player 2 choose: scissors');
                    console.log('It is a draw');
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    console.log('results are out');
}
console.log('end of file');
