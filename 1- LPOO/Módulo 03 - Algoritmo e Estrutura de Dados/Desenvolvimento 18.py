def principal():
    op = 1;
    while(True):
        op = int(input(" Selecione ume operação: 1 - Adição, 2 - Subtração, 3 - Multiplicação, 4 - Divisão, 0 - Sair: "));
        
        
        if (op < 1 or op > 4): break;

        print("Insira o primeiro número: ");
        num_1 = complex(input());
        print("Insira o segundo número: ");
        num_2 = complex(input());
        print("Insira o terceiro número: ");
        num_3 = complex(input());

        if(op == 1):
            result = (num_1 + num_2 + num_3);
            print(result,"Propriedade Real: ", result.real,"Propriedade Imaginária: ",result.imag)
        elif(op == 2):
            result = (num_1 - num_1 - num_3);
            print(result,"Propriedade Real: ", result.real,"Propriedade Imaginária: ",result.imag)
        elif(op == 3):
            result = (num_1 * num_2 * num_3);
            print(result,"Propriedade Real: ", result.real,"Propriedade Imaginária: ",result.imag)
        elif(op == 4):
            result = (num_1 / num_2 / num_3);
            print(result,"Propriedade Real: ", result.real,"Propriedade Imaginária: ",result.imag)

        print ("\n\n")



principal();
