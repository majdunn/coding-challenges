function convertHTML(str) {
  console.log("str: ", str);

  str = str
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, "&apos;");

  console.log("str: ", str);
  return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");

module.exports = convertHTML;
// TESTING NOTE: jest does not work for this?? Something to do with the ampersand and/or quotes
// const map = {
  //   '&': '&amp;',
  //   '<': '&lt;',
  //   '>': '&gt;',
  //   '"': '&​quot;',
  //   '\'': '&​apos;'
  // };

  // str = str
  //   .split("")
  //   .map(entity => map[entity] || entity)
  //   .join("");

// const map = {
//   "&": "&amp;",
//   "<": "&lt;",
//   ">": "&gt;",
//   '"': "&​quot;",
//   "'": "&​apos;",
// }
// console.log('map: ', map);
// str = str.replace(/&/g, function(matched) { return map[matched]});
// str = str.replace(/<|>|"|'/g, function(matched) { return map[matched]});
// console.log('str: ', str);
// return str;

// str = str.replace(/&/g, matched => { return "&amp;"});
//   str = str.replace(/</g, matched => { return "&lt;"});
//   str = str.replace(/>/g, matched => { return "&gt;"});
//   str = str.replace(/"/g, matched => { return "&​quot;"});
//   str = str.replace(/'/g, matched => { return "&​apos;"});
