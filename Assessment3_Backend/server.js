const db = require("./models");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const corOptions = {
  origin: "http://localhost:4200",
};
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corOptions));
db.mongoose
  .connect(db.url.url, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection established successfully with MongoDB");
    require("./app/routes")(app);
    app.listen(3000, () => {
      console.log("Server listening on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log("Connection with MongoDB failed: " + err.message);
  });
app.get("/", (req, res) => {
  res.send({ message: "Hey there, welcome to the TODO application" });
});
