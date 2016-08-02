const info = require('./systemInfo')
const readline = require('readline');
const filePath = require('./getFiles');
//Getting the info 
info.getInfo()

//Getting the path from the user

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the path? ', (path) => {
  var files = new filePath(path)
  files.findFiles()
  rl.close()
});

