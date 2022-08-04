function calculaIMC(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    function recebeEventoForm(e){
        e.preventDefault();

        const peso = Number(form.querySelector('.peso').value);
        const altura = Number(form.querySelector('.altura').value);

        const imc = (peso / (altura * altura)).toFixed(2);

        if(imc < 18.5){
            resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
        }else if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = `Seu IMC é ${imc} (Peso Normal)`;
        }else if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;
        }else if(imc >= 30 && imc <=34.9){
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`;
        }else if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`;
        }else if( imc > 40){
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`;
        }
        if( peso == "" || !Number.isInteger(peso)){
            resultado.innerHTML = `Peso inválido`;
        }else if( altura == ""){
            resultado.innerHTML = `Altura inválida`;
        }
    }

    form.addEventListener('submit', recebeEventoForm);

}
calculaIMC();