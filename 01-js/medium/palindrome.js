/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
 let tokens = str.split(" ");
 str="";
 for( let token of tokens){
  let cleanWord = "";
  for(let char of token){
	 if(char == '?' || char == '!' || char == ',' || char == '.' ||  char == '"') {	 
	 continue;
	  }
	  cleanWord+=char;
  }
  str+=cleanWord;
 }
  let start = 0;
  let  end = str.length -1;
 while(start <= end ){
   if(str[start] != str[end]){
    return false;
  }
  start++;
  end--;
 }
  return true;
}
module.exports = isPalindrome;
