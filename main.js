const info = require('./systemInfo')
const readline = require('readline');
const filePath = require('./getFiles');
const fs = require('fs')
//Getting the info 
info.getInfo()

//Getting the path from the user

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the path? ', (path) => {
//   var files = new filePath(path)
//   files.findFiles()
//   rl.close()
// });


// getting user input
let create = false;
let add = false
let segment;
process.argv.forEach((val, index, arr) => {
  if (val === 'create') {
    create = true;
    segment = arr[index + 1]
  }
  
  if ()
});

if (create) {
  
  if (segment.length > 0) {
    segment = segment.split(' ')
    let count = 0;
    createDir(count, segment)
  }

  else {
    console.log('wrong syntax please specify the directories')
  }
}

function createDir(count, seg) {
  if (count === seg.length) {// base case
    return;
  } 
  else {
    fs.mkdir(seg[count], (err) => {
      if (err) throw(err)
      process.chdir(seg[count]);
      count++;
       return createDir(count, seg)
    })
  }
}

