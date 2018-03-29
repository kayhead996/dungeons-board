const express = require("express");
const bodyParser = require("body-parser");
let configRoutes = require("./routes");

let app = express()

app.use(bodyParser.json());
configRoutes(app);

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});

