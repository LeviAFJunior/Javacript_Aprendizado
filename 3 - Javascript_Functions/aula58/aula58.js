// Função construtora -> objetos
// Função fábrica -> objetos
// Contrutora -> Pessoa

function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados
    const id = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Levi', 'Alves');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();
