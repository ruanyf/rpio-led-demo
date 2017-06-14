var rpio = require('rpio');

rpio.open(11, rpio.OUTPUT);

/*
 * Blink the LED quickly (10 times per second).  It is switched on every
 * 100ms, and a timeout is set for 50ms later to switch it off, giving us
 * the regular blink.
 */
setInterval(function blink() {
	rpio.write(11, rpio.HIGH);
	setTimeout(function ledoff() {
		rpio.write(11, rpio.LOW);
	}, 50);
}, 100);
