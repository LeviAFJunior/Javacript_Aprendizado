// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Luiz', '0.');
const pessoa2 = new Pessoa('Maria', 'A.');

console.log(pessoa1);
console.log(pessoa2);