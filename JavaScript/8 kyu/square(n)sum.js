// Complete the squareSum method so that it squares each number passed into it and then sums the results together.

// For example:

squareSum([1, 2, 2]); // should return 9

// Solutions:

function squareSum(numbers){
  var arr = [];
  var total = 0;
  for(var i = 0; i < numbers.length; i++) {
    arr.push(Math.pow(numbers[i], 2))
  }
  for(var j = 0; j < arr.length; j++) {
    total +=arr[j]
  }
  return total
}

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
