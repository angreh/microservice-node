const express = require("express"),
  router = express.Router(),
  grpc = require("@grpc/grpc-js"),
  protoLoader = require("@grpc/proto-loader"),
  path = require("path");

const PROTO_PATH = path.join(__dirname, "../proto/todo.proto"),
  packageDefinition = protoLoader.loadSync(PROTO_PATH),
  TodoProto = grpc.loadPackageDefinition(packageDefinition).todo,
  userService = new TodoProto.TodoService(
    "[::1]:50052",
    grpc.credentials.createInsecure()
  );

router.post("/", async (req, res, next) => {
  // CREATE
  res.send({ success: true });
});

router.delete("/:id", async (req, res, next) => {
  // DELETE
  res.send({ success: true });
});

router.get("/:id", async (req, res, next) => {
  // GET
  userService.Get(
    {
      id: "1",
    },
    (err, response) => {
      if (err) {
        console.log(err);
        res.send({ success: false });
        return;
      }
      res.send({ success: true, body: response.body });
    }
  );
});

// LIST
router.get("/", async (req, res, next) => {
  userService.List(
    {
      sort: "name",
    },
    (err, response) => {
      if (err) {
        console.log(err);
        res.send({ success: false });
        return;
      }
      res.send({ success: true, body: response.todos });
    }
  );
});

router.patch("/:id", async (req, res, next) => {
  // UPDATE
  res.send({ success: true });
});

module.exports = router;
