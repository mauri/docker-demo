exitOnSignal('SIGINT');
exitOnSignal('SIGTERM');
process.stdin.resume();

function exitOnSignal(signal) {
  process.on(signal, function() {
    console.log('\ncaught ' + signal + ', exiting');
    process.exit(1);
  });
}

var interval = setInterval(function(){ 
    console.log('Hello World'); 
  }, 3000);
