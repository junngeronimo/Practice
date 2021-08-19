// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.


function isPalindrome(s: string): boolean {
  let isPalindrome:boolean = true;

  // remove spelling case, whitespace, and non-alphanumeric
  let cleanS = s.toLowerCase();
  cleanS = cleanS.replace(/\_/g, "");
  cleanS = cleanS.replace(/\W/g, "");

  // console.log(cleanS);

  let start:number = 0;
  let end:number = cleanS.length-1;
  let half:number = (cleanS.length-1)/2;
  // console.log(`start: ${start}\nend: ${end}\nhalf: ${cleanS.length/2}\ns: ${s.length}`);


  while (start < half && end > half && cleanS.length > 1) {
    // console.log(`start: ${start}\nend: ${end}\nhalf: ${cleanS.length/2}\ns: ${s.length}`);
    // console.log(cleanS.charAt(start));
    // console.log(cleanS.charAt(end));
    if (cleanS.charAt(start) === cleanS.charAt(end)) {
      start++
      end--;
    } else {
      // console.log(false);
      return false;
    }
  }

  // console.log(isPalindrome);
  return isPalindrome;
};

isPalindrome("A man, a plan, a canal: Panama");
// isPalindrome("race a car");
// isPalindrome("aa");
// isPalindrome(" ");
isPalindrome("ab_a$");