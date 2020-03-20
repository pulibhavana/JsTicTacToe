
class Board {

    placeTheSymbol(clicked_id,chance)
    {
        let isSymbolPresent = document.getElementById(clicked_id).textContent == "";

        if (chance % 2 == 0 && isSymbolPresent)
            document.getElementById(clicked_id).textContent = "X";

        else if (isSymbolPresent)
            document.getElementById(clicked_id).textContent = "O";


    }

    isSameSymbol(element)
    {
        let div1 = document.getElementById(element[0]).textContent;
        let div2 = document.getElementById(element[1]).textContent;
        let div3 = document.getElementById(element[2]).textContent;
        if (div1 == div2 && div2 == div3 && div1 != "")
            return true;
        return false;
    }
}

