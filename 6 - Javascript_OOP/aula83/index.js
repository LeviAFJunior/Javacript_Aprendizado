class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log(this.volume);
    }

}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
console.log(controle1);
ControleRemoto.trocaPilha();