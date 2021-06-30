class Game {
  constructor(){}
  
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
      player=new Player();
      var playerCountref = await database.ref("playerCount").once("value");
      if(playerCountref.exists()){
        playerCount=playerCountref.val();
        player.getCount();
      }
        form = new Form()
        form.display();
      }
    }

    play(){
      form.hide();
      text("GAME STARTS",120,100);
      Player.playerInfo();

      if(allPlayers !== undefined){
        var dp=130;
        for(var plr in allPlayers){
          if(plr == 'player'+ player.index)
          fill("red")
          else
          fill("black")
          dp+=20
          textSize(20) 
          text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,dp)
        }
      }
      if(keyIsDown(UP_ARROW && player.index !== null)){
        player.distance+=50;
        player.update();
      }
    }
  }
