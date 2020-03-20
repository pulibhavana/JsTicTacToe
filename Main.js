let ticTacToe = new TicTacToe();
let board = new Board();

for(let index=0;index<9;index++)
    document.getElementById(index).addEventListener("click", main)

function main()
{
    let clicked_id = event.target.id;
    board.placeTheSymbol(clicked_id,ticTacToe.chance);
    ticTacToe.changeTheTurn();
    if(ticTacToe.checkWinner())
    {
        ticTacToe.displayRoundWinner();
        ticTacToe.updateScore();
        return;
    }

    else if(ticTacToe.chance == 9)
        ticTacToe.displayDraw()

}

function resetGame()
{
    ticTacToe.resetPlayers();
    ticTacToe.resetBoard();
    ticTacToe.hideTheResult();
}

function finalResult()
{
    ticTacToe.updateWinner();
    ticTacToe.displayGameWinner();
}
