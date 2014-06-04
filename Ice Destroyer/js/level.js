function rnd(){ 
    var x = Math.floor(Math.random() * 5)
    return x;
    }
console.log(rnd());


  var levelData = { 
     1:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,1,0,0,2,0,3,0,4],
          [0,0,0,0,0,2,0,0,0,0,1],
          [0,0,0,0,0,0,2,0,0,0,1],
          [0,0,0,0,0,0,0,2,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,rnd(),0,0,0,0,1],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     2:  [[0,0,1,1,0,0,0,3,3,0,0],
          [0,0,1,1,0,0,0,3,3,0,0],
          [0,0,0,0,3,3,3,3,0,0,0],
          [0,3,3,0,2,2,2,2,0,3,0],
          [0,2,1,3,1,3,2,1,3,2,0]
		  [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     3:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,3,3,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,3,3,3,3,3,0,0,0],
          [0,0,2,2,2,2,2,2,2,0,0],
          [0,0,2,2,2,2,2,2,2,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0]],
     4:	  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,3,3,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,3,0,0,3,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,0,0],
          [0,0,2,2,0,2,0,2,2,0,0],
          [0,0,0,1,1,0,1,1,1,0,0],
          [0,0,0,1,1,1,1,1,1,0,0],
          [0,0,0,1,1,0,1,1,1,0,0],
          [0,0,0,1,1,0,1,1,0,0,0]]
  };

  var spriteData = {
    'alien1': { sx: 37,  sy: 3,  w: 49, h: 33, cls: Alien, frames: 1 },
    'alien2': { sx: 76,  sy: 64, w: 48, h: 28, cls: Alien, frames: 1 },
    'alien3': { sx: 132,  sy: 57, w: 50, h: 37, cls: Alien, frames: 1 },
	'alien4': { sx: 92,  sy: 23, w: 37, h: 13, cls: Alien, frames: 1 },
    'player': { sx: 0,  sy: 45, w: 69, h: 49, cls: Player, frames: 1 },
    'missile': { sx: 69,  sy: 62, w: 8,  h: 8, cls: Missile }
  }

  function startGame() {
     

    var screen = new GameScreen(" ","PRESS ENTER",
                                 function() {
                                      $('#gameboard').css('background-image', 'url("images/bckgr.png")');
									  	Game.loadBoard(new GameBoard(1));
									    GameAudio.play('arr');
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }

  function endGame() {
    var screen = new GameScreen("GAME OVER","Press enter to restart!",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


  function winGame() {
    var screen = new GameScreen("You Win!","(Press enter to play again!)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));									 
                                 });
    Game.loadBoard(screen);
  }

  $(function() {
    GameAudio.load({ 'fire' : 'media/cannon.ogg', 'die' : 'media/xplode.ogg', 'arr' : 'media/arr.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



