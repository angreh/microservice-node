const path = require("path"),
  grpc = require("@grpc/grpc-js"),
  protoLoader = require("@grpc/proto-loader"),
  Todo = require("./todo");

const PROTO_PATH = path.join(__dirname, "../proto/todo.proto"),
  packageDefinition = protoLoader.loadSync(PROTO_PATH),
  TodoProto = grpc.loadPackageDefinition(packageDefinition).todo;

function main() {
  const todo = new Todo();
  var server = new grpc.Server();
  server.addService(TodoProto.TodoService.service, {
    List: todo.list,
    Get: todo.get,
  });
  server.bindAsync(
    "[::1]:50052",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log("Server running at port 50052");
    }
  );
}

main();
