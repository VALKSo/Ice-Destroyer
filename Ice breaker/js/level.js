function rnd(){ 
    var x = Math.floor(Math.random() * 4)
    return x;
    }
console.log(rnd());


  var levelData = { 
     1:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,rnd(),0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     2:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,1,0,0,0,3,3,0,0],
          [0,0,1,1,0,0,0,3,3,0,0],
          [0,0,0,0,3,3,3,3,0,0,0],
          [3,3,3,0,2,2,2,2,0,3,3],
          [1,2,1,3,1,3,2,1,3,2,1]],
     3:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,3,3,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [3,3,3,3,3,3,3,3,3,3,3],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0]] };

  var spriteData = {
    'alien1': { sx: 5,  sy: 4,  w: 29, h: 20, cls: Alien, frames: 1 },
    'alien2': { sx: 34,  sy: 4, w: 29, h: 20, cls: Alien, frames: 1 },
    'alien3': { sx: 44,  sy: 32, w: 17, h: 9, cls: Alien, frames: 1 },
    'player': { sx: 8,  sy: 36, w: 26, h: 50, cls: Player, frames: 1 },
    'missile': { sx: 55,  sy: 53, w: 8,  h: 8, cls: Missile }
  }

  function startGame() {
     

    var screen = new GameScreen(" "," ",
                                 function() {
                                      $('#gameboard').css('background-image', 'url("images/aloneinspace.png")');
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }

  function endGame() {
    var screen = new GameScreen("Game Over","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


  function winGame() {
    var screen = new GameScreen("You Win!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }

  $(function() {
    GameAudio.load({ 'fire' : 'media/cannon.ogg', 'die' : 'media/explosion.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



