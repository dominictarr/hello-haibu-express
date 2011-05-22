var ex = {
    "app":{
      "user":"dominictarr",
      "name":"hello-express-haibu",
      "domain":"hello.com",
      "repository":{
        "type":"git",
        "url":"https://dominictarr@github.com/dominictarr/hello-haibu-express.git"},
        "scripts":{"start":"app.js"},
        "_id":"hello-express-haibu",
        "directories":{"home":"hello-haibu-express"}},
        "drones":{"4379":
          {"process":
            {"uid":"JI8S",
              "ctime":1306005942049,
              "pid":4379,"foreverPid":4317,
              "logFile":"/home/dominic/.forever/JI8S.log",
              "options":[
                "/home/dominic/.nvm/v0.4.7/lib/node_modules/haibu/local/dominictarr/hello-express-haibu/hello-haibu-express/app.js",
                "127.0.0.1",
                8001
              ],
              "file":"/home/dominic/.nvm/v0.4.7/lib/node_modules/haibu/bin/carapace",
              "pidFile":"/home/dominic/.forever/pids/JI8S.pid",
              "port":8001,
              "host":"127.0.0.1"
            },
            "monitor":{
              "silent":true,
              "forever":true,
              "command":"node",
              "minUptime":2000,
              "options":[
                 "/home/dominic/.nvm/v0.4.7/lib/node_modules/haibu/bin/carapace",
                 "/home/dominic/.nvm/v0.4.7/lib/node_modules/haibu/local/dominictarr/hello-express-haibu/hello-haibu-express/app.js",
                 "127.0.0.1",
                 8001
              ],
              "spawnWith":{
              "cwd":"/home/dominic/.nvm/v0.4.7/lib/node_modules/haibu/local/dominictarr/hello-express-haibu/hello-haibu-express"
              },
              "uid":"JI8S",
              "logFile":"/home/dominic/.forever/JI8S.log",
              "pidFile":"/home/dominic/.forever/pids/JI8S.pid",
              "logger":{
                "padLevels":false,
                "levels":{
                  "silly":0,
                  "verbose":1,
                  "info":2,
                  "warn":3,
                  "debug":4,
                  "error":5
                },
                "level":"info",
                "emitErrs":false,
                "transports":{
                  "console":{
                    "name":"console",
                    "level":"info",
                    "silent":true,
                    "colorize":false,
                    "timestamp":true
                  }
                },
                "profilers":{}
              },
              "childExists":true,
              "times":0,
              "_events":{},
              "ctime":1306005942049,
              "child":{
                "killed":false,
                "_internal":{"pid":null},
                "stdin":{
                  "bufferSize":0,
                  "fd":null,
                  "type":null,
                  "allowHalfOpen":false,
                  "_readWatcher":null,
                  "destroyed":true,
                  "readable":false,
                  "_writeQueue":[],
                  "_writeQueueEncoding":[],
                  "_writeQueueFD":[],
                  "_writeQueueCallbacks":[],
                  "_writeWatcher":null,
                  "writable":false,
                  "_idleNext":null,
                  "_idlePrev":null},
                  "stdout":{"bufferSize":0,"fd":null,"type":null,"allowHalfOpen":false,"_events":{},"_readWatcher":null,"destroyed":true,"readable":false,"_writeQueue":[],"_writeQueueEncoding":[],"_writeQueueFD":[],"_writeQueueCallbacks":[],"_writeWatcher":null,"writable":false,"_idleNext":null,"_idlePrev":null},
                  "stderr":{"bufferSize":0,"fd":null,"type":null,"allowHalfOpen":false,"_events":{},"_readWatcher":null,"destroyed":true,"readable":false,"_writeQueue":[],"_writeQueueEncoding":[],"_writeQueueFD":[],"_writeQueueCallbacks":[],"_writeWatcher":null,"writable":false,"_idleNext":null,"_idlePrev":null},
                  "pid":null,"fds":[11,12,14],
                  "_events":{"exit":[null,null,null]},
                  "running":false},"running":true,"childData":{"uid":"JI8S","ctime":1306005942049,"pid":4379,"foreverPid":4317,"logFile":"/home/dominic/.forever/JI8S.log","options":["/home/dominic/.nvm/v0.4.7/lib/node_modules/haibu/local/dominictarr/hello-express-haibu/hello-haibu-express/app.js","127.0.0.1",8001],
              "file":"/home/dominic/.nvm/v0.4.7/lib/node_modules/haibu/bin/carapace","pidFile":"/home/dominic/.forever/pids/JI8S.pid","port":8001,"host":"127.0.0.1"}}}}}
  , eyes = require('eyes')

/*  eyes.inspect({
    a: [],
    b: null,
    c: undefined,
    d: false,
    e: true,
    f: {}
  })*/


  eyes.inspect([null])

var traverser = require('traverser')
  
  
  traverser(ex, {branch: function (p){
      p.each()//branch first, to check the leaves first.
    try{
      eyes.inspect(p.value)
    } catch(e){

      console.log("eyes trying to inspect:", p.value, "AT:", p.path)
      throw e
    }
  }})
