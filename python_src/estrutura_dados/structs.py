from operator import eq
import operator

from .helpers import delElement, copy_list

class Pilha:
    def __init__(self, data: list):
        self.data = data.copy()
    
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
    
    def get_top(self):
        return self.data[0]

    def get_second_element(self):
        return self.data[1]

    def __repr__(self):
        print(f'Pilha de elementos {self.data}')
    
    def __str__(self):
        return f'Pilha de elementos {self.data}'
    
    def is_empty(self):
        return len(self.data) == 0
    
    def subtract(self, number):
        if self.is_empty():
            return None

        top = self.get_top()
        res = top - number
        self.data[0] = res

        return self.data
    
    def dec_2(self):
        return self.subtract(number=2)
    
    def add(self, number):
        if self.is_empty():
            return None

        top = self.get_top()
        res = top + number
        self.data[0] = res

        return self.data
    
    def add_3(self):
        return self.add(number=3)

    def exec_op_in_top_and_second_elements(self, operation):
        if self.is_empty():
            return None
        
        top = self.get_top()
        second = self.get_second_element()
        res = operation(top, second)
        self.data[0] = res

        return self.data

    def op_add(self):
        return self.exec_op_in_top_and_second_elements(operation=operator.add)
    
    def op_sub(self):
        return self.exec_op_in_top_and_second_elements(operation=operator.sub)
    
    def op_mpy(self):
        return self.exec_op_in_top_and_second_elements(operation=operator.mul)
    
    def op_div(self):
        return self.exec_op_in_top_and_second_elements(operation=operator.truediv)


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
