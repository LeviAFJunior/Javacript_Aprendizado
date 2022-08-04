// 
// const pessoa1 = new Object();
// pessoa1.nome = 'Levi';
// pessoa1.sobrenome = 'Alves';
// pessoa1.idade = 24;
// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`);
// }
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// for(let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }

//===================================================

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome, 
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }
// const p1 = criaPessoa('Levi', 'Junior');
// console.log(p1.nomeCompleto());

//========================================================
function Pessoa(nome, sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

// {} <- this -> 
const p1 = new Pessoa('Levi', 'Alves');
delete p1.nome;
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);