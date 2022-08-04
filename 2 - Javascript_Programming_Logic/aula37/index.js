const nomes = ['Luiz', 'Otávio', 'Henrique'];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o índice ou chaves (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// Objeto {}

// for (let chave in pessoa) {
//     console.log(chave, pessoa[chave]);
// }



// =====================================================
// Array []

// for (let i = 0; i < nome.length; i++){
//     console.log(nomes[i]);
// }

// console.log('####');

// for (let i in nome) {
//     console.log(nomes[i]);
// }

// console.log('####');

// for (let valor of nomes) {
//     console.log(valor);
// }

// console.log('####');

// nomes.forEach(function (valor, indice) {
//     console.log(valor, indice);
// });