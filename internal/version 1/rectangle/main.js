// basic code for animate loop
console.log("main js called");

var myT = new control_draw(canvas,200,50,300,100,colArray[1][2]);

function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();

    

    window.requestAnimationFrame(animate);
}
animate();
