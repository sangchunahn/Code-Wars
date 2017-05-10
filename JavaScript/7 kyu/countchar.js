// The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

// For example:

// countChar("fizzbuzz","z") => 4
// countChar("Fancy fifth fly aloof","f") => 5
// The character can be any alphanumeric character.

// solution:

function countChar(string, char) {
  var x = string.split('');
  var count = 0;
  for (var i = 0; i < x.length; i++) {
    if ( x[i] === char) {
      count += 1;
    } 
    else if ( x[i] === char.toUpperCase()) {
      count += 1;
    }
    else if ( x[i].toUpperCase() === char) {
      count += 1;
    }
  }
  return count;
  // your mission, should you choose to accept it. 
}