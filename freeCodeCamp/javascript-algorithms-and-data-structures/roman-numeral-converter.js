function convertToRoman(num) {
  console.log(num);
  if(num >= 1000) 
    return "M" + convertToRoman(num - 1000);

  if(num >= 900)
    return "CM" + convertToRoman(num - 900);

  if(num >= 500)
    return "D" + convertToRoman(num - 500);
  
  if(num >= 400)
    return "CD" + convertToRoman(num - 400);

  if(num >= 100)
    return "C" + convertToRoman(num - 100);

  if(num >= 90)
    return "XC" + convertToRoman(num - 90);

  if(num >= 50)
    return "L" + convertToRoman(num - 50);

  if(num >= 40)
    return "XL" + convertToRoman(num - 40);

  if(num >= 10)
    return "X" + convertToRoman(num - 10);

  if(num == 9)
    return "IX";

  if(num >= 5)
    return "V" + convertToRoman(num - 5);

  if(num == 4)
    return "IV"

  if(num == 3)
    return "III";

  if(num == 2)
    return "II";

  if(num == 1)
    return "I";

  if(num == 0)
    return "";
}

console.log(convertToRoman(3999));