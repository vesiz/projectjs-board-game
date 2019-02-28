const BoardMetrics = {
    color1 : "#AAAAAA", // player color1
    color2 : "#444444", // player color2
    color3 : "#DCDCDC", // battlefield color
    color4 : "#000000"  // obstacle color  
};

var Board = function(){

    this.fieldsCollection = [];

    this.drawBoard = function(_manager){
        var x = 0;
        var y = 0;

        var currentColor = BoardMetrics.color1;

        for(var i = 0; i < 7; i++){

            for(var j = 0; j < 9; j++){

                if(i == 0 || i == 1){
                    this.fieldsCollection.push(new Field("p1", x, y));                    
                }
                else if(i == 2 || i == 3 || i == 4){
                    currentColor = BoardMetrics.color3; 
                    this.fieldsCollection.push(new Field("bf", x, y));
                }
                else if(i == 5 || i == 6){                    
                    this.fieldsCollection.push(new Field("p2", x, y));
                }

                _manager.drawField(x, y, currentColor);

                if(currentColor == BoardMetrics.color1){
                    currentColor = BoardMetrics.color2;
                }
                else if (currentColor == BoardMetrics.color2){
                    currentColor = BoardMetrics.color1;
                }
                else if(currentColor == BoardMetrics.color3 && this.fieldsCollection.length == 45){
                    currentColor = BoardMetrics.color2;
                }

                x += 100;
            }
            y += 100;
            x = 0;
        }
    };

    this.getFieldById = function(_id){
        return this.fieldsCollection[_id - 1];
    };

    this.unselectAll = function(){
        for(var i = 0; i < this.fieldsCollection.length; i++){
            this.fieldsCollection[i].selected = false;
        }
    };

    this.selectField = function(_x, _y){

        for(var i = 0; i < this.fieldsCollection.length; i++){
            if(this.fieldsCollection[i].x == _x && this.fieldsCollection[i].y == _y){

                this.unselectAll();
                this.fieldsCollection[i].selected = true;

                return this.fieldsCollection[i];
            }
        }    
    };

    this.generateObstacles = function(){

        var obstacles = Math.floor((Math.random() * 5) + 1);

        for(var i = 0; i < obstacles; i++){

            var id = Math.floor((Math.random() * 26) + 19);
            (this.getFieldById(id)).type = "obstacle";

            CanvasManager.drawField((this.getFieldById(id)).x, (this.getFieldById(id)).y, BoardMetrics.color4);
        }
    };

    this.removeObstacle = function(_id){   
        (this.getFieldById(_id)).type = "bf";
        CanvasManager.drawField((this.getFieldById(_id)).x, (this.getFieldById(_id)).y, BoardMetrics.color3);
    }

};
