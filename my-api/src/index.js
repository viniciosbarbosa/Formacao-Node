const express = require("express");
const app = express();

app.get("/", function (resquest, response) {
  return response.json({
    message: "Hello, node world",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
