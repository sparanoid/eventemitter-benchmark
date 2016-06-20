var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var Heatup = require('events').EventEmitter;
var heatup = new Heatup();

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var EventEmitter2 = require('eventemitter2');
var emitter2 = new EventEmitter2();

var EventEmitter3 = require('eventemitter3');
var emitter3 = new EventEmitter3();

var EventEmitter4 = require('eventemitter4');
var emitter4 = new EventEmitter4();

var EventEmitter5 = require('fast-event-emitter');
var emitter5 = new EventEmitter5();

Benchmark.prototype.setup(function() {
  var count = [0, 0, 0, 0, 0, 0];
});

suite

  .add('EventEmitterHeatUp', function() {

      heatup.on('heatup', function () {
        heatup.removeAllListeners('heatup');
        return new Date();
      });
      heatup.emit('heatup');

  })

  .add('EventEmitter', function() {

    emitter.on('test1', function () {
      emitter.removeAllListeners('test1');
      return new Date();
    });
    emitter.emit('test1');

  })
  .add('EventEmitter2', function() {

    emitter2.on('test2', function () {
      emitter2.removeAllListeners('test2');
      return new Date();
    });
    emitter2.emit('test2');

  })

  .add('EventEmitter3', function() {

    emitter3.on('test3', function () {
      emitter3.removeAllListeners('test3');
      return new Date();
    });
    emitter3.emit('test3');

  })

  .add('EventEmitter4', function() {

    emitter4.on('test4', function () {
      emitter4.removeAllListeners('test4');
      return new Date();
    });
    emitter4.emit('test4');

  })

  .add('EventEmitter5', function() {

    emitter5.on('test5', function () {
      emitter5.removeAllListeners('test5');
      return new Date();
    });
    emitter5.emit('test5');

  })

  .on('cycle', function(event, bench) {
    console.log(String(event.target));
  })

  .on('complete', function() {
    console.log('\nFastest is ' + this.filter('fastest').map('name'));
  })

  .run({async: false});
