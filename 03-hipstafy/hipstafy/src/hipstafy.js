var hipster = require('../lib/snippets');


var hipsterIt = function (userInput) {
  var arr= [];
  var data = userInput.toUpperCase().split(' ');
  for (var i = 0; i < data.length; i++) {
    var rand = hipster[Math.floor(Math.random() * hipster.length)];
    arr.push(data[i] + " "+ rand)
  }
  arr = arr.join(' ')
  return arr;
}

module.exports = hipsterIt;
