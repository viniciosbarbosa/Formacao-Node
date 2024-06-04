const express = require("express");
const app = express();

app.get("/projects", function (resquest, response) {
  return response.json(["Project 1", "Project 2"]);
});

app.post("/projects", function (resquest, response) {
  return response.json(["Project 1", "Project 2", "Project 3"]);
});

app.put("/projects/:id", function (resquest, response) {
  return response.json(["Project 4", "Project 2", "Project 1"]);
});

app.delete("/projects/:id", function (resquest, response) {
  return response.json(["Project 2", "Project 1"]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
