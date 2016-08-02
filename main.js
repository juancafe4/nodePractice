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
//   let files = new filePath(path)
//   files.findFiles()
//   rl.close()
// });


// getting user input
let create = false;
let add = false
let segment;
let infoSeg;
process.argv.forEach((val, index, arr) => {
  if (val === 'create') {
    create = true;
    segment = arr[index + 1]
  }
  
  if (val === 'add') {
    add = true;
    infoSeg = arr[index + 1]
  }

  if (val === '-h') {
    console.log("node nameFile.js add 'components' will write to a file first component will be the name of the file in json the rest the info.\n",
      "node nameFile.js create 'components' will create nested directories\n")
  }
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

if (add) {
  if (infoSeg.length > 0) {
    infoSeg = infoSeg.split(' ')
    let count = 0;
    console.log("Creating or appending file: ", infoSeg + ".json")
    let fileDir = infoSeg[0]
    fs.readFile(fileDir, (err, data) => {
      infoSeg.splice(0, 1)
      let arr = []
      if (!err)  {
        arr = JSON.parse(data)
      }
      let stringify = JSON.stringify(infoSeg.concat(arr))
      console.log(stringify)
      fs.writeFile(fileDir + ".json", stringify,(err) => {
          if(err) throw err
      });
    });
  }

  else {
    console.log('wrong syntax please specify the content of the file')
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

