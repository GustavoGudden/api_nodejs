const fs = require("fs");
const path = require("path");

//criar pasta
/*
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("error:", error);
  }
  console.log("pasta criada com sucesso");
});*/

//criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "teste.txt"),
  "hello node",
  (error) => {
    if (error) {
      return console.log("error:", error);
    }
    console.log("arquivo criado com sucesso");
  }
);

//adicionar a um arquivo
/*fs.appendFile(
  path.join(__dirname, "./test", "teste.txt"),
  "ola node 2",
  (error) => {
    if (error) {
      console.log(erro);
    }
    console.log("sucesso");
  }
);

*/

fs.readFile(
  path.join(__dirname, "/test", "teste.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);
  }
);
