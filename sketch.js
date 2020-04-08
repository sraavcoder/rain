var drops = [];
function setup() {
  
  createCanvas(800,400);
  
  
}

function draw() {
  background(0);  
  
  
  console.log(drops.length);
 
  drops.push(new Drop());


  for(var i = 0 ; i < drops.length ; i++){
    drops[i].display();
  }

  
  
  drawSprites();
}