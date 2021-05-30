class Block{
  constructor(x, y, width, height,image) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed<3){
        var pos= this.body.position;
      imageMode(CENTER);
     image(this.image,this.body.position.x,this.body.position.y,this.height,this.width);
     
      }
    
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visiblity-5;
        tint(255,this.Visibility)
        image(this.image,this.body.position.x,this.body.position.y,this.height,this.width);
        pop();
    
      }
    }
    };
     
