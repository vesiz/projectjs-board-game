var DiceRoll = function(_diceQ){
    var sum = 0;

    for(var i = 0; i < _diceQ; i++){
        sum += Math.floor((Math.random() * 6) + 1);
    }

    return sum;
};