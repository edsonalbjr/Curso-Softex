class Sanduiche {
    custo(){}
}

class FrangoAssado extends Sanduiche {
    custo() {return 'Valor: R$ 4,50'}
}

class IngredienteDecorador extends Sanduiche {
    custo(){}
}

class Pepperoni extends IngredienteDecorador {
    constructor(sanduiche) {
        super()
        this.sanduiche = sanduiche
    }
    custo() {return 'Custo adicional de pepperoni: R$ 0,99'}
}

class QueijoMussarelaRalado extends IngredienteDecorador {
    constructor(sanduiche) {
        super()
        this.sanduiche = sanduiche
    }
    custo() {return 'Custo adicional de queijo mussarela ralado: R$ 2,00'}
}

const sanduiche = new FrangoAssado()
const queijo = new QueijoMussarelaRalado(sanduiche)
const pepperoni = new Pepperoni(sanduiche)

console.log(sanduiche.custo())
console.log(queijo.custo())
console.log(pepperoni.custo())
