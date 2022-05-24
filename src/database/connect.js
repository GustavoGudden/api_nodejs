const mongoose = require("mongoose");

const connectdb = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cursonode.0w7jh.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        console.log("erro ao se conectar", error);
      }
      return console.log("deu certo ");
    }
  );
};

module.exports = connectdb;
