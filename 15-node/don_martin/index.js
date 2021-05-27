const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const sourceURL = 'https://www.madcoversite.com/dmd-alphabetical.html';

axios.get(sourceURL).then((response) => {
  // get the data
  const html = response.data;
  const $ = cheerio.load(html); // Thanks Audrey!
  const $rows = $('table table tr:nth-child(n+2)');

  const entries = [];

  $rows.each(function () { // need `this` so we can't use a fat arrow function.
    const $cells = $('td', this);

    const entry = {
      sound: $cells.eq(0).text(),
      description: $cells.eq(1).text(),
      source: $cells.eq(2).text(),
      title: $cells.eq(3).text()
    };

    entries.push(entry);
  });

  fs.writeFile('./martin.json', JSON.stringify(entries, null, 2), () => {
    console.log(`martin.json saved: ${ entries.length } entries`);
  });

});
