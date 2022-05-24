const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Senha: {
    type: String,
    required: true,
    minlength: 7,
  },
});
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
