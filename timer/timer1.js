let arguments = process.argv.slice(2);

const timer = function (args) {
  for (let i = 0; i < args.length; i++) {
    let secs = numbers(args[i]);
    if (isNaN(secs) || secs < 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, secs * 1000);
  }
}

timer(arguments);

console.log("hello")