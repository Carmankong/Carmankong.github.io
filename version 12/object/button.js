console.log("button1 js called");

//class button (text)
class Button{
    constructor(text, x, y, w, h, stroke, fill, textC, over, canvas){
        // declaring the variables
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.textC = textC;
        this.text = text;
        this.over = over; // when your mouse is over the boundary, it changes colour

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        // set the boundary and mouse click into false first
        this.rectBound = false;
        this.click = false;

        this.element = canvas;
        // add in Event listener = function
        this.element.addEventListener('mousedown', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        if(this.rectBound == true){

            Button.selected = this;
            Button.selectedShape = this.text; // linking the button variable with text, so it will know which button is selected.

        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //boundary check
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        this.draw();
        this.writeText(); // calling text function
    }

    draw(){
        if(Button.selected == this){
            ctx.fillStyle = colArray[3][4];
            // if button get selected, it will be this colour
        }
        else if( this.rectBound ){
            ctx.fillStyle = this.over;
           //if button hovers over button, color will be this.over
        }else{
            ctx.fillStyle = this.fill;
            // but other wise this.fill will stay the same
        }
        
        ctx.beginPath(); // start function
        ctx.rect(this.x, this.y, this.w, this.h); //parameters of rectangle 
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 5; //the width of the line
        ctx.fill();
        ctx.stroke();

    }

    writeText(){
        ctx.fillStyle = this.textC; //declaring that fillStyle is = to textC
        ctx.font = "25px sans-serif"; //font of the characters
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2); // the location of the text
    }

    //boundary function
    boundsCheck(xM, yM, x, y, w, h){ 
    if(xM > x && xM < x + w && yM > y && yM < y+ h){
        return true;
    }else{
        return false;
    }
    }

}
Button.selected = ""; //universal
Button.selectedShape = ""; //universal

class width_Button{
    constructor(text, x, y, w, h, width, radius, stroke, fill, textC, over, canvas){
        //defining the variables
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.radius = radius; // sizing for brush
        this.width = width; //sizing for line
        this.stroke = stroke;
        this.fill = fill;
        this.textC = textC; // colour for text
        this.text = text;
        this.over = over; // when your mouse is over the boundary, it changes colour

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        // set everything to false
        this.rectBound = false;
        this.click = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        if(this.rectBound == true){
            
            width_Button.selected = this;
            width_Button.selectedWidth = this.width; //sizing for line
            width_Button.selectedRadius = this.radius;// sizing for brush

        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        // bounds check
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        this.draw();
        this.writeText();
    }

    draw(){
        if(Button.selected == this ){
            ctx.fillStyle = colArray[3][4];
            // if button get selected, it will be this colour
        }
        else if(this.rectBound){
            ctx.fillStyle = this.over;
           //if button hovers over button, color will be this.over
        }else{
            ctx.fillStyle = this.fill;
            // but other wise this.fill will stay the same
        }
        
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 5; // line width of the button
        ctx.fill();
        ctx.stroke();

    }

    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "25px sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }

    boundsCheck(xM, yM, x, y, w, h){ 
    if(xM > x && xM < x + w && yM > y && yM < y+ h){
        return true;
    }else{
        return false;
    }
    }

}
width_Button.selected = ""; //universal
width_Button.selectedWidth = ""; //universal
width_Button.selectedRadius = 10; //universal