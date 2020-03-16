const Player = require('./Player');
const Board = require('./Board');
const prompt = require('prompt-sync')()


class Tictactoe
{
   players = new Array(2);
   constructor()
   {
        this.players[0] = new Player('x');
        this.players[1] = new Player('o');
        this.winningpositions = [[0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]];
        this.board = new Board();
        this.chance = 0;
   }

    startgame() {
        while(!this.board.isBoardFilled()) {
            let position = this.play(this.chance%2);
            this.board.placethesymbol(position,this.players[this.chance % 2].getSymbol());
            if(this.gameend()) break;
            this.chance = this.chance+1;
        }
    }

    play(currentTurn)
    {
        let position = prompt(this.players[currentTurn].getSymbol() + " enter your position");
        while(!this.board.validatePosition(position))
            position = this.players[currentTurn].getPosition();
        return position;
    }

    gameend() {
        if(this.board.checkwinner(this.winningpositions)) {
            console.log(this.players[this.chance % 2].getSymbol()+ "is winner");
            return true;
        }
        else if(this.board.isBoardFilled()) {
            console.log("Draw")
            return true;
        }
    }



}

let tictactoe = new Tictactoe();
tictactoe.startgame();


