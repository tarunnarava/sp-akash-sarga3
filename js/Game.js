class Game  
 {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    Spaceship1 = createSprite(100,200,30,30);
    Spaceship1.addImage("Spaceship1",Spaceship1_img);
    Spaceship1.scale=0.5;

    Spaceship2 = createSprite(300,200);
    Spaceship2.addImage("Spaceship2",Spaceship2_img);
    Spaceship2.scale=0.5;

    Spaceship3 = createSprite(500,200);
    Spaceship3.addImage("Spaceship3",Spaceship3_img);
    Spaceship3.scale=0.5;

    Spaceship4 = createSprite(700,200);
    Spaceship4.addImage("Spaceship4",Spaceship4_img);
    Spaceship4.scale=0.5;

    Spaceships = [Spaceship1,Spaceship2, Spaceship3, Spaceship4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();



    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        Spaceships[index-1].x = x;
        Spaceships[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,120,120);
          Spaceships[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = Spaceships[index-1].y;
        }
       

       // textSize(25);
       // fill("white");
     //   text("Player 1 :" +allPlayers.player1.score,50,50);
     //  text("Player 2 :" + allPlayers.player2.score, 50, 100);

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank+=1;
    
      Player.updateCarsAtEnd(player.rank);



    }
    


    



if (frameCount % 50 === 0) {
  aster = createSprite(100, Math.round(random(10,5000)), 50, 50);
  aster.velocityX =3;

  console.log("the asteroid is created x " + aster.x +  "y : " +  aster.y );
  var rand = Math.round(random(1,5));
  switch(rand){
      case 1: aster.addImage("aster1",asteroid1img);
      break;
      case 2: aster.addImage("aster2", asteroid2img);
      break;
      case 3: aster.addImage("aster3", asteroid3img);
      break;
      case 4: aster.addImage("aster4", asteroid4img);
      break;
      case 5: aster.addImage("aster5", asteroid1img);
      break;
      default: break;
  }
  asterGroup.add(aster);
  
}

/*if (player.index !== null) {
   for (var i = 0; i < asterGroup.length; i++) {
       if (asterGroup.get(i).isTouching(Spaceships)) {
        
        Spaceships.get(i).destroy();
           player.score =player.score+1;
           player.update();
           
       }
       
   }
}*/




drawSprites();

  }

  end(){
    console.log("Game Ended");
console.log(player.rank);


  }



}