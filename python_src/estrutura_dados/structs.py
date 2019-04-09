from operator import eq

from .helpers import delElement, copy_list

class Pilha:
    def __init__(self, data):
        self.data = data
    
    def push(self, value):
        # self.data = [ value ] + self.data
        items = [ value ]
        for item in self.data:
            items.append(item)
        
        self.data = copy_list(_list=items)
    
    def pop(self):
        if len(self.data) == 0:
            return None

        first = self.data[0]
        numbers = copy_list(_list=self.data)
        for (index, _) in enumerate(self.data):
            if index + 1 == len(numbers):
                break

            numbers[index] = numbers[index + 1]
        
        self.data = copy_list(_list=numbers)

        return first
        
    def __repr__(self):
        print(f'Pilha de elementos {self.data}')
    
    def __str__(self):
        return f'Pilha de elementos {self.data}'


class Fila:
    def __init__(self, data):
        self.data = data
    
    def push(self, value):
        self.data.append(value)
    
    def pop(self):
        if len(self.data) == 0:
            return None

        first = self.data[0]
        numbers = copy_list(_list=self.data)
        for (index, _) in enumerate(self.data):
            if index + 1 == len(numbers):
                break

            numbers[index] = numbers[index + 1]
        
        self.data = copy_list(_list=numbers)

        return first
        
    def __repr__(self):
        print(f'Fila de elementos {self.data}')
    
    def __str__(self):
        return f'Fila de elementos {self.data}'
