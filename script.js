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

    gameboard = document.querySelectorAll('.game div');

    gameboard.forEach(field => {
        field.addEventListener('click', function addDisabled() {

            field.textContent = playerChoice; // or it can be 'O' depending on what the player picked
        if(field.className == '') {
            field.className = 'disabled';
        } else {
            field.className += ' disabled';
        }
        field.removeEventListener('click', addDisabled);
        })
    });

    return gameboard;
})();

const Players = (name) => {
    const sayName = () => console.log(`Hello ${name}`);
    return {sayName};
}

function Gameflow() {

}