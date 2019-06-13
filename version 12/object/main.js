console.log("main js called");

var objectSet = []; // emty the list

// creating control draw
var objectOne = new control_draw(canvas,225,30,500,650); 
objectSet.push(objectOne);

// drawing the button out
// class Button (contructor) text, x,y, w, h, stroke, fill, textC, over, canvas
var but1 = new Button("Rectangle", 50, 40, 120, 40, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
var but2 = new Button("Ellipse", 50, 90, 120, 40, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
var but3 = new Button("Circle", 50, 140, 120, 40, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
var but4 = new Button("Line", 50, 340, 120, 40, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
var but5 = new Button("Brush", 50, 430, 120, 40, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
var but6 = new Button("Square", 50, 190, 120, 40, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
var but7 = new Button("Diamond", 50, 240, 120, 40, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
var but8 = new Button("Rotate", 50, 290, 120, 40, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
objectSet.push(but1, but2, but3, but4, but5, but6, but7, but8);

// buttons for reset and undo (text, x,y, w, h, stroke, fill, textC, over, canvas)
var R1 = new Button("Reset", 15, 540, 90, 30, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
var U1 = new Button("Undo", 120, 540, 90, 30, colArray[0][2], colArray[0][2], colArray[2][1], colArray[2][0], canvas);
objectSet.push(R1, U1);

//width button for the size of brush (text, x,y, w, h, stroke, fill, textC, over, canvas)
var r1 = new width_Button("XS", 5, 480, 30, 30, 0, 2, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
var r2 = new width_Button("S", 50, 480, 30, 30, 0, 5, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
var r3 = new width_Button("M", 95, 480, 30, 30, 0, 10, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
var r4 = new width_Button("L", 140, 480, 30, 30, 0, 15, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
var r5 = new width_Button("XL", 185, 480, 30, 30, 0, 20, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
objectSet.push(r1, r2, r3, r4, r5);

//width button for the size of line (text, x,y, w, h, stroke, fill, textC, over, canvas)
var w1 = new width_Button("XS", 5, 390, 30, 30, 2, 0, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
var w2 = new width_Button("S", 50, 390, 30, 30, 5, 0, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
var w3 = new width_Button("M", 95, 390, 30, 30, 10, 0, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
var w4 = new width_Button("L", 140, 390, 30, 30, 15, 0, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
var w5 = new width_Button("XL", 185, 390, 30, 30, 20, 0, colArray[0][2], colArray[0][2], colArray[1][5], colArray[2][0], canvas);
objectSet.push(w1, w2, w3, w4, w5);

//colour white and black x, y, w, h, stroke, fill, over, canvas
var white = new Swatch(115, 600, 60, 60, colArray[0][2], colArray[0][0], colArray[2][2], canvas);
var black = new Swatch(45, 600, 60, 60, colArray[0][2], colArray[0][1], colArray[2][2], canvas);
objectSet.push(white, black);

// colour button (loop) x, y, w, h, stroke, fill, over, canvas
// i = x or list, j = y or colour in the list
// i starts on the first list end on the fourth list
for(var i = 0; i < 4; i ++ ){
    //j starts on the third colour
    for(var j = 2 ; j < 13; j++ ){ 
    var temp =  new Swatch(740 + 70*i, -90 + 60*j, 50, 50, colArray[3][2], colArray[i][j], colArray[2][2], canvas);
    objectSet.push(temp);
    }
}

//loops for object set
function animate(){
    ctx.clearRect(0 , 0, width, height); // clear rectangle
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    

    window.requestAnimationFrame(animate);
}
animate();