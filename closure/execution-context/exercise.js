// Create the execution context flow of the this function

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.value(); //0
counter.increment(); //updates internally privatecounter to 1
counter.increment(); //updates internally privatecounter to 2
counter.value(); // 2
counter.decrement(); // updates internally privatecounter to 2
counter.value(); // 1
