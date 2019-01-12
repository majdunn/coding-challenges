const convertHTML = require('./convert_html_entities.js');

// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
test('Dolce &​amp; Gabbana', () => {
    expect(convertHTML("Dolce & Gabbana")).toMatch("Dolce &​amp; Gabbana"); 
});

// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
test('Hamburgers &​lt; Pizza &​lt; Tacos', () => {
    expect(convertHTML("Hamburgers < Pizza < Tacos")).toMatch("Hamburgers &​lt; Pizza &​lt; Tacos");
});

// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
test('Sixty &​gt; twelve', () => {
    expect(convertHTML("Sixty > twelve")).toMatch("Sixty &​gt; twelve");
});

// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
test('Stuff in &​quot;quotation marks&​quot;', () => {
    expect(convertHTML('Stuff in "quotation marks"')).toMatch("Stuff in &​quot;quotation marks&​quot;");
});

// convertHTML("Schindler's List") should return Schindler&​apos;s List.
test('Schindler&​apos;s List', () => {
    expect(convertHTML("Schindler's List")).toMatch("Schindler&​apos;s List");
});

// convertHTML("<>") should return &​lt;&​gt;.
test('&​lt;&​gt;', () => {
    expect(convertHTML("<>")).toMatch("&​lt;&​gt;");
});

// convertHTML("abc") should return abc.
test('abc', () => {
    expect(convertHTML("abc")).toMatch("abc");
});
