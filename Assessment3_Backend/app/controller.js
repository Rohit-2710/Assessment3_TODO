const db = require("../models");
const Todo = db.Todo;

exports.getAll = (req, res) => {
  Todo.find()
    .then((data) => {
      res.status(200).send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        message: err.message || "Server error, coudn't fetch data",
      });
    });
};
exports.addTodo = (req, res) => {
  if (!req.body.todo) {
    res.send({
      message: "Plese note that the data cannot be empty",
    });
    console.log("Data cannot be empty");
  }
  const todo = new Todo({
    todo: req.body.todo,
    due: req.body.due,
    status: req.body.status,
  });
  todo
    .save()
    .then((data) => {
      res.send(data);
      console.log("Todo saved successfully");
    })
    .catch((err) => {
      console.log("Error occured during saving data: " + err);
      res.send({
        message: err.message || "Data can't be saved due to some error",
      });
    });
};

exports.deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(500).send({
          message: "No data found for id",
        });
      }
      res.send({
        message: "Entry deleted successfully",
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        message: "No data found for the given id :" + req.params.id;
      }
      res.status(500).send({
        message: err.message || "Cound not delete the entry",
      });
    });
};
exports.search = (req, res) => {
  Todo.findById(req.params.id);
};
