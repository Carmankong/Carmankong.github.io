// basic code for animate loop
console.log("main js called");

var objectSet = []; // emty the list

var objectOne = new control_draw(canvas);
objectSet.push(objectOne);

// var rectOne = new Rectangle(150, 50, 600, 700, colArray[2][1]);
// objectSet.push(rectOne);

// var myEllipseOne = new Ellipse(0, 0, 100, 200, 0, 0, 2 * Math.PI, colArray[3][2]); // drawing an ellispe out manually

// drawing the button out
// class Button (contructor) text, x,y, w, h, stroke, fill, textC, over, canvas
var butOne = new Button("Rectangle", 50, 40, 120, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butTwo = new Button("Ellipse", 50, 110, 120, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
objectSet.push(butOne, butTwo);


function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    //myEllipseOne.update();
    

    window.requestAnimationFrame(animate);
}
animate();
