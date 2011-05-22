

var haibu = require('haibu'), 
    inspect = require('eyes').inspector({
      maxLength: 65536
    }), 
    client = new haibu.drone.Client({
      host: 'localhost',
      port: 9002
    });
 
  client.get('hello-express-haibu', function (err,results){
    return inspect(err || (results || 'undefined'));
  })