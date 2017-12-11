// remove the first and last character of string

function removeChar(str) {
  return str.slice(1, -1);
}

// others

function removeChar(str){
  return str.substring(1, str.length-1);
 };

 function removeChar(str){
   str1 = str.split('');
   str1.shift();
   str1.pop();
   return str1.join('');
 };
 