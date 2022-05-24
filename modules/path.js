const path = require("path");

//apenas o nome do arquivo
console.log(path.basename(__filename));

//nome do diretorio atual
console.log(path.dirname(__filename));

//extençao do arquivo
console.log(path.extname(__filename));

//criando objeto path
console.log(path.parse(__filename));

//junte caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste2"));
