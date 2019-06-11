class Branch:
    def __init__(self, value: int, left, right):
        self.value = value
        self.left = left
        self.right = right


def get_branch_to_insert(branch: Branch, value: int) -> Branch:
    if branch.value == value:
        return None
    
    # se value for maior, insere à direita
    if value> branch.value:
        return branch if branch.right == None else get_branch_to_insert(branch.right, value)
    
    # se value for menor, insere à esquerda
    return branch if branch.left == None else get_branch_to_insert(branch.left, value)

class BinaryTree:
    root = None

    def __init__(self, root: Branch):
        self.root = root
    
    def is_empty(self):
        return self.root == None
    
    def push(self, value: int) -> Branch: 
        branch = Branch(value=value, left=None, right=None)

        if self.is_empty():
            self.root = branch
            return branch
        
        branch_to_use = get_branch_to_insert(self.root, value)

        if branch_to_use is None:
            return branch
    
        if value > branch_to_use.value:
            branch_to_use.right = branch
            return branch
        
        branch_to_use.left = branch
        return branch
