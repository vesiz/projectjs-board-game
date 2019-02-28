var Hero = function(_type, _owner){

    var currentHero = HeroMetrics(_type);

    this.owner       = _owner;
    this.type        = currentHero.type;
    this.attack      = currentHero.attack;
    this.armor       = currentHero.armor;
    this.health      = currentHero.health;
    this.attackRange = currentHero.attackRange;
    this.speed       = currentHero.speed;

};

Hero.prototype.attackHero = function(_hero){
    var damage = this.attack - _hero.armor;
    _hero.defendSelf(damage);
};

Hero.prototype.defendSelf = function(_damage){
    var diceSum = DiceRoll(3);
    
    if(diceSum == this.health){
        return;
    }
    else if(diceSum == 3){
        this.health -= (_damage / 2);
        return;
    }
    
    this.health -= _damage;
}

Hero.prototype.healSelf = function(){
    this.health += DiceRoll(1);
};


Hero.prototype.isDead = function(){
    if(this.health <= 0){
        this.health = 0;
        return true;
    }

    return false;
};
