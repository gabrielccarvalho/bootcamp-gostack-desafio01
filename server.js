const express = require("express");

const app = express();

app.use(express.json());

const projects = [];

app.get("/projects", (req, res) => {
  return res.json(projects);
});

app.listen(3000);
