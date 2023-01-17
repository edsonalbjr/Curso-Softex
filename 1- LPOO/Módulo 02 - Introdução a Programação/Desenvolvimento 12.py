from datetime import date
current_date = date.today()
anoAtual = current_date.year

date = True
while (date == True):
    nome = input("Insira seu nome completo: ")

    try:
        anoNasc = int(input("Insira seu ano de nascimento: "))
        idade = anoAtual - anoNasc
        if (anoNasc >= 1992 and anoNasc <= 2021):

            date == False

            print(nome, "tem ou terá", idade,
                  "anos, no ano de", current_date.year, "!")
            break

        else:
            print("O valor digitado está incorreto!")

    except:
        print("Caracter inválido, por favor digite um número válido.")
