const express = require("express");

const app = express();

app.use(express.json());

app.post("/projects", (req, res) => {
  req.params.id;
});

app.listen(3000);
