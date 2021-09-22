class Cannon{
    constructor(x, y, w, h, angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        var options = {
            isStatic:true
        }
        this.cannonImg = loadImage("assets/canon.png");
        this.cannonBase = loadImage("assets/cannonBase.png")
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.cannonImg, this.x, this.y, this.w, this.h);
        pop();
        image(this.cannonBase, 65, 25, 200, 200);
    }

}
