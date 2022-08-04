const data = new Date('2022-07-15 15:47:00');

function dayWeek(data) {    
    const diaSemana = data.getDay();
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-feira';
        case 2:
            return diaSemanaTexto = 'Terça-Feira';
        case 3:
            return diaSemanaTexto = 'Quarta-Feira';
        case 4:
            return diaSemanaTexto = 'Quinta-Feira';
        case 5:
            return diaSemanaTexto = 'Sexta-Feira';
        case 6:
            return diaSemanaTexto = 'Sábado';
    } 
}

function dayMonth(data){
    const diaMes = data.getMonth();
    let diaMesTexto;

    switch(diaMes){
        case 0:
            return diaMesTexto = 'janeiro';
        case 1:
            return diaMesTexto = 'fevereiro';
        case 2:
            return diaMesTexto = 'março';
        case 3:
            return diaMesTexto = 'abril';
        case 4:
            return diaMesTexto = 'maio';
        case 5:
            return diaMesTexto = 'junho';
        case 6:
            return diaMesTexto = 'julho';
        case 7:
            return diaMesTexto = 'agosto';
        case 8:
            return diaMesTexto = 'setembro';
        case 9:
            return diaMesTexto = 'outubro';
        case 10:
            return diaMesTexto = 'novembro';
        case 11:
            return diaMesTexto = 'dezembro';
    }
}

function writeScreen(data){
    const day = data.getDate();
    const year = data.getFullYear();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const resultado = document.querySelector('.container');


    const dayofweek = dayWeek(data);
    const month = dayMonth(data);


    const textoResultado = `<h3>${dayofweek}, ${day} de ${month} de ${year} ${hours}:${minutes}</h3>`;

    resultado.innerHTML = textoResultado;

}

writeScreen(data);