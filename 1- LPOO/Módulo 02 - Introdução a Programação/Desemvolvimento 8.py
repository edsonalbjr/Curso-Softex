qtd_rodas = int(input("Informe a quantidade de rodas: "))
peso = int(input("Informe o peso: "))
qtd_p_v = int(input("Informe a capacidade de passageiros:"))

if qtd_rodas < 4 and qtd_rodas > 1:
    print("A categoria do veículo é 'A'")
elif qtd_rodas == 4 and qtd_p_v < 8 and peso < 3500:
    print("A categoria do veículo é 'B'")
elif qtd_rodas >= 4 and peso > 3500 and peso < 6000:
    print("A categoria do veículo é 'C'")
elif qtd_rodas >= 4 and qtd_p_v > 8:
    print("A categoria do veículo é 'D'")
elif qtd_rodas >= 4 and peso > 6000:
    print("A categoria do veículo é 'E'")
