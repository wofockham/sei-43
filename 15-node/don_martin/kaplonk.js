const fs = require('fs');
const say = require('say');
const _ = require('underscore');

if (fs.existsSync('./martin.json')) {
  const sounds = require('./martin.json');
  const randomSound = _(sounds).sample();
  console.log( randomSound.description );
  console.log( randomSound.sound );
  say.speak( randomSound.sound.toLowerCase() );
} else {
  console.log('Please run: npm run scrape');
}
