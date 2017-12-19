// remove vowels from a string

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// other solutions

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

function disemvowel(str) {
  var vowels = ["a","A","e","E","i","I","o","O","u","U"]; 
  
  vowels.map(function(vowel){
     str = str.split(vowel).join("")
  });
  
  return str;
}


console.log(disemvowel('I am super Troll mushahahahah LOL'))