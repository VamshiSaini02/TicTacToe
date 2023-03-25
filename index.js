let currentPlayer = 'X';
let playerTurn = document.querySelector('.infoText');
let cells = document.querySelectorAll('.cell');
let playerChangeSound = new Audio('playerChange.mp3');
let winningSound = new Audio('winningSound.mp3');
let losingSound = new Audio('losingSound.mp3');
let count = 0;
let clicks = 0;
playerTurn.innerText = 'It is X Turn';
function changePlayer() {
    if (currentPlayer == 'X') {
        return currentPlayer = 'O';
    }
    else {
        return currentPlayer = 'X';
    }
}
const reset = () => {
    cells.innerText = ' ';
}

function winner(clicksCount) {
    let positions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    positions.forEach(e => {
        if ((cells[e[0]].innerText === cells[e[1]].innerText) && (cells[e[1]].innerText === cells[e[2]].innerText) && (cells[e[0]].innerText != '')) {
            let winPlayer = cells[e[0]].innerText;
            if (winPlayer.innerText != '') {
                count = count + 1;
                playerTurn.innerText = winPlayer + ' has won';
                winningSound.play();
                playerChangeSound.pause();
                currentPlayer = '';
                //document.querySelector('.img').setAttribute('src','winImage.gif');
            }
        }
    })
    if (count === 0 && clicksCount === 9) {
        playerTurn.innerText = 'No one has won';
        losingSound.play();
        winningSound.pause();
        playerChangeSound.pause();
    }
}
document.querySelector('.btn').addEventListener('click', () => {
    currentPlayer = 'X';
    playerTurn.innerText = 'It is ' + currentPlayer + ' Turn';
    Array.from(cells).forEach(element => {
        element.innerText = '';
    })

})
Array.from(cells).forEach(element => {
    element.addEventListener('click', () => {
        playerChangeSound.play();
        if (element.innerText === '') {
            clicks = clicks + 1;
            element.innerText = currentPlayer;
            changePlayer();
            playerTurn.innerText = 'It is ' + currentPlayer + ' Turn';
            winner(clicks);
        }
    }
    );
})






