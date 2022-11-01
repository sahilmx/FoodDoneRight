const express = require("express");
const app = express();
app.set("view engine", "ejs");

const { convertFile } = require("./utils/utils");
const getLoc = require("./routes/geoReader");

// rading the kml file and converting to geoJSON object
convertFile();

app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log("server started at port 3000");
});

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.use("/getLoc", getLoc);
