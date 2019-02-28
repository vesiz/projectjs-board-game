const HeroMetrics = function(_type, _owner){

    var heroTemplate;

    switch(_type){
        case "knight":
            heroTemplate = {
                type        : "Knight",
                attack      : 8,
                armor       : 3,
                health      : 15,
                attackRange : 1,
                speed       : 1
            };
        break;
        case "elf"   : 
            heroTemplate = {
                type        : "Elf",
                attack      : 5,
                armor       : 1,
                health      : 10,
                attackRange : 3,
                speed       : 3
            };
        break;
        case "dwarf" : 
            heroTemplate = {
                type        : "Dwarf",
                attack      : 6,
                armor       : 2,
                health      : 12,
                attackRange : 2,
                speed       : 2
            };
        break; 
    }

    return heroTemplate;
};