let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameover = false;

const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(cell) {
    if (gameover || board[cell] !== "") return;
    board[cell] = currentPlayer;
    document.getElementsByClassName("cell")[cell].innerHTML = currentPlayer;
    if (checkWinner(currentPlayer)) {
        document.getElementById("message").innerHTML = `Player ${currentPlayer} wins!`;
        gameover = true;
    } else if (!board.includes("")) {
        document.getElementById("message").innerHTML = "It's a draw!";
        gameover = true;
    } else {
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
    }
}

function checkWinner(player) {
    return winCombos.some(combo => {
        return combo.every(index => board[index] === player);
    });
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameover = false;
    document.getElementById("message").innerHTML = "";
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
}
