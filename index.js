const { Pessoa } = require('./src/modules/pessoa')

const pessoa = new Pessoa("João", 20, 52259929403)

console.log(pessoa.descrevaPessoa())