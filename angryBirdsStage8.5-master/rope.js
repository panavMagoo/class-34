class Rope{
constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1.2,
    lenght:100
}
this.rope=Constraint.create(options);
this.pointB=pointB;
World.add(world,this.rope);

}
display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.pointB;
    push()
    strokeWeight(3);
    stroke("brown");
    line(pointB.x,pointB.y,pointA.x,pointA.y);
    pop()
}


}