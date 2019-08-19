const express = require("express");

const app = express();

app.use(express.json());

const projects = [];

app.get("/projects", (req, res) => {
  return res.json(projects);
});

app.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title });

  return res.json(projects);
});

app.listen(3000);
