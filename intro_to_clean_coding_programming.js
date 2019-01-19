//Programming Questions -- JavaScript
/*6. Given an array of integers, find out whether the sum of the integers is a
perfect square. If it is a perfect square, return the square root, otherwise
return sum.*/

function isPerfectSquare(numbers) {
  let sum = numbers.reduce((total, item) => total + item);
  if (Number.isInteger(Math.sqrt(sum)) == true) {
    return Math.sqrt(sum);
  } else {
    return sum;
  }
}

/*7. Given an array of integers, find out whether the array contains any duplicate
elements. The function should return true if any value appears at least twice in
the array, and false if every element is distinct.*/

function hasDuplicate(numbers) {
  numbers.sort(function(a, b) {
    return a - b;
  })
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] == numbers[i - 1]) {
      return true;
    }
  } return false;
}

//Extra Credit
/*An anagram is a word, phrase, or name formed by rearranging the letters of
another word. For example, spar can be formed from rasp. Given two strings,
stringOne and stringTwo, determine if stringOne is an anagram of stringTwo.
Assume that the strings contain only lowercase letters and do not worry about
case-sensitivity. Hint: Your first task will be to convert the strings to arrays.*/

function isAnagram(stringOne, stringTwo) {
  let arrOne = stringOne.split("").sort();
  let arrTwo = stringTwo.split("").sort();
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] != arrTwo[i]) {
      return false;
    }
  } return true;
}
