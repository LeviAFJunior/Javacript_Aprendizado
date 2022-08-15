import { Person } from './test-modules/person';
import formGeraSenha from './modules/formGeraSenha';
import './assets/css/style.css';

formGeraSenha();



// =================================================================

/* 
Este arquivo é apenas um exemplo que adicionei após
as aulas para garantir que não teremos erros com
classes, funções assíncronas e outras coisas relacionadas.
*/

const person1 = new Person('Levi', 'Junior');

// Teste de promise (2 segundos)
// person1.fetchData().then((_person) => console.log(person1));

// Teste async/await
async function run() {
  // 2 segundos
  const pessoa = await new Person('Levi', 'Alves').fetchData();
//   console.log(pessoa.firstName, pessoa.lastName);
}
run();
