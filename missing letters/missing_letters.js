function fearNotLetter(str) {
    const fullAlphabet = "abcdefghijklmnopqrstuvwxyz";
    if (str == fullAlphabet) {
        return undefined;
    }

    const start = str.charAt(0);
    const end = str.substr(-1);
    const re = "["+start+"][a-z]*["+ end + "]";
    const regex = new RegExp(re,"gi");
    let strFull = fullAlphabet.match(regex).toString();

    for (let i = 0; i < strFull.length; i++) {
        if (strFull.charAt(i) != str.charAt(i)) {
            return strFull.charAt(i);
        }
    }
}

// TESTING
let ans;
function compare(a, b) {

  if (a == b) {
    console.log("TEST PASSED -> " + a + " matches " + b);
  } else {
    console.log("TEST FAILED -> " + a + " does not match " + b);
  }
}

// fearNotLetter("abce") should return "d".
ans = "d";
compare(fearNotLetter("abce"),ans);

// fearNotLetter("abcdefghjklmno") should return "i".
ans = "i";
compare(fearNotLetter("abcdefghjklmno"),ans);

// fearNotLetter("stvwx") should return "u".
ans = "u";
compare(fearNotLetter("stvwx"),ans);

// fearNotLetter("bcdf") should return "e".
ans = "e";
compare(fearNotLetter("bcdf"),ans);

// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
ans = undefined;
compare(fearNotLetter("abcdefghijklmnopqrstuvwxyz"),ans);

module.exports = fearNotLetter;