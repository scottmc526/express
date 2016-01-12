var hipster = require('../lib/snippets');


function hipsterIt (userInput) {
  var arr= [];
  var data = userInput.toUpperCase().split(' ');
  for (var i = 0; i < data.length; i++) {
    var rand = hipster[Math.floor(Math.random() * hipster.length)];
    arr.push(data[i] + " "+ rand)
  }
  arr = arr.join(' ')
  console.log(arr)
}


hipsterIt('hello there people')
