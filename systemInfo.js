let os = require('os');
class userInfo {
  getInfo() {
    console.log('CPU Architecture: ', os.arch())
    console.log('CPU ', os.cpus()[0].model)
    console.log('Platform: ', os.platform())
    console.log('Release:', os.release());
    console.log('User Name:', os.userInfo().username);
    console.log('Home Directory:', os.homedir())
    console.log('Host Name: ', os.hostname())
  }
}

module.exports = new userInfo()