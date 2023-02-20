const app = require("./src/app");

const port = 3055;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exit server express");
  });
});
