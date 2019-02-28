CanvasManager.init("canvas");

var gameBoard = new Board();

gameBoard.drawBoard(CanvasManager);
gameBoard.generateObstacles();

CanvasManager.selectField(function(e){
    
    var x = (parseInt(e.clientX / 100) * 100);
    var y = (parseInt(e.clientY / 100) * 100);
    
    console.log(gameBoard.selectField(x, y));
    
    //CanvasManager.drawText(x, y, "K");
    
});

var p1 = new Player(1);
var p2 = new Player(2);


