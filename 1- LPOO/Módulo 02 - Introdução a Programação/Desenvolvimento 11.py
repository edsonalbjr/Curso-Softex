def soma(n1, n2):
    return n1 + n2

def sub(n1, n2):
    return n1 - n2

def mult(n1, n2):
    return n1 * n2

def div(n1, n2):
    return n1 // n2

while True:
    print("1: Soma")
    print("2: Subtração")
    print("3: Multiplicação")
    print("4: Divisão")
    print("0: Sair")
    print()
    menu = input("Escolha uma opção: ")

    if menu == "1":
        print()
        n1 = int(input("Digite o primeiro valor: "))
        n2 = int(input("Digite o segundo valor: "))
        print(f"{n1} + {n2} = {soma(n1, n2)} ")
        print()
    elif menu == "2":
        print()
        n1 = int(input("Digite o primeiro valor: "))
        n2 = int(input("Digite o segundo valor: "))
        print(f"{n1} - {n2} = {sub(n1, n2)} ")
        print()
    elif menu == "3":
        print()
        n1 = int(input("Digite o primeiro valor: "))
        n2 = int(input("Digite o segundo valor: "))
        print(f"{n1} * {n2} = {mult(n1, n2)} ")
        print()
    elif menu == "4":
        print()
        n1 = int(input("Digite o primeiro valor: "))
        n2 = int(input("Digite o segundo valor: "))
        print(f"{n1} / {n2} = {div(n1, n2)} ")
        print()
    elif menu == "0":
        print("A Calculadora foi encerrada.")
        break
    else:
        print()
        print("ESSA OPÇÃO NÃO EXISTE.")
        print()
