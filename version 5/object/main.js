// basic code for animate loop
console.log("main js called");

var objectSet = []; // emty the list

var objectOne = new control_draw(canvas);
objectSet.push(objectOne);

// drawing the button out
// class Button (contructor) text, x,y, w, h, stroke, fill, textC, over, canvas
var butOne = new Button("Rectangle", 50, 40, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butTwo = new Button("Ellipse", 50, 90, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butThree = new Button("Circle", 50, 140, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
objectSet.push(butOne, butTwo, butThree);

// buttons for reset and undo
var R1 = new Button("Reset", 15, 650, 90, 30, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var U1 = new Button("Undo", 120, 650, 90, 30, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
objectSet.push(R1, U1);

// colour button x, y, w, h, stroke, fill, over, canvas
//colour black
var b1 =  new Swatch(740, 30, 50, 50, colArray[3][2], colArray[0][2], colArray[2][2], canvas);
objectSet.push(b1);
var b2 =  new Swatch(810, 30, 50, 50, colArray[3][2], colArray[0][0], colArray[2][2], canvas);
objectSet.push(b2); // this is white
var b3 =  new Swatch(880, 30, 50, 50, colArray[3][2], colArray[2][2], colArray[2][2], canvas);
objectSet.push(b3);
var b4 =  new Swatch(950, 30, 50, 50, colArray[3][2], colArray[3][2], colArray[2][2], canvas);
objectSet.push(b4);

//colour grey
var b5 =  new Swatch(740, 90, 50, 50, colArray[3][2], colArray[0][1], colArray[2][2], canvas);
objectSet.push(b5);
var b6 =  new Swatch(810, 90, 50, 50, colArray[3][2], colArray[1][1], colArray[2][2], canvas);
objectSet.push(b6);
var b7 =  new Swatch(880, 90, 50, 50, colArray[3][2], colArray[2][1], colArray[2][2], canvas);
objectSet.push(b7);
var b8 =  new Swatch(950, 90, 50, 50, colArray[3][2], colArray[3][1], colArray[2][2], canvas);
objectSet.push(b8);

//colour red
var b9 =  new Swatch(740, 150, 50, 50, colArray[3][2], colArray[0][3], colArray[2][2], canvas);
objectSet.push(b9);
var b10 =  new Swatch(810, 150, 50, 50, colArray[3][2], colArray[1][3], colArray[2][2], canvas);
objectSet.push(b10);
var b11 =  new Swatch(880, 150, 50, 50, colArray[3][2], colArray[2][3], colArray[2][2], canvas);
objectSet.push(b11);
var b12 =  new Swatch(950, 150, 50, 50, colArray[3][2], colArray[3][3], colArray[2][2], canvas);
objectSet.push(b12);

//colour yellow
var b13 =  new Swatch(740, 210, 50, 50, colArray[3][2], colArray[0][4], colArray[2][2], canvas);
objectSet.push(b13);
var b14 =  new Swatch(810, 210, 50, 50, colArray[3][2], colArray[1][4], colArray[2][2], canvas);
objectSet.push(b14);
var b15 =  new Swatch(880, 210, 50, 50, colArray[3][2], colArray[2][4], colArray[2][2], canvas);
objectSet.push(b15);
var b16 =  new Swatch(950, 210, 50, 50, colArray[3][2], colArray[3][4], colArray[2][2], canvas);
objectSet.push(b16);

//colour blue 
var b17 =  new Swatch(740, 270, 50, 50, colArray[3][2], colArray[0][5], colArray[2][2], canvas);
objectSet.push(b17);
var b18 =  new Swatch(810, 270, 50, 50, colArray[3][2], colArray[1][5], colArray[2][2], canvas);
objectSet.push(b18);
var b19 =  new Swatch(880, 270, 50, 50, colArray[3][2], colArray[2][5], colArray[2][2], canvas);
objectSet.push(b19);
var b20 =  new Swatch(950, 270, 50, 50, colArray[3][2], colArray[3][5], colArray[2][2], canvas);
objectSet.push(b20);

//colour gree, blue
var b21 =  new Swatch(740, 330, 50, 50, colArray[3][2], colArray[0][6], colArray[2][2], canvas);
objectSet.push(b21);
var b22 =  new Swatch(810, 330, 50, 50, colArray[3][2], colArray[1][6], colArray[2][2], canvas);
objectSet.push(b22);
var b23 =  new Swatch(880, 330, 50, 50, colArray[3][2], colArray[2][6], colArray[2][2], canvas);
objectSet.push(b23);
var b24 =  new Swatch(950, 330, 50, 50, colArray[3][2], colArray[3][6], colArray[2][2], canvas);
objectSet.push(b24);

//colour bright yellow
var b25 =  new Swatch(740, 390, 50, 50, colArray[3][2], colArray[0][7], colArray[2][2], canvas);
objectSet.push(b25);
var b26 =  new Swatch(810, 390, 50, 50, colArray[3][2], colArray[1][7], colArray[2][2], canvas);
objectSet.push(b26);
var b27 =  new Swatch(880, 390, 50, 50, colArray[3][2], colArray[2][7], colArray[2][2], canvas);
objectSet.push(b27);
var b28 =  new Swatch(950, 390, 50, 50, colArray[3][2], colArray[3][7], colArray[2][2], canvas);
objectSet.push(b28);

//colour yellow (another type)
var b29 =  new Swatch(740, 450, 50, 50, colArray[3][2], colArray[0][8], colArray[2][2], canvas);
objectSet.push(b29);
var b30 =  new Swatch(810, 450, 50, 50, colArray[3][2], colArray[1][8], colArray[2][2], canvas);
objectSet.push(b30);
var b31 =  new Swatch(880, 450, 50, 50, colArray[3][2], colArray[2][8], colArray[2][2], canvas);
objectSet.push(b31);
var b32 =  new Swatch(950, 450, 50, 50, colArray[3][2], colArray[3][8], colArray[2][2], canvas);
objectSet.push(b32);

// colour green
var b33 =  new Swatch(740, 510, 50, 50, colArray[3][2], colArray[0][9], colArray[2][2], canvas);
objectSet.push(b33);
var b34 =  new Swatch(810, 510, 50, 50, colArray[3][2], colArray[1][9], colArray[2][2], canvas);
objectSet.push(b34);
var b35 =  new Swatch(880, 510, 50, 50, colArray[3][2], colArray[2][9], colArray[2][2], canvas);
objectSet.push(b35);
var b36 =  new Swatch(950, 510, 50, 50, colArray[3][2], colArray[3][9], colArray[2][2], canvas);
objectSet.push(b36);

//colour mint
var b37 =  new Swatch(740, 570, 50, 50, colArray[3][2], colArray[0][10], colArray[2][2], canvas);
objectSet.push(b37);
var b38 =  new Swatch(810, 570, 50, 50, colArray[3][2], colArray[1][10], colArray[2][2], canvas);
objectSet.push(b38);
var b39 =  new Swatch(880, 570, 50, 50, colArray[3][2], colArray[2][10], colArray[2][2], canvas);
objectSet.push(b39);
var b40 =  new Swatch(950, 570, 50, 50, colArray[3][2], colArray[3][10], colArray[2][2], canvas);
objectSet.push(b40);

//colour purple
var b41 =  new Swatch(740, 630, 50, 50, colArray[3][2], colArray[0][11], colArray[2][2], canvas);
objectSet.push(b41);
var b42 =  new Swatch(810, 630, 50, 50, colArray[3][2], colArray[1][11], colArray[2][2], canvas);
objectSet.push(b42);
var b43 =  new Swatch(880, 630, 50, 50, colArray[3][2], colArray[2][11], colArray[2][2], canvas);
objectSet.push(b43);
var b44 =  new Swatch(950, 630, 50, 50, colArray[3][2], colArray[3][11], colArray[2][2], canvas);
objectSet.push(b44);


function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    

    window.requestAnimationFrame(animate);
}
animate();
