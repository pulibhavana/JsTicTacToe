
class TicTacToe
{
    constructor()
    {
        this.chance = 0;
        this.winningPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]];
        this.board1 = new Board();
    }



    changeTheTurn()
    {
        this.chance++;
        let X = document.getElementById("playerX")
        let O = document.getElementById("playerO")
        if (this.chance % 2 == 1)
        {
            X.style.backgroundColor = "black";
            O.style.backgroundColor = "lightgoldenrodyellow"
        }
        else {
            X.style.backgroundColor = "lightseagreen";
            O.style.backgroundColor = "black";
        }

    }

    displayRoundWinner()
    {
        if (this.chance % 2 == 0)
            document.getElementById("winnerSymbol").textContent = 'O';

        else
            document.getElementById("winnerSymbol").textContent = 'X';
        let result = document.getElementById("winner");
        result.style.display = "block";
    }

    displayDraw()
    {
        let result = document.getElementById("draw");
        result.style.display="block";
    }


    checkWinner()
    {
        return (this.winningPositions.some(this.board1.isSameSymbol));
    }



    updateScore()
    {
        let winner = document.getElementById("winnerSymbol");
        let value = winner.textContent;
        if (value == 'X') {
            var X = document.getElementById("scoreX");
            X.innerHTML = ++X.innerHTML;
        } else if (value == 'O') {
            var O = document.getElementById("scoreY");
            O.innerHTML = ++O.innerHTML;
        }
    }


    resetPlayers()
    {
        let X = document.getElementById("playerX");
        let O = document.getElementById("playerO");
        X.style.backgroundColor = "teal";
        O.style.backgroundColor = "black";
    }

    resetBoard()
    {
        document.getElementById("winnerSymbol").textContent = '';
        this.chance = 0;
        for (var i = 0; i < 9; i++)
            document.getElementById(i).innerHTML = "";
    }

    hideTheResult()
    {
        let result = document.getElementById("winner");
        result.style.display = "none";

        let draw = document.getElementById("draw");
        draw.style.display = "none "
    }

    displayGameWinner()
    {
        document.getElementById("winner").style.display ="none";
        document.getElementById("draw").style.display ="none";
        let finalResult = document.getElementById("gameWinner");
        finalResult.style.display = "block";

    }

    updateWinner()
    {
        let score1 = document.getElementById("scoreX").textContent;
        let score2 = document.getElementById("scoreY").textContent;
        if(score1 > score2)
            document.getElementById("symbol").textContent = 'X'
        else if(score2>score1)
            document.getElementById("symbol").textContent = 'O';
        else
            document.getElementById("symbol").textContent = 'DRAW';
    }



}

