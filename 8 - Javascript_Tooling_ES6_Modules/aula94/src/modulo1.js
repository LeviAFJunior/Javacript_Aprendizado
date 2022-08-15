export const nome = 'Joãozinho';
export const sobrenome = 'Oliveira';
export const idade = 24;
export const cpf = '000.000.000-00';

export function soma(x, y){
  return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}