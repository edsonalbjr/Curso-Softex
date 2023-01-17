// editor.js

const readline = require('readline-sync');

class Editor {
    constructor() {
        this.texto = ["meu nome e"];
        this.observers = [];
      }
}

class TextEditor extends Editor {

    insertLine () {
        if (this.texto.indexOf == "EOF"){
            console.log ("Edição finalizada!")
        }

        else {
            this.notify("open");
            let lineNumber = readline.questionInt("Digite a linha que prentende adicionar o texto: [n]\n");
            let palavra = readline.question("Digite o texto que voce pretende adicionar:\n");
            this.texto.splice (lineNumber, 0, palavra);
            this.notify("save");
            return console.log (this.texto);
        }
    }

    removeLine () {
        this.notify("open");
        let lineNumber = readline.questionInt("Digite a linha que voce pretende remover:\n");
        let numeroDeElementos = readline.questionInt("Digite a quantidade de elementos que voce deseja remover:\n");
        this.texto.splice(lineNumber, numeroDeElementos);
        this.notify("save"); 
        return console.log (this.texto);
    }
      
    subscribe(fn) {
        this.observers.push(fn);
    }
    
    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter( fn => {
            if(fn != fnToRemove)
            return fn
        })
    }
    
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

module.exports = TextEditor; 

// index.js

const TextEditor = require('./Editor');

function Observer1 (data){ 
  let observer = data 
  console.log (observer);
} 

function Observer2 (data){ 
  let observer = data 
  console.log (observer);
}

function Observer3 (data){ 
  let observer = data 
  console.log (observer);
}

let calcular = new TextEditor ();

calcular.insertLine();
calcular.removeLine();

calcular.subscribe(Observer1);
calcular.subscribe(Observer2);
calcular.subscribe(Observer3);

calcular.unsubscribe(Observer2);
calcular.unsubscribe(Observer3);
