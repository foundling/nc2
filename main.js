var gameEngine = require('./game_engine');
var $ = require('jquery');
var domUtils = require('./dom_utils');

var longPollStart = require('./long_poll').start;
var longPollUpdate = require('./long_poll').update;

var getNcData = function() {
        return JSON.parse(window.localStorage.getItem('netchess-data'));
};

var src;

var dragStart = function(ev) {

    if (gameEngine.notYourTurn(parsePlayer(ev.target)) {
        // notYourTurn is true if the piece doesn't match the current player
        ev.preventDefault();
        ev.stopPropagation();
        return false;
    }

    src = ev.target;
    domUtils.startDrag(ev.target);
};

var dragEnter = function(ev) {
    domUtils.addDragOverClass(ev.target);
    // add drag over classes
};

var dragOver = function(ev) {
    ev.preventDefault();
};

var dragLeave = function(ev) {
    domUtils.removeDragOverClass(ev.target);
   // remove drag over classes 
};

var drop = function(ev) {

    var dst = ev.target;

    if (gameEngine.validMove(src, dst) {
        gameEngine.updateGame(src, dst);
        domUtils.completeDrag(src, dst);
        domUtils.swapUiData(src, dst);
    } else {
        domUtils.cancelMove(src, ev.target);
    }

};

function main() {
    $('.squares').each(function($square) {
        $square.on('dragstart', dragStart);
        $square.on('dragenter', dragEnter);
        $square.on('dragover',  dragOver);
        $square.on('dragleave', dragLeave);
        $square.on('drop',      drop);
    });
    var userData = getNcData();
    longPollStart(userData,function(response) {
        var moveData = JSON.parse(response);
        // concern: you need to update the ui and the game state via the engine using this response data,
        // in the same way that you do it in the moves made by the player on this side in drag events.
        domUtils.movePiece(response.src, response.dst);
    });
};
