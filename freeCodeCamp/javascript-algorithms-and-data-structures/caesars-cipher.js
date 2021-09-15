function rot13(str) {
  const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const strArr = [...str];
  let newStr = "";
  
  for(let i = 0; i < strArr.length; i++) {
    const index = arr.indexOf(strArr[i]);
    if(index >= 0) {
      newStr += arr[(index + 13) % 26];
      continue;
    }
    newStr += strArr[i];
    
  }

  return newStr;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
