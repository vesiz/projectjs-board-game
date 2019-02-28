var CanvasManager = {};

CanvasManager.canvas = null;
CanvasManager.context = null;

CanvasManager.init = function(_element){
    this.canvas = document.getElementById(_element);
    this.context = this.canvas.getContext("2d");

};

CanvasManager.drawField = function(_x, _y, _color){
    this.context.beginPath();
    this.context.rect(_x, _y, 100, 100);
    this.context.fillStyle = _color;
    this.context.fill();
    this.context.closePath();
    
    this.context.beginPath();
    this.context.strokeStyle = "#000000";
    this.context.lineWidth = 1;
    this.context.strokeRect(_x, _y, 100, 100);
    this.context.closePath();
};

CanvasManager.selectField = function(callback){

    this.canvas.addEventListener("click", callback);

};

CanvasManager.drawText = function(_x, _y, _text){

    this.context.beginPath();
    this.drawField(_x, _y, "#ffffff");
    this.context.fillStyle = "#000000";
    this.context.font = "70px Arial";
    this.context.fillText( _text ,_x + 30, _y + 70);
    this.context.closePath();
}



