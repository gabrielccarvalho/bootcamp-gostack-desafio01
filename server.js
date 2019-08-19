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

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(p => p.id == `${id}`);

  projects.splice(index, 1);

  return res.json(projects);
});

app.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks = title;

  return res.json(project);
});

app.listen(3000);
