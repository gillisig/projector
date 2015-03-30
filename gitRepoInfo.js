var getRepoInfo = require('git-repo-info');

var info = getRepoInfo("Syncthing-mockups/.git");

console.log(info);