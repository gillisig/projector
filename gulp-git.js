var gulp = require('gulp');
var git = require('gulp-git');

console.log(git.status({cwd: "../Syncthing-mockups"}, function(err, stdout) {
  if (err) throw err;
}));