function isPalindrome(word) {
  // Write your algorithm here
const le = word.length;

if (le == 0 || le == 1){
  console.log(true)
  return true;
} else if (word.length > 1){
  
  for (i=0; i<=le/2; i++){
    if (word[i] !== word[le-1-i]){

      console.log(false)
      return false;
    }
  }
  
  console.log(true)
  return true;
}

}
isPalindrome("madam")
/* 
Add your pseudocode here
1. check if the input is an empty string or one character and return true
2. if the string has more than two characters, 
   compare the last and first, second and second last and so on recursively.
3. If the characters are strickly equal for upto 1/2 the length of the string during recursion,
    return true, else return false.  
*/

/*
Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
// add your own custom tests in here
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;