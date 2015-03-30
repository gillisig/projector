var Repo = require("git-tools");
// var repo  = new git("../Syncthing-mockups");

var test = Repo.isRepo("Syncthing-mockups/.git", function(error, isRepo) {
  return isRepo;
});
console.log(test);