class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    fly(){
        this.bodyA = null;
    }
    display(){
        var pointA = this.bodyA.position;
        var pointB = this.pointB; 
        stroke(10);
    }

}