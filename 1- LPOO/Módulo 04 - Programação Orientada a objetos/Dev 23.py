class Peso:
    def __init__(self, peso=0):
        self._peso = peso

    def get_peso(self):
        return self._peso

    def set_peso(self, x):
        self._peso = x

raj = Peso()

raj.set_peso(75)

print(raj.get_peso())

print(raj._peso)
