class View
{

   constructor()
   {
       this.isSymbolPresent = false;
   }

   get ClickedId()
   {
      return event.target.id;
   }

   set Winner(winnerSymbol)
   {
            document.getElementById("symbol").textContent = winnerSymbol;
   }

   handleCellEvents()
   {

          for(let index=0;index<9;index++)
              document.getElementById(index).addEventListener("click", main);
   }

   placeTheSymbol(clicked_id,symbol)
   {
      this.isSymbolPresent = document.getElementById(clicked_id).textContent != "";
       if (!this.isSymbolPresent)
           document.getElementById(clicked_id).textContent = symbol;
   }

   changeTheTurn(symbol)
   {
       let X = document.getElementById("playerX")
       let O = document.getElementById("playerO")
       if (symbol == 'X' && !this.isSymbolPresent)
       {
               X.style.backgroundColor = "black";
               O.style.backgroundColor = "lightgoldenrodyellow"
       }
       else if(!this.isSymbolPresent)
       {
               X.style.backgroundColor = "lightseagreen";
               O.style.backgroundColor = "black";
       }

    }

    displayRoundWinner(symbol)
    {
        document.getElementById("winnerSymbol").textContent = symbol;
        let result = document.getElementById("winner");
        result.style.display = "block";
    }

    updateScore(symbol,score)
    {
        if (symbol == 'X')
          document.getElementById("scoreX").innerHTML = score;

        else if (symbol == 'O')
           document.getElementById("scoreY").innerHTML = score;
   }

    displayDraw()
    {
           let result = document.getElementById("draw");
           result.style.display="block";
    }

    resetPlayers()
    {
            let X = document.getElementById("playerX");
            let O = document.getElementById("playerO");
            X.style.backgroundColor = "teal";
            O.style.backgroundColor = "black";
    }

    resetGrid()
    {
            document.getElementById("winnerSymbol").textContent = '';
            for (var index = 0; index < 9; index++)
                document.getElementById(index).innerHTML = "";
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

    disableClickEvents()
    {
       for(let index = 0;index < 9;index++)
        document.getElementById(index).style.pointerEvents = 'none';
    }

    enableClickEvents()
    {
         for(let index = 0;index < 9;index++)
            document.getElementById(index).style.pointerEvents = 'auto';
    }

}