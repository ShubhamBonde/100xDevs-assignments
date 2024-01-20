/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {
  /*
      Logic - So if a word is anagram then that means all the letters present in the word must be present in the other word
      Use a map to keep the track of frequency of all the characters 
  */

  if (str1.length !== str2.length) {
    return false;
  }

  // normalize strings
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let CharFreq = new Map();
  
  // Populating the map
  for(char of str1) {
    if (CharFreq.get(char) !== undefined) {
      if (CharFreq.get(char) >= 1) {
        CharFreq.set(char, CharFreq.get(char)+1);
        continue;
      }
    }
      
    CharFreq.set(char, 1);
  }

//  console.log(CharFreq)

  // Shubham <-> mushabh

  // Now Iterate over second string
  for(char of str2) {
    if (CharFreq.get(char) === undefined || CharFreq.get(char) <= 0) {
      // This means that there exists a character which is exhausted and can't be found again in the string 1 or it is just not present in the string1
      return false;
    }
    else {
      CharFreq.set(char, CharFreq.get(char)-1);
    }
  }


  // for (char of str)

  // Here we have checked for existance of characters present in string2 and if we reach here then that means all the cahrs have been found 
  return true;

}

module.exports = isAnagram;
