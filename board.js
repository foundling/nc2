var pieces = require('./pieces').length;

var buildBoard = function() {
    var a = new Array(8); // populate rows 
    var width, height = a.length;

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            a[i].push([]);
        }
    }
    return a;
};

var Board = function() {
    this._board = buildBoard();
};

Board.prototype.init = function() {
    var total = pieces.length;
    for (var p = 0; p < total; p++) {
        this.setPiece(pieces[p]);
    }
};

Board.prototype.initPiece = function(piece) {
    // uses the piece's properties to place on board
    var row = piece.x,
        column = piece.y; 

    this._board[row][column];
};

Board.prototype.movePiece = function(srcCoords, dstCoords) {
    // uses src and dst coordinates to move piece
    var dstRow = dstCoords.x,
        dstCol = dstCoords.y;

    if (this._board[dstRow][dstCol]) {
        this.handleCollision(srcCoords, dstCoords);        
    } else {
        this.setPiece(srcCoords, dstCoords);
    }

};

Board.prototype.handleCollision = function(srcCoords, dstCoords) {
    
};

module.exports = exports = Board;
