class Rope{
    constructor(bodyA,pointB) {
        var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1.2,
          length:250
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options)
        World.add(world, this.rope);
      }
      display(){
        if(this.rope.bodyA != null){
           var pointA =this.rope.bodyA.position;
           var pointB =this.rope.pointB;
           push();
           stroke(48,22,8);
           strokeWeight(3);
           line(pointB.x,pointB.y,pointA.x,pointA.y);
        }
       }
       
       fly(){
           this.rope.bodyA = null;
       }
   
       attach(body){
           this.rope.bodyA = body
   
       }
   }