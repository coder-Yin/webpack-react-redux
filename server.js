var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var fs = require('fs')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/src/app/index/index.html')
})

let directories = fs.readdirSync(__dirname+"/src/app");
for (let dir of directories) {
  app.get("/"+dir, function(req, res) {
    res.sendFile(__dirname + '/src/app/'+dir+'/index.html')
  })
}

//
// app.get("/sta/css/bootstrap.min.css", function(req, res) {
//   res.sendFile(__dirname + '/sta/css/bootstrap.min.css')
// })
//
// app.get("/sta/css/animate.css", function(req, res) {
//   res.sendFile(__dirname + '/sta/css/animate.css')
// })
//
// app.get("/sta/css/common.css", function(req, res) {
//   res.sendFile(__dirname + '/sta/css/common.css')
// })
// app.use('/sta',express.static(path.join(__dirname, 'sta')));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
