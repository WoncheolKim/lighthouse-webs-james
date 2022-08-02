function threeTimer (seconds) {
  setTimeout(
    function() {
      console.log("4311o");
    },
    seconds * 3000
  );
  setTimeout(
    function() {
      console.log("th3r3");
    },
    seconds * 6000
  );
  setTimeout(
    function() {
      console.log("w0r1d");
    },
    seconds * 9000
  );
}

threeTimer(1);