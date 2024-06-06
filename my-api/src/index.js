const express = require("express");
const app = express();

app.use(express.json());

app.get("/projects", function (request, response) {
  const { title, owner, page } = request.query;

  console.log(title, owner, page);

  return response.json(["Project 1", "Project 2"]);
});

app.post("/projects", function (request, response) {
  const { name, owner } = request.body;

  console.log(name, owner);

  return response.json(["Project 1", "Project 2", "Project 3"]);
});

app.put("/projects/:id", function (request, response) {
  const { id } = request.params;
  const { name, owner } = request.body;
  console.log(id, name, owner);

  return response.json(["Project 4", "Project 2", "Project 1"]);
});

app.delete("/projects/:id", function (request, response) {
  const { id } = request.params;

  return response.json(["Project 2", "Project 1"]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
