
class Stone{
    constructor(x, y,width) {
      var options = {
  
  isStatic:false,
     
        restitution:0,
         friction:1,
         density:1.2
      }
      this.body = Bodies.circle(x, y,width, options);
      this.width = width;
      this.x=x;
      this.y=y;
       this.height = height;
      
      World.add(world, this.body);
      this.image=loadImage("stone.png")
    }
    fly(){
        this.stone.bodyA = null;
    }

    display(){
        image(this.image,200,20)

      var pos =this.body.position;
      var angle = this.body.angle;
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
    imageMode(CENTER);
     
      strokeWeight(2);
    image( this.image,0,0,this.width, this.width)
  
      pop();
     
  
     
    }
  };