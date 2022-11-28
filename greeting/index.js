const fs = require('fs');
const args = process.argv.slice(2);
const currentPath = process.argv[0];
const configFileName = args[0] ? args[0] : 'greeting.config.js';
const config = require(`${currentPath}/../../../../../${configFileName}`);
const { name, drink } = config;

const content = `Hello, ${name}! Would you like to have some ${drink}?`;
fs.writeFile('greeting.txt', content, (error) => {
  if (error) throw error;
  console.log(`Successfully generate file.`);
});
