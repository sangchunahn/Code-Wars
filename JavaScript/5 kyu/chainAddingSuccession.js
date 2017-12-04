// first

function add() {
  function initial(value) {
      function next(num) {
          return initial(value + num);
      };

      next.toString = function() {
          return value;
      };
      return next;
  };
  return initial(0);
};

// additional 

function add(initNum) {
  var current = initNum || 0;
  function addNum(num) {
      current += num;
      return addNum;
  };
  addNum.toString = function() {
    return current
  };
  return addNum;
};

add(1); // 1
add(1); // 1
add(1)(2); // 3
add(1)(2)(3); // 6