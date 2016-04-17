var validator = require('./validator');
var board = new Board();


var currentPlayer = 'player1';

var gameEngine = function() {
    this.board = board.init(); 
}
