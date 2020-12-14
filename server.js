const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

const routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log(`App now listening on ${PORT}`);
});