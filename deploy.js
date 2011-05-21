var eyes = require('eyes'),
    haibu = require('haibu');

// Create a new client for communicating with the haibu server
var client = new haibu.drone.Client({
  host: 'localhost',
  port: 9002
});

// A basic package.json for a node.js application on haibu
var app = {
   "user": "dominictarr",
   "name": "hello-express-haibu",
   "domain": "hello.com",
   "repository": {
     "type": "git",
     "url": "https://dominictarr@github.com/dominictarr/hello-haibu-express.git",
   },
   "scripts": {
     "start": "server.js"
   }
};

//Attempt to start up a new application
//client.get('test', function (app){

  client.clean(app,function (err){
  //  console.log('cleaned app:');
    console.log('[go to haibu server tab and enter sudo password]') //  this is a UI bug i'm getting.

    client.start(app, function (err, result) {
      if (err) {
        console.log('Error spawning app: ' + app.name);
        return eyes.inspect(err);
      }

      console.log('Successfully spawned app:');
      eyes.inspect(result);
    });

  });
