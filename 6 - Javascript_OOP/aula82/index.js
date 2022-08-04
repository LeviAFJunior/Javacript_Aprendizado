class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi, bateria) {
        super(nome);
        this.temWifi = temWifi;
        this.bateria = bateria;
    }

    ligarWifi(){
        if(this.bateria >= 1) {
            this.temWifi = true;
        }else{
            this.temWifi= false;
        } 

    }
    // Sobrescrever método da classe Pai (DispositivoEletronico)
    ligar() {
        console.log('Você sobrescreveu o metodo ligar');
    }

}


const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy s10');
const s2 = new Tablet('Motorola', true, 1);
// s1.ligar();
s2.ligarWifi();
s2.ligar();
console.log(s2);