def BubbleSort(lista):
    for bs in range(len(lista)-1, 0, -1):
        for i in range(bs):
            if lista[i] > lista[i+1]:
                temp = lista[i]
                lista[i] = lista[i+1]
                lista[i+1] = temp


lista = [5, 3, 2, 4, 7, 10, 0, 6, 8, 1]
BubbleSort(lista)
print(lista)
