const express = require("express");
const cors = require("cors");


// const grpc = require("@grpc/grpc-js");
// const protoLoader = require("@grpc/proto-loader");

// init express
const app = express();

app.use(express.json());
app.use(cors());

// // user services
// var PROTO_PATH = path.join(__dirname, "../proto/user.proto");
// var packageDefinition = protoLoader.loadSync(PROTO_PATH);
// var userProto = grpc.loadPackageDefinition(packageDefinition).user;
// var userSvcClient = new userProto.UserSrv(
//   "[::1]:50052",
//   grpc.credentials.createInsecure()
// );
const todoRoutes = require("./todo");
app.use("/todo", todoRoutes);

// catch all
app.use("*", async (req, res) => {
  res.send({ success: false });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});
