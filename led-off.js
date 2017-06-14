var rpio = require('rpio');

// Configure pin 11 (GPIO17) for output (i.e. read/write).
// rpio.setOutput(11);
rpio.open(11, rpio.OUTPUT);


// Turn GPIO17 off, also known as 'LOW'.
rpio.write(11, rpio.LOW);
