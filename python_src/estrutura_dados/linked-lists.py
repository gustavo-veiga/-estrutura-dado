class SimpleLinkedListNode:
    value: None
    next_node: None

    def __init__(self, value, next_node = None):
        self.value = value
        self.next_node = next_node
    
    def set_next_node(self, next_node):
        self.next_node = next_node
    
    def __repr__(self):
        return f'{self.value}'
    
    def __str__(self):
        return f'{self.value}'


class SimpleLinkedList:
    pt_begin = None

    def __init__(self):
        pass
    
    # Allow call len(SimpleLinkedList)
    def __len__(self):
        aux = 0
        
        node_aux = self.pt_begin
        while node_aux != None:
            aux += 1
            node_aux = node_aux.next_node
        
        return aux
    
    def is_empty(self):
        return self.pt_begin == None

    def push_back(self, value):
        node_to_insert = SimpleLinkedListNode(value)

        if (self.is_empty()):
            self.pt_begin = node_to_insert
            return node_to_insert

        node = self.pt_begin
        while (node.next_node != None):
            node = node.next_node
        
        node.set_next_node(node_to_insert)
        return node_to_insert
    
    def push_front(self, value):
        node_to_insert = SimpleLinkedListNode(value)

        if (self.is_empty()):
            return self.insert_in_begin(node_to_insert)
        
        begin_node = self.pt_begin
        node_to_insert.set_next_node(begin_node)
        self.pt_begin = node_to_insert
        return node_to_insert
    
    def remove_node(self, value):
        if (self.is_empty()):
            return None
        
        # if node to remove is first and is the only node 
        if (self.pt_begin.value == value and self.pt_begin.next_node == None):
            node_to_return = self.pt_begin
            self.pt_begin = None
            return node_to_return
        
        # if node to remove is first, but is not the only node
        if (self.pt_begin.value == value):
            node_to_return = self.pt_begin
            self.pt_begin = node_to_return.next_node
            return node_to_return

        node_to_return = None
        current = self.pt_begin
        while (current.next_node != None):
            if (current.next_node.value == value):
                node_to_return = current.next_node
                node_to_insert = current.next_node.next_node
                current.next_node = node_to_insert
                break

            current = current.next_node
        
        return node_to_return
    
    def find_node(self, value):
        if (self.is_empty()):
            return None
        
        node = self.pt_begin
        node_to_return = None

        while (node.next_node != None):
            if (node.value == value):
                node_to_return = node
                break

            node = node.next_node
        
        if (node.value == value):
            node_to_return = node
        
        return node_to_return
    
    def insert_in_begin(self, node_to_insert):
        self.pt_begin = node_to_insert
        return node_to_insert
    
    def to_native_list(self):
        if (self.is_empty()):
            return []
        
        native_list = []
        node = self.pt_begin
        while (node.next_node != None):
            native_list.append(node)
            node = node.next_node

        native_list.append(node)
        
        return native_list


def search_element(linked_list: SimpleLinkedList, value: int):
    print(f'\nProcurando pelo número {value}')
    founded = linked_list.find_node(value=value)

    if (founded != None):
        print('Elemento encontrado')
    else:
        print('Elemento não encontrado')


def main():
    linked_list = SimpleLinkedList()

    print(f'No início a lista está com {len(linked_list)} elementos')

    print('Inserindo 1')
    linked_list.push_back(1)

    print('Inserindo 3')
    linked_list.push_back(3)

    print('Inserindo 5')
    linked_list.push_back(5)

    print('\nLista ao final dos inserts elementos')
    print(linked_list.to_native_list())

    print(f'\nAgora a lista possui {len(linked_list)}')

    search_element(linked_list=linked_list, value=5)

    search_element(linked_list=linked_list, value=10)

    print('\nRemovendo o elemento 1')
    linked_list.remove_node(value=1)

    print('\nLista ao final do remove')
    print(linked_list.to_native_list())


main()
