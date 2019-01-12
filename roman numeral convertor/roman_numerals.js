function convertToRoman(num) {
  let roman = "";

  let romanNumerals = [
    [1000, "M"],
    [900, "CM"],
    [800, "DCCC"],
    [700, "DCC"],
    [600, "DC"],
    [500, "D"],
    [400, "CD"],
    [300, "CCC"],
    [200, "CC"],
    [100, "C"],
    [90, "XC"],
    [80, "LXXX"],
    [70, "LXX"],
    [60, "LX"],
    [50, "L"],
    [40, "XL"],
    [30, "XXX"],
    [20, "XX"],
    [10, "X"],
    [9, "IX"],
    [8, "VIII"],
    [7, "VII"],
    [6, "VI"],
    [5, "V"],
    [4, "IV"],
    [3, "III"],
    [2, "II"],
    [1, "I"]
  ];

  for (let i = 0; i < romanNumerals.length; i++) {
    while (romanNumerals[i][0] <= num) {
      roman += romanNumerals[i][1];
      num -= romanNumerals[i][0];
    }
  }

  return roman;
}

convertToRoman(2014);