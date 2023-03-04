module.exports = (mongoose) => {
  const Schema = mongoose.Schema({
    todo: String,
    due: Date,
    status: {
      type: String,
      enum: ["DONE", "PENDING", "FAILED"],
      default: "PENDING",
    },
  });
  const Todo = mongoose.model("todo", Schema);
  return Todo;
};
