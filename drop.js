class Drop{
    constructor(){
     var r = random(0,800) ;
    
    
     this.rain = createSprite(r,-100,4,random(15,40));
  
   
    
    }
   
   display(){
  
    
    this.rain.y = this.rain.y + random(8,18);
   
   if(frameCount % 150 == 0){
     if(this.rain.y >400){
      this.rain.y = random(-100,-2500)
      this.rain.x = random(0,800);
    }
  }
    
   }

  
 
}