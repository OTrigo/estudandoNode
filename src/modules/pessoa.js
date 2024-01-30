class Pessoa{
	constructor(nome, idade, cpf){
		this.nome = nome;
		this.idade = idade;
		this.cpf = cpf;
	}

	descrevaPessoa(){
		return `O(A) ${this.nome}, portador(a) do cpf ${this.idade} tem ${this.cpf} anos.`
	}
}

module.exports = {Pessoa};