//Esse arquivo é apenas para entender o funcionamento do módulo nativo Path

//Path é um módulo capaz de interagir com diretórios e arquivos, capaz de ler metadados e ler o arquivo/diretório em si.

const path = require('path');

const path1 = path.basename(__filename) // mostra o nome do arquivo atual

const path2 = path.dirname(__filename) // mostra o diretório atual

const path3 = path.extname(__filename) // mostra a extensão do arquivo atual

const path4 = path.parse(__filename) // converte as informações do arquivo em um objeto path

const path5 = path.join(__dirname, "test") // torna possível a junção de caminhos, esse código de exemplo acrescenta um /test ao caminho do diretório atual

//vamos mostrar cada um no console agora.

console.log(`Path1:${path1}\n, Path2:${path2}\n, Path3:${path3}\n, Path4:${path4}\n, Path5:${path5}\n`)