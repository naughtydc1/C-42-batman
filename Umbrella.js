class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
       
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
        this.image.scale = 0.001;
        this.img = loadImage("Walking Frame/batman.png");
        World.add(world, this.body);
        //load Image for BestMan
        
    }

    display(){
        var pos = this.body.position;
        
       if(frameCount >= 200){
           imageMode(CENTER);
           image(this.img,pos.x,pos.y+70,300,300);
       }
       else{
          imageMode(CENTER);
          //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
          animation(this.image,pos.x,pos.y+70);
          
          // animation.scale = 0.2;
       }
    }
}
