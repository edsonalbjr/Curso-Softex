class Computador:
    def __init__(self, marca, memoria_ram, placa_de_video):
        self.marca = marca
        self.memoria_ram = memoria_ram
        self.placa_de_video = placa_de_video

    def Ligar(self):
        print("Estou Ligando.")

    def Desligar(self):
        print("Estou Desligando.")

    def ExibirInformacoesDesteComputador(self):
        print(self.marca, self.memoria_ram, self.placa_de_video)


computador1 = Computador("Asus", "8GB", "Nvidia")
computador2 = Computador("Dell", "10GB", "GeForce")
computador3 = Computador("Gigabyte", "16GB", "AMD")

print("Computador 1: ")
computador1.Ligar()
computador1.Desligar()
computador1.ExibirInformacoesDesteComputador()
print()
print("Computador 2: ")
computador2.Ligar()
computador2.Desligar()
computador2.ExibirInformacoesDesteComputador()
print()
print("Computador 3: ")
computador3.Ligar()
computador3.Desligar()
computador3.ExibirInformacoesDesteComputador()
print()
