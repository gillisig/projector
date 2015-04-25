var gulp = require("gulp");
var gitWatch = require("gulp-git-watch");

gulp.task("git-watch", function() {
  gitWatch()
    .on("check", function() {
      console.log("check git");
    })
    .on("change", function(newHash, oldHash) {
      console.log("Git changed from " + oldHash + " to " + newHash);
    });
});
