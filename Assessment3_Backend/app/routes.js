module.exports = (app) => {
  const todo = require("./controller");
  app.get("/todos", todo.getAll);
  app.post("/todos", todo.addTodo);
  app.delete("/delete/:id", todo.deleteTodo);
};
