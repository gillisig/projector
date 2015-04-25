var psd = require('psd');

// Parse a psd file and create a png
function parsePsd(psdFile, saveTo) {

  // Prepare path's and filenames
  var psdFile = "../Syncthing-app-alternative.psd";
  var fileName = psdFile.split("/").slice(-1).join("").split(".").slice(0,1);
  console.log(fileName);
  saveTo = "output/" + fileName + ".png";
  console.log(saveTo);

  psd.open(psdFile).then(function (psd) {
    console.log("Opening " + psdFile);
    return psd.image.saveAsPng(saveTo);
  }).then(function () {
    console.log("Finished saving " + fileName + " to " + saveTo);
  });
}
