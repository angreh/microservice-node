const express = require("express"),
  cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const todoRoutes = require("./todo");
app.use("/todo", todoRoutes);

app.use("*", async (req, res) => {
  res.send({ success: false });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});
