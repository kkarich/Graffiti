var canvas;

window.onload = function () {
    var my_canvas = $('#saved-canvas').data('canvas');
    (function() {
        var $ = function(id){return document.getElementById(id)};

        canvas = this.__canvas = new fabric.Canvas('page-canvas', {
            isDrawingMode: true
        });
        
        canvas.setHeight(window.innerHeight);
        canvas.setWidth(window.innerWidth - 18);
        canvas.loadFromJSON(my_canvas);
        canvas.freeDrawingBrush.width = 15;
        canvas.freeDrawingBrush.color = '#005E7A';
        canvas.renderAll();

        fabric.Object.prototype.transparentCorners = false;

    })();

};


$( document ).ready(function() {
    
    $('#clear-canvas').click(function() { 
        canvas.clear() 
    })
      
    $('#drawing-color').change(function() {
        canvas.freeDrawingBrush.color = this.value;
    });
      
    $('#drawing-line-width').change(function() {
        canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
        this.previousSibling.innerHTML = this.value;
    });
    
    $("#menu-toggle").click(function(){
      $('#side-nav-menu').toggleClass("hide")
       $("#menu-toggle").find('i').toggleClass('fa fa-chevron-right fa fa-times')
    });
  
});

function getCanvas(f){
    document.getElementById("canvas").value = JSON.stringify(canvas.toJSON());
}

