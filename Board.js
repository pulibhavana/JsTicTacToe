
class Board
{
    winningpositions = [[0,1,2],[3,4,5],[6,7,8],
                        [0,3,6],[1,4,7],[2,5,8],
                        [0,4,8],[2,4,6]];

    grid = new Array(9);

   validatePosition(position)
   {
       return this.grid[position] == null;
   }

   placethesymbol(position,symbol)
   {
       this.grid[position] = symbol;
   }

   checkwinner()
   {

       return (this.winningpositions.some(element => this.grid[element[0]] == this.grid[element[1]]
       && this.grid[element[1]]== this.grid[element[2]] && this.grid[element[0]]!= undefined));
   }

   isBoardFilled()
   {
       return !this.grid.includes(undefined);
   }

}

module.exports = Board;