// express
const express = require('express');
global.app = express();
app.use(express.json());
app.use(express.static('.'));

const fs = require("fs");
const announcements = JSON.parse(fs.readFileSync("announcements.json"));
app.get("/announcements", (req, res) => {
    res.json({ "success": true, "announcements": announcements });
});

app.listen(9001, "127.0.0.1");