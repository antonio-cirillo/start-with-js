function palindrome(str) {
  let s = str.toLowerCase().match(/[A-Za-z0-9]/g).join("");
  console.log(s);

  for(let i = 0; i < s.length / 2; i++) {
      if(s[i] !== s[s.length - 1 - i])
        return false;
  }

  return true;
}



palindrome("A man, a plan, a canal. Panama");
