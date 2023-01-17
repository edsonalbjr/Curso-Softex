// - um objeto com, no mínimo, três propriedades;
// - um array de tamanho três no mínimo;
// - duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.

var locadora = {
    comedia: 80, 
    acao: 100, 
    romance: 60, 
}

for ( let categorias in locadora ) {

    // Propriedades
    console.log(`${categorias} => ${locadora[categorias]}`);
}

var comedia = ["Luck", "Cidade Perdida", "De Férias da Família"]

for ( let filmes of comedia ) {

    // Valores
    console.log(filmes);
}
