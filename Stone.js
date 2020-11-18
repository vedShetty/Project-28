class Stone{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("image/stone.png");
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        //var stonePos = this.body.position
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width,this.height);
      }

}