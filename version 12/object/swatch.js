class Swatch{
    constructor(x, y, w, h, stroke, fill, over, canvas){
        // declaring what each variables are 
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.over = over; //  when your mouse is over the boundary, it changes colour

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        // set everything to false
        this.insideShape = false;
        this.click = false;

        this.element = canvas;

        //Event listeners (function)
        this.element.addEventListener('click', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        if(this.insideShape == true){
            Swatch.selected = this;
            Swatch.selectedColour = this.fill; // connecting the variables together with fill

        }
}

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //check if in the boundary 
        this.insideShape = this.rectBounds(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);

        if(this.insideShape == true){
            this.stroke = "rgb(230,230,230)"; //declare what the colour would be when the mouse is inside of the button
        }
        
        else{
            this.stroke = "rgb(250,250,250)"; //declare what the colout would be when the mouse is not inside
        }
        

    }

    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();// start function
        ctx.rect(this.x, this.y, this.w, this.h); //parameter of rectangle
        ctx.strokeStyle = this.stroke;
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 5; // deciding the length of line width
        ctx.fill();
        ctx.stroke();
    }
    
    //edit the values
    rectBounds(xM, yM, x, y, w, h){
    if(xM > x && xM < x + w && yM > y && yM < y + h){
        return true;
    }else{
        return false;
        }
    }
    
}
Swatch.selected = ""; //universal
Swatch.selectedColour = "rgba(0,0,0,1)"; //universal, defalut colour of the shapes