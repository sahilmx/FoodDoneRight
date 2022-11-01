const tj = require("@tmcw/togeojson");
const fs = require("fs");
const DOMParser = require("xmldom").DOMParser;
const path = "./resources/asset.geojson";

const convertFile = async () => {
  const kml = await new DOMParser().parseFromString(
    fs.readFileSync("./resources/asset.kml", "utf8")
  );
  const converted = tj.kml(kml);

  fs.writeFile(path, JSON.stringify(converted), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log("File converted succesfully ");
  });
};

module.exports = { convertFile };
