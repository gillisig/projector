var simpleGit = require("simple-git")("Syncthing-mockups");

simpleGit.log(function(err, log) {
  console.log(log);
});
