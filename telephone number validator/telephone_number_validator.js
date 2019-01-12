function telephoneCheck(str) {
  /*
    ^                                           // STRING START
    ([1]{1,1})?                                 // Country code, optional
    (([ ]?[(]\d{3}[)][ ]?)|([ ]?\d{3}[ ]?))     // Area code, required
    [- ]?                                       // Seperator, optional
    (\d{3})                                     // Exchange code, required
    [- ]?                                       // Seperator, optional
    (\d{4})                                     // Subscriber number, required
    $                                           // STRING END
    */
  let regex = /^([1]{1,1})?(([ ]?[(]\d{3}[)][ ]?)|([ ]?\d{3}[ ]?))[- ]?(\d{3})[- ]?(\d{4})$/;

  let digits = str.match(/\d/g).length;
  console.log(digits + " digits in " + str);

  if ((10 == digits || digits == 11) && regex.test(str)) {
    console.log(true);
    console.log("");
    return true;
  }
  console.log(false);
  console.log("");
  return false;
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("123**&!!asdf#");
telephoneCheck("55555555");
telephoneCheck("(6054756961)");
telephoneCheck("2 (757) 622-7382");
telephoneCheck("0 (757) 622-7382");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("2 757 622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("27576227382");
telephoneCheck("(275)76227382");
telephoneCheck("2(757)6227382");
telephoneCheck("2(757)622-7382");
telephoneCheck("555)-555-5555");
telephoneCheck("(555-555-5555");
telephoneCheck("(555)5(55?)-5555");

/*
  555-555-5555
   should return a boolean.
  1 555-555-5555
   should return true.
  1 (555) 555-5555
   should return true.
  5555555555
   should return true.
  555-555-5555
   should return true.
  (555)555-5555
   should return true.
  1(555)555-5555
   should return true.
  555-5555
  should return false.
  5555555
  should return false.
  1 555)555-5555
  should return false.
  1 555 555 5555
   should return true.
  1 456 789 4444
   should return true.
  123**&!!asdf#
  should return false.
  55555555
  should return false.
  (6054756961)
   should return false
  2 (757) 622-7382
  should return false.
  0 (757) 622-7382
  should return false.
  -1 (757) 622-7382
   should return false
  2 757 622-7382
  should return false.
  10 (757) 622-7382
  should return false.
  27576227382
  should return false.
  (275)76227382
  should return false.
  2(757)6227382
  should return false.
  2(757)622-7382
  should return false.
  555)-555-5555
  should return false.
  (555-555-5555
  should return false.
  (555)5(55?)-5555
  should return false.
  */
