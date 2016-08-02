
const loc = require('path');
const fs = require('fs')
module.exports = class getFiles {
  constructor(path) {
    this.filepath = path;
  }

  get path() {
    return this.filepath;
  }

  set path(path) {
    this.filepath = path
  }

  findFiles() {
    fs.readdir(this.path, (err, files) => {
      if (err) throw err;
      let arr = [ ]
      files.map((val) => {
        if (loc.extname(val) === '.js') {
          arr.push(val)
        }
      });

      console.log('Javascript files: ', arr)
    })
  }
}
