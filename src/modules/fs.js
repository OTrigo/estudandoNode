//O FS é um módulo capaz de manipular arquivos, escrever, ler e fazer qualquer tipo de manipulação com arquivos do projeto.

//Por precisar saber onde o arquivo tá, na grande maioria dos casos o FS atua juntamente com o PATH.

const fs = require("fs");
const path = require("path");

//Criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  error
    ? console.error("Erro:", error)
    : console.log("Pasta criada com sucesso!");
}); // usei um ternário para verificar se houve erro apenas por conta de que será feito apenas um console.log, mas se houver várias mudanças, um bloco de comando inteiro, é aconselhável você construir um if e else padrão mesmo.

//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) return console.error(error);
    console.log("Arquivo criado com sucesso");
  }
);

//Adicionar a um arquivo existente
fs.appendFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello world!",
  (error) => {
    if (error) return console.error("Error", error);
    console.log("Arquivo modificado com sucesso!");
  }
);

//Ler um arquivo
fs.readFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "utf8",
  (error, data) => {
    if (error) return console.error(error);
    console.log(data);
  }
);
