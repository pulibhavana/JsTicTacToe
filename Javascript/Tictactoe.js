
class TicTacToe
{
    constructor()
    {
        this.winningPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]];
        this.player1 = new Player('X');
        this.player2 = new Player('O');
        this.currentPlayer = this.player1;
        this.winnerSymbol = '';
    }

    updateCurrentPlayer()
    {
      (this.currentPlayer == this.player1)?(this.currentPlayer = this.player2):(this.currentPlayer = this.player1);
    }

    get CurrentPlayer()
    {
        return this.currentPlayer;
    }

    set WinnerSymbol(value)
    {
        this.winnerSymbol = value;
    }

    get WinnerSymbol()
    {
         return this.winnerSymbol;
    }

    get WinningPositions()
    {
          return this.winningPositions;
    }

    reset()
    {
        this.currentPlayer = this.player1;
    }


}



