var rain
var rand , ran
function setup() {
  createCanvas(800,800);
}
  function draw() {
    loop();
    for(var i=0;i<1500;i=1+rand){
      ran = random(1,800)
  rand = random(1,10)
  rain = createSprite(ran,ran,5,rand);
  rain.shapeColor="green"
    }


  background(0);  
  drawSprites();
}