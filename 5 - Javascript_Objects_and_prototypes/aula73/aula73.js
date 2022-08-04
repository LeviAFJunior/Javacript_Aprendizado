// Métodos úteis para objetos

// const produto = { nome: 'Produto', preco: 1.8 };

// const caneca = Object.assign({}, produto, { material: 'porcelana'});


// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// // produto.nome = 'Levi Alves';
// console.log(caneca);
// console.log(produto);

//=============================================

// const produto = { nome: 'Produto', preco: 1.8 };
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto);

//=============================================

// const produto = { nome: 'Produto', preco: 1.8 };
// console.log(Object.values(produto));

//=============================================

// const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

// for(let [chave, valor] of Object.entries(produto)){
//     console.log(chave, valor);
// }

