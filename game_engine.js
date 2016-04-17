var validator = require('./validator');
var board = new Board();


var currentPlayer = 'player1';

var gameEngine = function() {
    this.board = board.init(); 
}

gameEngine.prototype.notYourTurn = function(playerName) {
    return playerName !== currentPlayer;
};

gameEngine.prototype.validMove = function(src, dst) {
    // assumes that the src is a valid player piece
    validator.validate(src, dst);
};

gameEngine.prototype.handleCollision = function(src, dst) {
    
};

gameEngine.prototype.updateGame = function(src, dst) {
    this.handleCollision(src, dst);
};
