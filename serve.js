var server = require('server');
var { get } = server.router;

var rpio = require('rpio');

rpio.open(11, rpio.OUTPUT);

function blink() {
  rpio.write(11, rpio.HIGH);
  setTimeout(function ledoff() {
    rpio.write(11, rpio.LOW);
  }, 50);
}

server({ port: 8080 }, [
  get('/' ,  ctx => {
    console.log('a request is coming...');
    blink();
  }),
]);

console.log('server starts on 8080 port');
