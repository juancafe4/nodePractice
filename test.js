const request = require("request");

request('http://swapi.co/api/people/4', function(error, response, body) {
  if (error) throw error
  let json = JSON.parse(body)

  let newPerson = new Person(json.name, )
});
