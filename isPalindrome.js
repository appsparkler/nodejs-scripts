function isLuckyPalindrome(str) {
  const strLength = str.length;
  if (isPalindrome(str) && isPrime(strLength)) return "YES, I'm a lucky palindrome!!!";
  if(!isPalindrome(str) && isPrime(strLength)) return "Is lucky but so not palindrome... ";
  if(isPalindrome(str) && !isPrime(strLength)) return "Is Palindrome but not a lucky one :|";
  else return "Wassup??"
}
console.log(isLuckyPalindrome('hellolleh'));

function isPalindrome(str) {
  let result;
  try {
    result = str.split('').reduce(reduce_palindromeString.bind(null), true)
  } catch (e) {
    console.error(e);
  } finally {
    return result
  }
}

function reduce_palindromeString(result, letter, idx, arr) {
  try {
    const arrLenght = arr.length;
    if(result && arr[idx] == arr.reverse()[idx]) {
      result = true;
    } else {
      result = false;
    }
  } catch (e) {
    console.error(e);
  } finally {
    return result
  }
}


function isPrime(n) {
  let isPrime = false;
  try {
    let divisibleFactors = getDivisibleFactors.call(null, n);
    if (divisibleFactors === 2) {
      isPrime = true;
    }
  } catch (e) {
    console.error(e);
  } finally {
    return isPrime
  }
}

function getDivisibleFactors(n) {
  let divisibleFactors = 0;
  try {
    for (let i = 0; i <= n; i++) {
      if (n % i === 0) divisibleFactors++
    }
  } catch (e) {
    console.log(e);
  } finally {
    return divisibleFactors;
  }
}
