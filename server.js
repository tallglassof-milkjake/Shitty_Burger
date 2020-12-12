const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers/burgers_controller.js");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3005;

app.use(routes);

app.use("/public",express.static(path.join(__dirname, "public")));

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json);






app.listen(PORT, function() {
    console.log(`App now listening on ${PORT}`);
});