var $ = require('jquery');

var getNcData = function() {
    return JSON.parse(window.localStorage.getItem('netchess-data'));
};

var update = function(userData, callback) { 
     $.ajax({ 
 
          url:    '/update', 
          method: 'POST', 
          data:   JSON.stringify({ 
              userData: userData,
              init: true, 
              move: { 
                src:  null, 
                dst:  null 
              } 
          }) 
 
      })
     .done(callback);
};

/*
     function(res) { 
          var moveData = JSON.parse(res); 
          movePiece(moveData.src,moveData.dst); 
      }); 
*/
var start = function () {
    var ncData = getNcData();
    if (ncData.player  && ncData.player === 'player2') {
        update();
    }
};

module.exports = exports = {
    start: start,
    update: update
};
