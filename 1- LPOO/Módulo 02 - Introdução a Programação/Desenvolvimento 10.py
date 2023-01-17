num1 = int(input("Digite o primeiro valor: "))
num2 = int(input("Digite o segundo valor: "))
op = int(input("Escolha o operador:  1. Soma, 2. Subtração, 3. Multiplicação, 4. Divisão: "))

def calc(num1,num2, op):
    if op == 1:
        resultado = num1 + num2
        print()
        print(f"O resultado é {resultado}.")
        print()
    elif op == 2:
        resultado = num1 - num2
        print()
        print(f"O resultado é {resultado}.")
        print()
    elif op == 3:
        resultado = num1 * num2
        print()
        print(f"O resultado é {resultado}.")
        print()
    elif op == 4:
        resultado = num1 // num2
        print()
        print(f"O resultado é {resultado}.")
        print()
    else:
        print()
        print(f"O resultado é 0.")
        print()
    return

resultado = calc(num1,num2,op)
