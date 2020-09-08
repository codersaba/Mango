class Mango{
    constructor(x,y,r){
        var options={
           
            restitution:0.8,
           friction:1,
           isStatic:true,
           
            }
    
      
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      this.image =loadImage("mango.png");
      
      
      
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      //ellipseMode(CENTER)
     // fill(255,255,255);
      
      

      image (this.image,0,0,this.r*2,this.r*2);
      pop();
    }
};