class Player
{
    constructor(symbol)
    {
        this.symbol = symbol;
        this.score = 0;
    }

    set Score(value)
    {
       this.score = value + 1;
    }

    get Score()
    {
        return this.score;
    }

    get Symbol()
    {
         return this.symbol;
    }
}