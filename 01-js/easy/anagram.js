/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function charCounter(str){
 let result = {};
 for( let char of str){
  if( char in result){ result[char] += 1; }
  else{ result[char] = 1; }
 }
 return result;
}

function isAnagram(str1, str2) {
 str1 = str1.toLowerCase();
 str2 = str2.toLowerCase();
 if( str1.length != str2.length){ return false; }
 let str1Counter = charCounter(str1);
 let str2Counter = charCounter(str2);
 let str1keyLength = Object.keys(str1Counter).length;
 let str2keyLength = Object.keys(str2Counter).length;
 if( str1keyLength != str2keyLength){ return false; }
 for(let key of Object.keys(str1Counter)){
  if( !(key in str2Counter)){
   return false;
  }
 }
 for( let key of Object.keys(str1Counter)){
  if(str1Counter[key] != str1Counter[key]){
   return false;
  }
 }
 return true;
}



module.exports = isAnagram;
