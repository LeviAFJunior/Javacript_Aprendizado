function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) { 
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // nome.value 
        // sobrenome.value 
        // peso.value 
        // altura.value;
        const dados = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso:  peso.value,
            altura: altura.value
        };

        pessoas.push(dados);

        console.log(pessoas);

        resultado.innerHTML += `<p>${dados.nome} ${dados.sobrenome} ${dados.peso} ${dados.altura}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();