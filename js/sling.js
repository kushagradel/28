class Slingshot{
    constructer(bodyA,pointB){
    var options = {
      bodyA: bodyA,
      pointB :pointB,
      stiffness : 0.04,
      length:10
    }
     this.pointB = pointB
     this.sling = Constraint.create(options);
     World.add(world.this.sling)


    
    attach(body)
    { this.sling.bodyA=body;
     } 
    fly() 
    { this.sling.bodyA=null;
 
    } 
    display()

     
     { 
     var pointA=this.bodyA.position;
     var pointB=this.pointB 
     strokeWeight(2);
     line(pointA.x,pointA.y,pointB.x,pointB.y); } }

     }
