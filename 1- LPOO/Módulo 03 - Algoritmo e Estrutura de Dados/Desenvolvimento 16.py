def selectionSort(array, size):
    
    for step in range(size):
        min_idx = step
        
        for i in range(step + 1, size):
            
            if array[i] < array[min_idx]:
                min_idx = i
                
        (array[step], array[min_idx]) = (array[min_idx], array[step])

#data = [-2, 45, 0, 11, -9]
#data = [12,11,13,5,6]
data = [7, 3, 41, 47, 53, 9, 15, 21, 39 ,37 ,19 ,49, 17, 1, 43, 57, 27, 59, 29, 35, 11, 33, 13, 51, 5, 45, 31, 25, 23, 55]
size = len(data)
selectionSort(data, size)
print("Array em ordem crescente: ")
print(data)
