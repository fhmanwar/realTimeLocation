const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
   res.send("Node Server is running. Yay!!")
})

// http.listen(3000)
var server_port = process.env.PORT || 3000;
http.listen(server_port, function (err) {
  if (err) throw err
  console.log('Listening on port %d', server_port);
});