const prompt = require('prompt-sync')()

class Player {

    constructor(symbol)
    {
        this.symbol = symbol;
    }

    getSymbol()
    {
        return this.symbol;
    }

    getPosition()
    {
        let position = prompt(this.symbol + " enter your position");
        return position;
    }
}




module.exports = Player;

