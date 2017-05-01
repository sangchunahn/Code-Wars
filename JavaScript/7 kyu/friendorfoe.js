// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// Solutions:

function friend(friends){
  var word = [];
  var final = [];
  for(var i = 0; i < friends.length; i++) {
    word = friends[i].split('')
      console.log(word.length)
      if (word.length == 4) {
        final.push(word.join(''))
      } 
  }
  return final
}

function friend(friends){
  return friends.filter(value => value.length === 4);
}