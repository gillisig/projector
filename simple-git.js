var simpleGit = require("simple-git")("Syncthing-mockups");

// simpleGit.log(function(err, log) {
//   console.log(log);
// });
console.log(simpleGit.checkout("53ef031d3285186a90a699342d6b29eb002bcdbd"));
