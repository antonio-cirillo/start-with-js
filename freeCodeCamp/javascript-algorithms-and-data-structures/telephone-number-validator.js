function telephoneCheck(str) {
  const regEx = /^(\d{3}|1 ?\d{3}|(1|1 )?\(\d{3}\))(-| )?\d{3}(-| )?\d{4}$/
  return regEx.test(str);
}

console.log(telephoneCheck("555-555-5555"));
