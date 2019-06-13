console.log("object js called");

// class Rectangle takes x, y, w, h (integers), color as rgba string(colArray)
class Rectangle{
    constructor(x, y, w, h, c1){
        //define variables
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c1;
    }

    update(){
        // drawing rectangle
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h); //parameters for rectangle
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}   

// class ellipse (x, y, radiusX, radiusY, rotation, startAngle, endAngle, colour)
class Ellipse{
    constructor(xS, yS, xM, yM, c1){
        // define variables
        this.xC = (xS + xM)/2; // centre x
        this.yC = (yS + yM)/2; // centre y
        this.radiusX = Math.abs( (xM - xS)/2 ); //Math.abs is to make the values always positive
        this.radiusY = Math.abs( (yM - yS)/2 );
        this.rotation = 0; // set rotation to 0 so it won't rotate
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.fill = c1;
    }

    update(){
        // drawing ellipse
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.ellipse(this.xC, this.yC, this.radiusX, this.radiusY, this.rotation, 
        this.startAngle, this.endAngle); //parameters of ellipse
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}    

// class Circle (x, y, radiusX, radiusY, rotation, startAngle, endAngle, colour)
class Circle{
    constructor(xS, yS, xM, yM, c1){
        this.xC = (xS + xM)/2; // centre x
        this.yC = (yS + yM)/2; // centre y
        this.radiusX = Math.abs( (xM - xS)/2 ); //Math.abs is to make the values always positive
        this.radiusY = Math.abs( (yM - yS)/2 );
        this.r = 0; // set radius to 0
        // when radius x is less than radius y
        if(this.radiusX < this.radiusY){
            //radius of circle will be radius x
            this.r = this.radiusX;
        }
        else{
            //otherwise radius of circle will be radius y
            this.r = this.radiusY
        };
        
        this.fill = c1;
    }

    update(){
        // drawing circle
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI); // parameter of circle
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}

// class line(x, y, )
class Line{
    constructor(xS, yS, xM, yM, dw, sCol){
        //Variables required for line
        this.xS = xS;
        this.yS = yS;
        this.xM = xM;
        this.yM = yM;
        this.dw = dw;
        this.fill = sCol;
    }
    update(){
        //drawing line
        this.draw()
    }
    draw(){
        //line function
        ctx.strokeStyle = this.fill;
        ctx.lineWidth = this.dw; // the width of the line equal to dw, then it doesn't just have a set width
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.xS, this.yS); // where the line starts
        ctx.lineTo(this.xM, this.yM); //where the line ends
        ctx.stroke();
    }
}

// class brush(x, y, r, colour)
class Brush{
    constructor(xM, yM, r, c1){
        this.xC = xM; // centre x
        this.yC = yM; // centre y
        this.r = r; 
        this.fill = c1;
    }

    update(){
        // drawing brush
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI); // parameter of brush
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}

// class Square (x (xMouseStart), y (yMouseStart), w, h, colour)
class Square{
    constructor(xS, yS, w, h, c1){
        this.xC = xS + w/2; // centre of x
        this.yC = yS + h/2; // centre of y
        this.s = (w + h)/2; // calculation of w and h
        this.ang = 45;
        this.fill = c1;
}
    
    update(){
        // drawing out a square
        this.draw();
    }
    
    draw(){
        ctx.save()
        ctx.translate(this.xC, this.yC);
    
        ctx.beginPath();
        ctx.rect(0 - this.s/2, 0 - this.s/2, this.s, this.s); //parameter of square
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
        }
}

// class Diamond (x (xMouseStart), y (yMouseStart), w, h, colour)
class Diamond{
    constructor(xS, yS, dw, dh, c1){
        this.xC = xS + dw/2; // cenre of x
        this.yC = yS + dh/2; //centre of y
        this.s = ( dw + dh )/2; // calculation of w and h
        this.ang = 45;
        this.fill = c1;
}
    
    update(){
        this.draw();
    }
    
    draw(){
        ctx.save()
        ctx.translate(this.xC, this.yC);
        ctx.rotate(this.ang*Math.PI/180); // rotate the shape, so it will be a dismond
    
        ctx.beginPath();
        ctx.rect(0 - this.s/2, 0 - this.s/2, this.s, this.s); // parameter of diamond
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
        }
}

// class rotate ( x (xMouse), y (yMouse), xMouseStart, yMouseStart, w ,h , colour)
class Rotate{
    constructor(xM, yM, xS, yS, w, h, c1){
        // define variables
        this.xC = (xS + xM)/2; //centre of x
        this.yC = (yS + yM)/2; // centre of y
        this.w = w;
        this.h = h;
        this.fill = c1;
        this.degrees = 0;
    }


    update(){
        this.degrees += 1; // the speed of rotation
        // drawing rectangle
        this.draw();
    }

    draw(){
        ctx.save();
        ctx.translate(this.xC, this.yC);
        ctx.rotate(this.degrees*Math.PI/180); // rotating the rectangle 
        ctx.beginPath();
        ctx.rect(-this.w/2 ,  -this.h/2, this.w, this.h); //parameter of rotate
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
    }
}