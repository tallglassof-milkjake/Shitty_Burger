const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json);

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.use(express.static("public"));

const router = require("/controllers/burgers_controller.js");

app.use(router);

app.listen(PORT, function() {
    console.log(`App now listening on ${PORT}`);
});