const express = require("express");

const app = express();

app.use(express.json());

let requests = 0;
const projects = [];

app.use((req, res, next) => {
  requests++;

  console.log(`Até o momento foram feitas ${requests} requisições`);

  next();
});

function checkIfIdExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(props => props.id == id);

  if (!project) {
    return res
      .status(400)
      .json({ error: "Id does not correspond to an existent project" });
  }

  return next();
}

app.get("/projects", (req, res) => {
  return res.json(projects);
});

app.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title });

  return res.json(projects);
});

app.put("/projects/:id", checkIfIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(props => props.id == id);

  project.title = title;

  return res.json(project);
});

app.delete("/projects/:id", checkIfIdExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(props => props.id == `${id}`);

  projects.splice(index, 1);

  return res.json(projects);
});

app.post("/projects/:id/tasks", checkIfIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(props => props.id == id);

  project.tasks = title;

  return res.json(project);
});

app.listen(3000);
