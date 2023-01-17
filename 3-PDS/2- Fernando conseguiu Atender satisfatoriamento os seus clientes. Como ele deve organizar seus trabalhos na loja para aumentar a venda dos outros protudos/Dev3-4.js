class Pato {
    constructor(nome){
        this.nome = nome
    }
    emitirSom(){
        console.log("QuaQua")
    }

    voar(){}
}

class Galinha {
    constructor(nome){
        this.nome = nome;
    }
    emitirSom(){
        console.log("Cocorico")
    }

    voar(){}
}

class AdaptadorPato extends Pato {
    constructor(pato){
        super(pato.nome)
    }

    emitirSom(){
        console.log("Cocorico")
    }

    voar(){}
}

let pato = new Pato("Wildwing Flashblade");
let adptadorPato = new AdaptadorPato(pato);
adptadorPato.emitirSom();

console.log(adptadorPato)
