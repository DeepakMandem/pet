class Food {
    constructor() {
      var foodStock;
      var lastFed;
      this.image = loadImage("images/Milk.png");
  
    }
    
    display(){
     var x =80,y=100;

     imageMode(CENTER);
     this.image(this.image,720,220,70,70);

     if(this.foodStock!=0){
       if(i%10==0){
         x=80;
         y=y+50
     }
    
     }

     fill(255,255,254);
      textSize(15);
      if(lastFed>=12){

        text("Last Feed : "+ lastFed%12 +"PH",350,30);
      }else if(lastFed==0){
        text("Last Feed : 12 AM",350,30);
      }else{
        text("Last Feed :"+ lastFed + "AM",350,30);
      }
      
      
    }

    bedroom(){
      backround(bedroom,550,500)
    }
    garden(){
      backround(garden,550,500);
    }
    washroom(){
      backround(washroom,550,500);
    }
  }