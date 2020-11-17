
class Mango {
    constructor(x, y,width,height) {
      var options = {
  
  isStatic:true,
     
        restitution:0,
         friction:1,
         
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height= height
     
      World.add(world, this.body);

      this.image=loadImage("mango.png")
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    
      push();
      translate(pos.x, pos.y);
      
     imageMode(CENTER);
     
      strokeWeight(2);
   image( 0,0,this.width, this.height)
  
      pop();
     
  
     
    }
  };