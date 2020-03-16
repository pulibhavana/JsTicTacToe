
class Board
{
    constructor() {
        this.grid = new Array(9);
    }

   validatePosition(position)
   {
       return this.grid[position] == null;
   }

   placethesymbol(position,symbol)
   {
       this.grid[position] = symbol;
   }

   checkwinner(winningpositions)
   {

       return (winningpositions.some(element => this.grid[element[0]] == this.grid[element[1]]
       && this.grid[element[1]]== this.grid[element[2]] && this.grid[element[0]]!= undefined));
   }

   isBoardFilled()
   {
       return !this.grid.includes(undefined);
   }

}

module.exports = Board;