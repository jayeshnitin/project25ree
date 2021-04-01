class  Box1{
     
    constructor(width, height){

    var options= {
        
        'isStatic':true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
        
    };
    
    this.body = Bodies.rectangle(990, 400, width, height, options);
    this.width = width;
    this.height = height;

     World.add(world, this.body);   

    }

    display(){
    
    var pos = this.body.position;    

        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);

    }

}