const Playerclass = require('./Player');
const Boardclass = require('./Board');

class Tictactoe
{
    players = new Array(2);
    chance = 0;
    constructor()
    {
        this.players[0] = new Playerclass('x');
        this.players[1] = new Playerclass('o');
        this.board = new Boardclass();
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
        let position = this.players[currentTurn].getPosition();
        while(!this.board.validatePosition(position))
            position = this.players[currentTurn].getPosition();
        return position;
    }

    gameend() {
        if(this.board.checkwinner()) {
            console.log(this.players[this.chance % 2].getSymbol()+ "is winner");
            return true;
        }
        else if(this.board.isBoardFilled()) {
            console.log("Draw")
            return true;
        }
    }



}

var tictactoe = new Tictactoe();
tictactoe.startgame();
