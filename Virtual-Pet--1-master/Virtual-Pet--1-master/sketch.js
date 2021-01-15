var dog, happyDog
var database
var foodS, foodStock
var fedTime,lastFed;
var foodObj;
var object;
var bedRoom,washRoom,garden;

function preload()


{
  dog = loadImage("images/dogImg.png");
  bedRoom = loadImage("images/Bed Room.png");
  washRoom = loadImage("images/Wash Room.png");
  garden = loadImage("images/Garden.png");


}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  feed=createButton("Feed the dog");
  feed.position(705,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800.95);
  addFood.mousePressed(addFoods);

  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();  
  })

    readState=database.ref('gameState');
    raedState.on("value",function(data){
      gameState=data.val();
    })

}


function draw() {  
  backround(46,139,87);

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
      lastFed=data.val();
  });

  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();

  }else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
  }

  currentTime=hour();
  if(currentTime==(lastFed+1)){
    update("Playing");
    foodObj.garden();
  }else if(currentTime==(lastFed+2)){
    update("Sleeping");
    foodObj.bedroom();
  }else if(currentTime>(lastFed+2)&& currentTime<=lastFed+4){
    foodObj.washroom();
  }else{
    update("Hungry")
    foodObj.display();


  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}

function feedDog(){
  dog.addImage("images/dog.Img1.png");

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()

  })

}

function addFoods(){
foodS++
database.ref('/').update({
  Food:foodS
})

}

function update(state){
  database.ref('/').update({
    gameState:state
  });
}

