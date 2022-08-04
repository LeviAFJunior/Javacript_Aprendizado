const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop

const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');
console.log(nomes, removidos); 
