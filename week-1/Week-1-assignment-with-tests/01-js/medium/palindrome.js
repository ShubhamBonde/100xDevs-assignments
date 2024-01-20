/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
   	
	if (!str.length) {
		return true;
	}

	str = str.toLowerCase();
	let lptr = 0;
	let rptr = str.length - 1;
	while (lptr < rptr) {

		if (!(str[lptr] >= 'a' && str[lptr] <= 'z')) {
			lptr++;
			continue;
		};
		if (!(str[rptr] >= 'a' && str[rptr] <= 'z')) {
			rptr--;
			continue;
		};


		if (str[lptr++] !== str[rptr--]) return false;
	}

	return true;
}

module.exports = isPalindrome;
