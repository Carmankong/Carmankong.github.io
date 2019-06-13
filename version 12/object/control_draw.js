class control_draw{
    constructor(canvas){
            // set objectset to an empty list, so everything will be gone when i press reset
            this.objectSet = [];

            console.log("test object constructor");

            //set everything to 0
            this.xMouse = 0;
            this.yMouse = 0;
            this.xMouseStart = 0;
            this.yMouseStart = 0;

            // set mouseDown to false because you actually have not press the mouse down
            this.mouseDown = false;

            // Rectangle canvas co-ordinates 
            this.x = 225;
            this.y = 30;
            this.w = 500;
            this.h = 650;
            this.dx = 0;
            this.dy = 0;
            this.stroke= colArray[0][2];

            // set r (radius) of brush to 0
            this.r = 0;

            this.rectBound = false;

            this.element = canvas;

            // Eventlisteners are called (function)
            this.element.addEventListener('mousedown', this.mDown.bind(this));
            this.element.addEventListener('mousemove', this.mMove.bind(this));
            this.element.addEventListener('mouseup', this.mUp.bind(this));

            

        }

        mDown(e){
            this.xMouseStart = e.offsetX;
            this.yMouseStart = e.offsetY;
            if(this.rectBound == true){
                this.mouseDown = true;
            }

        }

        mMove(e){
            this.xMouse = e.offsetX;
            this.yMouse = e.offsetY;
            this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);

            // creating brush without a rectangle guide
            if(this.mouseDown == true && this.rectBound == true){
                this.r = width_Button.selectedRadius; // radius = the different size buttons
                if(Button.selectedShape == "Brush"){
                    var temp3 = new Brush(this.xMouse, this.yMouse, this.r, Swatch.selectedColour);
                    this.objectSet.push(temp3);
                }
        }
        }

        //colArray here changes colours of the rectangle 
        mUp(e){

            // conditions: the shapes will only appear when mouseDown is true and mouse is in bound
            if(this.mouseDown == true && this.rectBound == true){
                this.dw = width_Button.selectedWidth;
                // telling the program that is button
                if (Button.selectedShape == "Rectangle"){
                    var tempO = new Rectangle(this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                    this.objectSet.push(tempO);
                }else if(Button.selectedShape == "Ellipse"){
                    var temp = new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.selectedColour);
                    this.objectSet.push(temp); 
                }else if(Button.selectedShape == "Circle"){
                    var temp1 = new Circle(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, Swatch.selectedColour);
                    this.objectSet.push(temp1);
                }else if(Button.selectedShape == "Line"){
                    var temp2 = new Line(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart,this.dw,Swatch.selectedColour);
                    this.objectSet.push(temp2);
                }else if(Button.selectedShape == "Square"){
                    var temp3 = new Square( this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                    this.objectSet.push(temp3);
                }else if(Button.selectedShape == "Diamond"){
                    var temp4 = new Diamond( this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                    this.objectSet.push(temp4);
                }else if (Button.selectedShape == "Rotate"){
                    var temp5 = new Rotate(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                    this.objectSet.push(temp5);
                }

            }

        // making a reset button
        if (Button.selectedShape == "Reset"){
            this.objectSet = []; // clearing the object set
            Button.selected = ""; //so the button won't stay selected
            Button.selectedShape = ""; //deselecting the button (action)
        } 

        // making an undo button
        if (Button.selectedShape == "Undo"){
            this.objectSet.pop(); // pop the last thing that was drawn on the screen
            Button.selected = ""; //so the button won't stay selected
            Button.selectedShape = ""; // deselecting the button, so it won't keep on undoing the actions
        }
      
        this.mouseDown = false;

        }

        update(){
            ctx.save();
            // makes the white rectangle for drawing area
            ctx.beginPath(); //start the program
            ctx.rect(this.x, this.y, this.w, this.h); // this rect is for boundary
            ctx.clip(); //clipping things off
            ctx.fillStyle = colArray[0][0]; //colour
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = 5;
            ctx.fill(); // calling back fill colour
            ctx.stroke(); // calling back stroke colour
    
            //loops for object set
            for(var i = 0; i < this.objectSet.length; i++){
                this.objectSet[i].update();
            }
            ctx.restore(); // restore object set
            
            //calculation of rectangle guide
            this.dx = this.xMouse - this.xMouseStart;
            this.dy = this.yMouse - this.yMouseStart;

            //give permission to draw the guide rectangle
            if(this.mouseDown == true && this.rectBound == true){
                 // this draws the rectangle (guide)
                this.draw();
                }
            
        }

        // this draws the rectangle (guide)
        draw(){
            // only call the shaopes that are mentioned below and only those shapes can have guide rectangle
            if(Button.selectedShape == "Line" || Button.selectedShape == "Rectangle" || Button.selectedShape == "Ellipse"   
                || Button.selectedShape == "Circle" || Button.selectedShape == "Square" || Button.selectedShape == "Diamond" || Button.selectedShape == "Rotate"){
                
                //guide rectangle, defining the variable and tell the program how to draw guide rectangle
                this.drawRect(this.xMouseStart, this.yMouseStart, this.dx, this.dy, colArray[0][4]);
            }
        }

        // this function is to drag a rectangle out 
        drawRect(x,y,w,h){
            ctx.beginPath(); //start function
            ctx.rect(x,y,w,h); // parameter of the guide rectangle
            ctx.lineWidth = 1; //line width of guide rectabgle
            ctx.strokeStyle = Swatch.selectedColour; // defining what colour the stroke is when we are drawing the rectangle
            ctx.stroke();
        }

        // this function is to create the boundary rectangle box
        drawBoundaryRect(x,y,w,h,col){
            ctx.beginPath(); //start function
            ctx.rect(x,y,w,h); //parameter for the boundary rectangle
            ctx.lineWidth = 1; // line width of the boundart rectangle
            ctx.fillStyle = col; //determines the colour of the fill of the dragging rectangle 
            ctx.fill();
        }
    
        // this is checking boundary
        boundsCheck(xMouse, yMouse, x, y, w, h){ 
            if(xMouse > x && xMouse < x + w && yMouse > y && yMouse < y+ h){
                return true;
            }else{
                return false;
            }
            }
            
    
}