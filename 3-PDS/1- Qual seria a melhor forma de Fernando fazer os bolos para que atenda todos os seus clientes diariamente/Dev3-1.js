// Factory Method + JS

function computadorFactory(ram, hdd, cpu, type) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

computadorFactory.prototype.toString = function computadorFactoryToString() {
    var atributos = "Tipo :" + this.type +  ', Processador: ' + this.cpu +  ' Ghz, Memória RAM: ' + this.ram + " Ghz, Armazenamento: " + this.hdd + " GB.";
   return atributos
};

const pc1 = new computadorFactory("8", "500", "3.6", "PC");
console.log(pc1.toString())
const server1 = new computadorFactory("16", "1000", "5.8", "Server");
console.log(server1.toString())
