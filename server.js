const http = require('http')

const port = 8000

const server = http.createServer((request, response) => {
  console.log(request.url)
  console.log('My first server')

  response.end('<h1> Hello </h1>')
});


server.listen(port ,(err) => {
  if(err) {
    return "Error!"
  }

  console.log(`server is listenning on ${port}`)
});

