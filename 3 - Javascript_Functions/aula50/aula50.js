// arguments que sustenta todos os argumentos enviados

// function funcao() {
//     let total = 0;
//     for (argumento of arguments){
//         total += argumento;
//     }

//     console.log(total);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }

// funcao({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});


const conta = function(...args){
    console.log(args);
};

conta('+', 0, 20, 30, 40, 50);