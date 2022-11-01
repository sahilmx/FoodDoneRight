const router = require("express").Router();
const booleanPointInPolygon = require("@turf/boolean-point-in-polygon");
const geoJSON = require("node-geojson");
const turf = require("@turf/turf");
let nodeGeocoder = require("node-geocoder");

let options = {
  provider: "openstreetmap",
};
let geoCoder = nodeGeocoder(options);

router.route("/").post(async (req, res) => {
  const body = req.body;

  const data = await geoCoder.geocode(body.value.toString());
  const geodata = await geoJSON.createUsingFile("./resources/asset.geojson");

  let pt = turf.point([data[0].longitude, data[0].latitude]);

  let ans = "NOT FOUND";
  geodata.data.features.forEach((element) => {
    if (element.geometry.type.toLowerCase() == "point") {
    } else if (element.geometry.type.toLowerCase() == "polygon") {
      let poly = turf.polygon(element.geometry.coordinates);
      if (turf.booleanPointInPolygon(pt, poly)) {
        ans = element.properties.name;
      }
    }
  });

  if (ans.toUpperCase() !== "NOT FOUND") {
    res.send({ status: true, resp: ans });
  } else {
    res.send({ status: false, resp: ans });
  }
});

module.exports = router;
