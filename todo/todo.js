class Todo {
  list(call, callback) {
    console.log("list", call.request.sort);
    callback(null, {
      success: true,
      todos: [
        {
          id: "1",
          description: "angreh",
        },
        {
          id: "2",
          description: "sibora",
        },
      ],
    });
  }

  get(call, callback) {
    console.log("get", call.request.id);
    callback(null, {
      success: true,
      body: {
        id: "1",
        description: "angreh",
      },
    });
  }
}

module.exports = Todo;
