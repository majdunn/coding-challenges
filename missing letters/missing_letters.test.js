const fearNotLetter = require('./missing_letters.js');

test('finds missing letter', () => {
    expect(fearNotLetter("abce")).toBe("d");
    expect(fearNotLetter("abcdefghjklmno")).toBe("i");
    expect(fearNotLetter("stvwx")).toBe("u");
    expect(fearNotLetter("bcdf")).toBe("e");
    expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toBe(undefined);

})