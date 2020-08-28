class Rope {

constructor(body1,body2,offsetX,offsetY){

this.offsetX = offsetX
this.offsetY = offsetY

var options = {

bodyA:body1,
bodyB:body2,

 pointB:{x:this.offsetX,y:this.offsetY}

}

 this.rope = Constraint.create(options)
 World.add(world,this.rope)

}

 display(){

 var pointA = this.rope.bodyA.position;
 var pointB = this.rope.bodyB.position;

 strokeWeight(4);

 var anchor1X = pointA.x
 var anchor1Y = pointA.y
 
 var Achor2X = pointB.x+this.offsetX
 var Achor2Y = pointB.y+this.offsetY

 line(anchor1X,anchor1Y, Achor2X,Achor2Y);




 }
  





}