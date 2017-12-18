// Count the number of vowels in a string 

function getCount(str) {
  let vowelsCount = 0;
  let vowels = 'aeiou'
  str.split('').map(letter => {
    console.log(letter)
    vowels.split('').map(vowel => {
      if ( letter === vowel) {
        console.log(letter)
        vowelsCount++
        console.log(vowelsCount)
      }
    })
  })
  // enter your majic here
  
  return vowelsCount;
}


function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}


console.log(getCount('abracadabra'))