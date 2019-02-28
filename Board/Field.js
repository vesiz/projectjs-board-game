var idCounter = 1;

var Field = function(_type, _x, _y){

    this.id = idCounter++; 
    this.type = _type; // p1, bf, p2, obstacle
    this.x = _x;
    this.y = _y;
    this.width = 100;
    this.height = 100;
    this.taken = null; //by a knight, elf or dwarf
    this.selected = false;
};

Field.prototype.placeHero = function(_hero){
    this.taken = _hero;
};






