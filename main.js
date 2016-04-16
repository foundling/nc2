var gameEngine = require('./game_engine');
var uiFuncs = require('./ui_utils');
var $ = require('jquery');

var src;

var dragStart = function(ev) {
    if (gameEngine.notValidMove(ev.target)) {
        // notValidMove says this is either not a player piece, or it's not your turn
        return;
    }

    src = ev.target;

};

var dragEnter = function(ev) {
    // add drag over classes
    ev.target
};

var dragOver = function(ev) {
    ev.preventDefault();
};

var dragLeave = function(ev) {
   // remove drag over classes 
};

var drop = function(ev) {
    uiFuncs.swapUiData(ev.target, src);
};
