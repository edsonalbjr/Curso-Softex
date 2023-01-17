nome = "Edson Albuquerque"
print(nome) #Imprimindo a String
print(type(nome)) #Monstrando o tipo de de classe
print(len(nome)) #Tamanho da String
print(nome + " da Silva Júnior") #Concatenação1
print("Edson", "Albuquerque") #Concatenação2
substituicao = nome.replace("Albuquerque", "Júnior")
print(substituicao)
print(nome.startswith("Edson")) #Verificando se a string começa com "Edson"
print(nome.endswith("Albuquerque")) #Verificando se a string começa com "Edson"
print(nome.count("e")) #Verificando quantas letras e (menusculas tem na string)
maiusculas = nome.upper() #colocando todas as letras maiusculas
print(maiusculas)
menusculas = nome.lower() #colocando todas as letras menusculas
print(menusculas)
