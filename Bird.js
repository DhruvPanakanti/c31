class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
   //new image is loaded 
    this.smokeimg=loadImage("sprites/smoke.png");
    //making an array  to show where the bird is going arr1 is an empty array,array is represented with []
    this.arr1=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    //to set a smoke image position only when red is flying to the pig house
    if(this.body.position.x>200 && this.body.velocity.x>8){
   var position=[this.body.position.x,this.body.position.y];
   this.arr1.push(position);
   for(var i=0;i<this.arr1.length;i++)
   {
  image(this.smokeimg,this.arr1[i][0],this.arr1[i][1]);
   }
  
   
    }
  }
}
