
class Board
{
    constructor()
    {
       this.grid = new Array(9);
    }

    storeTheSymbol(index,symbol)
    {
       this.grid[index] = symbol;
    }

     checkWinner(winningPositions)
     {
           return (winningPositions.some(element => this.grid[element[0]] == this.grid[element[1]]
           && this.grid[element[1]]== this.grid[element[2]] && this.grid[element[0]]!= undefined));
     }

     isBoardEmpty()
     {
         return this.grid.includes(undefined);
     }

     resetBoard()
     {
         for(let i = 0;i<9;i++)
            this.grid[i] = undefined;
     }

}

