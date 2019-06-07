console.log("main js called");

var objectSet = []; // emty the list

var objectOne = new control_draw(canvas,225,30,500,650);
objectSet.push(objectOne);

// drawing the button out
// class Button (contructor) text, x,y, w, h, stroke, fill, textC, over, canvas
var but1 = new Button("Rectangle", 50, 40, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var but2 = new Button("Ellipse", 50, 90, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var but3 = new Button("Circle", 50, 140, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var but4 = new Button("Line", 50, 190, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var but5 = new Button("Brush", 50, 280, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var but6 = new Button("Square", 50, 370, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var but7 = new Button("Diamond", 50, 420, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var but8 = new Button("Rotate", 50, 470, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
objectSet.push(but1, but2, but3, but4, but5, but6, but7, but8);

// buttons for reset and undo
var R1 = new Button("Reset", 15, 650, 90, 30, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var U1 = new Button("Undo", 120, 650, 90, 30, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
objectSet.push(R1, U1);

//width button for the size of brush
var r1 = new width_Button("XS", 5, 330, 30, 30, 0, 2, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
var r2 = new width_Button("S", 50, 330, 30, 30, 0, 5, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
var r3 = new width_Button("M", 95, 330, 30, 30, 0, 10, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
var r4 = new width_Button("L", 140, 330, 30, 30, 0, 15, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
var r5 = new width_Button("XL", 185, 330, 30, 30, 0, 20, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
objectSet.push(r1, r2, r3, r4, r5);

//width button for the size of brush
var w1 = new width_Button("XS", 5, 240, 30, 30, 2, 0, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
var w2 = new width_Button("S", 50, 240, 30, 30, 5, 0, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
var w3 = new width_Button("M", 95, 240, 30, 30, 10, 0, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
var w4 = new width_Button("L", 140, 240, 30, 30, 15, 0, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
var w5 = new width_Button("XL", 185, 240, 30, 30, 20, 0, colArray[0][1], colArray[0][1], colArray[1][5], colArray[2][0], canvas);
objectSet.push(w1, w2, w3, w4, w5);

// colour button x, y, w, h, stroke, fill, over, canvas
//colour black
var b1 =  new Swatch(740, 30, 50, 50, colArray[3][2], colArray[0][2], colArray[2][2], canvas);
var b2 =  new Swatch(810, 30, 50, 50, colArray[3][2], colArray[0][0], colArray[2][2], canvas);// white
var b3 =  new Swatch(880, 30, 50, 50, colArray[3][2], colArray[2][2], colArray[2][2], canvas);
var b4 =  new Swatch(950, 30, 50, 50, colArray[3][2], colArray[3][2], colArray[2][2], canvas);
objectSet.push(b1, b2, b3, b4);

//colour grey
var b5 =  new Swatch(740, 90, 50, 50, colArray[3][2], colArray[0][1], colArray[2][2], canvas);
var b6 =  new Swatch(810, 90, 50, 50, colArray[3][2], colArray[1][1], colArray[2][2], canvas);
var b7 =  new Swatch(880, 90, 50, 50, colArray[3][2], colArray[2][1], colArray[2][2], canvas);
var b8 =  new Swatch(950, 90, 50, 50, colArray[3][2], colArray[3][1], colArray[2][2], canvas);
objectSet.push(b5, b6, b7, b8);

//colour red
var b9 =  new Swatch(740, 150, 50, 50, colArray[3][2], colArray[0][3], colArray[2][2], canvas);
var b10 =  new Swatch(810, 150, 50, 50, colArray[3][2], colArray[1][3], colArray[2][2], canvas);
var b11 =  new Swatch(880, 150, 50, 50, colArray[3][2], colArray[2][3], colArray[2][2], canvas);
var b12 =  new Swatch(950, 150, 50, 50, colArray[3][2], colArray[3][3], colArray[2][2], canvas);
objectSet.push(b9, b10, b11, b12);

//colour yellow
var b13 =  new Swatch(740, 210, 50, 50, colArray[3][2], colArray[0][4], colArray[2][2], canvas);
var b14 =  new Swatch(810, 210, 50, 50, colArray[3][2], colArray[1][4], colArray[2][2], canvas);
var b15 =  new Swatch(880, 210, 50, 50, colArray[3][2], colArray[2][4], colArray[2][2], canvas);
var b16 =  new Swatch(950, 210, 50, 50, colArray[3][2], colArray[3][4], colArray[2][2], canvas);
objectSet.push(b13, b14, b15, b16);

//colour blue 
var b17 =  new Swatch(740, 270, 50, 50, colArray[3][2], colArray[0][5], colArray[2][2], canvas);
var b18 =  new Swatch(810, 270, 50, 50, colArray[3][2], colArray[1][5], colArray[2][2], canvas);
var b19 =  new Swatch(880, 270, 50, 50, colArray[3][2], colArray[2][5], colArray[2][2], canvas);
var b20 =  new Swatch(950, 270, 50, 50, colArray[3][2], colArray[3][5], colArray[2][2], canvas);
objectSet.push(b17, b18, b19, b20);

//colour gree, blue
var b21 =  new Swatch(740, 330, 50, 50, colArray[3][2], colArray[0][6], colArray[2][2], canvas);
var b22 =  new Swatch(810, 330, 50, 50, colArray[3][2], colArray[1][6], colArray[2][2], canvas);
var b23 =  new Swatch(880, 330, 50, 50, colArray[3][2], colArray[2][6], colArray[2][2], canvas);
var b24 =  new Swatch(950, 330, 50, 50, colArray[3][2], colArray[3][6], colArray[2][2], canvas);
objectSet.push(b21, b22, b23, b24);

//colour bright yellow
var b25 =  new Swatch(740, 390, 50, 50, colArray[3][2], colArray[0][7], colArray[2][2], canvas);
var b26 =  new Swatch(810, 390, 50, 50, colArray[3][2], colArray[1][7], colArray[2][2], canvas);
var b27 =  new Swatch(880, 390, 50, 50, colArray[3][2], colArray[2][7], colArray[2][2], canvas);
var b28 =  new Swatch(950, 390, 50, 50, colArray[3][2], colArray[3][7], colArray[2][2], canvas);
objectSet.push(b25, b26, b27, b28);

//colour yellow (another type)
var b29 =  new Swatch(740, 450, 50, 50, colArray[3][2], colArray[0][8], colArray[2][2], canvas);
var b30 =  new Swatch(810, 450, 50, 50, colArray[3][2], colArray[1][8], colArray[2][2], canvas);
var b31 =  new Swatch(880, 450, 50, 50, colArray[3][2], colArray[2][8], colArray[2][2], canvas);
var b32 =  new Swatch(950, 450, 50, 50, colArray[3][2], colArray[3][8], colArray[2][2], canvas);
objectSet.push(b29, b30, b31, b32);

// colour green
var b33 =  new Swatch(740, 510, 50, 50, colArray[3][2], colArray[0][9], colArray[2][2], canvas);
var b34 =  new Swatch(810, 510, 50, 50, colArray[3][2], colArray[1][9], colArray[2][2], canvas);
var b35 =  new Swatch(880, 510, 50, 50, colArray[3][2], colArray[2][9], colArray[2][2], canvas);
var b36 =  new Swatch(950, 510, 50, 50, colArray[3][2], colArray[3][9], colArray[2][2], canvas);
objectSet.push(b33, b34, b35, b36);

//colour mint
var b37 =  new Swatch(740, 570, 50, 50, colArray[3][2], colArray[0][10], colArray[2][2], canvas);
var b38 =  new Swatch(810, 570, 50, 50, colArray[3][2], colArray[1][10], colArray[2][2], canvas);
var b39 =  new Swatch(880, 570, 50, 50, colArray[3][2], colArray[2][10], colArray[2][2], canvas);
var b40 =  new Swatch(950, 570, 50, 50, colArray[3][2], colArray[3][10], colArray[2][2], canvas);
objectSet.push(b37, b38, b39, b40);

//colour purple
var b41 =  new Swatch(740, 630, 50, 50, colArray[3][2], colArray[0][11], colArray[2][2], canvas);
var b42 =  new Swatch(810, 630, 50, 50, colArray[3][2], colArray[1][11], colArray[2][2], canvas);
var b43 =  new Swatch(880, 630, 50, 50, colArray[3][2], colArray[2][11], colArray[2][2], canvas);
var b44 =  new Swatch(950, 630, 50, 50, colArray[3][2], colArray[3][11], colArray[2][2], canvas);
objectSet.push(b41, b42, b43, b44);


function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    

    window.requestAnimationFrame(animate);
}
animate();