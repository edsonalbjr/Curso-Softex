class Carro{
    constructor(modelo, marca, cor, numderodas){
        this.modelo=modelo
        this.marca=marca
        this.cor=cor
        this.numderodas=numderodas
    }
    info(){
        console.log("Modelo: " + this.modelo)
        console.log("Marca: " + this.marca )
        console.log("Cor: " + this.cor)
        console.log("Número de rodas: " + this.numderodas)
    }
}

Carro.prototype.motor="1.5"
Carro.prototype.potencia="177cv"

Carro.prototype.info=function(motor, potencia){
    console.log("Motor: " + this.motor)
    console.log("Potência: " + this.potencia)
}

let carro1 = new Carro("HR-V", "Honda", "Branco", "4")
console.log(carro1)
console.log("-----------------")
carro1.info()
