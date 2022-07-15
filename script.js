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

const test = (function Gameboard() {
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
    // gameboard.forEach(field => {
    //     field.addEventListener('click', function addDisabled() {

    //         field.textContent = playerChoice; // or it can be 'O' depending on what the player picked
    //     if(field.className == '') {
    //         field.className = 'disabled';
    //     } else {
    //         field.className += ' disabled';
    //     }
    //     winCondition();

    //     field.removeEventListener('click', addDisabled);
    //     })
        
    // });
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
        if((test[i][j].textContent == test[i][j+1].textContent && 
            test[i][j+1].textContent == test[i][j+2].textContent) && 
            test[i][j].textContent != '') {
            console.log('same');
        }
    }

    // Vertical
    for (let j = 0; j < 3; j++) {
        let i = 0;
        if((test[i][j].textContent == test[i+1][j].textContent && 
            test[i+1][j].textContent == test[i+2][j].textContent) && 
            test[i][j].textContent != '') {
            console.log('same');
        }
    }

    // Diagonal
    if((test[0][0].textContent == test[1][1].textContent && test[1][1].textContent == test[2][2].textContent) || // Left to right diagonal
    (test[0][2].textContent == test[1][1].textContent && test[1][1].textContent == test[2][0].textContent)) { // Right to left diagonal
        console.log(`${test[1][1].textContent} wins`)
    }
}    