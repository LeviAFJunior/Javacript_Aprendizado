// ... rest, ... spread

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [primeiroNumero, segundoNumero, ...resto] = numeros;

// console.log(primeiroNumero, segundoNumero);
// console.log(resto);

//======================================================

// const numeros = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ];

// const [,[,,seis]] = numeros;

// console.log(seis);

//======================================================


const numeros = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];

const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);