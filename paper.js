class Paper{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            'restitution': 0.5,
            'friction': 0.000001,
            'density': 1.3

        }
        this.body= Bodies.circle(x,y,radius,options);
        this.radius= radius
        
        
        World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);

    fill("purple");

    circle(this.body.position.x, this.body.position.y, this.radius);

    }

}