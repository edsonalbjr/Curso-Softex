Anderson = 0
Danilo = 0
Marilia = 0
Miguel = 0
Raquel = 0
branco = 0


date = True
while (date == True):
    print()
    print("Bem-vindo ao local de votação para governador, as opções são: Anderson (29), Danilo (40), Marilia (77), Miguel (44), Raquel (45), Branco (0)")
    print()

    try:
        voto = int(input("Insira o número do seu candidato: "))
        if voto == 29:
            print()
            print("Você votou em Anderson (29) para governador do estado de Pernambuco!")
            print()
            Anderson = Anderson + 1
        elif voto == 40:
            print()
            print("Você votou em Danilo (40) para governador do estado de Pernambuco!")
            print()
            Danilo = Danilo + 1
        elif voto == 77:
            print()
            print("Você votou em Marilia (77) para governador do estado de Pernambuco!")
            print()
            Marilia = Marilia + 1
        elif voto == 44:
            print()
            print("Você votou em Miguel (44) para governador do estado de Pernambuco!")
            print()
            Miguel = Miguel + 1
        elif voto == 45:
            print()
            print("Você votou em Raquel (45) para governador do estado de Pernambuco!")
            print()
            Raquel = Raquel + 1
        else:
            print()
            print("Você votou em branco!")
            print()
            branco = branco + 1
    except:
        print()
        print("Caracter inválido, por favor digite um número válido.")
        continue

    finalizar = input("Deseja finalizar a votação? sim ou não? ")
    if finalizar == "sim":
        print()
        print("Votação finalizada! Obrigado por contribuir pelo futuro do Brasil.")
        print()
        print(
            f"Parcial dos votos: Anderson (29) tem {Anderson} votos, Danilo (40) tem {Danilo} votos, Marilia (77) tem {Marilia} votos, Miguel (44) tem {Miguel} votos, Raquel (45) tem {Raquel} votos e tiveram {branco} votos em Branco.")

        break
    elif finalizar == "não":
        continue
    else:
        print()
        print("Escolha apenas sim ou não.")
        
