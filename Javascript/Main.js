let ticTacToe = new TicTacToe();
let board = new Board();
let view = new View();

view.handleCellEvents();
let currentPlayer,clicked_id;

function main()
{
    currentPlayer = ticTacToe.CurrentPlayer;
    clicked_id = view.ClickedId;
    symbol = currentPlayer.Symbol;

    view.placeTheSymbol(clicked_id,symbol);
    board.storeTheSymbol(clicked_id,symbol);

    if(board.checkWinner(ticTacToe.winningPositions))
    {
            ticTacToe.WinnerSymbol = symbol;
            view.displayRoundWinner(ticTacToe.WinnerSymbol);
            currentPlayer.Score = currentPlayer.score;
            view.updateScore(symbol,currentPlayer.Score);
            view.disableClickEvents();
    }

    else if(!board.isBoardEmpty())
        view.displayDraw();

    view.changeTheTurn(symbol);
    ticTacToe.updateCurrentPlayer();
}

function resetGame()
{
    view.resetPlayers();
    view.resetGrid();
    board.resetBoard();
    ticTacToe.reset();
    view.hideTheResult();
    view.enableClickEvents();
}

function finalResult()
{
    view.Winner = ticTacToe.WinnerSymbol;
    view.displayGameWinner();
}


