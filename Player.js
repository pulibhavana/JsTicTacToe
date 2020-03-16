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

}

module.exports = Player;

