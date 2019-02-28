var Player = function(_number){

    var getPlayerName = function(){
        return "player" + _number;
    }
    
    var fillHeroesCollection = function(){
        var heroesCollection = [];
        
        for(var i = 0; i < 2; i++){
            heroesCollection.push(new Hero("knight", getPlayerName()));
            heroesCollection.push(new Hero("elf", getPlayerName()));
            heroesCollection.push(new Hero("dwarf", getPlayerName()));
        }
        
        return heroesCollection;
    }
    
    this.heroesCollection = fillHeroesCollection();
};

Player.prototype.removeHero = function(){

};

//var player1 = new Player(1);

