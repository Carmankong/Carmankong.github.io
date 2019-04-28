console.log("rectangle js called");

//  class Rectangle takes x, y, w, h (integers), color as rgba string(colArray)
class Rectangle{
    constructor(x, y, w, h, c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c1;
    }


    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}    

/*class boundaryRect{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.Rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    Rect(x, y, w, h){
        ctx.beginPath();
        ctx.rect(x, y, w, h) =  ctx.Rect(100, 300, 200, 400);
        ctx.lineWidth = 2;
        ctx.fillStyle  =  colArray[2][4];
        ctx.strokeStyle =  colArray[0][5];
        ctx.fill();
        ctx.stroke();
    }
}*/
