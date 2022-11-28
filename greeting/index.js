const fs = require('fs');

const content = 'Hello, John Doe!';
fs.writeFile('greeting.txt', content, (error) => {
  if (error) throw error;
  console.log(`Successfully generate file.`);
});
