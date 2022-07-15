const buttons = document.querySelectorAll('.btn');

let playerChoice = 'X';
buttons.forEach(button => {
    button.addEventListener('click', () => { 
        if(button.textContent == 'X') {
            playerChoice = 'X';
        } else {
            playerChoice = 'O';
        }
    })
});

const gameArea = (function Gameboard() {
    let gameboard = [];

    let gameClass = document.querySelector('.game');
    
    for (let i = 0; i < 3; i++) {

        gameboard[i] = [];

        for (let j = 0; j < 3; j++) {
            const square = document.createElement('div');
            
            gameboard[i].push(square);

            gameClass.appendChild(square);
            
            square.addEventListener('click', addDisabled);

            // Used to add the lines
            if ((i == 0 && j == 1) || (i == 2 && j == 1)) {
                square.className = 'left-right';
            } else if ((i == 1 && j == 0) || (i == 1 && j == 2)) {
                square.className = 'up-down';
            } else if (i == 1 && j == 1) {
                square.className = 'all-around';
            }
        }
    }
    console.log(gameboard);

    return gameboard;
})();

function addDisabled() {

    this.textContent = playerChoice; // 'X' or 'O' depending on what the player picks
    if(this.className == '') {
        this.className = 'disabled';
    } else {
        this.className += ' disabled';
    }
    
    // winCondition(); <--- THIS DOESNT GO HERE
    this.removeEventListener('click', addDisabled);

}

function turns() {
    
}

const Players = (name) => {
    const sayName = () => console.log(`Hello ${name}`);
    return {sayName};
}

function Gameflow() {

}

function winCondition() {
    
    // Horizontal
    for (let i = 0; i < 3; i++) {
        let j = 0;
        if((gameArea[i][j].textContent == gameArea[i][j+1].textContent && 
            gameArea[i][j+1].textContent == gameArea[i][j+2].textContent) && 
            gameArea[i][j].textContent != '') 
        {
            console.log(gameArea[i][j].textContent);
            printWinner(gameArea[i][j]);

        }
    }

    // Vertical
    for (let j = 0; j < 3; j++) {
        let i = 0;
        if((gameArea[i][j].textContent == gameArea[i+1][j].textContent && 
            gameArea[i+1][j].textContent == gameArea[i+2][j].textContent) && 
            gameArea[i][j].textContent != '') 
        {
            console.log(gameArea[i][j].textContent);
            printWinner(gameArea[i][j]);

        }
    }

    // Diagonal
    if((gameArea[0][0].textContent == gameArea[1][1].textContent && gameArea[1][1].textContent == gameArea[2][2].textContent) || // Left to right diagonal
    (gameArea[0][2].textContent == gameArea[1][1].textContent && gameArea[1][1].textContent == gameArea[2][0].textContent)) // Right to left diagonal
    { 
        console.log(gameArea[1][1].textContent);
        printWinner(gameArea[1][1]);

    }

}

function printWinner(e) {
    const printArea = document.getElementById('winner-area');
    printArea.textContent = `${e.textContent} wins!`;
}

const reset = document.getElementById('reset');
reset.addEventListener('click', restart);

function restart() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameArea[i][j].textContent = '';
        }
    }
}

// TODO: 
// 1) Clean up the interface to allow players to put in their names, 
// 2) include a button to start/restart the game (DONE)
// 3) add a display element that congratulates the winning player! (DONE)