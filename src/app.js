/* MADE BY FENIQX
© WAZING BEATS - 2021 */

// MODULES
const express = require("express");
const path = require("path");

// OTHER
const app = express();
const port = 3000;

// APP 
app.set("view-engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public/style"));

// HOME ROUTE
app.get("/", function (req, res) {
    res.render("index.ejs", {
        title: "Home"
    });
});

// START APP
app.listen(port, function () {
    console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
    console.log("Wazing Beats is running on port 3000!");
    console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
});